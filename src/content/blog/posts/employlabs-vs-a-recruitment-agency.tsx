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
          <Strong>Markets where nobody has a presence.</Strong> A new country or an unfamiliar
          discipline is exactly where somebody else&rsquo;s existing network is worth paying for,
          because building one takes longer than the role can wait.
        </li>
        <li>
          <Strong>When you want the risk elsewhere.</Strong> On contingency you pay for outcomes. That
          is a real transfer of risk, and for a team with no bandwidth it can be the right trade even
          at the price.
        </li>
        <li>
          <Strong>A single one-off hire.</Strong> Any engagement carries setup: the brief, the market
          read, calibration. Spread across one role it is expensive, and an agency has already paid
          that cost in the market you are hiring from.
        </li>
      </Bullets>

      <H2>Senior search is not the dividing line</H2>
      <P>
        The obvious way to split this comparison is software for volume, humans for the top of the
        organisation. It is a tidy story and it is not how we work. We run senior and leadership
        searches ourselves, with experienced recruiters, and the platform sits underneath them rather
        than in place of them.
      </P>
      <P>
        That is not worth asserting abstractly. We run mandates for seventy-one client organisations
        across nine countries, among them Deccan AI in California, Philogen in Italy, phamax in
        Switzerland, Space Matrix in Singapore and Solinas in Chennai. The work spans deep-tech
        robotics, biotechnology, consulting, design and enterprise software, which matters here only
        because a senior search is unrecognisable between those sectors and the recruiter has to know
        the difference.
      </P>
      <P>
        Thirteen leadership searches are live at the time of writing: two Chief Business Officer
        mandates, a VP Sales in the United States, a Chief of Staff, a Head of Growth, a regional head
        for an agribusiness, and two founding-team hires for a seed-stage company. On one of the Chief
        Business Officer searches, seventeen senior candidates were interviewed to produce three
        finalists.
      </P>
      <P>
        The reason is that the sophistication in a senior search is real and specific. The market is
        small enough to map exhaustively, so the work is deciding who genuinely belongs on a list of
        forty rather than filtering a list of four hundred. The people worth approaching are not
        looking, so the first conversation has to be worth their time rather than an invitation to
        apply. The brief is usually contested between the founders or the board, and part of the job
        is getting that argument resolved before candidates are approached instead of after. And the
        close involves a counter-offer, a notice period measured in months, and a decision the
        candidate makes with their family.
      </P>

      <Pull>
        None of that is automatable. All of it is faster when the person doing it is not also
        maintaining a spreadsheet of two hundred profiles.
      </Pull>

      <P>
        So the split on a senior search is explicit. Our recruiters own the market judgement, the
        approach, the calibration conversations with the hiring committee and the close. The platform
        owns the map of who exists, the evidence behind why each person is on the list, the scheduling,
        and the record of every conversation. The recruiter spends their week on the forty people who
        matter instead of on assembling the list of forty.
      </P>

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
            "Unfamiliar markets, one-off hires, and cases where you want the risk carried elsewhere.",
            "Volume, repeat roles, and senior searches where you want the process and the data to stay with you.",
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
            "Our recruiters do this on senior searches. On volume roles, candidates who need persuading are routed to you.",
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
        If you are hiring one person this year, in a market where you have no presence, and you want
        somebody else to carry the risk of not filling it, use an agency. That is a real set of
        circumstances and we are the wrong answer inside it.
      </P>
      <P>
        For everything else, the question is whether you want the search run by people who also have
        to do the administration, or by people who do not. We run the leadership roles with recruiters
        and the volume roles largely without them, on the same system, so the market read from the
        first is available to the second and the candidates from both stay in one place.
      </P>
      <P>
        The thing we would push back on is the assumption that senior hiring has to cost a percentage
        of the salary because it needs a person. It needs a person for the judgement. It has never
        needed one for the list.
      </P>
    </>
  );
}

export const post: BlogPost = {
  slug: "employlabs-vs-a-recruitment-agency",
  title: "EmployLabs vs a recruitment agency",
  dek: "Cost per hire, speed, control, and what you keep afterwards. The comparison most of our customers are actually making, written including the cases where the agency wins.",
  answer:
    "Recruitment agencies charge a percentage of first-year salary and suit unfamiliar markets, genuine one-off hires, and cases where you want the risk of not filling carried elsewhere. EmployLabs charges per action with spend caps, and runs both volume roles and senior searches. On senior searches our own experienced recruiters own the market judgement, the approach and the close, while the platform carries the map, the evidence and the administration.",
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
      a: "Markets where nobody on your side has a presence, a genuine one-off hire where the setup cost cannot be spread, and situations where you want the risk of not filling the role carried by someone else on contingency.",
    },
    {
      q: "Can an AI recruiting platform handle executive search?",
      a: "The judgement in a senior search is not automatable, which is why EmployLabs runs those with experienced recruiters rather than software alone. The platform handles the market map, the evidence behind each name, scheduling and the record; the recruiter owns the approach, the calibration with the hiring committee, and the close.",
    },
    {
      q: "What actually makes a senior search different?",
      a: "The market is small enough to map exhaustively, so the work is deciding who belongs on a list of forty rather than filtering four hundred. The people worth approaching are not looking, the brief is often contested internally, and the close involves a counter-offer and a notice period measured in months.",
    },
    {
      q: "What do you keep after an agency engagement ends?",
      a: "Typically the hire alone. The pipeline, the market research and the assessed candidates who were passed over usually stay with the agency, which means paying again to re-find the same market for the next role.",
    },
  ],
  Body,
};
