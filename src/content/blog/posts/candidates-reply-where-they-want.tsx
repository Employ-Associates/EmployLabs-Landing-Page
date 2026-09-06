import type { BlogPost } from "../types";
import { P, H2, Pull, Steps, Bullets, Strong } from "@/components/blog/prose";

function Body() {
  return (
    <>
      <H2>The channel is not your decision</H2>
      <P>
        Recruiting tools tend to pick a lane. Email sequences, or a WhatsApp bot, or a dialler. Each one
        works for the candidates who happen to live on that channel and quietly loses the rest, and
        because the loss looks like silence rather than failure, nobody counts it.
      </P>
      <P>
        A senior engineer who never opens recruiting email might reply to a WhatsApp message in ninety
        seconds. Someone else finds WhatsApp intrusive and answers email at eleven at night. The
        preference is not knowable in advance, and asking people to move to your channel is asking them
        to do work before they have any reason to.
      </P>

      <H2>Four surfaces, one conversation</H2>
      <P>
        Zia works over email, WhatsApp, a phone call and the web. A candidate can reply to the email,
        message on WhatsApp, pick up the phone or open the link, and it is the same conversation with
        the same context behind it.
      </P>
      <P>
        Someone who messages on Monday and answers the phone on Thursday is not asked the same
        questions twice. What they said about their notice period is still known. The screening
        questions they already answered stay answered.
      </P>

      <Pull>Switching channel should not cost a candidate their place in the conversation.</Pull>

      <H2>What that changes for your pipeline</H2>
      <Bullets>
        <li>
          <Strong>Fewer candidates lost to the wrong medium.</Strong> The people you were not reaching
          were rarely uninterested. They were unreachable on the one channel you had.
        </li>
        <li>
          <Strong>Replies at the hours candidates actually have.</Strong> Employed people engage in
          gaps: early morning, late evening, the commute. A conversation that is awake then converts
          better than a better conversation on Tuesday afternoon.
        </li>
        <li>
          <Strong>One record instead of four.</Strong> Everything lands on the same candidate, so the
          answer to a screening question is on file regardless of where it was given.
        </li>
      </Bullets>

      <H2>Where each channel earns its place</H2>
      <P>
        Email carries the first approach and the detail. WhatsApp carries the quick back-and-forth,
        which in a lot of markets is simply where professional conversation happens. The phone carries
        the cases where writing is slower than talking, particularly for roles where people are not at
        a desk. The web link carries the candidate who wants to read properly before committing to
        anything.
      </P>
      <P>
        None of them is the primary channel. The candidate decides, by answering on one.
      </P>

      <H2>How to use it</H2>
      <Steps>
        <li>
          Let candidates reach Zia directly rather than routing questions through your inbox. The point
          is that they choose.
        </li>
        <li>
          Look at which channel your replies actually arrive on, per role. It varies more by seniority
          and function than most teams expect.
        </li>
        <li>
          Check the candidate record before you call. Whatever they told her on another channel is
          already there.
        </li>
      </Steps>
    </>
  );
}

export const post: BlogPost = {
  slug: "candidates-reply-where-they-want",
  title: "Candidates reply where they want to, not where you sequenced them",
  dek: "Email, WhatsApp, a phone call or the web. One agent, one conversation, one record, whichever way they answer.",
  answer:
    "Zia holds candidate conversations across email, WhatsApp, phone and web as a single thread with shared context. A candidate who messages on WhatsApp and later answers the phone is not asked the same questions twice, and answers given on any channel reach the same candidate record. The candidate picks the channel by replying on one.",
  category: "update",
  motif: "channels",
  publishedAt: "2026-09-17",
  readingMinutes: 2,
  topics: ["candidate communication", "multichannel outreach", "WhatsApp recruiting", "candidate experience", "response rates"],
  faq: [
    {
      q: "Which channels can candidates use to talk to an AI recruiting agent?",
      a: "Email, WhatsApp, phone and web. All four feed one conversation with shared context, so switching channel does not restart the exchange or lose what the candidate already said.",
    },
    {
      q: "Why does multichannel matter in recruiting outreach?",
      a: "Channel preference is not knowable in advance and varies by seniority, function and market. A single-channel sequence loses everyone who lives elsewhere, and that loss looks like silence rather than a failure, so it goes uncounted.",
    },
    {
      q: "Do answers given on WhatsApp reach the candidate record?",
      a: "Yes. Screening answers, notice period and constraints land on the same candidate record regardless of the channel they were given on.",
    },
  ],
  Body,
};
