"use client";

import { motion } from "motion/react";
import {
  Eye,
  ShieldCheck,
  SlidersHorizontal,
  Wallet,
  Check,
  Sparkles,
} from "lucide-react";

/* -------------------------------------------------------------------------- */
/* Card sub-mocks — the real product surfaces for each control primitive.     */
/* -------------------------------------------------------------------------- */

function BudgetMock() {
  return (
    <div className="mt-auto space-y-3">
      <div className="rounded-sm border border-zinc-200 bg-zinc-50 p-4">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-[10px] uppercase font-mono tracking-widest text-zinc-400 mb-1">
              Campaign budget
            </div>
            <div className="text-2xl font-display text-zinc-900">
              $450 <span className="text-base text-zinc-400">/ $1,000</span>
            </div>
          </div>
          <div className="relative w-14 h-14">
            <div className="w-14 h-14 rounded-full border-[5px] border-zinc-200" />
            <div className="absolute inset-0 w-14 h-14 rounded-full border-[5px] border-transparent border-t-green-500 border-r-green-500" />
            <span className="absolute inset-0 flex items-center justify-center text-[11px] font-mono text-green-600">
              45%
            </span>
          </div>
        </div>
        <div className="mt-3 h-2 w-full bg-zinc-200 rounded-full overflow-hidden">
          <div className="h-full w-[45%] bg-green-500 rounded-full" />
        </div>
      </div>
      <div className="flex items-center gap-2.5 rounded-sm border border-orange-200 bg-orange-50/70 px-3.5 py-2.5">
        <Wallet className="w-4 h-4 text-orange-600 shrink-0" />
        <p className="text-[12.5px] text-zinc-700 leading-snug">
          Stays within your cap — asks before spending beyond it.
        </p>
      </div>
    </div>
  );
}

function AutonomyMock() {
  const rows = [
    { stage: "Sourcing", mode: "auto" as const },
    { stage: "Outreach", mode: "review" as const },
    { stage: "Interviews", mode: "auto" as const },
    { stage: "Offers", mode: "review" as const },
  ];
  return (
    <div className="mt-auto space-y-3">
      {rows.map((a) => (
        <div key={a.stage} className="flex items-center justify-between">
          <span className="text-[13px] font-medium text-zinc-800">{a.stage}</span>
          <div className="flex text-[10px] font-medium">
            <span
              className={`px-2.5 py-1 rounded-l-sm border ${
                a.mode === "review"
                  ? "bg-orange-50 border-orange-200 text-orange-600"
                  : "border-zinc-200 text-zinc-400"
              }`}
            >
              Review
            </span>
            <span
              className={`px-2.5 py-1 rounded-r-sm border -ml-px ${
                a.mode === "auto"
                  ? "bg-green-50 border-green-200 text-green-600"
                  : "border-zinc-200 text-zinc-400"
              }`}
            >
              Full auto
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

const GATES: {
  tone: "amber" | "green";
  label: string;
  age: string;
  title: string;
  preview: string;
  primary: string;
  secondary: string;
}[] = [
  {
    tone: "amber",
    label: "Approve",
    age: "just now",
    title: "Approve outreach — 38 candidates",
    preview: "Email + WhatsApp · personalized",
    primary: "Approve & send",
    secondary: "Hold",
  },
  {
    tone: "green",
    label: "Offer",
    age: "1m ago",
    title: "Authorize offer — Alex Rivera",
    preview: "98 / 100 fit · $185k base suggested",
    primary: "Authorize",
    secondary: "Adjust",
  },
];

function GatesMock() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      {/* Automation status spans both columns */}
      <div className="sm:col-span-2 rounded-sm border border-zinc-200 bg-zinc-50 overflow-hidden">
        <div className="border-l-[3px] border-l-green-500 p-3.5 flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1 rounded-full border border-green-600/40 bg-green-600/[0.12] px-2 py-0.5 text-[11px] font-medium text-green-700">
                <Check className="w-3 h-3" />
                Running
              </span>
              <span className="inline-flex items-center gap-1 text-[11px] text-zinc-500">
                <Sparkles className="w-3 h-3" />
                Automation
              </span>
            </div>
            <p className="mt-1.5 text-[13.5px] font-semibold text-zinc-900">
              Meera is running the Lead SRE pipeline
            </p>
          </div>
          <span className="text-[12px] text-zinc-500 hidden md:block">running on its own · 2 for you</span>
        </div>
      </div>

      {GATES.map((g) => {
        const edge = g.tone === "amber" ? "border-l-orange-400" : "border-l-green-500";
        const badge =
          g.tone === "amber"
            ? "border-amber-500/40 bg-amber-500/[0.15] text-amber-700"
            : "border-green-600/40 bg-green-600/[0.12] text-green-700";
        return (
          <div key={g.title} className="rounded-sm border border-zinc-200 bg-white overflow-hidden">
            <div className={`border-l-[3px] ${edge} p-3.5`}>
              <div className="flex items-center gap-2">
                <span className={`inline-flex items-center rounded-full border px-2 py-0.5 text-[11px] font-medium ${badge}`}>
                  {g.label}
                </span>
                <span className="text-[11.5px] text-zinc-400">Meera · {g.age}</span>
              </div>
              <p className="mt-1.5 text-[13.5px] font-semibold text-zinc-900">{g.title}</p>
              <p className="mt-0.5 text-[12px] text-zinc-500">{g.preview}</p>
              <div className="mt-3 flex items-center gap-2">
                <button className="h-8 rounded-sm bg-zinc-900 px-3 text-xs font-medium text-white hover:bg-zinc-800 transition-colors">
                  {g.primary}
                </button>
                <button className="h-8 rounded-sm border border-zinc-200 px-3 text-xs font-medium text-zinc-600 hover:bg-zinc-50 transition-colors">
                  {g.secondary}
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

/* -------------------------------------------------------------------------- */

const cardFade = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

export function HumanAtGates() {
  return (
    <section className="py-32 md:py-40 relative overflow-hidden bg-zinc-100">
      {/* Background = the old hero image, with a soft light wash so the white
          cards + dark text stay legible on top. */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "url(/assets/images/custom_hero_bg.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 pointer-events-none bg-white/55" />

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center justify-center text-center mb-12 md:mb-14 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/70 backdrop-blur-md border border-zinc-200/80 text-zinc-600 text-[10px] font-mono uppercase tracking-widest mb-6 shadow-sm before:absolute before:inset-x-3 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-white/80 before:to-transparent before:content-['']"
          >
            <Eye className="w-3.5 h-3.5 text-zinc-900" />
            <span>Human In The Loop</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-display text-zinc-900 tracking-tight leading-[1.05] mb-6"
          >
            Autonomous by default.
            <br />
            <span className="text-zinc-500">Yours to control.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-zinc-600 leading-relaxed"
          >
            You decide how hands-off to be. It runs the whole funnel on its own
            — and only checks in where you asked, or when a call genuinely needs you.
          </motion.p>
        </div>

        {/* Bento: two cards on top, Approval gates spans the full row below */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Budget & spend caps */}
          <motion.div
            {...cardFade}
            transition={{ delay: 0.15 }}
            className="flex flex-col bg-white rounded-sm border border-zinc-200 p-7 shadow-xl shadow-black/[0.03]"
          >
            <div className="w-10 h-10 rounded-sm bg-zinc-900 text-white flex items-center justify-center mb-4">
              <Wallet className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-display text-zinc-900 mb-1.5">Budget &amp; spend caps</h3>
            <p className="text-sm text-zinc-600 leading-relaxed mb-6">
              A hard per-job budget and spend caps. Meera stops at the ceiling and asks before
              spending another credit.
            </p>
            <BudgetMock />
          </motion.div>

          {/* Per-stage autonomy */}
          <motion.div
            {...cardFade}
            transition={{ delay: 0.25 }}
            className="flex flex-col bg-white rounded-sm border border-zinc-200 p-7 shadow-xl shadow-black/[0.03]"
          >
            <div className="w-10 h-10 rounded-sm bg-zinc-900 text-white flex items-center justify-center mb-4">
              <SlidersHorizontal className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-display text-zinc-900 mb-1.5">Per-stage autonomy</h3>
            <p className="text-sm text-zinc-600 leading-relaxed mb-6">
              Dial each stage from Review-all to Full-auto. Tighten a brand-new role, let a
              high-volume one run on its own.
            </p>
            <AutonomyMock />
          </motion.div>

          {/* Approval gates — full row */}
          <motion.div
            {...cardFade}
            transition={{ delay: 0.3 }}
            className="md:col-span-2 bg-white rounded-sm border border-zinc-200 p-7 shadow-xl shadow-black/[0.03] grid grid-cols-1 lg:grid-cols-5 gap-8 items-start"
          >
            <div className="lg:col-span-2">
              <div className="w-10 h-10 rounded-sm bg-zinc-900 text-white flex items-center justify-center mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-display text-zinc-900 mb-1.5">Step in when it matters</h3>
              <p className="text-sm text-zinc-600 leading-relaxed">
                It keeps running on its own. It only pauses where you&rsquo;ve asked for a say —
                or when a decision genuinely needs a human. Everything you need to decide is right
                there; approve in a click and it keeps moving.
              </p>
            </div>
            <div className="lg:col-span-3">
              <GatesMock />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
