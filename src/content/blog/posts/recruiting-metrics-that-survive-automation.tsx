import type { BlogPost } from "../types";
import { P, H2, Pull, Steps, Bullets, Strong, CompareTable } from "@/components/blog/prose";

function Body() {
  return (
    <>
      <H2>Half your dashboard was measuring effort</H2>
      <P>
        Candidates sourced. Messages sent. Profiles reviewed. These were never good metrics, but they
        were tolerable proxies, because a human could only produce so many of them and the number said
        something about where the week went.
      </P>
      <P>
        Automate the work and the proxy detaches from the thing it stood for. Sourcing four hundred
        candidates now says nothing about effort, quality or progress. It says a machine ran.
      </P>

      <Pull>An activity metric measures a human&rsquo;s week. Automate the activity and it measures nothing.</Pull>

      <H2>What breaks, and what replaces it</H2>
      <CompareTable
        head={["Metric", "Why it breaks", "Use instead"]}
        rows={[
          [
            "Candidates sourced",
            "Now a function of spend, not judgement. Trivially inflated.",
            "Candidates who cleared the bar and were contactable. The pool you can actually work.",
          ],
          [
            "Messages sent",
            "Costs nothing and correlates with nothing.",
            "Reply rate, split by silence and explicit decline. Those are different diagnoses.",
          ],
          [
            "Time to fill",
            "Compresses at the top of the funnel while notice periods stay constant, so it flatters the change.",
            "Time to start. It is the date the work gets done.",
          ],
          [
            "Recruiter productivity",
            "Measured as output, it now measures the machine.",
            "Roles closed per recruiter, and hours spent on judgement rather than coordination.",
          ],
          [
            "Offer acceptance rate",
            "Unchanged, but more misleading at volume where more offers reach more counter-offers.",
            "Joins against offers, tracked to the actual start date.",
          ],
        ]}
      />

      <H2>Three numbers that get more important</H2>
      <Bullets>
        <li>
          <Strong>Cost per role, fully loaded.</Strong> Automation makes spend visible per action for
          the first time. Use it: some roles are cheap and some are wildly expensive, and before the
          spend was itemised nobody could tell which.
        </li>
        <li>
          <Strong>The silence-to-decline ratio.</Strong> Silence points at targeting. Declines point at
          the offer or the pitch. Collapsing them into &ldquo;no response&rdquo; discards the only
          signal that separates a list problem from a proposition problem.
        </li>
        <li>
          <Strong>Never-contacted.</Strong> The count of candidates who entered the pipeline and were
          never actually reached. It is invisible on most dashboards and it is frequently the largest
          bucket.
        </li>
      </Bullets>

      <H2>One metric that becomes actively dangerous</H2>
      <P>
        Candidate volume as a proxy for pipeline health. When sourcing was expensive in human time, a
        large pool implied effort and intent. When it costs a credit, a large pool can mean the
        targeting is wrong and the system is compensating with quantity.
      </P>
      <P>
        A pool that grows while the qualified count stays flat is not a healthy pipeline. It is an
        expensive one, and the volume metric will report it as progress every time.
      </P>

      <H2>What to actually watch</H2>
      <Steps>
        <li>
          <Strong>Qualified and contactable, not sourced.</Strong> One number, the honest one.
        </li>
        <li>
          <Strong>Reply rate split three ways:</Strong> never reached, reached and silent, told us no.
        </li>
        <li>
          <Strong>Cost per role</Strong>, compared across roles rather than against a benchmark.
        </li>
        <li>
          <Strong>Time to start</Strong>, not time to offer.
        </li>
        <li>
          <Strong>Where the recruiter&rsquo;s week went.</Strong> If automation has not moved that from
          coordination to judgement, it has not yet done anything worth paying for.
        </li>
      </Steps>
    </>
  );
}

export const post: BlogPost = {
  slug: "recruiting-metrics-that-survive-automation",
  title: "Recruiting metrics that survive automation",
  dek: "Candidates sourced and messages sent measured a human's week. Automate the work and they measure a machine running. What to watch instead.",
  answer:
    "Activity metrics such as candidates sourced and messages sent stop meaning anything once the activity is automated, because they measured human effort. Replace them with qualified-and-contactable count, reply rate split three ways between never reached, silent and explicitly declined, fully loaded cost per role, and time to start rather than time to fill.",
  category: "article",
  motif: "bars",
  publishedAt: "2026-10-14",
  readingMinutes: 2,
  topics: ["recruiting metrics", "hiring analytics", "cost per hire", "time to fill", "recruiting operations"],
  faq: [
    {
      q: "Which recruiting metrics stop working when hiring is automated?",
      a: "Candidates sourced, messages sent and recruiter output all measured human effort and become functions of spend once automated. Time to fill also flatters the change, because the top of the funnel compresses while notice periods do not.",
    },
    {
      q: "What should replace candidates sourced as a metric?",
      a: "The count of candidates who cleared your fit bar and were actually contactable. That is the pool a recruiter can work, and it does not inflate with spend.",
    },
    {
      q: "Why separate silence from declines in recruiting metrics?",
      a: "They are different diagnoses. Silence usually indicates a targeting problem, while a run of explicit declines indicates a problem with the offer or the pitch. Merging them into no-response discards the distinction.",
    },
    {
      q: "Is a large candidate pool a sign of a healthy pipeline?",
      a: "Not once sourcing is cheap. A pool that grows while the qualified count stays flat usually means targeting is wrong and volume is compensating, but a volume metric reports it as progress.",
    },
  ],
  Body,
};
