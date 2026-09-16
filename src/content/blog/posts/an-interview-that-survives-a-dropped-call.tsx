import type { BlogPost } from "../types";
import { P, H2, Pull, Bullets, Strong } from "@/components/blog/prose";

function Body() {
  return (
    <>
      <H2>Calls drop</H2>
      <P>
        A voice interview is a phone call. It runs over a real mobile network, from wherever the
        candidate happens to be, quite often in a borrowed meeting room or on the walk back from one.
        Some of those calls will drop. Not many, but the number is never zero, and any product that
        behaves as though it is will eventually punish somebody for standing in the wrong place.
      </P>
      <P>
        The interesting question is not how to stop it happening, because you cannot. It is what the
        system does in the thirty seconds afterwards, while the candidate is looking at a phone that
        says the call has ended and wondering what has just happened to their application.
      </P>

      <H2>A dropped call does not cost the slot</H2>
      <P>
        The first rule is that losing the connection does not lose the opportunity. The interview is
        something the candidate was invited to do. A network failure is not a decision by either side
        to withdraw that invitation, and treating it as one is simply a penalty applied to whoever has
        the worst coverage.
      </P>
      <P>
        So the candidate whose call drops is still a candidate with an interview to do, rather than a
        candidate who has used up their chance. That distinction costs nothing to honour and it decides
        how the whole process feels from the other end of the line.
      </P>

      <H2>Half an interview is not an interview</H2>
      <P>
        The second rule is the mirror of the first, and it protects you rather than the candidate.
        Whatever was said before the line went dead is a fragment. A fragment scored against a full
        rubric produces a bad report that looks exactly like a good one: confident, structured, neatly
        laid out, and built on questions that were never asked.
      </P>
      <P>
        A partial session is therefore not a completed interview and does not enter your shortlist as
        one. The value of that is narrow and important. When you see a completed interview against a
        candidate, the interview finished.
      </P>

      <H2>Finishing is recorded once, however often it is reported</H2>
      <P>
        This next part is invisible when it works, which is most of the time. The end of a call can be
        reported more than once: the same ending arriving by more than one route, or a report sent
        again because the first was not acknowledged. Anything that talks to a telephone network has to
        expect this.
      </P>
      <P>
        Completion is therefore written exactly once, no matter how many times the ending turns up. Not
        two interview records for one conversation. Not a second scoring pass over the same transcript.
        Not a candidate appearing twice in the same stage of your pipeline. The first report settles
        it, and the ones that follow change nothing.
      </P>

      <Pull>
        An ending reported three times is still one interview. A candidate should never be able to tell
        how many times the network told us it was over.
      </Pull>

      <H2>And the sessions that never end at all</H2>
      <P>
        There is a third case, quieter than the other two. A session neither finishes nor reports a
        failure: the candidate&rsquo;s battery went, the tab was closed, something upstream stopped
        speaking. Nothing arrives to say the interview ended, because nothing ended it.
      </P>
      <P>
        Left alone these sit open indefinitely. They hold a candidate in a stage that stopped being
        true days ago, and they are why a pipeline review turns up somebody who has apparently been
        halfway through an interview since a fortnight last Tuesday. Stalled sessions are cleaned up
        rather than left hanging, so what the record says about a candidate is what is true about them
        now.
      </P>

      <H2>What this looks like from the candidate&rsquo;s side</H2>
      <P>
        Put yourself at the other end of it. Someone has taken time out of a working day, found a quiet
        corner, and been talking to an automated interviewer for eleven minutes about the hardest thing
        they have ever shipped. The call cuts out. They have no way of knowing whether a system
        recorded that as an interview, as a failure, or as nothing at all.
      </P>
      <P>
        Most people, in that position, assume the worst and say nothing. A few write in. Almost nobody
        enjoys any part of it, and the ones most likely to walk away are the ones with other options,
        which is the group the whole exercise existed to reach.
      </P>
      <P>
        The behaviour that fixes this is not clever. The interview they were invited to is still there
        to be done, the fragment is not held against them, and nothing about the incident needs
        chasing. It is worth being explicit about because the alternative is not a rare edge case; over
        enough interviews it is a steady trickle of people with a bad story about your company.
      </P>

      <H2>The test is an email nobody has to send</H2>
      <P>
        All of this exists to prevent one small, miserable message: the candidate writing in to ask
        whether their interview counted. It is an entirely reasonable thing to want to know and a bad
        thing to have to ask, because asking means the system left them holding a question it should
        have answered itself.
      </P>
      <P>
        It is also a fair question to put to any vendor running interviews on your behalf. Not
        &ldquo;how reliable is it&rdquo;, which invites a number, but &ldquo;what happens to the
        candidate when it fails&rdquo;, which invites a description of behaviour you can check.
      </P>

      <H2>What this means on your pipeline</H2>
      <Bullets>
        <li>
          <Strong>Completed means completed.</Strong> An interview marked done is one that ran to the
          end, so a thin report is a thin candidate rather than a dropped connection.
        </li>
        <li>
          <Strong>A drop is not a withdrawal.</Strong> Nobody loses their place because of their
          signal, which matters most in exactly the markets where mobile is the only line there is.
        </li>
        <li>
          <Strong>Nothing stays open forever.</Strong> Sessions that stall are closed out, so the
          stage a candidate sits in still describes where they actually are.
        </li>
      </Bullets>
    </>
  );
}

export const post: BlogPost = {
  slug: "an-interview-that-survives-a-dropped-call",
  title: "An interview that survives a dropped call",
  dek: "Voice interviews run on real phones and real networks, so some will drop. A dropped call costs the candidate neither their slot nor a half-finished result counted as a finished one.",
  answer:
    "Voice interviews run over real phone networks, so some calls drop. On EmployLabs a dropped call does not cost the candidate their slot, and a partial session is never counted as a completed interview. Finishing is recorded exactly once however many times the ending is reported, and sessions that stall without ending are cleaned up rather than left open.",
  category: "update",
  motif: "timeline",
  publishedAt: "2026-10-30",
  readingMinutes: 4,
  topics: [
    "voice interview",
    "dropped call",
    "interview reliability",
    "candidate experience",
    "pipeline accuracy",
  ],
  faq: [
    {
      q: "What happens if a candidate's interview call drops?",
      a: "The candidate keeps their slot. A dropped connection is not treated as a withdrawal, and the partial conversation is not turned into a completed interview or scored as one.",
    },
    {
      q: "Can a candidate end up with two interview records for one call?",
      a: "No. Finishing is recorded exactly once, however many times the end of the call is reported. Repeat reports are normal when talking to a phone network, and they change nothing after the first one.",
    },
    {
      q: "What happens to an interview that never finishes and never fails?",
      a: "Sessions that stall without ending are cleaned up rather than left hanging. That stops a candidate sitting indefinitely in a pipeline stage that stopped describing them days ago.",
    },
  ],
  Body,
};
