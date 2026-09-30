import { describe, it, expect } from "vitest";
import { SITE_URL } from "..";
import { buildLlmsTxt } from "../builders";

/**
 * llms.txt — exact bytes of every section that is not the post list (the post
 * list is pinned by answer-identity + no-unpublished-leak). Built with no posts
 * so the whole document is fixed text.
 */
const EXPECTED = `# EmployLabs

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

## For job candidates

- **Zia** is also a free AI career strategist for working professionals in
  India, built by EmployLabs: https://itszia.ai. Candidates talk to her on
  WhatsApp, on the web or on a call — the same agent that engages candidates
  for EmployLabs' recruiters.

## Product pages

- [EmployLabs](https://employlabs.ai/) — the autonomous recruiting platform: sourcing,
  scoring, candidate conversations and interviews, with a human at every gate.
- [Vision](https://employlabs.ai/vision) — why EmployLabs is building AI infrastructure
  for workforce intelligence, and the near-term roadmap.
- [AI people search engine](https://employlabs.ai/people-search-engine) — search that
  discovers and ranks candidates from 800M+ profiles and maps their competencies.
- [Naira, the AI interviewer](https://employlabs.ai/naira-ai-interviewer) — the voice
  interview agent: one assessment agent across engineering, sales, product, HR,
  finance and more, with fresh role-calibrated assessments instead of question banks.

## Blog



## Feeds

- RSS: https://employlabs.ai/blog/feed.xml
- Sitemap: https://employlabs.ai/sitemap.xml
`;

describe("llms.txt", () => {
  it("is exactly the expected document (no posts)", () => {
    expect(buildLlmsTxt([], SITE_URL).replace(/\r\n/g, "\n")).toBe(EXPECTED.replace(/\r\n/g, "\n"));
  });

  it("every product page it lists is a real static route", async () => {
    const { STATIC_ROUTES } = await import("../builders");
    const listed = [...EXPECTED.matchAll(/\]\(https:\/\/employlabs\.ai(\/[^)]*)\)/g)].map((m) => m[1]);
    for (const path of listed) expect(STATIC_ROUTES, path).toContain(path === "/" ? "" : path);
  });
});
