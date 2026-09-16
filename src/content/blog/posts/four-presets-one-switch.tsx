import type { BlogPost } from "../types";
import { P, H2, Pull, Steps, Bullets, Strong } from "@/components/blog/prose";

function Body() {
  return (
    <>
      <H2>Autonomy is not one property of a product</H2>
      <P>
        Most tools that automate anything ask a single question: is this on. It is a tidy question and
        it does not fit recruiting, because the amount of independence you are willing to grant is not a
        fact about the software. It is a fact about the role.
      </P>
      <P>
        A confidential search for a managing director, where three wrong approaches would end the
        mandate, and a support role you are hiring twelve of before the quarter closes, are not the same
        risk wearing different titles. Giving them the same leash means one of the two is being run
        badly, and which one depends on where you set the single switch.
      </P>

      <H2>Four postures, chosen per role</H2>
      <P>
        So the choice on EmployLabs is not on or off. You choose how far the system runs on its own, on
        each role, from four positions.
      </P>
      <Bullets>
        <li>
          <Strong>Fully manual.</Strong> The system prepares and recommends; every action is yours. The
          work of thinking is done for you and none of the acting is.
        </li>
        <li>
          <Strong>Sourcing only.</Strong> It finds and assembles the pool on its own, and stops at the
          point where somebody would be contacted.
        </li>
        <li>
          <Strong>Through outreach.</Strong> It sources and it reaches candidates, and hands the
          conversation back at the stage beyond that.
        </li>
        <li>
          <Strong>The full pipeline.</Strong> It runs the search end to end, and comes to you when it
          genuinely needs a person.
        </li>
      </Bullets>
      <P>
        The natural reading of that list is a ladder, and it usually is one: a team starts at the bottom
        on everything, moves a familiar role up a step, and leaves the delicate ones where they are.
        Nothing requires you to climb it, and there is no posture that counts as the correct one.
      </P>

      <H2>One switch above all four</H2>
      <P>
        Above the four sits a master switch that stops everything. Not a pause on one role, not a queue
        that drains first &mdash; a single control that halts the lot, whatever posture each role was
        set to.
      </P>
      <P>
        It exists for the situation nobody plans for. A client pulls a mandate. A merger is announced
        and nothing should go out under your name this week. Something looks wrong and you do not yet
        know what. In that moment you do not want to visit eleven roles and reason about each one, and a
        control you have to apply eleven times is not a stop.
      </P>

      <Pull>A stop you have to apply role by role is not a stop. It is a list of things to remember while worried.</Pull>

      <H2>Why the dial is per role and not per account</H2>
      <P>
        An account-level setting forces the whole desk to move at the pace of its most sensitive search.
        That is how automation ends up switched off everywhere: one role genuinely cannot be run
        unattended, so nothing is, and the volume work that would have benefited most keeps being done by
        hand.
      </P>
      <P>
        Setting it per role lets the two coexist. The executive search stays manual, or stops at
        sourcing, while the support hiring runs the full pipeline &mdash; on the same desk, in the same
        week, with the same person supervising both at the level each deserves.
      </P>

      <H2>Changing your mind is ordinary</H2>
      <P>
        A posture is a setting on a role, not a commitment about it. Move a role up when it has earned
        it and down when circumstances change, and the master switch remains where it is regardless.
        Autonomy on this platform is a dial you set, revisit and reset, rather than a property you
        bought.
      </P>

      <H2>The stop belongs to you</H2>
      <P>
        It matters who holds a control like this. The version of a stop that does not count is the one
        where you email somebody, explain the situation, and wait for a person at a vendor to act on
        your behalf during their working hours. That is not a switch. It is a request, and a request has
        a queue in front of it.
      </P>
      <P>
        The master switch is part of the product, in the account, operated by you. There is no case in
        which stopping the system requires our participation, because a stop that depends on us is a
        stop that is unavailable at precisely the moment it is wanted &mdash; late in the evening, over a
        weekend, in the twenty minutes between a phone call and a board meeting.
      </P>
      <P>
        The same reasoning applies to the postures themselves. They are settings you own rather than a
        tier we configure for you, which is why moving a role down a step needs no conversation with
        anybody and leaves no trace beyond the change itself.
      </P>

      <H2>How to use it</H2>
      <Steps>
        <li>
          Set the posture when you open the role, while you are still thinking about what the role is.
          Chosen later, it tends to be chosen in a hurry.
        </li>
        <li>
          Ask what a wrong action would cost on this particular search, not on average. That question
          picks the posture almost by itself.
        </li>
        <li>
          Move one role up a step at a time rather than the whole desk at once, so you learn something
          from each change.
        </li>
        <li>
          Know where the master switch is before you need it. It is the control you will want to reach
          for without looking.
        </li>
      </Steps>
    </>
  );
}

export const post: BlogPost = {
  slug: "four-presets-one-switch",
  title: "Four postures, one master switch",
  dek: "Four postures per role — fully manual, sourcing only, through outreach, the full pipeline — and one switch above all of them that stops everything.",
  answer:
    "EmployLabs makes autonomy a setting on each role rather than a property of the product. You choose one of four postures — fully manual, sourcing only, through outreach, or the full pipeline — and a master switch above all four stops everything. A confidential executive search and a volume support role do not deserve the same leash.",
  category: "update",
  motif: "rows",
  publishedAt: "2026-10-25",
  readingMinutes: 4,
  topics: ["automation levels", "autonomy controls", "master switch", "hiring automation", "confidential search", "recruiter control"],
  faq: [
    {
      q: "How much of the hiring process can I let run automatically?",
      a: "As much or as little as you choose, role by role. The four postures are fully manual, sourcing only, through outreach, and the full pipeline, and each role carries its own setting rather than inheriting one from the account.",
    },
    {
      q: "How do I stop everything quickly if something goes wrong?",
      a: "A master switch sits above all four postures and halts everything at once, whatever each individual role was set to. It is one control rather than a change you have to apply to each role in turn.",
    },
    {
      q: "Can different roles run at different levels of automation at the same time?",
      a: "Yes, and that is the intent. A confidential executive search can stay fully manual or stop at sourcing while volume hiring runs the full pipeline, on the same desk and in the same week.",
    },
  ],
  Body,
};
