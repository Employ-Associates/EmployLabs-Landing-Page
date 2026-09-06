import type { BlogPost } from "../types";
import { P, H2, Pull, Steps, Bullets, Strong } from "@/components/blog/prose";

function Body() {
  return (
    <>
      <H2>Where the history usually lives</H2>
      <P>
        A recruiter&rsquo;s sent folder. A colleague&rsquo;s WhatsApp. A spreadsheet column. A note in
        the ATS that says &ldquo;spoke, keen&rdquo;. When somebody asks what happened with a candidate,
        the answer is assembled from memory and three places, and the parts nobody remembers are simply
        lost.
      </P>
      <P>
        That is tolerable at ten candidates. At two hundred across six roles it stops being tolerable
        and starts being the reason a candidate gets contacted twice about the same job by two people.
      </P>

      <H2>One view, every event</H2>
      <P>
        Open a candidate and the whole history is there in order. What was sent and when. What came
        back. What they said in conversation. What the screening produced. Who moved them, and whether
        it was a person or an agent acting for one.
      </P>
      <P>
        Including the things that are usually invisible: a bounced address and the fallback that was
        tried, a decline recorded from a written reply rather than a click, a sequence that stopped
        because they engaged somewhere else.
      </P>

      <Pull>
        Most of what goes wrong with a candidate is legible in their history. It is just usually
        spread across four places.
      </Pull>

      <H2>Why this is a safety feature, not a reporting one</H2>
      <Bullets>
        <li>
          <Strong>You can see if somebody was contacted twice.</Strong> The commonest brand damage in
          recruiting, and it happens because two systems each thought they were the only one.
        </li>
        <li>
          <Strong>You can see whether a person or the platform did something.</Strong> When a candidate
          says they were told something, the timeline settles it.
        </li>
        <li>
          <Strong>You can see why the process concluded.</Strong> Unresponsive, declined, and never
          reached are different endings, and a timeline shows which one actually occurred rather than
          which label got applied.
        </li>
      </Bullets>

      <H2>It also survives your team</H2>
      <P>
        A recruiter leaving takes their sent folder and their memory. What they do not take is the
        record of every conversation the platform held, which for most candidates is now the majority
        of the contact. Picking up somebody else&rsquo;s role stops being an archaeology exercise.
      </P>

      <H2>How to use it</H2>
      <Steps>
        <li>
          Read the timeline before any re-approach. A candidate who declined this role four months ago
          for a stated reason needs a different opening from a stranger.
        </li>
        <li>
          Check it when a candidate disputes something. It is faster than reconstructing the sequence
          and it is not somebody&rsquo;s recollection.
        </li>
        <li>
          Look at the endings across a role, not just individuals. A pattern of declines at the same
          stage is telling you something the individual records will not.
        </li>
      </Steps>
    </>
  );
}

export const post: BlogPost = {
  slug: "every-touch-in-one-timeline",
  title: "See every touch on a candidate in one timeline",
  dek: "What was sent, what came back, what they said, who moved them, and whether a person or an agent did it. In order, in one place.",
  answer:
    "Every candidate carries a single chronological record: messages sent, replies received, conversation content, screening answers, stage changes, and whether a person or an agent performed each action. It includes normally invisible events such as a bounced address and its fallback, a decline recorded from written text rather than a click, and a sequence halted because the candidate engaged on another channel.",
  category: "update",
  motif: "timeline",
  publishedAt: "2026-10-09",
  readingMinutes: 2,
  topics: ["candidate record", "recruiting CRM", "candidate experience", "employer brand", "recruiting operations"],
  faq: [
    {
      q: "Why does a unified candidate timeline matter in recruiting?",
      a: "It prevents the commonest form of brand damage, which is contacting the same person twice about one role because two systems each believed they were the only one. It also settles disputes about what a candidate was told.",
    },
    {
      q: "What does a candidate timeline record that most systems miss?",
      a: "Bounced addresses and the fallback attempted, declines captured from free-text replies rather than link clicks, sequences halted because the candidate engaged on a different channel, and whether a human or an agent performed each action.",
    },
    {
      q: "What happens to candidate history when a recruiter leaves?",
      a: "The platform record remains, which for most candidates is now the majority of the contact. Their sent folder and recollection leave with them, but picking up the role is no longer an archaeology exercise.",
    },
  ],
  Body,
};
