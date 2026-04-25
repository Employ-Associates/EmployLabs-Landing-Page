"use client";

import { useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Lock, ArrowRight } from "lucide-react";
import Badge from "../ui/Badge";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, ease: "easeOut" as const, delay },
});

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const scrollTo = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 pt-20 pb-16 bg-black"
    >

      <div className="relative z-10 flex flex-col items-center text-center gap-8 max-w-4xl w-full">
        <motion.div {...fadeUp(0.05)}>
          <motion.div
            animate={shouldReduceMotion ? {} : { scale: [1, 1.05, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" as const }}
          >
            <Badge variant="teal" size="md">
              AI-POWERED STRUCTURED ASSESSMENT
            </Badge>
          </motion.div>
        </motion.div>

        <div className="flex flex-col items-center gap-2">
          <motion.p
            {...fadeUp(0.12)}
            className="text-xl md:text-2xl text-zinc-400 font-medium leading-snug"
          >
            Unstructured interviews predict job performance
          </motion.p>

          <motion.div
            {...fadeUp(0.22)}
            className="flex items-end justify-center gap-6 md:gap-14 mt-2"
          >
            <div className="flex flex-col items-center gap-1.5">
              <span
                className="font-mono-data font-black tabular-nums leading-none"
                style={{
                  fontSize: "clamp(4.5rem, 14vw, 8.5rem)",
                  color: "rgba(239,68,68,0.85)",
                }}
              >
                14%
              </span>
              <span className="text-[11px] uppercase tracking-[0.18em] text-zinc-600 font-medium">
                of the time
              </span>
            </div>

            <div className="flex flex-col items-center gap-1 mb-4 md:mb-5">
              <div
                className="w-px bg-linear-to-b from-transparent via-zinc-700 to-transparent"
                style={{ height: "clamp(3rem, 8vw, 5rem)" }}
              />
              <span className="text-xs text-zinc-600 uppercase tracking-widest">vs</span>
            </div>

            <div className="flex flex-col items-center gap-1.5">
              <span
                className="font-mono-data font-black tabular-nums leading-none"
                style={{
                  fontSize: "clamp(4.5rem, 14vw, 8.5rem)",
                  color: "rgba(255,255,255,0.95)",
                }}
              >
                94%
              </span>
              <span className="text-[11px] uppercase tracking-[0.18em] text-zinc-600 font-medium">
                ours
              </span>
            </div>
          </motion.div>
        </div>

        <motion.p
          {...fadeUp(0.38)}
          className="text-lg md:text-xl text-zinc-400 max-w-2xl leading-relaxed"
        >
          EmployLabs replaces 3-round interviews with a single{" "}
          <span className="text-white font-semibold">77-minute</span>{" "}
          structured assessment. Voice interview, live coding, behavioral proctor.
          One intelligence brief in 24 hours. Every candidate, same standard.
        </motion.p>

        <motion.div
          {...fadeUp(0.50)}
          className="flex flex-col sm:flex-row items-center gap-3 w-full justify-center"
        >
          <motion.a
            href="#process"
            onClick={scrollTo("process")}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white text-black font-semibold text-sm hover:bg-zinc-200 active:scale-[0.98] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black w-full sm:w-auto justify-center"
            whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            See How It Works
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </motion.a>

          <motion.a
            href="#sample"
            onClick={scrollTo("sample")}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border border-zinc-700 text-zinc-400 font-semibold text-sm hover:border-white hover:text-white active:scale-[0.98] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black w-full sm:w-auto justify-center"
            whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            View Sample Report
          </motion.a>
        </motion.div>

        <motion.p
          {...fadeUp(0.60)}
          className="flex items-center gap-2 text-sm text-text-muted"
        >
          <Lock className="h-4 w-4 opacity-70 shrink-0" aria-hidden="true" />
          Zero PII stored. All candidate data anonymized end-to-end.
        </motion.p>
      </div>
    </section>
  );
}
