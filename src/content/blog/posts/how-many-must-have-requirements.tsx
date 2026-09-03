import type { BlogPost } from "../types";
import { P, H2, Pull, Steps, Bullets, Strong, Figure, CompareTable, PoolFunnel } from "@/components/blog/prose";

function Body() {
  return (
    <>
      <H2>What a must-have actually does</H2>
      <P>
        A must-have is not a preference expressed strongly. It is an instruction to reject anyone who
        does not have it, and most hiring briefs are written without anybody saying that part out loud.
        The requirement gets added in a meeting because it sounds sensible, and three weeks later the
        shortlist is thin and nobody can point at which line caused it.
      </P>
      <P>
        The test is simple and worth applying literally. If a candidate is outstanding on everything
        else and lacks this one thing, do you want to see them? If the answer is yes, even reluctantly,
        it is not a must-have.
      </P>

      <H2>Why they compound</H2>
      <P>
        Requirements do not add up, they multiply. Suppose each of your hard requirements excludes
        three candidates in ten. One requirement leaves seventy per cent of the pool, which sounds
        fine. Two leave forty-nine. By five you are working with seventeen people out of every hundred
        you paid to find.
      </P>

      <Figure caption="Illustrative arithmetic: a uniform 30% exclusion rate per requirement. Real rates differ by requirement, and the exact numbers will differ for your role. The shape of the curve does not.">
        <PoolFunnel
          rows={[
            { label: "No must-haves", pct: 100 },
            { label: "1 must-have", pct: 70 },
            { label: "2 must-haves", pct: 49 },
            { label: "3 must-haves", pct: 34 },
            { label: "4 must-haves", pct: 24, tone: "warn" },
            { label: "5 must-haves", pct: 17, tone: "bad" },
          ]}
        />
      </Figure>

      <P>
        The damage is worse than the arithmetic suggests, because exclusions are not independent. The
        candidate who has the niche tool experience is often the one who lacks the domain background,
        and the one with both usually wants more money than the role pays. Stacking requirements
        selects for a profile that may not exist in your market at your budget.
      </P>

      <Pull>
        The fifth requirement rarely raises your bar. It removes people who would have cleared it.
      </Pull>

      <H2>Four, and what to do with the rest</H2>
      <P>
        We cap hard requirements at four on the platform, and push everything else into preferences.
        This is not a limit on what you care about. A preference still ranks candidates, still shows up
        in the score, and still tells you who is stronger. It just does not throw anyone out.
      </P>

      <CompareTable
        head={["Requirement", "Make it a must-have when", "Make it a preference when"]}
        rows={[
          [
            "Years of experience",
            "The work is genuinely unsupervised from week one and there is nobody to escalate to.",
            "You have a team around the role. Range of experience matters more than a threshold.",
          ],
          [
            "A specific tool or stack",
            "It is unteachable in the time you have, or a regulator requires the certification.",
            "A capable person picks it up in weeks. This is the most over-used must-have there is.",
          ],
          [
            "Domain or industry",
            "Domain knowledge is the job — regulatory, clinical, or deeply specialised sales.",
            "You want the vocabulary faster. Adjacent industries often bring better practice.",
          ],
          [
            "Location",
            "The role is genuinely onsite and relocation is not funded.",
            "Hybrid, or you would fund a move for the right person.",
          ],
          [
            "Management experience",
            "They inherit a team on day one with no transition period.",
            "You would consider a strong first-time manager with support.",
          ],
        ]}
      />

      <H2>The requirement nobody admits is optional</H2>
      <P>
        In most briefs we see, the tool requirement is the one doing the damage. It feels concrete,
        which is why it survives the conversation that trims everything else, and it is almost always
        the least predictive line in the whole brief. Someone who has built the same system twice in
        two adjacent stacks will be productive in yours faster than someone who has used yours once
        without building anything demanding on it.
      </P>
      <P>
        Location is the second one. It is often written as a hard requirement when what the hiring
        manager means is that they would rather not fund a move. Those are different statements, and
        only one of them should be rejecting candidates automatically.
      </P>

      <H2>Common mistakes</H2>
      <Bullets>
        <li>
          <Strong>Writing the wish list as the brief.</Strong> The job description is a marketing
          document and the scoring criteria are an operational one. They should not be the same list.
        </li>
        <li>
          <Strong>Adding a requirement to fix a bad shortlist.</Strong> If the pool is weak, the usual
          cause is a mistargeted search rather than a permissive filter. Tightening the gate shrinks
          the pool without improving what is in it.
        </li>
        <li>
          <Strong>Treating silence as failure.</Strong> A profile that does not mention something has
          not told you the person lacks it. Any system that scores those the same way will quietly
          discard good candidates, and you will never see the ones it discarded.
        </li>
        <li>
          <Strong>Never revisiting the list.</Strong> Requirements written before you saw the market
          are guesses. Once you have seen fifty real profiles you know which line is unrealistic.
        </li>
      </Bullets>

      <H2>A working method</H2>
      <Steps>
        <li>Write every requirement down, without ranking them. Expect eight to twelve.</li>
        <li>
          For each one ask the outstanding-candidate question: if they were exceptional everywhere else
          and missing this, would you look? Every yes moves to preferences.
        </li>
        <li>
          If more than four survive, rank them and take the top four. The rest are preferences, and
          they still influence who reaches the top of your list.
        </li>
        <li>
          Look at the first twenty candidates before deciding your brief was right. If a requirement is
          knocking out people you would happily interview, it was a preference all along.
        </li>
      </Steps>

      <P>
        A brief with four hard requirements and eight preferences will nearly always produce a better
        shortlist than one with twelve requirements, because the second one is not really a brief. It
        is a description of somebody who does not exist.
      </P>
    </>
  );
}

export const post: BlogPost = {
  slug: "how-many-must-have-requirements",
  title: "How many must-have requirements should a role have?",
  dek: "Every hard requirement rejects candidates outright, and rejections compound. A practical method for deciding which of your criteria genuinely belong on that list.",
  answer:
    "A role should carry at most four must-have requirements. Each hard requirement rejects candidates outright and the exclusions multiply rather than add, so five requirements at a 30% exclusion rate each leave roughly 17 candidates from every 100 sourced. Everything beyond four should become a ranking preference, which still scores candidates without rejecting them.",
  category: "article",
  motif: "bars",
  publishedAt: "2026-09-02",
  readingMinutes: 9,
  topics: ["hiring criteria", "job requirements", "candidate scoring", "recruiting strategy", "ICP"],
  faq: [
    {
      q: "How many must-have requirements should a job have?",
      a: "At most four. Beyond that, hard requirements shrink the candidate pool faster than they improve its quality, because exclusions compound and tend to correlate with each other.",
    },
    {
      q: "What is the difference between a must-have and a preference?",
      a: "A must-have rejects any candidate who lacks it. A preference ranks candidates and contributes to their score without excluding anyone. Most criteria in a typical brief are preferences written as must-haves.",
    },
    {
      q: "How do I decide whether a requirement is really a must-have?",
      a: "Ask whether you would look at a candidate who is outstanding on everything else but missing this one thing. If you would, even reluctantly, it is a preference.",
    },
    {
      q: "Which requirements are most often over-specified?",
      a: "Specific tools or stacks, and location. Tool requirements feel concrete but are usually the least predictive line in a brief, and location is often written as a hard requirement when the real position is that relocation is unfunded.",
    },
  ],
  Body,
};
