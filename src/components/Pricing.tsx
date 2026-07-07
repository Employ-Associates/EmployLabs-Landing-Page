"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Check } from "lucide-react";

export function Pricing() {
  const [comparedTo, setComparedTo] = useState<"contingent" | "retained">("contingent");
  const [annualHires, setAnnualHires] = useState(15);
  const [averageSalary, setAverageSalary] = useState(120000);

  // Constants for calculations
  const contingentRate = 0.20; // 20%
  const retainedRate = 0.25; // 25%
  const employLabsFlatFee = 2000;

  // Dynamic calculations
  const employLabsCost = annualHires * employLabsFlatFee;
  const contingentCost = annualHires * averageSalary * contingentRate;
  const retainedCost = annualHires * averageSalary * retainedRate;

  const comparisonCost = comparedTo === "contingent" ? contingentCost : retainedCost;
  const savings = comparisonCost - employLabsCost;

  // To draw the bars, we find the maximum cost to scale them relatively
  const maxCost = Math.max(contingentCost, retainedCost, employLabsCost);

  // Formatting helpers
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <section id="pricing" className="py-32 md:py-40 relative overflow-hidden bg-zinc-950">
      {/* Background soft ambient glowing mesh grids */}
      <div className="absolute right-0 top-1/4 w-[600px] h-[600px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent/5 via-transparent to-transparent pointer-events-none blur-3xl" />
      <div className="absolute left-0 bottom-1/4 w-[600px] h-[600px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold/3 via-transparent to-transparent pointer-events-none blur-3xl" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-8 relative z-10">

        {/* Top Center: Title and Subtext */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium text-white mb-6 tracking-tight leading-tight">
            No percent-of-salary fees. <br />
            <span className="text-accent italic">Ever.</span>
          </h2>

          <p className="text-zinc-300 text-lg md:text-xl mb-6 leading-relaxed">
            Built for founders and Heads of Talent. Every hire you make with traditional contingent agencies costs 20% to 25% of their base salary, averaging $24,000 per hire. EmployLabs is a flat $2,000.
          </p>

          <p className="text-zinc-400 text-sm md:text-base leading-relaxed mb-8 max-w-2xl mx-auto">
            Companies hiring 10–50 employees per year typically save $220,000 to $1,100,000 annually compared to old-school recruitment firms.
          </p>

          {/* Flat-fee benefit checklist */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 md:gap-8 pt-6 border-t border-white/5 max-w-xl mx-auto">
            <div className="flex items-center gap-3 text-zinc-300 text-sm">
              <div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center text-accent shrink-0">
                <Check className="w-3 h-3" />
              </div>
              <span>Unlimited pipeline generation & vetting</span>
            </div>
            <div className="flex items-center gap-3 text-zinc-300 text-sm">
              <div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center text-accent shrink-0">
                <Check className="w-3 h-3" />
              </div>
              <span>No fee for existing database profiles</span>
            </div>
          </div>
        </div>

        {/* Center: Interactive Pricing Calculator Card */}
        <div className="max-w-4xl mx-auto w-full relative">

          {/* Colorful soft mesh glowing backdrop behind the card just like the image */}
          <div className="absolute -inset-1 bg-gradient-to-tr from-accent/20 via-gold/10 to-transparent rounded-2xl blur-2xl opacity-60 pointer-events-none" />

          {/* The Main Calculator Card */}
          <div className="relative bg-surface border border-white/10 rounded-2xl p-8 md:p-10 shadow-2xl overflow-hidden">

            {/* Card Title or Border accents */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

            {/* Top Controls Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pb-8 border-b border-white/5 items-start">

              {/* Top Left of Card: Toggle Compared To and Large Saving Display */}
              <div className="space-y-8">
                <div>
                  <label className="text-xs font-mono text-zinc-400 uppercase tracking-wider block mb-3">
                    Compared to
                  </label>
                  <div className="inline-flex p-1 rounded-full bg-zinc-950 border border-white/5">
                    <button
                      onClick={() => setComparedTo("contingent")}
                      className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                        comparedTo === "contingent"
                          ? "bg-white text-black font-semibold shadow-md"
                          : "text-zinc-400 hover:text-white"
                      }`}
                    >
                      Contingent (20%)
                    </button>
                    <button
                      onClick={() => setComparedTo("retained")}
                      className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                        comparedTo === "retained"
                          ? "bg-white text-black font-semibold shadow-md"
                          : "text-zinc-400 hover:text-white"
                      }`}
                    >
                      Retained (25%)
                    </button>
                  </div>
                </div>

                <div>
                  <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider block mb-1">
                    You'd save
                  </span>
                  <span className="text-4xl md:text-5xl font-display font-bold text-accent tracking-tight block">
                    {formatCurrency(savings)}<span className="text-lg text-zinc-400 font-normal">/yr</span>
                  </span>
                </div>
              </div>

              {/* Top Right of Card: Sliders */}
              <div className="space-y-8">
                {/* Slider 1: Annual Hires */}
                <div className="space-y-3">
                  <div className="flex justify-between items-center text-sm">
                    <span className="font-mono text-xs text-zinc-400 uppercase tracking-wider">Annual Hires</span>
                    <span className="font-display font-medium text-white text-base bg-zinc-950 px-2.5 py-1 rounded border border-white/5">
                      {annualHires}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="100"
                    value={annualHires}
                    onChange={(e) => setAnnualHires(parseInt(e.target.value))}
                    className="w-full h-1 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-accent focus:outline-none focus:ring-0 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:shadow-lg [&::-webkit-slider-thumb]:cursor-pointer [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:cursor-pointer"
                  />
                </div>

                {/* Slider 2: Avg. Base Salary */}
                <div className="space-y-3">
                  <div className="flex justify-between items-center text-sm">
                    <span className="font-mono text-xs text-zinc-400 uppercase tracking-wider">Avg. Base Salary</span>
                    <span className="font-display font-medium text-white text-base bg-zinc-950 px-2.5 py-1 rounded border border-white/5">
                      {formatCurrency(averageSalary)}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="50000"
                    max="250000"
                    step="5000"
                    value={averageSalary}
                    onChange={(e) => setAverageSalary(parseInt(e.target.value))}
                    className="w-full h-1 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-accent focus:outline-none focus:ring-0 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:shadow-lg [&::-webkit-slider-thumb]:cursor-pointer [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:cursor-pointer"
                  />
                </div>
              </div>

            </div>

            {/* Bottom Portion: Dynamic Bar Chart */}
            <div className="pt-8 space-y-6">

              {/* Bar 1: EmployLabs */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-white font-semibold">EmployLabs</span>
                  <span className="text-accent font-bold">{formatCurrency(employLabsCost)}/yr</span>
                </div>
                <div className="w-full h-8 bg-zinc-950 rounded overflow-hidden p-0.5 border border-white/5">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${(employLabsCost / maxCost) * 100}%` }}
                    transition={{ type: "spring", stiffness: 80, damping: 15 }}
                    className="h-full bg-gradient-to-r from-emerald-600 to-accent rounded-sm shadow-[0_0_15px_rgba(85,234,140,0.2)]"
                  />
                </div>
              </div>

              {/* Bar 2: Contingent Agency */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-zinc-400">Contingent Agency (20%)</span>
                  <span className="text-zinc-300">{formatCurrency(contingentCost)}/yr</span>
                </div>
                <div className="w-full h-8 bg-zinc-950 rounded overflow-hidden p-0.5 border border-white/5">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${(contingentCost / maxCost) * 100}%` }}
                    transition={{ type: "spring", stiffness: 80, damping: 15 }}
                    className="h-full rounded-sm opacity-60 animate-pulse-slow"
                    style={{
                      backgroundImage: "repeating-linear-gradient(45deg, #3f3f46, #3f3f46 8px, #18181b 8px, #18181b 16px)",
                    }}
                  />
                </div>
              </div>

              {/* Bar 3: Retained Agency */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-zinc-400">Retained Agency (25%)</span>
                  <span className="text-zinc-300">{formatCurrency(retainedCost)}/yr</span>
                </div>
                <div className="w-full h-8 bg-zinc-950 rounded overflow-hidden p-0.5 border border-white/5">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${(retainedCost / maxCost) * 100}%` }}
                    transition={{ type: "spring", stiffness: 80, damping: 15 }}
                    className="h-full rounded-sm opacity-40"
                    style={{
                      backgroundImage: "repeating-linear-gradient(45deg, #3f3f46, #3f3f46 8px, #18181b 8px, #18181b 16px)",
                    }}
                  />
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
