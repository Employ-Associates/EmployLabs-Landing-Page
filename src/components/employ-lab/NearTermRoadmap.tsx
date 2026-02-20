import React from "react";
import ScrollReveal from "../ScrollReveal";

export const NearTermRoadmap: React.FC = () => {
  return (
    <section className="relative py-32 bg-black">
      <div className="max-w-5xl px-6 mx-auto">
        <ScrollReveal
          baseOpacity={0}
          enableBlur={true}
          baseRotation={2}
          blurStrength={6}
          containerClassName="mb-8 text-center"
          textClassName="text-4xl md:text-5xl lg:text-7xl font-medium text-white tracking-tight"
        >
          Research Map
        </ScrollReveal>

        <ScrollReveal
          baseOpacity={0.1}
          enableBlur={true}
          baseRotation={2}
          blurStrength={6}
          containerClassName="mb-16 text-center"
          textClassName="text-lg! text-zinc-300 max-w-3xl mx-auto leading-relaxed font-light!"
        >
          Our research focuses on solving humanity's greatest coordination
          challenge: deciding where each person should spend their time.
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {[
            {
              date: "Mission",
              title:
                "Rebuilding hiring for an AI-first world with automated evaluation.",
            },
            {
              date: "Belief",
              title:
                "The critical role of structured human data in enterprise AI adoption.",
            },
            {
              date: "Research",
              title:
                "Advancing semantic search and AI-human collaboration in talent discovery.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="group cursor-pointer p-6 border rounded-lg bg-zinc-900/50 border-zinc-700 hover:border-blue-500/50 transition-all"
            >
              <div className="text-[10px] text-zinc-600 uppercase tracking-widest mb-4 border-l-2 border-transparent pl-3 group-hover:border-blue-500 transition-all">
                {item.date}
              </div>
              <h4 className="text-lg font-medium text-zinc-300 group-hover:text-white transition-colors pl-3 leading-snug">
                {item.title}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
