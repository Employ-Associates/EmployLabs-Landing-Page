/**
 * The /people-search-engine FAQ — ONE array, two consumers: `FAQSection` renders
 * it and the page's FAQPage JSON-LD is built from it, so the answer a search
 * engine or assistant quotes can never drift from the one a visitor reads.
 *
 * ⚠ Plain module (no "use client") on purpose: a value exported from a client
 * module reaches a server component as a client reference, not as data.
 */
export type Faq = { question: string; answer: string };

export const PEOPLE_SEARCH_FAQS: readonly Faq[] = [
  {
    question: "Who can use EmployLabs?",
    answer:
      "EmployLabs is built for recruiters: freelance recruiters, recruiting agencies and in-house hiring teams searching for hard-to-find talent.",
  },
  {
    question: "Can I try EmployLabs for free?",
    answer:
      "Yes. Use the 'Start for free' button to open the platform, then sign up or log in to run your first search.",
  },
  {
    question: "Can I use EmployLabs with my team?",
    answer:
      "Yes, on the Company plan: invite teammates for $25 per seat and collaborate on searches, shortlists and outreach. The Freelancer plan includes one seat.",
  },
  {
    question: "How long does it take to set up and start using EmployLabs?",
    answer:
      "Minutes. Sign up online, create your account and run your first search. For Enterprise questions or an ATS/CRM connection, email smita@weemploy.world.",
  },
  {
    question: "Does EmployLabs have global candidate data?",
    answer:
      "Yes. EmployLabs searches 800M+ professional profiles across the globe, and we keep adding region-specific sources. For coverage in your region, email smita@weemploy.world.",
  },
  {
    question: "Will it integrate with my ATS or CRM?",
    answer:
      "Yes, on request. Tell us which ATS or CRM you use and we will set up the connection as part of onboarding. Email smita@weemploy.world to get started.",
  },
];
