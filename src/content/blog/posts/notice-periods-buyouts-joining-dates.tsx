import type { BlogPost } from "../types";
import { P, H2, Pull, Steps, Bullets, Strong, CompareTable } from "@/components/blog/prose";

function Body() {
  return (
    <>
      <H2>The offer is not the finish line</H2>
      <P>
        In markets with two-week notice, an accepted offer means the role is essentially filled. In
        India it means a countdown has started during which the candidate remains an employee of a
        company that now knows they are leaving and has three months to change their mind.
      </P>
      <P>
        Plans built on the offer date rather than the joining date will be wrong by an amount that
        looks like bad luck and is actually arithmetic.
      </P>

      <H2>Ask in the first conversation</H2>
      <P>
        Notice period is a screening question, not an offer-stage detail. It is factual, it takes ten
        seconds, and it changes which candidates are viable for a role that needs somebody in six
        weeks.
      </P>
      <P>
        And it is two questions rather than one. What the contract says, and what the candidate
        believes is negotiable. Those are frequently different, and asked together you reliably get
        only the first.
      </P>

      <CompareTable
        head={["Ask", "Not", "Because"]}
        rows={[
          [
            "What does your contract say your notice is?",
            "When could you start?",
            "The second invites optimism. The first returns a fact.",
          ],
          [
            "Has anyone in your team negotiated it down?",
            "Is it negotiable?",
            "Precedent is knowable. A general question returns a hopeful guess.",
          ],
          [
            "Would you buy out the balance, or need it bought out?",
            "Are you flexible on the start date?",
            "Buyout is a specific mechanism with a specific cost. Flexibility is a mood.",
          ],
          [
            "What would your employer do when you resign?",
            "Any concerns about the move?",
            "Names the counter-offer before it exists, when it is still discussable.",
          ],
        ]}
      />

      <Pull>
        A ninety-day notice a candidate will negotiate is a different proposition from one they will
        not, and one question separates them.
      </Pull>

      <H2>The buyout conversation, plainly</H2>
      <P>
        Buying out notice is normal and worth understanding as a lever rather than an exception. The
        candidate pays the balance, or the new employer does, or the two split it. Whether an employer
        permits it varies, and precedent inside their own team is the best available evidence.
      </P>
      <P>
        Where it matters is roles with a genuine deadline. Paying to compress a start date is often
        cheaper than the cost of the seat being empty, and it is a conversation almost nobody has
        because the notice period is treated as a fixed property of the candidate.
      </P>

      <H2>The gap is where offers are lost</H2>
      <Bullets>
        <li>
          <Strong>The counter-offer arrives during it.</Strong> The current employer has months of
          warning. Assume one is coming.
        </li>
        <li>
          <Strong>Competing processes finish inside it.</Strong> A candidate three months from starting
          is still, functionally, on the market.
        </li>
        <li>
          <Strong>Enthusiasm decays.</Strong> The team they were excited about is a memory by week
          eight if nobody has spoken to them.
        </li>
        <li>
          <Strong>Circumstances change.</Strong> Three months is long enough for a promotion, a
          project, or a personal reason to make leaving harder than it was.
        </li>
      </Bullets>

      <H2>What to do about it</H2>
      <Steps>
        <li>
          <Strong>Screen on notice, early.</Strong> For a role with a deadline it is as much a
          constraint as location.
        </li>
        <li>
          <Strong>Get the counter-offer on the table before the offer.</Strong> Anticipated, it is
          survivable. As a surprise after acceptance, usually not.
        </li>
        <li>
          <Strong>Keep the candidate warm through the whole notice period.</Strong> Not a chase. Actual
          contact from the team they are joining, at intervals, for months.
        </li>
        <li>
          <Strong>Track joins, not offers.</Strong> An acceptance rate is a flattering number in a
          market where the gap between yes and arriving is a quarter.
        </li>
      </Steps>
    </>
  );
}

export const post: BlogPost = {
  slug: "notice-periods-buyouts-joining-dates",
  title: "Notice periods, buyouts and joining dates: planning around reality",
  dek: "An accepted offer starts a countdown during which the candidate still works for a company that now knows they are leaving. Plan against the joining date.",
  answer:
    "In markets with 30 to 90 day notice periods, an accepted offer starts a gap in which counter-offers arrive, competing processes finish and enthusiasm decays. Treat notice as a screening question asked in the first conversation, and ask two separate things: what the contract states, and whether anyone in their team has negotiated it down. Track joins rather than offer acceptances.",
  category: "article",
  motif: "calendar",
  publishedAt: "2026-10-16",
  readingMinutes: 2,
  topics: ["notice period", "India hiring", "offer stage", "counter-offers", "joining date"],
  faq: [
    {
      q: "When should you ask a candidate about their notice period?",
      a: "In the first conversation. It is a factual screening constraint that takes ten seconds and determines viability for any role with a deadline, not an offer-stage detail.",
    },
    {
      q: "How do you find out if a notice period is negotiable?",
      a: "Ask whether anyone in their team has negotiated one down. Precedent inside their own organisation is knowable; a general question about flexibility returns a hopeful guess.",
    },
    {
      q: "What is a notice period buyout?",
      a: "The candidate, the new employer, or both together pay the balance of the notice so the person can start earlier. Whether an employer permits it varies, and on deadline-driven roles it is often cheaper than leaving the seat empty.",
    },
    {
      q: "Why track joins instead of offer acceptances?",
      a: "Where notice periods run to three months, the gap between acceptance and arrival is long enough for counter-offers, competing processes and changed circumstances. Acceptance rate flatters a process that is losing people in that window.",
    },
  ],
  Body,
};
