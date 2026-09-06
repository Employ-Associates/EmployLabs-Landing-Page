import type { BlogPost } from "../types";
import { P, H2, Pull, Steps, Bullets, Strong } from "@/components/blog/prose";

function Body() {
  return (
    <>
      <H2>The most damaging message in recruiting</H2>
      <P>
        A candidate replies. They are interested, they have asked a question, and a conversation is
        under way. Two days later the sequence sends its next scheduled message asking whether they saw
        the first one.
      </P>
      <P>
        Everyone in recruiting has done this, and it does more harm than the message that never got
        sent. It tells the candidate plainly that nothing on the other side was paying attention, and
        it arrives at the exact moment they had decided to engage.
      </P>

      <Pull>
        A follow-up sent to someone already talking to you undoes the conversation they had started.
      </Pull>

      <H2>Any channel stops it</H2>
      <P>
        Engagement on any surface halts the sequence for that candidate on that role. A WhatsApp reply
        stops the emails. Answering the phone stops them. Opening a conversation on the web stops them.
      </P>
      <P>
        This matters more with an agent in the picture than with a plain sequence, because the
        candidate may be mid-conversation somewhere the email system would never have seen. The moment
        a candidate is talking to Zia, the automated cadence for that role stands down.
      </P>

      <H2>A reply is also an answer</H2>
      <P>
        Stopping the sequence is the obvious half. The less obvious half is that a written reply counts
        as a real response, including when it is a no.
      </P>
      <P>
        Most people decline in words rather than by clicking anything. A system that only recognises
        the button treats a clearly-worded &ldquo;not right now, thanks&rdquo; as silence, keeps
        sending, and reports the candidate as unresponsive. Both halves of that are wrong, and the
        second one poisons your data about the role.
      </P>

      <H2>Which means the funnel tells the truth</H2>
      <Bullets>
        <li>
          <Strong>Never contacted</Strong> is separate from <Strong>contacted and silent</Strong>,
          which is separate from <Strong>they told us no</Strong>.
        </li>
        <li>
          Collapsing any two of those loses the only information the funnel has. Silence might mean
          the wrong people or the wrong pitch; a stack of explicit declines tells you which.
        </li>
        <li>
          A candidate who replied is never reported to you as unresponsive, including when the reply
          arrived after the sequence had already given up on them.
        </li>
      </Bullets>

      <H2>How to use it</H2>
      <Steps>
        <li>
          Read the declines rather than only counting them. Written reasons are the highest-quality
          feedback a role produces and they cost nothing.
        </li>
        <li>
          Treat a high silence rate and a high decline rate as different problems. The first is usually
          targeting; the second is usually the offer or the pitch.
        </li>
        <li>
          Do not chase a candidate who is mid-conversation. If you are tempted to, that is a sign your
          own view of the pipeline is stale rather than a sign the candidate went quiet.
        </li>
      </Steps>
    </>
  );
}

export const post: BlogPost = {
  slug: "the-moment-a-candidate-replies",
  title: "The moment a candidate replies, the sequence stops",
  dek: "On any channel. Somebody mid-conversation never receives an automated nudge asking whether they saw the first email.",
  answer:
    "Engagement on any channel halts the automated sequence for that candidate and role, so a candidate already in conversation never receives a follow-up asking whether they saw the first message. A written decline is also recognised as a real response rather than silence, which keeps three distinct funnel outcomes apart: never contacted, contacted and silent, and explicitly declined.",
  category: "update",
  motif: "timeline",
  publishedAt: "2026-09-22",
  readingMinutes: 2,
  topics: ["candidate outreach", "recruiting sequences", "candidate experience", "employer brand", "recruiting metrics"],
  faq: [
    {
      q: "What happens when a candidate replies to an automated recruiting sequence?",
      a: "The sequence stops for that candidate on that role, regardless of which channel the reply arrived on. A candidate mid-conversation should never receive a scheduled nudge about an earlier message.",
    },
    {
      q: "Does a free-text decline count, or only clicking a link?",
      a: "Free-text declines count. Most people decline in words, and a system that only recognises a button treats a clear no as silence, keeps sending, and then misreports the candidate as unresponsive.",
    },
    {
      q: "Why separate silence from an explicit decline in recruiting metrics?",
      a: "They mean different things. Silence usually points to targeting, while a run of explicit declines points to the offer or the pitch. Collapsing them removes the only signal that distinguishes the two.",
    },
  ],
  Body,
};
