import type { BlogPost } from "../types";
import { P, H2, Pull, Steps, Bullets, Strong } from "@/components/blog/prose";

function Body() {
  return (
    <>
      <H2>What happens when a shortlist leaves your screen</H2>
      <P>
        Inside the platform a shortlist is a rich thing. Each candidate carries the requirements they
        met, the line from their profile that decided each one, the questions their profile never
        answered, and what the interview actually showed.
      </P>
      <P>
        Then it has to reach the person who will decide, and almost everywhere that means it gets
        flattened. Five names and a paragraph each, in an email. A spreadsheet with a column of
        numbers. A slide, if the role is senior enough. Every one of those is a summary of the
        shortlist rather than a copy of it.
      </P>
      <P>
        The decision is then made on the summary. Which is to say the decision is made at exactly the
        point where the reasoning stopped travelling, by the person with the least of it.
      </P>
      <P>
        You feel this a day later, when the reply comes back saying they are not sure about the third
        one. Nothing in what you sent can answer that, so you go back into the platform, find the
        evidence, and paste it into a reply. The work was done. It simply did not survive the trip.
      </P>

      <H2>A link, and nothing to buy</H2>
      <P>
        A hiring manager on EmployLabs gets a link. It opens the shortlist and the reasoning behind
        it. There is no account to create, no seat to provision, no licence to buy and nothing to
        install.
      </P>
      <P>
        That is a deliberate decision rather than a small convenience. Each of those steps is a place
        where the person you need to look at your shortlist decides to look at the attachment instead.
        A hiring manager with four interviews and a product review today will not create a password to
        read five candidates, and it is unreasonable to expect them to. Any barrier at that moment is
        paid for in the quality of the decision, not in their time.
      </P>
      <P>
        It also removes the conversation nobody wants to have, which is asking someone to approve a
        purchase before they can read the work you have already done for them.
      </P>

      <Pull>The reasoning has to survive the trip to the person who makes the decision.</Pull>

      <H2>Scoped to the role, not to the system</H2>
      <P>
        Access is scoped to the role. The link opens that shortlist and what sits behind it. It is not
        a way into the rest of the account: other searches, other candidates, what anything cost, or
        the settings that govern any of it.
      </P>
      <P>
        This matters in both directions, and the second one is the one people forget. Guest access to a
        recruiting system tends to be all or nothing, so sharing one shortlist means handing over the
        whole picture, and a recruiter who is not comfortable doing that goes back to exporting a
        summary. The narrow scope is what makes sending the real thing the easy option.
      </P>
      <P>
        From the other side, a hiring manager does not want a recruiting platform. They want the
        people for their role, and a reason to believe each one belongs there.
      </P>

      <H2>What this changes for your week</H2>
      <Bullets>
        <li>
          <Strong>You stop maintaining a second copy of the shortlist.</Strong> No export, no
          formatting, no version of it in a document that goes stale the moment a candidate replies.
        </li>
        <li>
          <Strong>A disagreement is settled on the evidence.</Strong> When a hiring manager pushes back
          on somebody, you are both reading the same page rather than arguing across two different
          summaries of it.
        </li>
        <li>
          <Strong>Bringing another person in is not a purchasing decision.</Strong> Whoever needs to
          see the shortlist can see it, which is how it should have been all along.
        </li>
      </Bullets>

      <H2>How to use it</H2>
      <Steps>
        <li>
          Send the link rather than exporting anything. If you find yourself pasting evidence into an
          email, that is the summary problem returning by the back door.
        </li>
        <li>
          Say what you want an opinion on. A shortlist sent with no question attached usually comes
          back as a preference rather than a decision.
        </li>
        <li>
          Keep the discussion on the link. When they doubt a candidate, answer from the reasoning they
          can already see, not from your own recollection of it.
        </li>
        <li>
          If their objection turns out to be about the brief rather than the person, change the brief.
          That is a different and much more useful conversation than defending one candidate.
        </li>
      </Steps>
    </>
  );
}

export const post: BlogPost = {
  slug: "the-hiring-manager-needs-no-login",
  title: "The hiring manager does not need an account",
  dek: "A shortlist that leaves the platform as an attachment loses its reasoning exactly where the decision gets made. This one travels as a link instead.",
  answer:
    "A hiring manager on EmployLabs opens the shortlist through a link: no account, no seat, no licence to buy and nothing to install. The link carries the reasoning behind each candidate as well as the names, and access is scoped to that one role rather than opening the wider system.",
  category: "update",
  motif: "report",
  publishedAt: "2026-10-28",
  readingMinutes: 4,
  topics: ["hiring manager", "shortlist sharing", "candidate evidence", "recruiter workflow", "hiring collaboration"],
  faq: [
    {
      q: "Does a hiring manager need an EmployLabs account to see the shortlist?",
      a: "No. They open a link. There is no account to create, no seat to provision, no licence to buy and nothing to install, because any of those steps is where a busy hiring manager decides to read the emailed summary instead.",
    },
    {
      q: "What does the hiring manager actually see on that link?",
      a: "The shortlist and the reasoning behind it, rather than a list of names with scores attached. That means the decision is made with the evidence in front of the person making it, instead of with whatever survived being pasted into an email or a spreadsheet.",
    },
    {
      q: "Can a hiring manager see our other searches through that link?",
      a: "No. Access is scoped to the role the link is for. It shows that shortlist and what sits behind it, and it is not a route into other roles, other candidates, costs or settings.",
    },
  ],
  Body,
};
