import type { BlogPost } from "../types";
import { P, H2, Pull, Steps, Bullets, Strong } from "@/components/blog/prose";

function Body() {
  return (
    <>
      <H2>Two ways to misuse one document</H2>
      <P>
        An AI interview report gets misread in opposite directions. Some people treat it as a verdict
        and stop thinking, which is how a good candidate gets rejected on a number nobody examined.
        Others dismiss it entirely, which wastes the one artefact that recorded the conversation
        properly.
      </P>
      <P>
        Both come from reading it as a score with supporting material. It is better understood as
        evidence with a summary attached, and the evidence is the part that earns its place.
      </P>

      <H2>Read it in this order</H2>
      <Steps>
        <li>
          <Strong>The unverified items first.</Strong> Anything the interview could not establish is
          the most actionable thing in the document, because it is a question you can still ask. It is
          also the part most likely to be misfiled as a weakness.
        </li>
        <li>
          <Strong>Then the evidence behind any score you doubt.</Strong> Go to the transcript passage
          rather than arguing with the number. Nearly every disagreement about a candidate resolves
          into one exchange that either supports the judgement or does not.
        </li>
        <li>
          <Strong>Then the ranked risks.</Strong> Severity is what stops a minor gap reading like a
          dealbreaker. An unranked list gets treated as uniformly serious, which is how strong people
          get talked out of.
        </li>
        <li>
          <Strong>The overall level last.</Strong> By the time you reach it you should already have a
          view, and the summary is either consistent with it or worth investigating.
        </li>
      </Steps>

      <Pull>The most useful line in the report is usually the one that says we could not establish this.</Pull>

      <H2>What to be sceptical about</H2>
      <Bullets>
        <li>
          <Strong>Any score for something never asked about.</Strong> If the conversation did not cover
          it, the report must say so. A number in that position is manufactured.
        </li>
        <li>
          <Strong>Personality inference.</Strong> Confidence, enthusiasm and culture fit are not
          readable from a recorded answer, and treating vocal delivery as signal builds discrimination
          into the process.
        </li>
        <li>
          <Strong>Fluency read as competence.</Strong> This one is human too, and an interview report
          can amplify it. Someone who describes work well is not necessarily someone who did it, which
          is precisely why the follow-up questions matter more than the first answer.
        </li>
        <li>
          <Strong>Any judgement that needs company context.</Strong> Whether someone will thrive on
          your particular team is not knowable from outside it.
        </li>
      </Bullets>

      <H2>What to trust it for</H2>
      <P>
        Consistency, mainly. Every candidate got the same interview, probed to the same depth, against
        criteria you can read. That is not true of your own screening across a busy week, and it is the
        thing the format is genuinely better at.
      </P>
      <P>
        Also the verifiable facts. Notice period, location, compensation expectation, the actual scope
        of a past role. Cheap to ask, expensive to get wrong at offer stage, and reliably captured.
      </P>

      <H2>How to use it in a hiring conversation</H2>
      <P>
        Bring the ranked risks and the evidence, not the score. A debrief that starts with a number
        becomes an argument about the number. One that starts with &ldquo;here is what they said when
        pushed on the migration&rdquo; becomes a conversation about the candidate.
      </P>
      <P>
        And if you overrule the report, write down why. A pattern of overrides in one direction is
        telling you something about your criteria that no individual decision will.
      </P>
    </>
  );
}

export const post: BlogPost = {
  slug: "reading-an-ai-interview-report",
  title: "Reading an AI interview report without over-trusting it",
  dek: "It gets misread in both directions: as a verdict that ends thinking, or as noise worth ignoring. How to use the evidence and where to stay sceptical.",
  answer:
    "Read an AI interview report as evidence with a summary attached rather than a score with supporting material. Start with what the interview could not verify, then the transcript evidence behind any score you doubt, then the risks ranked by severity, and read the overall level last. Be sceptical of any score for something never asked, of personality inference, and of fluency read as competence.",
  category: "article",
  motif: "report",
  publishedAt: "2026-09-26",
  readingMinutes: 8,
  topics: ["AI interview", "interview report", "hiring decisions", "candidate assessment", "hiring bias"],
  faq: [
    {
      q: "How should a recruiter read an AI interview report?",
      a: "In this order: what the interview could not verify, the transcript evidence behind any doubted score, the risks ranked by severity, and the overall level last. Leading with the score turns the debrief into an argument about the number.",
    },
    {
      q: "What should you not trust in an AI interview report?",
      a: "Any score for a topic the interview never covered, inference about personality or culture fit from delivery, fluency mistaken for competence, and any judgement requiring context about your specific team.",
    },
    {
      q: "What is an AI interview report genuinely reliable for?",
      a: "Consistency across candidates, since every person gets the same interview against criteria you can read, and verifiable facts such as notice period, location, compensation expectation and the real scope of a past role.",
    },
  ],
  Body,
};
