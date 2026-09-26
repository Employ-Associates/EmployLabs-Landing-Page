"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";

/**
 * Emits a `page_view` on every client-side route change.
 *
 * ⛔⛔ WITHOUT THIS, ONLY THE LANDING PAGE OF A VISIT IS EVER RECORDED.
 * `gtag('config', …)` fires exactly ONE page_view, at load. Next's App Router
 * then navigates by `history.pushState`, which gtag does not observe — so a
 * visitor who arrives on `/` and reads three posts counts as a single view of
 * `/`, and every blog post reads as zero unless somebody lands on it directly.
 *
 * ⚠️ MEASURED IN PRODUCTION 2026-09-25, before this existed: loaded
 * employlabs.ai, clicked Blog in the nav, and watched the network. ONE
 * `/g/collect` request, `dl=https://employlabs.ai/`. The navigation produced
 * nothing. The blog is this site's main content asset and it was invisible.
 *
 * ⭐ The config call now passes `send_page_view:false` so the first view comes
 * from this effect too — one code path for every view, rather than the library
 * emitting the first and this emitting the rest, which is how the two drift.
 *
 * No url scrubbing here, deliberately: this site's paths carry no tokens and no
 * personal data, and `/blog/[slug]` carries a public post slug we WANT in
 * reports. That is the opposite of app.employlabs.ai and is a decision, not an
 * oversight.
 */
export function PageViewTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const search = searchParams.toString();

  useEffect(() => {
    // ⛔ Push through the global `gtag` the inline snippet defines — it forwards
    // `arguments`, which is the only shape gtag.js executes. Never
    // `dataLayer.push([...])`: a real Array is silently discarded.
    const gtag = (window as unknown as { gtag?: (...a: unknown[]) => void }).gtag;
    if (typeof gtag !== "function") return;

    gtag("event", "page_view", {
      page_location: `${window.location.origin}${pathname}${search === "" ? "" : `?${search}`}`,
      page_title: document.title,
    });
  }, [pathname, search]);

  return null;
}
