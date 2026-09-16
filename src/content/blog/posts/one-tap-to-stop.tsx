import type { BlogPost } from "../types";
import { P, H2, Pull, Steps, Bullets, Strong } from "@/components/blog/prose";

function Body() {
  return (
    <>
      <H2>The last line of every email</H2>
      <P>
        Cold outreach has a problem that has nothing to do with whether the role is any good. A
        stranger writes to somebody about a job they did not ask about, and the only thing that person
        wants, in the two seconds they give the message, is a quick and dignified way to end it. Most
        recruiting email makes that the hardest thing on the page.
      </P>
      <P>
        Every outreach email EmployLabs sends closes on the same line, and it is written in the words a
        person would actually use rather than the words a policy document would. If this is not for
        you, no hard feelings — tell me to stop and I will not write again.
      </P>
      <P>
        That sentence is the whole mechanism. There is no link to hunt for at the bottom of the
        signature, no preference centre, and no form asking which categories of communication the
        candidate would like to receive at which frequency. The instruction is the reply they were
        already going to write.
      </P>

      <H2>Why the word &ldquo;unsubscribe&rdquo; is missing</H2>
      <P>
        Its absence is deliberate. &ldquo;Unsubscribe&rdquo; is the language of a mailing list, and
        nobody in a search ever subscribed to anything. &ldquo;Manage preferences&rdquo; is worse,
        because it promises a screen and a set of choices rather than an ending, and a person who
        wanted to be left alone has just been handed homework.
      </P>
      <P>
        Vague, corporate opt-out wording is precisely what turns an opt-out into a spam complaint.
        Somebody who cannot see the exit takes the one their mail client puts in front of them instead,
        and that button is not an opt-out. It is a judgement about the sender.
      </P>

      <Pull>A complaint is far more expensive than a lost contact.</Pull>

      <P>
        The trade is not close, which is why the wording gets this much attention. A person who reads
        the line and says stop is one conversation ending cleanly, and the cost of that is one contact.
        The other outcome costs a great deal more, and the only difference between the two is whether
        the sentence at the bottom of the email was written in plain words.
      </P>

      <H2>One line, not several that drift</H2>
      <P>
        The same wording appears on every rung of the sequence. The first email says it, the follow-ups
        say it, and the last message in the cadence says it. It is one shared line rather than a phrase
        copied into each template, so the versions cannot quietly diverge as templates are edited over
        time.
      </P>
      <P>
        That matters for the candidate more than it does for us. By the third message they are reading
        a sentence they recognise from the first, in the same words, which is the difference between a
        standing offer and something that happened to appear once.
      </P>

      <H2>Stop means stop, not stop for this role</H2>
      <P>
        The opt-out is global rather than per-role. It ends this search and every future one, so a
        candidate who asks to be left alone is not approached again six weeks later by the same system
        about a different vacancy. An opt-out that covered only the role it arrived on would be an
        opt-out in name.
      </P>
      <P>
        It also gates the later stages, not just the sending of email. The interview invitation checks
        it too, which means nobody is invited to an assessment after they have asked to stop. That is
        the failure worth designing against: a candidate who opted out on Monday and receives a booking
        link on Thursday has been told that saying stop did nothing.
      </P>

      <H2>Or they can simply say so</H2>
      <P>
        A candidate does not have to use the line at all. They can say it in the conversation, in their
        own words, in the reply they were writing anyway, and it is treated as what it plainly is.
        Asking somebody to locate a specific link before their wishes count is a rule that serves the
        sender.
      </P>

      <H2>What this changes for your week</H2>
      <Bullets>
        <li>
          <Strong>Your outreach is easy to leave.</Strong> The exit is one sentence in plain English at
          the bottom of every message, which is the cheapest protection a sending reputation has.
        </li>
        <li>
          <Strong>There is one wording to review, not a dozen.</Strong> Because the line is shared
          rather than duplicated, reading it once tells you what every rung of every sequence says.
        </li>
        <li>
          <Strong>A stop holds after the email stage.</Strong> The later steps check it as well, so an
          opted-out candidate cannot resurface as an interview invitation.
        </li>
      </Bullets>

      <H2>How to use it</H2>
      <Steps>
        <li>
          Read the closing line once before your first campaign. It is the sentence every candidate you
          contact will see, and it is worth knowing in your own voice.
        </li>
        <li>
          If somebody tells you to stop inside a conversation, you do not need to find a link on their
          behalf. Saying so is enough, and it is taken at face value.
        </li>
        <li>
          Expect the stop to hold across roles. If you are tempted to re-approach an opted-out
          candidate on a different search, that door is shut on purpose.
        </li>
      </Steps>
    </>
  );
}

export const post: BlogPost = {
  slug: "one-tap-to-stop",
  title: "One tap to stop, honoured everywhere",
  dek: "For recruiters running cold outreach: every email ends with the same plain-language opt-out, and a candidate who uses it is out of this search and every future one.",
  answer:
    "EmployLabs ends every outreach email with the same plain-language opt-out: not for you, no hard feelings, say stop and nobody writes again. The words unsubscribe and manage preferences are deliberately avoided, because vague wording invites spam complaints. The stop is global rather than per-role, gates later stages including interview invitations, and can be given in conversation.",
  category: "update",
  motif: "consent",
  publishedAt: "2026-10-01",
  readingMinutes: 4,
  topics: ["candidate opt-out", "outreach compliance", "spam complaints", "recruiting email", "candidate experience"],
  faq: [
    {
      q: "How does a candidate opt out of EmployLabs outreach?",
      a: "Every outreach email carries the same one-line opt-out in plain words: if this is not for you, tell me to stop and I will not write again. A candidate can also just say so in the conversation rather than hunting for a link.",
    },
    {
      q: "Why doesn't the email say unsubscribe?",
      a: "Because nobody subscribed, and vague corporate wording such as unsubscribe or manage preferences is what pushes people towards the spam button instead. A complaint is far more expensive than a lost contact, so the exit is written in plain English.",
    },
    {
      q: "Does an opt-out apply to other roles as well?",
      a: "Yes. The opt-out is global rather than per-role, so it ends this search and every future one. It also gates the later stages, which means nobody is invited to an assessment after they have asked to stop.",
    },
  ],
  Body,
};
