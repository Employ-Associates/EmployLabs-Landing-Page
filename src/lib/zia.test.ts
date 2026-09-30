import { describe, expect, it } from "vitest";

import type { CandidateCtaLocation } from "@/lib/analytics-events";
import { ziaCandidateUrl } from "@/lib/zia";

const LOCATIONS: CandidateCtaLocation[] = [
  "nav_top",
  "nav_capsule",
  "nav_mobile",
  "footer_band",
  "agents_zia",
];

describe("ziaCandidateUrl", () => {
  it.each(LOCATIONS)("builds the exact referral url for %s", (location) => {
    expect(ziaCandidateUrl(location)).toBe(
      `https://itszia.ai/login?utm_source=employlabs&utm_medium=referral&utm_campaign=candidate_cta&utm_content=${location}`,
    );
  });

  it.each(LOCATIONS)("parses to the apex host, the /login path and exactly four utm params (%s)", (location) => {
    const url = new URL(ziaCandidateUrl(location));
    expect(url.protocol).toBe("https:");
    // www.itszia.ai 404s; /talk 307s to /login and drops the query.
    expect(url.host).toBe("itszia.ai");
    expect(url.pathname).toBe("/login");
    expect(Object.fromEntries(url.searchParams)).toEqual({
      utm_source: "employlabs",
      utm_medium: "referral",
      utm_campaign: "candidate_cta",
      utm_content: location,
    });
    expect([...url.searchParams.keys()]).toHaveLength(4);
    expect(url.hash).toBe("");
  });

  it("gives every location a distinct url", () => {
    expect(new Set(LOCATIONS.map(ziaCandidateUrl)).size).toBe(LOCATIONS.length);
  });
});
