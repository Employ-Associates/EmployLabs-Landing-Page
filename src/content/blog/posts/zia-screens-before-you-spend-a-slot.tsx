import type { BlogPost } from "../types";
import { P, H2, Pull, Steps, Bullets, Strong } from "@/components/blog/prose";

function Body() {
  return (
    <>
      <H2>The interview that was never going to work</H2>
      <P>
        A candidate looks strong on paper, clears the bar, accepts the invitation, and forty minutes
        later you discover they cannot relocate, or their notice is four months, or the number they
        need is well above the band.
      </P>
      <P>
        None of that required an interview to find out. All of it required someone to ask, and asking
        twenty candidates the same four questions is exactly the work that gets skipped when a role
        goes hot.
      </P>

      <H2>You write the must-asks. Zia gets the answers.</H2>
      <P>
        Every role carries a set of screening questions you control: location reality, notice period,
        compensation expectation, visa status, whatever genuinely gates this particular job. You can
        edit them, add to them, or clear them entirely.
      </P>
      <P>
        Zia has real answers to those before anyone reaches an assessment or an interview slot. Not
        inferred from a profile, asked in a conversation and recorded against the candidate.
      </P>

      <Pull>
        A four-month notice period is not a difficult thing to discover. It is a difficult thing to
        remember to ask twenty times.
      </Pull>

      <H2>And the questions this particular candidate raised</H2>
      <P>
        Beyond your standard set, the scoring already knows which requirements it could not verify for
        each individual. Those become extra questions in that person&rsquo;s conversation.
      </P>
      <P>
        So a candidate whose profile said nothing about team leadership gets asked about team
        leadership, and the answer comes back to the same record. The recruiter never has to notice the
        gap, decide it matters, and remember to raise it.
      </P>

      <H2>What this changes</H2>
      <Bullets>
        <li>
          <Strong>Interview slots go to candidates who can actually take the job.</Strong> The
          constraint questions are answered before the calendar is involved.
        </li>
        <li>
          <Strong>The offer conversation holds fewer surprises.</Strong> Expectation and notice are on
          the record from the first conversation rather than discovered at the end.
        </li>
        <li>
          <Strong>Your screening is consistent.</Strong> Every candidate gets the same must-asks, which
          is not true of a human screening twenty people across a busy week.
        </li>
      </Bullets>

      <H2>How to use it</H2>
      <Steps>
        <li>
          Write the must-asks as genuine gates, not as a wish list. Each one should be something that
          would stop you interviewing the person.
        </li>
        <li>
          Keep them short. Four questions answered honestly are worth more than nine that make the
          conversation feel like a form.
        </li>
        <li>
          Read the answers before you approve an interview. That is the whole point, and it takes
          about thirty seconds per candidate.
        </li>
      </Steps>
    </>
  );
}

export const post: BlogPost = {
  slug: "zia-screens-before-you-spend-a-slot",
  title: "Zia screens the candidate before you spend an interview slot",
  dek: "You write the must-asks. She gets real answers to them, plus the questions each candidate's own profile left unanswered, before anyone reaches your calendar.",
  answer:
    "Recruiters define screening questions per role covering the genuine gates: location, notice period, compensation expectation, visa status. Zia gets answers to those in conversation before a candidate reaches an assessment or interview slot. She additionally asks each candidate about requirements the scoring could not verify from their profile, and every answer lands on the candidate record.",
  category: "update",
  motif: "rows",
  publishedAt: "2026-10-06",
  readingMinutes: 2,
  topics: ["candidate screening", "recruiter productivity", "notice period", "interview scheduling", "candidate qualification"],
  faq: [
    {
      q: "What should screening questions cover before an interview?",
      a: "The genuine gates for that role: location reality, notice period, compensation expectation and visa status are the common four. Each should be something that would actually stop you interviewing the person.",
    },
    {
      q: "How many screening questions is too many?",
      a: "Four answered honestly are worth more than nine that turn the conversation into a form. Long lists reduce answer quality and make candidates disengage before the useful part.",
    },
    {
      q: "Can screening cover gaps specific to one candidate?",
      a: "Yes. Requirements the scoring could not verify from a candidate's profile become additional questions in that individual's conversation, so the recruiter does not have to spot each gap and remember to raise it.",
    },
  ],
  Body,
};
