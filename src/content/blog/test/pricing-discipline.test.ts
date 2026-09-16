import { describe, it, expect } from "vitest";
import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";
import { __allPostsForTests } from "..";

/**
 * Pricing is not an axis — as a gate rather than a memory.
 *
 * ⛔ `COMPARISON-POSTS.md` has said this in prose since #10: *"No fee
 * percentages, no per-seat costs, no cost-per-hire tables, no 'cheaper
 * than…'"*. It was written down and nothing enforced it, so the removal had to
 * be done BY HAND in a388101 ("take pricing out"), long after the text had
 * shipped in the launch commit. A rule that lives only in a document is a rule
 * that comes back — which is the exact reasoning `comparison-discipline.test.ts`
 * already records for its own two rules: they "survived a full review and
 * shipped broken anyway, which is why they are enforced here rather than
 * remembered". Pricing was left in the remembered category. This closes it.
 *
 * TWO SCOPES, deliberately different:
 *
 *  1. HARD COMMERCIAL CLAIMS — checked on EVERY post, not just `compare`.
 *     `comparison-discipline` only inspects `category === "compare"`, so a fee
 *     percentage in an `update` post was invisible to the suite. A price claim
 *     is a price claim wherever it is made.
 *
 *  2. THE PRICE AXIS ("cheaper than") — checked on `compare` posts ONLY,
 *     because the ban is about refusing to compete on price with a named
 *     alternative. Product posts legitimately use the word about waste rather
 *     than about us: "cheaper than leaving the seat empty"
 *     (notice-periods-buyouts-joining-dates) and "cheaper than finding it in
 *     the replies three weeks later" (every-question-in-one-turn) are both
 *     correct English and neither is a pricing claim. Banning the phrase
 *     everywhere would have failed on real, good prose — the patterns below
 *     were designed against the actual corpus, not guessed.
 *
 * ⚠ `topics` is stripped before matching. It is an SEO keyword field, and
 * "cost per hire" is a legitimate search term there (`set-a-budget-…`,
 * `recruiting-metrics-…`) while being nothing a reader is told.
 *
 * RED-by-mutation: restore the `Cost basis` row or the "percentage of the
 * hire's first-year salary" sentence that a388101 deleted from
 * `employlabs-vs-a-recruitment-agency`, and the matching spec fails naming the
 * file and the phrase.
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

/** Naming a price, a fee basis, or a unit we bill by. */
const COMMERCIAL_CLAIMS: RegExp[] = [
  /percentage of (?:the )?(?:hire(?:'|&rsquo;)?s )?first-year salary/i,
  /\bper[- ]seat\b/i,
  /\b\d+\s?%\s+(?:fee|of the (?:salary|hire))/i,
  /[$£₹€]\s?\d/,
  /\bcost basis\b/i,
  /\b(?:subscription|licen[cs]e|platform) fee\b/i,
  /\bcost[- ]per[- ]hire table\b/i,
];

/** Competing on price with the alternative the post is weighed against. */
const PRICE_AXIS: RegExp[] = [/\bcheaper than\b/i, /\bcosts less than\b/i];

describe("pricing is not an axis", () => {
  it("there are posts to check", () => {
    expect(SOURCES.length).toBeGreaterThan(0);
  });

  for (const { slug, source } of SOURCES) {
    it(`${slug}: names no price, fee basis or billing unit`, () => {
      for (const pattern of COMMERCIAL_CLAIMS) {
        const hit = source.match(pattern);
        expect(hit?.[0], `${slug} makes a pricing claim: "${hit?.[0]}"`).toBeUndefined();
      }
    });
  }

  for (const { slug, source } of SOURCES.filter((s) => s.category === "compare")) {
    it(`${slug}: does not compare on price`, () => {
      for (const pattern of PRICE_AXIS) {
        const hit = source.match(pattern);
        expect(hit?.[0], `${slug} compares on price: "${hit?.[0]}"`).toBeUndefined();
      }
    });
  }
});
