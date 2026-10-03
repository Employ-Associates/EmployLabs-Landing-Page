"use client";

import { useEffect } from "react";

import { track } from "@/lib/analytics-events";
import { READ_DEPTH_THRESHOLDS, articleDepthPct, crossedThresholds } from "@/lib/read-depth";

/**
 * Emits `post_read_depth` at 25 / 50 / 75 / 100%, once each per pageview.
 *
 * ⛔ GA4's automatic scroll tracking is OFF for this property, so without this
 * a post's engagement is indistinguishable from a bounce: a reader who finishes
 * a 9-minute article and a reader who leaves in two seconds both produce
 * exactly one `page_view` and nothing else.
 *
 * ⛔ THE LATCH IS NOT AN OPTIMISATION. A scroll listener fires tens of times a
 * second; unlatched, one flick down an article is hundreds of identical events.
 * The `fired` set lives inside the effect, so it resets exactly when the effect
 * re-runs — i.e. on a new slug, which is a new pageview. That is also why the
 * listener detaches once all four have gone: after 100% there is nothing left
 * to observe.
 *
 * ⚠ A plain `window` scroll listener is correct here even though Lenis is
 * mounted: Lenis runs in real-scroll mode, so it moves the actual document
 * scroll position. `Nav.tsx:15-23` already relies on exactly this.
 *
 * ⭐ DEPTH IS MEASURED ON THE PROSE, found by `articleId`, not on the whole
 * document — see `articleDepthPct`. If the element is missing or has no height
 * the reading is 0 and nothing is reported: a missing anchor must never look
 * like a finished read.
 *
 * ⚠ `post.readingMinutes` rides along so a report can separate "read 100% of a
 * 2-minute update" from "read 100% of a 12-minute comparison" without a join.
 */
export type ReadDepthTrackerProps = {
  postSlug: string;
  readingMinutes: number;
  /** The `id` of the element that holds the post's prose — nothing around it. */
  articleId: string;
};

export function ReadDepthTracker({ postSlug, readingMinutes, articleId }: ReadDepthTrackerProps) {
  useEffect(() => {
    const fired: number[] = [];

    const report = () => {
      const article = document.getElementById(articleId);
      if (!article) return;
      const rect = article.getBoundingClientRect();
      const pct = articleDepthPct({
        articleTop: rect.top,
        articleHeight: rect.height,
        viewportHeight: window.innerHeight,
      });

      for (const depth of crossedThresholds(pct, fired)) {
        fired.push(depth);
        track({
          name: "post_read_depth",
          params: { post_slug: postSlug, depth_pct: depth, reading_minutes: readingMinutes },
        });
      }

      if (fired.length === READ_DEPTH_THRESHOLDS.length) detach();
    };

    const detach = () => {
      window.removeEventListener("scroll", report);
      window.removeEventListener("resize", report);
    };

    // Measure once on mount: an article already fully in view is read without
    // a single scroll event ever firing. This reports only what is genuinely on
    // screen — an unlaid-out article measures 0 and reports nothing.
    // `resize` catches the viewport growing past the article with no scroll.
    report();
    window.addEventListener("scroll", report, { passive: true });
    window.addEventListener("resize", report, { passive: true });
    return detach;
  }, [postSlug, readingMinutes, articleId]);

  return null;
}
