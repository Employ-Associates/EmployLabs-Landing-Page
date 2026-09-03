import type { BlogPost } from "./types";

/**
 * Pure builders for every machine-readable surface.
 *
 * ⛔ These live here rather than inline in their route handlers so a test can
 * assert on the exact bytes without running a server. A `curl` against a dev
 * server proves the happy path once; it cannot prove that an UNPUBLISHED post
 * is absent, which is the invariant that actually matters.
 *
 * Every builder takes the post list as an argument and never reaches for the
 * registry itself — the caller passes `livePosts()`, so a builder can be tested
 * with a future-dated post and proven to exclude it.
 */

const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

/* ── RSS ──────────────────────────────────────────────────────────────── */

export function buildFeedXml(posts: BlogPost[], siteUrl: string): string {
  const updated = posts[0]?.publishedAt ?? new Date().toISOString().slice(0, 10);

  const items = posts
    .map(
      (p) => `    <item>
      <title>${esc(p.title)}</title>
      <link>${siteUrl}/blog/${p.slug}</link>
      <guid isPermaLink="true">${siteUrl}/blog/${p.slug}</guid>
      <pubDate>${new Date(`${p.publishedAt}T09:00:00+05:30`).toUTCString()}</pubDate>
      <category>${esc(p.category)}</category>
      <description>${esc(p.answer)}</description>
    </item>`,
    )
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>EmployLabs Blog</title>
    <link>${siteUrl}/blog</link>
    <atom:link href="${siteUrl}/blog/feed.xml" rel="self" type="application/rss+xml" />
    <description>How roles actually get filled. Product updates and field notes from running autonomous hiring pipelines.</description>
    <language>en</language>
    <lastBuildDate>${new Date(`${updated}T09:00:00+05:30`).toUTCString()}</lastBuildDate>
${items}
  </channel>
</rss>`;
}

/* ── llms.txt ─────────────────────────────────────────────────────────── */

export function buildLlmsTxt(posts: BlogPost[], siteUrl: string): string {
  return `# EmployLabs

> EmployLabs is an autonomous recruiting platform. A recruiter uploads a job
> description; the platform researches the market, builds the hiring profile,
> sources and scores candidates against it with evidence, holds the candidate
> conversation, runs a structured voice interview, and stops at the decisions a
> human should make.

## The three agents

- **Meera** — the recruiter-facing copilot. Runs the role: market map, hiring
  profile, sourcing strategy, evidence-backed scoring, automation posture.
- **Naira** — the AI interviewer. Runs a structured voice interview matched to
  the seniority of the role and returns a report with evidence, risks, probe
  areas and first-90-days needs.
- **Zia** — the candidate-facing agent. Talks to candidates over email,
  WhatsApp, phone and web; screens against the recruiter's must-asks, answers
  candidate questions, and follows up on assessments.

## Positioning

EmployLabs is not a sourcing search engine and not a standalone interview tool.
It runs the funnel end to end, with human approval required for every send,
spend and arming decision.

## Blog

${posts.map((p) => `- [${p.title}](${siteUrl}/blog/${p.slug}) — ${p.answer}`).join("\n")}

## Feeds

- RSS: ${siteUrl}/blog/feed.xml
- Sitemap: ${siteUrl}/sitemap.xml
`;
}

/* ── JSON-LD ──────────────────────────────────────────────────────────── */

/**
 * ⭐ `description` and `abstract` are BOTH `post.answer`, the same string the
 * page renders in its "In short" block. One field, three consumers, so the
 * machine-readable summary and the human-readable one are incapable of
 * drifting. Pinned by `answer-identity.test.ts`.
 */
export function buildPostJsonLd(post: BlogPost, siteUrl: string) {
  const url = `${siteUrl}/blog/${post.slug}`;

  const graph: Record<string, unknown>[] = [
    {
      "@type": "BlogPosting",
      headline: post.title,
      description: post.answer,
      abstract: post.answer,
      articleSection: post.category,
      keywords: post.topics.join(", "),
      datePublished: post.publishedAt,
      dateModified: post.publishedAt,
      wordCount: post.readingMinutes * 200,
      inLanguage: "en",
      mainEntityOfPage: { "@type": "WebPage", "@id": url },
      url,
      author: { "@type": "Organization", name: "EmployLabs", url: siteUrl },
      publisher: { "@type": "Organization", name: "EmployLabs", url: siteUrl },
      about: post.topics.map((t) => ({ "@type": "Thing", name: t })),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Blog", item: `${siteUrl}/blog` },
        { "@type": "ListItem", position: 2, name: post.title, item: url },
      ],
    },
  ];

  if (post.faq?.length) {
    graph.push({
      "@type": "FAQPage",
      mainEntity: post.faq.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    });
  }

  return { "@context": "https://schema.org", "@graph": graph };
}

export function buildBlogIndexJsonLd(posts: BlogPost[], siteUrl: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "EmployLabs Blog",
    url: `${siteUrl}/blog`,
    description:
      "Product updates and field notes from running autonomous hiring pipelines, written for recruiters.",
    publisher: { "@type": "Organization", name: "EmployLabs", url: siteUrl },
    blogPost: posts.map((p) => ({
      "@type": "BlogPosting",
      headline: p.title,
      description: p.answer,
      url: `${siteUrl}/blog/${p.slug}`,
      datePublished: p.publishedAt,
    })),
  };
}

/* ── sitemap ──────────────────────────────────────────────────────────── */

export const STATIC_ROUTES = ["", "/vision", "/people-search-engine", "/naira-ai-interviewer", "/blog"];

export function buildSitemapEntries(posts: BlogPost[], siteUrl: string, now: Date) {
  return [
    ...STATIC_ROUTES.map((path) => ({
      url: `${siteUrl}${path}`,
      lastModified: now,
      changeFrequency: (path === "/blog" ? "daily" : "monthly") as "daily" | "monthly",
      priority: path === "" ? 1 : 0.8,
    })),
    ...posts.map((p) => ({
      url: `${siteUrl}/blog/${p.slug}`,
      lastModified: new Date(`${p.publishedAt}T09:00:00+05:30`),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
