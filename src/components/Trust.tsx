"use client";

import { motion } from "motion/react";
import { ShieldCheck, Scale, FileKey, Database, CheckCircle2, Lock } from "lucide-react";

export function Trust() {
  const items = [
    {
      icon: Scale,
      title: "Algorithmic Fairness",
      desc: "Structured, rubric-based scoring. Naira asks the exact same baseline questions for everyone. Human-in-the-loop overrides prevent automated bias loops.",
      status: "Verified",
      accent: "#a5b4fc"
    },
    {
      icon: ShieldCheck,
      title: "Candidate Transparency",
      desc: "Instant, respectful, 24/7 engagement via Zia. Zero ghosting policy enforced by the system. Candidates are explicitly informed they are speaking to an AI agent.",
      status: "Active",
      accent: "var(--color-gold)"
    },
    {
      icon: Database,
      title: "Adaptive Learning Engine",
      desc: "Our AI securely learns from your hiring outcomes and feedback to continuously refine its sourcing and screening accuracy, getting smarter with every hire.",
      status: "Active",
      accent: "var(--color-accent)"
    },
    {
      icon: FileKey,
      title: "Your Data, Private",
      desc: "We never sell or share your data, and personal data stays yours. Role-based access ensures only your authorized reviewers can open final interview recordings.",
      status: "Protected",
      accent: "#f87171"
    }
  ];

  return (
    <section id="trust" className="py-32 md:py-40 relative bg-transparent overflow-hidden">
      <div className="absolute left-0 right-0 top-1/2 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative overflow-hidden inline-flex items-center gap-2 px-3 py-1 rounded-full bg-card/70 backdrop-blur-md border border-white/10 text-zinc-300 text-xs font-mono uppercase tracking-widest mb-6 shadow-lg before:absolute before:inset-x-3 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent before:content-['']"
            >
              <Lock className="w-3.5 h-3.5 text-white" />
              <span>Ethics & Security</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-display tracking-tight text-white leading-tight"
            >
              Responsible AI <br/><span className="text-zinc-500">by design.</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-zinc-400 max-w-md"
          >
            AI that interviews humans requires a higher standard. We built EmployLabs with fairness and security as core architectural primitives.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative flex flex-col p-7 rounded-sm bg-surface border border-white/[0.08] overflow-hidden transition-colors hover:border-white/15"
            >
              {/* subtle per-card accent glow (restrained) */}
              <div className="absolute -top-16 right-0 w-40 h-40 rounded-full blur-3xl opacity-[0.06] transition-opacity group-hover:opacity-[0.16]" style={{ background: item.accent }} />

              {/* icon + status */}
              <div className="relative flex items-center justify-between mb-6">
                <div className="grid h-11 w-11 place-items-center rounded-sm bg-white transition-transform group-hover:-translate-y-0.5">
                  <item.icon className="w-5 h-5 text-black" />
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] font-mono uppercase tracking-wider text-zinc-400">
                  <CheckCircle2 className="w-3 h-3" style={{ color: item.accent }} />
                  {item.status}
                </span>
              </div>

              <h3 className="relative text-lg font-display text-white mb-2">{item.title}</h3>
              <p className="relative flex-1 text-[13px] text-zinc-400 leading-relaxed">{item.desc}</p>

              {/* footer hairline — fills with the accent on hover */}
              <div className="relative mt-6 h-px w-full overflow-hidden bg-white/[0.08]">
                <div className="absolute inset-y-0 left-0 w-0 transition-all duration-500 ease-out group-hover:w-full" style={{ background: item.accent }} />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
