"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Star, X, Quote } from "lucide-react";
import { cn } from "@/lib/utils";

interface Company {
  id: string;
  name: string;
  sizeLabel: string;
  initials: string;
  color: string;
}

const companies: Company[] = [
  { id: "tc",  name: "TechCorp",     sizeLabel: "2,500 employees", initials: "TC", color: "bg-teal-500/20   text-teal-400"   },
  { id: "fs",  name: "FinanceStart", sizeLabel: "340 employees",   initials: "FS", color: "bg-indigo-500/20 text-indigo-400" },
  { id: "gs",  name: "GrowthScale",  sizeLabel: "1,200 employees", initials: "GS", color: "bg-purple-500/20 text-purple-400" },
  { id: "av",  name: "Avinova",      sizeLabel: "85 employees",    initials: "AV", color: "bg-amber-500/20  text-amber-400"  },
  { id: "bx",  name: "Buildex",      sizeLabel: "4,800 employees", initials: "BX", color: "bg-cyan-500/20   text-cyan-400"   },
  { id: "nr",  name: "NovioRetail",  sizeLabel: "710 employees",   initials: "NR", color: "bg-green-500/20  text-green-400"  },
  { id: "ph",  name: "PulseHealth",  sizeLabel: "3,100 employees", initials: "PH", color: "bg-rose-500/20   text-rose-400"   },
  { id: "dv",  name: "DataVantage",  sizeLabel: "560 employees",   initials: "DV", color: "bg-sky-500/20    text-sky-400"    },
];

interface Testimonial {
  id: string;
  quote: string;
  fullQuote: string;
  author: string;
  role: string;
  company: string;
  stars: number;
}

const testimonials: Testimonial[] = [
  { id: "t1", quote: "Cut our hiring time by 60% while improving quality.", fullQuote: "We went from a 6-week process to under 2.5 weeks without sacrificing any rigor. The structured rubrics gave our hiring managers objective data to back every offer decision.", author: "Sarah Chen", role: "VP Engineering", company: "TechCorp", stars: 5 },
  { id: "t2", quote: "Finally, objective data we can trust.", fullQuote: "Before EmployLabs, every hire was a gut call. Now we have 94% accuracy scores, bias audits, and a full rubric trail. Confidence in hiring went through the roof.", author: "Michael Roberts", role: "Head of Talent", company: "FinanceStart", stars: 5 },
  { id: "t3", quote: "The bias audit report alone was worth the price.", fullQuote: "We flagged a subtle but consistent scoring gap in our previous process. EmployLabs surfaced it in the first quarterly audit. We retrained our rubric and the gap disappeared entirely.", author: "Priya Nair", role: "Chief People Officer", company: "GrowthScale", stars: 5 },
  { id: "t4", quote: "Candidates comment on how professional the process feels.", fullQuote: "Every candidate receives a structured feedback report within 48 hours. Even rejected candidates say they'd apply again. Our employer brand NPS jumped 22 points after switching.", author: "James Lindqvist", role: "Talent Lead", company: "Avinova", stars: 5 },
  { id: "t5", quote: "Six-month retention improved from 71% to 89%.", fullQuote: "The work sample evaluation predicted long-term performance better than any interview format we had used before. We saw the retention jump within the very first cohort.", author: "Dana Osei", role: "Engineering Manager", company: "Buildex", stars: 5 },
  { id: "t6", quote: "Scaled from 50 to 400 hires per year without adding headcount.", fullQuote: "The automated rubric delivery handled the volume surge. We added zero additional recruiters while 8x-ing our hiring output. That's ROI we can actually show the board.", author: "Camille Torres", role: "Director of People", company: "NovioRetail", stars: 5 },
  { id: "t7", quote: "Zero PII concerns — security approved it in one review cycle.", fullQuote: "Our security team typically takes 3 months to approve new vendors. EmployLabs' SOC 2 Type II cert and one-way hash architecture cleared review in under two weeks.", author: "Oliver Park", role: "CISO", company: "PulseHealth", stars: 5 },
  { id: "t8", quote: "Custom rubric matched our culture in ways off-the-shelf tools never could.", fullQuote: "The 2-week validation cycle to build our custom behavioral dimensions was surprisingly rigorous. They ran ICC reliability tests before going live. That level of psychometric care is unheard of in this space.", author: "Alicia Mbeki", role: "Head of Engineering", company: "DataVantage", stars: 5 },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <Star key={i} aria-hidden="true" className={cn("h-3 w-3", i < count ? "fill-teal-400 text-teal-400" : "text-text-muted")} />
      ))}
    </div>
  );
}

function LogoTile({ company }: { company: Company }) {
  return (
    <div className="group/logo relative shrink-0 flex flex-col items-center justify-center gap-1 w-30 h-18 rounded-xl cursor-default" aria-label={`${company.name} — ${company.sizeLabel}`}>
      <div className={cn("flex items-center justify-center w-10 h-10 rounded-xl font-bold text-sm transition-all duration-300 ease-out grayscale opacity-35 group-hover/logo:grayscale-0 group-hover/logo:opacity-100 group-hover/logo:scale-110", company.color)}>
        {company.initials}
      </div>
      <div className="flex flex-col items-center gap-0.5 overflow-hidden max-h-0 opacity-0 group-hover/logo:max-h-7 group-hover/logo:opacity-100 transition-all duration-200 ease-out">
        <span className="text-[9px] font-semibold uppercase tracking-widest text-text-secondary whitespace-nowrap leading-none">{company.name}</span>
        <span className="text-[8px] text-text-muted whitespace-nowrap leading-none">{company.sizeLabel}</span>
      </div>
    </div>
  );
}

function TestimonialCard({ testimonial, onClick }: { testimonial: Testimonial; onClick: (t: Testimonial) => void }) {
  const companyColor = companies.find((c) => c.name === testimonial.company)?.color ?? "bg-teal-500/20 text-teal-400";
  return (
    <motion.div
      role="button" tabIndex={0} aria-label={`Read ${testimonial.author}'s full case study`}
      onClick={() => onClick(testimonial)}
      onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") onClick(testimonial); }}
      whileHover={{ y: -3, boxShadow: "0 0 0 1px rgba(20,184,166,0.3), 0 6px 24px rgba(0,0,0,0.55)" }}
      transition={{ duration: 0.18, ease: "easeOut" as const }}
      className={cn("shrink-0 w-75 h-32.5 rounded-xl cursor-pointer select-none bg-bg-card border border-[rgba(255,255,255,0.07)] px-4 py-3 flex flex-col justify-between focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500")}
    >
      <p className="text-sm text-text-primary italic leading-snug line-clamp-2">&ldquo;{testimonial.quote}&rdquo;</p>
      <div className="flex items-center justify-between mt-auto pt-2">
        <div className="flex items-center gap-2">
          <div className={cn("flex items-center justify-center w-6 h-6 rounded-md text-[9px] font-bold shrink-0", companyColor)} aria-hidden="true">
            {testimonial.author.split(" ").map((n) => n[0]).join("")}
          </div>
          <div>
            <p className="text-xs font-semibold text-text-secondary leading-none">{testimonial.author}</p>
            <p className="text-[10px] text-text-muted leading-none mt-0.5">{testimonial.role} · {testimonial.company}</p>
          </div>
        </div>
        <Stars count={testimonial.stars} />
      </div>
    </motion.div>
  );
}

function TestimonialModal({ testimonial, onClose }: { testimonial: Testimonial; onClose: () => void }) {
  const companyColor = companies.find((c) => c.name === testimonial.company)?.color ?? "bg-teal-500/20 text-teal-400";
  return (
    <motion.div key="overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }} onClick={onClose} className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4" role="dialog" aria-modal="true">
      <motion.div initial={{ opacity: 0, scale: 0.94, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.94, y: 20 }} transition={{ duration: 0.22, ease: [0.4, 0, 0.2, 1] }} onClick={(e) => e.stopPropagation()} className="relative max-w-md w-full rounded-2xl p-6 flex flex-col gap-4 bg-zinc-900 border border-zinc-800">
        <button onClick={onClose} className="absolute top-4 right-4 p-1.5 rounded-lg text-text-muted hover:text-text-primary hover:bg-bg-inset transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500" aria-label="Close case study"><X className="h-4 w-4" /></button>
        <Quote className="h-6 w-6 text-teal-400 opacity-60" aria-hidden="true" />
        <p className="text-base text-text-primary italic leading-relaxed">&ldquo;{testimonial.fullQuote}&rdquo;</p>
        <Stars count={testimonial.stars} />
        <div className="flex items-center gap-3 pt-3 border-t border-border-subtle">
          <div className={cn("flex items-center justify-center w-10 h-10 rounded-xl font-bold text-sm shrink-0", companyColor)} aria-hidden="true">{testimonial.author.split(" ").map((n) => n[0]).join("")}</div>
          <div>
            <p className="text-sm font-semibold text-text-primary">{testimonial.author}</p>
            <p className="text-xs text-text-muted">{testimonial.role} · {testimonial.company}</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function TrustStrip() {
  const [activeModal, setActiveModal] = useState<Testimonial | null>(null);
  const doubledCompanies = [...companies, ...companies];
  const doubledTestimonials = [...testimonials, ...testimonials];

  return (
    <>
      <div className="relative overflow-x-hidden py-8 border-y border-zinc-900 marquee-mask group/strip bg-black" aria-label="Customer logos and testimonials">
        <div className="mb-6">
          <div className="flex gap-5 w-max animate-marquee will-change-transform group-hover/strip:paused">
            {doubledCompanies.map((company, i) => (
              <LogoTile key={`${company.id}-${i}`} company={company} />
            ))}
          </div>
        </div>
        <div>
          <div className="flex gap-4 w-max animate-marquee-reverse will-change-transform group-hover/strip:paused">
            {doubledTestimonials.map((t, i) => (
              <TestimonialCard key={`${t.id}-${i}`} testimonial={t} onClick={setActiveModal} />
            ))}
          </div>
        </div>
      </div>
      <AnimatePresence>
        {activeModal && <TestimonialModal testimonial={activeModal} onClose={() => setActiveModal(null)} />}
      </AnimatePresence>
    </>
  );
}
