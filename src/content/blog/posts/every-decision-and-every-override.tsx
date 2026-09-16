import type { BlogPost } from "../types";
import { P, H2, Pull, Steps, Bullets, Strong } from "@/components/blog/prose";

function Body() {
  return (
    <>
      <H2>The reasoning is the first thing a manual process throws away</H2>
      <P>
        When a person screens a hundred CVs on a Tuesday afternoon, something is decided a hundred
        times and written down once, as a shortlist. The reasoning was real at the moment it was
        applied. It just had nowhere to go. By Friday it has gone from the recruiter&rsquo;s head as
        well, and what remains is a list of names with no account of the people who are not on it.
      </P>
      <P>
        Nobody sensible blames a recruiter for that. It is the ordinary cost of doing the work by
        hand, and the only alternative would be writing a paragraph about every rejection, which is
        not a job anyone would take. The real question is whether it is still an acceptable cost when
        the screening is not being done by hand at all.
      </P>
      <P>
        We think it is not. When software makes the decision, there is no excuse for the basis of the
        decision to be missing. The machine was not tired at four in the afternoon and it did not have
        to remember anything.
      </P>

      <H2>Every decision on the role, on one timeline</H2>
      <P>
        On EmployLabs, every automated decision taken on a role sits on a single timeline for that
        role. You can see what was decided, when it was decided, and on what basis. Not a summary
        produced afterwards and not a count of actions taken, but the decisions themselves, in the
        order they happened.
      </P>
      <P>
        That means the timeline is readable as a narrative rather than a log. You can start at the top
        of the role and follow it down, and the shape of the search is visible in it: where the
        criteria bit hardest, where the bar moved, where a judgement was made that nobody would have
        thought to ask about later.
      </P>

      <H2>Your override sits next to the reasoning it replaced</H2>
      <P>
        Where you disagreed, your override goes onto the same timeline, beside the reasoning it
        replaced rather than on top of it. The original decision is not overwritten, and it is not
        quietly tidied away once a human has had the last word.
      </P>
      <P>
        Keeping both is deliberate. A system that discarded its own reasoning the moment you corrected
        it would look tidier and tell you considerably less. Two versions of one decision sitting next
        to each other is a thing you can read, and the pattern across a role is worth more than any
        single correction. If you are overriding the same call again and again, that is rarely a run
        of individual mistakes. It is usually the brief, or the bar, telling you something.
      </P>

      <Pull>
        Software has no excuse for losing its reasoning. It did not screen a hundred people in an
        afternoon and then go home.
      </Pull>

      <H2>The question that arrives three weeks late</H2>
      <P>
        A hiring manager comes back long after the fact and asks why a particular person never reached
        them. They have seen the profile somewhere, or a colleague mentioned a name, and they want to
        know what happened to it.
      </P>
      <P>
        Answered from memory, this goes badly in a familiar way. &ldquo;I think we felt they were
        light on the infrastructure side&rdquo; is a sentence that satisfies nobody, least of all the
        person saying it. Answered from the timeline, it is a matter of record: here is the decision,
        here is when it was taken, here is the basis it was taken on, and here is whether anybody
        disagreed with it at the time.
      </P>
      <P>
        That conversation stops being defensive. It becomes a conversation about whether the basis was
        right, which is a much more useful thing to be discussing, and one that can actually change how
        the rest of the search runs.
      </P>

      <H2>Being able to audit is what makes autonomy reasonable</H2>
      <P>
        The uncomfortable part of autonomous software is not that it acts on its own. It is being
        asked to trust actions you have no way of inspecting afterwards. Remove the inspection and the
        only honest options left are supervising every step, which defeats the point, or not looking,
        which no recruiter with their name on the search is going to accept.
      </P>
      <Bullets>
        <li>
          <Strong>You can check without interrupting.</Strong> The work does not have to stop for you
          to satisfy yourself that it is being done properly.
        </li>
        <li>
          <Strong>You can disagree in place.</Strong> An override is a normal part of the record, not
          an exception that has to be explained.
        </li>
        <li>
          <Strong>You can answer for it later.</Strong> Whatever is running on your behalf, the account
          of what it did stays with the role.
        </li>
      </Bullets>

      <H2>How to use it</H2>
      <Steps>
        <li>
          Read the timeline early in a role rather than at the end. The basis of the first few
          decisions tells you whether the brief landed the way you intended.
        </li>
        <li>
          When you override something, expect the original to stay visible. It is there so you can
          compare, not as an argument with you.
        </li>
        <li>
          Look at your own overrides as a set. A repeated correction in the same place is a signal
          about the role, and it is much easier to see in a list than one decision at a time.
        </li>
      </Steps>
    </>
  );
}

export const post: BlogPost = {
  slug: "every-decision-and-every-override",
  title: "Every decision it made, and every one you overrode",
  dek: "Every automated decision on a role, and every human override of one, on a single timeline: what was decided, when, and on what basis.",
  answer:
    "EmployLabs keeps every automated decision on a role, and every human override of one, on a single timeline for that role. You can see what was decided, when, and on what basis. An override sits beside the reasoning it replaced rather than erasing it, so the original judgement and your correction can both be read later.",
  category: "update",
  motif: "timeline",
  publishedAt: "2026-10-15",
  readingMinutes: 4,
  topics: ["decision audit trail", "human override", "AI recruiting governance", "hiring transparency", "recruiter oversight"],
  faq: [
    {
      q: "Can I see why the AI rejected a particular candidate?",
      a: "Yes. Every automated decision on a role sits on that role's timeline with what was decided, when, and on what basis. So a question weeks later about why somebody never reached the hiring manager is answered from the record rather than from recollection.",
    },
    {
      q: "What happens to the original reasoning when I override a decision?",
      a: "It stays. Your override is recorded next to the reasoning it replaced rather than erasing it, so both can be read together. That also makes a repeated correction visible as a pattern, which usually says something about the brief or the bar.",
    },
    {
      q: "Why does an audit trail matter more for an AI recruiter than a human one?",
      a: "When a person screens a hundred CVs, the reasoning is gone by the end of the week and nobody expects otherwise. When software does the screening there is no such excuse, and being able to audit it is what makes it reasonable to let it run on its own.",
    },
  ],
  Body,
};
