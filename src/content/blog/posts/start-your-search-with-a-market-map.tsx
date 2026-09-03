import type { BlogPost } from "../types";
import { P, H2, Pull, Steps, Bullets, Strong } from "@/components/blog/prose";

function Body() {
  return (
    <>
      <H2>Briefs get written in the dark</H2>
      <P>
        The usual sequence is that a hiring manager writes a job description from what they wish
        existed, a recruiter turns it into a search, and the market delivers its verdict three weeks
        later in the form of an empty shortlist. By then you have spent the budget and the credibility,
        and the conversation about whether the role is realistic happens far too late to be useful.
      </P>
      <P>
        The information needed to have that conversation on day one is not hard to get. It is just
        never gathered before the questions start.
      </P>

      <H2>The map comes before the questions</H2>
      <P>
        On EmployLabs, Meera researches the company and the market first. Before she asks you a single
        clarifying question about the role, you are looking at where this talent sits: which companies
        employ it, what the equivalent titles are, roughly what it pays in your locations, and how
        thick the supply is.
      </P>
      <P>
        The ordering is deliberate and it was changed on purpose. Asking the questions first means you
        answer them from assumption. Seeing the market first means your answers are informed, and the
        brief that comes out the other side is one the market can actually fill.
      </P>

      <Pull>
        A brief written against the market is a search. A brief written against a wish is a
        three-week delay.
      </Pull>

      <H2>What the map tends to tell you</H2>
      <Bullets>
        <li>
          <Strong>The title you used is not the title the market uses.</Strong> Extremely common, and
          it is the single cheapest fix in recruiting. The same job is a Platform Engineer at one
          company and an SRE at another.
        </li>
        <li>
          <Strong>Your band is under the market for that seniority in that city.</Strong> Better to
          learn this before outreach than from four declines in a row.
        </li>
        <li>
          <Strong>The supply is concentrated somewhere you were not looking.</Strong> Often an adjacent
          industry that solves the same problem under a different name.
        </li>
        <li>
          <Strong>The combination you asked for barely exists.</Strong> Not that the role is
          impossible, but that two of the requirements rarely appear in the same person, which is a
          brief conversation rather than a sourcing problem.
        </li>
      </Bullets>

      <H2>It stays with the role</H2>
      <P>
        The map is not a one-off report you read and lose. It sits on the role, so when the shortlist
        comes back thin the conversation has a reference point. The question stops being &ldquo;can we
        find more people&rdquo; and becomes &ldquo;which of these four requirements is the market telling
        us to move&rdquo;, which is a question with an answer.
      </P>

      <H2>How to use it</H2>
      <Steps>
        <li>
          Read the map before you answer the brief questions. It takes two minutes and it changes most
          of the answers.
        </li>
        <li>
          Send it to the hiring manager if the band or the title looks wrong. It is a much easier
          conversation with evidence attached, and it is far easier now than after a failed search.
        </li>
        <li>
          Come back to it when the pipeline stalls. Most stalls are a brief problem wearing a sourcing
          problem&rsquo;s clothes.
        </li>
      </Steps>
    </>
  );
}

export const post: BlogPost = {
  slug: "start-your-search-with-a-market-map",
  title: "Start your search with a market map",
  dek: "Before you answer a single question about the role, you are looking at the market it sits in: who is hiring, what it pays, and where the supply actually is.",
  answer:
    "EmployLabs researches the company and talent market before asking any questions about the role, so the brief is written against real market data rather than assumption. The map shows which companies employ this talent, the titles the market actually uses, pay levels by location, and how concentrated supply is. It stays attached to the role for later pipeline decisions.",
  category: "update",
  motif: "market",
  publishedAt: "2026-09-06",
  readingMinutes: 4,
  topics: ["market mapping", "talent intelligence", "job brief", "sourcing strategy", "compensation benchmarking"],
  faq: [
    {
      q: "What is a talent market map?",
      a: "A view of where the people for a role actually are: the companies that employ them, the titles used in the market, pay levels by location, and how thick or thin supply is. It is used to write a brief the market can fill.",
    },
    {
      q: "Why should market research happen before writing the hiring brief?",
      a: "Answering brief questions without market data means answering from assumption, and the market's verdict then arrives weeks later as an empty shortlist. Seeing supply, titles and pay first produces a brief that is realistic on day one.",
    },
    {
      q: "What does a market map usually reveal?",
      a: "Most often that the job title does not match the market's vocabulary, that the salary band sits under market for that seniority and city, that supply is concentrated in an adjacent industry, or that two requirements rarely occur in the same person.",
    },
  ],
  Body,
};
