import type { BlogPost } from "../types";
import { P, H2, Pull, Steps, Bullets, Strong } from "@/components/blog/prose";

function Body() {
  return (
    <>
      <H2>The most expensive silence in hiring</H2>
      <P>
        Everything went well. Four rounds, enthusiastic feedback, the hiring manager already planning
        their first month. The offer goes out and the candidate, who has replied within the hour every
        time for six weeks, takes three days to answer an email.
      </P>
      <P>
        By the time you know what happened, the decision has usually been made somewhere you were not
        present.
      </P>

      <H2>What the silence is</H2>
      <P>
        It is almost never the offer being read. It is a conversation with a partner about a city, a
        counter-offer being assembled by a current employer, a competing process being accelerated by a
        phone call, a quiet recalculation of what leaving actually costs.
      </P>
      <P>
        The candidate is not stalling. They are doing the deciding, and doing it with everyone except
        the person who made the offer, because that person now has an obvious interest in the answer.
      </P>

      <Pull>
        At offer stage you become the one party the candidate cannot think out loud with.
      </Pull>

      <H2>The four things actually happening</H2>
      <Bullets>
        <li>
          <Strong>A counter-offer.</Strong> Common wherever notice periods are long, because the
          employer has months of warning and a strong incentive to use them. Rarely disclosed.
        </li>
        <li>
          <Strong>A number they never said out loud.</Strong> The expectation given at screening was
          often what they thought was reasonable rather than what would make them move.
        </li>
        <li>
          <Strong>A non-salary term.</Strong> Notice buyout, joining date, a specific reporting line,
          remote days. Frequently the actual blocker and frequently never raised, because it feels
          like a small thing to jeopardise an offer over.
        </li>
        <li>
          <Strong>Someone at home.</Strong> The most decisive input in the process and the one nobody
          in the process ever speaks to.
        </li>
      </Bullets>

      <H2>Most of it is preventable earlier</H2>
      <P>
        Every item above is discoverable weeks before the offer, and the reason it is not discovered is
        that nobody asks in a way that invites an honest answer. &ldquo;Any concerns?&rdquo; asked by
        the recruiter who wants the yes reliably produces &ldquo;no, all good&rdquo;.
      </P>
      <P>
        The questions that work are specific and asked early, before there is an offer to protect.
        What would your current employer do when you resign. What number would make this an easy yes
        rather than a fair one. Who else is in your decision. What would need to be true about the
        start date.
      </P>

      <H2>Where an agent genuinely helps</H2>
      <P>
        Candidates tell an agent things they will not tell the recruiter, for the simple reason that it
        is not the person whose quarter depends on the answer. A reservation surfaced in an ordinary
        conversation reaches your record as information, weeks before it would otherwise have arrived
        as a decline.
      </P>
      <P>
        The limitation is equally clear. An agent surfaces the blocker; it does not resolve it. Talking
        somebody through a counter-offer is a human conversation, and knowing about it early is what
        makes that conversation possible at all.
      </P>

      <H2>What to do</H2>
      <Steps>
        <li>
          Ask the counter-offer question before the offer, not after. &ldquo;What will they do when you
          resign&rdquo; is a normal question in week two and an alarming one in week eight.
        </li>
        <li>
          Get the real number early and separate it from the reasonable one. They are different, and
          only one predicts an acceptance.
        </li>
        <li>
          Ask what would need to be true about the start date. Notice periods and buyouts decide more
          offers than most teams count.
        </li>
        <li>
          When the silence comes anyway, do not send a chase. Ask one specific question about the thing
          you think is blocking it. A chase invites a polite deferral; a specific question invites an
          answer.
        </li>
      </Steps>
    </>
  );
}

export const post: BlogPost = {
  slug: "why-candidates-go-quiet-at-offer-stage",
  title: "Why your best candidates go quiet at offer stage",
  dek: "The silence is not the offer being read. It is a counter-offer, a number never said out loud, a start date, or a conversation at home you were never part of.",
  answer:
    "Candidates go quiet after an offer because they are deciding with everyone except the person who made it. The four usual causes are a counter-offer, a compensation figure they never stated honestly, a non-salary term such as notice buyout or start date, and a decision-maker at home. All four are discoverable weeks earlier if asked specifically, before there is an offer to protect.",
  category: "article",
  motif: "calendar",
  publishedAt: "2026-10-13",
  readingMinutes: 3,
  topics: ["offer stage", "counter-offers", "candidate closing", "notice period", "recruiting process"],
  faq: [
    {
      q: "Why do candidates stop responding after receiving an offer?",
      a: "Usually because they are deciding with a partner, weighing a counter-offer, or accelerating a competing process. The recruiter becomes the one party they cannot think out loud with, because that person now has an obvious interest in the answer.",
    },
    {
      q: "How do you prevent candidates going silent at offer stage?",
      a: "Ask the difficult questions weeks earlier, before there is an offer to protect: what the current employer will do when they resign, what figure makes it an easy yes rather than a fair one, who else is in the decision, and what would need to be true about the start date.",
    },
    {
      q: "What should you do when a candidate goes quiet after an offer?",
      a: "Do not send a chase. Ask one specific question about the thing you believe is blocking it. A chase invites a polite deferral; a specific question invites an actual answer.",
    },
  ],
  Body,
};
