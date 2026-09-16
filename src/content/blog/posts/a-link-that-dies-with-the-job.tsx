import type { BlogPost } from "../types";
import { P, H2, Pull, Steps, Bullets, Strong } from "@/components/blog/prose";

function Body() {
  return (
    <>
      <H2>The expiry date nobody can choose correctly</H2>
      <P>
        When a candidate agrees to talk, they are sent a private link to book the time. The ordinary
        way to build that link is to stamp it with a countdown: valid for seven days, or fourteen, or
        thirty. It feels responsible. A link that lives forever sounds careless, so a number is picked
        and everybody moves on.
      </P>
      <P>
        The number is where it goes wrong. A link minted with a two-week expiry dies on day fifteen
        while the role is still open and still hiring, and the candidate who finally got back to you on
        a quiet Sunday evening meets a page telling them they are too late for a job nobody has filled.
        Choosing a bigger number only moves the cliff further out. It does not remove it.
      </P>

      <H2>The question the link actually asks</H2>
      <P>
        So a scheduling link on EmployLabs is not governed by a countdown at all. It is valid for
        exactly as long as the role can still accept someone, which is the only thing the candidate
        cared about in the first place. The link is not a ticket with a date on it. It is a question
        about the state of the job, asked fresh each time somebody opens it.
      </P>
      <P>
        That is a different shape of rule, and the difference is worth being precise about. A countdown
        measures how long ago we sent something. The rule here measures whether the thing being offered
        is still real. Only the second one is any use to the person holding the link.
      </P>

      <H2>It refuses in both directions</H2>
      <P>
        This cuts the other way on purpose, and that half is the part usually left out. A perfectly
        fresh link, sent this morning, is refused if the role has since closed. Nothing about the link
        is wrong. The job is the thing that changed.
      </P>

      <Pull>A booking page for a filled role is a lie told to a candidate.</Pull>

      <P>
        It is worth sitting with how bad that outcome is. Somebody rearranges their afternoon, books a
        slot, prepares, and turns up to a conversation about a role that was filled last week. They
        will not blame the calendar software. They will conclude that this employer wastes
        people&rsquo;s time, and they will be right.
      </P>

      <H2>One place decides, and it reverses itself</H2>
      <P>
        A single place decides whether a link may still be used. That is a structural choice rather
        than a tidy one. When the same judgement is written into several surfaces, it gets enforced in
        one of them and forgotten in the next, and the version that forgot is the one a candidate
        finds.
      </P>
      <P>
        Because one place answers the question, the answer also reverses itself without anyone
        reissuing anything. Reopen the role and the door opens again. The links you already sent start
        working, because they were never carrying an expiry of their own to argue with. They were
        always just asking about the job.
      </P>

      <H2>The opposite case matters too</H2>
      <P>
        Not every link should behave this way, and the exception shows that the rule is about meaning
        rather than duration. A one-time link such as an opt-out carries no clock at all. It does not
        expire in a fortnight, and it does not expire when a role closes.
      </P>
      <P>
        The reason is the same reason, applied honestly: an opt-out that expires is not an opt-out. A
        candidate who asked to be left alone has not made a request with a shelf life, so the link that
        records it cannot have one either. Each link lives exactly as long as the thing it represents
        stays true, and that answer is simply different for a booking page than it is for a decision a
        person has made about being contacted.
      </P>

      <H2>What this changes for your week</H2>
      <Bullets>
        <li>
          <Strong>Slow replies still book.</Strong> A candidate who surfaces three weeks later meets a
          working page, as long as you can still hire them.
        </li>
        <li>
          <Strong>Closing a role closes the bookings.</Strong> You do not have to chase down links you
          sent earlier, because none of them outlive the role they belong to.
        </li>
        <li>
          <Strong>Reopening restores them.</Strong> A role that comes back does not need a fresh round
          of links sent to everybody you had already contacted.
        </li>
      </Bullets>

      <H2>How to use it</H2>
      <Steps>
        <li>
          Close a role when it is genuinely filled, rather than weeks afterwards. Closing it is what
          withdraws the booking pages, so the state of the role is doing real work.
        </li>
        <li>
          If a candidate reports a refused link, read it as information about the job rather than a
          technical fault. The link is telling you the role is not accepting anybody right now.
        </li>
        <li>
          Reopen rather than recreate. A reopened role brings its outstanding links back with it, which
          is quicker and less confusing for the candidate than a second invitation.
        </li>
      </Steps>
    </>
  );
}

export const post: BlogPost = {
  slug: "a-link-that-dies-with-the-job",
  title: "A link that dies when the job is filled",
  dek: "For recruiters scheduling interviews: a candidate's booking link has no countdown. It works for exactly as long as the role can still take somebody, and stops the moment it cannot.",
  answer:
    "A candidate's scheduling link on EmployLabs has no fixed countdown. It stays valid for exactly as long as the role can still accept someone, and is refused once the role has closed, however fresh the link is. One place decides, so reopening the role reopens the door, and a one-time link such as an opt-out never expires at all.",
  category: "update",
  motif: "calendar",
  publishedAt: "2026-10-04",
  readingMinutes: 4,
  topics: ["interview scheduling", "scheduling link", "link expiry", "candidate booking", "recruiting automation"],
  faq: [
    {
      q: "How long does a candidate's booking link stay valid?",
      a: "For exactly as long as the role can still accept someone. There is no fixed countdown, so a candidate who replies three weeks later still meets a working page, provided the job is open.",
    },
    {
      q: "What happens to booking links when a role is filled?",
      a: "They stop working, even if they were sent that morning. A booking page for a filled role is a lie told to a candidate, so a closed role refuses the link rather than letting somebody prepare for a conversation that cannot happen.",
    },
    {
      q: "If I reopen a role, do I have to send new links?",
      a: "No. One place decides whether a link may be used, so reopening the role opens the door again and the links you already sent start working. Links that should never expire, such as an opt-out, carry no clock at all.",
    },
  ],
  Body,
};
