"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { ArrowRight, FileText, Mic, Code2, ShieldCheck, GitMerge, FileCheck2 } from "lucide-react";

const steps = [
  { number: "01", icon: FileText, name: "Resume parsed", duration: "~2 min", category: "Intake", categoryColor: "rgba(99,102,241,0.80)", categoryBg: "rgba(99,102,241,0.10)", borderColor: "rgba(99,102,241,0.20)", bullets: ["Skills extracted automatically", "Baseline competency map generated", "Role-fit pre-screen completed"] },
  { number: "02", icon: Mic, name: "AI voice interview", duration: "45–60 min", category: "Assessment", categoryColor: "rgba(20,184,166,0.90)", categoryBg: "rgba(20,184,166,0.10)", borderColor: "rgba(20,184,166,0.22)", bullets: ["22 adaptive questions", "IRT difficulty curve calibration", "Bloom's taxonomy depth tracked"] },
  { number: "03", icon: Code2, name: "Live coding challenge", duration: "20–30 min", category: "Assessment", categoryColor: "rgba(20,184,166,0.90)", categoryBg: "rgba(20,184,166,0.10)", borderColor: "rgba(20,184,166,0.22)", bullets: ["Role-specific coding task", "Blind-scored by rubric", "Proctored in real time"] },
  { number: "04", icon: ShieldCheck, name: "Proctoring monitor", duration: "Passive — all phases", category: "Integrity", categoryColor: "rgba(245,158,11,0.90)", categoryBg: "rgba(245,158,11,0.10)", borderColor: "rgba(245,158,11,0.20)", bullets: ["Webcam + screen activity tracked", "Runs across all assessment phases", "Anomalies flagged for review"] },
  { number: "05", icon: GitMerge, name: "Cross-validation", duration: "~15 min (automated)", category: "Synthesis", categoryColor: "rgba(167,139,250,0.90)", categoryBg: "rgba(167,139,250,0.10)", borderColor: "rgba(167,139,250,0.20)", bullets: ["5 data sources corroborated", "Anomalies reviewed", "Confidence level assigned"] },
  { number: "06", icon: FileCheck2, name: "Intelligence brief delivered", duration: "Within 24 hours", category: "Output", categoryColor: "rgba(20,184,166,1)", categoryBg: "rgba(20,184,166,0.14)", borderColor: "rgba(20,184,166,0.30)", bullets: ["PDF + dashboard brief", "Delivered to your recruiter", "Panel-ready recommendations"] },
] as const;

interface StepCardProps {
  step: (typeof steps)[number];
  delay: number;
  inView: boolean;
  reduced: boolean;
  isLast: boolean;
}

function StepCard({ step, delay, inView, reduced, isLast }: StepCardProps) {
  const Icon = step.icon;
  return (
    <div className="relative flex flex-col items-center">
      <motion.div
        initial={reduced ? {} : { opacity: 0, y: 28 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.50, ease: "easeOut" as const, delay: reduced ? 0 : delay }}
        className="relative flex flex-col gap-4 rounded-2xl p-6 w-full h-full bg-zinc-900"
        style={{ border: `1px solid ${step.borderColor}`, minHeight: "220px" }}
      >
        <span className="font-mono-data text-[11px] font-semibold text-text-muted tracking-[0.15em]">{step.number}</span>
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-lg" style={{ background: step.categoryBg }}>
            <Icon className="h-5 w-5" style={{ color: step.categoryColor }} aria-hidden="true" />
          </div>
          <span className="text-[11px] font-semibold uppercase tracking-[0.14em] px-2 py-0.5 rounded-full" style={{ color: step.categoryColor, background: step.categoryBg }}>
            {step.category}
          </span>
        </div>
        <h3 className="text-base font-bold text-text-primary leading-snug">{step.name}</h3>
        <p className="font-mono-data text-xs font-medium" style={{ color: step.categoryColor, opacity: 0.75 }}>{step.duration}</p>
        <ul className="flex flex-col gap-1.5 mt-auto">
          {step.bullets.map((b) => (
            <li key={b} className="flex items-start gap-2 text-[13px] text-text-secondary leading-snug">
              <span className="mt-1.25 h-1.5 w-1.5 rounded-full shrink-0" style={{ background: step.categoryColor }} aria-hidden="true" />
              {b}
            </li>
          ))}
        </ul>
      </motion.div>
      {!isLast && (
        <div aria-hidden="true" className="hidden lg:flex absolute top-12 -right-4 z-10 items-center" style={{ width: "1.75rem" }}>
          <motion.div
            initial={reduced ? {} : { scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.4, ease: "easeOut" as const, delay: reduced ? 0 : delay + 0.3 }}
            className="origin-left h-px w-full"
            style={{ background: "rgba(255,255,255,0.10)" }}
          />
          <motion.div initial={reduced ? {} : { opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: reduced ? 0 : delay + 0.55, duration: 0.2 }}>
            <ArrowRight className="h-3 w-3 -ml-1 shrink-0" style={{ color: "rgba(255,255,255,0.18)" }} />
          </motion.div>
        </div>
      )}
    </div>
  );
}

export default function ProcessFlow() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });
  const reduced = useReducedMotion() ?? false;

  const scrollToSample = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById("sample")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="process" ref={sectionRef} className="py-20 md:py-28 px-4 overflow-hidden bg-black">
      <div className="max-w-7xl mx-auto flex flex-col gap-14">
        <motion.div
          initial={reduced ? {} : { opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45, ease: "easeOut" as const }}
          className="flex flex-col gap-2 text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-text-muted">How It Works</p>
          <h2 className="text-2xl md:text-3xl font-bold text-text-primary">77 minutes. One complete picture.</h2>
          <p className="text-base text-text-secondary max-w-xl mx-auto leading-relaxed mt-1">
            A structured journey — not a checklist. Every step feeds into the next, and every signal ends up in the brief.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7">
          {steps.map((step, i) => (
            <StepCard key={step.number} step={step} delay={0.08 + i * 0.11} inView={inView} reduced={reduced} isLast={i === steps.length - 1} />
          ))}
        </div>

        <motion.div
          initial={reduced ? {} : { opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: "easeOut" as const, delay: reduced ? 0 : 0.80 }}
          className="flex flex-col items-center gap-5 text-center"
        >
          <div className="w-full max-w-sm h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(20,184,166,0.30), transparent)" }} aria-hidden="true" />
          <p className="text-xl md:text-2xl font-semibold leading-snug max-w-lg" style={{ color: "rgba(20,184,166,0.95)" }}>
            24 hours after the assessment begins, your recruiter has a complete picture.
          </p>
          <motion.a
            href="#sample"
            onClick={scrollToSample}
            className="inline-flex items-center gap-2 text-sm font-semibold text-teal-400 hover:text-teal-300 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 rounded-lg px-2 py-1"
            whileHover={reduced ? {} : { x: 4 }}
            transition={{ duration: 0.15 }}
          >
            See the Brief
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
