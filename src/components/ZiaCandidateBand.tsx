"use client";

import { ArrowRight, UserRound } from "lucide-react";

import { track } from "@/lib/analytics-events";
import { ziaCandidateUrl } from "@/lib/zia";

/**
 * The candidate exit on every page. The site is written for recruiters, but
 * candidates reach it from our outreach; this band is the one place that
 * speaks to them. It lives in the Footer so it ships on every page that
 * renders one, mobile included, without any page having to mount it.
 *
 * Zia is an independent product built by EmployLabs — never "our candidate
 * arm". Employers pay EmployLabs; candidates get Zia for free.
 */
export function ZiaCandidateBand() {
  return (
    <div className="glass-card rounded-sm px-6 py-6 md:px-8 flex flex-col md:flex-row md:items-center gap-5 md:gap-10">
      <div className="flex-1 min-w-0">
        <div className="relative overflow-hidden inline-flex items-center gap-2 px-3 py-1 rounded-full bg-card/70 backdrop-blur-md border border-white/10 text-zinc-300 text-xs font-mono uppercase tracking-widest mb-3 shadow-lg before:absolute before:inset-x-3 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent before:content-['']">
          <UserRound className="w-3.5 h-3.5 text-white" aria-hidden="true" />
          <span>For candidates</span>
        </div>
        <p className="text-zinc-200 text-base md:text-lg leading-relaxed max-w-3xl">
          Looking for your next role? Meet <span className="text-white font-medium">Zia</span> — a free AI career
          strategist for professionals in India, built by EmployLabs. Bring her an offer, salary or interview
          decision and leave with a plan.
        </p>
      </div>
      <a
        href={ziaCandidateUrl("footer_band")}
        target="_blank"
        rel="noopener"
        onClick={() => track({ name: "candidate_cta_clicked", params: { cta_location: "footer_band" } })}
        className="self-start md:self-center shrink-0 inline-flex items-center gap-2 h-11 px-5 rounded-sm bg-accent text-zinc-950 font-medium text-sm hover:bg-accent-hover transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
      >
        Talk to Zia
        <ArrowRight className="w-4 h-4" aria-hidden="true" />
        <span className="sr-only">(opens itszia.ai in a new tab)</span>
      </a>
    </div>
  );
}
