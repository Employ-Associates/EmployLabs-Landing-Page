import type { BlogPost } from "../types";
import { P, H2, Pull, Steps, Bullets, Strong, CompareTable } from "@/components/blog/prose";

function Body() {
  return (
    <>
      <H2>Why most scorecards do nothing</H2>
      <P>
        The standard interview scorecard asks for a rating from one to five on a handful of qualities,
        with no definition of what any number means. Two interviewers watch the same candidate and one
        gives a 3 while the other gives a 5, and neither is wrong, because nothing said what a 4 was.
      </P>
      <P>
        The scores then get averaged, which lends the whole thing an arithmetic respectability it has
        not earned, and the decision gets made in the debrief on whoever argues most confidently.
      </P>

      <H2>What a behavioural anchor is</H2>
      <P>
        A behaviourally anchored rating scale replaces the abstract quality with observable evidence at
        each level. Instead of rating &ldquo;communication&rdquo; out of five, you describe what a weak
        answer sounds like, what an adequate one sounds like, and what an exceptional one sounds like,
        for this role.
      </P>
      <P>
        The interviewer is then matching what they heard against a description rather than converting
        an impression into a number. That is a far easier task and a far more repeatable one.
      </P>

      <CompareTable
        head={["Level", "Unanchored scorecard", "Behaviourally anchored"]}
        rows={[
          [
            "1",
            "Poor",
            "Describes the outcome only. Cannot say what they personally did or what the alternatives were.",
          ],
          [
            "3",
            "Meets expectations",
            "Describes their own contribution and one trade-off they weighed, with a concrete example.",
          ],
          [
            "5",
            "Outstanding",
            "Names the decision they got wrong, what it cost, and what they changed as a result.",
          ],
        ]}
      />

      <Pull>
        An interviewer matching an answer against a description is doing a different job from one
        converting an impression into a number.
      </Pull>

      <H2>Writing them</H2>
      <Steps>
        <li>
          <Strong>Start from the work, not the quality.</Strong> Not &ldquo;problem solving&rdquo; but
          &ldquo;diagnosing a production issue with incomplete information&rdquo;. Anchors need
          something concrete to describe.
        </li>
        <li>
          <Strong>Write level 5 first, then level 1.</Strong> The extremes are easier and they set the
          range. The middle is then interpolation rather than invention.
        </li>
        <li>
          <Strong>Describe what the candidate says or does.</Strong> If an anchor contains a judgement
          word like &ldquo;strong&rdquo; or &ldquo;good&rdquo;, it is not an anchor yet.
        </li>
        <li>
          <Strong>Mark the ones that are genuinely must-pass.</Strong> A failed must-pass should pull
          the overall result down regardless of the average, or the average will quietly rescue a
          candidate who failed the thing that mattered.
        </li>
        <li>
          <Strong>Keep it to four to seven dimensions.</Strong> Beyond that, interviewers stop reading
          the anchors and revert to impressions, which puts you back where you started.
        </li>
      </Steps>

      <H2>The failure modes</H2>
      <Bullets>
        <li>
          <Strong>Anchors that describe the person rather than the answer.</Strong> &ldquo;Confident
          communicator&rdquo; is a personality judgement and is exactly where bias enters. &ldquo;Explained
          a technical trade-off to a non-specialist without jargon&rdquo; is observable.
        </li>
        <li>
          <Strong>Reusing one rubric across levels.</Strong> The anchors for a first-time manager and a
          director are different documents. Sharing them means one of the two is being measured against
          the wrong bar.
        </li>
        <li>
          <Strong>Scoring what was never asked.</Strong> If the interview did not probe something, the
          honest record is that it was not probed. A zero is a claim about the candidate; silence is a
          claim about the interview.
        </li>
        <li>
          <Strong>Writing them after the interviews start.</Strong> A rubric written once you have met
          candidates is a description of the people you liked.
        </li>
      </Bullets>

      <H2>The test</H2>
      <P>
        Hand your rubric to someone who has never met the candidate, with a transcript. If they arrive
        at roughly your scores, the anchors are doing their job. If they cannot, the document is
        decoration and the decision is still being made on impressions.
      </P>
    </>
  );
}

export const post: BlogPost = {
  slug: "interview-scoring-rubric-behavioural-anchors",
  title: "How to build an interview scoring rubric with behavioural anchors",
  dek: "Rating “communication” out of five tells you nothing, because nothing defined what a four was. How to write anchors an interviewer can actually match an answer against.",
  answer:
    "A behaviourally anchored rating scale replaces abstract qualities with observable descriptions at each level, so an interviewer matches what a candidate said against a description instead of converting an impression into a number. Write the extremes first, describe what the candidate says or does rather than what they seem like, mark the genuinely must-pass dimensions, and keep the whole rubric to four to seven dimensions.",
  category: "article",
  motif: "report",
  publishedAt: "2026-09-24",
  readingMinutes: 9,
  topics: ["interview scorecard", "hiring criteria", "structured interview", "hiring bias", "candidate assessment"],
  faq: [
    {
      q: "What is a behaviourally anchored rating scale?",
      a: "A scoring scale where each level is defined by observable behaviour rather than an abstract label. Instead of rating communication one to five, each level describes what a weak, adequate and exceptional answer actually contains for that role.",
    },
    {
      q: "How many dimensions should an interview rubric have?",
      a: "Four to seven. Beyond that interviewers stop reading the anchors and fall back on impressions, which removes the benefit the rubric existed to provide.",
    },
    {
      q: "What makes an interview anchor biased?",
      a: "Describing the person rather than the answer. Phrases like confident or articulate are personality judgements and are where bias enters; an anchor should describe something the candidate said or did.",
    },
    {
      q: "How do you know if a rubric is working?",
      a: "Give it to someone who never met the candidate, along with a transcript. If they reach roughly the same scores, the anchors are carrying the decision. If they cannot, the rubric is decoration.",
    },
  ],
  Body,
};
