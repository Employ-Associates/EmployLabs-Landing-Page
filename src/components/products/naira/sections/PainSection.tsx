"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

const stats = [
  {
    number: "14%",
    label: "Predictive validity of unstructured interviews",
    citation: "Schmidt & Hunter, 1998",
    color: "rgba(239,68,68,0.80)",
    borderColor: "rgba(239,68,68,0.18)",
  },
  {
    number: "3×",
    label: "Cost of a bad hire relative to annual salary",
    citation: "SHRM 2023",
    color: "rgba(245,158,11,0.90)",
    borderColor: "rgba(245,158,11,0.18)",
  },
  {
    number: "46",
    unit: "days",
    label: "Average time-to-hire for a technical role",
    citation: "LinkedIn Talent Trends 2023",
    color: "rgba(99,102,241,0.90)",
    borderColor: "rgba(99,102,241,0.18)",
  },
] as const;

interface StatCardProps {
  number: string;
  unit?: string;
  label: string;
  citation: string;
  color: string;
  borderColor: string;
  delay: number;
  inView: boolean;
  reduced: boolean;
}

function StatCard({ number, unit, label, citation, color, borderColor, delay, inView, reduced }: StatCardProps) {
  return (
    <motion.div
      initial={reduced ? {} : { opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, ease: "easeOut" as const, delay: reduced ? 0 : delay }}
      className="flex flex-col justify-between gap-5 rounded-2xl p-8 flex-1 min-w-0 bg-zinc-900"
      style={{ border: `1px solid ${borderColor}` }}
    >
      <div className="flex items-baseline gap-1.5">
        <span className="font-mono-data font-black tabular-nums leading-none" style={{ fontSize: "clamp(3.5rem, 9vw, 5.5rem)", color }}>
          {number}
        </span>
        {unit && (
          <span className="font-mono-data font-semibold" style={{ fontSize: "clamp(1.5rem, 4vw, 2.5rem)", color, opacity: 0.75 }}>
            {unit}
          </span>
        )}
      </div>
      <p className="text-base font-medium text-text-secondary leading-snug">{label}</p>
      <p className="text-[11px] uppercase tracking-[0.14em] text-text-muted font-medium">{citation}</p>
    </motion.div>
  );
}

export default function PainSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });
  const reduced = useReducedMotion() ?? false;

  return (
    <section
      ref={sectionRef}
      className="relative px-4 py-20 md:py-28 overflow-hidden bg-black"
    >
      <div className="absolute top-0 inset-x-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(239,68,68,0.20), transparent)" }} aria-hidden="true" />

      <div className="max-w-6xl mx-auto flex flex-col gap-12">
        <motion.p
          initial={reduced ? {} : { opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45, ease: "easeOut" as const }}
          className="text-xs font-semibold uppercase tracking-[0.2em] text-text-muted text-center"
        >
          Why the old way fails
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {stats.map((stat, i) => (
            <StatCard key={stat.number + stat.label} {...stat} delay={0.12 + i * 0.13} inView={inView} reduced={reduced} />
          ))}
        </div>

        <motion.p
          initial={reduced ? {} : { opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: "easeOut" as const, delay: reduced ? 0 : 0.52 }}
          className="text-center text-base md:text-lg text-text-muted max-w-2xl mx-auto leading-relaxed"
        >
          These aren&rsquo;t EmployLabs numbers.{" "}
          <span className="text-text-secondary">These are industry benchmarks.</span>{" "}
          We built EmployLabs to change all three of them.
        </motion.p>
      </div>

      <div className="absolute bottom-0 inset-x-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)" }} aria-hidden="true" />
    </section>
  );
}
