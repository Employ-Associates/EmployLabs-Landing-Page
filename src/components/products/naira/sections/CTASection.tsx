"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { ArrowRight, Lock, Shield, ClipboardList, Globe } from "lucide-react";

const trustBadges = [
  { icon: Lock,          label: "SOC 2 Type II"     },
  { icon: Shield,        label: "Encrypted at rest" },
  { icon: ClipboardList, label: "Audit logged"      },
  { icon: Globe,         label: "GDPR compliant"    },
];

export default function CTASection() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-60px" });
  const reduced = useReducedMotion() ?? false;

  const fadeUp = (delay = 0) => ({
    initial: reduced ? {} : { opacity: 0, y: 24 },
    animate: inView ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.55, ease: "easeOut" as const, delay: reduced ? 0 : delay },
  });

  const scrollToSample = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById("sample")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={sectionRef}
      className="relative px-4 py-28 md:py-36 overflow-hidden bg-black"
    >
      <div className="absolute top-0 inset-x-0 h-px bg-linear-to-r from-transparent via-zinc-700 to-transparent" aria-hidden="true" />

      <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center text-center gap-8">
        <motion.h2 {...fadeUp(0)} className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
          Ready to stop guessing?
        </motion.h2>

        <motion.p {...fadeUp(0.12)} className="text-lg md:text-xl text-zinc-400 max-w-xl leading-relaxed">
          Replace your next hiring round with a single{" "}
          <span className="text-white font-semibold">77-minute</span>{" "}
          assessment. You get a complete intelligence brief. Your panel gets pre-validated candidates.
        </motion.p>

        <motion.div {...fadeUp(0.22)} className="flex flex-col sm:flex-row items-center gap-3 w-full justify-center">
          <motion.a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-black font-semibold text-base hover:bg-zinc-200 active:scale-[0.98] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black w-full sm:w-auto justify-center"
            whileHover={reduced ? {} : { scale: 1.025 }}
            whileTap={{ scale: 0.97 }}
          >
            Request a Demo
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </motion.a>
          <motion.a
            href="#sample"
            onClick={scrollToSample}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-zinc-700 text-zinc-400 font-semibold text-base hover:border-white hover:text-white active:scale-[0.98] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black w-full sm:w-auto justify-center"
            whileHover={reduced ? {} : { scale: 1.025 }}
            whileTap={{ scale: 0.97 }}
          >
            See a Sample Brief
          </motion.a>
        </motion.div>

        <motion.div {...fadeUp(0.32)} className="w-full max-w-xs flex items-center gap-4">
          <div className="flex-1 h-px bg-zinc-800" />
          <span className="text-[11px] uppercase tracking-[0.18em] text-zinc-600 font-medium shrink-0">Enterprise-ready</span>
          <div className="flex-1 h-px bg-zinc-800" />
        </motion.div>

        <motion.div {...fadeUp(0.40)} className="flex flex-wrap items-center justify-center gap-3">
          {trustBadges.map(({ icon: Icon, label }) => (
            <div key={label} className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[12px] font-medium text-zinc-500 bg-zinc-900 border border-zinc-800">
              <Icon className="h-3.5 w-3.5 text-zinc-400" aria-hidden="true" />
              {label}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
