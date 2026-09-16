import type { BlogPost } from "../types";
import { P, H2, Pull, Steps, Bullets, Strong, Figure, CompareTable } from "@/components/blog/prose";

function Body() {
  return (
    <>
      <H2>Two sentences that are not the same</H2>
      <P>
        &ldquo;We could not find out whether she has led a team&rdquo; and &ldquo;she has not led a
        team&rdquo; are different sentences. The first is a fact about our information. The second is a
        fact about the candidate. They have almost nothing in common, and a scoring system that treats
        them as one thing quietly rejects good people for the sin of having a thin public profile.
      </P>
      <P>
        The confusion is easy to miss because it never announces itself. Nobody sees a rejection that
        says &ldquo;insufficient information&rdquo;. They see a candidate sitting lower on the list than
        the others, for no stated reason, and they work down from the top.
      </P>
      <P>
        A thin profile is not a thin career. It is an engineer who has never written much about herself,
        someone working in a market where a detailed public profile is not the norm, a person whose page
        has not been touched in four years because they have been busy doing the job. Scoring silence as
        a negative selects against all of them at once, and none of it has anything to do with whether
        they can do the work.
      </P>

      <H2>Unknown is recorded as unknown</H2>
      <P>
        When something about a candidate could not be established, it is recorded as unknown. It is not
        scored as though the answer were no. The absence goes into the record as an absence, which means
        it can be read, questioned and closed later, rather than being converted into a verdict nobody
        chose to make.
      </P>

      <Figure caption="The same three requirements, read two ways. The middle column is what happens when silence is scored. The right-hand column is what is recorded here.">
        <CompareTable
          head={["The requirement", "What silence does in a naive score", "What is recorded here"]}
          rows={[
            [
              "Has led a team of three or more",
              "No mention on the profile, so no credit. Indistinguishable from someone who states they have never managed anyone.",
              "Unknown. The question stays open, and it is visible as open.",
            ],
            [
              "Has worked in a regulated industry",
              "Absent, so the candidate drifts below peers whose profile simply happened to be fuller.",
              "Unknown, unless the profile says one way or the other.",
            ],
            [
              "Based in the city on the brief",
              "An empty location line is read as a problem with the candidate.",
              "Unknown. A missing location is not a refusal to relocate.",
            ],
          ]}
        />
      </Figure>

      <P>
        None of this makes an unknown harmless. A requirement nobody can answer is a real gap in what
        you know, and it should feel like one. The point is that it is a gap in the file rather than a
        strike against the person, and those two things lead to different next actions.
      </P>

      <H2>A candidate we could not enrich stays provisional</H2>
      <P>
        Sometimes the shortfall is not one requirement but the whole profile. The details could not be
        enriched, and what is left is a name, a title and very little else. That candidate stays
        provisional rather than being handed a confident score built on almost nothing.
      </P>
      <P>
        The temptation to score anyway is worth naming, because it is strong. A shortlist where every
        row carries a number looks finished. A shortlist with provisional rows on it looks like work
        still to do, which is exactly what it is, and it is the only one of the two that tells you the
        truth.
      </P>

      <Pull>A missing answer is a fact about our information, not a fact about the candidate.</Pull>

      <H2>The score carries its own coverage</H2>
      <P>
        A score on its own hides how much sits behind it. So the score carries which dimensions were
        actually answered: a high score backed by two answered dimensions is a different object from a
        high score backed by nine, and you can tell them apart before you decide which one to act on.
      </P>
      <P>
        That is the practical shift. Coverage becomes something you can see and act on, instead of an
        invisible haircut applied to half your shortlist. A well-covered candidate at a slightly lower
        score is often the safer call than a sparsely covered candidate above her, and you are now in a
        position to make that call rather than to inherit it.
      </P>
      <P>
        It also changes what a weak line means. A genuine no is a reason to stop. An unknown is a reason
        to ask, which costs one question in a screening call and regularly turns a mid-table candidate
        into the person you hire.
      </P>

      <H2>What this changes for your week</H2>
      <Bullets>
        <li>
          <Strong>Quiet profiles stop dropping off the bottom of the list.</Strong> People who do not
          write about themselves are no longer penalised for it without anyone deciding to penalise
          them.
        </li>
        <li>
          <Strong>You can see which candidates you actually know something about.</Strong> Coverage sits
          alongside the score rather than behind it.
        </li>
        <li>
          <Strong>Screening questions come from somewhere.</Strong> The unknowns on a candidate are the
          list of things worth asking, and they are already written down.
        </li>
      </Bullets>

      <H2>How to use it</H2>
      <Steps>
        <li>
          Read coverage before you read the ranking. Two candidates on similar scores can be carrying
          very different amounts of evidence, and that difference usually matters more than the gap
          between the scores.
        </li>
        <li>
          Treat a provisional candidate as unfinished rather than weak. The honest question is whether
          it is worth finding out more about this person, not whether they are worse than the row above.
        </li>
        <li>
          Take the unknowns into the screening call as questions. An unknown that survives a
          conversation has become a real answer, in either direction, and the record improves either
          way.
        </li>
      </Steps>
    </>
  );
}

export const post: BlogPost = {
  slug: "unanswered-is-not-zero",
  title: "Unanswered is not zero",
  dek: "A requirement nobody could verify is not a requirement the candidate failed. What the platform records when an answer could not be established, and why that distinction decides who stays on your shortlist.",
  answer:
    "EmployLabs records a requirement it could not establish as unknown rather than scoring it as a no. A candidate whose details could not be enriched stays provisional instead of receiving a confident score built on almost nothing, and every score carries which dimensions were actually answered, so coverage is visible rather than silently deducted.",
  category: "article",
  motif: "bars",
  publishedAt: "2026-10-08",
  readingMinutes: 4,
  topics: [
    "candidate scoring",
    "data coverage",
    "candidate enrichment",
    "shortlisting",
    "recruiter workflow",
    "hiring bias",
  ],
  faq: [
    {
      q: "What happens when a candidate's profile does not mention a requirement?",
      a: "It is recorded as unknown rather than treated as a failure. The requirement stays visibly open so it can be asked during screening, instead of being converted into a quiet deduction that nobody chose to make.",
    },
    {
      q: "Why is a candidate marked provisional instead of scored?",
      a: "Because their details could not be enriched, so there is not enough behind a score to make one meaningful. A provisional candidate is one the platform has not finished looking at, which is more useful to you than a confident number built on almost nothing.",
    },
    {
      q: "How do I know how much evidence a score is based on?",
      a: "The score carries which dimensions were actually answered, so a high score backed by a couple of facts is distinguishable from one backed by most of the brief. Coverage sits alongside the ranking rather than hidden inside it.",
    },
  ],
  Body,
};
