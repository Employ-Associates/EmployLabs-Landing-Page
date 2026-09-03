import { describe, it, expect } from "vitest";
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";
import { livePosts, findLivePost, relatedPosts, __allPostsForTests, SITE_URL } from "..";
import { buildFeedXml, buildLlmsTxt, buildSitemapEntries, buildBlogIndexJsonLd } from "../builders";
import { publishInstant, isLive } from "../schedule";

/**
 * ZONES F1 + D2 — an unpublished post must be absent from EVERY surface, and
 * must become present on ALL of them once its instant passes.
 *
 * RED-by-mutation: change `livePosts` to return `ALL_POSTS`, or point any one
 * builder at the full set, and the sweep below fails naming the surface.
 *
 * The `now` values are fixed instants, so this test does not change meaning as
 * real time passes.
 */

const ALL = __allPostsForTests();

// A moment when the earliest posts are live and later ones are not.
const MID = new Date("2026-09-07T12:00:00.000Z");

function surfaces(now: Date) {
  const live = livePosts(now);
  return {
    "index page list": live.map((p) => p.slug).join("\n"),
    "index JSON-LD": JSON.stringify(buildBlogIndexJsonLd(live, SITE_URL)),
    "rss feed": buildFeedXml(live, SITE_URL),
    "llms.txt": buildLlmsTxt(live, SITE_URL),
    "sitemap": JSON.stringify(buildSitemapEntries(live, SITE_URL, now)),
    "static params": JSON.stringify(live.map((p) => ({ slug: p.slug }))),
  };
}

/**
 * ⛔⛔ THE EXPECTED SETS ARE DERIVED FROM `schedule`, NOT FROM `livePosts`.
 * The first version computed `future` as "everything livePosts left out", so
 * mutating livePosts to return all posts emptied `future` and every per-surface
 * assertion passed over an empty loop — vacuously green against the exact bug
 * the file exists to catch. Only the control caught it. Deriving expectations
 * from the independent `isLive` makes the sweep adversarial to the function
 * under test. Never source these two lists from the code being tested.
 */
const expectedLive = ALL.filter((p) => isLive(p.publishedAt, MID));
const expectedFuture = ALL.filter((p) => !isLive(p.publishedAt, MID));

describe("an unpublished post is absent from every surface", () => {
  const live = expectedLive;
  const future = expectedFuture;

  it("the fixture is meaningful: some posts are live and some are not", () => {
    // Without this control, "everything is absent" would also pass.
    expect(live.length).toBeGreaterThan(0);
    expect(future.length).toBeGreaterThan(0);
  });

  const rendered = surfaces(MID);

  for (const [name, content] of Object.entries(rendered)) {
    it(`${name} contains no unpublished slug, title or answer`, () => {
      for (const p of future) {
        expect(content, `${name} leaked slug ${p.slug}`).not.toContain(p.slug);
        expect(content, `${name} leaked title of ${p.slug}`).not.toContain(p.title);
        expect(content, `${name} leaked answer of ${p.slug}`).not.toContain(p.answer);
      }
    });

    it(`${name} contains every post that IS live`, () => {
      for (const p of live) {
        expect(content, `${name} dropped live post ${p.slug}`).toContain(p.slug);
      }
    });
  }

  it("findLivePost refuses an unpublished slug, and serves a live one", () => {
    for (const p of future) expect(findLivePost(p.slug, MID)).toBeUndefined();
    for (const p of live) expect(findLivePost(p.slug, MID)?.slug).toBe(p.slug);
  });

  it("relatedPosts never surfaces an unpublished post", () => {
    for (const p of live) {
      for (const r of relatedPosts(p.slug, 3, MID)) {
        expect(future.some((f) => f.slug === r.slug)).toBe(false);
      }
    }
  });
});

describe("the publication transition (zone D2)", () => {
  /**
   * ISR re-evaluates these functions on a timer; what has to be true is that
   * the SAME inputs with a later clock produce a listed, routable post on every
   * surface. That is what this proves — the hourly revalidation is Next's job,
   * the state transition is ours.
   */
  const target = ALL.reduce((latest, p) => (p.publishedAt > latest.publishedAt ? p : latest), ALL[0]);
  const instant = publishInstant(target.publishedAt);
  const before = new Date(instant.getTime() - 1000);
  const after = new Date(instant.getTime() + 1000);

  it("the last-scheduled post is absent from all surfaces one second before", () => {
    for (const [name, content] of Object.entries(surfaces(before))) {
      expect(content, `${name} published ${target.slug} early`).not.toContain(target.slug);
    }
    expect(findLivePost(target.slug, before)).toBeUndefined();
  });

  it("and present on all surfaces one second after, with no deploy in between", () => {
    for (const [name, content] of Object.entries(surfaces(after))) {
      expect(content, `${name} did not publish ${target.slug}`).toContain(target.slug);
    }
    expect(findLivePost(target.slug, after)?.slug).toBe(target.slug);
  });
});

describe("no page reads the unpublished set", () => {
  /**
   * Structural guard. `__allPostsForTests` exists so tests can see the full
   * list; a page importing it would defeat every check above. Scans real
   * source rather than trusting the convention.
   */
  const roots = ["src/app", "src/components"];

  function walk(dir: string): string[] {
    const out: string[] = [];
    for (const entry of readdirSync(dir)) {
      const full = join(dir, entry);
      if (statSync(full).isDirectory()) out.push(...walk(full));
      else if (/\.tsx?$/.test(entry) && !full.includes("test")) out.push(full);
    }
    return out;
  }

  const files = roots.flatMap(walk);

  it("finds application source to scan", () => {
    expect(files.length).toBeGreaterThan(5);
  });

  it("no file under src/app or src/components imports the unpublished set", () => {
    const offenders = files.filter((f) => {
      const src = readFileSync(f, "utf8");
      return src.includes("__allPostsForTests") || /\bALL_POSTS\b/.test(src);
    });
    expect(offenders).toEqual([]);
  });
});
