import type { BlogPost } from "../types";
import { P, H2, Pull, Steps, Bullets, Strong, CompareTable } from "@/components/blog/prose";

function Body() {
  return (
    <>
      <H2>A word that stopped carrying information</H2>
      <P>
        In 2024 an AI recruiting tool meant a search box that understood a sentence. By 2026 the same
        phrase covers a scheduling bot, a chat widget, a screening product and a system that runs an
        entire hiring process, and buyers are expected to work out which one they are looking at from a
        homepage.
      </P>
      <P>
        The distinction that actually matters is not how clever the model is. It is how much of the
        work happens without a person, and what happens at the points where a person is still required.
      </P>

      <H2>Assistant, automation, agent</H2>
      <CompareTable
        head={["", "What it does", "How you can tell"]}
        rows={[
          [
            "Assistant",
            "Answers, drafts and suggests. You act on every output.",
            "Nothing happens if you close the tab.",
          ],
          [
            "Automation",
            "Executes a fixed sequence you configured. Same steps, same order, every time.",
            "It cannot decide to do something different, only to stop.",
          ],
          [
            "Agent",
            "Pursues an outcome. Chooses steps, reacts to what comes back, and stops at defined gates.",
            "Two runs of the same brief can legitimately look different.",
          ],
        ]}
      />

      <P>
        Most products sold as agents are automations with a chat interface, which is not an insult.
        Automation is reliable and cheap and often the right purchase. It is only a problem when it is
        bought expecting judgement.
      </P>

      <Pull>
        If two runs of the same brief could never differ, it is automation. That is fine. It is just
        not an agent.
      </Pull>

      <H2>What an agent must have to be trustworthy</H2>
      <Bullets>
        <li>
          <Strong>Gates that refuse it.</Strong> Anything that spends money or contacts a person needs
          a human decision, enforced in code rather than requested in a prompt.
        </li>
        <li>
          <Strong>Legible reasoning.</Strong> If you cannot see why a candidate scored what they
          scored, you cannot supervise the agent, and unsupervised judgement is the thing you were
          worried about.
        </li>
        <li>
          <Strong>A stopping condition it announces.</Strong> An agent that quietly halts is
          indistinguishable from a broken one.
        </li>
        <li>
          <Strong>Bounded spend.</Strong> Autonomy over money without a ceiling is not a feature.
        </li>
      </Bullets>

      <H2>Where agents genuinely help in hiring</H2>
      <P>
        The work that is high-volume, judgement-light and time-sensitive. Finding candidates against a
        described profile. Reaching out and following up on a schedule nobody keeps manually. Answering
        the same twenty questions at whatever hour they arrive. Running a structured screen
        consistently across forty people. Chasing an assessment.
      </P>
      <P>
        None of that is the interesting part of recruiting. All of it is most of the hours.
      </P>

      <H2>Where they do not</H2>
      <P>
        Persuading a hesitant candidate. Telling a hiring manager their brief is unrealistic. Deciding
        which of two good finalists fits a team. Anything where the answer depends on context that
        lives in your company rather than in a profile.
      </P>
      <P>
        A vendor who claims otherwise is describing a liability, and the honest ones name their limits
        without being asked.
      </P>

      <H2>How to evaluate one</H2>
      <Steps>
        <li>Ask what it does without a human, and expect a short specific list rather than a philosophy.</li>
        <li>Ask to see the reasoning behind one decision it made.</li>
        <li>Go through the candidate experience yourself, including declining.</li>
        <li>Ask what stops it spending, and what a refusal costs.</li>
        <li>Ask what you keep if you stop paying.</li>
      </Steps>
    </>
  );
}

export const post: BlogPost = {
  slug: "what-is-an-ai-recruiting-agent",
  title: "What is an AI recruiting agent, really?",
  dek: "The word now covers a search box, a scheduling bot and a system that runs a whole hiring process. How to tell which one you are looking at.",
  answer:
    "An AI recruiting agent pursues a hiring outcome by choosing its own steps and reacting to results, stopping at defined human gates. This differs from an assistant, which only suggests and requires you to act, and from automation, which executes a fixed configured sequence. The practical test: if two runs of the same brief could never legitimately differ, it is automation rather than an agent.",
  category: "article",
  motif: "channels",
  publishedAt: "2026-10-10",
  readingMinutes: 2,
  topics: ["AI recruiting", "AI agents", "recruiting automation", "hiring technology", "vendor selection"],
  faq: [
    {
      q: "What is the difference between an AI assistant, automation and an AI agent in recruiting?",
      a: "An assistant suggests and you act on every output. Automation executes a fixed sequence you configured, in the same order every time. An agent pursues an outcome, choosing steps and reacting to what comes back, stopping at defined human gates.",
    },
    {
      q: "How can you tell if a product is really an AI agent?",
      a: "Ask whether two runs of the same brief could legitimately produce different sequences of action. If they could not, it is automation with a chat interface, which is often the right purchase but should not be bought expecting judgement.",
    },
    {
      q: "What must an AI recruiting agent have to be trustworthy?",
      a: "Gates that refuse it enforced in code rather than prompts, reasoning you can inspect, a stopping condition it announces rather than halting silently, and a hard ceiling on spend.",
    },
    {
      q: "What should an AI recruiting agent not be trusted with?",
      a: "Persuading a hesitant candidate, telling a hiring manager their brief is unrealistic, and choosing between two good finalists. These depend on context that lives inside your company rather than in a candidate profile.",
    },
  ],
  Body,
};
