import type { BlogPost } from "../types";
import { P, H2, Pull, Steps, Bullets, Strong, CompareTable } from "@/components/blog/prose";

function Body() {
  return (
    <>
      <H2>Playbooks written elsewhere do not transfer</H2>
      <P>
        Most recruiting advice assumes a two-week notice period, email as the professional channel, and
        an offer that means the person is arriving. None of those hold in India, and a hiring plan
        built on them fails in ways that look like bad luck rather than bad assumptions.
      </P>

      <H2>The notice period changes your whole plan</H2>
      <P>
        Thirty, sixty and ninety day notice periods are normal, and ninety is common in larger
        organisations. A role you fill in three weeks may still be empty four months later, which means
        the date that matters is the joining date rather than the offer date.
      </P>
      <P>
        Ask early, not at offer stage. Ask about buyouts too, since a candidate whose next employer
        will buy out the notice has a materially different availability from one whose will not.
        Somebody with a ninety-day notice who is willing to negotiate it down is a different
        proposition from somebody who is not, and only one conversation separates them.
      </P>

      <Pull>The date that matters is the joining date, and it is knowable in the first conversation.</Pull>

      <H2>WhatsApp is where professional conversation happens</H2>
      <P>
        Treating it as an intrusive channel is a category error imported from other markets. For a
        large share of the working population it is the default medium, replies arrive in minutes
        rather than days, and a message there frequently reaches somebody an email never would.
      </P>
      <P>
        Email still carries the first approach and the detail. But a pipeline that cannot converse on
        WhatsApp is losing candidates it never learns about, because non-response looks identical
        whether it means uninterested or unreachable.
      </P>

      <H2>Timing, and what it costs to get wrong</H2>
      <CompareTable
        head={["Factor", "What to do", "Why"]}
        rows={[
          [
            "Calling hours",
            "Daytime in the candidate's own timezone, never Sunday.",
            "A call at the wrong hour is not a neutral miss. It is a negative impression of the employer you are representing.",
          ],
          [
            "Appraisal cycles",
            "Expect reluctance to move immediately before a payout.",
            "A strong candidate declining in March may be a yes in May. Record the reason rather than closing them out.",
          ],
          [
            "Counter-offers",
            "Assume one is coming, and talk about it before the offer goes out.",
            "A counter-offer discussed in advance is survivable. One that arrives as a surprise generally is not.",
          ],
          [
            "Festival periods",
            "Plan around regional calendars, not a single national one.",
            "Response rates move sharply and by region, and reading that as disinterest wastes a fortnight.",
          ],
        ]}
      />

      <H2>Location is more specific than it looks</H2>
      <Bullets>
        <li>
          <Strong>Tier-one cities are not interchangeable.</Strong> Bengaluru, Hyderabad, Pune, NCR and
          Chennai have different concentrations by function, and a brief that says India is not a
          location.
        </li>
        <li>
          <Strong>Onsite means something specific.</Strong> Distinguish genuinely onsite from
          would-prefer-onsite before making it a rejection rule. In a hub city the commute decides more
          offers than the salary does.
        </li>
        <li>
          <Strong>Relocation is a real option, not an edge case.</Strong> Plenty of strong candidates
          will move for the right role. Whether you would fund it is a question worth answering before
          it excludes people automatically.
        </li>
      </Bullets>

      <H2>What high volume actually demands</H2>
      <Steps>
        <li>
          <Strong>Screen for the constraints first.</Strong> Notice period, location reality and
          compensation expectation resolve most of the pipeline before any interview time is spent.
        </li>
        <li>
          <Strong>Make declining easy and read the reasons.</Strong> At volume the declines are your
          best data, and they are free.
        </li>
        <li>
          <Strong>Keep every candidate warm through the notice period.</Strong> The gap between offer
          and joining is where a filled role quietly becomes an open one again.
        </li>
        <li>
          <Strong>Track joins, not offers.</Strong> An offer-acceptance metric in this market flatters
          a process that is losing people in month two.
        </li>
      </Steps>
    </>
  );
}

export const post: BlogPost = {
  slug: "high-volume-hiring-in-india",
  title: "High-volume hiring in India: a tactical guide",
  dek: "Notice periods, WhatsApp, counter-offers and calling windows. The assumptions imported from other markets that quietly cost you a quarter.",
  answer:
    "Hiring at volume in India needs four adjustments to standard playbooks: plan around 30 to 90 day notice periods and track joining dates rather than offer dates, treat WhatsApp as a primary professional channel rather than an intrusion, expect and pre-empt counter-offers, and treat location specifically since tier-one cities differ sharply by function. Screening for constraints before interviewing resolves most of a high-volume pipeline.",
  category: "article",
  motif: "calendar",
  publishedAt: "2026-09-28",
  readingMinutes: 3,
  topics: ["India hiring", "high-volume recruiting", "notice period", "WhatsApp recruiting", "counter-offers"],
  faq: [
    {
      q: "How do notice periods affect hiring plans in India?",
      a: "Thirty to ninety day notice periods are normal and ninety is common in larger organisations, so a role filled in three weeks may stay empty for months. Ask about notice and buyout possibilities in the first conversation and plan against the joining date rather than the offer date.",
    },
    {
      q: "Should recruiters use WhatsApp for candidate outreach in India?",
      a: "Yes. For a large share of the working population it is the default professional channel, with replies arriving in minutes rather than days. A pipeline that cannot converse there loses candidates invisibly, because unreachable looks identical to uninterested.",
    },
    {
      q: "How should you handle counter-offers in the Indian market?",
      a: "Assume one is coming and discuss it before the offer goes out. A counter-offer anticipated in advance is survivable; one that arrives as a surprise after acceptance usually is not.",
    },
    {
      q: "What metric matters most in high-volume Indian hiring?",
      a: "Joins rather than offer acceptances. Long notice periods and counter-offers mean acceptance rate flatters a process that is losing people between offer and joining.",
    },
  ],
  Body,
};
