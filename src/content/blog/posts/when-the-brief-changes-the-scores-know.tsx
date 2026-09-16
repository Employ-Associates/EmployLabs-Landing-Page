import type { BlogPost } from "../types";
import { P, H2, Pull, Steps, Bullets, Strong } from "@/components/blog/prose";

function Body() {
  return (
    <>
      <H2>Briefs move, and that is normal</H2>
      <P>
        Three weeks into a search the hiring manager mentions that the Kubernetes line was never
        really a dealbreaker, and someone strong who can pick it up is fine. Or the role opens to Pune
        as well as Bengaluru. Or the team decides they will take a level below and grow the person
        into it.
      </P>
      <P>
        None of that is a failure of briefing. A brief is a hypothesis about a market, and running the
        search is how you test it. The briefs that change once or twice are the ones being tested; the
        ones that never move are usually the ones nobody has looked at since the kickoff call.
      </P>
      <P>The difficulty is not the change. It is what the change does to the work already done.</P>

      <H2>A score belongs to a version of the brief</H2>
      <P>
        A score is not a fact about a person. It is a judgement of that person against a particular set
        of requirements, with particular ones marked as dealbreakers. Relax a must-have and the
        judgement becomes an answer to a question that is no longer being asked.
      </P>
      <P>
        What makes this quietly expensive is that nothing about the score looks any different
        afterwards. It sits in the list at the same size, in the same column, beside scores produced an
        hour ago. There is no visible seam between the two.
      </P>
      <P>
        So a shortlist assembled after a brief change is usually a mix of two standards. The people
        judged last week were marked down for missing a requirement that has since become a preference.
        The people judged today were not. Ranking the two groups against each other produces an order
        that means nothing, and the candidates it penalises are not the weakest ones. They are the ones
        who happened to be scored early.
      </P>

      <Pull>A stale score is not wrong. It is the answer to a question you have stopped asking.</Pull>

      <H2>The mark comes from the brief, not from somebody&rsquo;s memory</H2>
      <P>
        When the brief changes, every score produced under the previous version is marked stale rather
        than left sitting there looking current.
      </P>
      <P>
        That mark is derived from the brief itself. It is not a flag a person has to remember to set,
        which matters more than it sounds, because the moment a brief changes is precisely the moment
        nobody is thinking about bookkeeping. A recruiter who relaxes a requirement at six on a Friday
        does not also have to work out what that implies for the candidates already scored, and the
        colleague who picks the role up on Monday does not have to know the conversation happened at
        all.
      </P>
      <P>
        It also covers the case nobody plans for: a change made by someone else, on a role you are not
        watching, days after the scoring ran. A manual flag is only ever as reliable as the person with
        the most on that day.
      </P>

      <H2>Why marking beats the two alternatives</H2>
      <P>
        There are only three things a system can do with scores produced under an old brief, and the
        other two are worse.
      </P>
      <P>
        It can leave them looking current. That is the common default, it costs nothing to build, and
        it is the reason shortlists quietly carry two bars at once. Or it can discard them, which
        throws away work that was paid for and may well still be correct, since relaxing one
        requirement does not change the verdict on most people in the pool.
      </P>
      <P>
        Marking states the position accurately instead. This judgement was made against an earlier
        version of the brief, it may still hold, and it should not be compared with a fresh one until
        it has been brought up to date. That is a smaller claim than either alternative makes, and it
        is the only one of the three that is true.
      </P>

      <H2>What this changes for your week</H2>
      <Bullets>
        <li>
          <Strong>Changing your mind stops being expensive.</Strong> You can relax a requirement in
          week three without it turning into an exercise in remembering who was scored when.
        </li>
        <li>
          <Strong>One shortlist, one bar.</Strong> When five names go to a hiring manager, they were
          judged against the same brief as each other.
        </li>
        <li>
          <Strong>Relaxing a requirement stops burying the people it used to exclude.</Strong> The
          candidates a change is meant to rescue are exactly the ones an unmarked old score keeps at
          the bottom of the list.
        </li>
      </Bullets>

      <H2>How to use it</H2>
      <Steps>
        <li>
          Make the change on the brief rather than in your head. A requirement you have privately
          decided to ignore is still doing its work on every candidate the system judges.
        </li>
        <li>
          Look first at who the change should affect. Relaxing a must-have usually matters most for the
          people it rejected, not for the ones who cleared it anyway.
        </li>
        <li>
          Bring the stale scores up to date before you compare across them. Until you do, the order
          between the two groups is not a ranking.
        </li>
        <li>
          Tell the hiring manager the brief moved, and when. It is a much easier conversation before
          they have seen a shortlist than after they have questioned one.
        </li>
      </Steps>
    </>
  );
}

export const post: BlogPost = {
  slug: "when-the-brief-changes-the-scores-know",
  title: "Change the brief, and the old scores know",
  dek: "A must-have becomes a preference, a location opens up, and every score produced before that moment is answering a question you have stopped asking. Here is what happens to them.",
  answer:
    "EmployLabs marks every candidate score as stale when the brief it was produced under changes, such as a must-have relaxed to a preference or a location opened up. The mark is derived from the brief itself rather than set by hand, so a shortlist never silently mixes candidates judged against two different bars.",
  category: "update",
  motif: "bars",
  publishedAt: "2026-10-26",
  readingMinutes: 4,
  topics: ["candidate scoring", "hiring brief", "shortlisting", "recruiter workflow", "search criteria"],
  faq: [
    {
      q: "What happens to candidate scores when the brief changes mid-search?",
      a: "Every score produced under the previous version of the brief is marked stale rather than left looking current. The scores are not thrown away, because most of them may still hold; they are marked so a shortlist cannot silently compare them with scores produced under the new brief.",
    },
    {
      q: "Do I have to remember to mark old scores as out of date?",
      a: "No. The mark is derived from the brief itself rather than being a flag someone sets by hand, so it applies even when the change was made by a colleague, on a role you were not watching, days after the scoring ran.",
    },
    {
      q: "Does a stale score mean the candidate was scored wrongly?",
      a: "No. It means the judgement was made against an earlier version of the brief and may still be correct. What it cannot do is sit in a ranking beside a score produced under the current brief, because the two were measured against different bars.",
    },
  ],
  Body,
};
