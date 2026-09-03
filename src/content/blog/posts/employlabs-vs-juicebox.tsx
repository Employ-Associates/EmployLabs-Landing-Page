import type { BlogPost } from "../types";
import { P, H2, Pull, Bullets, Strong, CompareTable } from "@/components/blog/prose";

function Body() {
  return (
    <>
      <H2>Different products, honestly</H2>
      <P>
        Juicebox is a search product. You describe the person you want in plain language, it searches a
        very large profile dataset, and it returns ranked candidates. Around that it has built
        sequencing, a CRM, agents that keep a search running, and a long list of ATS integrations.
      </P>
      <P>
        EmployLabs runs a role rather than a search. The brief, the market read, sourcing, evidence-backed
        scoring, the candidate conversation, a structured voice interview, and the report at the end,
        with human approval at each spend and send.
      </P>
      <P>
        Those overlap in the middle and are genuinely different at both ends. This is written to make
        the difference usable rather than to win an argument.
      </P>

      <CompareTable
        head={["", "Juicebox", "EmployLabs"]}
        rows={[
          [
            "Core strength",
            "Discovery. Search across a very large profile index, with strong ranking.",
            "Running the role end to end, with the interview and the report as the output.",
          ],
          [
            "Candidate conversation",
            "Automated email sequencing; the recruiter holds the conversation.",
            "An agent holds it over email, WhatsApp, phone and web, and screens against your must-asks.",
          ],
          [
            "Interviewing",
            "Not part of the product.",
            "A structured voice interview per role, with a rubric you set before it runs.",
          ],
          [
            "Scoring",
            "Ranking against your search description.",
            "Judged against a written standard per requirement, with the evidence line that decided each one.",
          ],
          [
            "ATS integrations",
            "Extensive. A core part of the offering.",
            "None yet. The clearest gap against them.",
          ],
          [
            "Profile index size",
            "Very large, and central to how the product works.",
            "Sourced per role rather than browsed. Not a search index you explore.",
          ],
        ]}
      />

      <Pull>If your team is strong and just needs better discovery, buy the search product.</Pull>

      <H2>Choose Juicebox when</H2>
      <Bullets>
        <li>
          <Strong>Discovery is your bottleneck.</Strong> You have recruiters with capacity who need
          better lists to work.
        </li>
        <li>
          <Strong>ATS integration is non-negotiable.</Strong> This is their clear advantage and our
          clear gap; we would rather say so than argue around it.
        </li>
        <li>
          <Strong>You want to explore a market.</Strong> A searchable index answers questions a
          per-role pipeline does not.
        </li>
        <li>
          <Strong>Your recruiters want to own the candidate relationship.</Strong> Many good ones do,
          and that is a legitimate operating choice rather than a failure to automate.
        </li>
      </Bullets>

      <H2>Choose EmployLabs when</H2>
      <Bullets>
        <li>
          <Strong>Capacity is the bottleneck.</Strong> More roles than recruiter hours, and lists are
          not the missing piece.
        </li>
        <li>
          <Strong>You need screening and interviewing to happen without you.</Strong> This is the part
          a search product does not attempt.
        </li>
        <li>
          <Strong>You have to defend shortlist decisions.</Strong> Evidence per requirement, and an
          interview report a hiring manager can act on.
        </li>
        <li>
          <Strong>Your candidates are not on email.</Strong> WhatsApp and phone as first-class channels
          matters in some markets far more than in others.
        </li>
      </Bullets>

      <H2>What we would not claim</H2>
      <P>
        We are not better at search. A product built around a very large index with years of ranking
        work behind it will out-discover a per-role pipeline, and if that is the job, it is the right
        purchase.
      </P>
      <P>
        We also have no ATS integrations today, which for many teams is disqualifying on its own. It is
        on the roadmap, and a roadmap is not a feature.
      </P>

      <H2>Running both</H2>
      <P>
        It is a reasonable configuration: a search product for exploration and hard-to-find roles, an
        end-to-end platform for the repeatable volume. They solve different constraints, and the teams
        that get the most out of either are the ones who were clear about which constraint they had.
      </P>
    </>
  );
}

export const post: BlogPost = {
  slug: "employlabs-vs-juicebox",
  title: "EmployLabs vs Juicebox",
  dek: "A search product and a funnel product, compared honestly — including the two places where Juicebox is the better purchase.",
  answer:
    "Juicebox is a search product: natural-language discovery across a very large profile index, with sequencing, CRM and extensive ATS integrations around it. EmployLabs runs a role end to end, including the candidate conversation, evidence-backed scoring and a structured voice interview. Choose Juicebox when discovery is the bottleneck or ATS integration is essential; choose EmployLabs when screening and interviewing capacity is the constraint.",
  category: "compare",
  motif: "versus",
  publishedAt: "2026-09-30",
  readingMinutes: 8,
  topics: ["Juicebox", "AI recruiting tools", "vendor comparison", "AI sourcing", "recruiting software"],
  faq: [
    {
      q: "What is the difference between Juicebox and EmployLabs?",
      a: "Juicebox is built around natural-language search of a large profile index, with sequencing and ATS integrations. EmployLabs runs a role from brief through outreach, screening and a structured voice interview, with human approval at each spend and send.",
    },
    {
      q: "When is Juicebox the better choice?",
      a: "When discovery is your bottleneck and your recruiters have capacity to work the lists, when ATS integration is non-negotiable, when you want to explore a market interactively, or when your recruiters want to own the candidate relationship themselves.",
    },
    {
      q: "Does EmployLabs integrate with an ATS?",
      a: "Not today. It is the clearest gap against search-led products, several of which integrate with dozens of systems, and for many teams that alone decides the purchase.",
    },
  ],
  Body,
};
