import type { BlogPost } from "../types";
import { P, H2, Pull, Steps, Bullets, Strong } from "@/components/blog/prose";

function Body() {
  return (
    <>
      <H2>What a percentage actually tells you</H2>
      <P>
        An 84% match. Eighty-four per cent of what? The number implies a denominator that does not
        exist, and every recruiter who has used a matching tool has learned to read it as a rough sort
        order rather than a measurement.
      </P>
      <P>
        The deeper problem is that it cannot be argued with. A hiring manager who disagrees with an 84
        has nothing to disagree with. There is no claim in a percentage, so there is no way to be
        wrong, and no way to be corrected.
      </P>

      <H2>Five levels, and a reason</H2>
      <P>
        Naira&rsquo;s interview returns a level of alignment to the role rather than a score out of a
        hundred, and the level comes with the reasoning and the evidence from the conversation that
        produced it.
      </P>
      <P>
        The practical difference is what happens next. A level names a decision: this person clears the
        bar, this person clears it with a specific reservation, this person does not. A percentage
        defers the decision to whoever is reading it, which usually means it gets made on the ranking
        rather than on the candidate.
      </P>

      <Pull>You can disagree with a judgement. You cannot disagree with a percentage.</Pull>

      <H2>A failed must-pass outranks the average</H2>
      <P>
        Some things in a role are not tradeable. If a rubric dimension is marked must-pass and the
        candidate fails it, the overall alignment comes down regardless of how strong everything else
        was.
      </P>
      <P>
        This is exactly what an average cannot do. Averaging is how a candidate who cannot do the
        central thing the job requires arrives at the top of a shortlist on the strength of four
        peripheral dimensions, and it happens more than anyone admits.
      </P>

      <H2>What this changes in a debrief</H2>
      <Bullets>
        <li>
          <Strong>The conversation starts from a claim.</Strong> Someone can contest the level and
          point at the transcript, which is a real discussion.
        </li>
        <li>
          <Strong>Nobody argues about the third decimal place.</Strong> Five levels remove the false
          precision that makes an 84 feel meaningfully different from an 81.
        </li>
        <li>
          <Strong>A dealbreaker stays a dealbreaker.</Strong> It is visible as the reason for the
          level, rather than diluted into an average.
        </li>
      </Bullets>

      <H2>How to use it</H2>
      <Steps>
        <li>
          Set your must-pass dimensions deliberately when the rubric is written. They are the only
          thing that can override a strong average, so marking everything must-pass defeats the point.
        </li>
        <li>
          Read the reasoning before the level on any candidate you intend to reject. The level is a
          summary; the reasoning is what you would defend.
        </li>
        <li>
          Take the level and the evidence into the hiring conversation together. A level with nothing
          under it is just a percentage with fewer digits.
        </li>
      </Steps>
    </>
  );
}

export const post: BlogPost = {
  slug: "alignment-not-a-percentage-match",
  title: "See how a candidate aligns to the role, not a percentage match",
  dek: "An 84% match implies a denominator that does not exist, and a hiring manager cannot argue with it. A level of alignment carries a claim you can contest.",
  answer:
    "Naira returns a five-level alignment to the role with the reasoning and interview evidence behind it, rather than a percentage match. A level states a decision that can be contested and corrected, where a percentage implies a denominator that does not exist. A failed must-pass dimension pulls alignment down regardless of how strong the remaining dimensions were.",
  category: "update",
  motif: "report",
  publishedAt: "2026-10-05",
  readingMinutes: 2,
  topics: ["candidate assessment", "AI interview", "interview report", "hiring decisions", "candidate scoring"],
  faq: [
    {
      q: "Why not use a percentage match score for candidates?",
      a: "A percentage implies a denominator that does not exist and carries no claim, so a hiring manager who disagrees has nothing to disagree with. A level of alignment states a decision and comes with the evidence behind it.",
    },
    {
      q: "What is a must-pass dimension in an interview rubric?",
      a: "A dimension where failure is not tradeable against strength elsewhere. Failing it pulls the overall alignment down regardless of the average, which prevents a candidate who cannot do the central task from topping a shortlist on peripheral strengths.",
    },
    {
      q: "How should a recruiter use an alignment level in a debrief?",
      a: "Take the level and its supporting evidence together, and read the reasoning before the level on any candidate you plan to reject. A level with nothing underneath it is a percentage with fewer digits.",
    },
  ],
  Body,
};
