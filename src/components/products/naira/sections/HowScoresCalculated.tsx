"use client";

import { motion } from "framer-motion";
import { Lightbulb, Code2, Server, MessageCircle, Sparkles, type LucideIcon } from "lucide-react";
import SectionHeader from "../ui/SectionHeader";
import Badge from "../ui/Badge";

type BadgeVariant = "default" | "teal" | "green" | "amber" | "red" | "indigo" | "purple" | "cyan";

interface Dimension {
  id: string;
  Icon: LucideIcon;
  title: string;
  badge: { text: string; variant: BadgeVariant };
  description: string;
  meta: { label: string; value: string }[];
  accentColor: string;
}

const dimensions: Dimension[] = [
  { id: "problem_solving", Icon: Lightbulb, title: "Problem Solving", badge: { text: "Core", variant: "teal" }, description: "How a candidate breaks down ambiguous problems, identifies edge cases, and arrives at working solutions under time constraints.", meta: [{ label: "Benchmark", value: "75th percentile" }, { label: "Confidence", value: "89% correlation" }], accentColor: "rgba(20,184,166,0.15)" },
  { id: "code_quality", Icon: Code2, title: "Code Quality", badge: { text: "Core", variant: "teal" }, description: "Readability, maintainability, naming conventions, and appropriate abstraction level across submitted work samples.", meta: [{ label: "Benchmark", value: "70th percentile" }, { label: "Confidence", value: "83% correlation" }], accentColor: "rgba(20,184,166,0.15)" },
  { id: "system_design", Icon: Server, title: "System Design", badge: { text: "Senior+", variant: "indigo" }, description: "Ability to design scalable, fault-tolerant systems including trade-off reasoning, capacity estimation, and component selection.", meta: [{ label: "Benchmark", value: "Score >= 3.5 (Staff)" }, { label: "Confidence", value: "79% correlation" }], accentColor: "rgba(99,102,241,0.15)" },
  { id: "communication", Icon: MessageCircle, title: "Communication", badge: { text: "All Roles", variant: "purple" }, description: "Clarity, precision, and active listening across written and verbal channels throughout the assessment process.", meta: [{ label: "Benchmark", value: "80th percentile" }, { label: "Confidence", value: "77% correlation" }], accentColor: "rgba(167,139,250,0.15)" },
  { id: "culture_add", Icon: Sparkles, title: "Culture Add", badge: { text: "Advisory", variant: "amber" }, description: "A non-blocking signal capturing how a candidate's working style complements, not just matches, the existing team.", meta: [{ label: "Benchmark", value: "Advisory only" }, { label: "Confidence", value: "18% at individual level" }], accentColor: "rgba(245,158,11,0.12)" },
];

function DimensionCard({ dim, index }: { dim: Dimension; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, ease: "easeOut" as const, delay: index * 0.07 }}
      className="flex flex-col rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800"
    >
      <div className="h-0.5 w-full" style={{ background: dim.accentColor }} />
      <div className="flex flex-col gap-4 p-6 flex-1">
        <div className="flex items-start gap-3">
          <div className="flex items-center justify-center w-10 h-10 rounded-xl shrink-0" style={{ background: dim.accentColor }}>
            <dim.Icon className="h-5 w-5 text-text-primary" aria-hidden="true" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <h3 className="text-base font-semibold text-text-primary">{dim.title}</h3>
              <Badge variant={dim.badge.variant} size="sm">{dim.badge.text}</Badge>
            </div>
          </div>
        </div>
        <p className="text-sm text-text-secondary leading-relaxed flex-1">{dim.description}</p>
        <div className="flex gap-4 pt-3 border-t border-border-subtle">
          {dim.meta.map((m) => (
            <div key={m.label} className="flex flex-col gap-0.5">
              <span className="text-[10px] uppercase tracking-widest text-text-muted font-semibold">{m.label}</span>
              <span className="text-xs text-text-secondary font-mono-data">{m.value}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function HowScoresCalculated() {
  return (
    <section id="calculation" className="py-20 px-4 bg-black">
      <div className="max-w-6xl mx-auto flex flex-col gap-12">
        <SectionHeader
          badge="SCORING DIMENSIONS"
          title="Five dimensions. Every candidate."
          subtitle="Each dimension is scored independently against a validated benchmark before we calculate your composite."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {dimensions.slice(0, 3).map((dim, i) => <DimensionCard key={dim.id} dim={dim} index={i} />)}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-2xl">
          {dimensions.slice(3).map((dim, i) => <DimensionCard key={dim.id} dim={dim} index={i + 3} />)}
        </div>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="flex items-center gap-2 text-xs text-text-muted"
        >
          <Badge variant="amber" size="sm">Advisory</Badge>
          <span>Advisory signals inform — they never gate a hiring decision.</span>
        </motion.p>
      </div>
    </section>
  );
}
