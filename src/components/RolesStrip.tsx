"use client";

import { motion } from "motion/react";
import { Layers } from "lucide-react";

/**
 * "Every role" reassurance strip — answers a cold visitor's first doubt
 * ("does this work for MY role?"). Two opposite-scrolling marquee rows of
 * function chips, edge-masked. Premium, restrained (no color per chip).
 */

const ROW_A = [
  "Software Engineering",
  "Data & ML",
  "Product",
  "Design",
  "DevOps",
  "Security",
  "Platform",
  "Mobile",
  "QA",
  "Solutions",
];

const ROW_B = [
  "Sales",
  "Marketing",
  "Customer Success",
  "Finance",
  "Operations",
  "People & HR",
  "Growth",
  "Support",
  "Analytics",
  "Legal",
];

function Chip({ label }: { label: string }) {
  return (
    <span className="inline-flex shrink-0 items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-5 py-2.5 text-sm font-medium text-zinc-300 transition-colors hover:border-accent/40 hover:text-white">
      <span className="h-1.5 w-1.5 rounded-full bg-accent/60" />
      {label}
    </span>
  );
}

function Marquee({ items, reverse = false }: { items: string[]; reverse?: boolean }) {
  return (
    <div
      className="relative w-full overflow-hidden"
      style={{
        maskImage:
          "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
      }}
    >
      <motion.div
        className="flex w-max gap-4 py-2"
        animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{ ease: "linear", duration: 38, repeat: Infinity }}
      >
        {[...items, ...items].map((label, i) => (
          <Chip key={`${label}-${i}`} label={label} />
        ))}
      </motion.div>
    </div>
  );
}

export function RolesStrip() {
  return (
    <section className="py-24 md:py-28 relative bg-transparent overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-14"
        >
          <div className="relative overflow-hidden inline-flex items-center gap-2 px-3 py-1 rounded-full bg-card/70 backdrop-blur-md border border-white/10 text-zinc-300 text-xs font-mono uppercase tracking-widest mb-6 shadow-lg before:absolute before:inset-x-3 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent before:content-['']">
            <Layers className="w-3.5 h-3.5 text-white" />
            <span>Every function</span>
          </div>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-display font-medium tracking-tight text-white leading-tight">
            One system, every role you{" "}
            <span className="text-accent italic">hire for.</span>
          </h3>
        </motion.div>

        <div className="space-y-4">
          <Marquee items={ROW_A} />
          <Marquee items={ROW_B} reverse />
        </div>
      </div>
    </section>
  );
}
