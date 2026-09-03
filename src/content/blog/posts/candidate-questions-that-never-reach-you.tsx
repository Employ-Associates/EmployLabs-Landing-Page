import type { BlogPost } from "../types";
import { P, H2, Pull, Steps, Bullets, Strong } from "@/components/blog/prose";

function Body() {
  return (
    <>
      <H2>The invisible half of a recruiter&rsquo;s week</H2>
      <P>
        Nobody tracks it, so nobody manages it. A candidate wants the offer letter explained. Another
        asks what a ninety-day notice period really means for their start date, and whether a buyout is
        normal. A third has read the job description twice and still cannot tell whether they are
        actually a fit. A fourth wants to know what happens after the assessment.
      </P>
      <P>
        Each of these takes four minutes, arrives at an inconvenient time, and is the same question you
        answered last week for somebody else. Across twenty live candidates it is most of a day, and it
        is the work that gets deprioritised when a role goes hot, which is exactly when candidates go
        quiet.
      </P>

      <Pull>
        The questions do not stop when you get busy. The answers do, and that is when candidates go
        cold.
      </Pull>

      <H2>Zia answers them in the conversation</H2>
      <P>
        Zia is the candidate-facing agent. She already holds the conversation for screening and
        assessment follow-up, and she answers the surrounding questions in the same thread, on whatever
        channel the candidate is using, at whatever hour they ask.
      </P>
      <P>
        She will read through an offer letter with a candidate and explain what the components mean.
        She will work through notice periods, buyouts and what a realistic start date looks like. She
        will explain what the role actually involves rather than restating the job description, and
        talk honestly with someone about whether their background lines up.
      </P>

      <H2>Two things you get back</H2>
      <Bullets>
        <li>
          <Strong>The hours.</Strong> The repetitive questions stop arriving in your inbox. What
          reaches you is the exception rather than the twentieth version of the same thing.
        </li>
        <li>
          <Strong>The information.</Strong> A candidate talking honestly about a notice period, a
          competing offer, or a reservation about the role produces facts you need. Those reach your
          record instead of living in an inbox nobody searches.
        </li>
      </Bullets>
      <P>
        The second one tends to matter more than the first. Offer stage is where candidates go quiet
        and talk to everyone except the recruiter, and a conversation happening at all is worth more
        than the time it saves.
      </P>

      <H2>Where she stops</H2>
      <P>
        She does not negotiate on your behalf, commit to anything, or invent an answer she does not
        have. Where a question needs you, it comes to you, and the candidate is told plainly that it
        has. An agent that guesses at an offer detail creates a much more expensive problem than the
        one it saved.
      </P>

      <H2>How to use it</H2>
      <Steps>
        <li>
          Let candidates reach her directly rather than routing questions through you. She works over
          email, WhatsApp, phone and web, and candidates pick the one they prefer.
        </li>
        <li>
          Check what she captured before an offer conversation. Notice period, expectation and
          constraints are usually already on the record.
        </li>
        <li>
          Watch what candidates ask repeatedly. A question that keeps recurring is usually a job
          description problem worth fixing at the source.
        </li>
      </Steps>
    </>
  );
}

export const post: BlogPost = {
  slug: "candidate-questions-that-never-reach-you",
  title: "The candidate questions that never reach your inbox",
  dek: "Reading the offer letter, what a 90-day notice really means, what the role is actually asking for. Zia answers them in the conversation, at whatever hour they are asked.",
  answer:
    "Zia, the candidate-facing agent, answers the routine questions candidates would otherwise send to a recruiter: explaining offer letter components, working through notice periods and realistic start dates, clarifying what a role involves, and setting expectations about the process. She answers over email, WhatsApp, phone or web, and what she learns reaches the candidate record.",
  category: "update",
  motif: "channels",
  publishedAt: "2026-09-08",
  readingMinutes: 5,
  topics: ["candidate experience", "recruiter productivity", "offer stage", "notice period", "candidate communication"],
  faq: [
    {
      q: "What candidate questions can an AI agent handle for a recruiter?",
      a: "Explaining offer letter components, notice periods and buyouts, realistic joining dates, what a role actually involves beyond the job description, and what happens next in the process. These are the repetitive questions that consume a recruiter's week.",
    },
    {
      q: "Does the AI negotiate with candidates?",
      a: "No. Zia does not negotiate, commit to terms, or invent an answer she does not have. Anything requiring the recruiter is routed to them, and the candidate is told that it has been.",
    },
    {
      q: "How does answering candidate questions help the recruiter beyond saving time?",
      a: "The conversations produce facts the recruiter needs. A candidate discussing a notice period, a competing offer or a reservation about the role generates information that reaches the candidate record rather than sitting in an inbox.",
    },
  ],
  Body,
};
