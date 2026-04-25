"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { type LucideIcon } from "lucide-react";
import SectionHeader from "../ui/SectionHeader";
import AccordionItem from "../ui/AccordionItem";
import { cn } from "@/lib/utils";
import { comparisons } from "../data/comparisons";

type ColumnKey = "ai" | "human" | "combined";

const colConfig: Record<ColumnKey, { label: string; scoreColor: string; borderColor: string; bgColor: string; tabActive: string }> = {
  ai: {
    label: "AI System",
    scoreColor: "text-white",
    borderColor: "border-l-white",
    bgColor: "bg-[rgba(255,255,255,0.04)]",
    tabActive: "border-b-2 border-white text-white",
  },
  human: {
    label: "Human Panel",
    scoreColor: "text-signal-green",
    borderColor: "border-l-signal-green",
    bgColor: "bg-[rgba(16,185,129,0.04)]",
    tabActive: "border-b-2 border-signal-green text-signal-green",
  },
  combined: {
    label: "Combined",
    scoreColor: "text-signal-purple",
    borderColor: "border-l-signal-purple",
    bgColor: "bg-[rgba(167,139,250,0.04)]",
    tabActive: "border-b-2 border-signal-purple text-signal-purple",
  },
};

const columns: ColumnKey[] = ["ai", "human", "combined"];

const aiHandles = [
  "10 candidates in parallel",
  "Same rubric, zero fatigue",
  "Pattern recognition at scale",
  "Anti-fraud: voice + screen monitoring",
  "77 minutes per candidate",
];

const panelHandles = [
  "The 2\u20133 candidates worth your time",
  "Real-world depth questions",
  "Culture and team dynamics",
  "In-person judgment calls",
  "30 minutes, once, on pre-validated candidates",
];

export default function AIvsPanel() {
  const [activeTab, setActiveTab] = useState<ColumnKey>("ai");

  return (
    <section id="comparison" className="py-20 px-4 bg-black">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        <SectionHeader
          badge="AI VS HUMAN"
          title="AI does the scale. You make the call."
          subtitle="AI scoring isn\u2019t a replacement. It\u2019s a systematic second opinion that gives your panel 3 hours back for every 10 candidates."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, ease: "easeOut" as const }}
            className="rounded-2xl px-6 py-6 flex flex-col gap-4 bg-zinc-900"
            style={{ border: "1px solid rgba(255,255,255,0.14)" }}
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white">AI handles</p>
            <ul className="flex flex-col gap-3">
              {aiHandles.map((item) => (
                <li key={item} className="text-[14px] text-text-secondary leading-snug">{item}</li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, ease: "easeOut" as const, delay: 0.10 }}
            className="rounded-2xl px-6 py-6 flex flex-col gap-4 bg-zinc-900"
            style={{ border: "1px solid rgba(245,158,11,0.14)" }}
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em]" style={{ color: "#f59e0b" }}>Your panel handles</p>
            <ul className="flex flex-col gap-3">
              {panelHandles.map((item) => (
                <li key={item} className="text-[14px] text-text-secondary leading-snug">{item}</li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.50, ease: "easeOut" as const, delay: 0.18 }}
          className="flex flex-col items-center gap-4 text-center"
        >
          <div className="w-full max-w-xs h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.10), transparent)" }} aria-hidden="true" />
          <p className="text-lg md:text-xl font-semibold text-white max-w-xl leading-snug">
            Together: 4 out of 5 candidates we recommend pass your panel. That&apos;s{" "}
            <span style={{ color: "#ffffff" }}>82%</span>{" "}&mdash; up from the industry average of{" "}
            <span style={{ color: "#f59e0b" }}>52%</span>.
          </p>
          <p className="text-[13px] text-text-muted">We give you 3 hours back for every 10 candidates you review.</p>
        </motion.div>

        <AccordionItem title="See full comparison data">
          {/* Desktop table */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-bg-inset">
                  <th className="text-left px-4 py-3 text-xs font-semibold uppercase tracking-widest text-text-muted w-40">Dimension</th>
                  {columns.map((col) => (
                    <th key={col} className={cn("px-4 py-3 text-sm font-semibold border-l-2 text-left", colConfig[col].borderColor, colConfig[col].bgColor, colConfig[col].scoreColor)}>
                      {colConfig[col].label}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-[rgba(255,255,255,0.05)]">
                {comparisons.map((row, i) => (
                  <motion.tr
                    key={row.dimension}
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.3, ease: "easeOut" as const, delay: i * 0.04 }}
                    className="group"
                  >
                    <td className="px-4 py-4 text-sm font-medium text-text-secondary">{row.dimension}</td>
                    {columns.map((col) => {
                      const cell = row[col];
                      const cfg = colConfig[col];
                      return (
                        <td key={col} className={cn("px-4 py-4 border-l-2 transition-colors duration-150", cfg.borderColor, "group-hover:" + cfg.bgColor)}>
                          <div className="flex items-center gap-2 mb-0.5">
                            <span className={cn("font-mono-data font-bold text-2xl tabular-nums", cfg.scoreColor)}>{cell.score}</span>
                            <cell.Icon className={cn("h-4 w-4", cfg.scoreColor)} />
                          </div>
                          <p className="text-xs text-text-muted leading-snug">{cell.note}</p>
                        </td>
                      );
                    })}
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile tabs */}
          <div className="md:hidden flex flex-col gap-4 px-1 pb-2">
            <div className="flex border-b border-border-subtle">
              {columns.map((col) => (
                <button
                  key={col}
                  type="button"
                  onClick={() => setActiveTab(col)}
                  className={cn("flex-1 py-2.5 text-sm font-medium transition-colors duration-150 text-center", activeTab === col ? colConfig[col].tabActive : "text-text-muted hover:text-text-secondary")}
                >
                  {colConfig[col].label}
                </button>
              ))}
            </div>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
                className="flex flex-col divide-y divide-border-subtle"
              >
                {comparisons.map((row) => {
                  const cell = row[activeTab];
                  const cfg = colConfig[activeTab];
                  return (
                    <div key={row.dimension} className="flex items-center justify-between py-3 gap-4">
                      <p className="text-sm text-text-secondary">{row.dimension}</p>
                      <div className="flex items-center gap-1.5 shrink-0">
                        <span className={cn("font-mono-data font-bold text-xl tabular-nums", cfg.scoreColor)}>{cell.score}</span>
                        <cell.Icon className={cn("h-3.5 w-3.5", cfg.scoreColor)} />
                      </div>
                    </div>
                  );
                })}
              </motion.div>
            </AnimatePresence>
          </div>
        </AccordionItem>
      </div>
    </section>
  );
}
