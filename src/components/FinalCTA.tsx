"use client";

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

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

          {/* Two Pill Buttons like the image */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
            <button className="h-14 px-8 rounded-full bg-white text-black font-semibold hover:bg-zinc-200 transition-all text-base flex items-center justify-center gap-2 shadow-lg cursor-pointer">
              Get a demo <ArrowRight className="w-4 h-4" />
            </button>
            <button className="h-14 px-8 rounded-full bg-transparent border border-white/20 text-white font-semibold hover:bg-white/10 transition-all text-base flex items-center justify-center cursor-pointer">
              Try for free
            </button>
          </div>
        </div>

        {/* Right Section: The colorful geometric artwork with grain noise */}
        <div className="relative lg:w-[45%] min-h-[350px] lg:min-h-0 overflow-hidden bg-zinc-950 flex items-stretch">

          {/* Geometric square blocks with gradients similar to the image */}
          <div className="absolute inset-0 grid grid-cols-2 grid-rows-2">

            {/* Top Left Square (soft light ambient blend) */}
            <div className="relative bg-gradient-to-br from-purple-900/30 via-indigo-950/20 to-transparent border-r border-b border-white/5 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-zinc-900 via-transparent to-purple-500/10" />
            </div>

            {/* Top Right Square (vibrant orange/cyan warm block with geometric division) */}
            <div className="relative bg-gradient-to-tr from-amber-500 via-orange-600 to-indigo-600 overflow-hidden border-b border-white/5">
              {/* Geometric diagonal mask */}
              <div className="absolute inset-0 bg-gradient-to-bl from-white/20 via-transparent to-black/30 mix-blend-overlay" />
            </div>

            {/* Bottom Left Square (vibrant yellow/green/cyan block) */}
            <div className="relative bg-gradient-to-br from-yellow-400 via-accent to-cyan-500 overflow-hidden border-r border-white/5">
              <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-white/10" />
            </div>

            {/* Bottom Right Square (warm peach/orange/yellow block with diagonal element) */}
            <div className="relative bg-gradient-to-tl from-amber-400 via-orange-500 to-gold overflow-hidden">
              {/* Diagonal split shadow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-white/10" />
            </div>

          </div>

          {/* Large overlapping geometric accent for that asymmetrical balance */}
          <div className="absolute top-1/4 right-1/4 w-[120%] h-[120%] bg-gradient-to-tr from-pink-500/20 via-cyan-500/20 to-transparent rounded-3xl blur-3xl mix-blend-screen pointer-events-none" />

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
