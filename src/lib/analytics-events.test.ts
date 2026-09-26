import { afterEach, describe, expect, it } from "vitest";

import { track, type AnalyticsEvent } from "@/lib/analytics-events";

/**
 * Two things are under test here, and they are different in kind.
 *
 * 1. THE WIRE SHAPE. `installRealSnippetGtag` is the inline bootstrap from
 *    `GoogleAnalytics.tsx` copied verbatim, so the dataLayer entry these specs
 *    inspect is the one gtag.js would actually receive. That is what lets a
 *    spec assert the entry is an `arguments` object and not an Array — the
 *    distinction that silently deletes every event when it is got wrong.
 * 2. THE TYPE CONTRACT, via `@ts-expect-error`. Those lines are checked by
 *    `tsc`, not by vitest: if the union ever loosens enough to accept a free
 *    string, the *unused* expect-error becomes the compile failure.
 */

type GlobalWithGa = typeof globalThis & {
  gtag?: (...args: unknown[]) => void;
  dataLayer?: unknown[];
};

const g = globalThis as GlobalWithGa;

/** The bootstrap from GoogleAnalytics.tsx, verbatim. Do not "modernise" it. */
const installRealSnippetGtag = (): unknown[] => {
  g.dataLayer = [];
  g.gtag = function gtag() {
    // eslint-disable-next-line prefer-rest-params
    g.dataLayer!.push(arguments);
  };
  return g.dataLayer;
};

afterEach(() => {
  delete g.gtag;
  delete g.dataLayer;
});

describe("track", () => {
  it("delivers through the global gtag as three positional arguments", () => {
    const dataLayer = installRealSnippetGtag();

    track({
      name: "cta_clicked",
      params: { cta_id: "recruiter_sign_in", cta_location: "nav_capsule", destination: "app" },
    });

    expect(dataLayer).toHaveLength(1);
    const entry = dataLayer[0] as IArguments;
    expect(entry.length).toBe(3);
    expect(entry[0]).toBe("event");
    expect(entry[1]).toBe("cta_clicked");
    expect(entry[2]).toEqual({
      cta_id: "recruiter_sign_in",
      cta_location: "nav_capsule",
      destination: "app",
    });
  });

  it("queues an `arguments` object, NOT a real Array — gtag.js discards an Array with no error", () => {
    const dataLayer = installRealSnippetGtag();

    track({ name: "faq_opened", params: { faq_index: 3 } });

    const entry = dataLayer[0];
    expect(Array.isArray(entry)).toBe(false);
    expect(Object.prototype.toString.call(entry)).toBe("[object Arguments]");
  });

  it("never attaches page_location or page_referrer to an event", () => {
    const dataLayer = installRealSnippetGtag();

    track({
      name: "post_opened",
      params: {
        post_slug: "why-your-ats-cannot-do-this",
        post_category: "article",
        list_position: "lead",
        link_surface: "title",
      },
    });

    const params = (dataLayer[0] as IArguments)[2] as Record<string, unknown>;
    expect(Object.keys(params).sort()).toEqual([
      "link_surface",
      "list_position",
      "post_category",
      "post_slug",
    ]);
    expect(params).not.toHaveProperty("page_location");
    expect(params).not.toHaveProperty("page_referrer");
  });

  it("is a silent no-op when gtag is absent, which is every preview deploy and local dev", () => {
    expect(g.gtag).toBeUndefined();
    expect(() => track({ name: "blog_filtered", params: { category: "all" } })).not.toThrow();
    expect(g.dataLayer).toBeUndefined();
  });

  it("does not treat a non-function gtag as callable", () => {
    // A third-party tag manager can leave a truthy non-function on the global.
    (g as unknown as { gtag: unknown }).gtag = "not-a-function";
    expect(() => track({ name: "faq_opened", params: { faq_index: 0 } })).not.toThrow();
  });

  it("sends one dataLayer entry per call, so a latched threshold maps 1:1 to an event", () => {
    const dataLayer = installRealSnippetGtag();

    track({
      name: "post_read_depth",
      params: { post_slug: "a-slug", depth_pct: 25, reading_minutes: 7 },
    });
    track({
      name: "post_read_depth",
      params: { post_slug: "a-slug", depth_pct: 50, reading_minutes: 7 },
    });

    expect(dataLayer).toHaveLength(2);
    expect(((dataLayer[1] as IArguments)[2] as { depth_pct: number }).depth_pct).toBe(50);
  });
});

/**
 * COMPILE-TIME SPEC. Nothing below runs — `typeContract` is never called. Each
 * `@ts-expect-error` fails the build if the thing it forbids ever starts to
 * compile, which is the only way to test a type.
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const typeContract = () => {
  // An arbitrary string is not a CTA id.
  // @ts-expect-error cta_id is a closed literal union
  track({ name: "cta_clicked", params: { cta_id: "whatever_i_want", cta_location: "nav_top", destination: "app" } });

  // An arbitrary string PARAM cannot be added at all — this is the wall the
  // next person adding a form has to hit.
  // @ts-expect-error `candidate_email` is not in the contract
  track({ name: "faq_opened", params: { faq_index: 0, candidate_email: "someone@example.com" } });

  // @ts-expect-error `search_query` is not in the contract
  track({ name: "blog_filtered", params: { category: "all", search_query: "free text" } });

  // The two banned keys, specifically.
  // @ts-expect-error page_location must never ride on an event
  track({ name: "faq_opened", params: { faq_index: 0, page_location: "https://employlabs.ai/" } });

  // @ts-expect-error page_referrer must never ride on an event
  track({ name: "blog_filtered", params: { category: "update", page_referrer: "https://google.com/" } });

  // Depth is four latched literals, not any number.
  // @ts-expect-error 60 is not a tracked threshold
  track({ name: "post_read_depth", params: { post_slug: "a-slug", depth_pct: 60, reading_minutes: 3 } });

  // A category outside the blog's own union is rejected.
  // @ts-expect-error "opinion" is not a BlogCategory
  track({ name: "blog_filtered", params: { category: "opinion" } });

  // A location that does not exist is rejected, so the nav pair cannot silently merge.
  // @ts-expect-error "nav" is not a CtaLocation
  track({ name: "cta_clicked", params: { cta_id: "recruiter_sign_in", cta_location: "nav", destination: "app" } });

  // …while `post_slug` IS a free string, deliberately: slugs are public content.
  const allowed: AnalyticsEvent = {
    name: "post_opened",
    params: {
      post_slug: "any-public-slug-at-all",
      post_category: "compare",
      list_position: "grid",
      link_surface: "card",
    },
  };
  track(allowed);
};

describe("the hero funnel carries no address and no server prose", () => {
  // ⛔ `email` and `companyName` are both in lexical scope at the call site for
  // `hero_run_started` — the one event on this site where a real identifier sits
  // within reach. The closed union is what stops it.
  it("reports only a mode and a boolean for a started run", () => {
    const layer = installRealSnippetGtag();
    track({ name: "hero_run_started", params: { mode: "url", has_company_name: true } });
    const entry = layer[0] as IArguments;
    expect(JSON.stringify(entry[2])).not.toMatch(/@/);
    expect(entry[2]).toEqual({ mode: "url", has_company_name: true });
  });

  // ⛔ `res.message` / `res.suggestion` are server prose that can echo the address
  // the visitor typed. Only whether a correction was offered survives.
  it("reports a failure without the server's message", () => {
    const layer = installRealSnippetGtag();
    track({ name: "hero_run_failed", params: { mode: "text", has_suggestion: true } });
    expect((layer[0] as IArguments)[2]).toEqual({ mode: "text", has_suggestion: true });
  });

  it("distinguishes step one from step two, which is the whole point", () => {
    const layer = installRealSnippetGtag();
    track({ name: "hero_job_submitted", params: { mode: "url", has_company_name: false } });
    track({ name: "hero_run_started", params: { mode: "url", has_company_name: false } });
    expect(layer.map((e) => (e as IArguments)[1])).toEqual([
      "hero_job_submitted",
      "hero_run_started",
    ]);
  });
});
