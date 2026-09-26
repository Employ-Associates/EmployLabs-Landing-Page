"use client";

import { useEffect } from "react";

import { track } from "@/lib/analytics-events";
import { READ_DEPTH_THRESHOLDS, crossedThresholds, scrollDepthPct } from "@/lib/read-depth";

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
 * ⚠ `post.readingMinutes` rides along so a report can separate "read 100% of a
 * 2-minute update" from "read 100% of a 12-minute comparison" without a join.
 */
export type ReadDepthTrackerProps = {
  postSlug: string;
  readingMinutes: number;
};

export function ReadDepthTracker({ postSlug, readingMinutes }: ReadDepthTrackerProps) {
  useEffect(() => {
    const fired: number[] = [];

    const report = () => {
      const pct = scrollDepthPct({
        scrollY: window.scrollY,
        innerHeight: window.innerHeight,
        scrollHeight: document.documentElement.scrollHeight,
      });

      for (const depth of crossedThresholds(pct, fired)) {
        fired.push(depth);
        track({
          name: "post_read_depth",
          params: { post_slug: postSlug, depth_pct: depth, reading_minutes: readingMinutes },
        });
      }

      if (fired.length === READ_DEPTH_THRESHOLDS.length) {
        window.removeEventListener("scroll", report);
      }
    };

    // Measure once on mount: a post shorter than the viewport is fully read
    // without a single scroll event ever firing, and would otherwise report
    // nothing at all.
    report();
    window.addEventListener("scroll", report, { passive: true });
    return () => window.removeEventListener("scroll", report);
  }, [postSlug, readingMinutes]);

  return null;
}
