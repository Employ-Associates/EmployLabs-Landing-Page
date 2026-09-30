/**
 * Read-depth geometry, kept pure so it can be tested without a DOM.
 *
 * GA4's automatic scroll tracking is OFF for this property (and it only ever
 * fires a single 90% event anyway), so post read-depth is entirely custom.
 */

export const READ_DEPTH_THRESHOLDS = [25, 50, 75, 100] as const;

export type ReadDepthThreshold = (typeof READ_DEPTH_THRESHOLDS)[number];

/**
 * Where the article sits relative to the viewport, read from
 * `article.getBoundingClientRect()` and `window.innerHeight`.
 */
export type ArticleGeometry = {
  /** `rect.top`: the article's top edge, relative to the top of the viewport. */
  articleTop: number;
  /** `rect.height`. */
  articleHeight: number;
  /** `window.innerHeight`. */
  viewportHeight: number;
};

/**
 * How much of the ARTICLE has come into view, 0–100: the share of its height
 * above the bottom edge of the viewport.
 *
 * ⭐ ANCHORED TO THE ARTICLE, NOT THE DOCUMENT. The page around a post carries
 * the nav, the related-posts block and a tall footer; a document-wide ratio
 * counts those as reading, so the number depends on the chrome rather than the
 * prose, and a reader who stops at the last paragraph never reaches 100.
 *
 * Measured to the BOTTOM of the viewport: a reader who has not scrolled has
 * still seen everything on screen. So a short article fully in view on load
 * is legitimately 100% — that is a read, not an artefact.
 *
 * ⛔ UNMEASURABLE IS 0, NEVER 100. An article with no height (not laid out,
 * hidden) or a zero-height viewport is not evidence that anyone read anything;
 * reporting it as complete would fire every threshold for a reader who saw
 * nothing. Non-finite inputs are treated the same way, because NaN passes
 * straight through both clamp comparisons.
 *
 * The clamp covers the two real edges: an article still below the fold is
 * negative (→ 0), and one scrolled wholly past the viewport bottom is above
 * 1 (→ 100).
 */
export const articleDepthPct = ({ articleTop, articleHeight, viewportHeight }: ArticleGeometry): number => {
  if (!Number.isFinite(articleTop) || !Number.isFinite(articleHeight) || !Number.isFinite(viewportHeight)) return 0;
  if (articleHeight <= 0 || viewportHeight <= 0) return 0;
  const pct = ((viewportHeight - articleTop) / articleHeight) * 100;
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
