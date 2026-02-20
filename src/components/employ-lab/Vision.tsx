import React from "react";
import ScrollReveal from "../ScrollReveal";

export const Vision: React.FC = () => {
  return (
    <section id="vision" className="relative py-32 bg-black">
      <div className="max-w-5xl px-6 mx-auto text-center">
        <ScrollReveal
          baseOpacity={0}
          enableBlur={true}
          baseRotation={2}
          blurStrength={6}
          containerClassName="mb-12"
          textClassName="text-4xl md:text-5xl lg:text-7xl font-medium text-white tracking-tight"
        >
          The Workforce Intelligence Infrastructure
        </ScrollReveal>

        <ScrollReveal
          baseOpacity={0.1}
          enableBlur={true}
          baseRotation={2}
          blurStrength={6}
          containerClassName="mb-16"
          textClassName="text-lg! text-zinc-200 max-w-3xl mx-auto leading-relaxed! font-light!"
        >
          EMPLOY LABS is building the foundational AI infrastructure for
          workforce intelligence. We're not creating another hiring tool—we're
          establishing the data, intelligence, and operational layer that will
          power the next generation of AI-native workforce operations.
        </ScrollReveal>

        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16">
          <div className="p-6 border border-zinc-800 rounded-lg hover:border-zinc-600 transition-colors">
            <h3 className="text-xl font-semibold text-white mb-4">
              Data Foundation
            </h3>
            <p className="text-zinc-400 mb-4">
              Structured competency graphs and human capability indexing that
              serves as the intelligence layer for AI-native workforce
              operations.
            </p>
            <span className="text-blue-500 text-sm font-medium">
              Serpex Engine →
            </span>
          </div>

          <div className="p-6 border border-zinc-800 rounded-lg hover:border-zinc-600 transition-colors">
            <h3 className="text-xl font-semibold text-white mb-4">
              AI-Native Operations
            </h3>
            <p className="text-zinc-400 mb-4">
              End-to-end AI-powered workforce intelligence platform that
              operates beyond traditional hiring to power complete talent
              lifecycle management.
            </p>
            <span className="text-blue-500 text-sm font-medium">
              Employ Platform →
            </span>
          </div>

          <div className="p-6 border border-zinc-800 rounded-lg hover:border-zinc-600 transition-colors">
            <h3 className="text-xl font-semibold text-white mb-4">
              Research & Evolution
            </h3>
            <p className="text-zinc-400 mb-4">
              Continuous advancement of AI workforce intelligence through
              real-world deployment, research, and ecosystem collaboration.
            </p>
            <span className="text-blue-500 text-sm font-medium">
              Innovation Lab →
            </span>
          </div>
        </div> */}
      </div>
    </section>
  );
};
