import type { BlogPost } from "../types";
import { P, H2, Pull, Steps, Bullets, Strong } from "@/components/blog/prose";

function Body() {
  return (
    <>
      <H2>The risk is not the search. It is the sending.</H2>
      <P>
        Sourcing on EmployLabs costs you nothing, so the usual caution — do not spend until you are
        sure — does not apply. You can point a strategy at the market and look at what comes back
        without committing to anything.
      </P>
      <P>
        What you cannot undo is the next step. Once outreach is armed, real people receive a real
        message under your company&rsquo;s name. A mistargeted search wastes an afternoon. Mistargeted
        outreach reaches four hundred people who were never right for the role, and they remember.
      </P>

      <H2>Sample first, then arm</H2>
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

      <Pull>
        A mistargeted search costs an afternoon. Mistargeted outreach costs your name with four
        hundred people.
      </Pull>

      <H2>The gate is deliberate</H2>
      <P>
        Arming automation puts your employer brand in front of a population somebody chose. Doing that
        before anyone has looked at who is in it is how a search quietly damages the thing it was meant
        to help.
      </P>
      <P>
        You can skip it, and sometimes that is the right call on a role you have run before. What we
        will not do is let it be skipped silently, because the cost of finding out afterwards is paid
        by people who cannot un-receive the message.
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
          <Strong>Nobody at all.</Strong> Genuinely useful, and free to discover here. A strategy that
          returns nothing has told you something true about supply before anyone was contacted.
        </li>
      </Bullets>

      <H2>How to use it</H2>
      <Steps>
        <li>
          Look at the sample before arming anything. It takes a minute and it is the last cheap
          decision point before your brand is involved.
        </li>
        <li>
          Judge the profiles rather than the strategy description. The description always sounds
          plausible; the people are the evidence.
        </li>
        <li>
          If a pocket returns badly, fix the brief rather than adding another pocket. A weak sample is
          almost always a targeting problem, and stacking strategies on a wrong brief just widens the
          group of people who get the wrong message.
        </li>
      </Steps>
    </>
  );
}

export const post: BlogPost = {
  slug: "see-real-profiles-before-anyone-is-contacted",
  title: "See real profiles from a sourcing strategy before anyone is contacted",
  dek: "Sourcing costs you nothing, so look freely. What you cannot undo is the outreach, which is why the sample sits between the two.",
  answer:
    "EmployLabs proposes several distinct sourcing strategies per role, and selecting one immediately pulls a small set of real candidate profiles from it at no cost. The recruiter judges those before outreach is armed, because a mistargeted search wastes an afternoon while mistargeted outreach reaches hundreds of people under the employer's name. A weak sample usually indicates a targeting or title problem.",
  category: "update",
  motif: "market",
  publishedAt: "2026-09-21",
  readingMinutes: 3,
  topics: ["sourcing strategy", "talent pockets", "employer brand", "candidate sourcing", "hiring brief"],
  faq: [
    {
      q: "What is a talent pocket in sourcing?",
      a: "A distinct place a hire could come from — a competitor's team, an adjacent industry, a smaller company scaling up. Each is a separate sourcing strategy with its own rationale, rather than one undifferentiated search.",
    },
    {
      q: "Why review sample candidates before running outreach?",
      a: "Because outreach cannot be undone. A mistargeted search costs an afternoon of review, while mistargeted outreach puts your company's name in front of hundreds of people who were never right for the role.",
    },
    {
      q: "What does it mean when a sourcing strategy returns nobody?",
      a: "It is useful information obtained for free. An empty sample says something true about supply for that approach, and the response is usually to revisit the brief rather than to add another strategy on top.",
    },
  ],
  Body,
};
