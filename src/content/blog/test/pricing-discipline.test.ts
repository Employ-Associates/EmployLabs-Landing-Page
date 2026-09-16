import { describe, it, expect } from "vitest";
import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";
import { __allPostsForTests } from "..";

/**
 * Pricing MODELS may be discussed. Specific COMMERCIALS may not.
 *
 * ⭐ THE LINE, set by the founder: *"The pricing models can and should be talked
 * about, but not specific commercials."* Explaining how agencies charge — a
 * percentage of first-year salary — or how a platform charges — per action,
 * per seat, by subscription — is useful to a buyer and is exactly the kind of
 * thing this blog should be good at. What may never appear is a NUMBER attached
 * to money: a rate, an amount, a fee percentage, a price list.
 *
 * ⚠ An earlier version of this file banned the model vocabulary itself and was
 * wrong. It would have refused "agencies commonly charge a percentage of
 * first-year salary", which is a true and helpful sentence about the market.
 * The discriminator is the figure, not the concept.
 *
 * TWO SCOPES, deliberately different:
 *
 *  1. SPECIFIC COMMERCIALS — refused on EVERY post. `comparison-discipline.ts`
 *     only inspects `category === "compare"`, so a rate quoted in a product post
 *     was invisible to the whole suite. A price is a price wherever it is named.
 *
 *  2. THE PRICE AXIS — refused on `compare` posts only, which is the standing
 *     rule in `COMPARISON-POSTS.md`: *"Pricing is not an axis… a buyer who chose
 *     on price leaves on price."* This is not about naming figures; it is about
 *     refusing to make cost the dimension a comparison turns on, whether as a
 *     "Cost basis" table row or a "cheaper than" sentence. a388101 removed
 *     exactly that from `employlabs-vs-a-recruitment-agency` by hand.
 *     ⛔ Product posts are NOT in this scope on purpose: "cheaper than leaving
 *     the seat empty" (notice-periods-…) and "cheaper than finding it in the
 *     replies three weeks later" (every-question-in-one-turn) are about waste,
 *     not about us, and a blanket ban fails on correct prose. Verified against
 *     the real corpus, not guessed.
 *
 * ⚠ `topics` is stripped before matching: it is an SEO keyword field, where
 * "cost per hire" is a legitimate search term (`set-a-budget-…`,
 * `recruiting-metrics-…`) and not something a reader is ever told.
 *
 * RED-by-mutation: put a figure on it — "a fee of 8.33% of the hire's first-year
 * salary", "₹2,50,000 per hire" — and the matching spec fails, naming the file
 * and quoting the phrase. Removing the figure passes again, which is the line.
 */

const POSTS_DIR = join(import.meta.dirname, "..", "posts");

/** Metadata keywords are not claims made to a reader. */
const stripTopics = (source: string) => source.replace(/topics:\s*\[[^\]]*\]/gs, "");

const SOURCES = __allPostsForTests().map((p) => {
  const file = readdirSync(POSTS_DIR).find((f) => f === `${p.slug}.tsx`);
  if (!file) throw new Error(`no source file for post ${p.slug}`);
  return {
    slug: p.slug,
    category: p.category,
    source: stripTopics(readFileSync(join(POSTS_DIR, file), "utf8")),
  };
});

/**
 * A figure attached to money. The concept is allowed; the number is not.
 * Each pattern requires a digit, so model vocabulary passes untouched.
 */
const SPECIFIC_COMMERCIALS: RegExp[] = [
  /[$£₹€]\s?\d/,
  /\b\d[\d,.]*\s?(?:USD|INR|GBP|EUR|dollars|rupees|pounds|lakh|lakhs|crore|crores)\b/i,
  /\b\d+(?:\.\d+)?\s?%\s*(?:fee|commission|of (?:the )?(?:hire(?:'|&rsquo;)?s )?(?:first-year )?(?:salary|CTC|compensation|fee))/i,
  /\b(?:fee|commission|retainer|rate)\s+of\s+\d/i,
  /\b\d[\d,.]*\s*per\s+(?:seat|user|licence|license|hire|placement)\b/i,
  /\b(?:rate card|price list|pricing page)\b/i,
  /\bour (?:prices?|rates?|fees?) (?:are|is|start)\b/i,
];

/** Making cost the dimension a comparison turns on. */
const PRICE_AXIS: RegExp[] = [
  /\bcheaper than\b/i,
  /\bcosts? less than\b/i,
  /\bundercuts?\b/i,
  /\bcost basis\b/i,
];

describe("pricing models are allowed, specific commercials are not", () => {
  it("there are posts to check", () => {
    expect(SOURCES.length).toBeGreaterThan(0);
  });

  for (const { slug, source } of SOURCES) {
    it(`${slug}: names no figure attached to money`, () => {
      for (const pattern of SPECIFIC_COMMERCIALS) {
        const hit = source.match(pattern);
        expect(hit?.[0], `${slug} names a specific commercial: "${hit?.[0]}"`).toBeUndefined();
      }
    });
  }

  const comparePosts = SOURCES.filter((s) => s.category === "compare");

  it("there are compare posts to check", () => {
    expect(comparePosts.length).toBeGreaterThan(0);
  });

  for (const { slug, source } of comparePosts) {
    it(`${slug}: does not turn the comparison on cost`, () => {
      for (const pattern of PRICE_AXIS) {
        const hit = source.match(pattern);
        expect(hit?.[0], `${slug} makes cost the axis: "${hit?.[0]}"`).toBeUndefined();
      }
    });
  }
});
