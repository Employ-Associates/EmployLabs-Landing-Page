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
        head={["Outcome", "Juicebox", "EmployLabs"]}
        rows={[
          [
            "What lands on your desk",
            "A ranked list of candidates matching your description, ready to be worked.",
            "Candidates who have been contacted, screened against your must-asks and interviewed, with evidence.",
          ],
          [
            "What you still do yourself",
            "Contact them, follow up, screen them, interview them. The list is the starting point.",
            "The judgement: closing, the hiring-manager conversation, the decision.",
          ],
          [
            "Time to the first useful thing",
            "Minutes. Type a description, get people. This is genuinely fast.",
            "Days. The brief has to be confirmed before anything runs.",
          ],
          [
            "What you keep afterwards",
            "The candidates you saved, inside their system, plus whatever your ATS captured.",
            "The pipeline, the market read, the scoring and the evidence behind each verdict.",
          ],
          [
            "Where it fails you",
            "When capacity is the constraint. More names is the wrong medicine for a team that cannot work the names it has.",
            "When the brief is wrong. Automation aimed at a badly specified role produces confident activity and no hires.",
          ],
        ]}
      />

      <Pull>If your team is strong and just needs better discovery, buy the search product.</Pull>

      <H2>The capabilities, plainly</H2>
      <P>
        Juicebox searches a very large profile index and ranks against your description, with email
        sequencing, a CRM and extensive ATS integrations around it. Its index is central to how the
        product works, and it is genuinely good at the thing it is for.
      </P>
      <P>
        EmployLabs sources per role across 800M+ professional profiles rather than handing you an index
        to browse, and turns the brief into a governed decision engine for that role: deterministic
        kill-switches, a weighted ranking budget across skill match, ownership and domain depth, and
        soft signals capped so they cannot outweigh hard evidence. Every score cites the line that
        produced it rather than a similarity figure, and changing a requirement re-ranks the whole pool
        in front of you. One conversation engine runs across email, WhatsApp, voice and web; the
        interview is multi-module with phases enforced and live code execution inside the session, and
        it ends in an alignment rank with written rationale and a four-part report.
      </P>

      <H2>What a TA lead actually wants to know</H2>
      <Bullets>
        <li>
          <Strong>Can I run it on Monday?</Strong> Both, yes. Neither is an implementation project,
          which separates them both from enterprise talent platforms.
        </li>
        <li>
          <Strong>Which part of my week does it fix?</Strong> Juicebox fixes the hour spent building a
          list. We fix the two days spent working one.
        </li>
        <li>
          <Strong>What do I tell my hiring manager?</Strong> With a search tool, your own read of the
          candidates. With us, the evidence per requirement and an interview report.
        </li>
        <li>
          <Strong>Who owns the candidate relationship?</Strong> With a search tool, your recruiters,
          which many teams want. With us, an agent holds the routine conversation and hands you the
          moments that need a person.
        </li>
      </Bullets>

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
          <Strong>You are hiring across several markets.</Strong> One engine across email, WhatsApp,
          voice and web reaches each candidate on the channel they answer on, with calling windows and
          telecom rules observed per market.
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
  readingMinutes: 4,
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
