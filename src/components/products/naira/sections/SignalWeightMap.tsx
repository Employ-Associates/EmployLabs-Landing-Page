"use client";

import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";
import SectionHeader from "../ui/SectionHeader";
import WeightBar from "../ui/WeightBar";
import Card from "../ui/Card";

const signals = [
  { label: "Technical Depth",      weight: 35, color: "teal"   as const, detail: "From work sample + technical interview" },
  { label: "Structured Thinking",  weight: 25, color: "indigo" as const, detail: "Problem decomposition, logic under constraints" },
  { label: "Communication Quality",weight: 20, color: "purple" as const, detail: "Clarity, precision, async writing sample" },
  { label: "Behavioral Alignment", weight: 15, color: "cyan"   as const, detail: "Trait fit to validated role profile" },
  { label: "Work Sample Output",   weight:  5, color: "amber"  as const, detail: "Completeness, correctness, edge-case handling" },
];

const triad = [
  { heading: "Signals",    body: "Inputs from structured interviews, behavioral screens, and work samples." },
  { heading: "Weights",    body: "Fixed percentage contribution each signal makes to the composite score." },
  { heading: "Confidence", body: "Statistical reliability of each signal, measured by inter-rater ICC and α." },
];

export default function SignalWeightMap() {
  return (
    <section id="scoring" className="py-20 px-4">
      <div className="max-w-6xl mx-auto flex flex-col gap-12">
        <SectionHeader
          badge="SCORING LOGIC"
          title="Nothing is hidden. Here's exactly how we score."
          subtitle="Each assessment dimension pulls from specific signals with defined confidence levels."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="flex flex-col gap-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-6">
              {triad.map((item, i) => (
                <motion.div
                  key={item.heading}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.4, ease: "easeOut" as const, delay: i * 0.08 }}
                  className="flex flex-col gap-1"
                >
                  <p className="font-mono-data text-xs uppercase tracking-widest text-text-muted font-semibold">{item.heading}</p>
                  <p className="text-sm text-text-secondary leading-relaxed">{item.body}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, ease: "easeOut" as const, delay: 0.25 }}
            >
              <Card variant="signal" signalColor="amber" hover={false}>
                <div className="flex items-start gap-4">
                  <AlertTriangle className="h-5 w-5 text-signal-amber shrink-0 mt-0.5" />
                  <div className="flex flex-col gap-1">
                    <p className="text-sm font-semibold text-text-primary">Variance Note</p>
                    <p className="text-sm text-text-secondary leading-relaxed">
                      Weights adjust ±5% based on role seniority. Senior IC roles weight Technical Depth at 40%.
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>

          <div className="flex flex-col gap-5">
            {signals.map((signal, i) => (
              <motion.div
                key={signal.label}
                initial={{ opacity: 0, x: 12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.35, ease: "easeOut" as const, delay: i * 0.07 }}
              >
                <WeightBar label={signal.label} weight={signal.weight} color={signal.color} detail={signal.detail} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
