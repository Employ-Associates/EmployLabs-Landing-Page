"use client";

import { motion } from "motion/react";
import { ArrowRight, Check } from "lucide-react";

/* The deliverable the product hands back — a ranked shortlist. */
const FINALISTS = [
  { initials: "AR", name: "Alex Rivera", role: "Lead SRE", score: 96, top: true },
  { initials: "PN", name: "Priya Nair", role: "Senior SRE", score: 88, top: false },
  { initials: "MW", name: "Marcus Webb", role: "Platform Eng", score: 84, top: false },
];

export function FinalCTA() {
  return (
    <section className="py-32 md:py-40 max-w-[1400px] mx-auto px-6 md:px-8">
      {/* Container in dark mode with a highly premium feel */}
      <div className="bg-surface rounded-xl relative overflow-hidden border border-white/10 shadow-2xl flex flex-col lg:flex-row items-stretch min-h-[500px]">

        {/* Left Content Column */}
        <div className="relative z-10 p-8 md:p-16 lg:p-20 w-full lg:w-[55%] flex flex-col items-start justify-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-10 font-display font-medium text-white tracking-tight leading-[1.1] max-w-xl text-left">
            Every AI hiring platform has a ceiling. <span className="text-white">This isn’t one of them.</span>
          </h2>

          {/* CTAs — primary matches the hero button (white + arrow chip) */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
            <a href="https://app.employlabs.ai" className="font-sans h-12 flex items-center p-1 rounded-sm bg-white text-zinc-900 border-2 border-white/60 font-medium hover:bg-zinc-100 transition-colors shadow-xl shadow-black/20 group cursor-pointer">
              <span className="flex-1 px-6 text-[16px] text-center whitespace-nowrap">Get a demo</span>
              <div className="bg-zinc-900 w-9 h-9 rounded-sm flex items-center justify-center text-white group-hover:scale-105 transition-transform shrink-0">
                <ArrowRight className="w-5 h-5" />
              </div>
            </a>
            <a href="https://app.employlabs.ai" className="font-sans h-12 px-6 flex items-center justify-center rounded-sm bg-transparent border-2 border-white/20 text-white font-medium hover:bg-white/10 transition-colors text-[16px] cursor-pointer">
              Try for free
            </a>
          </div>
        </div>

        {/* Right Section: The colorful geometric artwork with grain noise */}
        <div className="relative lg:w-[45%] min-h-[350px] lg:min-h-0 overflow-hidden bg-zinc-950 flex items-stretch">

          {/* Accent glow field */}
          <div className="absolute -top-16 -right-10 w-80 h-80 bg-accent/25 rounded-full blur-[90px] pointer-events-none" />
          <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-accent/10 rounded-full blur-[100px] pointer-events-none" />

          {/* Faint dotted grid */}
          <div
            className="absolute inset-0 pointer-events-none opacity-40"
            style={{
              backgroundImage: "radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)",
              backgroundSize: "20px 20px",
            }}
          />

          {/* Floating deliverable card — the ranked shortlist the product returns */}
          <div className="relative z-10 m-auto w-[86%] max-w-sm px-2 py-6">
            <div className="relative overflow-hidden rounded-sm border border-white/10 bg-white/[0.05] backdrop-blur-xl p-5 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8)] before:absolute before:inset-x-4 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent before:content-['']">
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/15 border border-accent/30 px-2.5 py-0.5 text-[11px] font-medium text-accent">
                  <Check className="w-3 h-3" /> Shortlist ready
                </span>
                <span className="font-mono text-[11px] text-zinc-500">Lead SRE</span>
              </div>

              <div className="space-y-2">
                {FINALISTS.map((f) => (
                  <div
                    key={f.name}
                    className="flex items-center gap-3 rounded-sm border border-white/10 bg-white/[0.03] px-3 py-2"
                  >
                    <span className="grid h-8 w-8 place-items-center rounded-full bg-white/10 text-[11px] font-semibold text-white">
                      {f.initials}
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="text-[13px] font-medium text-white leading-tight">{f.name}</p>
                      <p className="text-[11px] text-zinc-500">{f.role}</p>
                    </div>
                    <span
                      className={`rounded-full px-2 py-0.5 text-[11px] font-mono font-medium ${
                        f.top
                          ? "bg-accent/15 text-accent border border-accent/30"
                          : "bg-white/5 text-zinc-300 border border-white/10"
                      }`}
                    >
                      {f.score}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-4 flex items-center gap-1.5 border-t border-white/10 pt-3">
                <Check className="w-3 h-3 text-accent" />
                <span className="text-[11px] text-zinc-400">Ready for your review</span>
              </div>
            </div>
          </div>

          {/* High-end grain noise texture overlay */}
          <div
            className="absolute inset-0 opacity-[0.18] pointer-events-none mix-blend-overlay"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
            }}
          />

          {/* Smooth fading gradient block to blend the transition from text column to artwork */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-zinc-950 via-zinc-950/40 to-transparent hidden lg:block" />
          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-zinc-950 via-zinc-950/40 to-transparent lg:hidden" />

        </div>

      </div>
    </section>
  );
}
