# Writing a comparison post

Standing rule, set by the founder 2026-09-08, extended 2026-09-09 from the
positioning reference. Applies to every post in the `compare` category,
including ones that name no competitor.

## First principle

A comparison document exists to move a qualified reader from uncertainty to a
decision they can defend to their boss. It is not a neutral referee document —
the reader knows who published it, so pretending otherwise spends credibility
for nothing. What earns trust is **precision**, not modesty.

Which produces the rule that governs everything below:

> **Concede scope. Never concede stature.**

"Internal mobility is not something we do" helps a reader decide. "We are
younger and smaller with less deployment scale" helps nobody and invites a
discount. Both are true. Only the first belongs in the document.

The same applies to numbers. Range, sectors and geography are strengths and
should be specific. Counts that read small — how many searches, how many
finalists — weaken the position without informing the decision. Say
"leadership searches across robotics, biotech, consulting and design", never
"thirteen leadership searches".

Never volunteer company age, headcount, funding or founding year. It invites a
maturity comparison with no bearing on capability, and nobody asked. If a buyer
raises it, answer honestly. Never put it on the page ourselves.

## Register — the error that is invisible

The most expensive mistake in a comparison is not a false claim. It is
describing our own capability one register below the competitor's, because
nothing in the document looks wrong.

> "A role profile is generated from the job description and candidates are
> scored against it" — beside — "a deep-learning match model built on a skills
> graph of 1.6 million skills."

Both true. Only one reads as an engineering achievement. **In a two-column
table the reader compares prose, not products.** A row described at the lower
register is lost regardless of which product is actually better.

So: **write every capability at its actual depth.** Not "a two-way AI voice
interview" but the enforced phases, the live code execution across eleven
sandboxed languages, the alignment rank with written rationale, the four-part
report, the same rubric on every candidate. Not "candidates are scored" but the
three tiers, the confidence weighting between stated and inferred criteria, and
the whole pool re-ranking the moment a criterion changes.

Two constraints on this:

- **Symmetric detail.** A long warm cell beside a terse one reads as bias even
  when both are true — and asymmetry in *our* favour is as damaging as
  asymmetry against us, because it tells the reader the document is selling.
  Equal depth, equal specificity, both columns.
- **Depth is not specs.** Express the capability as work the recruiter gets,
  not as a number an engineer would quote. "Change a requirement and the whole
  pool re-ranks in front of you, with nothing re-run" — not "sub-100ms
  re-scoring".

## The spine

Ordered by the reader's decision, not by category convention. The case for us
sits **after** the honest distinction and **before** the concessions, so a
reader who stops halfway still has it.

1. **The distinction** — one honest line. What different jobs do these do?
2. **Which one you need** — the fit rule, as a rule, with concrete situations
   a reader can match themselves against. Include who should stop reading.
3. **Outcomes** — the five rows below. What you end up with.
4. **What each one can actually do** — capabilities as *work*, job by job.
   ⛔ Rows are jobs in the hiring process, never product attributes. "Interview
   the candidate" is a capability. "Profile index size" is a spec sheet.
5. **What actually arrives** — show the artefact, do not describe it.
6. **Where we work** — evidence, per the stature rule above.
7. **What it costs you to find out** — reversibility. Against any enterprise
   platform this is the strongest argument available and it is usually buried.
8. **What they do that we do not** — bounded concessions. Every one carries its
   "unless", or it runs unopposed.
9. **Running both, concretely** — operational, not diplomatic.
10. **What a TA lead actually wants to know** — the buyer's own questions.
11. **The decision, stated plainly** — one paragraph an agent can quote.

### The five outcome rows

- **What lands on your desk.** The artefact at the end. A list, a shortlist,
  interviewed candidates with evidence.
- **What you still do yourself.** The honest division of labour.
- **Time to the first useful thing.** Days, weeks or a quarter.
- **What you keep afterwards.** The pipeline, the market read, the scoring —
  or nothing.
- **Where it fails you.** Every product has a failure mode. Name ours.

### What a TA lead wants to know

The buyer's own questions, in their words:

- Can I run this on Monday, or is it a project?
- Does it make my week better, and which part of it?
- What do I tell my hiring manager?
- What happens when the brief is wrong?
- Who owns the candidate relationship?
- What compliance artifacts can you produce today, dated, and by which auditor?

The last one usually favours the other side. Ask it anyway — a question list
that only we can answer well is a question list nobody believes.

## ⛔ Pricing is not an axis — but pricing MODELS are fair game

Two different rules, and an earlier version of this section ran them together.

**Everywhere, including product posts: no specific commercials.** No rate, no
amount, no fee percentage, no price list. A figure attached to money dates
instantly and is the one thing we cannot correct once an assistant has quoted
it.

**Pricing MODELS can and should be discussed.** How agencies charge — a
percentage of first-year salary — or how platforms charge — per action, per
seat, by subscription — is genuinely useful to a buyer working out what a
hire will cost them, and explaining it well is something this blog should be
good at. The line is the figure, not the concept.

**In `compare` posts only: cost is not the dimension the comparison turns
on.** Not as a comparison row, not as a section, no "cheaper than" framing.
It invites a race we do not want to run — a buyer who chose on price leaves on
price — and on a cost axis the comparison stops being about whether the work
gets done. "What you keep afterwards" carries the commercial argument
honestly, because it describes value rather than a number.

⚠ Both halves are now ENFORCED by `test/pricing-discipline.test.ts`, not
remembered. This section said "no pricing" in prose for weeks and the text was
still removed by hand in #10, after it had shipped — which is the same failure
`comparison-discipline.test.ts` was created to stop.

## How to frame the buyer

**Lead with what the system does, never with a gap in the buyer's
organisation.** Every sentence that opens by describing something the buyer
lacks positions us as a patch; sentences that open with what the system does
position us as a system. Same fact, opposite reading.

Which rules out three specific framings:

- ⛔ "For teams with no dedicated TA function." A CHRO stops reading. It says
  in our own words that the product is for companies who cannot afford a real
  team. **Describe the work, never the size of the organisation doing it.**
- ⛔ "Nobody has time to contact and qualify them." That describes a deficient
  organisation. The frame is that the system **multiplies what each recruiter
  can carry** and raises an intervention when it needs a human judgement —
  true of a two-person team and a two-hundred-person one, which is the point.
- ⛔ "Where WhatsApp and telephone reach candidates more reliably than email."
  That makes channel breadth read as a workaround for a weak email funnel.
  It is not. One engine, several transports, the candidate reached where they
  actually answer.

And the geography frame: **global, with India-specific compensation
intelligence in addition.** Never "built India-first" — being built in India
does not make the product India-only, and saying so caps the market in the
reader's mind.

## Claims discipline

Nothing in a comparison post may contain:

- Any response rate, completion rate, quality score, time-to-fill improvement
  or outreach deliverability figure. No defensible data exists yet.
- SOC 2, ISO or DPDP compliance claims — no artifacts exist. The honest line is
  that the EU AI Act and Local Law 144 posture is **structural** (one rubric on
  every candidate, a person at the final gate, a complete decision record) and
  that audit artifacts are on the roadmap.
- Roadmap items written in the present tense. ATS and HRIS integration
  especially: there are no live integrations, shortlists are handed over by
  export, and no date is offered.
- "Three channels" — there are four: email, WhatsApp, voice and web.
- Any volume figure attached to a capability that is deployed but not yet
  running at volume.

**Capability that does not ladder to a decision the reader is making is cut,
however proud we are of it.** Crisis routing is the standing example: it
matters enormously and it is not a talent-acquisition purchasing criterion, so
in a capability table it only makes the document look unfocused.

## Two further rules

**Concede where the other product wins, specifically.** Not a token
paragraph — the actual thing, named. Eightfold on internal mobility and on a
dated independent bias audit. Naukri on mid and junior coverage outside metros.
Paradox on volume at the door. A comparison nobody believes is worth less than
no comparison.

**Never claim what we have not used.** Competitor descriptions stay at the
level of public positioning: no invented feature claims, no customer counts, no
performance numbers. For an absence, write "not described in published product
material" rather than a bald "no" — and only ever what is verifiable from their
own materials at the date of publishing. Competitors ship: Eightfold's
candidate agent and AI interviewer both landed in July 2026, and a post written
from a year-old mental model of a competitor is a post that discredits itself.
Someone who knows that market should read it before publish.

## A note on the other document class

There is a second comparison artefact: the sendable capability report, written
to go unaccompanied to a CHRO and read as an analyst brief. That one is
**third person, neutral, and draws no conclusion** — it states what each
platform can and cannot do, discloses on the first page that EmployLabs
prepared it, and ends on selection conditions rather than a recommendation.

This document governs the **blog post**, which is published on our own domain
under our own name to a reader who already knows who wrote it. First person,
opinionated, and it ends on the decision stated plainly.

The two are not in conflict and neither is optional. Neutrality without
register produces a document that is fair and loses. Register without
neutrality produces one a buyer discounts entirely. **Describe both platforms
fairly, and describe ours at full depth.**
