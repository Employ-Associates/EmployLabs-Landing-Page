import type { BlogPost } from "../types";
import { P, H2, Pull, Steps, Bullets, Strong } from "@/components/blog/prose";

function Body() {
  return (
    <>
      <H2>The gap between a score and a decision</H2>
      <P>
        Most screening tools end at a verdict. You get a number, a recommendation, sometimes a summary,
        and then you sit down with the candidate and start from scratch anyway, because a verdict does
        not tell you what to ask.
      </P>
      <P>
        Naira runs a structured voice interview for the role, and the useful output is not the score.
        It is the four sections at the end of the report, which exist to answer a different question:
        given what the conversation surfaced, what should a human do next?
      </P>

      <H2>What to push on when you meet them</H2>
      <P>
        The report closes with specific things worth probing in your own interview. Not generic
        prompts, and not a rehash of the rubric. These are the places where the conversation went thin,
        where an answer was plausible but unverified, or where the judgement genuinely belongs to a
        person rather than a machine.
      </P>
      <P>
        A candidate might have described leading a migration convincingly without ever saying who
        disagreed with them or what it cost. That is not a failure, and scoring it down would be wrong.
        It is a thread for you to pull, and it arrives written as a thread rather than as a deduction.
      </P>

      <Pull>Your interview starts where the assessment stopped, instead of starting again.</Pull>

      <H2>What they will need in their first 90 days</H2>
      <P>
        The development path names where this person is likely to need support if you hire them. It is
        the part hiring managers use most, and it is the part almost nothing else in this category
        produces, because it is only useful if you assume the candidate is good enough to hire.
      </P>
      <P>
        Someone can be the right hire and still need a strong technical peer in their first quarter, or
        an explicit handover on a domain they have not worked in. Knowing that before the offer changes
        how you write the onboarding plan. Discovering it in week six changes how the hire is going.
      </P>

      <H2>Risks, ranked by how much they matter</H2>
      <P>
        Every concern comes with a severity. This sounds like a small thing and it is not: an unranked
        list of concerns makes a minor gap look like a dealbreaker, and buries the real one in the
        middle of a paragraph. A hiring manager reading five flat bullets treats them all as equal
        weight, which is how good candidates get talked out of.
      </P>
      <P>
        Alongside them sits the opposite list, which is what you actually get if you hire this person.
        Both are evidenced from the conversation rather than inferred from the CV.
      </P>

      <H2>What this changes for your week</H2>
      <Bullets>
        <li>
          <Strong>Shorter interviews that cover more.</Strong> You are not re-establishing basics
          somebody already established.
        </li>
        <li>
          <Strong>A hiring manager conversation with structure.</Strong> Instead of &ldquo;what did you
          think&rdquo;, you arrive with three ranked risks and the evidence behind each.
        </li>
        <li>
          <Strong>An onboarding plan that exists before the offer.</Strong> The development path is
          usually the first thing worth forwarding to the manager.
        </li>
      </Bullets>

      <H2>How to use it</H2>
      <Steps>
        <li>
          Read the probe list before you write your interview plan, not after. It is designed to
          replace the first half of your prep.
        </li>
        <li>
          Take the ranked risks into the hiring manager conversation directly. Severity is there so you
          can argue about the right one.
        </li>
        <li>
          Forward the development path to whoever will manage this person, whatever you decide. On a
          reject it is still worth reading, because a pattern across several rejects usually says
          something about the brief.
        </li>
        <li>
          Treat the report as the start of your judgement rather than a replacement for it. The
          sections exist because some things only a person should decide.
        </li>
      </Steps>
    </>
  );
}

export const post: BlogPost = {
  slug: "what-to-probe-in-your-own-interview",
  title: "Know exactly what to probe in your own interview",
  dek: "The interview report ends with what to push on when you meet the candidate, what they will need in their first 90 days, and which risks actually matter.",
  answer:
    "Naira's interview report closes with four sections built for the human interview that follows: specific areas to probe further, a development path describing what the candidate will need in their first 90 days, risks ranked by severity, and the strengths you gain by hiring them. Each is evidenced from the conversation rather than inferred from the CV.",
  category: "update",
  motif: "report",
  publishedAt: "2026-09-02",
  readingMinutes: 3,
  topics: ["AI interview", "interview report", "candidate assessment", "hiring decisions", "onboarding"],
  faq: [
    {
      q: "What does an AI interview report tell a recruiter beyond a score?",
      a: "Naira's report names specific areas to probe in the human interview, a development path for the candidate's first 90 days, risks ranked by severity, and the strengths gained by hiring them. Each point cites evidence from the interview itself.",
    },
    {
      q: "Can an AI interview replace the human interview?",
      a: "No. The report is built on the assumption that a person interviews next, which is why it names what to probe rather than issuing a verdict. Some judgements only a human should make.",
    },
    {
      q: "How does ranking risks by severity help a hiring decision?",
      a: "An unranked list makes a minor gap look equal to a serious one, which is how strong candidates get rejected on trivia and how real concerns get missed. Severity lets the hiring conversation focus on the risk that actually matters.",
    },
  ],
  Body,
};
