import type { BlogPost } from "../types";
import { P, H2, Pull, Steps, Bullets, Strong } from "@/components/blog/prose";

function Body() {
  return (
    <>
      <H2>A shortlist is not a stable object</H2>
      <P>
        A search gets run, a list comes back, and for about a day the list is what everyone means when
        they talk about the role. Then it starts to come apart. Someone declines. Two people never
        answer at all. One turns out, on a closer read, not to meet a requirement that mattered. None
        of that is unusual and none of it is failure; it is simply what a list of people does once you
        start contacting them.
      </P>
      <P>
        The awkward part is that nothing announces the shrinkage. The list is still there, still the
        same length on the screen, and the difference between the names on it and the names still in
        play is something a recruiter carries in their head. A fortnight later the pipeline is a third
        of what it was and the discovery usually happens on a Thursday, when it is too late in the
        week to do much about it.
      </P>
      <P>
        The fix that everyone reaches for is a reminder to go back and source more. That works exactly
        as well as any process that depends on somebody remembering a dull task while under pressure
        from other roles. And the reminder is only half the work: the second run has to reproduce the
        filters the first one used and exclude everyone already contacted, which is either a careful
        ten minutes or a duplicate approach to somebody who has already said no.
      </P>

      <H2>A level to hold, not a job to run</H2>
      <P>
        Sourcing on EmployLabs is not a search that happens once. It is a pool that is kept topped up
        to a target. When candidates decline, go quiet, or are screened out, more are sourced to
        replace them, and the replacing is not a task anybody is assigned.
      </P>
      <P>
        The difference is in what is being tracked. A search tracks an event: it ran, it returned this
        many people, it is finished. A pool tracks a level: this is how many live candidates the role
        needs, this is how many it has, and the gap between those two numbers is the instruction. When
        attrition opens a gap, the gap is what gets acted on.
      </P>
      <P>
        All three kinds of departure count the same way. A decline, a silence and a screen-out are very
        different pieces of information about a candidate, and they are kept apart as information, but
        as far as the level is concerned each one is a person who is no longer in play. That is the
        only sense in which they are treated alike, and it is the sense that keeps the count honest.
      </P>

      <Pull>A search is an event. A pool is a level, and a level can be held.</Pull>

      <H2>Nobody is bought twice</H2>
      <P>
        Topping up a pool repeatedly creates an obvious hazard: the same strong profile appearing again
        in every subsequent run, being paid for again, and being sent an approach they have already
        declined once. Anyone who has run a long search manually knows this problem, because the manual
        version of it is a spreadsheet nobody enjoys maintaining.
      </P>
      <P>
        Anyone already seen on a role is not sourced again for it. The refill reaches past them into
        the part of the market the role has not yet touched, which is the only part worth spending on.
        That also means the top-ups get progressively more useful: each one goes further into the
        market rather than recirculating the same names at the front of it.
      </P>

      <H2>What this changes for your week</H2>
      <Bullets>
        <li>
          <Strong>You stop babysitting a shrinking shortlist.</Strong> The number of live candidates
          on a role is maintained rather than monitored, so it is not one more thing to hold in your
          head across a dozen open roles.
        </li>
        <li>
          <Strong>A decline stops feeling expensive.</Strong> When a good candidate says no, the gap
          closes on its own, and the reaction to a no can be about the reason rather than about the
          hole it leaves.
        </li>
        <li>
          <Strong>There is no restart cost.</Strong> Nobody has to work out who was already approached
          before sourcing again, because the pool has not forgotten any of them.
        </li>
      </Bullets>

      <H2>How to use it</H2>
      <Steps>
        <li>
          Read the live count rather than the total count. How many people are still in play is the
          number that describes the role; how many were ever sourced is history.
        </li>
        <li>
          Let a weak candidate go. Screening someone out costs you nothing in pipeline, because the
          pool refills to the same level either way, and keeping a marginal person on a list to avoid
          it shrinking is a habit worth dropping.
        </li>
        <li>
          Treat repeated refills as market information. If the pool needs topping up constantly, the
          market is answering a question about your brief, and that is a conversation to have with the
          hiring manager rather than a sourcing problem to push harder on.
        </li>
      </Steps>
    </>
  );
}

export const post: BlogPost = {
  slug: "the-pool-that-refills-itself",
  title: "Sourcing is a pool, not a search",
  dek: "A shortlist quietly shrinks as people decline, go quiet or get screened out. A pool held at a target level refills itself instead, without anyone remembering to press the button again.",
  answer:
    "EmployLabs treats sourcing as a pool held at a target level rather than a search run once. As candidates decline, go quiet or are screened out, more are sourced to replace them without anyone triggering it, and nobody already seen on the role is sourced or paid for a second time. The recruiter stops babysitting a shrinking shortlist.",
  category: "update",
  motif: "funnel",
  publishedAt: "2026-10-22",
  readingMinutes: 4,
  topics: ["candidate sourcing", "talent pool", "pipeline management", "recruiter workflow", "candidate deduplication"],
  faq: [
    {
      q: "What happens when candidates drop out of my pipeline?",
      a: "More are sourced to replace them. Sourcing on EmployLabs is a pool held at a target level, so declines, silence and screen-outs open a gap that gets filled automatically rather than waiting for someone to remember to run the search again.",
    },
    {
      q: "Will I end up paying for the same candidate twice?",
      a: "No. Anyone already seen on a role is not sourced again for it, so each top-up reaches further into the part of the market the role has not yet touched instead of recirculating the same names.",
    },
    {
      q: "Do I have to re-run sourcing when a shortlist thins out?",
      a: "No, and that is the point. A search is an event that finishes, while a pool is a level that is held. The gap between the target and the live candidate count is what drives the next sourcing, not a reminder in your calendar.",
    },
  ],
  Body,
};
