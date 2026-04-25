"use client";

import SectionHeader from "../ui/SectionHeader";
import AccordionItem from "../ui/AccordionItem";
import { faqs } from "../data/faq";

export default function FAQ() {
  return (
    <section id="faq" className="py-20 px-4 bg-black">
      <div className="max-w-3xl mx-auto flex flex-col gap-12">
        <SectionHeader
          badge="FAQ"
          title="Questions we get from every hiring team."
          subtitle="Straight answers. No sales-speak."
          align="left"
        />

        <div className="flex flex-col gap-3">
          {faqs.map((item) => (
            <AccordionItem
              key={item.id}
              title={item.question}
              icon={item.icon ? <item.icon className="h-4 w-4" /> : undefined}
            >
              <div className="flex flex-col gap-2">
                <p className="text-sm text-text-secondary leading-relaxed font-medium">{item.answer.plain}</p>
                <p className="text-sm text-text-secondary leading-relaxed">{item.answer.full}</p>
              </div>
            </AccordionItem>
          ))}
        </div>
      </div>
    </section>
  );
}
