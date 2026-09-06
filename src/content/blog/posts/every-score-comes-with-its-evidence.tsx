import type { BlogPost } from "../types";
import { P, H2, Pull, Steps, Strong, Figure, RequirementCard, PoolFunnel } from "@/components/blog/prose";

function Body() {
  return (
    <>
      <H2>The situation</H2>
      <P>
        A sourcing tool hands you three candidates: 92, 88 and 84. You ask why the third one is an 84,
        and there is no answer available anywhere in the product. So you open all three profiles and
        read them yourself, which is the work the ranking was supposed to save you.
      </P>
      <P>
        Nothing is attached to that number. You cannot show a hiring manager why a candidate scored
        what they scored. You cannot correct a score that is wrong, because you cannot see what
        produced it. And a candidate who genuinely fails a requirement looks identical to one whose CV
        never mentions it, which are opposite facts that a single number collapses into one.
      </P>

      <H2>What sits behind a score</H2>
      <P>
        When you confirm the brief, we write out what a weak answer and an exceptional answer look like
        for each requirement, in the language of the role you are hiring for. Candidates are judged
        against that description. Whether a keyword appears on the page has no effect.
      </P>
      <P>
        Open a candidate and every requirement carries the line from their profile that decided it. You
        read the evidence, then the score.
      </P>
      <P>
        Each requirement can come back three ways: met, clearly not met, or unanswered by the profile.
        The third one goes to your screening call as a question and leaves the score alone. A CV that
        says nothing about team leadership has not told you the person cannot lead, and good candidates
        fall off shortlists on that confusion every day without anyone noticing, because the number
        looks the same either way.
      </P>

      <Figure caption="The requirement view on one candidate. Two met, each with the line that decided it. One unanswered, which becomes a screening question. One genuinely not met, with the sentence that says so.">
        <RequirementCard
          name="Ananya R."
          role="Senior Backend Engineer · Bengaluru"
          alignment="Strong alignment"
          rows={[
            {
              label: "6+ years backend engineering",
              verdict: "met",
              evidence: (
                <>
                  &ldquo;Backend engineer since 2018, currently <Strong>Senior Engineer II</Strong> on the
                  payments platform.&rdquo;
                </>
              ),
            },
            {
              label: "Distributed systems at scale",
              verdict: "met",
              evidence: (
                <>
                  &ldquo;Owned the <Strong>event pipeline handling 40M daily transactions</Strong>; led the
                  migration off the monolith.&rdquo;
                </>
              ),
            },
            {
              label: "Has led a team of 3+",
              verdict: "unstated",
              evidence: "Profile does not say either way. Added to this candidate's screening questions.",
            },
            {
              label: "Based in or moving to Pune",
              verdict: "failed",
              evidence: (
                <>
                  &ldquo;Bengaluru, <Strong>not currently open to relocating</Strong>.&rdquo; Flagged as a hard
                  requirement.
                </>
              ),
            },
          ]}
        />
      </Figure>

      <H2>Four requirements, then it turns</H2>
      <P>A score you can trust also needs a brief that can produce one.</P>
      <P>
        Every must-have rejects outright, and rejections multiply rather than add. A requirement that
        excludes three candidates in ten looks harmless on its own. Five of them together leave you a
        sixth of the pool you started with, and the people they remove are not the weakest ones, just
        the ones whose profile happened to be quiet on one line.
      </P>

      <Pull>A fifth must-have removes people who would have cleared your bar.</Pull>

      <Figure caption="Illustrative arithmetic, not our data: if each hard requirement excludes three candidates in ten, five of them leave 17 people from every 100. Real exclusion rates vary by requirement. The compounding does not.">
        <PoolFunnel
          rows={[
            { label: "No must-haves", pct: 100 },
            { label: "1 must-have", pct: 70 },
            { label: "2 must-haves", pct: 49 },
            { label: "3 must-haves", pct: 34 },
            { label: "4 must-haves", pct: 24, tone: "warn" },
            { label: "5 must-haves", pct: 17, tone: "bad" },
          ]}
        />
      </Figure>

      <P>
        So hard requirements cap at four, and everything else moves into preferences. Preferences still
        rank candidates and still show up in the score; they simply do not reject anybody. A brief that
        arrives with seven must-haves gets told which three are costing it, before any money goes into
        sourcing against them.
      </P>

      <H2>What this changes for your week</H2>
      <P>
        When a hiring manager pushes back on a candidate, you send the line from the profile instead of
        arguing from memory. Requirements the CV never addressed reach the candidate as questions, so
        people stop dropping out of your process over silence. And an over-specified brief surfaces
        while you are still writing it, rather than three weeks into a search that was never going to
        work.
      </P>

      <H2>How to use it</H2>
      <Steps>
        <li>
          Read the standard written for each requirement at the brief stage, and change anything that
          does not match how you would judge it yourself.
        </li>
        <li>
          Mark only genuine dealbreakers as must-haves. Four is the ceiling, and everything else still
          counts toward the score.
        </li>
        <li>
          On a contested candidate, read the evidence column before the number. It is usually one line
          that settles the argument.
        </li>
        <li>
          Leave the unanswered requirements for screening. Zia asks them per candidate in the
          conversation, and the answers come back to the same record.
        </li>
      </Steps>
    </>
  );
}

export const post: BlogPost = {
  slug: "every-score-comes-with-its-evidence",
  title: "Every score comes with its evidence",
  dek: "You cannot defend a shortlist you cannot interrogate. Here is what sits behind each number on the platform, including the verdict that is deliberately not a number.",
  answer:
    "EmployLabs scores candidates against a written standard for each requirement in your role, and every requirement returns the line from the candidate's profile that decided it. Requirements have three verdicts, not two: met, not met, or unanswered by the profile. An unanswered requirement becomes a screening question rather than a deduction.",
  category: "update",
  motif: "rows",
  publishedAt: "2026-09-02",
  readingMinutes: 3,
  topics: ["candidate scoring", "AI recruiting", "shortlisting", "hiring criteria", "recruiter workflow"],
  faq: [
    {
      q: "How does EmployLabs score candidates?",
      a: "Each requirement in the role gets a written standard describing what a weak and an exceptional answer look like. Candidates are judged against that standard rather than keyword matching, and each requirement returns a verdict with the supporting line from the candidate's profile.",
    },
    {
      q: "What happens when a CV does not mention a requirement?",
      a: "It returns as unanswered rather than failed. That verdict does not reduce the candidate's score; it becomes a question asked during screening, so candidates are never rejected for information their profile simply omitted.",
    },
    {
      q: "Why does EmployLabs limit hard requirements to four?",
      a: "Every must-have rejects candidates outright and the rejections compound. Beyond four, additional hard requirements shrink the pool faster than they raise quality, so anything past four becomes a preference that ranks candidates without rejecting them.",
    },
  ],
  Body,
};
