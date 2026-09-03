import type { MetadataRoute } from "next";
import { livePosts, SITE_URL } from "@/content/blog";
import { buildSitemapEntries } from "@/content/blog/builders";

export const revalidate = 3600;

export default function sitemap(): MetadataRoute.Sitemap {
  // Scheduled posts are absent until their publish instant — livePosts() is the gate.
  return buildSitemapEntries(livePosts(), SITE_URL, new Date());
}
