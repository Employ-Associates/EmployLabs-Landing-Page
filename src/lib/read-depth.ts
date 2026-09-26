/**
 * Read-depth geometry, kept pure so it can be tested without a DOM.
 *
 * GA4's automatic scroll tracking is OFF for this property (and it only ever
 * fires a single 90% event anyway), so post read-depth is entirely custom.
 */

export const READ_DEPTH_THRESHOLDS = [25, 50, 75, 100] as const;

export type ReadDepthThreshold = (typeof READ_DEPTH_THRESHOLDS)[number];

export type ScrollGeometry = {
  /** `window.scrollY`. */
  scrollY: number;
  /** `window.innerHeight`. */
  innerHeight: number;
  /** `document.documentElement.scrollHeight`. */
  scrollHeight: number;
};

/**
 * How much of the document the reader has seen, 0–100.
 *
 * Measured to the BOTTOM of the viewport, not to the scroll offset: on a page
 * two viewports tall, a reader who has not scrolled at all has still read the
 * first half. Using `scrollY / scrollable` instead would report 0% for someone
 * looking at half the article, and would report 100% for a page that does not
 * scroll only by accident of dividing by zero.
 *
 * ⭐ THE CLAMP IS LOAD-BEARING, NOT DEFENSIVE. It is what makes the two real
 * edges correct rather than a separate special case: overscroll bounce reports a
 * negative `scrollY` at the top and an over-long one at the bottom, and a post
 * SHORTER than the viewport produces a ratio above 1, which clamps to a fully
 * read 100%. An explicit `scrollHeight <= innerHeight` branch was written here
 * first and deleted: it was unreachable, because the clamp already returned 100
 * for every input it claimed to handle. Only the zero guard below is reachable.
 */
export const scrollDepthPct = ({ scrollY, innerHeight, scrollHeight }: ScrollGeometry): number => {
  // Guards a document that has not been laid out yet: 0/0 is NaN, and NaN passes
  // straight through both clamp comparisons.
  if (scrollHeight <= 0) return 100;
  const pct = ((scrollY + innerHeight) / scrollHeight) * 100;
  if (pct < 0) return 0;
  if (pct > 100) return 100;
  return pct;
};

/**
 * The thresholds this scroll position newly crosses.
 *
 * ⛔ THE LATCH IS THE POINT. A scroll listener fires tens of times a second;
 * without `alreadyFired` a single flick down an article emits hundreds of
 * identical events, which costs nothing to write and ruins the metric.
 * Boundaries are inclusive (`>=`), so landing exactly on 50% counts as 50%.
 */
export const crossedThresholds = (
  pct: number,
  alreadyFired: readonly number[],
): ReadDepthThreshold[] =>
  READ_DEPTH_THRESHOLDS.filter((t) => pct >= t && !alreadyFired.includes(t));
