"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FileText, Briefcase, Users } from "lucide-react";
import SectionHeader from "../ui/SectionHeader";
import Card from "../ui/Card";

type ViewMode = "plain" | "full";

interface SourceCard {
  Icon: React.ElementType;
  title: string;
  plain: string;
  full: string;
  meta: string;
  sources: string[];
}

const cards: SourceCard[] = [
  {
    Icon: FileText,
    title: "Structured Interview",
    plain: "60 minutes. Seven fixed questions. Every candidate gets the same interview.",
    full: "Every candidate answers identical questions in the same order. AI transcribes and scores against BARS anchors. No interviewer variance. Scores on five dimensions: structured thinking, problem framing, communication quality, domain knowledge, and behavioral alignment.",
    meta: "60 min · 7 questions · BARS scored",
    sources: ["Voice Interview", "AI Transcript"],
  },
  {
    Icon: Briefcase,
    title: "Work Sample",
    plain: "A role-specific test that mirrors real work. Graded on output, not vibes.",
    full: "Candidates complete a role-specific challenge that mirrors the first 30 days of the job. Scored on functional correctness, approach and clarity, and edge case handling. Code tests are run through static analysis; written tasks scored on structure and precision.",
    meta: "45–90 min · Live environment",
    sources: ["Code Analysis", "Rubric Score"],
  },
  {
    Icon: Users,
    title: "Behavioral Screen",
    plain: "Six validated questions with evidence scoring. No gut-feel interpretation.",
    full: "Six validated STAR-format questions, chosen from a library of 180 mapped to 23 behavioral competencies. Each answer scored on a 4-point scale against validated anchors. Correlates to performance reviews at 0.44 Pearson r — far above unstructured behavioral interviews.",
    meta: "30 min · 6 questions · STAR format",
    sources: ["Behavioral Screen", "Competency Map"],
  },
];

export default function WhatWasConducted() {
  const [mode, setMode] = useState<ViewMode>("plain");

  return (
    <section id="process" className="py-20 px-4">
      <div className="max-w-6xl mx-auto flex flex-col gap-12">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <SectionHeader
            badge="WHAT WAS CONDUCTED"
            title="Three components. Zero optional steps."
            subtitle="Every candidate completes the same three components in the same order."
            align="left"
          />
          <div className="flex items-center gap-1 p-1 rounded-lg shrink-0 bg-zinc-900 border border-zinc-800">
            {(["plain", "full"] as ViewMode[]).map((v) => (
              <button
                key={v}
                type="button"
                aria-pressed={mode === v}
                onClick={() => setMode(v)}
                className="text-xs font-semibold px-4 py-1.5 rounded-md capitalize transition-all focus-visible:outline-none"
                style={{
                  background: mode === v ? "rgba(20,184,166,0.12)" : "transparent",
                  color:      mode === v ? "#14b8a6" : "rgba(255,255,255,0.4)",
                  border:     mode === v ? "1px solid rgba(20,184,166,0.25)" : "1px solid transparent",
                }}
              >
                {v === "plain" ? "Summary" : "Full Detail"}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, ease: "easeOut" as const, delay: i * 0.08 }}
            >
              <Card className="flex flex-col gap-4 h-full">
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl shrink-0" style={{ background: "rgba(20,184,166,0.08)" }}>
                    <card.Icon className="h-5 w-5 text-text-secondary" aria-hidden="true" />
                  </div>
                  <h3 className="text-base font-semibold text-text-primary">{card.title}</h3>
                </div>
                <p className="text-sm text-text-secondary leading-relaxed flex-1">
                  {mode === "plain" ? card.plain : card.full}
                </p>
                <div className="flex flex-col gap-2 pt-3 border-t border-border-subtle">
                  <p className="text-xs text-text-muted font-mono-data">{card.meta}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {card.sources.map((s) => (
                      <span
                        key={s}
                        className="text-[10px] px-2 py-0.5 rounded font-semibold uppercase tracking-wider"
                        style={{ background: "rgba(20,184,166,0.08)", color: "#14b8a6", border: "1px solid rgba(20,184,166,0.2)" }}
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
