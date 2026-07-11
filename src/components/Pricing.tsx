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
  price: string;
  priceNote?: string;
  features: string[];
  cta: string;
  highlight?: boolean;
}

const PLANS: Plan[] = [
  {
    name: "Freelancer",
    tag: "Freelance recruiters & small agencies",
    price: "₹9,999",
    priceNote: "/month",
    features: [
      "1,000 credits included",
      "1 seat · 3 live pipelines",
      "Full funnel: source → engage → assess",
      "Contact reveals on · ₹8 overage",
      "We never take a % of your fee",
    ],
    cta: "Start for free",
  },
  {
    name: "Company",
    tag: "Startups with a hiring / TA lead",
    price: "₹12K–55K",
    priceNote: "/month",
    features: [
      "1,500 · 4,500 · 10,000 credits",
      "Rate drops ₹8 → ₹5.5 by tier",
      "Reveals on → no hire fee, ever",
      "+₹2K / extra seat · GST invoicing",
    ],
    cta: "Start for free",
    highlight: true,
  },
  {
    name: "Success fee",
    tag: "Companies buying the outcome",
    price: "6%",
    priceNote: "of annual CTC",
    features: [
      "Floor ₹60K · credits absorbed",
      "Vetted introductions, done for you",
      "Recruiter-in-the-loop",
      "90-day full refund or replace",
      "Pay only when you hire",
    ],
    cta: "Talk to us",
  },
  {
    name: "Enterprise",
    tag: "Volume hirers & GCCs",
    price: "₹6–15L",
    priceNote: "/year",
    features: [
      "Credits @ ₹4.5 · fee 5%",
      "SLAs + dedicated recruiter",
      "Managed hiring option 8–12%",
      "SSO, DPA, bias-audit export",
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
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-medium text-white mb-6 tracking-tight leading-tight">
            Priced for every level of company, <br />
            from <span className="text-accent italic">freelancer</span> to{" "}
            <span className="text-accent italic">enterprise</span>.
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
              {plan.highlight && (
                <span className="absolute -top-3 left-6 rounded-none bg-accent px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-black">
                  Most popular
                </span>
              )}

              <h3 className="text-lg font-display font-medium text-white mb-1.5">
                {plan.name}
              </h3>
              <p className="text-xs text-zinc-500 leading-relaxed mb-5 min-h-[32px]">
                {plan.tag}
              </p>

              <div className="mb-6">
                <span className="text-3xl font-display font-semibold text-white tracking-tight">
                  {plan.price}
                </span>
                {plan.priceNote && (
                  <span className="text-sm text-zinc-500 ml-1">
                    {plan.priceNote}
                  </span>
                )}
              </div>

              <ul className="space-y-2.5 flex-1 mb-6">
                {plan.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-2 text-[13px] text-zinc-400 leading-snug"
                  >
                    <Check
                      className={`mt-0.5 h-3.5 w-3.5 shrink-0 ${plan.highlight ? "text-accent" : "text-zinc-600"}`}
                    />
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="https://app.employlabs.ai"
                className={`w-full flex items-center justify-center gap-2 py-2.5 rounded-sm text-sm font-medium transition-colors cursor-pointer ${
                  plan.highlight
                    ? "bg-accent text-black hover:bg-white"
                    : "border border-white/10 text-white hover:bg-white/5"
                }`}
              >
                {plan.cta} <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
