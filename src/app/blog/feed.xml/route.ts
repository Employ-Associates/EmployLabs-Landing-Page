import { livePosts, SITE_URL } from "@/content/blog";
import { buildFeedXml } from "@/content/blog/builders";

export const dynamic = "force-static";
export const revalidate = 3600;

export function GET() {
  return new Response(buildFeedXml(livePosts(), SITE_URL), {
    headers: { "content-type": "application/rss+xml; charset=utf-8" },
  });
}
