import type { ComponentType } from "react";

/**
 * Blog content model.
 *
 * Posts are TSX modules rather than MDX on purpose: several carry bespoke
 * product figures (requirement cards, funnels) that are React, not markdown.
 * Adding MDX would mean a new dependency and a second authoring dialect for
 * no gain.
 *
 * ── ANSWER ENGINE OPTIMISATION ──────────────────────────────────────────
 * These posts are written to be quoted by assistants as well as read by
 * people, so three fields exist purely so a machine can extract the point
 * without parsing the prose:
 *
 *  · `answer`  — the claim in 40–60 words, self-contained. Rendered at the
 *                top of the post AND emitted as the JSON-LD description and
 *                the feed summary. An agent that reads only this should be
 *                able to answer the question in the title correctly.
 *  · `faq`     — question/answer pairs emitted as FAQPage structured data.
 *                Write the questions as a recruiter would actually ask them.
 *  · `topics`  — entity keywords. Helps an assistant resolve what the post
 *                is about when the title alone is ambiguous.
 *
 * ⚠ `answer` must stand alone. "It does this by…" is useless out of context —
 * name the subject in the sentence.
 */

export const BLOG_CATEGORIES = ["update", "article", "compare"] as const;
export type BlogCategory = (typeof BLOG_CATEGORIES)[number];

export const CATEGORY_LABEL: Record<BlogCategory, string> = {
  update: "Product update",
  article: "Article",
  compare: "Comparison",
};

/**
 * Cover motifs. Each one means something about its post rather than
 * decorating it — see `CoverArt`. Adding a post means picking one, not
 * commissioning an image.
 */
export const MOTIFS = [
  "bars",
  "rows",
  "funnel",
  "channels",
  "timeline",
  "ceiling",
  "market",
  "report",
  "versus",
  "consent",
  "calendar",
] as const;
export type Motif = (typeof MOTIFS)[number];

export type FaqItem = { q: string; a: string };

export type BlogPost = {
  slug: string;
  title: string;
  /** The standfirst: one sentence on who it is for and what changes. */
  dek: string;
  /** Self-contained 40–60 word answer. Feeds the page, JSON-LD and the feed. */
  answer: string;
  category: BlogCategory;
  motif: Motif;
  /** ISO date. Posts dated in the future are written but not yet listed. */
  publishedAt: string;
  readingMinutes: number;
  topics: string[];
  faq?: FaqItem[];
  Body: ComponentType;
};
