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
      title: "Enterprise Compliance",
      desc: "SOC2 Type II, GDPR, and CCPA compliant infrastructure. Role-based access controls ensure only authorized reviewers can access final interview recordings.",
      status: "Certified",
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
              className="group flex flex-col justify-between p-8 rounded-sm bg-surface border border-zinc-800/80 hover:bg-surface-900 transition-colors relative overflow-hidden"
            >
              <div className="absolute -top-10 -right-10 w-40 h-40 opacity-5 blur-3xl rounded-full transition-opacity group-hover:opacity-20" style={{ backgroundColor: item.accent }} />

              <div>
                <div className="flex justify-between items-start mb-8">
                  <div className="w-12 h-12 rounded-sm bg-zinc-950 border border-white/5 flex items-center justify-center shrink-0 shadow-inner group-hover:scale-110 transition-transform">
                    <item.icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/5 border border-white/10">
                    <CheckCircle2 className="w-3 h-3" style={{ color: item.accent }} />
                    <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400">{item.status}</span>
                  </div>
                </div>

                <h3 className="text-xl font-display text-white mb-4">{item.title}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">{item.desc}</p>
              </div>

              <div className="mt-8 pt-6 border-t border-white/5">
                <div className="h-1 w-full bg-black/50 rounded-full overflow-hidden">
                  <div className="h-full w-full rounded-full" style={{ backgroundColor: item.accent }} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
