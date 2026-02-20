import React from "react";
import ChromaGrid, { ChromaItem } from "../ChromaGrid";
import ScrollReveal from "../ScrollReveal";

export const ThreePillarsSection: React.FC = () => {
  const items: ChromaItem[] = [
    {
      image:
        "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=500&auto=format&fit=crop&q=60",
      title: "EmployAI Platform",
      subtitle:
        "Envisioning a future where job descriptions evolve into dynamic skill intelligence graphs.",
      handle: "CORE",
      borderColor: "#3B82F6",
      gradient: "linear-gradient(145deg, #1d4ed8, #000)",
      url: "/employai",
    },
    {
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb",
      title: "Naira",
      subtitle:
        "Revolutionary AI agents that redefine candidate assessment through intelligent conversations.",
      handle: "AGENT",
      borderColor: "#A855F7",
      gradient: "linear-gradient(180deg, #7e22ce, #000)",
      url: "/employai",
    },
    {
      image: "https://images.unsplash.com/photo-1743796055664-3473eedab36e",
      title: "AI People Engine",
      subtitle:
        "A visionary search paradigm delivering unparalleled precision in human discovery.",
      handle: "SEARCH",
      borderColor: "#10B981",
      gradient: "linear-gradient(180deg, #059669, #000)",
      url: "/people-search-engine",
    },
  ];

  return (
    <section
      id="platform"
      className="py-32 overflow-hidden bg-black scroll-mt-20"
    >
      {/* Section Header */}
      <div className="max-w-3xl mx-auto mb-20 text-center">
        {/* <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/50 border border-zinc-800 text-[10px] uppercase tracking-widest font-medium text-zinc-400">
          Product Suite
        </div> */}
        <ScrollReveal
          baseOpacity={0}
          enableBlur
          blurStrength={6}
          containerClassName="mb-8 text-center"
          textClassName="text-4xl md:text-6xl font-medium text-white tracking-tight leading-[1.1]"
        >
          Three Pillars.
          {/* <br /> */}
          {/* <span className="text-zinc-400">One operating system.</span> */}
        </ScrollReveal>
        <ScrollReveal
          baseOpacity={0.1}
          enableBlur
          blurStrength={6}
          containerClassName="text-center"
          textClassName="text-lg font-light leading-relaxed text-zinc-400"
        >
          Envisioning a revolutionary AI ecosystem where fragmented solutions
          converge into a singular intelligence that perceives, evolves, and
          pioneers workforce transformation.
        </ScrollReveal>
      </div>

      <div className="relative z-10 w-full px-6">
        <ChromaGrid items={items} radius={400} damping={0.45} fadeOut={0.6} />
      </div>
    </section>
  );
};
