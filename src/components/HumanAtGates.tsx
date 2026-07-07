"use client";

import { motion } from "motion/react";
import { Check, ShieldCheck, SlidersHorizontal, Lock, Eye, Shield, AlertCircle, ArrowRight } from "lucide-react";

export function HumanAtGates() {
  return (
    <section className="py-32 md:py-40 relative bg-zinc-50 overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-orange-100/50 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-100/50 rounded-full blur-[100px] pointer-events-none translate-y-1/3 -translate-x-1/3" />

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">

        {/* Header Section */}
        <div className="flex flex-col items-center justify-center text-center mb-20 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 border border-orange-200 text-orange-700 text-[10px] font-mono uppercase tracking-widest mb-6 shadow-sm"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Human In The Loop</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-display text-zinc-900 tracking-tight leading-tight mb-6"
          >
            Autonomous by default.<br/>
            <span className="text-zinc-500">Yours to control.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-zinc-600 leading-relaxed"
          >
            The agents do the heavy lifting, but they never hire without you. You decide how hands-off you want to be. Approve the ICP, greenlight the outreach, and make the final call.
          </motion.p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(280px,auto)]">

          {/* Main Card: Approval Gates (Spans 2 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="md:col-span-2 bg-white rounded-xl border border-zinc-200 p-8 flex flex-col justify-between shadow-xl shadow-black/5 relative overflow-hidden"
          >
            <div className="relative z-10 mb-8">
              <div className="w-10 h-10 rounded-sm bg-orange-100 border border-orange-200 flex items-center justify-center mb-4">
                <ShieldCheck className="w-5 h-5 text-orange-600" />
              </div>
              <h3 className="text-2xl font-display text-zinc-900 mb-2">Approval Gates</h3>
              <p className="text-zinc-500 text-sm">Intercept key decisions before they execute.</p>
            </div>

            {/* UI Mockup */}
            <div className="bg-zinc-50 rounded-lg border border-zinc-200 p-4 space-y-3 relative z-10">
              <div className="flex items-center justify-between p-3 bg-white border border-zinc-200 rounded-sm shadow-sm">
                 <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                       <Check className="w-3.5 h-3.5 text-green-600" />
                    </div>
                    <span className="text-sm font-medium text-zinc-900">Target List Approved</span>
                 </div>
                 <span className="text-[10px] text-zinc-400 font-mono">Gate 02</span>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-white border-2 border-orange-200 rounded-sm shadow-md gap-4 relative overflow-hidden">
                 <div className="absolute top-0 right-0 w-24 h-24 bg-orange-100/50 blur-xl pointer-events-none rounded-full" />
                 <div className="flex items-start gap-3 relative z-10">
                    <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center shrink-0 mt-0.5">
                       <AlertCircle className="w-3.5 h-3.5 text-orange-600" />
                    </div>
                    <div>
                      <span className="text-sm font-medium text-zinc-900 block mb-1">Approve Offer Package</span>
                      <span className="text-xs text-zinc-500 block">Alex Rivera scored 98/100. AI suggests $185k base.</span>
                    </div>
                 </div>
                 <button className="shrink-0 h-9 px-4 rounded-sm bg-orange-500 text-white font-medium text-xs flex items-center justify-center hover:bg-orange-600 transition-colors relative z-10 shadow-sm">
                   Authorize
                 </button>
              </div>
            </div>
          </motion.div>

          {/* Granular Autonomy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-xl border border-zinc-200 p-8 flex flex-col shadow-xl shadow-black/5"
          >
            <div className="w-10 h-10 rounded-sm bg-blue-50 border border-blue-100 flex items-center justify-center mb-4">
              <SlidersHorizontal className="w-5 h-5 text-blue-600" />
            </div>
            <h3 className="text-xl font-display text-zinc-900 mb-2">Granular Autonomy</h3>
            <p className="text-zinc-500 text-sm mb-8 flex-1">Dial autonomy up or down per stage. Set it to 'Review All' for new roles, and 'Full Auto' for high-volume roles.</p>

            {/* UI Mockup */}
            <div className="space-y-4">
               <div>
                  <div className="flex justify-between text-xs font-medium text-zinc-900 mb-2">
                     <span>Sourcing</span>
                     <span className="text-blue-600">Full Auto</span>
                  </div>
                  <div className="h-1.5 w-full bg-zinc-100 rounded-full overflow-hidden">
                     <div className="h-full bg-blue-500 w-[100%] rounded-full" />
                  </div>
               </div>
               <div>
                  <div className="flex justify-between text-xs font-medium text-zinc-900 mb-2">
                     <span>Outreach</span>
                     <span className="text-orange-500">Review All</span>
                  </div>
                  <div className="h-1.5 w-full bg-zinc-100 rounded-full overflow-hidden">
                     <div className="h-full bg-orange-400 w-[30%] rounded-full" />
                  </div>
               </div>
            </div>
          </motion.div>

          {/* Spend Caps & Limits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="md:col-span-3 bg-surface rounded-xl border border-zinc-800 p-8 flex flex-col md:flex-row items-center gap-8 shadow-2xl overflow-hidden relative"
          >
            {/* Dark background accent */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-zinc-800/50 via-zinc-900 to-zinc-950 pointer-events-none" />

            <div className="w-full md:w-1/2 relative z-10">
              <div className="w-10 h-10 rounded-sm bg-white/10 border border-white/20 flex items-center justify-center mb-4">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-2xl font-display text-white mb-2">Spend Caps & Limits</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Set hard constraints on outreach volume, email credits, and AI compute usage per campaign. Never blow the budget.
              </p>
            </div>

            <div className="w-full md:w-1/2 relative z-10 bg-black/40 rounded-lg border border-white/10 p-6 flex items-center justify-between">
               <div>
                 <div className="text-[10px] uppercase font-mono tracking-widest text-zinc-500 mb-1">Campaign Budget</div>
                 <div className="text-3xl font-display text-white">$450 <span className="text-lg text-zinc-500">/ $1000</span></div>
               </div>
               <div className="w-16 h-16 rounded-full border-[4px] border-zinc-800 border-t-accent border-r-accent flex items-center justify-center shadow-[0_0_15px_rgba(85,234,140,0.2)]">
                 <span className="text-xs font-mono text-accent">45%</span>
               </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
