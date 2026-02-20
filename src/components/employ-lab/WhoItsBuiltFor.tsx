import React from "react";
import ScrollReveal from "../ScrollReveal";

export const WhoItsBuiltFor: React.FC = () => {
  return (
    <section className="relative py-32">
      <div className="max-w-5xl px-6 mx-auto">
        <ScrollReveal
          baseOpacity={0}
          enableBlur={true}
          baseRotation={2}
          blurStrength={6}
          containerClassName="mb-8 text-center"
          textClassName="text-4xl md:text-5xl lg:text-7xl font-medium text-white tracking-tight"
        >
          Built for AI-Native Organizations
        </ScrollReveal>

        <ScrollReveal
          baseOpacity={0.1}
          enableBlur={true}
          baseRotation={2}
          blurStrength={6}
          containerClassName="mb-16 text-center"
          textClassName="text-lg! text-zinc-100 max-w-3xl mx-auto leading-relaxed font-light!"
        >
          Organizations that operate with AI as a core capability, not just a
          tool. Companies where workforce intelligence is infrastructure, not an
          application.
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "AI-First Companies",
              description:
                "Organizations where AI is core to business operations and workforce strategy is AI-driven from the ground up.",
              focus: "AI-native operations",
            },
            {
              title: "Global Capability Centers",
              description:
                "GCCs and distributed teams that need workforce intelligence infrastructure to operate at global scale.",
              focus: "Global workforce orchestration",
            },
            {
              title: "Platform Builders",
              description:
                "Companies building the next generation of business platforms that require workforce intelligence as a foundational layer.",
              focus: "Infrastructure integration",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="flex flex-col h-full text-center p-8 bg-linear-to-br from-black to-zinc-800 border border-zinc-700 rounded-xl hover:border-zinc-600 transition-colors"
            >
              {index === 0 && (
                <svg
                  width="64"
                  height="64"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mb-4 text-white mx-auto"
                >
                  <circle cx="6" cy="6" r="2" fill="currentColor" />
                  <circle cx="18" cy="6" r="2" fill="currentColor" />
                  <circle cx="12" cy="12" r="2" fill="currentColor" />
                  <circle cx="6" cy="18" r="2" fill="currentColor" />
                  <circle cx="18" cy="18" r="2" fill="currentColor" />
                  <line
                    x1="6"
                    y1="6"
                    x2="18"
                    y2="6"
                    stroke="currentColor"
                    strokeWidth="1"
                  />
                  <line
                    x1="6"
                    y1="6"
                    x2="12"
                    y2="12"
                    stroke="currentColor"
                    strokeWidth="1"
                  />
                  <line
                    x1="18"
                    y1="6"
                    x2="12"
                    y2="12"
                    stroke="currentColor"
                    strokeWidth="1"
                  />
                  <line
                    x1="12"
                    y1="12"
                    x2="6"
                    y2="18"
                    stroke="currentColor"
                    strokeWidth="1"
                  />
                  <line
                    x1="12"
                    y1="12"
                    x2="18"
                    y2="18"
                    stroke="currentColor"
                    strokeWidth="1"
                  />
                  <line
                    x1="6"
                    y1="18"
                    x2="18"
                    y2="18"
                    stroke="currentColor"
                    strokeWidth="1"
                  />
                </svg>
              )}
              {index === 1 && (
                <svg
                  width="64"
                  height="64"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mb-4 text-white mx-auto"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                  />
                  <path d="M2 12h20" stroke="currentColor" strokeWidth="1" />
                  <path d="M12 2v20" stroke="currentColor" strokeWidth="1" />
                  <ellipse
                    cx="12"
                    cy="12"
                    rx="6"
                    ry="10"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                  />
                  <ellipse
                    cx="12"
                    cy="12"
                    rx="10"
                    ry="6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                  />
                </svg>
              )}
              {index === 2 && (
                <svg
                  width="64"
                  height="64"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mb-4 text-white mx-auto"
                >
                  <rect
                    x="4"
                    y="16"
                    width="16"
                    height="2"
                    fill="currentColor"
                  />
                  <rect
                    x="6"
                    y="12"
                    width="12"
                    height="2"
                    fill="currentColor"
                  />
                  <rect x="8" y="8" width="8" height="2" fill="currentColor" />
                  <rect x="10" y="4" width="4" height="2" fill="currentColor" />
                </svg>
              )}
              <h3 className="text-xl font-semibold text-white mb-3">
                {item.title}
              </h3>
              <p className="text-zinc-400 leading-relaxed mb-4">
                {item.description}
              </p>
              <div className="mt-auto self-center inline-flex items-center px-3 py-1 bg-white text-zinc-800 rounded-full text-sm text-center">
                {item.focus}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
