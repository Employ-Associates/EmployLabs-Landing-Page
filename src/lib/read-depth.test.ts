import { describe, expect, it } from "vitest";

import { READ_DEPTH_THRESHOLDS, crossedThresholds, scrollDepthPct } from "@/lib/read-depth";

describe("scrollDepthPct", () => {
  it("measures to the bottom of the viewport, so an unscrolled 2-viewport page is half read", () => {
    expect(scrollDepthPct({ scrollY: 0, innerHeight: 800, scrollHeight: 1600 })).toBe(50);
  });

  it("reports 100 at the true bottom", () => {
    expect(scrollDepthPct({ scrollY: 800, innerHeight: 800, scrollHeight: 1600 })).toBe(100);
  });

  it("reports 100 for a document that cannot scroll — the whole post is on screen", () => {
    expect(scrollDepthPct({ scrollY: 0, innerHeight: 900, scrollHeight: 900 })).toBe(100);
    expect(scrollDepthPct({ scrollY: 0, innerHeight: 900, scrollHeight: 400 })).toBe(100);
  });

  it("never divides by zero on a not-yet-laid-out document", () => {
    const pct = scrollDepthPct({ scrollY: 0, innerHeight: 0, scrollHeight: 0 });
    expect(Number.isNaN(pct)).toBe(false);
    expect(pct).toBe(100);
  });

  it("clamps overscroll bounce at both ends", () => {
    expect(scrollDepthPct({ scrollY: -120, innerHeight: 100, scrollHeight: 1000 })).toBe(0);
    expect(scrollDepthPct({ scrollY: 5000, innerHeight: 800, scrollHeight: 1600 })).toBe(100);
  });

  it("is monotonic in scrollY down a long post", () => {
    const at = (scrollY: number) => scrollDepthPct({ scrollY, innerHeight: 800, scrollHeight: 8000 });
    const samples = [0, 1000, 2000, 4000, 7200].map(at);
    expect(samples).toEqual([...samples].sort((a, b) => a - b));
    expect(at(0)).toBeCloseTo(10);
    expect(at(7200)).toBe(100);
  });
});

describe("crossedThresholds", () => {
  it("returns every threshold reached on a first reading, ascending", () => {
    expect(crossedThresholds(50, [])).toEqual([25, 50]);
  });

  it("is inclusive at the boundary — landing exactly on 75 counts as 75", () => {
    expect(crossedThresholds(75, [25, 50])).toEqual([75]);
  });

  it("returns nothing for a threshold already fired, which is what stops hundreds of events", () => {
    expect(crossedThresholds(50, [25, 50])).toEqual([]);
    expect(crossedThresholds(74.9, [25, 50])).toEqual([]);
  });

  it("latches across a whole scroll: each threshold is yielded exactly once", () => {
    const fired: number[] = [];
    // A realistic burst: a scroll listener firing many times over the same page.
    for (const pct of [10, 26, 26.4, 40, 51, 51, 60, 76, 80, 99, 100, 100]) {
      for (const t of crossedThresholds(pct, fired)) fired.push(t);
    }
    expect(fired).toEqual([25, 50, 75, 100]);
  });

  it("fires all four at once when the post is shorter than the viewport", () => {
    expect(crossedThresholds(100, [])).toEqual([25, 50, 75, 100]);
  });

  it("yields nothing above the top of the page but below the first threshold", () => {
    expect(crossedThresholds(24.99, [])).toEqual([]);
  });

  it("covers exactly the four thresholds the event type admits", () => {
    expect([...READ_DEPTH_THRESHOLDS]).toEqual([25, 50, 75, 100]);
    expect(crossedThresholds(100, [])).toEqual([...READ_DEPTH_THRESHOLDS]);
  });
});
