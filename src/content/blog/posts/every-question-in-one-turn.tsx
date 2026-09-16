import type { BlogPost } from "../types";
import { P, H2, Pull, Steps, Bullets, Strong } from "@/components/blog/prose";

function Body() {
  return (
    <>
      <H2>The brief that turns into an interrogation</H2>
      <P>
        Most tools that take a job description and try to build something from it ask about it one
        question at a time. You paste the description, you get a question, you answer it, you get
        another question. Each exchange is short and reasonable on its own, and the whole thing is
        exhausting, because a brief that should have taken five minutes has become a twenty-message
        interrogation conducted at the pace of a chat window.
      </P>
      <P>
        What happens next is predictable. Recruiters abandon it halfway. Not out of impatience, but
        because the shape of the conversation gives no indication of how much is left. After the
        eighth question there is no way to tell whether the ninth is the last one or the first of
        another twelve, and a task with no visible end competes badly with everything else in an
        afternoon.
      </P>
      <P>
        The half-finished brief is then worse than either extreme. The role carries some of the
        answers and not others, and nobody remembers which. The questions that were never reached get
        resolved later by assumption, which is precisely what asking them was supposed to prevent.
      </P>

      <H2>Work out the ambiguity first, then ask once</H2>
      <P>
        On EmployLabs the order is reversed. When a job description arrives, the AI works through it
        first and establishes everything about it that is genuinely ambiguous: every point where the
        description could reasonably mean more than one thing, and where the difference would change
        who ends up being contacted. Only then does it ask.
      </P>
      <P>
        And it asks the whole set in one turn. You see every open question at once, answer them in a
        single pass, and the brief is built. There is no second round produced by your answers to the
        first, because the ambiguity was worked out before the asking started rather than discovered
        one reply at a time.
      </P>

      <Pull>
        A brief should be one turn with every question in it, not twenty turns with one question in
        each.
      </Pull>

      <H2>Seeing the whole set is the point</H2>
      <P>
        Answering ten questions at once is not merely faster than answering ten questions in sequence.
        It is a different task. The set is visible, so you can see what it will cost you before you
        start, and choose to do it now instead of abandoning it in the middle.
      </P>
      <P>
        The questions also inform each other. Read together, they often show that two of them are
        really the same decision, or that answering the third makes the seventh irrelevant. Answered
        one at a time that never becomes apparent, and you commit to the first answer without knowing
        what it implies for the rest.
      </P>
      <P>
        It is also the honest version of the interaction. A drip of questions conceals the true cost
        of the brief and reveals it only once you are too far in to stop. Showing all of it up front
        respects the fact that a recruiter is deciding whether to spend the next few minutes on this
        role or on something else.
      </P>

      <H2>Questions about the role, not a form to complete</H2>
      <P>
        The questions are not a fixed questionnaire applied to every job. They come from this
        description and its particular gaps. A job description that already states its salary band
        plainly is not asked for the band again, and a description that is precise about the
        engineering but vague about who the person reports to gets asked about reporting rather than
        about the engineering.
      </P>
      <P>
        That is why the number of questions differs from role to role. A carefully written description
        generates few, because there is little left to resolve. A description assembled from an old
        template generates more, because the ambiguity is really there, and finding it now is far
        cheaper than finding it in the replies three weeks later.
      </P>
      <Bullets>
        <li>
          <Strong>No question you have already answered.</Strong> If the description says it, the
          description is believed, and you are not asked to type it a second time.
        </li>
        <li>
          <Strong>No question that does not change the search.</Strong> Ambiguity that makes no
          difference to who gets contacted is not worth a recruiter&rsquo;s attention.
        </li>
        <li>
          <Strong>No hidden second round.</Strong> The set you are shown is the set, so the brief is
          finished when you have answered it.
        </li>
      </Bullets>

      <H2>How to use it</H2>
      <Steps>
        <li>
          Read all the questions before answering any of them. They were written as a set and they are
          quicker to answer as one.
        </li>
        <li>
          Treat an unexpected question as information about the description. If you are being asked
          something you thought was obvious, the description did not say it, and everyone reading it
          afterwards would have guessed too.
        </li>
        <li>
          Forward the set to the hiring manager when an answer is genuinely theirs. A short list of
          specific questions is a much easier thing to send than a request to review a brief, and it
          tends to come back the same day.
        </li>
      </Steps>
    </>
  );
}

export const post: BlogPost = {
  slug: "every-question-in-one-turn",
  title: "Every question about the role, in one turn",
  dek: "The AI works out everything ambiguous in your job description first, then asks the whole set at once. You answer once and the brief is built.",
  answer:
    "EmployLabs resolves a job description by working out everything genuinely ambiguous in it first, then asking the whole set of clarifying questions in a single turn. The recruiter answers once and the brief is built, instead of being led through one question per message. The questions come from the real gaps in that description rather than from a fixed form.",
  category: "update",
  motif: "rows",
  publishedAt: "2026-10-20",
  readingMinutes: 4,
  topics: ["hiring brief", "job description", "recruiter workflow", "AI recruiting agent", "clarifying questions"],
  faq: [
    {
      q: "How long does it take to brief the AI on a new role?",
      a: "One turn. EmployLabs reads the job description, works out everything ambiguous in it, and asks every clarifying question at once. You answer the set in a single pass and the brief is built, rather than being taken through one question per message.",
    },
    {
      q: "Why not ask the questions one at a time like a chatbot?",
      a: "Because a drip of one question per reply turns a five-minute brief into a twenty-message interrogation with no visible end, and recruiters abandon it halfway. A half-answered brief then leaves some decisions to assumption, which is what asking was meant to prevent.",
    },
    {
      q: "Are the questions the same for every job?",
      a: "No. They come from genuine ambiguity in the description you supplied. A job description that already states its salary band is not asked for it again, so a precise description produces few questions and a vague one produces more.",
    },
  ],
  Body,
};
