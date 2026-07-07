"use client";

import { motion } from "motion/react";
import {
  Lock, Zap, Clock, Users, Calendar,
  Inbox, CheckCircle2, Workflow, Activity, TrendingUp,
  Target, DollarSign, Database, UserX, Cpu, X, Check, Mic
} from "lucide-react";

export function ParadigmShift() {
  const metrics = [
    { name: "Time to Shortlist", icon: Clock, ai: "3 Days", agency: "4-6 Weeks", tool: "N/A (Manual)" },
    { name: "Sourcing Reach", icon: Target, ai: "800M+ Profiles", agency: "Local Network", tool: "Inbound Only" },
    { name: "Cost per Hire", icon: DollarSign, ai: "$2,000 Flat", agency: "20% Base Salary", tool: "SaaS + Man Hours" },
    { name: "Screening Depth", icon: Database, ai: "Deep Tech Voice", agency: "Keyword Matching", tool: "Resume Parsing" },
  ];

  return (
    <section id="paradigm" className="py-32 md:py-40 relative overflow-hidden bg-zinc-950">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[800px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent/5 via-transparent to-transparent pointer-events-none blur-3xl" />

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="text-center mb-24 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-mono uppercase tracking-widest mb-8"
          >
            <Workflow className="w-3.5 h-3.5" />
            <span>The Paradigm Shift</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-display mb-8 tracking-tight text-white leading-tight"
          >
            The Paradigm Shift
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-zinc-400 leading-relaxed max-w-2xl mx-auto"
          >
            Traditional recruiting is a linear process bottlenecked by human time. We compress weeks into hours by running the entire funnel autonomously.
          </motion.p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

          {/* Row 1: Process Transformation */}

          {/* The Old Way */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 bg-surface rounded-sm p-8 lg:p-10 border border-white/5 relative flex flex-col group hover:border-red-500/20 transition-colors"
          >
            <div className="flex justify-between items-start mb-10">
              <div>
                <h3 className="text-2xl font-display text-white mb-2">The Old Way</h3>
                <p className="text-zinc-500 text-sm">Linear, manual, and bottlenecked.</p>
              </div>
              <div className="text-xs font-mono text-red-400 bg-red-400/10 px-3 py-1.5 rounded-full border border-red-400/20 flex items-center gap-2">
                <Clock className="w-3.5 h-3.5" />
                100+ Hours / Hire
              </div>
            </div>

            <div className="space-y-4 relative">
              {/* Vertical line connecting steps */}
              <div className="absolute left-6 top-6 bottom-6 w-px bg-zinc-800" />

              {[
                { icon: Users, title: "Manual Sourcing", desc: "Filtering profiles, reading resumes.", time: "40 hrs" },
                { icon: Inbox, title: "Cold Outreach", desc: "Writing emails, tracking replies.", time: "25 hrs" },
                { icon: Calendar, title: "Coordination", desc: "Back-and-forth scheduling.", time: "15 hrs" },
                { icon: Activity, title: "Initial Screens", desc: "Repetitive 30-min qualification calls.", time: "20 hrs" },
              ].map((step, i) => (
                <div key={i} className="flex items-center gap-6 relative z-10">
                  <div className="w-12 h-12 rounded-full bg-zinc-950 border border-zinc-800 flex items-center justify-center text-zinc-500 shrink-0">
                    <step.icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1 bg-zinc-950 border border-zinc-800/50 rounded-sm p-4 flex justify-between items-center group-hover:border-zinc-700 transition-colors">
                    <div>
                      <h4 className="text-sm font-medium text-zinc-300 mb-0.5">{step.title}</h4>
                      <p className="text-xs text-zinc-500">{step.desc}</p>
                    </div>
                    <span className="text-xs font-mono text-zinc-600">{step.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* The Autonomous Way */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-7 bg-surface rounded-sm p-8 lg:p-10 border border-accent/30 relative flex flex-col shadow-[0_0_50px_rgba(85,234,140,0.05)] overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="flex justify-between items-start mb-12 relative z-10">
              <div>
                <h3 className="text-2xl font-display text-white mb-2 flex items-center gap-3">
                  The Autonomous Way
                  <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                </h3>
                <p className="text-zinc-400 text-sm">Parallel execution at software scale.</p>
              </div>
              <div className="text-xs font-mono text-accent bg-accent/10 px-3 py-1.5 rounded-full border border-accent/20 flex items-center gap-2 shadow-[0_0_20px_rgba(85,234,140,0.2)]">
                <Zap className="w-3.5 h-3.5" />
                20 Mins / Hire
              </div>
            </div>

            {/* Isometric 3D scene — the autonomous pipeline as a rising stack */}
            <div className="flex-1 flex items-center justify-center relative z-10 min-h-[400px] md:min-h-[480px]">
              {/* ambient accent glow (screen space) */}
              <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/15 blur-[100px] pointer-events-none" />

              <motion.div
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="relative w-full [perspective:1400px] [perspective-origin:50%_45%]"
              >
                <div className="relative mx-auto h-[300px] w-[280px] [transform-style:preserve-3d] animate-[isoStackFloat_9s_ease-in-out_infinite]">

                  {/* Panel A — Execution (parallel agents), lowest/back */}
                  <div className="absolute left-1/2 top-[172px] h-[176px] w-[176px] [transform-style:preserve-3d]" style={{ transform: "translateX(-50%) translateZ(0px)" }}>
                    <div className="absolute inset-0 rounded-2xl border border-white/10 bg-surface/85 shadow-[0_35px_60px_-25px_rgba(0,0,0,0.95)]" />
                    <div className="absolute left-1/2 -top-9 h-9 w-px -translate-x-1/2 border-l border-dashed border-accent/40" />
                    <div className="absolute inset-0 grid place-items-center [transform-style:preserve-3d]">
                      <div style={{ transform: "rotateZ(42deg) rotateX(-58deg)" }} className="flex flex-col items-center gap-1.5">
                        <span className="mb-0.5 text-[9px] font-mono uppercase tracking-[0.2em] text-zinc-500">01 · Execution</span>
                        <div className="flex w-[88px] items-center gap-2 rounded-md border border-accent/25 bg-surface/95 px-2.5 py-1"><Database className="h-3.5 w-3.5 shrink-0 text-accent" /><span className="text-[11px] font-medium text-white">Meera</span></div>
                        <div className="flex w-[88px] items-center gap-2 rounded-md border border-accent/25 bg-surface/95 px-2.5 py-1"><Inbox className="h-3.5 w-3.5 shrink-0 text-accent" /><span className="text-[11px] font-medium text-white">Zia</span></div>
                        <div className="flex w-[88px] items-center gap-2 rounded-md border border-accent/25 bg-surface/95 px-2.5 py-1"><Mic className="h-3.5 w-3.5 shrink-0 text-accent" /><span className="text-[11px] font-medium text-white">Naira</span></div>
                      </div>
                    </div>
                  </div>

                  {/* Panel B — Decision (Human Gate), middle */}
                  <div className="absolute left-1/2 top-[86px] h-[176px] w-[176px] [transform-style:preserve-3d]" style={{ transform: "translateX(-50%) translateZ(80px)" }}>
                    <div className="absolute inset-0 rounded-2xl border border-accent/40 bg-surface/90 shadow-[0_0_45px_rgba(85,234,140,0.18),0_35px_60px_-25px_rgba(0,0,0,0.95)]" />
                    <div className="absolute left-1/2 -top-9 h-9 w-px -translate-x-1/2 border-l border-dashed border-accent/50" />
                    <div className="absolute inset-0 grid place-items-center [transform-style:preserve-3d]">
                      <div style={{ transform: "rotateZ(42deg) rotateX(-58deg)" }} className="flex flex-col items-center gap-2">
                        <div className="grid h-12 w-12 place-items-center rounded-full bg-accent text-black animate-[gatePulse_3s_ease-in-out_infinite]"><Lock className="h-5 w-5" /></div>
                        <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-accent">Human Gate</span>
                        <span className="text-[8px] font-mono uppercase tracking-[0.2em] text-zinc-500">02 · Decision</span>
                      </div>
                    </div>
                  </div>

                  {/* Panel C — Outcome (Hire Complete), front/top */}
                  <div className="absolute left-1/2 top-[0px] h-[176px] w-[176px] [transform-style:preserve-3d]" style={{ transform: "translateX(-50%) translateZ(160px)" }}>
                    <div className="absolute inset-0 rounded-2xl border border-white/15 bg-white shadow-[0_40px_70px_-20px_rgba(0,0,0,0.85)]" />
                    <div className="absolute inset-0 grid place-items-center [transform-style:preserve-3d]">
                      <div style={{ transform: "rotateZ(42deg) rotateX(-58deg)" }} className="flex flex-col items-center gap-1.5 text-center">
                        <CheckCircle2 className="h-7 w-7 text-black" />
                        <span className="text-[12px] font-bold uppercase tracking-wider text-black">Hire Complete</span>
                        <span className="text-[8px] font-mono uppercase tracking-[0.2em] text-zinc-400">03 · Outcome</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
