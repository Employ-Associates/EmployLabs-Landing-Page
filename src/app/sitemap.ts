import type { MetadataRoute } from "next";
import { livePosts, SITE_URL } from "@/content/blog";
import { buildSitemapEntries } from "@/content/blog/builders";

/**
 * ⛔⛔ `revalidate` DOES NOT WORK HERE. IT WAS TRIED AND IT FAILED IN PRODUCTION.
 *
 * `sitemap.ts` is a metadata file, not an ordinary Route Handler, and Next's
 * own docs say it is "cached by default unless it uses a Request-time API or
 * dynamic config option". An `export const revalidate = 3600` is neither, so it
 * is silently ignored: the sitemap is generated once at build and never again.
 *
 * That is exactly what happened. Three posts published on schedule over three
 * days — the index, the slug routes, the RSS feed and llms.txt all picked them
 * up — while the sitemap kept serving the three posts that existed at build
 * time, with a `lastmod` frozen at the build timestamp. Nothing errored. Search
 * engines were being handed a stale map of the site.
 *
 * `force-dynamic` is the fix the doc prescribes. The cost is that this renders
 * per request rather than from cache, which is nothing: it is a pure map over
 * an in-memory array of two dozen posts, with no I/O.
 *
 * ⚠ Do NOT "optimise" this back to `revalidate`. `feed.xml` and `llms.txt` are
 * real route handlers and revalidate correctly there — that difference is the
 * trap. Pinned by `route-execution.test.ts`.
 */
export const dynamic = "force-dynamic";

export default function sitemap(): MetadataRoute.Sitemap {
  // Scheduled posts are absent until their publish instant — livePosts() is the gate.
  return buildSitemapEntries(livePosts(), SITE_URL, new Date());
}
