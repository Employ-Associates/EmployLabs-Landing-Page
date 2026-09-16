import type { BlogPost } from "../types";
import { P, H2, Pull, Steps, CompareTable } from "@/components/blog/prose";

function Body() {
  return (
    <>
      <H2>Two shortlisted, and no idea why</H2>
      <P>
        A search ends with a small number of people you would actually hire. When that number is lower
        than you wanted, the first thing most teams reach for is the total at the top: how many
        profiles were sourced, how many messages went out. It is the easiest number to produce and it
        answers a question nobody needed answering.
      </P>
      <P>
        The useful question is not how many people were contacted. It is at which step the people you
        wanted stopped moving. Those are different questions with completely different answers, and
        only the second one tells you what to change on Monday.
      </P>

      <H2>Three losses that look identical from the end</H2>
      <P>
        Suppose the shortlist came back at two when you wanted six. There are at least three ordinary
        explanations, and from where you are standing at the end of the funnel they are
        indistinguishable. Each one has its own fix, and each fix makes the other two situations worse.
      </P>

      <CompareTable
        head={["Where it actually happened", "What you would see in the funnel", "What fixes it"]}
        rows={[
          [
            "A thin top",
            "Few people entered at all. The proportion that got through each later step was reasonable.",
            "Widen the brief, add a persona, or accept that the market is small and plan the role around that.",
          ],
          [
            "A message nobody answers",
            "Plenty entered, plenty were contacted, and almost nobody replied.",
            "Change the approach, not the volume. Sending the same message to twice as many people repeats the result at twice the cost.",
          ],
          [
            "A bar set too high",
            "People replied and engaged, and then almost all of them were screened out.",
            "Revisit which requirements are genuinely must-haves. This is the only one of the three where more candidates would not have helped.",
          ],
        ]}
      />

      <P>
        Read only the shortlist and all three read as &ldquo;the search underperformed&rdquo;. Widen
        the brief when the real problem was an unanswered message and you get more silence. Rewrite the
        message when the real problem was the screen and nothing changes, because the extra replies
        meet the same bar and fail it.
      </P>

      <Pull>
        A thin top of funnel, a message nobody answers, and a screening bar set too high all look the
        same if you only count the shortlist.
      </Pull>

      <H2>Look between steps, not at the ends</H2>
      <P>
        What separates the three is the drop between each pair of adjacent steps. Entered to contacted.
        Contacted to replied. Replied to screened through. Screened through to interviewed. Each of
        those is a proportion, and a proportion is diagnostic in a way a total never is.
      </P>
      <P>
        A total goes up when the pipeline is working and it also goes up when somebody simply ran more
        searches. A step-to-step proportion moves only when something about that step changed, which is
        why it is the one worth putting on a wall.
      </P>

      <H2>The analytics are built around the drop</H2>
      <P>
        So the funnel view on a role is organised by where candidates stop rather than by how many
        arrived. It shows each step with the people who reached it and the people who did not go on to
        the next one, which means the shape of a search is legible at a glance rather than something
        you assemble from three different screens and a spreadsheet.
      </P>
      <P>
        There is nothing clever about this. It is the same data every recruiting team already has,
        arranged so the question it is usually asked can actually be answered.
      </P>

      <H2>When the funnel is too small to read</H2>
      <P>
        One caution, because proportions invite overconfidence. On a search with forty people in it,
        the difference between four replies and seven is not a finding about your messaging. It is
        noise, and treating it as a result leads to rewriting copy that was working or keeping copy
        that was not.
      </P>
      <P>
        Small funnels are still worth reading, but read them for shape rather than for precision. If
        almost everybody who entered was contacted and almost nobody replied, that is a shape you can
        act on even at small numbers. A three-point swing in a conversion rate is not.
      </P>
      <P>
        The same caution applies to comparing two roles. A search for a niche specialist and a search
        for a common profile do not share a baseline, and holding them to one produces a confident
        conclusion about the recruiter rather than about the market.
      </P>

      <H2>Three questions to put to your own funnel</H2>
      <Steps>
        <li>
          Which single step loses the largest share of the people who reached it? Not the largest
          number, the largest share. The biggest raw drop is usually just the widest part of the
          funnel.
        </li>
        <li>
          Is that step one you control? Reply rate is something you influence through approach and
          timing. Market size mostly is not, and the honest response to a thin market is a different
          plan rather than a harder push.
        </li>
        <li>
          If you fixed it, what would arrive next? Fixing the reply rate sends far more people into
          your screen. If that screen is already the tighter constraint you have moved the queue rather
          than shortened it.
        </li>
      </Steps>

      <H2>The uncomfortable part</H2>
      <P>
        Quite often the answer is the screening bar, and that is the least welcome of the three because
        it is the one the hiring team owns. A requirement list assembled from everybody&rsquo;s wishes
        rejects people who would have done the job well, and it does so quietly, at a step where the
        rejection reads as diligence.
      </P>
      <P>
        Measuring where candidates stop does not settle that argument, but it does move it somewhere
        better. It becomes a conversation about one specific step and one specific requirement, rather
        than a conversation about whether the search was any good.
      </P>
    </>
  );
}

export const post: BlogPost = {
  slug: "where-candidates-actually-stop",
  title: "Where candidates actually stop",
  dek: "The shortlist at the end cannot tell you whether the problem was a thin market, a message nobody answered, or a screening bar set too high. The step-by-step drop can.",
  answer:
    "Funnel analytics should show where candidates drop out, not how many were sourced. A thin top of funnel, a message nobody answers and a screening bar set too high all produce the same short shortlist, and each needs a different fix, so the step-to-step drop between adjacent stages is the number that tells a recruiter what to change.",
  category: "article",
  motif: "funnel",
  publishedAt: "2026-10-31",
  readingMinutes: 4,
  topics: [
    "recruiting funnel",
    "funnel analytics",
    "drop-off analysis",
    "conversion rate",
    "screening criteria",
    "sourcing strategy",
  ],
  faq: [
    {
      q: "How do I tell whether my problem is sourcing or my outreach?",
      a: "Compare the step-to-step drops. If few people entered the funnel at all but the later proportions held up, the problem is sourcing. If plenty entered and were contacted and almost nobody replied, the problem is the approach rather than the volume.",
    },
    {
      q: "Why is the number of candidates sourced a poor measure?",
      a: "Because it rises when the pipeline is working and also when somebody simply ran more searches. It tells you about activity at the top, not about the step where the people you wanted stopped moving.",
    },
    {
      q: "What if the drop is at the screening stage?",
      a: "Then more candidates would not have helped, and the requirement list is the thing to revisit. It is the least welcome answer because the hiring team owns it, but it turns a vague argument about search quality into a specific one about a named requirement.",
    },
  ],
  Body,
};
