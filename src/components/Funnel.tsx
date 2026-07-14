"use client";

import { Fragment, useRef, useState, type ComponentType } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
  useMotionValueEvent,
  type MotionValue,
} from "motion/react";
import type { LucideIcon } from "lucide-react";
import {
  FileText, Upload, Check, Mail, MessageSquare, Paperclip,
  Calendar, Mic, Award, Sparkles, Box, ArrowUp,
  BarChart, FileSearch,
  ClipboardList, Target, Lightbulb, Activity, ChevronRight,
} from "lucide-react";

interface StepMeta {
  label: string;
  title: string;
  Icon: LucideIcon;
}

/** Every illustration takes the same shape: a 0→1 scroll-local progress value
 *  that sweeps once per visit to this step's dwell window (resets each time
 *  you scroll back into it — see `localT` below). Optional so a bare
 *  `<Ill />` (used on mobile, which has no scroll-scrub) still renders fully
 *  revealed via each component's own `useMotionValue(1)` fallback. */
type IllustrationProps = { progress?: MotionValue<number> };

const steps: StepMeta[] = [
  { label: "Step 01", Icon: Upload, title: "Upload the Job" },
  { label: "Step 02", Icon: FileSearch, title: "Build the ICP" },
  { label: "Step 03", Icon: Sparkles, title: "Select the Persona" },
  { label: "Step 04", Icon: BarChart, title: "Score & Shortlist" },
  { label: "Step 05", Icon: Mail, title: "Reach Out & Automate" },
  { label: "Step 06", Icon: Calendar, title: "Autonomous Scheduling" },
  { label: "Step 07", Icon: Mic, title: "AI Voice Interview" },
  { label: "Step 08", Icon: Award, title: "Make the Offer" },
];

// slide width (px) + connector width (px) — must match the markup below
const SLIDE_W = 760;
const CONNECTOR_W = 88;
const STEP_PX = SLIDE_W + CONNECTOR_W;

export function Funnel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const [active, setActive] = useState(0);
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const s = Math.min(steps.length - 1, Math.max(0, Math.floor(v * steps.length)));
    setActive((prev) => (prev === s ? prev : s));
  });

  // vertical scroll → snap the track so the active slide stays pinned (bright)
  // for its whole scroll window, kept in sync with `active` and the left text.
  const targetX = useTransform(scrollYProgress, (v) => {
    const i = Math.min(steps.length - 1, Math.max(0, Math.floor(v * steps.length)));
    return -i * STEP_PX;
  });
  const x = useSpring(targetX, { stiffness: 110, damping: 22, mass: 0.6 });

  // Per-step LOCAL progress — a 0→1 sawtooth that resets at every step
  // boundary. Every illustration reads this directly (a live MotionValue, no
  // React re-render) to scrub its own internal reveal — typing, chat bubbles
  // landing, rows staggering in — in lockstep with the scrollbar, not a fixed
  // mount-time duration. Scrolling back into a step replays it naturally,
  // since it's just scroll position, not a one-shot animation.
  const localT = useTransform(scrollYProgress, (v) => {
    const scaled = v * steps.length;
    const clamped = Math.min(steps.length - 1e-6, Math.max(0, scaled));
    return clamped - Math.floor(clamped);
  });

  const illustrations: ComponentType<IllustrationProps>[] = [
    Step0Upload, Step1ICP, Step2Persona, Step3Score,
    Step4Outreach, Step5Schedule, Step6Interview, Step7Offer,
  ];

  return (
    <section ref={containerRef} id="funnel" className="relative bg-transparent lg:h-[650vh]">
      {/* ---------- Desktop: pinned horizontal scroll ---------- */}
      <div className="sticky top-0 hidden h-screen w-full items-start overflow-hidden pt-24 xl:pt-28 lg:flex">
        <div className="mx-auto grid w-full max-w-[1520px] grid-cols-[minmax(280px,30%)_1fr] items-center gap-8 px-8 xl:px-12">
          {/* Left — headline */}
          <div className="relative">
            <div className="relative overflow-hidden mb-6 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-card/70 backdrop-blur-md border border-white/10 text-[11px] font-mono uppercase tracking-[0.2em] text-zinc-300 shadow-lg before:absolute before:inset-x-3 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent before:content-['']">
              <span className="h-1.5 w-1.5 rounded-full bg-white" />
              The Autonomous Funnel
            </div>
            <h2 className="font-title text-4xl leading-[1.08] tracking-tight text-white xl:text-[3.2rem]">
              From <span className="text-accent">Job Post</span>
              <br />
              to Final <span className="text-accent">Hire</span>.
            </h2>
            <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-zinc-400">
              EmployLabs runs the entire hiring funnel autonomously — you just decide
              at the gates. Watch a single job post become a signed offer.
            </p>
            <div className="mt-8 flex items-center gap-3">
              <span className="font-mono text-xs text-accent">{steps[active].label}</span>
              <span className="h-4 w-px bg-white/20" />
              <span className="text-sm font-medium text-white">{steps[active].title}</span>
            </div>
            <div className="mt-5 flex items-center gap-2">
              {steps.map((_, i) => (
                <span
                  key={i}
                  className={`h-[3px] rounded-full transition-all duration-500 ${
                    i === active ? "w-9 bg-accent" : "w-5 bg-zinc-700"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Right — horizontal illustration track */}
          <div className="relative h-[660px] overflow-hidden border-l border-white/10 pl-8 xl:pl-12">
            <div className="absolute inset-y-0 left-8 right-0 flex items-center xl:left-12">
              <motion.div style={{ x }} className="flex h-full items-center">
                {steps.map((s, i) => {
                  const Ill = illustrations[i];
                  const isActive = i === active;
                  return (
                    <Fragment key={s.label}>
                      <motion.div
                        animate={{ opacity: isActive ? 1 : 0.32, scale: isActive ? 1 : 0.94 }}
                        transition={{ duration: 0.45, ease: "easeOut" }}
                        style={{ width: SLIDE_W }}
                        className="relative flex shrink-0 flex-col"
                      >
                        {/* minimal label — no box */}
                        <div className="mb-4 flex items-center justify-end gap-2 pr-1">
                          <s.Icon className={`h-4 w-4 ${isActive ? "text-accent" : "text-zinc-600"}`} />
                          <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-500">
                            {s.label}
                          </span>
                          <span className="font-title text-lg tracking-tight text-white">
                            {s.title}
                          </span>
                        </div>
                        <div className="relative h-[600px] w-full">
                          <div className="absolute inset-0 flex items-center justify-center">
                            {/* Step0 (JD) + Step2 (Persona) scrub `progress`; the
                                rest replay their entrance on activate via the key flip. */}
                            <Ill key={isActive ? `on-${i}` : `off-${i}`} progress={localT} />
                          </div>
                        </div>
                      </motion.div>
                      {i < steps.length - 1 && <Connector />}
                    </Fragment>
                  );
                })}
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* ---------- Mobile: vertical stack ---------- */}
      <div className="px-6 py-24 lg:hidden">
        <div className="relative overflow-hidden mb-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-card/70 backdrop-blur-md border border-white/10 text-[11px] font-mono uppercase tracking-[0.2em] text-zinc-300 shadow-lg before:absolute before:inset-x-3 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent before:content-['']">
          <span className="h-1.5 w-1.5 rounded-full bg-white" />
          The Autonomous Funnel
        </div>
        <h2 className="font-title text-4xl leading-[1.1] tracking-tight text-white">
          From <span className="text-accent">Job Post</span> to Final{" "}
          <span className="text-accent">Hire</span>.
        </h2>
        <div className="mt-10 space-y-6">
          {steps.map((s, i) => {
            const Ill = illustrations[i];
            return (
              <div key={s.label} className="rounded-2xl border border-white/10 bg-surface/60 p-4">
                <div className="mb-3 flex items-center gap-2">
                  <s.Icon className="h-4 w-4 text-accent" />
                  <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-zinc-500">
                    {s.label}
                  </span>
                  <span className="ml-auto font-title text-lg text-white">{s.title}</span>
                </div>
                <div className="relative h-[360px] overflow-hidden rounded-xl">
                  <div className="absolute inset-0 flex items-center justify-center">
                    {/* no `progress` on mobile — each illustration's own
                        useMotionValue(1) fallback renders it fully revealed. */}
                    <Ill />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Connector() {
  return (
    <div className="flex shrink-0 items-center justify-center" style={{ width: CONNECTOR_W }}>
      <div className="relative flex w-full items-center">
        {/* rail with a traveling accent "data packet" toward the next stage */}
        <div className="relative h-px flex-1 overflow-hidden bg-white/12">
          <span className="absolute top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-accent shadow-[0_0_8px_var(--color-accent)] animate-[connPacket_1.8s_ease-in-out_infinite]" />
        </div>
        <ChevronRight className="-ml-1 h-3.5 w-3.5 text-accent/60" />
      </div>
    </div>
  );
}

/** Resolve the incoming `progress` (desktop, scroll-scrubbed) or fall back to
 *  a static fully-revealed value (mobile / no scroll-scrub context). Always
 *  calls the hook (rules-of-hooks safe) — the fallback is simply unused when
 *  a live value is supplied. */
function useProgress(progress?: MotionValue<number>): MotionValue<number> {
  const fallback = useMotionValue(1);
  return progress ?? fallback;
}

function Step0Upload({ progress }: IllustrationProps) {
  const p = useProgress(progress);
  // Card frame settles in first…
  const frameOpacity = useTransform(p, [0, 0.06], [0, 1]);
  const frameScale = useTransform(p, [0, 0.06], [0.95, 1]);
  // …then the JD text "writes itself" — a left-to-right clip reveal over a
  // monospace block reads convincingly as typing without per-character spans.
  // Extended (vs. a single-section reveal) so it plays out across
  // Requirements → Responsibilities → Nice-to-haves as you scroll.
  const textClip = useTransform(p, [0.1, 0.68], [100, 0]);
  const clipPath = useTransform(textClip, (v) => `inset(0 ${v}% 0 0)`);
  // …then the floating composer arrives once the "JD" has finished typing.
  const inputOpacity = useTransform(p, [0.74, 0.9], [0, 1]);
  const inputY = useTransform(p, [0.74, 0.9], [16, 0]);

  return (
    <motion.div
      style={{ opacity: frameOpacity, scale: frameScale }}
      className="w-full max-w-sm md:max-w-md mx-auto relative flex flex-col items-center justify-center h-full"
    >
      <div className="w-full relative">
        <div className="h-80 md:h-[480px] w-full bg-zinc-900 border border-accent relative group overflow-hidden">
           <div className="absolute top-[-3px] left-[-3px] w-1.5 h-1.5 bg-accent z-10" />
           <div className="absolute top-[-3px] right-[-3px] w-1.5 h-1.5 bg-accent z-10" />
           <div className="absolute bottom-[-3px] left-[-3px] w-1.5 h-1.5 bg-accent z-10" />
           <div className="absolute bottom-[-3px] right-[-3px] w-1.5 h-1.5 bg-accent z-10" />

           <motion.div
             style={{ clipPath }}
             className="absolute inset-0 p-6 md:p-7 text-zinc-400 font-mono text-[11px] leading-relaxed opacity-60 flex flex-col gap-3.5 overflow-hidden"
           >
             <div className="text-white text-sm">ROLE: Lead Staff Site Reliability Engineer</div>
             <div>
               REQUIREMENTS:<br/>
               - 8+ years of production Go &amp; Kubernetes experience<br/>
               - Expertise in distributed systems &amp; eBPF<br/>
               - Track record of leading infra teams at scale
             </div>
             <div>
               RESPONSIBILITIES:<br/>
               - Architect global load balancing tier<br/>
               - Mentorship and technical direction<br/>
               - Drive multi-region failover strategy
             </div>
             <div>
               NICE-TO-HAVE:<br/>
               - Rust or systems-level language exposure<br/>
               - Public speaking / conference talks<br/>
               - Open-source infra contributions
             </div>
           </motion.div>
           <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-zinc-900 pointer-events-none" />
        </div>

        {/* Floating input box */}
        <motion.div
          style={{ opacity: inputOpacity, y: inputY }}
          className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[95%] max-w-[400px] bg-surface-800 border border-white/10 rounded-2xl p-3 shadow-2xl backdrop-blur-xl z-20"
        >
           <div className="flex items-center gap-3 mb-2 md:mb-3">
             <div className="bg-zinc-800 rounded-lg px-2 py-1.5 text-xs text-white flex items-center gap-1.5 border border-white/5 shrink-0">
                <FileText className="w-3 h-3" /> Job Description
             </div>
             <div className="text-zinc-300 text-xs md:text-sm truncate">Analyze this JD and build an ideal candi...</div>
           </div>

           <div className="flex items-center justify-between mt-2 pt-2 border-t border-white/5">
             <button className="p-1.5 text-zinc-500 hover:text-white transition-colors">
               <Paperclip className="w-4 h-4" />
             </button>
             <div className="flex items-center gap-2">
               <button className="p-1.5 text-zinc-500 hover:text-white transition-colors">
                 <Box className="w-4 h-4" />
               </button>
               <button className="w-6 h-6 md:w-7 md:h-7 rounded-full bg-white text-black flex items-center justify-center hover:bg-zinc-200 transition-colors">
                 <ArrowUp className="w-3 h-3 md:w-4 md:h-4" />
               </button>
             </div>
           </div>
        </motion.div>
      </div>
    </motion.div>
  )
}


function Step1ICP() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.97 }}
      transition={{ duration: 0.4 }}
      className="mx-auto w-full max-w-xl"
    >
      <div className="rounded-2xl border border-white/10 bg-surface/80 p-5 shadow-2xl backdrop-blur-sm">
        {/* Meera header — sparkles is her mark (the single accent) */}
        <div className="mb-4 flex items-center gap-2.5 border-b border-white/5 pb-4">
          <div className="grid h-8 w-8 place-items-center rounded-full bg-accent/15 text-accent">
            <Sparkles className="h-4 w-4" />
          </div>
          <div>
            <div className="text-sm font-medium leading-none text-white">Meera</div>
            <div className="mt-1 font-mono text-[11px] uppercase tracking-widest text-zinc-500">AI recruiter</div>
          </div>
        </div>

        {/* Thread — 5 turns streamed in sequence */}
        <div className="space-y-3">
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="ml-auto max-w-[80%] rounded-2xl rounded-br-sm bg-white/10 px-3.5 py-2 text-[13px] text-white"
          >
            Find me a Lead Staff SRE — 8+ yrs, Go &amp; Kubernetes.
          </motion.div>

          {/* transient status line while Meera parses */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 1, 0] }}
            transition={{ delay: 0.4, duration: 1, times: [0, 0.2, 0.8, 1] }}
            className="flex items-center gap-2 pl-8 font-mono text-[11px] text-zinc-500"
          >
            <span className="h-1 w-1 animate-pulse rounded-full bg-accent" />
            Parsing job_description.pdf…
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.35 }}
            className="flex gap-2.5"
          >
            <div className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-accent/15 text-accent">
              <Sparkles className="h-3 w-3" />
            </div>
            <div className="flex-1">
              <p className="text-[13px] leading-relaxed text-zinc-300">
                Quick check — is this a people-manager role or a technical IC lead?
              </p>
              <div className="mt-2 flex flex-wrap gap-2">
                <span className="rounded-md bg-white px-2.5 py-1 text-[11px] font-medium text-black">Technical IC Lead</span>
                <span className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] text-zinc-300">People Manager</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.85 }}
            className="ml-auto max-w-[80%] rounded-2xl rounded-br-sm bg-white/10 px-3.5 py-2 text-[13px] text-white"
          >
            Technical IC Lead
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.2 }}
            className="flex gap-2.5"
          >
            <div className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-accent/15 text-accent">
              <Sparkles className="h-3 w-3" />
            </div>
            <div className="flex-1">
              <p className="text-[13px] leading-relaxed text-zinc-300">
                Built your ICP — 4 must-haves, high-availability derived from the JD.
              </p>
              <div className="mt-2.5 rounded-xl border border-white/8 bg-white/[0.02] p-3">
                <div className="mb-2 flex items-center justify-between">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-500">Required</span>
                  <span className="font-mono text-[11px] text-zinc-400">96% confident</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {["Golang", "Kubernetes", "eBPF", "High-Availability"].map((c) => (
                    <span key={c} className="rounded-md border border-white/10 bg-white/[0.04] px-2 py-0.5 text-[11px] text-zinc-200">
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Composer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.6 }}
          className="mt-4 flex items-center gap-2 rounded-xl border border-white/8 bg-black/30 px-3 py-2.5"
        >
          <span className="text-[13px] text-zinc-600">Message Meera…</span>
          <span className="ml-auto grid h-6 w-6 place-items-center rounded-lg bg-white/5 text-zinc-500">
            <ArrowUp className="h-3.5 w-3.5" />
          </span>
        </motion.div>
      </div>
    </motion.div>
  );
}



function Step2Persona({ progress }: IllustrationProps) {
  const p = useProgress(progress);
  const personas = [
    {
      id: 1, title: "The Architect",
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
      points: ["Depth over breadth", "System design first", "Comfortable owning ambiguity"],
    },
    {
      id: 2, title: "The Operator",
      img: "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=800&auto=format&fit=crop",
      points: ["Flawless execution", "Calm under production load", "Ships and owns outcomes"],
    },
    {
      id: 3, title: "The Optimizer",
      img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop",
      points: ["Performance-obsessed", "Thrives on hard constraints", "Data-driven decisions"],
    },
    {
      id: 4, title: "The Leader",
      img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=800&auto=format&fit=crop",
      points: ["Team growth focus", "Process at scale", "Mentors through delivery"],
    },
  ];

  return (
    <div className="w-full max-w-[1200px] mx-auto h-full flex items-center justify-center absolute inset-0 md:relative px-2 md:px-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 w-full">
        {personas.map((persona, i) => (
          <PersonaCell key={persona.id} persona={persona} index={i} p={p} />
        ))}
      </div>
    </div>
  )
}

function PersonaCell({
  persona,
  index,
  p,
}: {
  persona: { id: number; title: string; img: string; points: string[] };
  index: number;
  p: MotionValue<number>;
}) {
  const start = 0.05 + index * 0.18;
  const opacity = useTransform(p, [start, start + 0.2], [0, 1]);
  const y = useTransform(p, [start, start + 0.2], [20, 0]);
  const isSelected = index === 1;

  return (
    <motion.div
      style={{ opacity, y }}
      className={`flex flex-col gap-2 transition-all duration-500 ${!isSelected ? 'opacity-70 md:grayscale scale-95' : 'scale-100'}`}
    >
      {/* Box — real photo, no placeholder label (matches the original card:
          transparent border + plain title for non-selected; a sharp accent
          border + corner dots + a "Select Persona" button for the selected
          one — the only true addition here is the points list below). */}
      <div className={`relative aspect-[3/4] w-full bg-zinc-900 border ${isSelected ? 'border-accent' : 'border-transparent'}`}>
        {isSelected && (
          <>
             <div className="absolute top-[-3px] left-[-3px] w-1.5 h-1.5 bg-accent z-10" />
             <div className="absolute top-[-3px] right-[-3px] w-1.5 h-1.5 bg-accent z-10" />
             <div className="absolute bottom-[-3px] left-[-3px] w-1.5 h-1.5 bg-accent z-10" />
             <div className="absolute bottom-[-3px] right-[-3px] w-1.5 h-1.5 bg-accent z-10" />
          </>
        )}

        <img src={persona.img} alt={persona.title} className="w-full h-full object-cover absolute inset-0" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/40" />

        <div className="absolute inset-0 p-4 md:p-6 flex flex-col items-center justify-between text-center">
           <h4 className="text-lg md:text-2xl font-display font-medium text-white tracking-tight leading-tight mt-2 md:mt-4 drop-shadow-md">
             {persona.title}
           </h4>

           {isSelected && (
             <button className="bg-transparent border border-white rounded-full px-4 py-1.5 md:px-6 md:py-2 text-xs md:text-sm text-white backdrop-blur-sm hover:bg-white hover:text-black transition-colors">
               Select Persona
             </button>
           )}
        </div>
      </div>

      {/* 3 points below the box, for every persona */}
      <ul className="space-y-1 px-0.5">
        {persona.points.map((pt) => (
          <li key={pt} className="flex items-start gap-1.5 text-[10px] leading-snug text-zinc-500">
            <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-zinc-600" />
            {pt}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}


function Step3Score() {
  // Three candidates spanning the real tier system: cleared (green) / flagged
  // (amber) / disqualified (red) — the shortlist is a spread, not one card.
  const candidates = [
    {
      initials: "AR", name: "Alex Rivera", role: "Sr. SRE · Stripe",
      tier: "cleared" as const, tierLabel: "Cleared", score: 96,
      points: ["4/4 must-haves matched", "10y Go in production", "Architected Stripe's global ingress"],
    },
    {
      initials: "PN", name: "Priya Nair", role: "Staff Eng · Datadog",
      tier: "flagged" as const, tierLabel: "Flagged", score: 78,
      points: ["3/4 must-haves matched", "Light on Kubernetes depth"],
    },
    {
      initials: "MW", name: "Marcus Webb", role: "SRE II · Snap",
      tier: "gated" as const, tierLabel: "Disqualified", score: null,
      points: ["Below 5y seniority bar", "Auto-rejected — no manual review needed"],
    },
  ];
  const TIER_STYLE = {
    cleared: { badge: "border-accent/30 bg-accent/10 text-accent", score: "text-white", dot: "text-accent" },
    flagged: { badge: "border-amber-500/30 bg-amber-500/10 text-amber-400", score: "text-white", dot: "text-amber-400" },
    gated: { badge: "border-red-500/30 bg-red-500/10 text-red-400", score: "text-zinc-600", dot: "text-red-400" },
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.97 }}
      transition={{ duration: 0.4 }}
      className="mx-auto w-full max-w-lg"
    >
      <div className="mb-3 flex items-center justify-between px-1">
        <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-500">Shortlist · ranked by fit</span>
        <span className="font-mono text-[10px] text-zinc-600">800M+ scanned</span>
      </div>
      <div className="space-y-2.5">
        {candidates.map((c, i) => {
          const style = TIER_STYLE[c.tier];
          return (
            <motion.div
              key={c.initials}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 + i * 0.14 }}
              className="rounded-2xl border border-white/10 bg-surface/80 p-4 shadow-xl backdrop-blur-sm"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/10 bg-white/5 text-xs font-medium text-zinc-300">
                    {c.initials}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium text-white">{c.name}</span>
                      <span className={`rounded-full border px-2 py-0.5 font-mono text-[9px] uppercase tracking-wider ${style.badge}`}>
                        {c.tierLabel}
                      </span>
                    </div>
                    <div className="mt-0.5 text-xs text-zinc-500">{c.role}</div>
                  </div>
                </div>
                <div className={`font-mono text-lg font-semibold leading-none ${style.score}`}>
                  {c.score ?? "—"}
                </div>
              </div>
              <ul className="mt-2.5 space-y-1 border-t border-white/5 pt-2.5">
                {c.points.map((pt) => (
                  <li key={pt} className="flex items-start gap-1.5 text-[11px] leading-snug text-zinc-400">
                    <Check className={`mt-0.5 h-3 w-3 shrink-0 ${style.dot}`} />
                    {pt}
                  </li>
                ))}
              </ul>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}

function Step4Outreach() {
  const rows = [
    { Icon: Mail, ch: "Email", meta: "Attempt 1", status: "Opened", active: false },
    { Icon: MessageSquare, ch: "WhatsApp", meta: "Attempt 2", status: "Replied — interested", active: true },
    { Icon: Calendar, ch: "Follow-up", meta: "Auto", status: "Booking a slot", active: false },
  ];
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.97 }}
      transition={{ duration: 0.4 }}
      className="mx-auto w-full max-w-xl"
    >
      <div className="mb-4 flex items-center justify-between rounded-xl border border-white/10 bg-surface/70 px-5 py-3">
        <div className="flex items-center gap-2 text-base text-white">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" /> Outreach in progress
        </div>
        <span className="font-mono text-[11px] text-zinc-500">Zia · cadence</span>
      </div>

      {/* Cadence funnel — how the sequence is performing at a glance */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="mb-4 grid grid-cols-4 gap-2"
      >
        {[
          { label: "Queued", value: 42, accent: false },
          { label: "Sent", value: 38, accent: false },
          { label: "Opened", value: 21, accent: false },
          { label: "Replied", value: 6, accent: true },
        ].map((s) => (
          <div key={s.label} className="rounded-xl border border-white/8 bg-white/[0.02] px-2 py-2.5 text-center">
            <div className={`font-mono text-lg font-semibold leading-none ${s.accent ? "text-accent" : "text-white"}`}>
              {s.value}
            </div>
            <div className="mt-1 font-mono text-[9px] uppercase tracking-wider text-zinc-500">{s.label}</div>
          </div>
        ))}
      </motion.div>

      <div className="relative space-y-2.5 pl-5">
        <div className="absolute left-[9px] top-4 bottom-4 w-px bg-white/10" />
        {rows.map((c, i) => (
          <motion.div
            key={c.ch}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 + i * 0.12 }}
            className="relative"
          >
            <span
              className={`absolute -left-5 top-4 grid h-[18px] w-[18px] place-items-center rounded-full ring-4 ring-[#0e0e11] ${
                c.active ? "bg-accent text-black" : "border border-white/10 bg-zinc-800 text-zinc-400"
              }`}
            >
              <c.Icon className="h-2.5 w-2.5" />
            </span>
            <div className={`rounded-xl border p-3.5 ${c.active ? "border-accent/30 bg-accent/[0.04]" : "border-white/8 bg-surface/60"}`}>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-white">
                  {c.ch} <span className="text-xs font-normal text-zinc-500">· {c.meta}</span>
                </span>
                <span className={`font-mono text-[11px] ${c.active ? "text-accent" : "text-zinc-500"}`}>{c.status}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

function Step5Schedule() {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri"];
  const times = ["9:00", "10:00", "11:00", "2:00"];
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.97 }}
      transition={{ duration: 0.4 }}
      className="mx-auto w-full max-w-lg"
    >
      <div className="rounded-2xl border border-white/10 bg-surface/80 p-6 shadow-2xl backdrop-blur-sm">
        <div className="mb-5 flex items-center gap-3">
          <div className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/5 text-zinc-300">
            <Calendar className="h-4.5 w-4.5" />
          </div>
          <div>
            <div className="text-sm font-medium text-white">Talk to Zia</div>
            <div className="font-mono text-[10px] uppercase tracking-widest text-zinc-500">WhatsApp chat or phone call · your pick</div>
          </div>
        </div>

        {/* Mode toggle — the real candidate room's WhatsApp/Phone tabs */}
        <div className="mb-4 flex gap-1.5 rounded-xl border border-white/8 bg-black/20 p-1">
          <div className="flex-1 rounded-lg bg-accent py-2 text-center text-xs font-medium text-black">WhatsApp chat</div>
          <div className="flex-1 rounded-lg py-2 text-center text-xs font-medium text-zinc-500">Phone call</div>
        </div>

        <div className="mb-1.5 font-mono text-[10px] uppercase tracking-wide text-zinc-500">Pick a day</div>
        <div className="mb-3 flex gap-1.5">
          {days.map((d, i) => (
            <div
              key={d}
              className={`flex-1 rounded-lg border px-2 py-1.5 text-center text-xs ${
                i === 3 ? "border-white/20 bg-white/10 text-white" : "border-white/8 bg-white/[0.02] text-zinc-400"
              }`}
            >
              {d}
            </div>
          ))}
        </div>

        <div className="mb-1.5 font-mono text-[10px] uppercase tracking-wide text-zinc-500">Pick a time (IST)</div>
        <div className="grid grid-cols-4 gap-1.5">
          {times.map((t, i) => {
            const sel = i === 1;
            return (
              <motion.div
                key={t}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: sel ? 0.5 : 0.15 + i * 0.05 }}
                className={`rounded-lg border py-2 text-center text-xs font-medium ${
                  sel
                    ? "border-accent bg-accent text-black shadow-[0_0_18px_rgba(85,234,140,0.35)]"
                    : "border-white/8 bg-white/[0.03] text-zinc-400"
                }`}
              >
                {t}
              </motion.div>
            );
          })}
        </div>

        <button className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 py-2.5 text-sm font-medium text-white">
          Confirm — Thursday 10:00 AM
        </button>
      </div>
    </motion.div>
  );
}

function Step6Interview() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.97 }}
      transition={{ duration: 0.4 }}
      className="mx-auto w-full max-w-lg"
    >
      <div className="rounded-2xl border border-white/10 bg-surface/80 p-5 shadow-2xl backdrop-blur-sm">
        <div className="mb-5 flex items-center justify-between">
          <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-zinc-500">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" /> Live · Naira
          </div>
          {/* Real module lineup — M1..M4, the one in progress is the accent */}
          <div className="flex items-center gap-2.5 font-mono text-[10px] text-zinc-600">
            <span className="flex items-center gap-1 text-zinc-500"><Check className="h-2.5 w-2.5 text-accent" /> M1</span>
            <span className="text-accent">M2 · Scenario Triage</span>
            <span>M3</span>
            <span>M4</span>
          </div>
        </div>

        {/* AiPresence — the real avatar: two concentric rings + mic core */}
        <div className="mb-5 flex flex-col items-center py-2">
          <div className="relative grid h-16 w-16 place-items-center">
            <motion.span
              className="absolute inset-0 rounded-full bg-accent/15"
              animate={{ scale: [1.15, 1.35, 1.15] }}
              transition={{ repeat: Infinity, duration: 2.4, ease: "easeInOut" }}
            />
            <span className="absolute inset-0 rounded-full bg-accent/25" />
            <div className="relative grid h-11 w-11 place-items-center rounded-full bg-accent text-black">
              <Mic className="h-5 w-5" />
            </div>
          </div>
          <div className="mt-2.5 text-sm font-medium text-white">Naira</div>
          <div className="text-xs text-zinc-500">Listening</div>
        </div>

        <div className="space-y-2.5">
          <div className="max-w-[85%] rounded-xl rounded-tl-sm border border-white/8 bg-white/[0.03] p-3">
            <div className="mb-1 font-mono text-[10px] uppercase tracking-wider text-zinc-500">Naira</div>
            <div className="text-[13px] leading-relaxed text-zinc-300">Walk me through handling write-heavy load at peak.</div>
          </div>
          <div className="ml-auto max-w-[85%] rounded-xl rounded-tr-sm border border-white/8 bg-white/[0.05] p-3">
            <div className="mb-1 text-right font-mono text-[10px] uppercase tracking-wider text-zinc-500">You</div>
            <div className="text-[13px] leading-relaxed text-white">Write-behind Redis cache, batched flushes to Postgres…</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function Step7Offer() {
  const dims = [
    { k: "System Design", pips: 5 },
    { k: "Reliability", pips: 4 },
    { k: "Communication", pips: 4 },
  ];
  const activeSeg = 3; // "Aligned"
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.97 }}
      transition={{ duration: 0.4 }}
      className="mx-auto w-full max-w-lg"
    >
      <div className="rounded-2xl border border-white/10 bg-surface/80 p-5 shadow-2xl backdrop-blur-sm">
        <div className="mb-4 flex items-center justify-between border-b border-white/5 pb-4">
          <div>
            <div className="font-mono text-[10px] uppercase tracking-widest text-zinc-500">Naira Report Card</div>
            <div className="mt-1.5 flex items-center gap-1.5 text-xs text-zinc-500">
              <Mic className="h-3 w-3" /> Voice · Naira
            </div>
          </div>
          <div className="text-right">
            <div className="font-mono text-2xl font-semibold leading-none text-white">
              4.6<span className="text-sm text-zinc-500"> / 5</span>
            </div>
            <div className="mt-1 font-mono text-[10px] uppercase tracking-widest text-zinc-500">overall</div>
          </div>
        </div>

        {/* The real ReportCard's 4-tab strip — Assessment / Role Fit /
            Recommendations / Behavioral. "Assessment" is the active pane below. */}
        <div className="mb-4 flex gap-1 border-b border-white/5 pb-3 text-[11px]">
          <span className="flex items-center gap-1.5 rounded-lg bg-white/10 px-2.5 py-1.5 font-medium text-white">
            <ClipboardList className="h-3 w-3" /> Assessment
          </span>
          <span className="flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-zinc-500">
            <Target className="h-3 w-3" /> Role Fit
          </span>
          <span className="flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-zinc-500">
            <Lightbulb className="h-3 w-3" /> Recommendations
          </span>
          <span className="hidden items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-zinc-500 sm:flex">
            <Activity className="h-3 w-3" /> Behavioral
          </span>
        </div>

        {/* Role-alignment meter — active segment is the single accent */}
        <div className="mb-4">
          <div className="mb-2 flex items-center justify-between">
            <span className="font-mono text-[11px] uppercase tracking-widest text-zinc-500">Role alignment</span>
            <span className="rounded-full border border-accent/25 bg-accent/10 px-2.5 py-0.5 font-mono text-[11px] text-accent">Aligned</span>
          </div>
          <div className="flex gap-1.5">
            {[0, 1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className={`h-1.5 flex-1 rounded-full ${i === activeSeg ? "bg-accent" : i < activeSeg ? "bg-white/25" : "bg-white/8"}`}
              />
            ))}
          </div>
        </div>

        {/* RAR dimensions — 5-pip meters */}
        <div className="space-y-2.5">
          {dims.map((d, i) => (
            <motion.div
              key={d.k}
              initial={{ opacity: 0, x: -6 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + i * 0.08 }}
              className="flex items-center justify-between"
            >
              <span className="text-[13px] text-zinc-300">{d.k}</span>
              <div className="flex items-center gap-2.5">
                <div className="flex gap-1">
                  {[0, 1, 2, 3, 4].map((p) => (
                    <span key={p} className={`h-1.5 w-1.5 rounded-full ${p < d.pips ? "bg-zinc-300" : "bg-white/10"}`} />
                  ))}
                </div>
                <span className="w-6 text-right font-mono text-xs text-zinc-400">{d.pips}/5</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
