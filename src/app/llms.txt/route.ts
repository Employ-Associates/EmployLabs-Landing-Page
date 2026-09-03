import { livePosts, SITE_URL } from "@/content/blog";
import { buildLlmsTxt } from "@/content/blog/builders";

export const dynamic = "force-static";
export const revalidate = 3600;

/**
 * /llms.txt — the emerging convention for handing an assistant a clean map of
 * a site instead of making it infer one from navigation and marketing copy.
 * Content lives in `builders.ts` so a test can prove an unpublished post is
 * absent from it.
 */
export function GET() {
  return new Response(buildLlmsTxt(livePosts(), SITE_URL), {
    headers: { "content-type": "text/plain; charset=utf-8" },
  });
}
