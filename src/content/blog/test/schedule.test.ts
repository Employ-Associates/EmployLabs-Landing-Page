import { describe, it, expect } from "vitest";
import { publishInstant, isLive, PUBLISH_UTC_OFFSET } from "../schedule";

/**
 * ZONE D3 — the time/timezone boundary.
 *
 * RED-by-mutation: change `PUBLISH_LOCAL_HOUR` or `PUBLISH_UTC_OFFSET` in
 * schedule.ts, or revert `isLive` to a UTC calendar-date string comparison,
 * and the "regression" block below fails. The bracket values here are
 * HARDCODED rather than derived from the constants on purpose — deriving them
 * would move the bracket with the mutation and the test would stay green.
 */

describe("publishInstant", () => {
  it("resolves a date to 09:00 India time, which is 03:30 UTC", () => {
    // Hardcoded, not computed from PUBLISH_* — see the note above.
    expect(publishInstant("2026-09-04").toISOString()).toBe("2026-09-04T03:30:00.000Z");
  });

  it("uses a fixed +05:30 offset because Asia/Kolkata has no daylight saving", () => {
    expect(PUBLISH_UTC_OFFSET).toBe("+05:30");
    // Same wall-clock instant in January and July: no DST shift.
    expect(publishInstant("2026-01-04").toISOString()).toBe("2026-01-04T03:30:00.000Z");
    expect(publishInstant("2026-07-04").toISOString()).toBe("2026-07-04T03:30:00.000Z");
  });

  it("refuses anything that is not a plain yyyy-mm-dd date", () => {
    expect(() => publishInstant("2026-9-4")).toThrow();
    expect(() => publishInstant("2026-09-04T09:00:00Z")).toThrow();
    expect(() => publishInstant("")).toThrow();
  });
});

describe("isLive at the exact boundary", () => {
  const date = "2026-09-04";
  const instant = new Date("2026-09-04T03:30:00.000Z");

  it("is not live one millisecond before", () => {
    expect(isLive(date, new Date(instant.getTime() - 1))).toBe(false);
  });

  it("is live at exactly the instant", () => {
    expect(isLive(date, instant)).toBe(true);
  });

  it("is live one millisecond after", () => {
    expect(isLive(date, new Date(instant.getTime() + 1))).toBe(true);
  });
});

describe("regression: the UTC calendar-date bug this replaced", () => {
  /**
   * The original implementation was:
   *   const today = now.toISOString().slice(0, 10);
   *   return post.publishedAt <= today;
   *
   * Two failures it produced, both reproduced here as the difference between
   * that expression and `isLive`. If someone reverts to date-string comparison,
   * these fail.
   */
  const utcDateCompare = (publishedAt: string, now: Date) => publishedAt <= now.toISOString().slice(0, 10);

  it("does not publish a post at 05:30 India time just because UTC rolled over", () => {
    // 00:30 IST on 4 Sept = 19:00 UTC on 3 Sept. Neither says live. Fine.
    // 06:00 IST on 4 Sept = 00:30 UTC on 4 Sept: UTC has rolled over, IST has
    // not reached 09:00. The old code published here; we must not.
    const sixAmIst = new Date("2026-09-04T00:30:00.000Z");
    expect(utcDateCompare("2026-09-04", sixAmIst)).toBe(true); // the bug
    expect(isLive("2026-09-04", sixAmIst)).toBe(false); // the fix
  });

  it("still counts a post as live late on its own evening in India", () => {
    // 23:00 IST on 4 Sept = 17:30 UTC on 4 Sept. Both agree; this is the
    // control, and without it "never live" would also pass the test above.
    const elevenPmIst = new Date("2026-09-04T17:30:00.000Z");
    expect(isLive("2026-09-04", elevenPmIst)).toBe(true);
  });

  it("does not treat a post as live on the evening before, in India", () => {
    // 22:00 IST on 3 Sept = 16:30 UTC on 3 Sept.
    const nightBefore = new Date("2026-09-03T16:30:00.000Z");
    expect(isLive("2026-09-04", nightBefore)).toBe(false);
  });
});
