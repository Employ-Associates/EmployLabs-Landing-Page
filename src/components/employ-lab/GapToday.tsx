import React from "react";
import ScrollReveal from "../ScrollReveal";

export const GapToday: React.FC = () => {
  return (
    <section className="relative py-32 bg-zinc-900">
      <div className="max-w-5xl px-6 mx-auto">
        <ScrollReveal
          baseOpacity={0}
          enableBlur={true}
          baseRotation={2}
          blurStrength={6}
          containerClassName="mb-8 text-center"
          textClassName="text-4xl md:text-5xl font-medium text-white tracking-tight"
        >
          The Infrastructure Gap
        </ScrollReveal>

        <ScrollReveal
          baseOpacity={0.1}
          enableBlur={true}
          baseRotation={2}
          blurStrength={6}
          containerClassName="mb-16 text-center"
          textClassName="text-lg! text-zinc-300 max-w-3xl mx-auto leading-relaxed"
        >
          Current workforce systems were built for human operators, not AI
          systems. They lack the structured data, intelligence layer, and
          operational frameworks required for AI-native workforce operations.
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {[
            {
              problem: "Unstructured Human Data",
              impact:
                "AI systems cannot understand or operate on human capabilities represented as text documents and subjective assessments.",
            },
            {
              problem: "No Intelligence Layer",
              impact:
                "Workforce data exists in silos with no unified intelligence layer for AI systems to access and utilize.",
            },
            {
              problem: "Subjective Decision Making",
              impact:
                "Hiring relies on human judgment rather than structured, measurable competency frameworks that AI can process.",
            },
            {
              problem: "Legacy Operational Models",
              impact:
                "Systems designed for batch hiring cycles cannot support the continuous, real-time workforce intelligence AI systems require.",
            },
            {
              problem: "No API-First Architecture",
              impact:
                "Workforce intelligence isn't accessible as infrastructure—it's trapped in monolithic applications with no programmatic access.",
            },
          ].map((item, index) => (
            <ScrollReveal
              key={index}
              baseOpacity={0.1 + index * 0.05}
              enableBlur={true}
              baseRotation={2}
              blurStrength={6}
              containerClassName="p-6 border rounded-lg bg-black/50 border-zinc-700 hover:border-red-500/50 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-3 h-3 mt-1 bg-red-400 rounded-full"></div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {item.problem}
                  </h3>
                  <p className="leading-relaxed text-zinc-300">{item.impact}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
