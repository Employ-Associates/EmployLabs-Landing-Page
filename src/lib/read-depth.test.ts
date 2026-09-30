import { describe, expect, it } from "vitest";

import { READ_DEPTH_THRESHOLDS, articleDepthPct, crossedThresholds } from "@/lib/read-depth";

describe("articleDepthPct", () => {
  const at = (articleTop: number, articleHeight = 4000, viewportHeight = 800) =>
    articleDepthPct({ articleTop, articleHeight, viewportHeight });

  it("measures the article to the bottom of the viewport", () => {
    // Top 200px down an 800px viewport: 600px of a 4000px article is in view.
    expect(at(200)).toBe(15);
    // Scrolled so the article's top is 1200px above the viewport: 2000 / 4000.
    expect(at(-1200)).toBe(50);
  });

  it("reports 100 only once the article's END reaches the viewport bottom", () => {
    expect(at(-3200)).toBe(100); // 800 - (-3200) = 4000
    expect(at(-3199)).toBeLessThan(100);
  });

  it("ignores the page around the article: a 600px footer below cannot add depth", () => {
    // Same article position, whatever follows it — the old document-wide ratio
    // moved with scrollHeight; this has no input for it at all.
    expect(at(-1200, 4000, 800)).toBe(50);
  });

  it("is 0 while the article is still below the fold", () => {
    expect(at(900)).toBe(0);
    expect(at(800)).toBe(0);
  });

  it("is 100 for a short article wholly in view — a genuine read on load", () => {
    expect(at(100, 500, 800)).toBe(100);
  });

  it.each([
    ["not laid out", 0, 0, 0],
    ["zero height", 100, 0, 800],
    ["negative height", 100, -5, 800],
    ["zero viewport", 0, 4000, 0],
    ["NaN top", Number.NaN, 4000, 800],
    ["infinite height", 0, Number.POSITIVE_INFINITY, 800],
  ])("an unmeasurable article (%s) is 0, never 100", (_label, articleTop, articleHeight, viewportHeight) => {
    const pct = articleDepthPct({ articleTop, articleHeight, viewportHeight });
    expect(pct).toBe(0);
    expect(crossedThresholds(pct, [])).toEqual([]);
  });

  it("is monotonic as the reader scrolls down a long post", () => {
    const samples = [200, -500, -1500, -2500, -3200, -5000].map((top) => at(top));
    expect(samples).toEqual([...samples].sort((a, b) => a - b));
    expect(samples.at(-1)).toBe(100);
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
