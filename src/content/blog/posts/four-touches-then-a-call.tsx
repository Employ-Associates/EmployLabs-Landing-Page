import type { BlogPost } from "../types";
import { P, H2, Pull, Steps, Bullets, Strong } from "@/components/blog/prose";

function Body() {
  return (
    <>
      <H2>The email that was never going to be enough</H2>
      <P>
        Most outreach to a passive candidate is one message. It is written carefully, it is sent to
        somebody who was not expecting it, and it arrives in a working week that has nothing to do with
        your role. Then it is quiet, and the quiet gets read as a decision.
      </P>
      <P>
        It usually is not one. A good candidate who never replied to a single email has, in most cases,
        not weighed the opportunity and declined it. They saw the subject line on a bad morning, or
        they did not see it at all.
      </P>

      <H2>We changed it because we measured it</H2>
      <P>
        This is not a theory about human attention. An earlier version of our cadence was short: one
        email, a brief wait, then the candidate was written off as unreachable. Run across real roles,
        that ladder closed the overwhelming majority of candidates as unreachable.
      </P>
      <P>
        The correction was not clever. Adding nothing more than a second touch still produced replies
        from people the first ladder had already given up on, which settled the argument. If one more
        message recovers candidates, the first ladder was not measuring interest. It was measuring
        whether somebody happened to be at their desk.
      </P>

      <Pull>
        A candidate who never replied to one email has usually not decided anything. Silence after four
        different messages and a call is worth reading.
      </Pull>

      <H2>The shape of the week</H2>
      <P>
        Four email touches inside a single week, then a call, then a close. Laid out by day, it runs
        like this:
      </P>
      <Steps>
        <li>
          <Strong>Day 0 — the first email.</Strong> The role, why this person specifically, and a way
          to reply.
        </li>
        <li>
          <Strong>Day 1 — a follow-up on the same thread.</Strong> Short, on the original message, so
          it reads as a continuation rather than a second stranger.
        </li>
        <li>
          <Strong>Day 3 — a new angle.</Strong> A different reason the role might matter to them, not a
          restatement of the first one.
        </li>
        <li>
          <Strong>Day 3 — the call.</Strong> A phone conversation, gated rather than automatic.
        </li>
        <li>
          <Strong>Day 5 — a final note.</Strong> Brief, and honest that it is the last one.
        </li>
        <li>
          <Strong>Day 7 — close.</Strong> The candidate is concluded on this role rather than left in
          an indefinite maybe.
        </li>
      </Steps>

      <H2>Four touches, four pieces of copy</H2>
      <P>
        Each of the four emails is written differently. Not a resend with a new subject line, and not
        the same paragraph prefixed with a polite apology for writing again.
      </P>
      <P>
        There are two reasons for that, and only one of them is about reply rates. The first is that a
        candidate who ignored the first message ignored the argument in it, so repeating the argument
        asks them to make the same decision twice. The second is that a visibly automated sequence
        tells the candidate exactly how much thought went into contacting them, and that impression
        outlives the role.
      </P>

      <H2>The call is a rung, not an escalation</H2>
      <P>
        The phone call sits inside the week rather than after it, on the same day as the third email.
        Reaching someone by voice on day three while the thread is still recent is a different
        conversation from calling a fortnight later about a message they have forgotten.
      </P>
      <P>
        It is gated. A call is the most intrusive thing in the ladder and the only one the candidate
        cannot skim, so it runs on a role only where that has been chosen rather than assumed.
      </P>

      <H2>Every rung has its own deadline</H2>
      <P>
        A cadence with a shape needs the shape to be real, and the way sequences lose their shape is
        drift. A queue backs up, a send is retried, and the day-one follow-up goes out on day four,
        behind the day-three message, to somebody who now has three emails in two days.
      </P>
      <P>
        So each touch carries its own due moment. A touch that is well past it is cancelled rather than
        sent late. The candidate does not receive a week-old &ldquo;just following up&rdquo; about a
        message they have no memory of, and the ladder either runs in the shape it was designed in or
        it stops.
      </P>
      <Bullets>
        <li>
          <Strong>Late is worse than never.</Strong> A message out of order tells the candidate the
          sender is not paying attention, which is the one thing outreach cannot afford to say.
        </li>
        <li>
          <Strong>The week stays a week.</Strong> Four touches compressed into a sensible span is a
          considered approach; the same four spread over a month is nagging.
        </li>
        <li>
          <Strong>A cancelled rung is visible.</Strong> It is recorded as cancelled, so a thin week of
          touches is something you can see rather than something you infer.
        </li>
      </Bullets>

      <H2>What you get at the end of it</H2>
      <P>
        Seven days after the first email, every candidate contacted for the role has an outcome. They
        replied, they were spoken to, or they went through four different messages and a call without
        responding.
      </P>
      <P>
        That last group is a real finding rather than an absence of one, and it is the number worth
        acting on. A role where people are answering and declining has a pitch problem. A role where
        nobody answers a full ladder usually has a targeting problem, and no amount of rewriting the
        first email will fix it.
      </P>

      <H2>How to use it</H2>
      <Steps>
        <li>
          Read the four emails for a role before it runs. They are meant to be four arguments, and if
          two of them say the same thing the ladder is shorter than it looks.
        </li>
        <li>
          Decide about the call deliberately. It is the rung with the most upside and the most
          intrusion, and it should be a choice rather than a default you inherited.
        </li>
        <li>
          Judge the role on the full ladder, not on the first email. Day-zero silence is not
          information; day-seven silence across four touches and a call is.
        </li>
      </Steps>
    </>
  );
}

export const post: BlogPost = {
  slug: "four-touches-then-a-call",
  title: "Four touches in one week, then a call",
  dek: "Four emails with different copy inside a single week, a gated phone call on day three, and a close on day seven. Every rung has a deadline, and a late one is cancelled rather than sent.",
  answer:
    "EmployLabs contacts a candidate four times by email within one week, each message with different copy, followed by a gated phone call and then a close: first email on day zero, a same-thread follow-up on day one, a new angle and the call on day three, a final note on day five, closed on day seven.",
  category: "update",
  motif: "timeline",
  publishedAt: "2026-09-19",
  readingMinutes: 4,
  topics: ["candidate outreach", "outreach cadence", "passive candidates", "recruiting sequences", "cold email", "candidate experience"],
  faq: [
    {
      q: "How many times should you follow up with a passive candidate?",
      a: "Our cadence uses four email touches inside one week plus a gated phone call. We measured the alternative: a single email followed by a short write-off closed the overwhelming majority of candidates as unreachable, and adding just a second touch still produced replies.",
    },
    {
      q: "Are the follow-up emails just resends of the first one?",
      a: "No. Each of the four carries different copy. A candidate who ignored the first message ignored the argument in it, and a visibly automated resend tells them how little thought went into contacting them.",
    },
    {
      q: "What happens if a follow-up is delayed?",
      a: "A touch that is well past its due moment is cancelled rather than sent late, and the cancellation is recorded. Nobody receives a week-old note following up on a message they no longer remember.",
    },
  ],
  Body,
};
