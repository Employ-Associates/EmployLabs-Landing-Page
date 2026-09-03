import type { BlogPost } from "../types";
import { P, H2, Pull, Steps, Bullets, Strong } from "@/components/blog/prose";

function Body() {
  return (
    <>
      <H2>Why searches stay quiet</H2>
      <P>
        Plenty of roles cannot be advertised under the company&rsquo;s name. A replacement hire where the
        incumbent has not been told. A new market the competition should not hear about yet. An agency
        working a role it does not want traced back to the client. In each case the search is real and
        the name is the part that has to wait.
      </P>
      <P>
        The difficulty is that anonymity is not one setting. It has to hold on the first email, the
        booking page, the assessment invitation, the reply a candidate gets at midnight, and the words
        an AI interviewer speaks out loud. Miss one of those and the search is no longer confidential,
        usually without anybody noticing until it matters.
      </P>

      <H2>One switch, every candidate-facing surface</H2>
      <P>
        On EmployLabs it is a single choice on the role: do candidates hear the company name. Turn it
        off and every surface a candidate touches uses a neutral description instead.
      </P>
      <P>
        That includes the outreach email and its sender name, the candidate room where they book time,
        the assessment invitation, and Naira&rsquo;s own script during the interview. The last one matters
        more than the rest put together, because a page can be corrected and a spoken sentence cannot
        be retracted.
      </P>

      <Pull>A page can be corrected. A name said out loud during an interview cannot.</Pull>

      <H2>Enforced in code, not in a checklist</H2>
      <P>
        The reason to trust this is not that we were careful. It is that any candidate-facing surface
        has to read the role&rsquo;s identity rather than the company record, and a test walks the codebase
        to check that new ones do. A surface added next quarter is covered without anyone remembering
        to cover it.
      </P>
      <P>
        The internal side is deliberately untouched. Your own scorecards, the report you share with the
        hiring manager, and everything inside the platform name the client normally. Anonymity is a
        rule about what reaches the candidate, and applying it to your own team would just make the
        work harder.
      </P>

      <H2>What this changes for your week</H2>
      <Bullets>
        <li>
          <Strong>Confidential roles run on the same pipeline as everything else.</Strong> No separate
          process, no manual email copy, no reminding a colleague what they can and cannot say.
        </li>
        <li>
          <Strong>You choose when to reveal.</Strong> Turn it on at any point and subsequent
          communication carries the name.
        </li>
        <li>
          <Strong>Agencies can run client work without exposing the client.</Strong> The candidate
          hears a description of the business, not its name.
        </li>
      </Bullets>

      <H2>How to use it</H2>
      <Steps>
        <li>Set the disclosure choice when you create the role, before any outreach begins.</li>
        <li>
          Check the description a candidate will see. It should be specific enough to be attractive and
          vague enough to be safe, and you can edit it.
        </li>
        <li>
          Reveal when the candidate reaches a stage where the name is necessary, which is usually the
          point they meet somebody from the company.
        </li>
      </Steps>
    </>
  );
}

export const post: BlogPost = {
  slug: "run-a-confidential-search",
  title: "Run a confidential search",
  dek: "Choose whether candidates hear the company name. With it off, every candidate-facing surface uses a neutral description, including what the AI interviewer says out loud.",
  answer:
    "EmployLabs lets you run a role without disclosing the employer's name. One setting controls every candidate-facing surface: outreach emails and sender identity, the candidate booking room, assessment invitations, and the AI interviewer's spoken script. Internal surfaces such as scorecards and hiring-manager reports still name the client normally.",
  category: "update",
  motif: "consent",
  publishedAt: "2026-09-04",
  readingMinutes: 4,
  topics: ["confidential search", "recruiting privacy", "agency recruiting", "employer branding", "candidate outreach"],
  faq: [
    {
      q: "Can you run a confidential job search on EmployLabs?",
      a: "Yes. A single setting on the role controls whether candidates hear the employer's name. With it off, outreach emails, the booking page, assessment invitations and the AI interviewer's spoken script all use a neutral description of the business instead.",
    },
    {
      q: "Does the AI interviewer say the company name?",
      a: "Only when disclosure is switched on. On a confidential role the interviewer's script carries the neutral description, because a spoken name cannot be retracted the way a page can be corrected.",
    },
    {
      q: "Do internal reports also hide the client name?",
      a: "No. Scorecards and hiring-manager reports name the client normally. Anonymity is a rule about what reaches the candidate, not about what your own team can see.",
    },
  ],
  Body,
};
