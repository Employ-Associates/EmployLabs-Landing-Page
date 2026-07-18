"use client";

import { motion } from "motion/react";

export function SocialProof() {
  const stats = [
    { value: "800M+", label: "Profiles Reviewed", accent: false },
    { value: "90%", label: "Hours Saved per Role", accent: true },
    { value: "3 Days", label: "To First Shortlist", accent: false },
  ];

  return (
    <section className="py-32 md:py-40 bg-transparent relative z-20">
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Side: Elegant Sentence */}
          <div className="lg:col-span-5">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-xl md:text-2xl lg:text-3xl font-display font-medium tracking-tight text-white leading-snug"
            >
              Solve your most complex pipelines with AI, up and running in <span className="text-accent italic">minutes</span>, not days.
            </motion.h3>
          </div>

          {/* Right Side: The 3 stats with borders between them instead of individual cards */}
          <div className="lg:col-span-7 w-full">
            <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex flex-col items-center justify-center py-6 sm:py-2 px-4 text-center"
                >
                  <span className={`text-4xl md:text-5xl font-display font-semibold mb-2 tracking-tight ${
                    stat.accent ? 'text-accent' : 'text-white'
                  }`}>
                    {stat.value}
                  </span>
                  <span className="text-xs font-mono text-gray-400 uppercase tracking-wider leading-relaxed">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
