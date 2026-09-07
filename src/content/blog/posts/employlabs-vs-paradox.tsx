import type { BlogPost } from "../types";
import { P, H2, Pull, Bullets, Strong, CompareTable } from "@/components/blog/prose";

function Body() {
  return (
    <>
      <H2>The nearest neighbour</H2>
      <P>
        Of the products in this category, Paradox is the one closest to what we do, because both of us
        put a conversation between the employer and the candidate rather than a form. Olivia, their
        assistant, is the best-known name in conversational recruiting and has been doing it at
        genuine scale for years.
      </P>
      <P>
        The difference is not conversational quality. It is which hiring problem the conversation is
        attached to.
      </P>

      <H2>Two different funnels</H2>
      <P>
        Paradox is built for high-volume hourly and frontline hiring, where the defining constraint is
        that thousands of people apply and the process has to qualify and schedule them faster than
        humans can. The conversation replaces the application form and the scheduling back-and-forth,
        and it is very good at that.
      </P>
      <P>
        EmployLabs is built for roles where nobody applies. The constraint is finding the people at
        all, then persuading them to engage, then assessing them properly. The conversation happens
        after we have gone and found somebody who was not looking.
      </P>

      <Pull>
        One product is built for the queue at the door. The other is built for the roles where nobody
        turns up.
      </Pull>

      <CompareTable
        head={["Outcome", "Paradox", "EmployLabs"]}
        rows={[
          [
            "What lands on your desk",
            "Applicants qualified and scheduled into your interviews, fast, at very high completion.",
            "Candidates found, approached, screened and interviewed, with a report on each.",
          ],
          [
            "What you still do yourself",
            "The interviewing and the decision. Finding candidates is not the problem being solved.",
            "The judgement: closing, the hiring-manager conversation, the decision.",
          ],
          [
            "Time to the first useful thing",
            "As fast as your applicants arrive, which for a known employer is immediately.",
            "Days. Somebody has to be found before anything else happens.",
          ],
          [
            "What you keep afterwards",
            "A qualified, scheduled applicant flow and the throughput to handle it.",
            "The pipeline, the market read, the scoring and the interview evidence.",
          ],
          [
            "Where it fails you",
            "When nobody applies. A conversational front door answers a question you do not have.",
            "When candidates are already queuing. We would be building a pipeline you already had.",
          ],
        ]}
      />

      <H2>The capabilities, plainly</H2>
      <P>
        Paradox conversationally qualifies and schedules candidates who have already applied, and has
        been doing it at very large scale for years. Sourcing is not the product&rsquo;s job, because in
        the hiring it serves the candidates come to you.
      </P>
      <P>
        EmployLabs sources per role, scores each candidate against a written standard with the evidence
        attached, holds the conversation across email, WhatsApp, phone and web, and runs a structured
        voice interview against a rubric you set. We are considerably younger and have nothing like
        their deployment scale, and we would not claim otherwise.
      </P>

      <H2>What a TA lead actually wants to know</H2>
      <Bullets>
        <li>
          <Strong>Which part of my week does it fix?</Strong> Paradox removes the qualifying and
          scheduling load when applicants arrive in numbers. We remove the finding and screening load
          when they do not arrive at all.
        </li>
        <li>
          <Strong>What happens when the brief is wrong?</Strong> With an applicant flow, a bad brief
          wastes screening. With us it wastes sourcing spend, which is why the caps exist.
        </li>
        <li>
          <Strong>Who owns the candidate relationship?</Strong> Both put an agent in front of the
          candidate. The difference is only whether that candidate came looking.
        </li>
        <li>
          <Strong>Can I run both?</Strong> Yes, and a team doing hourly and specialist hiring
          side by side probably should. They barely overlap.
        </li>
      </Bullets>

      <H2>Choose Paradox when</H2>
      <Bullets>
        <li>
          <Strong>Your problem is volume at the door.</Strong> Retail, hospitality, logistics, contact
          centres, campus. Applicants are not scarce; throughput is.
        </li>
        <li>
          <Strong>Scheduling is the bottleneck.</Strong> It is what they solve best and they have
          solved it for a long time.
        </li>
        <li>
          <Strong>You need proven scale.</Strong> They have deployments larger than our entire client
          base, and that is a legitimate reason to buy.
        </li>
      </Bullets>

      <H2>Choose EmployLabs when</H2>
      <Bullets>
        <li>
          <Strong>Nobody is applying.</Strong> Specialist, senior or scarce-skill roles where the
          pipeline has to be built rather than filtered.
        </li>
        <li>
          <Strong>You need the assessment, not just the qualification.</Strong> A structured interview
          with evidence and a report a hiring manager can act on.
        </li>
        <li>
          <Strong>You want to keep what the search produced.</Strong> The pool, the scoring and the
          market read stay with you for the next role.
        </li>
      </Bullets>

      <H2>The honest summary</H2>
      <P>
        If your candidates are arriving and the problem is handling them, that is their category and
        they invented it. If your candidates are not arriving, a conversational front door is
        answering a question you do not have.
      </P>
      <P>
        A team running both kinds of hiring, which many do, will find the two products barely overlap.
      </P>
    </>
  );
}

export const post: BlogPost = {
  slug: "employlabs-vs-paradox",
  title: "EmployLabs vs Paradox",
  dek: "The nearest neighbour in the category, and the comparison turns on one thing: whether your candidates are already arriving.",
  answer:
    "Paradox is built for high-volume hourly and frontline hiring, where applicants arrive in numbers and the constraint is qualifying and scheduling them quickly. EmployLabs is built for roles where nobody applies, so the conversation begins only after sourcing has found someone who was not looking. Choose Paradox when volume at the door is the problem; choose EmployLabs when the pipeline must be built rather than filtered.",
  category: "compare",
  motif: "versus",
  publishedAt: "2026-10-17",
  readingMinutes: 3,
  topics: ["Paradox", "conversational AI recruiting", "high-volume hiring", "vendor comparison", "AI recruiting tools"],
  faq: [
    {
      q: "What is the difference between Paradox and EmployLabs?",
      a: "Paradox conversationally qualifies and schedules candidates who have already applied, built for high-volume hourly and frontline hiring. EmployLabs sources candidates who were not looking, then screens and interviews them. The conversation sits at opposite ends of the funnel.",
    },
    {
      q: "When should you choose Paradox?",
      a: "When applicants arrive in volume and throughput is the constraint — retail, hospitality, logistics, contact centres, campus hiring — and when scheduling is the bottleneck. They have deployments at very large scale.",
    },
    {
      q: "When is a conversational hiring assistant the wrong tool?",
      a: "When nobody is applying. A conversational front door answers the question of how to handle arriving candidates, which is not the problem on specialist, senior or scarce-skill roles where the pipeline has to be built first.",
    },
  ],
  Body,
};
