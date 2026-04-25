"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle2,
  XCircle,
  AlertTriangle,
  ChevronRight,
  MessageSquare,
} from "lucide-react";

/* ─── Helpers ────────────────────────────────────────────────────────────── */

function SourceChip({ label, variant }: { label: string; variant: "teal" | "indigo" | "amber" | "red" | "cyan" }) {
  const styles: Record<string, { color: string; bg: string; border: string }> = {
    teal:   { color: "#14b8a6", bg: "rgba(20,184,166,0.08)",  border: "rgba(20,184,166,0.25)"  },
    indigo: { color: "#6366f1", bg: "rgba(99,102,241,0.08)",  border: "rgba(99,102,241,0.25)"  },
    amber:  { color: "#f59e0b", bg: "rgba(245,158,11,0.08)",  border: "rgba(245,158,11,0.25)"  },
    red:    { color: "#ef4444", bg: "rgba(239,68,68,0.08)",   border: "rgba(239,68,68,0.25)"   },
    cyan:   { color: "#22d3ee", bg: "rgba(34,211,238,0.08)",  border: "rgba(34,211,238,0.25)"  },
  };
  const s = styles[variant];
  return (
    <span className="text-[9px] font-bold px-1.5 py-0.5 uppercase tracking-wider rounded" style={{ color: s.color, background: s.bg, border: `1px solid ${s.border}` }}>
      {label}
    </span>
  );
}

function ConfBadge({ level }: { level: "HIGH" | "MEDIUM" | "LOW" }) {
  const styles = {
    HIGH:   { color: "#14b8a6", bg: "rgba(20,184,166,0.10)" },
    MEDIUM: { color: "#f59e0b", bg: "rgba(245,158,11,0.10)" },
    LOW:    { color: "#ef4444", bg: "rgba(239,68,68,0.10)"  },
  };
  const s = styles[level];
  return (
    <span className="text-[9px] font-bold px-1.5 py-0.5 rounded uppercase tracking-wider" style={{ color: s.color, background: s.bg }}>
      {level}
    </span>
  );
}

const ALIGN_LABELS = ["None", "Weak", "Neutral", "Aligned", "Perfect"] as const;
const ALIGN_COLORS = ["#ef4444", "rgba(239,68,68,0.4)", "rgba(255,255,255,0.2)", "rgba(20,184,166,0.5)", "#14b8a6"];

function AlignmentMeter() {
  const score = 81;
  return (
    <div className="p-4 rounded-lg mb-1" style={{ background: "#0f0f0f", border: "1px solid rgba(255,255,255,0.08)" }}>
      <div className="flex items-center justify-between mb-3">
        <span className="text-[12px] font-bold uppercase tracking-wider text-text-primary">Role Alignment</span>
        <div className="flex items-center gap-1.5 text-[10px] text-text-muted">
          <span className="w-1.5 h-1.5 rounded-full bg-teal-500 inline-block" />
          HIGH Confidence · 5 sources
        </div>
      </div>
      <div className="relative flex h-1 gap-0.5 mb-2">
        {ALIGN_COLORS.map((color, i) => (
          <div key={i} className="flex-1 rounded-sm" style={{ background: color }} />
        ))}
        <div className="absolute -top-1.5 w-3.5 h-3.5 rounded-full z-10" style={{ left: `calc(${score}% - 7px)`, background: "#14b8a6", border: "2px solid #080808", boxShadow: "0 0 8px rgba(20,184,166,0.6)" }} />
      </div>
      <div className="flex gap-0.5 mb-2.5">
        {ALIGN_LABELS.map((label) => (
          <div key={label} className="flex-1 text-center text-[9px] uppercase tracking-wider" style={{ color: label === "Aligned" ? "#14b8a6" : "rgba(255,255,255,0.3)", fontWeight: label === "Aligned" ? 800 : 600 }}>
            {label}
          </div>
        ))}
      </div>
      <div className="flex items-center gap-1.5 flex-wrap">
        <span className="text-[9px] text-text-muted">Based on:</span>
        <SourceChip label="Interview" variant="teal" />
        <SourceChip label="GitHub" variant="indigo" />
        <SourceChip label="Resume" variant="cyan" />
        <SourceChip label="Code Test" variant="indigo" />
        <SourceChip label="RAR" variant="amber" />
      </div>
    </div>
  );
}

interface CompRow { index: number; title: string; score: number; benchmark: number; weight: string; confidence: "HIGH" | "MEDIUM" | "LOW"; sources: Array<{ label: string; variant: "teal" | "indigo" | "amber" | "red" | "cyan" }>; }

function CompetencyRow({ comp }: { comp: CompRow }) {
  const pass = comp.score >= comp.benchmark;
  const scoreColor = pass ? "#10b981" : "#ef4444";
  const trackFill = pass ? "#10b981" : "#ef4444";
  return (
    <div className="px-4 py-3 rounded-lg mb-2" style={{ background: "#0f0f0f", border: `1px solid ${pass ? "rgba(16,185,129,0.2)" : "rgba(239,68,68,0.2)"}` }}>
      <div className="flex items-start justify-between gap-2 mb-2">
        <div>
          <span className="text-[12px] font-semibold text-text-primary">{comp.index}. {comp.title}</span>
          <div className="flex items-center gap-1.5 mt-1 flex-wrap">
            <span className="text-[9px] px-1.5 py-0.5 rounded text-text-muted" style={{ background: "rgba(255,255,255,0.05)" }}>Weight {comp.weight}</span>
            <ConfBadge level={comp.confidence} />
            {comp.sources.map((s) => <SourceChip key={s.label} label={s.label} variant={s.variant} />)}
          </div>
        </div>
        <div className="text-right shrink-0">
          <div className="text-[20px] font-extrabold" style={{ color: scoreColor }}>{comp.score}%</div>
          <div className="text-[9px] text-text-muted">Benchmark: {comp.benchmark}%</div>
        </div>
      </div>
      <div className="relative h-1 rounded-full" style={{ background: "rgba(255,255,255,0.08)" }}>
        <div className="absolute left-0 top-0 h-full rounded-full" style={{ width: `${comp.score}%`, background: trackFill }} />
        <div className="absolute top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full border-2" style={{ left: `calc(${comp.benchmark}% - 5px)`, background: "#1a1a1a", borderColor: "rgba(255,255,255,0.3)" }} />
      </div>
    </div>
  );
}

const competencies: CompRow[] = [
  { index: 1, title: "Systems Design", score: 84, benchmark: 75, weight: "30%", confidence: "HIGH",   sources: [{ label: "Interview", variant: "teal" }, { label: "RAR", variant: "amber" }] },
  { index: 2, title: "Code Quality",   score: 78, benchmark: 70, weight: "25%", confidence: "HIGH",   sources: [{ label: "Code Test", variant: "indigo" }, { label: "GitHub", variant: "indigo" }] },
  { index: 3, title: "Communication",  score: 71, benchmark: 80, weight: "20%", confidence: "MEDIUM", sources: [{ label: "Interview", variant: "teal" }] },
];

export default function SampleBrief() {
  const [_expanded, _setExpanded] = useState(false);

  return (
    <section id="sample" className="py-20 md:py-28 px-4 overflow-hidden bg-black">
      <div className="max-w-7xl mx-auto flex flex-col gap-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.50, ease: "easeOut" as const }}
          className="flex flex-col gap-2 text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-600">Sample Output</p>
          <h2 className="text-2xl md:text-3xl font-bold text-white">This is what lands in your recruiter&apos;s dashboard.</h2>
          <p className="text-base text-zinc-400 max-w-lg mx-auto leading-relaxed mt-1">Not a score. A complete picture — ready for your panel to use.</p>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 28, scale: 0.985 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, ease: "easeOut" as const, delay: 0.12 }}
            className="flex-1 min-w-0 rounded-2xl overflow-hidden"
            style={{ background: "#0c0c0c", border: "1px solid rgba(255,255,255,0.08)" }}
          >
            {/* Header bar */}
            <div className="px-5 py-3 flex items-center justify-between gap-3 bg-zinc-900 border-b border-zinc-800">
              <span className="font-mono text-[11px] font-semibold text-zinc-500 tracking-[0.15em] uppercase">Intelligence Brief</span>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-widest text-green-500 bg-green-500/10">Completed</span>
            </div>

            {/* Candidate header */}
            <div className="px-5 py-4 flex items-center justify-between gap-3 border-b border-zinc-800">
              <div className="flex items-center gap-3.5">
                <div className="flex items-center justify-center w-11 h-11 rounded-sm text-base font-extrabold shrink-0 bg-indigo-500 text-white">AK</div>
                <div>
                  <div className="text-base font-extrabold tracking-tight text-white">Anjali K.</div>
                  <div className="text-xs text-zinc-500">Senior SWE at Razorpay · 6 yrs · Bengaluru</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="px-2.5 py-1 text-[11px] rounded text-zinc-400 bg-zinc-900 border border-zinc-800">
                  Applied for <strong className="text-white">Senior Backend Engineer</strong>
                </div>
                <span className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded bg-white/10 text-white border border-white/20">Round 2</span>
              </div>
            </div>

            {/* Recommendation */}
            <div className="px-5 py-4 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 border-b border-zinc-800">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-green-500" />
                <span className="text-base font-bold text-white">Recommendation:&nbsp;<span className="text-green-500">ADVANCE</span></span>
              </div>
              <div className="flex items-center gap-4 text-[13px] text-zinc-400">
                <span>Confidence: <ConfBadge level="HIGH" /></span>
                <span>Fit Score:&nbsp;<span className="font-mono font-semibold text-white">81 / 100</span></span>
              </div>
            </div>

            {/* Alignment meter */}
            <div className="px-5 pt-5"><AlignmentMeter /></div>

            {/* Competencies */}
            <div className="px-5 pt-4 pb-1 border-b border-zinc-800">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-zinc-500">Role Fit · Top 3 Competencies</span>
                <button type="button" className="flex items-center gap-0.5 text-[11px] transition-colors focus-visible:outline-none text-white">
                  View all 5 <ChevronRight className="h-3 w-3" />
                </button>
              </div>
              {competencies.map((c) => <CompetencyRow key={c.index} comp={c} />)}
            </div>

            {/* Strengths / Weaknesses */}
            <div className="px-5 py-4 grid grid-cols-1 sm:grid-cols-2 gap-4 border-b border-zinc-800">
              <div>
                <div className="flex items-center gap-1.5 mb-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-green-500" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-green-500">Strengths</span>
                </div>
                <ul className="flex flex-col gap-1.5 pl-5">
                  {["Distributed systems depth", "Clean API design instincts", "Strong async patterns"].map((s) => (
                    <li key={s} className="flex items-start gap-1.5 text-[12px] text-zinc-400">
                      <span className="mt-1.5 h-1 w-1 rounded-full shrink-0 bg-green-500" />{s}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="flex items-center gap-1.5 mb-2">
                  <AlertTriangle className="h-3.5 w-3.5 text-amber-500" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-amber-500">Watch Points</span>
                </div>
                <ul className="flex flex-col gap-1.5 pl-5">
                  {["Communication clarity under pressure", "Verbose in written async tasks"].map((w) => (
                    <li key={w} className="flex items-start gap-1.5 text-[12px] text-zinc-400">
                      <span className="mt-1.5 h-1 w-1 rounded-full shrink-0 bg-amber-500" />{w}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Panel questions */}
            <div className="px-5 py-5">
              <div className="rounded-xl px-4 py-4 flex flex-col gap-3 bg-white/5 border border-white/10">
                <div className="flex items-center gap-2">
                  <MessageSquare className="h-3.5 w-3.5 shrink-0 text-white" />
                  <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-white">Recommended Panel Questions</span>
                </div>
                <ul className="flex flex-col gap-2 pl-5">
                  {[
                    "Probe distributed systems under write-heavy load",
                    "Test design judgment on ambiguous product scope",
                    "Ask how they handle async communication failures in prior projects",
                  ].map((q) => (
                    <li key={q} className="flex items-start gap-2 text-[13px] text-zinc-400 leading-snug">
                      <span className="mt-1.25 h-1.5 w-1.5 rounded-full shrink-0 bg-white" />{q}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Annotations (desktop) */}
          <div className="hidden lg:flex flex-col justify-center gap-10 w-72 shrink-0 py-8">
            {[
              { text: "5 independent sources scored: voice interview, code test, GitHub, resume, and behavioral screen", delay: 0.60 },
              { text: "Alignment meter shows exactly where the candidate lands against your benchmark — no guesswork", delay: 0.75 },
              { text: "Panel questions auto-generated from gaps — your team goes deep, not wide", delay: 0.90 },
            ].map(({ text, delay }) => (
              <motion.div
                key={text}
                initial={{ opacity: 0, x: 12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.45, ease: "easeOut" as const, delay }}
                className="flex items-start gap-2.5"
              >
                <div className="flex items-center gap-1 mt-1.5 shrink-0">
                  <div className="h-px w-6 border-t border-dashed border-white/40" />
                  <div className="h-1.5 w-1.5 rounded-full bg-white/60 shrink-0" />
                </div>
                <p className="text-[13px] text-zinc-400 leading-snug">{text}</p>
              </motion.div>
            ))}
          </div>

          {/* Annotations (mobile) */}
          <div className="flex lg:hidden flex-col gap-4 w-full">
            {[
              "5 independent sources scored: voice interview, code test, GitHub, resume, and behavioral screen",
              "Alignment meter shows exactly where the candidate lands against your benchmark",
              "Panel questions auto-generated from gaps so your team goes deep, not wide",
            ].map((text, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.40, ease: "easeOut" as const, delay: 0.60 + i * 0.14 }}
                className="flex items-start gap-3 px-1"
              >
                <span className="mt-1.5 h-2 w-2 rounded-full shrink-0 bg-white" />
                <p className="text-[13px] text-zinc-400 leading-snug">{text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
