"use client";

import { motion } from "framer-motion";
import SectionHeader from "../ui/SectionHeader";

type StepColor = "teal" | "green" | "indigo" | "purple";

interface Step {
  day: string;
  title: string;
  description: string;
  color: StepColor;
}

const steps: Step[] = [
  { day: "Day 0", title: "Application Received",  description: "Candidate completes profile. AI assigns role-matched questions and sends the assessment invitation within 2 hours.",                                                          color: "teal"   },
  { day: "Day 1", title: "Initial Screen",         description: "30-minute structured phone screen. Four behavioral questions, BARS-scored live. Results within 4 hours.",                                                              color: "green"  },
  { day: "Day 2", title: "Full Assessment",        description: "Technical interview · Work sample · Written component. All three scored independently before composite is calculated.",                                               color: "indigo" },
  { day: "Day 3", title: "Report Delivered",       description: "Hiring manager receives the full intelligence brief. Candidate receives their own feedback report simultaneously.",                                                   color: "purple" },
];

const colorMap: Record<StepColor, { dot: string; bg: string }> = {
  teal:   { dot: "#14b8a6", bg: "rgba(20,184,166,0.08)"   },
  green:  { dot: "#10b981", bg: "rgba(16,185,129,0.08)"   },
  indigo: { dot: "#6366f1", bg: "rgba(99,102,241,0.08)"   },
  purple: { dot: "#a78bfa", bg: "rgba(167,139,250,0.08)"  },
};

export default function AssessmentTimeline() {
  return (
    <section id="timeline" className="py-20 px-4 bg-black">
      <div className="max-w-6xl mx-auto flex flex-col gap-14">
        <SectionHeader
          badge="PROCESS"
          title="From application to decision in 3 days."
          subtitle="Every step is timed, scored, and delivered to your dashboard. No follow-up calls required."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((step, i) => {
            const c = colorMap[step.color];
            return (
              <motion.div
                key={step.day}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, ease: "easeOut" as const, delay: i * 0.1 }}
                className="flex flex-col gap-4 rounded-2xl p-6 bg-zinc-900"
                style={{ border: "1px solid rgba(255,255,255,0.07)" }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="flex items-center justify-center w-9 h-9 rounded-full text-sm font-bold shrink-0"
                    style={{ background: c.bg, color: c.dot }}
                  >
                    {i + 1}
                  </div>
                  <span className="text-xs font-mono-data font-semibold uppercase tracking-widest" style={{ color: c.dot }}>
                    {step.day}
                  </span>
                </div>
                <h3 className="text-base font-semibold text-text-primary leading-snug">{step.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{step.description}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="text-center text-sm text-text-muted"
        >
          Average time to complete assessment:{" "}
          <span className="text-text-secondary font-semibold">77 minutes</span>
          {" "}· All steps automated · No scheduling required
        </motion.p>
      </div>
    </section>
  );
}
