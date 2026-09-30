import type { CandidateCtaLocation } from "@/lib/analytics-events";

/**
 * Where a job candidate is sent from employlabs.ai: Zia, the free AI career
 * strategist EmployLabs builds for professionals in India.
 *
 * ⛔ THE PATH IS `/login`, NOT `/talk`. itszia.ai/talk 307-redirects to /login
 * and DROPS the query string, so every utm param would vanish and Zia's
 * analytics would credit the visit to "direct".
 * ⛔ THE HOST IS THE APEX `itszia.ai`. www.itszia.ai returns 404.
 *
 * `utm_content` is the on-page location, so Zia's side can tell the nav, the
 * footer band and the agent card apart without asking this site.
 */
export const ZIA_ORIGIN = "https://itszia.ai";

export const ziaCandidateUrl = (location: CandidateCtaLocation): string => {
  const url = new URL("/login", ZIA_ORIGIN);
  url.searchParams.set("utm_source", "employlabs");
  url.searchParams.set("utm_medium", "referral");
  url.searchParams.set("utm_campaign", "candidate_cta");
  url.searchParams.set("utm_content", location);
  return url.toString();
};
