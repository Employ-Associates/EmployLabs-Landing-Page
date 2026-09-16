import type { BlogPost } from "../types";
import { P, H2, Pull, Steps, Bullets, Strong } from "@/components/blog/prose";

function Body() {
  return (
    <>
      <H2>A phone number is something you buy</H2>
      <P>
        Revealing a candidate&rsquo;s phone number costs money. Sending that same candidate an email
        does not. Those two sentences read like a billing detail, and they are really a design
        constraint, because between them they decide the order in which a sequence is allowed to do
        things.
      </P>
      <P>
        On one candidate the difference is trivial. On a role where a few hundred people are being
        approached, the order you spend in is most of what you spend. A sequence that reaches for the
        number first pays for everybody on the list. A sequence that reaches for it last pays only
        for the people the free channel could not reach.
      </P>

      <H2>So the call sits on day three</H2>
      <P>
        On EmployLabs the call comes late in the outreach sequence, on day three, once email has had
        a real chance to work. Not because the call is a weak channel &mdash; it is often the one
        that finally lands &mdash; but because it is the paid one, and a paid step placed early buys
        numbers it turns out not to have needed.
      </P>
      <P>
        That was not settled by taste. We looked at what happened when a dial went out to somebody
        who had received exactly one email. Across a small run of dials it reached nobody at all.
        Every one of those numbers had been paid for first.
      </P>

      <Pull>A number bought on day one is bought before the free channel has finished its work.</Pull>

      <P>
        The run was small and we are not going to dress it up as a statistic. It did not need to be
        large to settle the question, because the question was never whether calling works. It was
        whether calling works better than an email that has not yet been given time to arrive, be
        opened, and sit in somebody&rsquo;s inbox over a lunch break.
      </P>

      <H2>Everything knowable for free is checked before you pay</H2>
      <P>
        There is a second and quieter way to waste a reveal, and it is worse than mistiming one:
        buying a number for a call that was never going to be placed.
      </P>
      <P>
        The candidate may have opted out. The role may have closed. They may already have replied to
        the email, which makes the call not merely unnecessary but rude. None of those facts needs a
        phone number to establish, so all of them are checked before the reveal is paid for, never
        after it.
      </P>
      <P>
        Written down, the ordering sounds obvious. It is easy to get wrong in practice, because the
        natural shape of the work is fetch the contact details, then decide what to do with the
        candidate &mdash; and that shape pays for every refusal it makes.
      </P>

      <H2>A dial that never happens still records why</H2>
      <P>
        If the answer to &ldquo;why was this person not called?&rdquo; lives in a log line, nobody can
        ask it about forty people at once. So every dial that does not happen writes down its reason
        in a field you can group by, rather than in prose somebody has to read one row at a time.
      </P>
      <P>
        That turns an unanswerable question into a table. Forty people were not called: how many
        because they had already replied, how many because they had opted out, how many because the
        role had closed, how many simply because the sequence had not reached day three yet. Those are
        four different situations, and only some of them are a problem.
      </P>
      <P>
        It also means an absence never has to be explained by guesswork. A recruiter who notices that
        a batch looks quiet can see what the quiet is made of, in one view, without asking anyone to
        go and look.
      </P>

      <H2>The principle is older than the feature</H2>
      <P>
        Order your spending so the expensive step runs only once the cheap one is genuinely
        exhausted. That rule reaches well past phone numbers. Any pipeline mixing free work with paid
        work has a right order and a wrong one, and the wrong one is usually the order that feels more
        thorough.
      </P>
      <Bullets>
        <li>
          <Strong>Cheap first, and for long enough to count.</Strong> A free channel that is cut off
          after a day has not been tried; it has been sampled, and the paid step inherits work the
          free one was about to do.
        </li>
        <li>
          <Strong>Refusals should be free.</Strong> Every reason to stop that can be established
          without the purchase is established without the purchase, so deciding not to act costs
          nothing.
        </li>
        <li>
          <Strong>An absence needs a reason, not a silence.</Strong> The thing that did not happen is
          as much a part of the record as the thing that did, and it is only useful if you can count
          it.
        </li>
      </Bullets>

      <H2>How to use it</H2>
      <Steps>
        <li>
          Let the sequence reach day three before you judge the call rung. A campaign read on day one
          is a reading of the email, not of the calling.
        </li>
        <li>
          When a batch produces fewer dials than you expected, group the not-called reasons before
          changing anything. Replies and opt-outs are the sequence working, not failing.
        </li>
        <li>
          If you want the call sooner on a particular role, move it deliberately and watch what it
          costs. The default is late because late is cheaper, not because early is forbidden.
        </li>
      </Steps>
    </>
  );
}

export const post: BlogPost = {
  slug: "we-call-last-on-purpose",
  title: "We call last, on purpose",
  dek: "Revealing a phone number costs money and email does not, so the call waits until day three. Everything that can be checked without the number is checked before the number is bought.",
  answer:
    "EmployLabs places the phone call late in the outreach sequence, on day three, because revealing a candidate's number costs money and email does not. Every reason not to call that can be established without the number is checked before the reveal is paid for, and every dial that does not happen records a groupable reason.",
  category: "update",
  motif: "ceiling",
  publishedAt: "2026-09-23",
  readingMinutes: 4,
  topics: [
    "outreach sequencing",
    "phone number reveal",
    "recruiting spend control",
    "candidate outreach",
    "call rung",
  ],
  faq: [
    {
      q: "Why does the AI email candidates before it calls them?",
      a: "Because revealing a phone number costs money and email does not. The call sits on day three so the free channel has had a real chance first, and a small run of dials to people who had received exactly one email reached nobody at all.",
    },
    {
      q: "Do you buy a phone number for a candidate who has already opted out?",
      a: "No. Opt-outs, closed roles and candidates who have already replied are all checked before the reveal is paid for, because none of those facts needs the number to establish.",
    },
    {
      q: "Can I find out why a candidate was never called?",
      a: "Yes. Every dial that does not happen records its reason in a field you can group by, so a question like why forty people were not called is answered as a count per reason rather than by reading logs.",
    },
  ],
  Body,
};
