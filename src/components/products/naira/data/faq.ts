import {
  Shield,
  Eye,
  UserX,
  Lock,
  Sliders,
  Timer,
  DollarSign,
  Code2,
  Layers,
  User,
} from "lucide-react";
import type { FAQItem } from "../types";

export const faqs: FAQItem[] = [
  {
    id: "bias",
    question: "How do you prevent bias in assessments?",
    icon: Shield,
    answer: {
      plain:
        "Every rubric is blind to demographic information. Assessors complete bias recognition training, and results are audited quarterly for fairness across demographic groups.",
      full:
        "Structured rubrics are applied consistently by calibrated assessors who score only the recorded response — no name, photo, or background visible. Assessors complete a 6-hour bias recognition certification before joining the panel. Quarterly fairness audits test for statistically significant score gaps across gender, ethnicity, and age cohorts using adverse-impact ratio analysis (target: IR ≥ 0.80 per EEOC guidelines). Any rubric dimension showing systematic drift is reviewed by our fairness committee and retrained.",
    },
  },
  {
    id: "transparency",
    question: "Can candidates see their scores?",
    icon: Eye,
    answer: {
      plain:
        "Yes. Candidates receive a full breakdown of each dimension, specific examples from their responses, and benchmarking percentiles.",
      full:
        "Candidates receive a structured feedback report within 48 hours of assessment completion. The report shows dimension scores on a 0–100 scale, qualitative notes from the rubric, two to three specific behavioral examples from the interview, a percentile rank within the current applicant pool, and an areas-for-growth section. Rejected candidates may request a debrief call with a senior assessor within 30 days.",
    },
  },
  {
    id: "candidate_experience",
    question: "What if a candidate has a bad assessment day?",
    icon: UserX,
    answer: {
      plain:
        "Candidates can flag the session. Flagged sessions are reviewed by a human assessor before any decision is made.",
      full:
        "Any candidate may flag their session within 24 hours of completion by citing: technical issues, health circumstances, or documented external stressors. Flagged sessions are escalated to a senior assessor who reviews the recording and interviewer notes. If the flag is validated, the candidate is offered a no-cost reassessment on a different day. Flagged sessions are never used as-is for disqualification decisions.",
    },
  },
  {
    id: "privacy",
    question: "How is candidate data handled?",
    icon: Lock,
    answer: {
      plain:
        "Zero PII is stored beyond what is needed for the assessment. All data is anonymized and encrypted at rest.",
      full:
        "All personally identifiable information is decoupled from assessment data at ingestion via a one-way hash. Assessment recordings are stored AES-256 encrypted, retained for a maximum of 180 days, and then automatically purged. We are SOC 2 Type II certified and GDPR compliant. Client companies receive only anonymized score outputs — no raw recordings unless explicitly consented to by the candidate. Full data processing agreement (DPA) available on request.",
    },
  },
  {
    id: "vs_traditional",
    question: "How is this different from traditional pre-employment tests?",
    icon: Layers,
    answer: {
      plain:
        "Traditional tests are standardized across roles. Ours are calibrated to the exact job requirements, and five independent data sources are cross-validated so no single point determines the outcome.",
      full:
        "Traditional pre-employment tests (like personality inventories or cognitive ability tests) are standardized across roles and industries. EmployLabs assessments are role-specific: the coding challenge, interview questions, and scoring rubric are calibrated to the exact job requirements. Our system combines five independent data sources — voice interview, coding output, GitHub analysis, resume parsing, and behavioral screen — then cross-validates them. No single data point determines the outcome. This is different from a test that produces one score.",
    },
  },
  {
    id: "customization",
    question: "Can we customize the rubric for our role?",
    icon: Sliders,
    answer: {
      plain:
        "Yes. Custom dimensions can be added with a 2-week validation lead time.",
      full:
        "Client-specific dimensions are validated by our psychometrician team against an internal sample of 20+ existing employees before going live. Validation includes content validity review, inter-rater reliability testing (ICC ≥ 0.70 required), and an adverse-impact pre-check. Custom weights can also be requested for the composite; any weight change is documented and included in the methodology appendix provided to the client.",
    },
  },
  {
    id: "timing",
    question: "How long does a full assessment take?",
    icon: Timer,
    answer: {
      plain:
        "The full pipeline takes 2–4 hours for candidates and 5–7 business days from first screen to report.",
      full:
        "Candidate-facing time: behavioral screen (20–30 min async), work sample (60–90 min async), structured interview (45–60 min live). Reports are generated within 48 hours of the final assessment stage. Average pipeline length is 5.4 business days from first invitation to final report delivery. Rush processing (48-hour turnaround) is available at additional cost.",
    },
  },
  {
    id: "cost",
    question: "How is pricing structured?",
    icon: DollarSign,
    answer: {
      plain:
        "Per-assessment pricing with volume discounts. No platform fee for teams under 50 assessments per year.",
      full:
        "Pricing is per completed assessment (all stages). Volume tiers: 1–49 (standard), 50–199 (15% discount), 200–999 (25% discount), 1000+ (custom). Annual enterprise contracts include a dedicated psychometrician, quarterly calibration reviews, and custom reporting dashboards. A 10-assessment pilot is available at no charge for new enterprise prospects.",
    },
  },
  {
    id: "api",
    question: "Is there an API for integration?",
    icon: Code2,
    answer: {
      plain:
        "Yes. REST API with webhooks for ATS integration. SDKs available for Node.js and Python.",
      full:
        "The EmployLabs API is a RESTful JSON API with OAuth 2.0 authentication. Webhooks deliver real-time score events to your ATS (Greenhouse, Lever, Workday, and BambooHR natively supported). SDKs: Node.js (npm), Python (PyPI). Rate limit: 1000 req/min per org. Sandbox environment available. SLA: 99.9% uptime for assessment delivery; 99.5% for reporting. API documentation and OpenAPI 3.0 spec available in the developer portal.",
    },
  },
  {
    id: "candidate_experience_detail",
    question: "What do candidates experience during the assessment?",
    icon: User,
    answer: {
      plain:
        "77 minutes: a voice interview, a live coding challenge, and a behavioral screen. The rubric is not hidden. Candidates receive their own score summary after completion, and nothing they say is used outside this hiring process.",
      full:
        "Candidates complete a 77-minute structured assessment in three parts: a voice interview with 22 adaptive questions, a live coding challenge specific to the role, and a behavioral screen. The rubric is not hidden — candidates can understand how they will be evaluated before they begin. After the assessment, candidates receive a summary of their own scores within 48 hours. There are no trick questions, and no assessment data is used outside of this specific hiring process.",
    },
  },
] as const;
