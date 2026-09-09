import type { BlogPost } from "../types";
import { P, H2, Pull, Bullets, Strong, Figure, CompareTable, RequirementCard } from "@/components/blog/prose";

function Body() {
  return (
    <>
      <H2>Two different jobs</H2>
      <P>
        Eightfold builds a skills view across your workforce and the outside market, and tells you who
        matches a role. It reasons over a corpus the company states as 1.6 billion career trajectories
        and a graph of 1.6 million skills, combined at deployment with your own ATS and HCM records, so
        external candidates and your own employees are ranked against the same requisition. Since July
        2026 it also puts an agent on your career site and an AI interviewer behind it.
      </P>
      <P>
        EmployLabs runs the role. A job description becomes a governed decision engine; the system then
        searches for the people, contacts them on their own channels, screens them against your
        must-asks, interviews them by voice, and returns a ranked shortlist with the evidence behind
        every verdict attached.
      </P>
      <P>
        The distinction is not that one of them talks to candidates. Both do. It is <em>which</em>{" "}
        candidates. Eightfold&rsquo;s agent lives at your front door and answers whoever arrives.
        Ours goes out to somebody who was never going to arrive.
      </P>

      <H2>Which one you need</H2>
      <P>
        The question is not which product is better. It is which of two problems is actually stopping
        you.
      </P>
      <Bullets>
        <li>
          <Strong>You cannot see the talent you already have.</Strong> Roles get filled externally that
          somebody in Pune could have done. Skills live in nobody&rsquo;s system. That is a talent
          intelligence problem, and no amount of external sourcing touches it.
        </li>
        <li>
          <Strong>You know who you want and nobody is reaching them.</Strong> A ranked list of passive
          candidates arrives and stays a list, because contacting two hundred people, chasing them,
          screening them and running first interviews is a fortnight of work nobody has spare. More
          intelligence about those people changes nothing. That is an execution problem, and it is the
          one we solve.
        </li>
      </Bullets>
      <P>
        Company size does not decide this. A four-hundred-person company hiring twelve specialists a
        year and a fifteen-thousand-person company hiring specialists into a new division have the same
        execution problem, and we run both.
      </P>

      <CompareTable
        head={["Outcome", "Eightfold", "EmployLabs"]}
        rows={[
          [
            "What lands on your desk",
            "A ranked, skills-inferred view of candidates and your own employees against the role, with interview output where the AI interviewer was used on people who applied.",
            "Candidates found, contacted, screened and interviewed, each carrying a completed voice interview and the evidence behind every verdict.",
          ],
          [
            "What you still do yourself",
            "The outbound. Reaching a matched candidate who has not applied is your recruiters' work, or a separate CRM's.",
            "The judgement: closing, the hiring-manager conversation, the decision.",
          ],
          [
            "Time to the first useful thing",
            "An implementation, with HRIS integration and a data project behind it.",
            "Days, on a single role, with nothing to integrate.",
          ],
          [
            "What you keep afterwards",
            "A skills graph across your workforce that compounds over years.",
            "The pipeline, the market read, the scoring and the interview evidence, for this role and the next one.",
          ],
          [
            "Where it fails you",
            "Adoption. A workforce-wide system only pays back if the whole organisation uses it.",
            "A brief nobody thought hard about. Aimed at a badly specified role, it produces confident activity and no hires.",
          ],
        ]}
      />

      <H2>What each one can actually do</H2>
      <P>
        Outcomes describe what you end up with. This is the work itself, job by job, because a buyer
        building a requirement list needs to know which boxes each product can genuinely fill. Where
        Eightfold&rsquo;s published material does not describe a capability, the row says so rather
        than reading an absence into it.
      </P>

      <CompareTable
        head={["Finding and deciding", "Eightfold", "EmployLabs"]}
        rows={[
          [
            "See who inside your company could do the role",
            "Its home ground. Employees and external candidates are matched against the same role over the skills graph, reasoning about adjacency rather than keyword presence.",
            "Not offered, and not on the roadmap. The platform works outside your organisation.",
          ],
          [
            "Workforce planning, succession, skills-gap analysis",
            "A full product line covering redeployment, succession and contingent workforce strategy.",
            "Not offered.",
          ],
          [
            "Decide what the role actually requires",
            "The role is matched against a skills graph the company states as 1.6 million skills, inferring capability rather than reading keywords.",
            "A three-tier decision engine per role: deterministic kill-switches with no model in the gate, a weighted ranking budget across skill match, ownership, environment complexity and domain depth, and soft signals capped so they cannot outweigh hard evidence.",
          ],
          [
            "Weigh what the brief said against what was guessed",
            "Not described in published product material.",
            "Criteria stated in the job description carry full confidence; criteria the system inferred carry less, so a failed inferred gate penalises and a failed stated gate is decisive.",
          ],
          [
            "Find candidates for the role",
            "Matched from the 1.6 billion-trajectory corpus, assembled from public sources over a decade and combined with your own ATS and HCM records.",
            "Searched per role across 800M+ professional profiles worldwide, alongside your own inbound applicants and anyone already in your pipeline.",
          ],
          [
            "Explain why a candidate scored what they scored",
            "Deep-learning match scores, with explainability surfaced on the result.",
            "Every score cites the specific line of evidence that produced it — 'failed experience gate: 2.5yr actual against 3yr required' — rather than a similarity figure.",
          ],
          [
            "Change a requirement and re-rank the pool",
            "Not described in published product material.",
            "Promote, demote or disable any criterion and the entire pool re-ranks in front of you, with no model call and nothing re-charged.",
          ],
        ]}
      />

      <CompareTable
        head={["Reaching, assessing, governing", "Eightfold", "EmployLabs"]}
        rows={[
          [
            "Contact a candidate who has not applied",
            "Not among the products the company markets. Outreach to a matched candidate is carried out by your recruiters, or by a separate CRM.",
            "A multi-step cadence personalised against each person's actual background, escalating channel when messages go unanswered.",
          ],
          [
            "Hold the conversation and answer their questions",
            "Candidate Agent, released July 2026: hosted by the employer, available around the clock in 22+ languages, carrying one continuous thread through role discovery, questions and application.",
            "One engine across email, WhatsApp, voice and web, so the candidate is reached where they answer. It responds within seconds, knows that person's score, and can discuss their specific strengths and gaps against the role. Calling windows and telecom rules are observed per market automatically.",
          ],
          [
            "Interview the candidate",
            "AI Interviewer, 22+ languages, around the clock; the company states it automates a large share of manual recruiter screening. A combined multi-format session is announced for a later release.",
            "A structured multi-module voice interview over phone or browser with live transcription. A state machine prevents phases being skipped, so every candidate faces the same structure against the same rubric.",
          ],
          [
            "Assess a technical candidate on what they can build",
            "Not described in published product material.",
            "Live code execution inside the interview session itself, across eleven sandboxed languages — the candidate writes and runs code while the conversation continues.",
          ],
          [
            "Assess a non-technical role on evidence",
            "Matching covers all role types. Interview coverage for non-technical roles is not detailed in published material.",
            "The same structure and the same rubric cover sales, operations and finance, so those candidates are assessed on demonstrated evidence rather than on a CV read.",
          ],
          [
            "Produce something a hiring manager can act on",
            "A ranked set of recommendations with match explanation, and interview output where the AI interviewer has been used.",
            "A five-level alignment rank with written rationale, and a four-part report — assessment, role fit, recommendations, behavioural signal — on a securely signed link you can send.",
          ],
          [
            "Record why the system decided what it decided",
            "Enterprise-grade audit and reporting, alongside its published compliance artifacts.",
            "Five append-only ledgers covering candidate contact, spend, scoring changes, consent and overrides, with every autonomous decision logged beside the reasoning that produced it.",
          ],
          [
            "Show you where you and the system disagree",
            "Not described in published product material.",
            "Override rates tracked per criterion, per role and per recruiter. Where the two persistently disagree it reports the divergence and proposes recalibration, and autonomy widens only as agreement is demonstrated.",
          ],
          [
            "Search without naming the employer",
            "Not described in published product material.",
            "Confidential mode engages candidates without naming you and reveals on confirmation; research-only maps a market with outreach switched off entirely.",
          ],
          [
            "Produce a dated independent bias audit",
            "An independent audit of the matching model completed March 2026 under NYC Local Law 144, passing all three assessed sections, published by the company.",
            "No third-party artifact today. The Local Law 144 and EU AI Act posture is structural — one rubric on every candidate, a person at the final gate, a complete decision record — and audit artifacts are on the roadmap.",
          ],
          [
            "Flow into the system your organisation runs on",
            "Native integrations with Workday, SAP SuccessFactors, Oracle HCM, Greenhouse and Lever.",
            "No live integrations. Shortlists are handed over by export; integration is on the roadmap and no date is offered.",
          ],
        ]}
      />

      <P>
        Read the two tables as one shape. The rows at the top of the first and the bottom of the
        second are the reason a large organisation buys talent intelligence, and nothing we do replaces
        them. Everything between is the fortnight that stands between a ranked list and a hire.
      </P>

      <H2>What actually arrives</H2>
      <P>
        &ldquo;Evidence-backed scoring&rdquo; is a phrase, so here is the thing itself. Every
        requirement on the role returns a verdict and the line from the candidate&rsquo;s profile that
        decided it.
      </P>

      <Figure caption="One candidate against one role. Two requirements met with the sentence that proves each, one the profile never addressed — which becomes a screening question rather than a deduction — and one genuinely not met.">
        <RequirementCard
          name="Ananya R."
          role="Senior Backend Engineer · Bengaluru"
          alignment="Strong alignment"
          rows={[
            {
              label: "6+ years backend engineering",
              verdict: "met",
              evidence: (
                <>
                  &ldquo;Backend engineer since 2018, currently <Strong>Senior Engineer II</Strong> on the
                  payments platform.&rdquo;
                </>
              ),
            },
            {
              label: "Distributed systems at scale",
              verdict: "met",
              evidence: (
                <>
                  &ldquo;Owned the <Strong>event pipeline handling 40M daily transactions</Strong>.&rdquo;
                </>
              ),
            },
            {
              label: "Has led a team of 3+",
              verdict: "unstated",
              evidence: "Profile does not say either way. Added to this candidate's screening questions.",
            },
            {
              label: "Based in or moving to Pune",
              verdict: "failed",
              evidence: (
                <>
                  &ldquo;Bengaluru, <Strong>not currently open to relocating</Strong>.&rdquo;
                </>
              ),
            },
          ]}
        />
      </Figure>

      <P>
        Behind that sits the voice interview: multi-module by design, phases enforced so nobody gets a
        rushed screen, live code execution for the technical rounds, and a report that names what to
        probe in your own interview, what this person will need in their first ninety days, and the
        risks ranked by how much they actually matter. It arrives on a signed link you can forward to
        the hiring manager without exporting anything.
      </P>

      <Pull>
        A ranked list tells you who to call. This tells you what happened when somebody did.
      </Pull>

      <H2>Where we work</H2>
      <P>
        We run mandates for seventy-one client organisations across nine countries, among them Deccan
        AI in California, Philogen in Italy, phamax in Switzerland, Space Matrix in Singapore and
        Solinas in Chennai. The work spans deep-tech robotics, biotechnology, consulting, design and
        enterprise software.
      </P>
      <P>
        That range is the point rather than the count. Leadership searches across those domains —
        Chief Business Officer, VP Sales, Chief of Staff, Head of Growth, founding-team hires — are run
        by our own experienced recruiters, because a senior search is unrecognisable between a robotics
        company and a biotech and the person running it has to know the difference. The platform
        carries the map, the evidence and the administration underneath them. Sourcing is global;
        India-specific compensation benchmarks by role, city and experience level sit on top of it.
      </P>

      <H2>What it costs you to find out</H2>
      <P>
        This is where the two purchases differ most and it rarely appears in a comparison. A workforce
        intelligence platform is a commitment before it is a result: integration, data work, change
        management, and an organisation that has to adopt it before anything pays back. The decision is
        large and slow by construction.
      </P>
      <P>
        Ours is one role. Give us a brief, watch the market map, look at the sample, arm it or do not.
        Automation is off by default and set per role from manual through to full; nothing sends and
        nothing spends until somebody says so, and there are caps on both. If it is not working you
        stop — with the pipeline, the scoring and the market read still yours.
      </P>

      <H2>What Eightfold does that we do not</H2>
      <Bullets>
        <li>
          <Strong>Internal mobility.</Strong> Matching your existing employees to open roles before you
          hire externally. We have no view of your workforce and this is genuinely theirs. It stops
          being the deciding factor the moment the role is one nobody internal can fill, which is most
          specialist and leadership hiring.
        </li>
        <li>
          <Strong>Workforce planning.</Strong> Succession, skills gaps across a division, contingent
          workforce strategy. A different discipline from filling a role, and relevant only if that is
          the problem you are solving this quarter.
        </li>
        <li>
          <Strong>A dated independent bias audit.</Strong> Their matching model was audited under NYC
          Local Law 144 in March 2026 and the result published. We have no third-party artifact. If
          your legal team needs one on file this quarter, that is a real answer and it is theirs. Our
          posture is structural rather than certified — one rubric applied to every candidate, a person
          at the final gate, and five append-only ledgers recording every decision and the reasoning
          behind it — which is what an auditor would examine, not a substitute for the examination.
        </li>
        <li>
          <Strong>HRIS-deep integration.</Strong> If the requirement is that candidate data flows into
          the system your whole organisation runs on, that is real and we do not do it today.
          Shortlists are handed over by export. It matters less than it sounds when the roles in
          question are ones your ATS has never seen a candidate for.
        </li>
      </Bullets>

      <H2>Running both, concretely</H2>
      <P>
        For a large organisation this is the sensible configuration, and it is operational rather than
        diplomatic. The workforce graph answers whether a role should be filled internally at all. When
        the answer is no — which is every genuinely specialist hire — the brief comes to us and the
        execution happens here. Finalists and their evidence are exported into whatever holds your
        requisitions, the way any externally sourced candidate reaches it today.
      </P>
      <P>
        The mistake is buying either expecting the other. A career-site agent will not approach anybody
        who never visits it. We will not tell you the person for this job already works in your Pune
        office.
      </P>

      <H2>What a TA lead actually wants to know</H2>
      <Bullets>
        <li>
          <Strong>Once a strong candidate is identified, who contacts them?</Strong> With talent
          intelligence, one of your recruiters, or a CRM you drive. With us, the system does, on the
          channel that person answers on, within seconds of identifying them.
        </li>
        <li>
          <Strong>What do I show my hiring manager?</Strong> The evidence per requirement and a
          four-part interview report on a link they can open themselves, rather than your summary of a
          ranked list.
        </li>
        <li>
          <Strong>Which parts run without a human, and where can I put a gate?</Strong> Named gates at
          role definition, outreach and shortlist sign-off, plus an intervention queue carrying only
          the candidates that need a judgement. Everything between the gates runs unattended and is
          logged.
        </li>
        <li>
          <Strong>What compliance artifacts can you produce today, dated, and by whom?</Strong> Theirs:
          an independent Local Law 144 audit from March 2026. Ours: the decision record, the ledgers
          and the single rubric, with third-party artifacts on the roadmap. Put that question to both
          of us and read both answers literally.
        </li>
        <li>
          <Strong>How fast do I know if it works?</Strong> One role. If the shortlist after the first
          cycle is not better than what your team produces, you have your answer and you have lost a
          fortnight rather than a budget cycle.
        </li>
        <li>
          <Strong>What happens to the work if we stop?</Strong> The candidates, the scoring, the
          evidence and the market read are yours and stay yours.
        </li>
      </Bullets>

      <H2>The decision, stated plainly</H2>
      <P>
        If your problem is that you cannot see the talent you already employ, buy talent intelligence,
        and we are not a substitute. If your problem is that specialist roles sit open because the
        people who could fill them are never contacted, buy execution — the finding, the reaching, the
        screening and the interviewing done rather than recommended, with the evidence attached to
        every name. That is the whole of what we do.
      </P>
    </>
  );
}

export const post: BlogPost = {
  slug: "employlabs-vs-eightfold",
  title: "EmployLabs vs Eightfold",
  dek: "Talent intelligence ranks the people you can already see, including inside your own company. An AI recruiter goes out to the ones who will never arrive. Which you need depends on which problem is actually stopping you.",
  answer:
    "Eightfold is a talent intelligence layer: it ranks candidates and employees against a role over a skills graph, and since July 2026 also runs a career-site candidate agent and an AI interviewer for people who arrive. EmployLabs works outbound — sourcing per role, contacting candidates who never applied across email, WhatsApp, voice and web, interviewing them against your rubric, and returning a shortlist with evidence behind every verdict. Choose Eightfold for internal mobility, workforce planning, HRIS integration or a dated bias audit; choose EmployLabs when the constraint is execution.",
  category: "compare",
  motif: "versus",
  publishedAt: "2026-09-08",
  readingMinutes: 12,
  topics: ["Eightfold", "talent intelligence", "internal mobility", "enterprise recruiting", "vendor comparison"],
  faq: [
    {
      q: "Should I choose Eightfold or an AI recruiter like EmployLabs?",
      a: "It depends which problem is stopping you. If roles are filled externally that existing employees could do, that is a talent intelligence problem and Eightfold's ground. If candidates are identified and then never contacted because nobody has the hours, that is an execution problem and EmployLabs solves it.",
    },
    {
      q: "Eightfold has a candidate agent and an AI interviewer now. Does that cover outbound recruiting?",
      a: "Not as published. Its candidate agent is hosted by the employer and carries a thread with people who reach the career site, and the AI interviewer assesses candidates who have entered the process. Outbound sequencing to a matched candidate who has not applied is not among the products the company markets; that outreach is done by your recruiters or a separate CRM.",
    },
    {
      q: "Is EmployLabs only for smaller companies?",
      a: "No. The deciding factor is the problem, not headcount. A four-hundred-person company hiring twelve specialists a year and a fifteen-thousand-person company staffing a new division have the same execution problem.",
    },
    {
      q: "Does EmployLabs do internal mobility?",
      a: "No. EmployLabs has no view of your existing workforce, and internal mobility is not on its roadmap. That is genuinely Eightfold's strength, and it stops being the deciding factor for roles nobody internal can fill, which covers most specialist and leadership hiring.",
    },
    {
      q: "Which platform has independent bias-audit compliance artifacts?",
      a: "Eightfold. Its matching model was audited independently under NYC Local Law 144 in March 2026 and the result published. EmployLabs has no third-party artifact today; its Local Law 144 and EU AI Act posture is structural — one rubric applied to every candidate, a person at the final gate, and append-only ledgers recording every decision with its reasoning — with audit artifacts on the roadmap.",
    },
    {
      q: "Does EmployLabs integrate with Workday or an ATS?",
      a: "Not today. Eightfold has native integrations with Workday, SAP SuccessFactors, Oracle HCM, Greenhouse and Lever. EmployLabs hands shortlists over by export; integration is on the roadmap and no date is offered.",
    },
    {
      q: "How quickly can you tell whether an AI recruiter is working?",
      a: "One role and one cycle. If the shortlist is not better than what your team produces, you know within a fortnight, and the candidates, scoring and market read remain yours either way.",
    },
    {
      q: "Can you run a talent intelligence platform and an AI recruiter together?",
      a: "Yes, and for a large organisation it is the sensible configuration. The workforce graph decides whether a role should be filled internally; when the answer is no, the brief goes to the execution layer and finalists are exported back with their evidence.",
    },
  ],
  Body,
};
