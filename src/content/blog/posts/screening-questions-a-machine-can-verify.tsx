import type { BlogPost } from "../types";
import { P, H2, Pull, Steps, Bullets, Strong, CompareTable } from "@/components/blog/prose";

function Body() {
  return (
    <>
      <H2>The screen is where roles are actually lost</H2>
      <P>
        Not at sourcing, and not at the final interview. Roles are lost in the gap where a candidate
        looked right, took up three people&rsquo;s time, and turned out to have a constraint that was
        knowable in the first two minutes.
      </P>
      <P>
        Screening exists to close that gap, and it is the stage most often handed to a machine. Which
        makes the question of what a machine can genuinely verify worth answering properly, rather than
        handing over the same list you would give a junior recruiter.
      </P>

      <H2>Three kinds of question, and only two belong here</H2>
      <CompareTable
        head={["Kind", "Example", "Give it to a machine?"]}
        rows={[
          [
            "Factual and checkable",
            "What is your notice period? Are you able to work from Pune? What are you expecting on base?",
            "Yes. This is the whole point. Cheap to ask, expensive to discover late.",
          ],
          [
            "Verifiable by follow-up",
            "You led that migration — who disagreed with the approach, and what did that cost?",
            "Yes, with a caveat. A structured conversation probes this well. The output is evidence, not a verdict.",
          ],
          [
            "Judgement about fit",
            "Would they thrive on this team? Are they ambitious enough for where we are going?",
            "No. The context lives in your company and cannot be assessed from outside it.",
          ],
        ]}
      />

      <Pull>
        A screening question is worth asking if a wrong answer would stop the process. Everything else
        is curiosity.
      </Pull>

      <H2>Write them so the answer is unambiguous</H2>
      <Bullets>
        <li>
          <Strong>Ask for the number, not the comfort level.</Strong> &ldquo;Are you flexible on
          salary?&rdquo; produces a yes from everyone. &ldquo;What figure would make you accept?&rdquo;
          produces a number you can act on.
        </li>
        <li>
          <Strong>Ask about the constraint, not the preference.</Strong> &ldquo;Would you consider
          relocating?&rdquo; and &ldquo;Can you be in Pune from January?&rdquo; are different questions
          and only one of them screens.
        </li>
        <li>
          <Strong>Separate compound questions.</Strong> Notice period and buyout willingness are two
          facts. Asked together, you reliably get one answer.
        </li>
        <li>
          <Strong>Avoid anything that invites a performance.</Strong> &ldquo;Why do you want this
          role?&rdquo; at screening stage produces a rehearsed paragraph from everyone and separates
          nobody.
        </li>
      </Bullets>

      <H2>Four is usually the right number</H2>
      <P>
        Long screening lists degrade in two ways at once. Candidates start answering to get through it,
        so the later answers are worse than the early ones, and a screen that feels like a form is the
        first place a strong candidate disengages, because they have other options and this one is
        already tedious.
      </P>
      <P>
        Pick the constraints that would genuinely stop the process for this role. On most roles that is
        location, notice, money, and one thing specific to the job.
      </P>

      <H2>The gap questions matter more than the standard ones</H2>
      <P>
        The standard set is the same for everyone, so it tells you nothing about an individual beyond
        the constraint. The higher-value question is the one that only applies to this candidate: the
        requirement their profile never addressed, the two-year gap, the title that could mean two
        different jobs.
      </P>
      <P>
        Doing this manually means reading every profile carefully enough to spot the gap and
        remembering to raise it. That is precisely the discipline that collapses at volume, and it is
        the part worth automating.
      </P>

      <H2>What to do with the answers</H2>
      <Steps>
        <li>
          Treat a factual answer as decisive. If someone cannot be in the location and the role is
          genuinely onsite, that is the end, and continuing wastes both parties&rsquo; time.
        </li>
        <li>
          Treat a probed answer as evidence for the human interview rather than a verdict. It tells you
          what to push on, not whether to hire.
        </li>
        <li>
          Record everything against the candidate. The most common failure is a good answer given in a
          conversation nobody wrote down, rediscovered at offer stage.
        </li>
      </Steps>
    </>
  );
}

export const post: BlogPost = {
  slug: "screening-questions-a-machine-can-verify",
  title: "Screening questions: what to ask a machine to verify",
  dek: "Roles are lost in the gap where a candidate looked right and had a constraint knowable in the first two minutes. How to write a screen that closes it.",
  answer:
    "Give a machine two kinds of screening question: factual constraints such as notice period, location and compensation expectation, and follow-up probing that produces evidence rather than a verdict. Do not ask it to judge team fit, which needs company context. Keep the list to about four genuine gates, ask for numbers rather than comfort levels, and separate compound questions.",
  category: "article",
  motif: "rows",
  publishedAt: "2026-10-12",
  readingMinutes: 3,
  topics: ["candidate screening", "screening questions", "recruiting process", "candidate qualification", "AI screening"],
  faq: [
    {
      q: "What screening questions should an AI ask candidates?",
      a: "Factual constraints that would stop the process — notice period, location feasibility, compensation expectation, work authorisation — plus follow-up probing on claims made in a profile. It should not be asked to judge team or culture fit.",
    },
    {
      q: "How many screening questions should you ask?",
      a: "Around four genuine gates. Longer lists degrade answer quality as candidates rush to finish, and a screen that feels like a form is where strong candidates with other options disengage.",
    },
    {
      q: "How should screening questions be worded?",
      a: "Ask for the number rather than the comfort level: what figure would make you accept, not whether you are flexible. Ask about the constraint rather than the preference, and split compound questions, since notice period and buyout willingness asked together reliably return one answer.",
    },
  ],
  Body,
};
