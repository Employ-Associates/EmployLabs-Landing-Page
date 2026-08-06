"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "Who can use Weemploy?",
    answer:
      "Weemploy is built for recruiters. If you are searching for hard-to-find talent, Weemploy is a fit for you. We work with companies ranging from Fortune 500 to boutique recruiting agencies — and hopefully, you too.",
  },
  {
    question: "Can I try Weemploy for free?",
    answer:
      "Yes. To get started, use the 'Start for Free' button to open the platform. Then, sign up or log in to access your account.",
  },
  {
    question: "Can I use Weemploy with my team?",
    answer:
      "You can invite your team to join you on the Growth and Business plans. Use the 'invite team' button to get started with your team. You can collaborate on searches, shortlist candidates, and coordinate your outreach campaigns.",
  },
  {
    question: "How long does it take to set up and start using Weemploy?",
    answer:
      "60 seconds, no more. Sign up online to create a Weemploy account and run your first search. For details on our CRM and ATS integrations, or questions on the Enterprise plan, please reach out to sales.",
  },
  {
    question: "Does Weemploy have global candidate data?",
    answer:
      "Yes. Weemploy has 80M+ profiles across the globe from dozens of data sources. We continue to add region-specific sources to enhance global coverage. For details on your specific region, please reach out to our sales team.",
  },
  {
    question: "Will it integrate with my ATS or CRM?",
    answer:
      "Most likely, yes. Weemploy integrates with 41 ATS systems and 21 CRMs. Alternatively, you can export to detailed CSVs in seconds, with or without contact info. Can't find your CRM or ATS? Contact sales@Weemploy.work for an estimate on when it will go live.",
  },
];

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-32 bg-black">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block bg-blue-600/20 text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-4">
            [04] Faq
          </div>
          <h2 className="text-4xl md:text-5xl font-medium text-white mb-4">
            Your questions, answered
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-zinc-900/50 backdrop-blur-sm rounded-xl border border-zinc-800 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-zinc-800/50 transition-colors"
              >
                <h3 className="text-lg font-medium text-white">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-zinc-400" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-zinc-400" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-zinc-300 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
