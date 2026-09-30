"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

import { track } from "@/lib/analytics-events";
import { PEOPLE_SEARCH_FAQS } from "./faqs";

const faqs = PEOPLE_SEARCH_FAQS;

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    const isClosing = openIndex === index;
    setOpenIndex(isClosing ? null : index);
    // The event is `faq_opened`, so it must not fire on the click that CLOSES a
    // panel — otherwise collapsing a question reads as asking it again and the
    // count is roughly double the truth.
    if (!isClosing) track({ name: "faq_opened", params: { faq_index: index } });
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
