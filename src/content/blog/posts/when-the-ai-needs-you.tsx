import type { BlogPost } from "../types";
import { P, H2, Pull, Steps, Bullets, Strong } from "@/components/blog/prose";

function Body() {
  return (
    <>
      <H2>Autonomy is easy until it needs something</H2>
      <P>
        A pipeline that sources, writes, sends, schedules and interviews on its own is straightforward
        to describe. The hard part is not the running. It is the moment the running has to stop,
        because the next step depends on something only a person can supply: a judgement about a brief,
        a ceiling nobody has authorised, a decision about whether this candidate goes forward.
      </P>
      <P>
        That moment is not an edge case and it is not a failure. It arrives on every role, usually more
        than once. So the useful question about any autonomous system is not how much it can do
        unattended. It is what it does at the point it cannot.
      </P>

      <H2>A notification hands the work back</H2>
      <P>
        The usual answer is a notification. Something happened, here is a line about it, and the rest
        is yours. You open the role, reconstruct what state it is in, work out whether the event
        matters, decide what the response should be, and then go and do it somewhere else in the
        product.
      </P>
      <P>
        That is a reasonable design for a tool and a poor one for something that claims to be doing the
        work. It gives you the easy part — the fact that an event occurred — and keeps none of the hard
        part, which is knowing what the event means and what would settle it. Twenty roles produce
        twenty of those, and the inbox becomes a list of things to think about rather than a list of
        things to answer.
      </P>

      <H2>An intervention has a kind</H2>
      <P>
        When the pipeline on EmployLabs needs a person, it does not post a message. It opens an
        intervention, and an intervention has a type. It is attached to the role and to the specific
        piece of work it is holding, and the type is drawn from a closed set rather than written out
        in prose each time.
      </P>
      <P>The kinds are named, and each one is a different question:</P>
      <Bullets>
        <li>
          <Strong>Low yield.</Strong> The search is returning too little to be worth continuing in the
          shape it is currently in.
        </li>
        <li>
          <Strong>Pool unclearable.</Strong> What is in the pool cannot be worked through to a result
          as it stands.
        </li>
        <li>
          <Strong>Needs ceiling.</Strong> The work has reached a limit it is not permitted to raise on
          its own.
        </li>
        <li>
          <Strong>No new supply.</Strong> The market is not producing new people to consider for this
          brief.
        </li>
        <li>
          <Strong>Budget exhausted.</Strong> The spend allowed for this work has been used.
        </li>
        <li>
          <Strong>Assessment approval.</Strong> An interview is ready to go ahead and wants a person to
          say so.
        </li>
        <li>
          <Strong>Clarify a brief.</Strong> Something in the role is ambiguous enough that guessing
          would be worse than asking.
        </li>
        <li>
          <Strong>Confirm a placement.</Strong> A hire appears to have happened and needs confirming.
        </li>
        <li>
          <Strong>Raise an invoice.</Strong> The commercial step that follows a confirmed placement.
        </li>
      </Bullets>

      <Pull>
        A notification tells you something happened. An intervention asks one answerable question and
        holds that work until you answer it.
      </Pull>

      <H2>What is blocked, and what answering it will do</H2>
      <P>
        Every intervention states two things: the work that is currently stopped, and what resolving it
        will release. That pairing is the whole point. It turns an item in a queue into a decision with
        a visible consequence, which is the difference between reading your inbox and working it.
      </P>
      <P>
        It also makes the queue honest about priority. An intervention that unblocks an interview
        tomorrow and one that unblocks a line of paperwork are not the same urgency, and you can tell
        which is which without opening either. Nothing in the list is there to inform you. Everything
        in it is there because a specific piece of work is waiting on you.
      </P>

      <H2>Resolving one thing resolves exactly one thing</H2>
      <P>
        Answering an intervention unblocks what that intervention named, and nothing else. There is no
        blanket approval and no cascade where clearing one item quietly authorises three more you did
        not read.
      </P>
      <P>
        This sounds like a restriction and is closer to the opposite. It is what lets you answer
        quickly. A decision whose consequences are bounded can be taken in a few seconds; a decision
        that might mean anything has to be investigated first, and the investigating is how an inbox
        stops being worked at all.
      </P>

      <H2>Supervising rather than monitoring</H2>
      <P>
        The practical effect is that your relationship with the pipeline changes shape. You are not
        watching it in case something goes wrong. You are answering the questions it has decided it
        cannot answer, in the order that matters, with the rest carrying on around you.
      </P>
      <P>
        A role with no open intervention needs nothing from you, and that statement is worth as much as
        the questions are. It is only true because the system is willing to ask.
      </P>

      <H2>How to use it</H2>
      <Steps>
        <li>
          Work the intervention list rather than the roles. It is already ordered by what is actually
          waiting, which a list of roles is not.
        </li>
        <li>
          Read the kind before the detail. Nine types, each a different question, and the type usually
          tells you whether this is ten seconds or a conversation.
        </li>
        <li>
          Treat a repeated kind on one role as information. A brief that has asked to be clarified
          twice is telling you something about the brief, not about the pipeline.
        </li>
        <li>
          Resolve rather than dismiss. The thing that was blocked stays blocked until the question is
          answered, which is the behaviour you want from anything holding real work.
        </li>
      </Steps>
    </>
  );
}

export const post: BlogPost = {
  slug: "when-the-ai-needs-you",
  title: "When the AI needs you, it asks a specific question",
  dek: "The pipeline runs on its own until it genuinely cannot. At that point it opens a typed request naming what is blocked and what answering will release, rather than sending you a notification.",
  answer:
    "EmployLabs runs the recruiting pipeline autonomously and, when it needs a person, opens a typed intervention rather than a notification. Kinds include low yield, pool unclearable, needs ceiling, no new supply, budget exhausted, assessment approval, clarify a brief, confirm a placement and raise an invoice. Each names what is blocked and what resolving it releases.",
  category: "update",
  motif: "rows",
  publishedAt: "2026-09-16",
  readingMinutes: 4,
  topics: ["human in the loop", "recruiting automation", "intervention inbox", "hiring workflow", "AI recruiter", "recruiting operations"],
  faq: [
    {
      q: "How do I know when the AI recruiter needs me to do something?",
      a: "It opens an intervention against the role. Each one has a named kind, states the work currently blocked, and states what resolving it will release, so the list is a queue of decisions rather than a feed of events to interpret.",
    },
    {
      q: "What kinds of things does it actually ask about?",
      a: "Low yield, an unclearable pool, a ceiling it may not raise itself, no new supply in the market, an exhausted budget, approving an assessment, clarifying an ambiguous brief, confirming a placement, and raising the invoice that follows one.",
    },
    {
      q: "If I approve one request, what else does that approve?",
      a: "Nothing else. Resolving an intervention unblocks the specific work it named and no more. There is no blanket approval and no cascade, which is what makes each answer safe to give quickly.",
    },
  ],
  Body,
};
