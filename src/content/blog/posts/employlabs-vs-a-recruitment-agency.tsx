import type { BlogPost } from "../types";
import { P, H2, Pull, Bullets, Strong, CompareTable } from "@/components/blog/prose";

function Body() {
  return (
    <>
      <H2>The comparison people actually run</H2>
      <P>
        Most teams evaluating EmployLabs are not choosing between us and another piece of software.
        They are deciding whether to give a role to an agency. That is a different question from the
        one vendor comparison pages usually answer, so this is written as the real decision rather than
        a feature grid.
      </P>
      <P>
        We are also not neutral, so the useful thing we can offer is being specific about where an
        agency is the better answer.
      </P>

      <H2>Where an agency genuinely wins</H2>
      <Bullets>
        <li>
          <Strong>Senior and executive search.</Strong> At the top of an organisation, hiring runs on
          relationships and discretion, and the value is a person who can call someone and be taken
          seriously. No platform substitutes for that.
        </li>
        <li>
          <Strong>Roles that need an advocate.</Strong> A good recruiter persuades a hesitant candidate,
          manages a counter-offer, and holds a nervous hiring manager steady. That is judgement applied
          under pressure.
        </li>
        <li>
          <Strong>Markets where you have no presence.</Strong> A new country or an unfamiliar
          discipline is exactly where somebody else&rsquo;s network is worth paying for.
        </li>
        <li>
          <Strong>When you want the risk elsewhere.</Strong> On contingency you pay for outcomes. That
          is a real transfer of risk, and for a team with no bandwidth it can be the right trade even
          at the price.
        </li>
      </Bullets>

      <Pull>
        If the role needs somebody to make a phone call on your behalf, that is not a software problem.
      </Pull>

      <H2>Where the economics diverge</H2>
      <P>
        Agency fees are commonly quoted as a percentage of first-year salary, which means the cost of a
        hire scales with the salary rather than with the work involved. Two roles taking identical
        effort cost very different amounts, and a role you fill twice in a year costs twice.
      </P>
      <P>
        A platform charges for the work: sourcing, contact data, outreach, interviews. That maps badly
        to a single senior hire and extremely well to volume, to repeat roles, and to any search where
        you want to know what each stage actually cost.
      </P>

      <CompareTable
        head={["", "Recruitment agency", "EmployLabs"]}
        rows={[
          [
            "Cost basis",
            "Percentage of the hire's first-year salary, usually paid on placement.",
            "Per action: sourcing, contact lookup, outreach, interviews. Capped per role and per account.",
          ],
          [
            "Best fit",
            "Senior and executive roles, unfamiliar markets, one-off hires needing an advocate.",
            "Volume, repeat roles, and searches where you want the process and the data to stay in-house.",
          ],
          [
            "Speed to first candidates",
            "Depends on the consultant's current desk and priorities.",
            "Sourcing starts as soon as the brief is confirmed and runs continuously.",
          ],
          [
            "Consistency",
            "Varies by consultant, by their workload, and by how the week is going.",
            "Every candidate gets the same screen and the same interview against a rubric you set.",
          ],
          [
            "What you keep afterwards",
            "The hire. The pipeline, the market map and the rejected candidates usually stay with the agency.",
            "Everything. The candidates, the scoring and the evidence stay in your system for the next role.",
          ],
          [
            "Advocacy and persuasion",
            "A core strength. A good consultant changes outcomes.",
            "Not attempted. Candidates who need persuading are routed to you.",
          ],
          [
            "Visibility",
            "You see the candidates the consultant chooses to send.",
            "You see the whole pool, the scores and the evidence behind each.",
          ],
        ]}
      />

      <H2>The row that decides it most often</H2>
      <P>
        In practice the deciding line is the last-but-two: what you keep. An agency engagement ends
        with one hire and, usually, nothing else. The forty people who were assessed and passed over
        were real candidates for a role you will likely open again, and they are not in your system.
      </P>
      <P>
        Teams hiring the same shapes repeatedly feel this most sharply. The third time you pay full
        price to re-find a market you have already mapped twice is usually the moment the decision gets
        made.
      </P>

      <H2>The honest recommendation</H2>
      <P>
        Give the VP role to a good agency. Run the four engineers, the three account executives and the
        support team on a platform. That is not a compromise position, it is what the economics of each
        actually support, and most teams we work with do exactly this.
      </P>
      <P>
        If you are hiring one person this year and they are senior, we are the wrong answer and it
        costs nothing to say so.
      </P>
    </>
  );
}

export const post: BlogPost = {
  slug: "employlabs-vs-a-recruitment-agency",
  title: "EmployLabs vs a recruitment agency",
  dek: "Cost per hire, speed, control, and what you keep afterwards. The comparison most of our customers are actually making, written including the cases where the agency wins.",
  answer:
    "Recruitment agencies charge a percentage of first-year salary and are the better choice for senior or executive search, unfamiliar markets, and roles needing an advocate to persuade candidates. EmployLabs charges per action with spend caps, and fits volume hiring, repeat roles, and teams that want the candidate pool, scoring and market data to stay in-house after the hire is made.",
  category: "compare",
  motif: "versus",
  publishedAt: "2026-09-13",
  readingMinutes: 7,
  topics: ["recruitment agency", "cost per hire", "in-house recruiting", "hiring costs", "AI recruiting"],
  faq: [
    {
      q: "Is an AI recruiting platform cheaper than a recruitment agency?",
      a: "For volume and repeat roles, usually yes, because a platform charges for work done rather than a percentage of salary. For a single senior hire the comparison is much closer, and the agency often wins on outcome.",
    },
    {
      q: "When should you still use a recruitment agency?",
      a: "Senior and executive search, markets where you have no network, and roles where a candidate needs persuading or a counter-offer needs managing. Those depend on relationships and judgement rather than process.",
    },
    {
      q: "What do you keep after an agency engagement ends?",
      a: "Typically the hire alone. The pipeline, the market research and the assessed candidates who were passed over usually stay with the agency, which means paying again to re-find the same market for the next role.",
    },
  ],
  Body,
};
