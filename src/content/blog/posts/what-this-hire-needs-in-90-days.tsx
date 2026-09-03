import type { BlogPost } from "../types";
import { P, H2, Pull, Steps, Bullets, Strong } from "@/components/blog/prose";

function Body() {
  return (
    <>
      <H2>Assessment stops at the wrong moment</H2>
      <P>
        Almost every hiring tool ends its usefulness at the yes-or-no. You get a score, a
        recommendation, and then the candidate becomes an employee and everything the process learned
        about them is thrown away.
      </P>
      <P>
        Which is strange, because the interview surfaced exactly the things a manager needs in month
        one. Where this person is strong without support. Where they will be slower than the role
        assumes. What they have never done before and are about to do for the first time.
      </P>

      <H2>The development path</H2>
      <P>
        Naira&rsquo;s report closes with a development path: where this candidate is likely to need
        support if you hire them, drawn from what the conversation actually showed rather than from the
        gaps in their CV.
      </P>
      <P>
        Someone can be the right hire and still need a strong technical peer for their first quarter,
        or an explicit handover on a domain they have not worked in, or more structure around
        stakeholder management than the role currently provides. None of that is a reason not to hire.
        All of it is a reason to plan.
      </P>

      <Pull>
        Knowing this before the offer changes the onboarding plan. Discovering it in week six changes
        how the hire is going.
      </Pull>

      <H2>It is written for the manager, not the file</H2>
      <P>
        The section that gets forwarded most often is this one, and it is worth sending whatever you
        decide. On a hire it becomes the first draft of the onboarding plan. On a reject it is still
        informative, because a pattern across several rejects usually says something about the brief
        rather than about the candidates.
      </P>
      <P>
        Alongside it sit the ranked risks and the strengths, so a hiring manager reading three sections
        gets what they need: what you gain, what to watch, and what to put in place.
      </P>

      <H2>What this changes</H2>
      <Bullets>
        <li>
          <Strong>Onboarding starts before day one.</Strong> The manager has the plan while the offer
          is still being written.
        </li>
        <li>
          <Strong>Fewer surprises in the first review.</Strong> The thing that becomes a performance
          conversation in month three was usually visible in the interview and simply never recorded.
        </li>
        <li>
          <Strong>A reason to keep the assessment after the hire.</Strong> Most assessment output is
          write-only. This part has a reader.
        </li>
      </Bullets>

      <H2>How to use it</H2>
      <Steps>
        <li>
          Forward the development path to the hiring manager with the offer recommendation, not after
          acceptance.
        </li>
        <li>
          Turn each item into something concrete: a named peer, a specific handover, a check-in at
          week four. A development path nobody actions is a document.
        </li>
        <li>
          Read across several candidates on the same role. If everyone needs the same support, the role
          is asking for something the market does not supply and the brief should say so.
        </li>
      </Steps>
    </>
  );
}

export const post: BlogPost = {
  slug: "what-this-hire-needs-in-90-days",
  title: "Know what this person will need in their first 90 days",
  dek: "Not just whether to hire. The interview report names where a candidate will need support, so the hiring manager has it before the offer rather than six weeks after joining.",
  answer:
    "Naira's interview report includes a development path naming where a candidate will need support in their first 90 days, drawn from what the interview showed rather than from CV gaps. It is written to be forwarded to the hiring manager alongside the offer recommendation, and turns into the first draft of an onboarding plan rather than being discarded once the hire is made.",
  category: "update",
  motif: "report",
  publishedAt: "2026-09-20",
  readingMinutes: 4,
  topics: ["onboarding", "interview report", "hiring decisions", "candidate assessment", "first 90 days"],
  faq: [
    {
      q: "Can an interview tell you what a new hire will need after they join?",
      a: "A structured interview surfaces where someone is strong unsupported and where they will be slower than the role assumes. Recording that as a development path turns assessment output into an onboarding plan instead of discarding it at the hire decision.",
    },
    {
      q: "Should a development path stop you hiring someone?",
      a: "No. It describes support to put in place, not a reason to reject. Most strong hires need something specific in their first quarter, and the failure is not knowing what it is until month three.",
    },
    {
      q: "What if every candidate needs the same support?",
      a: "That is a signal about the brief rather than the candidates. A requirement the market consistently does not supply should be stated in the role or resourced around, not repeatedly discovered at interview.",
    },
  ],
  Body,
};
