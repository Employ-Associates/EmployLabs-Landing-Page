"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { CheckCircle, ArrowRight } from "lucide-react";

const components = [
  { label: "Voice interview" },
  { label: "Coding challenge" },
  { label: "Behavioral screen" },
];

const reassurances = [
  "No trick questions. The rubric is public.",
  "You'll receive a summary of your own scores after completion.",
  "77 minutes total. Your time is respected.",
  "Nothing you say is used outside this hiring process.",
];

export default function CandidateSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });
  const reduced = useReducedMotion() ?? false;

  const scrollToFaq = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById("faq")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="candidate-experience"
      ref={sectionRef}
      className="py-20 md:py-28 px-4 bg-black"
    >
      <div className="max-w-3xl mx-auto flex flex-col items-center gap-10 text-center">
        <motion.p
          initial={reduced ? {} : { opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.40, ease: "easeOut" as const }}
          className="text-xs font-semibold uppercase tracking-[0.2em] text-text-muted"
        >
          For candidates taking the assessment
        </motion.p>

        <motion.h2
          initial={reduced ? {} : { opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45, ease: "easeOut" as const, delay: reduced ? 0 : 0.08 }}
          className="text-3xl md:text-4xl font-bold text-text-primary leading-tight -mt-6"
        >
          What am I walking into?
        </motion.h2>

        <div className="flex flex-wrap justify-center gap-3 -mt-4">
          {components.map((comp, i) => (
            <motion.span
              key={comp.label}
              initial={reduced ? {} : { opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.38, ease: "easeOut" as const, delay: reduced ? 0 : 0.18 + i * 0.09 }}
              className="text-[13px] font-medium px-3.5 py-1.5 rounded-full"
              style={{ color: "rgba(20,184,166,0.85)", background: "rgba(20,184,166,0.07)", border: "1px solid rgba(20,184,166,0.18)" }}
            >
              {comp.label}
            </motion.span>
          ))}
        </div>

        <ul className="flex flex-col gap-4 text-left w-full max-w-sm">
          {reassurances.map((point, i) => (
            <motion.li
              key={point}
              initial={reduced ? {} : { opacity: 0, x: -10 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.40, ease: "easeOut" as const, delay: reduced ? 0 : 0.44 + i * 0.10 }}
              className="flex items-start gap-3"
            >
              <CheckCircle className="h-4 w-4 shrink-0 mt-0.5" style={{ color: "rgba(16,185,129,0.85)" }} aria-hidden="true" />
              <span className="text-[14px] text-text-secondary leading-snug">{point}</span>
            </motion.li>
          ))}
        </ul>

        <motion.a
          href="#faq"
          onClick={scrollToFaq}
          initial={reduced ? {} : { opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.40, ease: "easeOut" as const, delay: reduced ? 0 : 0.88 }}
          className="inline-flex items-center gap-1.5 text-[13px] text-zinc-500 hover:text-white transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-lg px-2 py-1"
        >
          Questions before your assessment?&nbsp;
          <span className="font-semibold text-white">See candidate FAQ</span>
          <ArrowRight className="h-3.5 w-3.5 text-white" aria-hidden="true" />
        </motion.a>
      </div>
    </section>
  );
}
