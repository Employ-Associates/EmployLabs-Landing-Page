"use client";

import { motion } from "framer-motion";
import { Shield } from "lucide-react";
import SectionHeader from "../ui/SectionHeader";
import Card from "../ui/Card";
import Badge from "../ui/Badge";
import { weaknesses } from "../data/weaknesses";

export default function SystemWeaknesses() {
  return (
    <section id="limitations" className="py-20 px-4 bg-black">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        <SectionHeader
          badge="HONEST LIMITS"
          title="We're honest about where we fail."
          subtitle="Most assessment platforms won't tell you this. We do — because you deserve to know exactly where to trust us and where to add human judgment."
        />

        <div className="flex flex-col gap-3 max-w-3xl" style={{ marginBottom: "8px" }}>
          <p className="text-lg font-semibold text-text-primary leading-snug">
            Most assessment platforms won&apos;t tell you this.
          </p>
          <p className="text-[15px] text-text-secondary leading-relaxed">
            Every tool has edges. Here are ours — with the specific accuracy drop and what we recommend you do instead.
            We publish this because we believe you deserve to know exactly where to trust us and where to add human judgment.
            If a vendor can&apos;t tell you where their product fails, they don&apos;t fully understand what they built.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {weaknesses.map((w, i) => (
            <motion.div
              key={w.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, ease: "easeOut" as const, delay: i * 0.07 }}
            >
              <Card variant="signal" signalColor={w.signalColor} className="h-full flex flex-col gap-4">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-start gap-3">
                    <w.Icon className="h-6 w-6 text-text-secondary shrink-0 mt-0.5" />
                    <h3 className="text-lg font-semibold text-text-primary leading-snug">{w.title}</h3>
                  </div>
                  <Badge variant={w.impactVariant} size="sm" className="shrink-0 mt-0.5">
                    {w.impactVariant === "red" ? "High Risk" : "Moderate"}
                  </Badge>
                </div>
                <p className="text-sm text-text-secondary leading-relaxed">{w.problem}</p>
                <p className="font-mono-data text-sm text-text-muted">
                  <span className={w.impactVariant === "red" ? "text-signal-red" : "text-signal-amber"}>↓</span>{" "}
                  {w.impact}
                </p>
                <div className="flex items-start gap-3 bg-bg-inset rounded-md p-3 border-l-2 border-signal-green">
                  <Shield className="h-4 w-4 text-signal-green shrink-0 mt-0.5" />
                  <p className="text-sm text-text-secondary leading-relaxed">{w.mitigation}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
