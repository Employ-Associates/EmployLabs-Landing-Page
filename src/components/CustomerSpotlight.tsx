"use client";

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export function CustomerSpotlight() {
  return (
    <section className="py-32 md:py-40 relative bg-zinc-50">
      <div className="max-w-[1400px] mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="mb-12">
          <div className="relative overflow-hidden inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/70 backdrop-blur-md border border-zinc-200/80 text-zinc-600 text-[10px] font-mono tracking-widest uppercase mb-6 shadow-sm before:absolute before:inset-x-3 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-white/80 before:to-transparent before:content-['']">
            <span className="w-1.5 h-1.5 rounded-full bg-zinc-900" />
            CUSTOMER SPOTLIGHT
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-title text-zinc-900 tracking-tight leading-tight max-w-4xl">
            See how enterprises scaled engineering hiring with Weemploy
          </h2>
        </div>

        {/* Card */}
        <div className="bg-white rounded-sm border border-zinc-200 flex flex-col lg:flex-row overflow-hidden shadow-2xl shadow-black/5">

          {/* Left: Image */}
          <div className="w-full lg:w-1/2 relative min-h-[400px] lg:min-h-[600px]">
            <img
              src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=1000"
              alt="Customer Spotlight"
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Gradient Overlay & Stat */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-8 left-8 text-white">
              <div className="text-[10px] font-mono uppercase tracking-widest mb-1 text-zinc-300">Time to Hire</div>
              <div className="text-5xl font-display font-medium text-white">-40%</div>
            </div>
            {/* Navigation Arrows */}
            <div className="absolute bottom-8 right-8 flex gap-2">
              <button className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors">
                <ArrowRight className="w-4 h-4 rotate-180" />
              </button>
              <button className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors">
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right: Content */}
          <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-20 flex flex-col justify-center bg-white">
            <div className="flex items-center gap-3 mb-6 text-zinc-900">
              {/* Fake Logo */}
              <div className="w-8 h-8 bg-zinc-100 rounded-sm flex items-center justify-center border border-zinc-200">
                <div className="w-3 h-3 bg-accent rounded-sm" />
              </div>
              <span className="font-display font-bold text-xl tracking-widest uppercase">ScaleTech</span>
            </div>

            <h3 className="text-2xl md:text-3xl lg:text-4xl font-display text-zinc-900 mb-8 leading-tight">
              How ScaleTech scaled engineering hiring with Weemploy
            </h3>

            <button className="self-start bg-zinc-900 text-white font-medium px-6 py-2.5 rounded-sm text-sm hover:bg-zinc-800 transition-colors mb-12 flex items-center gap-2 group">
              Read case study
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <blockquote className="text-zinc-600 text-sm md:text-base leading-relaxed mb-8">
              "At ScaleTech, we operate at a massive scale across services, platforms, and languages. Weemploy leveraged usage data to deliver measurable improvements, including faster shortlisting, zero-bias screening, and more efficient workflows across our teams. As we continue to grow, partnerships like this are critical to delivering better outcomes on a global scale."
            </blockquote>

            <div className="flex items-center gap-4">
              <img
                src="https://i.pravatar.cc/150?u=42"
                alt="Sarah Chen"
                className="w-12 h-12 rounded-sm object-cover border border-zinc-200"
              />
              <div>
                <div className="text-zinc-900 text-sm font-medium uppercase tracking-wider">Sarah Chen,</div>
                <div className="text-zinc-500 text-[10px] font-mono uppercase tracking-widest mt-1">VP of Engineering at ScaleTech</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
