/**
 * The typed event contract for the marketing site.
 *
 * ── WHY A CLOSED UNION AND NOT A `Record<string, unknown>` ───────────────
 * The homepage hero (`HeroSearch`) takes a job link or pasted JD, a company
 * name and a work email, and `search-prospects.ts` posts that email to the
 * app's self-serve endpoint. So a visitor's address and the server's replies
 * are in lexical scope wherever the hero calls `track`, and every form added
 * later will put more there. A free-form params bag is how a name, an email
 * or a search term reaches Google reports, and nobody notices because it
 * looks like a convention rather than a rule. So every param is a literal union,
 * a number or a boolean — and `post_slug` is the ONLY permitted free string,
 * because a slug is public content we WANT in reports.
 *
 * ⛔ NEVER add `page_location` or `page_referrer` to an event. GA4 attaches
 * page context itself, and `PageViewTracker` owns the one place a url is
 * reported. Repeating a url per event is how a query string that was safe on
 * one page starts riding along on every other event on the site. The types
 * below enforce this: no event's params admit either key.
 *
 * ⛔ DELIVERY GOES THROUGH THE GLOBAL `gtag`, NEVER `dataLayer.push([...])`.
 * gtag.js branches on the TYPE of each dataLayer entry and silently discards
 * a real Array. The inline snippet in `GoogleAnalytics.tsx` defines
 * `function gtag(){dataLayer.push(arguments)}` — an `arguments` object, which
 * is the only shape gtag.js executes. Push an array and the event vanishes
 * with no error anywhere, in dev and in production alike.
 */

import type { BlogCategory } from "@/content/blog/types";

/** The blog's own category type. Never re-spelled here — one source of truth. */
export type PostCategory = BlogCategory;

/**
 * Which CTA was clicked. One literal per distinct button on the site.
 *
 * ⚠ `final_cta_secondary` is LABELLED "Book a Call" and points at
 * app.employlabs.ai, not a calendar. The id is named after where it GOES,
 * because a report that trusted the label would credit the calendar with
 * traffic that never reached it. See the note in `FinalCTA.tsx`.
 */
export type CtaId =
  | "recruiter_sign_in"
  // ⛔ The homepage hero has NO id here, because it has no CTA link: it is the
  // <HeroSearch> widget, and it reports through its own `hero_*` funnel events
  // below. An id for a link that does not exist is a bucket that can never
  // fill, which reads as "nobody clicks the hero".
  | "final_cta_primary"
  | "final_cta_secondary"
  | "pricing_plan_freelancer"
  | "pricing_plan_company"
  | "pricing_plan_success_fee"
  | "pricing_plan_enterprise"
  | "blog_post_start_free"
  | "employ_lab_get_in_touch"
  | "talk_to_specialist";

/**
 * Where on the site the CTA sits.
 *
 * ⛔ `nav_top` and `nav_capsule` are BOTH MOUNTED AT ONCE once the page is
 * scrolled past 70vh — the absolute top bar has scrolled away but is still in
 * the DOM and still clickable if you scroll back, and the floating capsule is
 * on screen. They share a `cta_id` because they are the same offer, so without
 * distinct locations their clicks merge and the one question the capsule exists
 * to answer — does the sticky nav earn its place — becomes unanswerable.
 */
export type CtaLocation =
  | "nav_top"
  | "nav_capsule"
  | "home_final_cta"
  | "home_pricing"
  | "blog_post_footer"
  | "employ_lab_hero"
  | "employ_lab_cta_section"
  | "people_search_cta_section";

/** Where the click actually lands. Named after the destination, never the label. */
export type CtaDestination = "app" | "calendar";

/**
 * Which link on a post card or lead block was clicked. The lead post on /blog
 * renders THREE links to one slug (cover, title, button); without this they are
 * one indistinguishable number and there is no way to tell whether the big
 * cover image is doing any work.
 */
export type PostLinkSurface = "card" | "cover" | "title" | "button";

/** How far through a post the reader got. Four latched thresholds, nothing else. */
export type ReadDepthPct = 25 | 50 | 75 | 100;

/**
 * Where on the site the "send candidates to Zia" CTA sits. Separate from
 * `CtaLocation` because it is a different audience's offer: these links are for
 * job seekers, and every `cta_clicked` is a recruiter heading into the app.
 * `nav_top` and `nav_capsule` are distinct for the same reason as there — both
 * are mounted at once past 70vh.
 */
export type CandidateCtaLocation = "nav_top" | "nav_capsule" | "nav_mobile" | "footer_band" | "agents_zia";

/** The hero accepts a job as a link or as pasted text; mirrors `JobSource["mode"]`. */
export type HeroJobMode = "url" | "text";

export type AnalyticsEvent =
  | {
      name: "cta_clicked";
      params: { cta_id: CtaId; cta_location: CtaLocation; destination: CtaDestination };
    }
  | {
      name: "post_opened";
      params: {
        post_slug: string;
        post_category: PostCategory;
        list_position: "lead" | "grid";
        link_surface: PostLinkSurface;
      };
    }
  | {
      name: "post_read_depth";
      params: { post_slug: string; depth_pct: ReadDepthPct; reading_minutes: number };
    }
  /**
   * A job candidate clicked through to Zia at itszia.ai. Its own event, not a
   * `cta_clicked`, so candidate traffic can never inflate the recruiter funnel.
   */
  | { name: "candidate_cta_clicked"; params: { cta_location: CandidateCtaLocation } }
  | { name: "blog_filtered"; params: { category: PostCategory | "all" } }
  /**
   * ⭐ THE HERO IS A TWO-STEP FUNNEL, AND THE STEP BETWEEN THEM IS THE POINT.
   * Both buttons read "Start run": the first takes the job (a url or pasted
   * text) and advances, the second takes the email, calls the self-serve
   * endpoint and navigates into the app. Somebody who gives a job and then
   * balks at the email is the most interesting visitor on this site, and
   * nothing recorded them — the app only ever hears about the ones who finish.
   *
   * ⛔ `email` AND `companyName` ARE BOTH IN LEXICAL SCOPE at the call site for
   * `hero_run_started`. They are not here, and cannot be: `has_company_name` is
   * a boolean, and the closed union makes attaching the address a compile error.
   */
  | { name: "hero_job_submitted"; params: { mode: HeroJobMode; has_company_name: boolean } }
  | { name: "hero_run_started"; params: { mode: HeroJobMode; has_company_name: boolean } }
  /**
   * ⛔ THE FAILURE ARM CARRIES NO MESSAGE. `res.message` and `res.suggestion`
   * are server prose that can echo what the visitor typed — an address, a
   * domain. `has_suggestion` says whether the server offered a correction, which
   * is the only part of it a funnel needs.
   */
  | { name: "hero_run_failed"; params: { mode: HeroJobMode; has_suggestion: boolean } }
  | { name: "faq_opened"; params: { faq_index: number } };

/** The exact signature of the global the inline GA4 snippet installs. */
type Gtag = (command: "event", eventName: AnalyticsEvent["name"], params: object) => void;

/**
 * Send one event.
 *
 * Reads `globalThis.gtag` rather than `window.gtag` for one reason: they are
 * the same object in a browser (the inline snippet is a classic script, so its
 * `function gtag(){}` becomes a property of the global), and `globalThis`
 * cannot throw if this module is ever evaluated on the server.
 *
 * A missing `gtag` is the normal case, not an error: preview deployments and
 * local dev have no measurement id, so `GoogleAnalytics` renders nothing at
 * all. Returning quietly is the whole handling.
 *
 * ⚠ On a CTA this fires immediately before a full-page navigation. That is
 * safe because GA4 sends events over `navigator.sendBeacon`, which survives
 * unload — do NOT add a `setTimeout` or `preventDefault` to "make room" for
 * it, which would break the link for anyone whose JS is half-loaded.
 */
export const track = (event: AnalyticsEvent): void => {
  const gtag = (globalThis as { gtag?: unknown }).gtag as Gtag | undefined;
  if (typeof gtag !== "function") return;
  gtag("event", event.name, event.params);
};
