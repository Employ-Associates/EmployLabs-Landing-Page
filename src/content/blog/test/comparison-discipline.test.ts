import { describe, it, expect } from "vitest";
import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";
import { __allPostsForTests } from "..";

/**
 * The standing editorial rules for `compare` posts, as a gate.
 *
 * `COMPARISON-POSTS.md` carries the reasoning. Two of its rules survived a full
 * review and shipped broken anyway, which is why they are enforced here rather
 * than remembered:
 *
 *  1. NO SMALL-SOUNDING COUNTS. Range, sectors and geography are strengths and
 *     should be specific. "Thirteen leadership searches" and "three finalists"
 *     inform no decision and invite a discount. This ran live on
 *     employlabs-vs-a-recruitment-agency after the rule was set.
 *  2. CONCEDE SCOPE, NEVER STATURE. "We are considerably younger and have
 *     nothing like their deployment scale" helps nobody. Company age, headcount
 *     and funding are never volunteered. This ran live on employlabs-vs-paradox.
 *
 * Scoped to `compare` posts on purpose: a product post may legitimately say
 * "a role needing three finalists", because that is arithmetic about the
 * product rather than a claim about our track record.
 *
 * RED-by-mutation: restore either sentence to its post and the matching spec
 * fails, naming the file and the phrase.
 */

const POSTS_DIR = join(import.meta.dirname, "..", "posts");

const COMPARE_SOURCES = __allPostsForTests()
  .filter((p) => p.category === "compare")
  .map((p) => {
    const file = readdirSync(POSTS_DIR).find((f) => f === `${p.slug}.tsx`);
    if (!file) throw new Error(`no source file for compare post ${p.slug}`);
    return { slug: p.slug, source: readFileSync(join(POSTS_DIR, file), "utf8") };
  });

const NUMBER = String.raw`(?:\d+|one|two|three|four|five|six|seven|eight|nine|ten|eleven|twelve|thirteen|fourteen|fifteen|sixteen|seventeen|eighteen|nineteen|twenty)`;

/** A count attached to the things the founder named: searches, mandates, finalists. */
const COUNTED_CLAIMS = new RegExp(
  String.raw`\b${NUMBER}\s+(?:senior\s+)?(?:leadership\s+searches|leadership\s+mandates|finalists|senior\s+candidates)\b`,
  "i",
);

/** Volunteering our own age, size or maturity against a competitor's. */
const STATURE_CONCESSIONS: RegExp[] = [
  /\b(?:we are|we're|we have been)\s+(?:considerably\s+|much\s+|far\s+)?(?:younger|smaller|newer|a startup)\b/i,
  /\bnothing like (?:their|its)\b/i,
  /\bour entire client base\b/i,
  /\b(?:larger|bigger) than (?:our|us)\b/i,
  /\bfounded (?:in )?20\d\d\b/i,
];

describe("compare posts hold the editorial line", () => {
  it("there are compare posts to check", () => {
    expect(COMPARE_SOURCES.length).toBeGreaterThan(0);
  });

  for (const { slug, source } of COMPARE_SOURCES) {
    it(`${slug}: claims no count of leadership searches or finalists`, () => {
      const hit = source.match(COUNTED_CLAIMS);
      expect(hit?.[0], `${slug} counts what it should describe: "${hit?.[0]}"`).toBeUndefined();
    });

    it(`${slug}: concedes no stature`, () => {
      for (const pattern of STATURE_CONCESSIONS) {
        const hit = source.match(pattern);
        expect(hit?.[0], `${slug} volunteers stature: "${hit?.[0]}"`).toBeUndefined();
      }
    });
  }
});
