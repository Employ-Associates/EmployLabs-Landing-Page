import type { BlogPost } from "../types";
import { P, H2, Pull, Bullets, Strong, CompareTable } from "@/components/blog/prose";

function Body() {
  return (
    <>
      <H2>Start with the limits</H2>
      <P>
        Any honest account of AI interviewing has to begin with what it cannot do, because the category
        has spent two years claiming otherwise and recruiters have correctly stopped believing it.
      </P>
      <P>
        A voice interview cannot tell you whether someone will get on with your CTO. It cannot read a
        room it is not in. It cannot judge whether a candidate&rsquo;s ambition fits the shape of your
        company over three years, and it should not be asked to infer personality traits from vocal
        delivery, which is a well-documented way to build discrimination into a hiring process.
      </P>

      <Pull>
        If a vendor tells you their interview measures culture fit from voice, ask what signal they
        think they are reading.
      </Pull>

      <H2>What it does measure well</H2>
      <P>
        The things a structured conversation is genuinely good at are the same things a competent phone
        screen is good at, with the difference that every candidate gets the identical one.
      </P>

      <CompareTable
        head={["Signal", "How well a voice interview reads it", "Why"]}
        rows={[
          [
            "Depth behind a claim",
            "Well",
            "Follow-up questions expose whether someone did the work or watched it happen. This is the single strongest signal in the format.",
          ],
          [
            "Reasoning under a scenario",
            "Well",
            "A described situation with no clean answer shows how someone weighs trade-offs in real time.",
          ],
          [
            "Communication clarity",
            "Well",
            "Explaining something technical to a non-expert is directly observable, and it is a real job requirement rather than a proxy.",
          ],
          [
            "Verifiable facts",
            "Well",
            "Notice period, location, compensation expectation, scope of a past role. Cheap to ask and expensive to get wrong later.",
          ],
          [
            "Practical craft",
            "Partly",
            "You learn whether they can describe the work. Whether they can do it needs a work sample.",
          ],
          [
            "Team fit and motivation",
            "Poorly",
            "Requires context an interviewer outside your company does not have. Belongs with your hiring manager.",
          ],
          [
            "Personality and culture",
            "Not at all",
            "Inference from vocal delivery is unreliable and legally risky. We do not attempt it.",
          ],
        ]}
      />

      <H2>The real argument for it is consistency</H2>
      <P>
        The strongest case has nothing to do with intelligence. Human screening is wildly inconsistent,
        and everyone in recruiting knows it. The fortieth phone screen of the week is not the same
        interview as the first. A candidate reached on Friday afternoon gets a different conversation
        from one reached on Tuesday morning. Interviewers ask their favourite questions, follow the
        threads they personally find interesting, and score against a rubric they half-remember.
      </P>
      <P>
        A structured AI interview asks every candidate the questions the role actually requires, probes
        to the same depth, and scores against a rubric you wrote and can see. That is a lower ceiling
        than your best interviewer on their best day, and a much higher floor than your process
        averages across forty candidates.
      </P>

      <H2>Where it goes wrong</H2>
      <Bullets>
        <li>
          <Strong>Scoring the unprobed.</Strong> If the interview never asked about something, the
          report must say so rather than scoring it zero. A system that treats an unasked question as a
          failed one produces confident nonsense.
        </li>
        <li>
          <Strong>Trusting the transcript over the rubric.</Strong> Candidates do try to talk an AI
          interviewer into a better result. Signals have to be validated against the approved plan
          server-side, where the candidate cannot reach.
        </li>
        <li>
          <Strong>Replacing the human stage instead of feeding it.</Strong> The output should tell you
          what to ask next. A verdict with nothing actionable behind it just moves the same decision to
          a worse-informed place.
        </li>
        <li>
          <Strong>Treating it as a filter nobody reviews.</Strong> Any automated stage that rejects
          without a human ever reading the evidence will eventually reject someone it should not, and
          you will not find out.
        </li>
      </Bullets>

      <H2>What to ask a vendor</H2>
      <P>
        Four questions separate a serious product from a demo. Can I see and edit the rubric before it
        runs? What happens when a topic was never asked about? Can I read the transcript next to the
        score? And can a candidate influence their own score by what they say to the interviewer?
      </P>
      <P>
        The last one is the one nobody asks, and it is the one that determines whether the scores mean
        anything at all.
      </P>
    </>
  );
}

export const post: BlogPost = {
  slug: "what-a-voice-ai-interview-can-measure",
  title: "What a voice AI interview can and cannot measure",
  dek: "An honest scope piece. Where a structured AI interview beats a phone screen, where it is no substitute for meeting someone, and the four questions worth asking a vendor.",
  answer:
    "A voice AI interview reliably measures depth behind a claim, reasoning under a scenario, communication clarity and verifiable facts such as notice period and compensation expectations. It cannot judge team fit or motivation, which need company context, and it should not infer personality from vocal delivery. Its real advantage is consistency: every candidate gets the same interview against a rubric you wrote.",
  category: "article",
  motif: "report",
  publishedAt: "2026-09-05",
  readingMinutes: 3,
  topics: ["AI interview", "voice AI", "candidate screening", "structured interview", "hiring bias"],
  faq: [
    {
      q: "What can a voice AI interview actually measure?",
      a: "Depth behind a claimed achievement, reasoning through a scenario, clarity of communication, and verifiable facts like notice period, location and compensation expectations. It partly measures practical craft, and cannot measure team fit or culture.",
    },
    {
      q: "Can an AI interview assess culture fit?",
      a: "No. Culture and team fit require context about your company that an external interviewer does not have, and inferring personality from vocal delivery is unreliable and legally risky. That judgement belongs with your hiring manager.",
    },
    {
      q: "Is an AI interview better than a human phone screen?",
      a: "It has a lower ceiling than your best interviewer and a much higher floor than the average across many candidates. Human screening drifts across a week; a structured AI interview asks every candidate the same questions against a visible rubric.",
    },
    {
      q: "Can a candidate manipulate their AI interview score?",
      a: "They can try. A serious implementation validates the interview signals against the approved rubric on the server, where the candidate cannot influence them. Ask any vendor this question directly.",
    },
  ],
  Body,
};
