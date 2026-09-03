import type { BlogPost } from "../types";
import { P, H2, Pull, Steps, Bullets, Strong } from "@/components/blog/prose";

function Body() {
  return (
    <>
      <H2>Autonomous sourcing has one honest problem</H2>
      <P>
        Point a system at a brief and tell it to find people, and it will. The question nobody asks
        until the invoice arrives is whether the people it was going to find were ever the right ones.
      </P>
      <P>
        By the time a thin shortlist tells you the search was mistargeted, you have paid for the
        sourcing, the contact data and often the outreach. The information that would have prevented it
        was available at the start and simply never shown to anyone.
      </P>

      <H2>Sample first, then commit</H2>
      <P>
        Meera proposes several distinct sourcing strategies for a role, each one a different place the
        hire could be coming from. Selecting one pulls a small set of real profiles from it
        immediately, and you judge them.
      </P>
      <P>
        A handful of real people tells you in about a minute what a description of a strategy cannot.
        Either these are recognisably the right sort of person or they are not, and if they are not,
        the fix is upstream of any amount of additional sourcing.
      </P>

      <Pull>Nobody should fund a direction that nobody has looked at.</Pull>

      <H2>The gate is deliberate</H2>
      <P>
        Arming autonomous sourcing points real spend at a strategy. Doing that before anyone has seen
        who it returns is how a search burns its budget confirming a wrong assumption, so the sample
        and your verdict on it sit between the two.
      </P>
      <P>
        You can skip it, and sometimes that is the right call on a role you have run before. What we
        will not do is let it be skipped silently, because the cost of finding out later is the whole
        budget rather than a minute of reading.
      </P>

      <H2>What a bad sample tells you</H2>
      <Bullets>
        <li>
          <Strong>Right people, wrong seniority.</Strong> Usually a title problem. The market uses a
          different word for this job than your brief does.
        </li>
        <li>
          <Strong>Right seniority, wrong context.</Strong> The strategy is aimed at companies whose
          version of this role is not your version.
        </li>
        <li>
          <Strong>Nobody at all.</Strong> Genuinely useful, and cheap here. A strategy that returns
          nothing has told you something true about supply before you paid to confirm it at scale.
        </li>
      </Bullets>

      <H2>How to use it</H2>
      <Steps>
        <li>
          Look at the sample before arming anything. It takes a minute and it is the cheapest decision
          point in the whole search.
        </li>
        <li>
          Judge the profiles rather than the strategy description. The description always sounds
          plausible; the people are the evidence.
        </li>
        <li>
          If a pocket returns badly, fix the brief rather than adding another pocket. A weak sample is
          almost always a targeting problem, and stacking strategies on top of a wrong brief multiplies
          the spend without changing the outcome.
        </li>
      </Steps>
    </>
  );
}

export const post: BlogPost = {
  slug: "see-real-profiles-before-you-spend",
  title: "See real profiles from a sourcing strategy before you fund it",
  dek: "Select a talent pocket and you get real people from it to judge, in about a minute, before any autonomous sourcing spend is armed.",
  answer:
    "EmployLabs proposes several distinct sourcing strategies per role, and selecting one immediately pulls a small set of real candidate profiles from it. The recruiter judges those before autonomous sourcing is armed, so budget is never committed to a direction nobody has looked at. A weak sample usually indicates a targeting or title problem rather than a need for more sourcing.",
  category: "update",
  motif: "market",
  publishedAt: "2026-09-21",
  readingMinutes: 4,
  topics: ["sourcing strategy", "talent pockets", "recruiting spend", "candidate sourcing", "hiring brief"],
  faq: [
    {
      q: "What is a talent pocket in sourcing?",
      a: "A distinct place a hire could come from — a competitor's team, an adjacent industry, a smaller company scaling up. Each is a separate sourcing strategy with its own rationale, rather than one undifferentiated search.",
    },
    {
      q: "Why sample candidates before running a full search?",
      a: "A handful of real profiles reveals in a minute whether a strategy is aimed correctly. Finding out from a thin shortlist instead means paying for sourcing, contact data and outreach first.",
    },
    {
      q: "What does it mean when a sourcing strategy returns nobody?",
      a: "It is useful information obtained cheaply. An empty sample says something true about supply for that approach, and the response is usually to revisit the brief rather than to add another strategy on top.",
    },
  ],
  Body,
};
