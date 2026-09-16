import type { BlogPost } from "../types";
import { P, H2, Pull, Steps, Bullets, Strong } from "@/components/blog/prose";

function Body() {
  return (
    <>
      <H2>Three different things that all look like nothing</H2>
      <P>
        At the end of a search there is a long list of people who did not get hired, and it is
        tempting to treat that list as one thing. It is three.
      </P>
      <P>
        We never asked them. We asked and heard nothing back. They told us their answer. Those are not
        degrees of the same outcome, they are different facts about different people, and a pipeline
        that folds them together loses the ability to say anything true about any of them.
      </P>
      <P>
        So EmployLabs keeps the three apart and never collapses one into another, which is a duller
        commitment than it sounds and a more useful one.
      </P>

      <H2>Silence is &ldquo;no reply&rdquo;. A refusal is &ldquo;declined&rdquo;.</H2>
      <P>
        A candidate who never answered is recorded as no reply. A candidate who answered and said no
        is recorded as declined. Two words, because two facts.
      </P>
      <P>
        The pull towards merging them is strong, because from a distance they look identical. Nobody
        was hired. The conversation ended. The row is closed either way. But one of those people has
        given you information about themselves and the other has given you information about your
        email.
      </P>

      <Pull>
        Both outcomes end in the same place. They do not mean the same thing, and they do not tell you
        to do the same thing next.
      </Pull>

      <H2>Silence is where you read your deliverability</H2>
      <P>
        The no-reply bucket is the one you inspect when you want to know whether your outreach is
        landing at all. It is the closest thing a recruiter has to a signal about the channel rather
        than about the people: if a large share of a good-looking pool never says a word, the first
        suspect is not the pool.
      </P>
      <P>
        Which is exactly why a stated rejection must not be filed in it. Every real refusal recorded
        as silence inflates the bucket you use to judge your own sending, and you end up investigating
        a channel that is working perfectly well. You have corrupted your own measurement, using data
        you generated yourself, and nothing in the system will tell you so.
      </P>

      <H2>And a rejection you invented is a candidate you lost</H2>
      <P>
        The error in the other direction is quieter and costs more.
      </P>
      <P>
        Mark silence as declined, and you have written down as a fact that a person said no, when in
        truth they said nothing at all. They may have been on holiday. The message may never have
        arrived. Six weeks later a different role opens that suits them better, and they are now
        sitting on a list of people who turned you down &mdash; and nobody approaches that list.
      </P>
      <P>
        A person who has never actually heard from you about a job can be approached about the next
        one honestly, without pretending the first conversation did not happen, because it did not.
        That is the whole practical value of keeping the distinction: it protects the pool you will
        want to reuse.
      </P>

      <H2>Replied, then screened out, is not silence either</H2>
      <P>
        There is a third confusion worth naming. A candidate who replied, went through screening and
        did not clear the bar is not a no reply. Both endings share an absence of a hire, and that is
        all they share.
      </P>
      <P>
        Filing that person as silent throws away the most valuable thing they did, which was engage.
        They read the message, they answered it, they gave you enough to assess them. The reason they
        are not in the process is a judgement you made, not a message that failed to land. Counting
        them as unreachable understates your own outreach and overstates your pool at the same time.
      </P>
      <Bullets>
        <li>
          <Strong>Never asked</Strong> is a fact about your coverage. It tells you how much of the
          market you actually touched.
        </li>
        <li>
          <Strong>Asked, no reply</Strong> is a fact about your channel. It is the number to read when
          you suspect your email is not arriving.
        </li>
        <li>
          <Strong>They gave an answer</Strong> is a fact about the person. It is the only one of the
          three that is theirs rather than yours.
        </li>
      </Bullets>

      <H2>What it changes in practice</H2>
      <P>
        Once the three are separate, several ordinary questions become answerable without an argument
        about definitions. How much of the shortlist did we genuinely reach. Is the quiet part of this
        campaign a sending problem or a targeting problem. Which of last quarter&rsquo;s candidates can
        we go back to for this role with a clear conscience.
      </P>
      <P>
        None of those needs a clever metric. They need the underlying record to have kept apart three
        things that a single status field would have crushed into one.
      </P>

      <H2>How to read it</H2>
      <Steps>
        <li>
          Treat the no-reply count as a question about your outreach, not about the candidates. It is
          the bucket that tells you whether the channel is working.
        </li>
        <li>
          Treat declined as a record of something a person actually said, and keep it that way. It is
          only worth trusting if nothing else is ever written into it.
        </li>
        <li>
          Before re-approaching an old pool for a new role, separate the people who answered from the
          people who never heard you. Only one group is owed a different approach.
        </li>
      </Steps>
    </>
  );
}

export const post: BlogPost = {
  slug: "no-reply-is-not-a-no",
  title: "No reply is not a no",
  dek: "Silence and refusal end the same way and mean different things. Keeping them in separate words protects both your deliverability measurement and the candidates you will want to approach again.",
  answer:
    "EmployLabs keeps three outcomes distinct: we never asked, we asked and heard nothing, and the candidate told us their answer. Silence is recorded as no reply and a stated refusal as declined, because silence is where deliverability is read, while a rejection wrongly assumed writes off a candidate you could approach again.",
  category: "article",
  motif: "report",
  publishedAt: "2026-09-27",
  readingMinutes: 4,
  topics: [
    "no reply",
    "candidate rejection",
    "email deliverability",
    "recruiting metrics",
    "outreach reporting",
  ],
  faq: [
    {
      q: "What is the difference between no reply and declined?",
      a: "No reply means the candidate was contacted and said nothing. Declined means they answered and told you no. They are separate words because they are separate facts, and only one of them came from the candidate.",
    },
    {
      q: "Why does it matter if silence is recorded as a rejection?",
      a: "Two reasons. Silence is the bucket you read deliverability from, so a real rejection filed there corrupts your own measurement. And silence recorded as a rejection writes off a candidate you could honestly approach again for another role.",
    },
    {
      q: "Is a candidate who replied but was screened out counted as no reply?",
      a: "No. They engaged, answered and were assessed, so the reason they are not in the process is a judgement you made rather than a message that failed to land. Counting them as silent understates your outreach.",
    },
  ],
  Body,
};
