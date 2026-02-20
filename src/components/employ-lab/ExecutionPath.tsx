import React from "react";
import ScrollReveal from "../ScrollReveal";

export const ExecutionPath: React.FC = () => {
  return (
    <section className="relative py-32 bg-black">
      <div className="max-w-6xl px-6 mx-auto">
        <ScrollReveal
          baseOpacity={0}
          enableBlur={true}
          baseRotation={2}
          blurStrength={6}
          containerClassName="mb-8 text-center"
          textClassName="text-4xl md:text-5xl lg:text-7xl font-medium text-white tracking-tight"
        >
          Infrastructure-First Execution
        </ScrollReveal>

        <ScrollReveal
          baseOpacity={0.1}
          enableBlur={true}
          baseRotation={2}
          blurStrength={6}
          containerClassName="mb-16 text-center"
          textClassName="text-lg! text-zinc-200 max-w-4xl mx-auto font-light! leading-relaxed"
        >
          We're not building another hiring application. We're constructing the
          foundational infrastructure layers that will power the next generation
          of AI-native workforce operations. Our approach prioritizes data
          structures, intelligence APIs, and ecosystem enablement over user
          interfaces.
        </ScrollReveal>

        {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <ScrollReveal
              baseOpacity={0.1}
              enableBlur={true}
              baseRotation={2}
              blurStrength={6}
              containerClassName="mb-8"
              textClassName="text-2xl font-semibold text-white"
            >
              Core Infrastructure Layers
            </ScrollReveal>

            <div className="space-y-6">
              {[
                {
                  layer: "Data Foundation",
                  description:
                    "Structured competency graphs and human capability indexing that serves as the intelligence layer for AI systems.",
                },
                {
                  layer: "Intelligence APIs",
                  description:
                    "Programmatic access to workforce intelligence, enabling integration with any AI system or workflow.",
                },
                {
                  layer: "Agent Framework",
                  description:
                    "AI agents that continuously learn from real-world deployment, improving workforce intelligence accuracy.",
                },
              ].map((item, index) => (
                <ScrollReveal
                  key={index}
                  baseOpacity={0.2 + index * 0.1}
                  enableBlur={true}
                  baseRotation={2}
                  blurStrength={6}
                  containerClassName="p-6 bg-zinc-900/50 border border-zinc-700 rounded-lg"
                >
                  <h3 className="text-lg font-semibold text-blue-400 mb-2">
                    {item.layer}
                  </h3>
                  <p className="text-zinc-300 leading-relaxed">
                    {item.description}
                  </p>
                </ScrollReveal>
              ))}
            </div>
          </div>

          <div>
            <ScrollReveal
              baseOpacity={0.1}
              enableBlur={true}
              baseRotation={2}
              blurStrength={6}
              containerClassName="mb-8"
              textClassName="text-2xl font-semibold text-white"
            >
              Real-World Validation
            </ScrollReveal>

            <div className="space-y-6">
              {[
                {
                  approach: "Production Deployment",
                  description:
                    "Every component is battle-tested through real recruiting operations at scale.",
                },
                {
                  approach: "Ecosystem Co-Evolution",
                  description:
                    "Infrastructure improves through ecosystem adoption and feedback loops.",
                },
                {
                  approach: "Research Integration",
                  description:
                    "Academic and industry research continuously enhances the intelligence layer.",
                },
              ].map((item, index) => (
                <ScrollReveal
                  key={index}
                  baseOpacity={0.2 + index * 0.1}
                  enableBlur={true}
                  baseRotation={2}
                  blurStrength={6}
                  containerClassName="p-6 bg-zinc-900/50 border border-zinc-700 rounded-lg"
                >
                  <h3 className="text-lg font-semibold text-green-400 mb-2">
                    {item.approach}
                  </h3>
                  <p className="text-zinc-300 leading-relaxed">
                    {item.description}
                  </p>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};
