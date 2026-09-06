import type { BlogPost } from "../types";
import { P, H2, Pull, Bullets, Strong, CompareTable } from "@/components/blog/prose";

function Body() {
  return (
    <>
      <H2>The bar is lower than people pretend</H2>
      <P>
        Discussion of AI in hiring usually starts from the assumption that the human process was warm
        and personal and is now at risk. Most candidates would not recognise that description. The
        common experience of applying for a job is an acknowledgement email, silence for three weeks,
        and then nothing at all.
      </P>
      <P>
        So the question is not whether an AI recruiter is worse than an attentive human. It is whether
        it is better than what the candidate was actually getting, and whether the things that make it
        worse are being addressed deliberately rather than hoped away.
      </P>

      <H2>Four standards worth holding</H2>

      <CompareTable
        head={["Standard", "What it means in practice", "Why it matters"]}
        rows={[
          [
            "Say what you are",
            "The candidate knows they are talking to an AI agent, by name, without having to work it out.",
            "Finding out later feels like a trick, and it retroactively poisons every honest exchange that came before.",
          ],
          [
            "Answer the provenance question",
            "When asked where their details came from, the system answers truthfully, including admitting it does not know.",
            "It is the question that most often turns an ordinary contact into a complaint. Inventing an answer is far worse than admitting ignorance.",
          ],
          [
            "Make no easy to say",
            "Declining is one step, is honoured immediately, and stops the sequence everywhere.",
            "A decline is more useful to you than silence. Making it hard buys you nothing and costs goodwill.",
          ],
          [
            "Never call it a rejection",
            "A non-selection is stated plainly, without pretending, and without the language of failure.",
            "Most candidates you contact will not be hired. All of them talk about how it felt.",
          ],
        ]}
      />

      <Pull>
        Most people you contact will not get the job. Every one of them will describe how the process
        treated them.
      </Pull>

      <H2>What an agent genuinely does better</H2>
      <Bullets>
        <li>
          <Strong>It answers at eleven at night.</Strong> Candidates are employed. They engage in the
          gaps, and a reply that arrives then is worth more than a better reply on Thursday.
        </li>
        <li>
          <Strong>It answers every candidate, not the top three.</Strong> Human attention is scarce and
          gets rationed toward the front-runners. Everyone else experiences that rationing as silence.
        </li>
        <li>
          <Strong>It does not get tired at candidate forty.</Strong> The last conversation of the week
          is the same as the first, which is not true of any human process.
        </li>
        <li>
          <Strong>It closes the loop.</Strong> Most automated pipelines fail here, and it is the single
          most-cited complaint candidates have about recruiting.
        </li>
      </Bullets>

      <H2>Where it is genuinely worse, and what to do</H2>
      <P>
        An agent cannot advocate for a candidate. It cannot notice that someone is a bad fit for this
        role and a strong fit for one two teams over, unless somebody built that path. It cannot bend a
        process, and bending the process is often exactly what a good recruiter does for a good
        candidate.
      </P>
      <P>
        The answer is not to pretend otherwise. It is to keep the human stages real, make the hand-off
        to a person explicit and quick when the conversation needs one, and resist the temptation to
        automate the moment where judgement is the entire value.
      </P>

      <H2>A test you can run on any vendor</H2>
      <P>
        Ask to be put through the candidate experience yourself. Not a demo of the recruiter dashboard,
        the actual sequence a candidate receives. Read the first email, decline it, then ask where they
        got your number.
      </P>
      <P>
        Those three steps tell you more about a product than an hour of feature walkthrough. If the
        decline is buried, or the provenance answer is invented, you have learned what the system will
        do to your employer brand at scale.
      </P>
    </>
  );
}

export const post: BlogPost = {
  slug: "candidate-experience-when-the-recruiter-is-ai",
  title: "Candidate experience when the recruiter is an AI",
  dek: "Consent, transparency, tone, and the right to a straight answer. The standards worth holding yourself to, and a three-step test for any vendor.",
  answer:
    "Four standards define good candidate experience with an AI recruiter: disclose that the candidate is talking to an agent, answer truthfully when asked where their details came from, make declining easy and honour it immediately everywhere, and never frame a non-selection as a rejection. AI genuinely outperforms human process on responsiveness and closing the loop, and genuinely underperforms on advocacy.",
  category: "article",
  motif: "consent",
  publishedAt: "2026-09-09",
  readingMinutes: 3,
  topics: ["candidate experience", "AI recruiting ethics", "employer brand", "recruiting transparency", "candidate consent"],
  faq: [
    {
      q: "Should candidates be told they are talking to an AI recruiter?",
      a: "Yes, by name and without having to work it out. Discovering it later feels like a trick and undermines every honest exchange that preceded it.",
    },
    {
      q: "What should an AI recruiter say when a candidate asks where their details came from?",
      a: "The truth, including admitting when it does not know. Inventing a plausible answer is the single most damaging thing an automated outreach system can do, and it is the question that most often escalates a routine contact into a complaint.",
    },
    {
      q: "What does an AI recruiter do better than a human one?",
      a: "It replies at any hour, gives every candidate the same attention rather than rationing it to the front-runners, does not degrade across a long week, and closes the loop with people who were not selected.",
    },
    {
      q: "What can an AI recruiter not do for candidates?",
      a: "Advocate for them. It cannot notice that someone is wrong for this role but right for another team, and it cannot bend a process for a strong candidate. Those judgements need a human stage that stays real.",
    },
  ],
  Body,
};
