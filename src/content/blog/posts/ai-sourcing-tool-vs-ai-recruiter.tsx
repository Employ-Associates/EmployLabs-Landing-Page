import type { BlogPost } from "../types";
import { P, H2, Pull, Bullets, Strong, CompareTable } from "@/components/blog/prose";

function Body() {
  return (
    <>
      <H2>One label, two products</H2>
      <P>
        A tool that finds candidates and a tool that runs a hiring process are sold under the same
        words, and the gap between them is where most disappointment with AI recruiting comes from. A
        team whose bottleneck is contacting and screening people buys a better search engine, gets a
        longer list, and is now further behind than before.
      </P>

      <Pull>A longer list is not progress if the list was never the constraint.</Pull>

      <H2>What each one actually does</H2>
      <CompareTable
        head={["", "AI sourcing tool", "AI recruiter"]}
        rows={[
          [
            "The unit of work",
            "A search. You describe a person, it returns ranked candidates.",
            "A role. It runs from brief to interview, stopping at your decisions.",
          ],
          [
            "Where it ends",
            "A list, usually exported.",
            "A shortlist of people who have been contacted, screened and often interviewed.",
          ],
          [
            "Who contacts candidates",
            "You, or a sequencing tool you also bought.",
            "The system, under limits and consent rules you set.",
          ],
          [
            "What it spends",
            "Search and contact-data credits.",
            "The same, plus outreach and interviews, which is why spend caps matter more.",
          ],
          [
            "Human decisions",
            "Everything after the list.",
            "Specific gates: the brief, arming automation, approving spend, the hire.",
          ],
          [
            "What it needs from you",
            "A good query and time to work the results.",
            "A good brief and a decision at each gate.",
          ],
        ]}
      />

      <H2>The bottleneck test</H2>
      <P>
        Ask where your roles actually stall. If you have good candidates you never contacted, the
        constraint is capacity and a search tool will make it worse. If you cannot find anyone worth
        contacting, the constraint is discovery and an end-to-end platform is overkill.
      </P>
      <P>
        Most teams under about fifteen open roles per recruiter are capacity-constrained and buy for
        discovery, because discovery is the part that feels like the work.
      </P>

      <H2>What changes when the system contacts people</H2>
      <P>
        This is the real line between the categories, and it is not a feature difference. A search tool
        that returns a bad list wastes your afternoon. A system that contacts candidates on your behalf
        can damage your employer brand at a scale no individual recruiter could manage.
      </P>
      <P>
        Which is why the questions worth asking shift entirely once outreach is involved.
      </P>

      <Bullets>
        <li>
          <Strong>What does a candidate receive, exactly?</Strong> Ask to be put through it yourself
          rather than shown a dashboard.
        </li>
        <li>
          <Strong>How does someone decline, and what happens then?</Strong> If declining is hard or a
          written no is ignored, that is your brand.
        </li>
        <li>
          <Strong>What stops it spending?</Strong> Anything autonomous spends autonomously.
        </li>
        <li>
          <Strong>What can it do without a human?</Strong> The honest products name a small list. The
          ones that say everything are describing a liability.
        </li>
      </Bullets>

      <H2>They are not competitors</H2>
      <P>
        Plenty of teams should run both, and the good sourcing products are better at discovery than
        any end-to-end platform is. The mistake is buying one expecting the other, then concluding that
        AI recruiting does not work when what actually happened was a category error at purchase.
      </P>
    </>
  );
}

export const post: BlogPost = {
  slug: "ai-sourcing-tool-vs-ai-recruiter",
  title: "AI sourcing tool vs AI recruiter: the actual difference",
  dek: "One returns a list. The other runs a role. Buying the first when you needed the second is where most disappointment with AI recruiting comes from.",
  answer:
    "An AI sourcing tool takes a search and returns ranked candidates; an AI recruiter takes a role and runs it from brief through outreach and screening to interview, stopping at human gates. Choose by identifying where roles actually stall: unreachable good candidates means a capacity constraint, where a better search tool makes things worse. Once a system contacts candidates, the evaluation questions shift to brand and spend control.",
  category: "article",
  motif: "versus",
  publishedAt: "2026-09-29",
  readingMinutes: 7,
  topics: ["AI recruiting tools", "recruiting software", "AI sourcing", "vendor selection", "hiring automation"],
  faq: [
    {
      q: "What is the difference between an AI sourcing tool and an AI recruiter?",
      a: "A sourcing tool's unit of work is a search and it ends at a ranked list. An AI recruiter's unit of work is a role, running from brief through outreach and screening to interview, with humans deciding at specific gates.",
    },
    {
      q: "How do I know which category I need?",
      a: "Identify where roles stall. Good candidates you never contacted means capacity is the constraint and a better search tool worsens it. Nobody worth contacting means discovery is the constraint and an end-to-end platform is more than you need.",
    },
    {
      q: "What should you ask a vendor whose system contacts candidates?",
      a: "Exactly what a candidate receives, how someone declines and what happens when they do, what stops the system spending, and the specific list of what it can do without a human. A vendor claiming it can do everything autonomously is describing a liability.",
    },
  ],
  Body,
};
