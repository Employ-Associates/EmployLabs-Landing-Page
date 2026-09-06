import type { BlogPost } from "../types";
import { P, H2, Pull, Steps, Bullets, Strong } from "@/components/blog/prose";

function Body() {
  return (
    <>
      <H2>Autonomy and spend are the same conversation</H2>
      <P>
        Anything that sources, enriches and contacts candidates on its own is spending money on its
        own. That is the whole promise, and it is also the reason most teams hesitate. A system that
        works while you sleep can also spend while you sleep, and the failure mode people imagine is
        waking up to a bill for a search that was never going to work.
      </P>
      <P>
        So the cap is not a settings-page detail. It is the thing that makes the autonomy usable.
      </P>

      <H2>A ceiling per role, and one for the account</H2>
      <P>
        You set a limit on what a role may consume, and a limit for the account overall. When either is
        reached, the work stops and you are told which one stopped it. Nothing continues quietly at a
        reduced rate, and nothing waits for you to notice.
      </P>

      <Pull>Being told no is free. Nothing is bought in order to discover the limit.</Pull>

      <P>
        That second part matters more than it sounds. The naive way to enforce a cap is to do the work,
        then check the balance, which means every refusal still costs you the thing it refused. Every
        check on the platform happens above the paid call, so a role that has hit its ceiling stops
        without spending anything to find out.
      </P>

      <H2>What each action costs, before you run it</H2>
      <P>
        Sourcing, contact lookup, outreach and interviews each draw from a balance you can see, with a
        ledger you can reconcile line by line. The point is not the accounting. It is that you can
        answer &ldquo;what did this role cost us&rdquo; without an invoice arriving three weeks later to
        tell you.
      </P>

      <H2>Nothing autonomous starts on its own</H2>
      <Bullets>
        <li>
          <Strong>Every role begins fully manual.</Strong> Automation runs only on roles you have
          explicitly armed, at the level you chose.
        </li>
        <li>
          <Strong>Arming requires a decision, not a default.</Strong> A role that has not chosen how
          far to automate cannot be armed at all, because &ldquo;on&rdquo; without a posture means
          something different to every person who reads it.
        </li>
        <li>
          <Strong>Approving a send or a spend refuses an agent caller.</Strong> Meera can recommend the
          entire configuration and cannot arm it. That refusal lives in the code rather than in a
          prompt.
        </li>
      </Bullets>

      <H2>When something stops, it says why</H2>
      <P>
        A stopped pipeline with no explanation is worse than one that keeps running, because you cannot
        tell it apart from a broken one. Every stop carries a sentence naming what stopped, why, and
        what would restart it. If the cap is what stopped it, you are told the number, what it bought,
        and what the pool looks like now, so raising it is a decision rather than a reflex.
      </P>

      <H2>How to use it</H2>
      <Steps>
        <li>
          Set the role ceiling at the point you arm automation. It is a limit rather than a budget, so
          set it to the most you would be willing to spend, not the amount you expect.
        </li>
        <li>
          Read the stop reason before you raise the cap. Sometimes the honest answer is that the pool
          is telling you the brief is wrong, and more sourcing deepens the problem.
        </li>
        <li>
          Reconcile against the ledger at the end of a role. Cost per role is the number that tells you
          which searches are worth automating.
        </li>
      </Steps>
    </>
  );
}

export const post: BlogPost = {
  slug: "set-a-budget-and-never-spend-past-it",
  title: "Set a budget, and never spend past it",
  dek: "A ceiling per role and per account. When it is reached, work stops and you are told. Nothing is bought in order to discover the limit.",
  answer:
    "EmployLabs enforces spend ceilings per role and per account. Every limit check happens above the paid call, so a refusal costs nothing. Roles start fully manual and cannot be armed without choosing an automation posture, approving any send or spend refuses an AI caller, and every stop states what halted the work and what would restart it.",
  category: "update",
  motif: "ceiling",
  publishedAt: "2026-09-10",
  readingMinutes: 2,
  topics: ["recruiting budget", "spend control", "hiring automation", "cost per hire", "automation safety"],
  faq: [
    {
      q: "How does EmployLabs stop automation overspending?",
      a: "Ceilings are set per role and per account. Every check runs above the paid call, so when a limit is reached the work stops without buying anything to discover it, and the reason is stated in the interface.",
    },
    {
      q: "Can the AI arm automation or approve spending by itself?",
      a: "No. Approving a send or a spend, and arming automation, all refuse an AI caller in code. Meera can recommend a full configuration, but the arming click belongs to a person.",
    },
    {
      q: "What happens when a role hits its spend cap?",
      a: "Work stops and the interface states which limit stopped it, what the spend bought, and the current state of the candidate pool, so raising the cap is a deliberate decision rather than a reflex.",
    },
  ],
  Body,
};
