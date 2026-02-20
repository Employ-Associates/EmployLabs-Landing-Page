import React from "react";
import ScrollReveal from "../ScrollReveal";

export const FiveYearShift: React.FC = () => {
  return (
    <section className="relative py-32 bg-black">
      <div className="max-w-6xl px-6 mx-auto text-center">
        <ScrollReveal
          baseOpacity={0}
          enableBlur={true}
          baseRotation={2}
          blurStrength={6}
          containerClassName="mb-8"
          textClassName="text-4xl md:text-5xl font-medium text-white tracking-tight"
        >
          The 5-Year Workforce Intelligence Transformation
        </ScrollReveal>

        <ScrollReveal
          baseOpacity={0.1}
          enableBlur={true}
          baseRotation={2}
          blurStrength={6}
          containerClassName="mb-16"
          textClassName="text-lg! text-zinc-300 max-w-4xl mx-auto leading-relaxed"
        >
          By 2029, workforce intelligence will be as fundamental to business
          operations as data intelligence is today. AI-native companies will
          operate with structured human capability data, real-time workforce
          intelligence, and AI-driven talent operations.
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {[
            {
              year: "2025",
              change:
                "Structured competency graphs become the standard representation of human capability, replacing unstructured resumes and profiles.",
            },
            {
              year: "2026",
              change:
                "Workforce intelligence APIs enable seamless integration between HR systems, productivity tools, and AI agents.",
            },
            {
              year: "2027",
              change:
                "AI-native companies operate with continuous workforce intelligence, moving beyond periodic hiring to real-time talent optimization.",
            },
            {
              year: "2028",
              change:
                "Global workforce intelligence infrastructure enables borderless talent discovery and deployment at scale.",
            },
            {
              year: "2029",
              change:
                "Workforce intelligence becomes a core business infrastructure layer, powering AI-native operations across all industries.",
            },
          ].map((item, index) => (
            <ScrollReveal
              key={index}
              baseOpacity={0.1 + index * 0.05}
              enableBlur={true}
              baseRotation={2}
              blurStrength={6}
              containerClassName="p-6 border border-zinc-800 rounded-lg hover:border-blue-500/50 transition-colors bg-zinc-900/50"
            >
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-500/20 border border-blue-500/50 rounded-full mb-4">
                  <span className="text-blue-400 font-bold text-sm">
                    {item.year}
                  </span>
                </div>
                <p className="text-zinc-300 leading-relaxed">{item.change}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
