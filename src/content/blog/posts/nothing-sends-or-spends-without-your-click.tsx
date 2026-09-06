import type { BlogPost } from "../types";
import { P, H2, Pull, Steps, Bullets, Strong } from "@/components/blog/prose";

function Body() {
  return (
    <>
      <H2>The question every buyer asks second</H2>
      <P>
        The first question is what it can do. The second, always, is what it can do without being
        asked. It is the right question, because the failure mode of an autonomous recruiting system
        is not a bad shortlist. It is four hundred emails sent from your domain, under your name, to
        people you would never have contacted.
      </P>

      <H2>Three refusals, in code</H2>
      <Bullets>
        <li>
          <Strong>Arming automation.</Strong> Every role starts fully manual. Autonomous work runs only
          on roles a person has explicitly switched on, at a level they chose, and a role that has not
          chosen a level cannot be armed at all.
        </li>
        <li>
          <Strong>Approving a send.</Strong> The gate that releases outreach refuses an AI caller
          outright.
        </li>
        <li>
          <Strong>Releasing spend.</Strong> Same refusal. Meera can propose an entire configuration,
          budget included, and cannot approve it.
        </li>
      </Bullets>
      <P>
        These are not prompt instructions. A prompt rule is a request, and it holds until a model
        decides otherwise or somebody rephrases the question. These refusals are conditions in the
        code, so the agent asking is rejected the same way a stranger would be.
      </P>

      <Pull>A prompt rule is a request. The refusal has to be a condition.</Pull>

      <H2>What the AI does instead</H2>
      <P>
        It does the work up to the decision and then presents it. The full automation configuration
        with reasons, the spend ceiling it thinks the role needs, the candidates it would contact.
        Everything except the click.
      </P>
      <P>
        That division is deliberate. The parts requiring judgement about consequences stay with the
        person who carries them, and the parts requiring only diligence do not wait for that person to
        be at their desk.
      </P>

      <H2>You can also see what was done</H2>
      <P>
        Every meaningful change is on the record with two separate facts: who executed it, and which
        human&rsquo;s authority it ran under. An agent acting for you is recorded as the agent, not as
        you. Those are different claims and collapsing them would make the log worthless in the one
        situation where anybody reads it.
      </P>

      <H2>How to use it</H2>
      <Steps>
        <li>
          Start a role in manual and watch one full cycle before arming anything. The gates are cheap;
          an unwanted send is not.
        </li>
        <li>
          Choose the automation level deliberately rather than accepting a default. &ldquo;On&rdquo;
          means something different to everyone who reads it, which is why we refuse to infer it.
        </li>
        <li>
          Check the change log when something surprises you. It answers who and under whose authority,
          which is usually the actual question.
        </li>
      </Steps>
    </>
  );
}

export const post: BlogPost = {
  slug: "nothing-sends-or-spends-without-your-click",
  title: "Nothing sends, spends or arms without your click",
  dek: "The failure mode of an autonomous recruiter is not a bad shortlist. It is four hundred emails from your domain to people you would never have contacted.",
  answer:
    "Three actions on EmployLabs refuse an AI caller in code rather than by prompt instruction: arming automation on a role, approving an outreach send, and releasing spend. Roles begin fully manual and cannot be armed without an explicit automation level. The AI prepares the full configuration and presents it; the click belongs to a person, and the change log records executor and authorising human separately.",
  category: "update",
  motif: "consent",
  publishedAt: "2026-10-07",
  readingMinutes: 2,
  topics: ["hiring automation", "automation safety", "recruiting compliance", "spend control", "AI governance"],
  faq: [
    {
      q: "What can an AI recruiting platform do without human approval?",
      a: "On EmployLabs, everything up to a decision with consequences. Arming automation, approving a send and releasing spend all refuse an AI caller in code, so the agent can prepare a full configuration but cannot enact it.",
    },
    {
      q: "Why is a code-level refusal better than a prompt instruction?",
      a: "A prompt rule is a request that holds until a model decides otherwise or someone rephrases the question. A condition in code rejects the agent the same way it would reject any unauthorised caller.",
    },
    {
      q: "Does the audit log distinguish between a person and an agent acting for them?",
      a: "Yes. Who executed a change and whose authority it ran under are recorded as separate facts. Collapsing them would make the log useless in the one situation where anyone reads it.",
    },
  ],
  Body,
};
