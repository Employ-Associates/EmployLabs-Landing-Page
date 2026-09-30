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
      "EmployLabs is built for recruiters. If you are searching for hard-to-find talent, EmployLabs is a fit for you. We work with companies ranging from Fortune 500 to boutique recruiting agencies — and hopefully, you too.",
  },
  {
    question: "Can I try EmployLabs for free?",
    answer:
      "Yes. To get started, use the 'Start for Free' button to open the platform. Then, sign up or log in to access your account.",
  },
  {
    question: "Can I use EmployLabs with my team?",
    answer:
      "You can invite your team to join you on the Growth and Business plans. Use the 'invite team' button to get started with your team. You can collaborate on searches, shortlist candidates, and coordinate your outreach campaigns.",
  },
  {
    question: "How long does it take to set up and start using EmployLabs?",
    answer:
      "60 seconds, no more. Sign up online to create a EmployLabs account and run your first search. For details on our CRM and ATS integrations, or questions on the Enterprise plan, please reach out to sales.",
  },
  {
    question: "Does EmployLabs have global candidate data?",
    answer:
      "Yes. EmployLabs has 80M+ profiles across the globe from dozens of data sources. We continue to add region-specific sources to enhance global coverage. For details on your specific region, please reach out to our sales team.",
  },
  {
    question: "Will it integrate with my ATS or CRM?",
    answer:
      "Most likely, yes. EmployLabs integrates with 41 ATS systems and 21 CRMs. Alternatively, you can export to detailed CSVs in seconds, with or without contact info. Can't find your CRM or ATS? Contact sales@EmployLabs.work for an estimate on when it will go live.",
  },
];
