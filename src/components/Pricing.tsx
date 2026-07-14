"use client";

import { motion } from "motion/react";
import { Check, ArrowRight } from "lucide-react";

/**
 * Sourced from the founder-locked pricing plan:
 *   docs/pricing/el-pricing-plan.html (el-platform) — the 4-lane plan copy/prices.
 *   packages/shared/src/credits.ts `CREDIT_COSTS` — the authoritative, currently-
 *     implemented per-action credit table (v1.2). Note: outreach is a single FLAT
 *     25-credit charge (email/voice/WhatsApp — reveal folded in), which supersedes
 *     the older 15/email · 25/voice split still shown in the HTML doc.
 */

interface Plan {
  name: string;
  tag: string;
  kind: string;
  price: string;
  priceNote?: string;
  features: string[];
  cta: string;
  highlight?: boolean;
}

const PLANS: Plan[] = [
  {
    name: "Freelancer",
    kind: "Per action",
    tag: "Freelance recruiters & small agencies",
    price: "$120",
    priceNote: "/month",
    features: [
      "1,000 credits / month",
      "1 seat · 3 pipelines",
      "$0.12 per credit",
      "No hire fee, ever",
    ],
    cta: "Start for free",
  },
  {
    name: "Company",
    kind: "Per action",
    tag: "Startups with a hiring / TA lead",
    price: "$150",
    priceNote: "/month",
    features: [
      "1,500 · 4,500 · 10,000 credit packs",
      "Unlimited pipelines · +$25 / seat",
      "$0.10 → $0.07 per credit",
      "No hire fee, ever",
    ],
    cta: "Start for free",
    highlight: true,
  },
  {
    name: "Success fee",
    kind: "Per hire",
    tag: "Companies buying the outcome",
    price: "6%",
    priceNote: "of annual CTC",
    features: [
      "Pay only when you hire",
      "$750 floor per hire",
      "Vetted intros · recruiter-in-loop",
      "90-day refund or replace",
    ],
    cta: "Talk to us",
  },
  {
    name: "Enterprise",
    kind: "Custom",
    tag: "Volume hirers & GCCs",
    price: "$7K–18K",
    priceNote: "/year",
    features: [
      "Custom credit volume",
      "$0.05 per credit · 5% fee",
      "SLAs · dedicated recruiter",
      "SSO · DPA · managed option",
    ],
    cta: "Contact sales",
  },
];

export function Pricing() {
  return (
    <section
      id="pricing"
      className="py-32 md:py-40 relative overflow-hidden bg-zinc-950"
    >
      {/* Background soft ambient glowing mesh grids */}
      <div className="absolute right-0 top-1/4 w-[600px] h-[600px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent/5 via-transparent to-transparent pointer-events-none blur-3xl" />
      <div className="absolute left-0 bottom-1/4 w-[600px] h-[600px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold/3 via-transparent to-transparent pointer-events-none blur-3xl" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-8 relative z-10">
        {/* Top Center: Title and Subtext */}
        <div className="text-center max-w-4xl mx-auto mb-16 md:mb-20">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-medium text-white mb-6 tracking-tight leading-[1.05]">
            Priced for every <span className="text-accent italic">level</span>
            <br />
            of company.
          </h2>

          <p className="text-zinc-400 text-sm md:text-base leading-relaxed max-w-xl mx-auto">
            Pay per action for the tool, or per hire for the outcome — never
            both.
          </p>
        </div>

        {/* 4-lane plan grid: 2 credit-based (Freelancer, Company), 1 outcome-based
            (Success fee), 1 Enterprise — matches the founder-locked plan exactly. */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
          {PLANS.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className={`glass-card relative flex flex-col rounded-sm p-6 ${
                plan.highlight ? "glass-card-accent" : ""
              }`}
            >
              {/* top row: pricing-model eyebrow + popular badge */}
              <div className="mb-6 flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-500">
                  {plan.kind}
                </span>
                {plan.highlight && (
                  <span className="rounded-full border border-accent/40 bg-accent/[0.12] px-2 py-0.5 text-[10px] font-medium text-accent">
                    Popular
                  </span>
                )}
              </div>

              <h3 className="text-xl font-display font-medium text-white">
                {plan.name}
              </h3>
              <p className="mt-1.5 mb-6 text-xs text-zinc-500 leading-relaxed min-h-[32px]">
                {plan.tag}
              </p>

              <div className="mb-6 flex items-baseline gap-1.5">
                <span className="text-4xl font-display font-semibold text-white tracking-tight">
                  {plan.price}
                </span>
                {plan.priceNote && (
                  <span className="text-sm text-zinc-500">{plan.priceNote}</span>
                )}
              </div>

              <div className="mb-6 border-t border-white/10" />

              <ul className="space-y-3 flex-1 mb-7">
                {plan.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-2.5 text-[13px] text-zinc-300 leading-snug"
                  >
                    <span
                      className={`mt-px grid h-4 w-4 shrink-0 place-items-center rounded-full ${
                        plan.highlight ? "bg-accent/15 text-accent" : "bg-white/5 text-zinc-400"
                      }`}
                    >
                      <Check className="h-2.5 w-2.5" strokeWidth={3} />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="https://app.employlabs.ai"
                className={`group/cta w-full flex items-center justify-center gap-2 py-2.5 rounded-sm text-sm font-medium transition-colors cursor-pointer ${
                  plan.highlight
                    ? "bg-accent text-black hover:bg-white"
                    : "border border-white/15 text-white hover:bg-white/5"
                }`}
              >
                {plan.cta}
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/cta:translate-x-0.5" />
              </a>
            </motion.div>
          ))}
        </div>

        {/* Regional credit-value note — full width */}
        <p className="mt-10 w-full text-center text-[13px] text-zinc-500 leading-relaxed">
          Credit value scales with the hiring market — higher in tier-1 regions
          (US / EU), lower in tier-2 like India.
        </p>
      </div>
    </section>
  );
}
