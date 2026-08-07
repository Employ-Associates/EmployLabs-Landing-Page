"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import {
  Code, MessageSquare, Mic, CheckCircle2, Zap,
  Code2, ClipboardCheck
} from "lucide-react";

interface AgentFeature {
  title: string;
  detail?: string;
  active?: boolean;
}

interface AgentCardProps {
  key?: string;
  agent: any;
  index: number;
  total: number;
}

function AgentCard({ agent, index, total }: AgentCardProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track scroll position of each card container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const isLast = index === total - 1;

  // As the user scrolls, scale down earlier cards slightly, fade them, and move them up
  const scale = useTransform(scrollYProgress, [0, 1], [1, isLast ? 1 : 0.93]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, isLast ? 1 : 0.65]);
  const yOffset = useTransform(scrollYProgress, [0, 1], [0, isLast ? 0 : -40]);

  // Dynamic sticky top alignment so subsequent cards stack perfectly
  const stickyTop = 92 + index * 92;

  return (
    <div
      ref={containerRef}
      style={{
        top: `${stickyTop}px`,
        zIndex: index + 10
      }}
      className="sticky w-full bg-zinc-950 pt-5 pb-14 border-t border-white/5"
    >
      <motion.div
        style={{
          scale: isLast ? 1 : scale,
          opacity: isLast ? 1 : opacity,
          y: isLast ? 0 : yOffset,
        }}
        className="w-full flex flex-col"
      >
        {/* Agent Header (Title + 3 Columns) */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-6 mb-8">
          <div className="lg:w-2/5">
            <h3 className="text-3xl md:text-4xl font-display text-white tracking-tight leading-tight flex items-center flex-wrap gap-x-3 gap-y-1">
              <span className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: agent.accent }} />
              {agent.name}
              <span className="text-zinc-500 font-normal">— {agent.role}</span>
            </h3>
          </div>

          <div className="lg:w-1/2 lg:ml-auto grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 pt-2 lg:pt-0">
            {agent.features.slice(0, 3).map((feat: AgentFeature, idx: number) => (
              <div key={idx} className="border-t lg:border-l lg:border-t-0 lg:pl-6 border-white/10 pt-6 lg:pt-0">
                <h4 className="text-white text-sm font-medium mb-1">{feat.title}</h4>
                <p className="text-zinc-500 text-xs leading-relaxed">
                  {feat.detail}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Agent Main Content (Image/Widget + Side Info) */}
        <div className="flex flex-col lg:flex-row bg-surface border border-white/5 rounded-2xl overflow-hidden w-full shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] hover:shadow-[0_30px_70px_rgba(0,0,0,0.95)] transition-shadow duration-500 min-h-[500px] lg:h-[500px] relative group">

          {/* Subtle gradient hover effect */}
          <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.01] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />

          {/* Visual Area — the product screen as a browser window docked to the
              bottom edge (margin top/left/right, flush at the bottom). */}
          <div className="w-full lg:w-[60%] relative min-h-[420px] lg:min-h-0 flex items-end justify-center bg-surface lg:border-r border-white/5 overflow-hidden pt-6 px-6 sm:px-10">
            <img
              src={agent.bgImage}
              alt="Background"
              className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-[1.03] transition-transform duration-[4000ms] ease-out"
            />

            {/* Product screen — uniform fixed height, docked to the bottom */}
            <div className="relative z-20 flex h-[416px] w-full max-w-2xl flex-col rounded-t-xl border border-b-0 border-white/10 bg-[#151515]/95 backdrop-blur-2xl shadow-[0_-12px_60px_-15px_rgba(0,0,0,0.85)] overflow-hidden">
              {agent.renderWidget()}
            </div>
          </div>

          {/* Right Side Info Area */}
          <div className="w-full lg:w-[40%] flex flex-col p-8 lg:p-12 bg-surface relative z-10">
            <div className="flex items-center gap-3 mb-4">
              <agent.icon className="w-6 h-6" style={{ color: agent.accent }} />
              <h4 className="text-2xl font-display text-white">{agent.name} Capabilities</h4>
            </div>

            <p className="text-zinc-400 text-sm leading-relaxed mb-8">
              {agent.desc}
            </p>

            <button className="self-start rounded-full border border-white/10 px-6 py-2.5 text-xs font-medium text-white hover:bg-white/5 hover:border-white/20 transition-colors mb-8 cursor-pointer">
              Explore {agent.name}
            </button>

            <div className="space-y-6 mt-auto">
              {agent.features.slice(3).map((feat: AgentFeature, idx: number) => (
                <div key={idx} className="border-t border-white/10 pt-6 flex justify-between items-start">
                  <div>
                     <h5 className="text-white text-sm font-medium mb-1">{feat.title}</h5>
                     {feat.detail && (
                       <p className="text-zinc-500 text-xs leading-relaxed">{feat.detail}</p>
                     )}
                  </div>
                  {feat.active && (
                     <span className="w-2 h-2 rounded-full mt-1.5 shrink-0" style={{ backgroundColor: agent.accent }} />
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>
      </motion.div>
    </div>
  );
}

export function Agents() {
  const agents = [
    {
      id: "meera",
      screenUrl: "employlabs.ai / sourcing",
      name: "Meera",
      role: "The Recruiter Brain",
      icon: Code,
      accent: "var(--color-accent)",
      desc: "Meera reads the market before she reads résumés. She maps talent supply and comp, turns the role into sharp candidate personas, and sources the strongest matches from 800M+ profiles.",
      bgImage: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop",
      features: [
        { title: "Market Mapping", active: false, detail: "Maps live talent supply, comp bands, and where the top 1% sit." },
        { title: "Build Candidate Personas", active: false, detail: "Turns the role into sharp, sourceable ideal-candidate profiles." },
        { title: "Source from LinkedIn", active: false, detail: "Scans 800M+ profiles to surface the strongest matches." },
        {
          title: "Monitor & Improve",
          active: true,
          detail: "Tracks outcomes in production and continuously refines sourcing on real hiring signal."
        }
      ],
      renderWidget: () => (
        <div className="flex h-full flex-col text-left">
          {/* capability tabs */}
          <div className="flex items-center gap-1 px-4 pt-3 text-[11px]">
            <span className="px-2.5 py-1 text-zinc-500">Market map</span>
            <span className="px-2.5 py-1 text-zinc-500">Persona</span>
            <span className="rounded-md bg-white/10 px-2.5 py-1 text-white">Candidates</span>
            <span className="ml-auto font-mono text-zinc-500">Lead SRE</span>
          </div>
          {/* market map stats */}
          <div className="grid grid-cols-3 gap-2 px-4 py-3">
            {[
              { k: "Talent pool", v: "4,120" },
              { k: "Median comp", v: "$205k" },
              { k: "Hiring now", v: "38" },
            ].map((s) => (
              <div key={s.k} className="rounded-md border border-white/10 bg-white/[0.03] p-2.5">
                <div className="text-[10px] uppercase tracking-wider text-zinc-500">{s.k}</div>
                <div className="text-sm text-white mt-1">{s.v}</div>
              </div>
            ))}
          </div>
          {/* persona chips */}
          <div className="flex flex-wrap items-center gap-1.5 px-4 pb-3 text-[11px]">
            <span className="mr-1 uppercase tracking-wider text-zinc-500">Persona</span>
            {["Staff-level", "Go + K8s", "Scale-up", "Remote"].map((c) => (
              <span key={c} className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-zinc-300">{c}</span>
            ))}
          </div>
          {/* candidates */}
          <div className="border-t border-white/10 px-2 py-2">
            {[
              { n: "Alex Rivera", r: "Stripe · Infrastructure", s: 96, top: true },
              { n: "Priya Nair", r: "Razorpay · SRE", s: 91 },
              { n: "Marcus Webb", r: "Datadog · Platform", s: 88 },
              { n: "Sana Kapoor", r: "Cloudflare · Edge", s: 85 },
            ].map((c) => (
              <div key={c.n} className="flex items-center gap-3 rounded-md px-2.5 py-2 hover:bg-white/[0.04] transition-colors">
                <span className={`grid h-8 w-8 shrink-0 place-items-center rounded-full text-[11px] font-semibold ${c.top ? "bg-accent/15 text-accent" : "bg-white/5 text-zinc-300"}`}>
                  {c.n.split(" ").map((w) => w[0]).join("")}
                </span>
                <div className="min-w-0 flex-1">
                  <div className="text-[13px] text-white leading-tight">{c.n}</div>
                  <div className="text-[11px] text-zinc-500 truncate">{c.r}</div>
                </div>
                <span className="hidden shrink-0 rounded border border-white/10 px-1.5 py-0.5 text-[10px] text-zinc-500 sm:inline">LinkedIn</span>
                <div className="flex shrink-0 items-center gap-2.5">
                  <div className="hidden h-1 w-14 overflow-hidden rounded-full bg-white/10 md:block">
                    <div className="h-full rounded-full" style={{ width: `${c.s}%`, background: c.top ? "var(--color-accent)" : "rgba(255,255,255,0.35)" }} />
                  </div>
                  <span className={`font-mono text-sm ${c.top ? "text-accent" : "text-zinc-300"}`}>{c.s}</span>
                </div>
              </div>
            ))}
          </div>
          {/* footer */}
          <div className="mt-auto flex items-center justify-between border-t border-white/10 px-4 py-2.5 text-[11px] text-zinc-500">
            <span>812 scanned · sourced from LinkedIn</span>
            <span className="text-zinc-400">24 shortlisted</span>
          </div>
        </div>
      )
    },
    {
      id: "zia",
      screenUrl: "employlabs.ai / outreach",
      name: "Zia",
      role: "The Candidate Engager",
      icon: MessageSquare,
      accent: "var(--color-gold)",
      desc: "Zia owns the outreach lifecycle. She initiates contact across channels, handles objections in real time, and books interviews with interested talent — no back-and-forth.",
      bgImage: "https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=2052&auto=format&fit=crop",
      features: [
        { title: "Multi-channel Outreach", active: false, detail: "Reaches candidates on email + WhatsApp where they reply." },
        { title: "Dynamic Follow-ups", active: false, detail: "Adjusts timing and message to each candidate's engagement." },
        { title: "Objection Handling", active: false, detail: "Answers comp, role, and process questions instantly." },
        {
          title: "Autonomous Scheduling",
          active: true,
          detail: "Reads back interest and books the interview — zero calendar back-and-forth."
        }
      ],
      renderWidget: () => (
        <div className="flex h-full flex-col text-left">
          {/* candidate + channel + status */}
          <div className="flex items-center justify-between px-4 pt-3 text-[11px]">
            <span className="text-zinc-500">Alex Rivera · <span className="text-zinc-400">Email + WhatsApp</span></span>
            <span className="flex items-center gap-1 text-gold"><CheckCircle2 className="w-3.5 h-3.5" /> Replied</span>
          </div>
          {/* cadence funnel */}
          <div className="grid grid-cols-4 gap-2 px-4 pb-3">
            {[
              { k: "Queued", v: 42 },
              { k: "Sent", v: 38 },
              { k: "Opened", v: 21 },
              { k: "Replied", v: 6, on: true },
            ].map((s) => (
              <div key={s.k} className={`rounded-md border p-2 ${s.on ? "border-gold/30 bg-gold/10" : "border-white/10 bg-white/[0.03]"}`}>
                <div className="text-[10px] uppercase tracking-wider text-zinc-500">{s.k}</div>
                <div className={`text-sm ${s.on ? "text-gold" : "text-white"}`}>{s.v}</div>
              </div>
            ))}
          </div>
          {/* thread */}
          <div className="border-t border-white/10 p-3 space-y-2">
            <div className="max-w-[88%] rounded-lg rounded-tl-sm border border-white/10 bg-white/5 px-3 py-1.5">
              <div className="text-[10px] uppercase tracking-wider text-zinc-500">Zia · Day 1</div>
              <p className="text-[12.5px] text-zinc-300 leading-snug">Hi Alex — your Stripe ingress work stood out. Worth a quick chat?</p>
            </div>
            <div className="ml-auto max-w-[88%] rounded-lg rounded-tr-sm bg-white/10 px-3 py-1.5">
              <div className="text-right text-[10px] uppercase tracking-wider text-zinc-400">Alex · Day 2</div>
              <p className="text-[12.5px] text-white leading-snug">Interested. What&rsquo;s the comp band?</p>
            </div>
            <div className="max-w-[88%] rounded-lg rounded-tl-sm border border-gold/20 bg-gold/10 px-3 py-1.5">
              <div className="flex items-center gap-1 text-[10px] uppercase tracking-wider text-gold"><Zap className="w-3 h-3" /> Zia · auto-reply</div>
              <p className="text-[12.5px] text-zinc-200 leading-snug">$180&ndash;220k + equity. Thu 3pm or Fri 11am — lock one in?</p>
            </div>
          </div>
          {/* footer — booked */}
          <div className="mt-auto flex items-center gap-2 border-t border-white/10 px-4 py-2.5 text-[12px] text-zinc-300">
            <CheckCircle2 className="w-3.5 h-3.5 text-gold" /> Interview booked · Thu 3:00 PM
          </div>
        </div>
      )
    },
    {
      id: "naira",
      screenUrl: "employlabs.ai / assessment",
      name: "Naira",
      role: "The Interviewer",
      icon: Mic,
      accent: "#a5b4fc",
      desc: "Naira interviews like your best engineer would. She adapts the conversation to the role, spins up hands-on modules on the spot, and returns a structured, evidence-linked report you can actually trust.",
      bgImage: "https://images.unsplash.com/photo-1434394354979-a235cd36269d?q=80&w=2051&auto=format&fit=crop",
      features: [
        { title: "Adaptive Interview", active: false, detail: "A live, role-specific conversation that probes what matters." },
        { title: "Dynamic Modules", active: false, detail: "Spins up coding or system-design screens on the spot." },
        { title: "Capability Assessment", active: false, detail: "Measures the candidate against the role's real jobs-to-be-done." },
        {
          title: "Evidence-Based Report",
          active: true,
          detail: "A structured scorecard with every score linked to interview evidence — so you decide with trust."
        }
      ],
      renderWidget: () => (
        <div className="flex h-full flex-col text-left">
          {/* candidate + verdict */}
          <div className="flex items-center justify-between px-4 pt-3 text-[11px]">
            <span className="text-zinc-500">Alex Rivera · <span className="text-zinc-400">Lead SRE</span></span>
            <span className="rounded border border-indigo-400/30 bg-indigo-400/10 px-2 py-1 text-[10px] uppercase tracking-wider text-indigo-300">Strong hire</span>
          </div>
          {/* dynamic modules */}
          <div className="flex flex-wrap items-center gap-1.5 px-4 py-3">
            <span className="mr-1 text-[10px] uppercase tracking-wider text-zinc-500">Modules</span>
            {["Coding", "System Design", "Behavioral"].map((m) => (
              <span key={m} className="flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[11px] text-zinc-300">
                <span className="h-1.5 w-1.5 rounded-full bg-indigo-300" /> {m}
              </span>
            ))}
          </div>
          {/* overall score */}
          <div className="flex items-center justify-between border-t border-white/10 px-4 py-3">
            <div className="flex items-end gap-1.5">
              <span className="text-3xl font-display text-white leading-none">4.6</span>
              <span className="mb-0.5 text-sm text-zinc-500">/ 5.0 overall</span>
            </div>
            <span className="flex items-center gap-1.5 rounded border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] text-white">
              <Code2 className="w-3.5 h-3.5 text-indigo-300" /> Evidence-linked
            </span>
          </div>
          {/* dimensions with evidence */}
          <div className="border-t border-white/10 px-4 py-1">
            {[
              { d: "System design", s: 5, e: "Partitioned ingress cleanly past 40k rps." },
              { d: "Go concurrency", s: 4, e: "Explained worker-pool backpressure precisely." },
              { d: "Communication", s: 5, e: "Led the trade-off discussion end to end." },
            ].map((row) => (
              <div key={row.d} className="border-b border-white/[0.06] py-2.5 last:border-0">
                <div className="mb-1.5 flex items-center justify-between">
                  <span className="text-[13px] text-white">{row.d}</span>
                  <span className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((p) => (
                      <span key={p} className={`h-1.5 w-1.5 rounded-full ${p <= row.s ? "bg-indigo-300" : "bg-white/15"}`} />
                    ))}
                  </span>
                </div>
                <p className="text-[11px] leading-snug text-zinc-500">&ldquo;{row.e}&rdquo;</p>
              </div>
            ))}
          </div>
          {/* recommendation */}
          <div className="mt-auto flex items-center gap-2 border-t border-white/10 px-4 py-2.5 text-[12px] text-zinc-300">
            <ClipboardCheck className="w-3.5 h-3.5 text-indigo-300" /> Recommendation: advance to final
          </div>
        </div>
      )
    }
  ];

  return (
    <section id="agents" className="py-32 md:py-40 relative bg-zinc-950">
      <div className="max-w-[1400px] mx-auto px-6 relative z-10">

        {/* Header Section */}
        <div className="flex flex-col items-center justify-center text-center mb-24 max-w-3xl mx-auto">
          <div className="relative overflow-hidden inline-flex items-center gap-2 px-3 py-1 rounded-full bg-card/70 backdrop-blur-md border border-white/10 text-zinc-300 text-[10px] font-mono tracking-widest uppercase mb-6 shadow-lg before:absolute before:inset-x-3 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent before:content-['']">
            <span className="w-1.5 h-1.5 rounded-full bg-white" />
            ENTITY GRID
          </div>
          <h2 className="text-6xl md:text-7xl lg:text-8xl font-display text-white tracking-tight leading-[1.02]">
            Meet your AI team
          </h2>
        </div>

        {/* Stacked Agent Blocks */}
        <div className="relative flex flex-col gap-0 pb-12">
          {agents.map((agent, index) => (
            <AgentCard
              key={agent.id}
              agent={agent}
              index={index}
              total={agents.length}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
