import type { MetadataRoute } from "next";
import { SITE_URL } from "@/content/blog";

/**
 * ⚠ THIS FILE IS A BUSINESS DECISION, NOT A TECHNICAL ONE.
 *
 * The assistant crawlers below are allowed on purpose: being quotable in
 * ChatGPT, Claude, Perplexity and Google's AI answers is the whole point of
 * writing the posts the way we did (answer-first blocks, FAQ structured data).
 * The trade is that this content may also be used as training data.
 *
 * If that trade is ever refused, disallow the named agents here — do NOT try
 * to solve it by removing structured data, which would cost the citations
 * without preventing the training.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      // Answer engines — explicitly welcome.
      { userAgent: "GPTBot", allow: "/" },
      { userAgent: "OAI-SearchBot", allow: "/" },
      { userAgent: "ChatGPT-User", allow: "/" },
      { userAgent: "ClaudeBot", allow: "/" },
      { userAgent: "Claude-User", allow: "/" },
      { userAgent: "PerplexityBot", allow: "/" },
      { userAgent: "Google-Extended", allow: "/" },
      { userAgent: "Applebot-Extended", allow: "/" },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
