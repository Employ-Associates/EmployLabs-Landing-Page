import type { BlogPost } from "../types";
import { P, H2, Pull, Steps, Bullets, Strong } from "@/components/blog/prose";

function Body() {
  return (
    <>
      <H2>Off is the starting position</H2>
      <P>
        Automation on EmployLabs arrives switched off. Not throttled, not limited to a small first
        batch &mdash; off. A role you create today will source, screen and prepare outreach and will
        not contact anybody, because nothing runs unattended until you deliberately turn it on.
      </P>
      <P>
        That is an unusual default for a product whose entire argument is that the work can run without
        you. It is deliberate. The value of an autonomous recruiter is not that it acts; it is that it
        acts the way you would have. Those are different claims, and only one of them can be checked in
        advance.
      </P>

      <H2>What a dry run actually shows</H2>
      <P>
        In dry run the engine does the thinking and stops before the doing. It shows you exactly what it
        would do, on your role, with your candidates.
      </P>
      <Bullets>
        <li>
          <Strong>Who it would contact.</Strong> Named people, not a count. You can look down the list
          and decide whether you would have picked them.
        </li>
        <li>
          <Strong>Who it would screen out.</Strong> Usually the more informative half. A system&rsquo;s
          rejections tell you what it believes about the role far more precisely than its selections
          do.
        </li>
        <li>
          <Strong>What it would spend.</Strong> The cost of the run it is proposing, before the run is a
          thing that has happened.
        </li>
      </Bullets>
      <P>
        None of it takes effect. No email leaves, no candidate is written to, no balance moves. The
        output is a description of an intention.
      </P>

      <Pull>A rehearsal you can disagree with is worth more than a result you have to accept.</Pull>

      <H2>Why the burden sits with us</H2>
      <P>
        There is a way of introducing automation that asks for faith first and evidence afterwards:
        switch it on, watch what happens, judge it on the results. It is a poor deal for the person
        being asked, because the cost of being wrong lands on their domain, their candidates and their
        reputation, and none of it can be taken back.
      </P>
      <P>
        We think a product confident in its own judgement should be willing to show its working before
        it is allowed to act on it. Dry run is that willingness made into a default rather than a
        setting you have to find. If the engine were only right on average, being watched closely on one
        role would be uncomfortable, and that is rather the point.
      </P>

      <H2>Watch it be right on roles you know</H2>
      <P>
        The useful way to evaluate this is not an abstract one. Take a role you have worked yourself,
        where you already know who the plausible candidates are and what a bad approach looks like. Let
        the engine prepare its run and read it as you would read a junior colleague&rsquo;s shortlist,
        with the same questions: would I have contacted this person, and why has this one been dropped.
      </P>
      <P>
        Disagreements at that stage are cheap and informative. They are usually a brief that says less
        than you thought it did, or a screening bar set somewhere you would not have set it, and both are
        adjustable. Disagreements found after four hundred emails have gone out are neither cheap nor
        adjustable.
      </P>

      <H2>Turning it on is a separate act</H2>
      <P>
        Going live is not the absence of an objection. It is a decision you make, on a role, once you
        have seen enough. A role sitting in dry run stays in dry run indefinitely, and it is a perfectly
        reasonable way to run a search: the preparation is done for you and the acting remains yours.
      </P>

      <H2>What a dry run is not</H2>
      <P>
        It is not a demonstration on somebody else&rsquo;s data, where the role has been chosen to
        flatter the system and the candidates are strangers to you. A curated example tells you the
        product can work. It cannot tell you whether it works on the roles you actually carry, which is
        the only question you were asking.
      </P>
      <P>
        Nor is it a sample of the real thing. The dry run is the run: the same reading of your brief,
        the same screening decisions, the same proposed contacts, held at the last moment before any of
        it leaves the building. That is what makes disagreeing with it meaningful. You are not
        objecting to a mock-up of a decision, you are objecting to the decision, and the objection is
        recorded before it costs anybody anything.
      </P>
      <P>
        It is also not a review queue you must clear item by item for ever. Dry run is a posture for the
        period in which you are forming a view, and forming a view is supposed to end.
      </P>

      <H2>How to use it</H2>
      <Steps>
        <li>
          Start on a role you know well rather than the one you are least sure about. You are testing
          the engine&rsquo;s judgement, and that requires you to have judgement of your own to compare
          it with.
        </li>
        <li>
          Read the screened-out list before the contact list. It is where a mistaken reading of the
          brief shows up first.
        </li>
        <li>
          Fix what you disagree with, run it again, and keep going until a run contains nothing that
          surprises you. That is the moment to turn it on, and not before.
        </li>
      </Steps>
    </>
  );
}

export const post: BlogPost = {
  slug: "dry-run-by-default",
  title: "Dry run by default",
  dek: "Automation arrives switched off. In dry run the engine shows which candidates it would contact, which it would screen out and what it would spend, without doing any of it.",
  answer:
    "EmployLabs starts every role with automation switched off. In dry run the engine shows exactly what it would do — which candidates it would contact, which it would screen out, and what it would spend — without doing any of it. Nothing runs unattended until you turn it on deliberately.",
  category: "update",
  motif: "consent",
  publishedAt: "2026-10-24",
  readingMinutes: 4,
  topics: ["dry run", "automation safety", "hiring automation", "trust in AI", "pipeline preview"],
  faq: [
    {
      q: "Does EmployLabs start contacting candidates as soon as I create a role?",
      a: "No. Automation arrives switched off. A new role can source, screen and prepare outreach while contacting nobody, and nothing runs unattended until you deliberately turn it on.",
    },
    {
      q: "What does dry run mode show me?",
      a: "Dry run shows exactly what the engine would do on your role: which candidates it would contact, which it would screen out, and what it would spend. None of it takes effect, so the output is a description of an intention rather than a record of an action.",
    },
    {
      q: "How do I decide when to let automation run for real?",
      a: "Run it in dry run on a role you already know well and read its proposed contacts and rejections as you would a colleague's shortlist. Adjust what you disagree with, run it again, and switch it on when a run contains nothing that surprises you.",
    },
  ],
  Body,
};
