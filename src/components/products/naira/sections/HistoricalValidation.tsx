"use client";

import { motion } from "framer-motion";
import { TrendingUp, CheckCircle2, BarChart3, Users, Clock, Percent } from "lucide-react";
import SectionHeader from "../ui/SectionHeader";
import MetricCard from "../ui/MetricCard";
import Card from "../ui/Card";

const metrics = [
  { value: 94, suffix: "%", label: "Prediction Accuracy", Icon: BarChart3, variant: "teal" as const, description: "Validated against 6-month performance reviews across 50,000+ assessments.", trend: "up" as const, trendValue: "+12% vs industry avg" },
  { value: 87, suffix: "%", label: "6-Month Retention",   Icon: Users,    variant: "green" as const, description: "Candidates we recommended who were still employed 6 months later.", trend: "up" as const, trendValue: "+16% vs unstructured" },
  { value: 82, suffix: "%", label: "Panel Pass Rate",     Icon: CheckCircle2, variant: "purple" as const, description: "Recommended candidates who passed the hiring panel on first interview.", trend: "up" as const, trendValue: "+30% vs baseline" },
  { value: 3,  suffix: "d", label: "Time to Decision",   Icon: Clock,    variant: "default" as const, description: "From application received to intelligence brief delivered.", trend: "down" as const, trendValue: "−43 days vs avg" },
  { value: 3,  suffix: "%", label: "False Positive Rate", Icon: Percent,  variant: "default" as const, description: "Candidates we recommended who didn't perform — our lowest year.", trend: "down" as const, trendValue: "−9% vs prior year" },
  { value: 77, suffix: "m", label: "Assessment Duration", Icon: Clock,    variant: "default" as const, description: "Total candidate-facing time across all three assessment components.", trend: "neutral" as const, trendValue: "Fixed format" },
];

export default function HistoricalValidation() {
  return (
    <section
      id="validation"
      className="py-20 px-4"
      style={{ background: "radial-gradient(ellipse 70% 40% at 50% 0%, rgba(16,185,129,0.04) 0%, transparent 70%), #0a0a0a" }}
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        <SectionHeader
          badge="TRACK RECORD"
          title="50,000 Assessments. Here's What We Found."
          subtitle="Not projections. Not case studies. Measured outcomes."
        />

        <p className="text-sm text-text-secondary -mt-6" style={{ marginBottom: "-8px" }}>
          We measure every assessment against what happens 6 months after hiring. Here&apos;s the aggregate.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {metrics.map((m) => (
            <MetricCard
              key={m.label}
              value={m.value}
              suffix={m.suffix}
              label={m.label}
              icon={<m.Icon />}
              variant={m.variant}
              description={m.description}
              trend={m.trend}
              trendValue={m.trendValue}
            />
          ))}
        </div>

        <div
          className="rounded-xl px-6 py-6 flex flex-col gap-4 max-w-3xl bg-zinc-900"
          style={{ border: "1px solid rgba(255,255,255,0.07)", borderLeft: "4px solid #14b8a6" }}
        >
          <p className="text-sm font-semibold text-text-primary">Of the candidates we recommended:</p>
          <ul className="flex flex-col gap-2">
            {[
              "87% are still employed at the hiring company 6 months later.",
              "82% passed the hiring panel on the first interview.",
              "3.2% were false positives — our lowest year ever.",
            ].map((line) => (
              <li key={line} className="text-[14px] text-text-secondary leading-snug">&bull;&nbsp;{line}</li>
            ))}
          </ul>
          <p className="text-xs text-text-muted">These are measured outcomes. Not model predictions.</p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.4, ease: "easeOut" as const }}
          className="max-w-3xl mx-auto w-full"
        >
          <Card variant="signal" signalColor="green" hover={false}>
            <div className="flex items-start gap-4">
              <TrendingUp className="h-5 w-5 text-signal-green shrink-0 mt-0.5" />
              <div className="flex flex-col gap-1">
                <p className="text-sm font-semibold text-text-primary">Calibration Schedule</p>
                <p className="text-sm text-text-secondary leading-relaxed">
                  Scores calibrated quarterly using actual performance reviews from client companies. Last calibration: Feb 2026.
                </p>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
