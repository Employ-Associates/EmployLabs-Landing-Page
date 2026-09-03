import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";
import { livePosts, __allPostsForTests, SITE_URL } from "..";
import { buildPostJsonLd, buildFeedXml, buildLlmsTxt, buildBlogIndexJsonLd } from "../builders";

/**
 * ZONE A1 — the AEO seams.
 *
 * Two claims are proven here:
 *  1. `post.answer` is the SINGLE source for the on-page summary, the JSON-LD
 *     description, the feed description and the llms.txt entry, so the
 *     machine-readable claim cannot drift from the human-readable one.
 *  2. The category filter cannot remove a post from server-rendered HTML,
 *     because it never touches the list.
 *
 * RED-by-mutation: give the JSON-LD its own description string, or make
 * BlogFilter render a filtered list instead of `children`, and these fail.
 */

const ALL = __allPostsForTests();
const NOW = new Date("2026-11-01T12:00:00.000Z"); // after the last scheduled post
const LIVE = livePosts(NOW);

describe("post.answer is the one source for every summary", () => {
  it("the fixture covers all twelve posts", () => {
    expect(LIVE.length).toBe(ALL.length);
  });

  for (const p of LIVE) {
    it(`${p.slug}: JSON-LD description and abstract are the on-page answer`, () => {
      const graph = buildPostJsonLd(p, SITE_URL)["@graph"] as Record<string, unknown>[];
      const posting = graph.find((n) => n["@type"] === "BlogPosting")!;
      expect(posting.description).toBe(p.answer);
      expect(posting.abstract).toBe(p.answer);
    });
  }

  it("the feed description for each post is that post's answer", () => {
    const xml = buildFeedXml(LIVE, SITE_URL);
    for (const p of LIVE) {
      const escaped = p.answer.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
      expect(xml, `feed lost the answer for ${p.slug}`).toContain(escaped);
    }
  });

  it("llms.txt carries every post's answer verbatim", () => {
    const txt = buildLlmsTxt(LIVE, SITE_URL);
    for (const p of LIVE) expect(txt, `llms.txt lost ${p.slug}`).toContain(p.answer);
  });

  it("the index JSON-LD uses the same answer per post", () => {
    const idx = buildBlogIndexJsonLd(LIVE, SITE_URL) as { blogPost: { url: string; description: string }[] };
    for (const p of LIVE) {
      const entry = idx.blogPost.find((b) => b.url.endsWith(p.slug))!;
      expect(entry.description).toBe(p.answer);
    }
  });
});

describe("every answer is usable as a standalone claim", () => {
  /**
   * The contract in types.ts: an assistant reading only `answer` must be able
   * to answer the title's question. These are the mechanical parts of that.
   */
  for (const p of ALL) {
    it(`${p.slug}: answer is self-contained`, () => {
      const words = p.answer.trim().split(/\s+/).length;
      expect(words, "too short to stand alone").toBeGreaterThanOrEqual(30);
      expect(words, "too long to quote").toBeLessThanOrEqual(90);
      // Must not open with a pronoun that needs the title for a referent.
      expect(/^(it|this|that|they|these|those)\b/i.test(p.answer.trim())).toBe(false);
    });
  }
});

describe("the category filter cannot hide posts from server-rendered HTML", () => {
  const filterSrc = readFileSync("src/components/blog/BlogFilter.tsx", "utf8");
  const cssSrc = readFileSync("src/app/globals.css", "utf8");
  const indexSrc = readFileSync("src/app/blog/page.tsx", "utf8");

  it("BlogFilter renders its children rather than a list it builds", () => {
    expect(filterSrc).toContain("{children}");
    // It must not reach for the POSTS itself — that would move the list
    // client-side and drop every card from the initial HTML. Importing
    // `@/content/blog/types` is fine and expected (it needs the category
    // union), so the registry import is matched exactly rather than by
    // substring: `from "@/content/blog"` with the quote immediately after.
    expect(filterSrc).not.toContain("livePosts");
    expect(filterSrc).not.toMatch(/from\s+"@\/content\/blog"/);
  });

  it("the index renders the cards on the server, inside the filter", () => {
    expect(indexSrc).toContain("livePosts()");
    expect(indexSrc).toContain("<BlogFilter>");
    expect(indexSrc).toContain("<PostCard");
  });

  it("hiding is done by CSS, for every category", () => {
    for (const cat of ["update", "article", "compare"]) {
      expect(cssSrc, `no CSS rule hides non-${cat} cards`).toContain(`[data-blog-filter="${cat}"]`);
    }
    expect(cssSrc).toContain("display: none");
  });
});
