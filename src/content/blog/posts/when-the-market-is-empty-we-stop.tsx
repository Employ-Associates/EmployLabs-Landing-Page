import type { BlogPost } from "../types";
import { P, H2, Pull, Steps, Bullets, Strong } from "@/components/blog/prose";

function Body() {
  return (
    <>
      <H2>Every search has a floor</H2>
      <P>
        Somewhere below every brief there is a point at which the people who meet it have run out. Not
        run out of budget, not run out of patience. Run out. The role asks for a combination of things
        that a finite number of people have, and in a given market at a given moment that number is
        sometimes very small.
      </P>
      <P>
        This is ordinary and it is not a failure of the search. What matters is what happens at that
        point, because it is the moment a recruiting tool decides whether it is working for you or
        working on its own numbers.
      </P>

      <H2>What we do: stop, and say so</H2>
      <P>
        When a search genuinely runs out of people who meet the brief, the system raises a gate and
        stops buying more data. The work halts and waits for a person. You are told, in plain terms,
        that the market is thin.
      </P>
      <P>
        The gate is the product doing its job rather than the product giving up. Continuing past that
        point costs money and produces nothing you would have wanted, and the only reason to do it is
        that stopping requires an admission.
      </P>

      <H2>What we deliberately do not do</H2>
      <P>
        We do not quietly relax the bar to manufacture more candidates so the funnel keeps looking
        healthy. That is the easy move, and it is the one almost every metric in this industry rewards.
        Loosen the seniority band, drop a requirement that was inconvenient, widen the geography by a
        few hundred miles, and the shortlist refills on its own.
      </P>
      <P>
        Nothing in that sequence is visible to you. The names arriving in your pipeline still look like
        candidates. They are simply no longer the candidates you asked for, and you find out weeks later
        in an interview, when someone cannot answer the question the requirement existed to protect.
      </P>

      <Pull>
        A recruiting tool that never tells you the market is empty is not being optimistic. It is
        spending your money to avoid an awkward conversation.
      </Pull>

      <H2>The choice is put to you, explicitly</H2>
      <P>
        When the gate is raised you get the situation and the options, not a suggestion dressed up as a
        result. There are three honest answers to a thin market, and they belong to you.
      </P>
      <Bullets>
        <li>
          <Strong>Widen the brief.</Strong> Decide which requirement you are willing to trade, in the
          open, knowing what you are trading it for.
        </li>
        <li>
          <Strong>Raise the spend ceiling.</Strong> Sometimes the people exist and reaching them costs
          more than the role was originally given.
        </li>
        <li>
          <Strong>Accept a smaller shortlist.</Strong> Three genuine candidates is a real outcome, and
          for some roles it is the right one.
        </li>
      </Bullets>
      <P>
        Which of those is correct depends on how badly the role is needed, what the hiring manager will
        accept, and what the business is trying to do this quarter. None of that is in our data. It is a
        judgement about the role, and it stays with the human who owns the role.
      </P>

      <H2>Spend behaves the same way</H2>
      <P>
        The same restraint applies to money. When a ceiling is reached, the work stops and asks, rather
        than continuing and explaining afterwards. The two cases are really one principle: a system
        running on your behalf is allowed to reach a limit, and it is not allowed to decide on its own
        that the limit was the wrong one.
      </P>
      <P>
        An explanation after the fact is not consent. It is a bill with a narrative attached, and by the
        time you read it the decision has already been made by something that was never entitled to make
        it.
      </P>

      <H2>What this changes for your week</H2>
      <P>
        You find out on day three that a brief is unhirable as written, rather than on day twenty-four
        when the shortlist turns out to be full of near misses. That is three weeks and a good deal of
        money returned to you, and it is returned in the form of a conversation you can still have with
        the hiring manager while it is useful.
      </P>
      <P>
        It also makes a full funnel mean something. If a search keeps producing candidates, it is
        because the market keeps producing them, not because the bar quietly descended to meet the
        target.
      </P>

      <H2>How to use it</H2>
      <Steps>
        <li>
          Read the stop before you react to it. It is telling you something about the market that no
          amount of additional sourcing will change.
        </li>
        <li>
          If you widen the brief, widen one thing deliberately rather than several at once. You want to
          know which trade bought you the candidates.
        </li>
        <li>
          Take a thin market to the hiring manager as evidence. A search that stopped and said why is a
          far stronger argument for changing the role than a shortlist of people nobody wants to
          interview.
        </li>
      </Steps>
    </>
  );
}

export const post: BlogPost = {
  slug: "when-the-market-is-empty-we-stop",
  title: "When the market is empty, we stop",
  dek: "A search that runs out of qualified people raises a gate rather than lowering the bar to keep the funnel full. You are told the market is thin, and the decision about what to do next stays yours.",
  answer:
    "EmployLabs stops a search and raises a gate when the market genuinely runs out of people who meet the brief, rather than relaxing the bar to manufacture more candidates. You are told the market is thin, and the choice of widening the brief, raising the spend ceiling or accepting a smaller shortlist stays with you.",
  category: "update",
  motif: "funnel",
  publishedAt: "2026-10-11",
  readingMinutes: 4,
  topics: [
    "talent market",
    "candidate sourcing",
    "spend control",
    "hiring automation",
    "human oversight",
    "recruiting strategy",
  ],
  faq: [
    {
      q: "What happens when a search runs out of qualified candidates?",
      a: "The system raises a gate and stops buying more data instead of continuing. You are told the market is thin and given the choice explicitly: widen the brief, raise the spend ceiling, or accept a smaller shortlist.",
    },
    {
      q: "Will the platform lower my requirements to find more candidates?",
      a: "No. Relaxing the bar to keep a funnel looking healthy is the one thing it deliberately does not do, because the extra names are no longer the candidates you asked for and nothing in the pipeline would show you that.",
    },
    {
      q: "What happens when a role reaches its spend ceiling?",
      a: "The work stops and asks rather than continuing and explaining afterwards. An explanation after the fact is not consent, so the decision to spend more is made by a person before the money is spent.",
    },
  ],
  Body,
};
