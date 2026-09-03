import type { BlogPost } from "../types";
import { P, H2, Pull, Steps, Bullets, Strong } from "@/components/blog/prose";

function Body() {
  return (
    <>
      <H2>The number everyone sets and nobody justifies</H2>
      <P>
        Every scoring tool asks for a threshold. Seventy-five, eighty, eighty-five. The number gets
        picked in about four seconds, and from then on it silently decides who a recruiter ever sees.
      </P>
      <P>
        The question worth asking first is not where to set it. It is what sits underneath it, because
        a threshold on top of a score you cannot interrogate is a random number with consequences.
      </P>

      <H2>Three things to establish before choosing a number</H2>
      <Bullets>
        <li>
          <Strong>What produced the score.</Strong> If nobody can show you why a candidate is a 78, the
          bar is not selecting for quality. It is selecting for whatever the model happened to weight.
        </li>
        <li>
          <Strong>What happens to missing information.</Strong> A profile that does not mention
          something has not said the person lacks it. If your scorer treats silence as failure, your
          bar is filtering for people with detailed profiles rather than people who can do the job.
        </li>
        <li>
          <Strong>Whether the score is current.</Strong> A score produced against an earlier version of
          the brief is not comparable to one produced after you changed it. Ranking them together is
          how a stale candidate outranks a fresh one.
        </li>
      </Bullets>

      <Pull>A threshold on top of an unexplainable score is a random number with consequences.</Pull>

      <H2>Then set it from the pool, not from intuition</H2>
      <P>
        A bar is a statement about your market, so it should be set after you have seen some of it. Run
        the scoring, look at the distribution, and read a handful of candidates on either side of where
        you were thinking of drawing the line.
      </P>
      <P>
        The useful question is not &ldquo;is 80 right&rdquo;. It is whether the people sitting at 78
        are ones you would happily interview. If they are, your bar is too high and it is silently
        costing you a fortnight. If the people at 85 are not obviously better than the people at 75,
        the scoring is not discriminating and the bar is not the problem.
      </P>

      <H2>What a bar cannot fix</H2>
      <P>
        Most bar-tuning is displacement activity for a brief problem. If a pool scores badly across the
        board, lowering the bar admits weaker candidates for the same role rather than finding better
        ones. The causes are almost always upstream: an over-specified requirement list, or a sourcing
        strategy aimed at the wrong population.
      </P>
      <P>
        Lowering the threshold is the last thing to try, not the first. It is popular because it works
        instantly and produces the appearance of a pipeline.
      </P>

      <H2>A working method</H2>
      <Steps>
        <li>Score a real pool before setting anything. A bar set in advance is a guess about a market you have not looked at.</li>
        <li>
          Read five candidates just below your intended line. This is the whole exercise, and it takes
          ten minutes.
        </li>
        <li>
          Move the bar, then re-score. Any candidate judged under the old bar should be re-evaluated,
          or your shortlist is a mix of two different standards.
        </li>
        <li>
          If the distribution is flat, fix the criteria rather than the threshold. A bar cannot create
          discrimination that the scoring does not have.
        </li>
      </Steps>
    </>
  );
}

export const post: BlogPost = {
  slug: "set-a-screening-bar-you-can-trust",
  title: "How to set a screening bar you will actually trust",
  dek: "What the number does, what it costs you, and why a threshold sitting on top of a score you cannot interrogate is a random number with consequences.",
  answer:
    "Before choosing a screening threshold, establish three things: that you can see what produced each score, that missing information is not treated as failure, and that scores are current against the present brief. Then set the bar from a real scored pool by reading candidates just below your intended line, rather than picking a number in advance. Lowering a bar is the last remedy for a weak pool, not the first.",
  category: "article",
  motif: "funnel",
  publishedAt: "2026-09-25",
  readingMinutes: 8,
  topics: ["candidate scoring", "screening", "hiring criteria", "recruiting metrics", "shortlisting"],
  faq: [
    {
      q: "What should a candidate fit score threshold be set to?",
      a: "There is no universal number. Set it after scoring a real pool by reading several candidates just below your intended line: if you would happily interview them, the bar is too high. A threshold chosen before seeing the market is a guess.",
    },
    {
      q: "Should you lower the screening bar when a pipeline is thin?",
      a: "It should be the last remedy rather than the first. A pool that scores badly across the board usually indicates an over-specified brief or a mistargeted search, and lowering the bar admits weaker candidates for the same role instead of finding better ones.",
    },
    {
      q: "What happens to candidates scored before the brief changed?",
      a: "They need re-scoring. Comparing candidates judged under two different versions of the criteria produces a shortlist mixing two standards, and a stale score can outrank a fresh one.",
    },
  ],
  Body,
};
