import type { BlogPost } from "../types";
import { P, H2, Pull, Bullets, Strong } from "@/components/blog/prose";

function Body() {
  return (
    <>
      <H2>What a public profile leaves out</H2>
      <P>
        Before anybody is contacted, the platform has to build a picture of each candidate out of what
        is publicly available about them. Everything downstream leans on that picture, so the honest
        question is not how good it is on an average day. It is what happens on the day it comes back
        almost empty.
      </P>
      <P>
        Public footprints are uneven for reasons that have very little to do with ability. Somebody who
        has been at the same company for nine years has less written about them than somebody who moves
        every eighteen months. People in some functions publish constantly and people in others never
        do. A candidate who keeps their profile deliberately sparse is quite often the senior one who
        has not needed to be findable for a decade.
      </P>

      <H2>More than one source, and a fallback that fires on its own</H2>
      <P>
        The first defence against a thin picture is not settling for a single source. There is a
        primary one, and an automatic fallback that runs when the primary comes back with nothing. No
        person has to notice the gap and go looking. The fallback is part of the path rather than a
        step a busy recruiter is expected to remember on a Friday afternoon.
      </P>
      <P>
        That covers the common case, which is not a candidate nobody can find anything about. It is a
        candidate that one particular source happens not to hold. Sources have different coverage, and
        where they disagree it is usually about which people they know of rather than about what those
        people have done.
      </P>

      <H2>Why the fallback waits to be needed</H2>
      <P>
        Running every source on every candidate would be simpler to describe and worse to own. It costs
        money on each lookup, most of those lookups would return what the first source already
        returned, and the bill arrives whether or not anything new was learned.
      </P>
      <P>
        So the second source is conditional. It is there for the candidates the first one missed, which
        is exactly the population that would otherwise have gone through your screen with nothing
        behind them. The cost lands where it changes an outcome.
      </P>

      <H2>When every source misses</H2>
      <P>
        Sometimes they all come back empty, and this is the point at which most systems quietly go
        wrong. The tempting behaviour is to score whatever is on file. A candidate with almost nothing
        recorded scores badly against a list of requirements, because there is no evidence they meet
        any of them, and the result is indistinguishable from a candidate who was properly assessed and
        found wanting.
      </P>
      <P>
        Those two are not the same thing, and the difference bites hardest among the people you would
        most want to speak to. So when the picture cannot be built, the candidate is marked provisional
        and the record says as much. That state is not a poor result. It is the absence of one.
      </P>

      <Pull>
        A candidate nobody could find out about has not failed your requirements. Nothing has been
        measured yet.
      </Pull>

      <H2>Why you are shown it rather than spared it</H2>
      <P>
        A system could hide provisional candidates, and there is a defensible argument for doing so:
        you asked for people who match a brief, and this person cannot be shown to match it. It would
        also mean an entire category of candidate vanishes from your search without you ever learning
        that the category was there.
      </P>
      <P>
        So &ldquo;we could not find out&rdquo; is its own state, sitting next to the candidates who
        carry a real assessment rather than being folded in among them. You can see how many there are.
        You can open one and see that the gap is in what was available to read, not in the person.
      </P>

      <H2>Coverage gaps are not randomly distributed</H2>
      <P>
        The reason this is worth the engineering rather than a note in a help page is that missing data
        is not scattered evenly across a market. It clusters. Particular industries, particular
        seniorities, particular languages and particular parts of the world are consistently thinner in
        public sources than others, and the thinness is a property of the source rather than of the
        people in it.
      </P>
      <P>
        A pipeline that scores absence as failure therefore does not produce a slightly noisier
        shortlist. It produces a shortlist that leans, every time, in the same direction, towards the
        people who happen to be well documented. Nobody chose that, and because the effect is silent
        nobody would ever see it in the output.
      </P>
      <P>
        Keeping the provisional state separate is what stops that pattern accumulating quietly across
        every role you run. It does not make the missing data appear. It keeps the gap visible long
        enough for a person to decide what to do about it.
      </P>

      <H2>What to do with a provisional candidate</H2>
      <Bullets>
        <li>
          <Strong>Start with the name and the current role.</Strong> Those two survive even when
          everything else is missing, and they are frequently enough to tell you whether this is worth
          a minute of your attention.
        </li>
        <li>
          <Strong>Read a sparse footprint as a fact about the market, not the person.</Strong> In some
          functions and some geographies the strongest people are simply the hardest to read from the
          outside, and a search that filters them out is not a more accurate search.
        </li>
        <li>
          <Strong>Decide on purpose.</Strong> Looking at a provisional candidate and moving on is a
          perfectly good outcome. Never having been shown them is not, because that decision was made
          for you by a lookup that happened to return nothing.
        </li>
      </Bullets>
    </>
  );
}

export const post: BlogPost = {
  slug: "when-enrichment-misses",
  title: "When we cannot find out enough about someone",
  dek: "Enrichment runs a primary source and an automatic fallback. When both come back empty the candidate is marked provisional and shown to you that way, rather than scored poorly for having a thin public footprint.",
  answer:
    "EmployLabs builds a candidate picture from a primary enrichment source and an automatic fallback for when it returns nothing. If every source comes back empty, the candidate is marked provisional rather than scored low for a thin footprint, so a recruiter sees the missing information as its own state and decides whether to look anyway.",
  category: "update",
  motif: "channels",
  publishedAt: "2026-10-29",
  readingMinutes: 4,
  topics: [
    "candidate enrichment",
    "data coverage",
    "provisional candidates",
    "candidate sourcing",
    "screening accuracy",
  ],
  faq: [
    {
      q: "What happens if you cannot find information about a candidate?",
      a: "The candidate is marked provisional and shown to you in that state. They are not given a low score for having little public information, because an empty lookup is not evidence that somebody fails your requirements.",
    },
    {
      q: "Do you use more than one source to enrich a profile?",
      a: "Yes. There is a primary source and an automatic fallback that runs when the primary returns nothing. The fallback is conditional rather than always-on, so the extra lookup cost lands only on the candidates it can actually help.",
    },
    {
      q: "Why not just hide candidates you know nothing about?",
      a: "Because a whole category of candidate would disappear from your search without you knowing it existed. Sparse public footprints are common among senior and long-tenured people, so the decision to skip them should be yours rather than a side effect of a lookup.",
    },
  ],
  Body,
};
