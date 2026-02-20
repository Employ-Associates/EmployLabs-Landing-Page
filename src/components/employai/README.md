# EmployAI — Component & Page Analysis

This README summarizes the current `employai` page, the components used, the sections present on the page, and specific copy/structure changes recommended to align with the new, tight, GCC-focused messaging you provided.

## What I read

Files examined:

- `src/app/employai/page.tsx`
- `src/components/employai/Header.tsx`
- `src/components/employai/Hero.tsx`
- `src/components/employai/Vision.tsx`
- `src/components/employai/HowItWorksSection.tsx`
- `src/components/employai/DeepCapabilitySection.tsx`
- `src/components/employai/ProductPreviewSection.tsx` (commented out in page)
- `src/components/employai/ThreePillarsSection.tsx`
- `src/components/employai/TestinomialSection.tsx`
- `src/components/employai/CallToActionSection.tsx`
- `src/components/employai/Research.tsx`
- `src/components/employai/SecurityTrustSection.tsx` (commented out in page)
- `src/components/employai/Infrastructure.tsx`
- `src/components/employai/Products.tsx`
- `src/components/employai/shared/sectionHeading.tsx`

## Current page structure (as rendered in `page.tsx`)

Order of sections currently included:

1. `Header` (site nav + CTAs)
2. `Hero` (large hero with CTA: "Book An Exploratory Call" + "Explore Our Vision")
3. Wave transition (visual)
4. `Vision`
5. `HowItWorksSection` (3-step flow)
6. `DeepCapabilitySection` (multiple capability panels: Platform / Interviewer / Serpex)
7. `ThreePillarsSection` (visual product grid)
8. `TestinomialSection` (testimonials slider)
9. `CallToActionSection` (Request Demo / Join Early Access)

Notes: `ProductPreviewSection` and `SecurityTrustSection` are present but commented out from `page.tsx`.

## Mapping to the new target structure & copy (what should change)

You provided a concise, conversion-ready structure and copy tuned specifically for GCCs. Below is a mapping of the new sections to current components and recommended edits.

1. Top-level headline and CTA (Hero)

- Current: `Hero.tsx` has a long headline and two CTAs. CTA text currently: "Book An Exploratory Call" (good) and "Explore Our Vision".
- Change: Replace top headline with the crisp brand + sub-headline: e.g.,
  - Title: "EMPLOY — AI-Native Hiring for GCCs. Human-Owned Outcomes."
  - Sub-headline: "Employ combines AI-first people search, subject-matter expert interview agents, and specialist recruiters to deliver hiring outcomes traditional recruitment cannot."
  - CTA (primary): "Talk to a Hiring Specialist" (call-driven). Keep secondary CTA minimal or remove.
- File to edit: `src/components/employai/Hero.tsx`

2. "Why Employ Exists" (new short section)

- Current: `Vision.tsx` partly covers purpose; `HowItWorksSection` covers flow.
- Change: Add a short, sharp section (or repurpose `Vision.tsx`) titled "Why Employ Exists" with bullets: Keyword search misses... Interviews surface opinions... Recruiters filter, not understand. End with: "Employ was built for a different reality." Focus copy to GCC constraints.
- File to edit/create: reuse `Vision.tsx` or create `WhyExistsSection.tsx` and include after Hero.

3. AI-Native People Search (Serpex)

- Current: `DeepCapabilitySection` includes `Serpex` item and `ThreePillarsSection` visual.
- Change: Tighten copy to emphasize "Search Beyond Human Capability" with three bullets: career trajectories, skill combinations, patterns from high-performers. Make the Serpex card primary and surface as the top capability.
- Files: `src/components/employai/DeepCapabilitySection.tsx` (adjust the Serpex block) and `ThreePillarsSection.tsx` (update titles/links if needed).

4. Interview Intelligence (Signal Interview™)

- Current: `DeepCapabilitySection` and `Product` cards include AI Interviewer wording.
- Change: Introduce the name `Signal Interview™` in copy and briefly explain: "Probes reasoning, detects gaps, extracts structured insight." Emphasize it's not automation but signal amplification.
- Files: `DeepCapabilitySection.tsx`, `Products.tsx` (if surfaced), `ThreePillarsSection.tsx`.

5. How we assess candidates (Assessment signals)

- Current: `HowItWorksSection.tsx` covers the flow; `DeepCapabilitySection` describes platform capabilities.
- Change: Add a short structured list of signals: Capability Depth, Competency Patterns, Growth Trajectory, Contextual Fit, Signal Confidence. This can be a new small component or an extra panel within `DeepCapabilitySection` or `Vision.tsx`.
- Files: `DeepCapabilitySection.tsx` or `Vision.tsx`.

6. Human Ownership (Specialist recruiters)

- Current: `CallToActionSection.tsx` and header have recruiter CTAs; but no explicit human-ownership panel.
- Change: Add a short section or bullet group stating "Specialist Recruiters. Real Accountability." Emphasize humans interpret AI and own outcomes.
- Files: Add new small file `HumanOwnership.tsx` or append to `CallToActionSection.tsx`.

7. Sample Candidate Profile (single sample)

- Current: No sample profile UI in the page. There is `Products.tsx` and mock charts which can be adapted.
- Change: Create a minimal read-only sample component that shows the decision-ready profile structure — a single short example to demonstrate the flavor. Keep it lightweight, included near CTA or How-it-works.
- Files to create: `src/components/employai/SampleCandidateProfile.tsx` and include it in `page.tsx` where appropriate.

8. Final CTA & GCC focus

- Change CTA text across header/hero/CTA section to be unified as "Talk to a Hiring Specialist" (primary) and note "Call-driven" in the copy or microcopy.
- Emphasize GCC-specific line in `Hero` and `Vision`: e.g., "Built for GCCs where roles are complex, long-tenure matters, and false positives are expensive." Keep messaging tight.
- Files: `Hero.tsx`, `Header.tsx`, `CallToActionSection.tsx`.

## Concrete edits required (file -> suggested action)

- `Hero.tsx` — swap headline/sub-headline, set primary CTA to "Talk to a Hiring Specialist" (link to a phone booking / form), shorten secondary CTA.
- `Vision.tsx` — repurpose to host "Why Employ Exists" bullets or create a new `WhyExistsSection.tsx`.
- `DeepCapabilitySection.tsx` — tighten capability titles and copy to match new short bullets; add the Signal Interview name and a short definition.
- `ThreePillarsSection.tsx` — adjust copy to reflect "Serpex/People Search" prominence and GCC lens.
- `CallToActionSection.tsx` — change CTAs to call-driven phrasing; remove duplicated CTAs and clarify next steps.
- `TestinomialSection.tsx` — keep but shorten or re-skin for GCC credibility (e.g., show 1-2 short quotes from GCC-relevant clients).
- New: `SampleCandidateProfile.tsx` — one-off sample profile (decision-ready snapshot) inserted near the candidate assessment section.

## Sample Candidate Profile (copy-only, single sample)

- Candidate Summary: "Senior Platform Engineer — Strengths: Distributed systems, API design. Risks: Limited manager hiring experience."
- Capability Breakdown: "Technical: High (evidence: 3 production systems designed; IRT-calibrated interview: 8.5/10). Problem Solving: High (examples: reduced API latency by 45%). Communication: Medium—clear written but prefers async."
- Signal Interview™ Insights: "Reasoning demonstrates system-level architecture thinking; required follow-ups on scaling tradeoffs."
- Recruiter Commentary: "Strong hire for backend core infra teams; may need mentorship for people-management tasks."

(Insert this into `SampleCandidateProfile.tsx` — keep visual minimal with bullet rows.)

## Naming lock-ins (apply these across copy)

- Signal Interview™ — AI-driven subject-matter expert interview system
- Human Representation Model — internal assessment framework
- People Search Engine (or Serpex Search / Serpex) — AI-native discovery capability

## Prioritization & next steps (implementation plan)

1. Update CTAs & Hero copy to new headline + primary CTA (high impact) — edit `Hero.tsx` and `Header.tsx`. (High priority)
2. Add/repurpose short "Why Employ Exists" section from `Vision.tsx`. (High priority)
3. Tidy `DeepCapabilitySection.tsx` to surface Serpex and Signal Interview™. (High priority)
4. Add `SampleCandidateProfile.tsx` and wire into page near `DeepCapabilitySection`. (Medium priority)
5. Shorten `TestinomialSection` and update for GCC relevancy. (Low/Medium)
6. Remove/enable `ProductPreviewSection` only if a UI preview is needed; otherwise skip. (Optional)

Estimated effort: 1–3 small component edits + 1 small new component. No architecture changes required.

## Implementation notes

- Keep all copy changes localized to components listed above.
- Prefer copy-only PRs first; separate UI tweaks (layout/responsive) into a follow-up PR.
- CTAs should remain accessible and ideally trigger a short call-scheduling flow (call-driven). If no call flow exists, link to an email + phone microcopy.

---

If you want, I can:

- create the `SampleCandidateProfile.tsx` component and wire it into `page.tsx`, and
- open a small PR with the Hero + CTA copy changes (or apply them in this repo directly).

Tell me which edits you want me to implement first (Hero CTA + header, the Why-Employ section, or create the Sample Candidate Profile), and I will apply them and run a quick sanity check.
