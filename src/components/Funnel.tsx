"use client";

import { useRef, useState, type ComponentType } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useMotionValue,
  useMotionValueEvent,
  type MotionValue,
} from "motion/react";
import type { LucideIcon } from "lucide-react";
import {
  FileText, Upload, Check, Mail, Paperclip,
  Calendar, Mic, Sparkles, Box, ArrowUp,
  ClipboardList, Target, Lightbulb, Activity, Shield,
  SlidersHorizontal, LayoutGrid, Users, Search, Flag, Star,
  ChevronUp, ChevronDown,
} from "lucide-react";

interface StepMeta {
  label: string;
  title: string;
  desc: string;
  Icon: LucideIcon;
}

/** Every illustration takes the same shape: a 0→1 scroll-local progress value
 *  that sweeps once per visit to this step's dwell window (resets each time
 *  you scroll back into it — see `localT` below). Optional so a bare
 *  `<Ill />` (used on mobile, which has no scroll-scrub) still renders fully
 *  revealed via each component's own `useMotionValue(1)` fallback. */
type IllustrationProps = { progress?: MotionValue<number> };

const steps: StepMeta[] = [
  { label: "Step 01", Icon: Upload, title: "Upload the JD",
    desc: "Drop in a job description. Meera reads it and gets to work — no forms, no setup." },
  { label: "Step 02", Icon: Sparkles, title: "Clarify the role",
    desc: "Meera asks a few sharp questions, then locks the ideal profile into an ICP." },
  { label: "Step 03", Icon: Users, title: "Pick the persona",
    desc: "She proposes candidate archetypes from your ICP. Choose who you're hiring for." },
  { label: "Step 04", Icon: SlidersHorizontal, title: "Set automation",
    desc: "Choose how hands-off to be. It runs the funnel on its own — pausing only where you asked." },
  { label: "Step 05", Icon: Mail, title: "Outreach",
    desc: "Zia reaches every candidate across email and WhatsApp, follows up, and books the interview." },
  { label: "Step 06", Icon: Mic, title: "Naira interview",
    desc: "Naira runs a live, adaptive voice interview — real questions, real probing." },
  { label: "Step 07", Icon: ClipboardList, title: "Final report",
    desc: "Every candidate comes back scored and explainable — evidence, dimensions, a clear call." },
  { label: "Step 08", Icon: LayoutGrid, title: "Kanban board",
    desc: "Watch the whole pipeline move in real time — sourced to offer — and step in at any gate." },
];

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

  // Per-step LOCAL progress — a 0→1 sawtooth that resets at every step
  // boundary. The scroll-scrubbed illustrations (Step0 JD typing, Persona
  // reveal) read this to sweep their internal reveal in lockstep with the
  // scrollbar; the rest just replay their entrance on the active key flip.
  const localT = useTransform(scrollYProgress, (v) => {
    const scaled = v * steps.length;
    const clamped = Math.min(steps.length - 1e-6, Math.max(0, scaled));
    return clamped - Math.floor(clamped);
  });

  // Click a step / arrow → scroll the window to that step's dwell centre. The
  // sticky pin + scrollYProgress→active mapping then lights it up.
  const jumpTo = (i: number) => {
    const el = containerRef.current;
    if (!el) return;
    const total = el.offsetHeight - window.innerHeight;
    const y = el.offsetTop + (total * (i + 0.5)) / steps.length;
    window.scrollTo({ top: Math.max(0, y), behavior: "smooth" });
  };

  const illustrations: ComponentType<IllustrationProps>[] = [
    Step0Upload, Step1ICP, Step2Persona, StepAutomation,
    Step4Outreach, Step6Interview, Step7Offer, StepKanban,
  ];
  const ActiveIll = illustrations[active];

  return (
    <section id="funnel" className="relative bg-transparent">
      {/* ---------- Desktop header — scrolls up above the pinned funnel ---------- */}
      <div className="mx-auto hidden max-w-[1500px] px-8 pt-28 pb-14 text-center lg:block xl:px-16">
        <div className="relative overflow-hidden mx-auto mb-6 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-card/70 backdrop-blur-md border border-white/10 text-[11px] font-mono uppercase tracking-[0.2em] text-zinc-300 shadow-lg before:absolute before:inset-x-3 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent before:content-['']">
          <span className="h-1.5 w-1.5 rounded-full bg-white" />
          The Autonomous Funnel
        </div>
        <h2 className="font-title text-5xl leading-[1.05] tracking-tight text-white lg:text-6xl">
          From <span className="text-accent">Job Post</span> to Final{" "}
          <span className="text-accent">Hire</span>.
        </h2>
      </div>

      {/* ---------- Desktop: pinned step-list + synced visual ---------- */}
      <div ref={containerRef} className="relative hidden lg:block lg:h-[680vh]">
        <div className="sticky top-0 flex h-screen w-full items-center overflow-hidden">
          <div className="mx-auto grid w-full max-w-[1500px] grid-cols-[300px_1fr] items-center gap-10 px-8 xl:grid-cols-[320px_1fr] xl:px-16">
            {/* Left — step list. z-20 so an expanded (wider) pill overflows its
                narrow track and layers ON TOP of the right panel. */}
            <div className="relative z-20">
              <div className="flex flex-col items-start gap-2">
                {steps.map((s, i) => (
                  <StepPill key={s.label} step={s} active={i === active} onClick={() => jumpTo(i)} />
                ))}
              </div>

              <div className="mt-6 flex items-center gap-2.5">
                <button
                  aria-label="Previous step"
                  onClick={() => jumpTo(Math.max(0, active - 1))}
                  className="grid h-9 w-9 place-items-center rounded-full border border-white/10 text-zinc-400 transition-colors hover:border-white/25 hover:text-white"
                >
                  <ChevronUp className="h-4 w-4" />
                </button>
                <button
                  aria-label="Next step"
                  onClick={() => jumpTo(Math.min(steps.length - 1, active + 1))}
                  className="grid h-9 w-9 place-items-center rounded-full border border-white/10 text-zinc-400 transition-colors hover:border-white/25 hover:text-white"
                >
                  <ChevronDown className="h-4 w-4" />
                </button>
                <span className="ml-1 font-mono text-xs text-zinc-500">
                  {String(active + 1).padStart(2, "0")} / {String(steps.length).padStart(2, "0")}
                </span>
              </div>
            </div>

            {/* Right — synced visual. New step enters from the right; the outgoing
                one slides left, fades, and recedes in Z (rotateY + scale down) for
                a deck-with-depth feel. `perspective` makes the rotateY real 3D. */}
            <div className="relative z-10 h-[640px] [perspective:1400px]">
              <div className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/[0.06] blur-[100px]" />
              <AnimatePresence>
                <motion.div
                  key={active}
                  initial={{ opacity: 0, x: 120, rotateY: -16, scale: 0.9 }}
                  animate={{ opacity: 1, x: 0, rotateY: 0, scale: 1 }}
                  exit={{ opacity: 0, x: -90, rotateY: 12, scale: 0.82 }}
                  transition={{ duration: 0.62, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0 flex items-center justify-center px-2 [backface-visibility:hidden] [transform-style:preserve-3d]"
                >
                  <ActiveIll progress={localT} />
                </motion.div>
              </AnimatePresence>
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
                <div className="mb-2 flex items-center gap-2">
                  <s.Icon className="h-4 w-4 text-accent" />
                  <span className="font-title text-lg text-white">{s.title}</span>
                </div>
                <p className="mb-3 text-[13px] leading-relaxed text-zinc-400">{s.desc}</p>
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

/* One step in the left rail — inactive = compact icon+title pill; active =
   expanded white card that grows to fit its one-line description. */
function StepPill({
  step,
  active,
  onClick,
}: {
  step: StepMeta;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <motion.button
      layout
      onClick={onClick}
      transition={{ layout: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } }}
      className={`group block w-fit overflow-hidden rounded-2xl border text-left transition-colors ${
        active
          ? "max-w-[440px] border-transparent bg-white p-4 shadow-2xl shadow-black/30"
          : "border-white/8 bg-white/[0.02] px-4 py-2.5 hover:border-white/15"
      }`}
    >
      <motion.div layout="position" className="flex items-center gap-3">
        <span
          className={`grid h-9 w-9 shrink-0 place-items-center rounded-full transition-colors ${
            active ? "bg-black/[0.06] text-zinc-900" : "border border-white/10 bg-white/5 text-zinc-500 group-hover:text-white"
          }`}
        >
          <step.Icon className="h-4 w-4" />
        </span>
        <div
          className={`whitespace-nowrap text-[23px] transition-colors ${
            active ? "font-semibold text-zinc-900" : "font-medium text-zinc-400 group-hover:text-white"
          }`}
        >
          {step.title}
        </div>
      </motion.div>

      <AnimatePresence initial={false}>
        {active && (
          <motion.p
            key="desc"
            initial={{ opacity: 0, height: 0, marginTop: 0 }}
            animate={{ opacity: 1, height: "auto", marginTop: 2 }}
            exit={{ opacity: 0, height: 0, marginTop: 0 }}
            transition={{ duration: 0.38, ease: "easeOut" }}
            className="overflow-hidden pl-12 text-[13px] leading-relaxed text-zinc-600"
          >
            {step.desc}
          </motion.p>
        )}
      </AnimatePresence>
    </motion.button>
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
      className="w-full max-w-[520px] mx-auto relative flex flex-col items-center pt-6"
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
      className="mx-auto w-full max-w-[520px]"
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


/* Kanban board — faithful to el-platform's real candidate board
   (features/job/overview/.../candidate-board): 4 ordered columns
   Sourced · Outreach · Interview · Final, each a header (label + count) over
   avatar cards (photo + name + headline + a star-tinted fit chip + status
   tone dot). Static snapshot of a live pipeline. */
function StepKanban() {
  const fitColor = (n: number) => (n >= 85 ? "#55ea8c" : n >= 70 ? "#e8b059" : "#f87171");
  const AV = "?q=80&w=120&h=120&auto=format&fit=crop";
  const columns = [
    {
      label: "Sourced", count: 214, more: 210,
      cards: [
        { name: "Alex Rivera", head: "Sr. SRE · Stripe", fit: 96, img: `https://images.unsplash.com/photo-1500648767791-00dcc994a43e${AV}` },
        { name: "Priya Nair", head: "Staff Eng · Datadog", fit: 88, img: `https://images.unsplash.com/photo-1494790108377-be9c29b29330${AV}` },
        { name: "Ravi Shah", head: "SRE · Razorpay", fit: 84, img: `https://images.unsplash.com/photo-1519085360753-af0119f7cbe7${AV}` },
        { name: "Tom Best", head: "Infra · Twilio", fit: 79, img: `https://images.unsplash.com/photo-1527980965255-d3b416303d12${AV}` },
      ],
    },
    {
      label: "Outreach", count: 38, more: 34,
      cards: [
        { name: "Dana Lee", head: "Platform · Cloudflare", fit: 91, img: `https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d${AV}`, status: { label: "Replied", tone: "#55ea8c" } },
        { name: "Mia Ford", head: "SRE · Shopify", fit: 86, img: `https://images.unsplash.com/photo-1517841905240-472988babdf9${AV}`, status: { label: "Replied", tone: "#55ea8c" } },
        { name: "Sam Cole", head: "SRE · Netflix", fit: 83, img: `https://images.unsplash.com/photo-1438761681033-6461ffad8d80${AV}`, status: { label: "Opened", tone: "#7dd3fc" } },
        { name: "Jon Park", head: "DevOps · Coinbase", fit: 77, img: `https://images.unsplash.com/photo-1531123897727-8f129e1688ce${AV}`, status: { label: "Sent", tone: "#a1a1aa" } },
      ],
    },
    {
      label: "Interview", count: 6, more: 2,
      cards: [
        { name: "Ivy Chen", head: "SRE · Airbnb", fit: 92, img: `https://images.unsplash.com/photo-1544005313-94ddf0286df2${AV}`, status: { label: "Passed", tone: "#55ea8c" } },
        { name: "Ana Ruiz", head: "Platform · Datadog", fit: 90, img: `https://images.unsplash.com/photo-1502685104226-ee32379fefbe${AV}`, status: { label: "In progress", tone: "#c4b5fd" } },
        { name: "Leo Fowler", head: "Infra · Uber", fit: 87, img: `https://images.unsplash.com/photo-1506794778202-cad84cf45f1d${AV}`, status: { label: "Scheduled", tone: "#7dd3fc" } },
        { name: "Kai Wu", head: "SRE · Notion", fit: 81, img: `https://images.unsplash.com/photo-1546525848-3ce03ca516f6${AV}`, status: { label: "Scheduled", tone: "#7dd3fc" } },
      ],
    },
    {
      label: "Final", count: 1, more: 0,
      cards: [
        { name: "Nadia Khan", head: "Staff SRE · Shopify", fit: 94, img: `https://images.unsplash.com/photo-1534528741775-53994a69daeb${AV}`, status: { label: "Offer extended", tone: "#7dd3fc" }, hero: true },
      ],
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.4 }}
      className="mx-auto w-full max-w-[900px]"
    >
      <div className="mb-3 flex items-center justify-between px-1">
        <div className="flex items-center gap-2 text-sm font-medium text-white">
          <LayoutGrid className="h-4 w-4 text-accent" /> Pipeline · Lead SRE
        </div>
        <span className="flex items-center gap-1.5 font-mono text-[10px] text-accent">
          <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" /> live
        </span>
      </div>

      <div className="grid grid-cols-4 gap-2.5">
        {columns.map((col, ci) => (
          <div key={col.label} className="flex flex-col rounded-xl border border-white/8 bg-white/[0.02] p-2">
            <div className="mb-2 flex items-center justify-between px-1">
              <span className="text-[11px] font-semibold text-white">{col.label}</span>
              <span className="rounded-full bg-white/8 px-1.5 py-0.5 font-mono text-[9px] text-zinc-400">{col.count}</span>
            </div>
            <div className="space-y-1.5">
              {col.cards.map((c, i) => (
                <motion.div
                  key={c.name}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.12 + ci * 0.08 + i * 0.06 }}
                  className={`rounded-lg border p-2 ${"hero" in c && c.hero ? "border-accent/40 bg-accent/[0.05]" : "border-white/8 bg-card"}`}
                >
                  <div className="flex items-center gap-1.5">
                    <img src={c.img} alt="" className="h-6 w-6 shrink-0 rounded-full object-cover" />
                    <div className="min-w-0 flex-1">
                      <div className="truncate text-[11px] font-semibold leading-tight text-white">{c.name}</div>
                      <div className="truncate text-[9px] leading-tight text-zinc-500">{c.head}</div>
                    </div>
                  </div>
                  <div className="mt-1.5 flex items-center justify-between gap-1">
                    {"status" in c && c.status ? (
                      <span className="inline-flex items-center gap-1 text-[9px]" style={{ color: c.status.tone }}>
                        <span className="h-1 w-1 rounded-full" style={{ background: c.status.tone }} />
                        {c.status.label}
                      </span>
                    ) : (
                      <span />
                    )}
                    <span
                      className="inline-flex shrink-0 items-center gap-0.5 rounded px-1 py-0.5 text-[10px] font-semibold"
                      style={{ color: fitColor(c.fit), background: `color-mix(in srgb, ${fitColor(c.fit)} 14%, transparent)` }}
                    >
                      <Star className="h-2.5 w-2.5" fill="currentColor" />
                      {c.fit}
                    </span>
                  </div>
                </motion.div>
              ))}
              {col.more > 0 && (
                <div className="rounded-lg border border-dashed border-white/8 py-1.5 text-center text-[9px] text-zinc-600">
                  +{col.more} more
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

/* Outreach — Zia reaching a real candidate across channels: an opened email
   leads into a WhatsApp thread where the candidate replies "interested" and Zia
   moves them to review. Candidate-facing + real, not an abstract funnel. */
function Step4Outreach() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.97 }}
      transition={{ duration: 0.4 }}
      className="mx-auto w-full max-w-[560px]"
    >
      <div className="rounded-2xl border border-white/10 bg-surface/80 p-5 shadow-2xl backdrop-blur-sm">
        {/* candidate header */}
        <div className="mb-4 flex items-center gap-3 border-b border-white/5 pb-4">
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=120&h=120&auto=format&fit=crop"
            alt=""
            className="h-9 w-9 rounded-full object-cover"
          />
          <div className="flex-1">
            <div className="text-sm font-medium text-white">Dana Lee</div>
            <div className="text-[11px] text-zinc-500">Platform Engineer · Cloudflare</div>
          </div>
          <span className="flex items-center gap-1.5 rounded-full border border-accent/25 bg-accent/10 px-2.5 py-0.5 text-[11px] text-accent">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" /> Interested
          </span>
        </div>

        {/* opened email */}
        <div className="mb-3 rounded-xl border border-white/8 bg-white/[0.02] p-3.5">
          <div className="mb-1.5 flex items-center justify-between">
            <span className="flex items-center gap-2 text-xs font-medium text-white">
              <Mail className="h-3.5 w-3.5 text-zinc-400" /> Zia · via email
            </span>
            <span className="font-mono text-[10px] text-sky-300">Opened</span>
          </div>
          <div className="text-[13px] font-medium text-zinc-200">Lead SRE at Acme — worth a quick chat?</div>
          <div className="mt-0.5 truncate text-[12px] text-zinc-500">
            Hi Dana, your work on global load balancing lines up closely…
          </div>
        </div>

        {/* WhatsApp thread */}
        <div className="space-y-2">
          <div className="max-w-[85%] rounded-2xl rounded-tl-sm border border-white/8 bg-white/[0.03] px-3.5 py-2 text-[13px] leading-relaxed text-zinc-200">
            Hi Dana 👋 quick one about a Lead SRE role — Go + Kubernetes at scale. Open to hearing more?
          </div>
          <div className="ml-auto max-w-[85%] rounded-2xl rounded-tr-sm border border-accent/20 bg-accent/15 px-3.5 py-2 text-[13px] leading-relaxed text-white">
            Yeah, I&rsquo;m interested 👍
          </div>
          <div className="max-w-[85%] rounded-2xl rounded-tl-sm border border-white/8 bg-white/[0.03] px-3.5 py-2 text-[13px] leading-relaxed text-zinc-200">
            Perfect — I&rsquo;ll move you to review and set up a short interview.
          </div>
        </div>

        {/* cadence footer */}
        <div className="mt-4 flex items-center border-t border-white/5 pt-3 font-mono text-[10px] text-zinc-500">
          <span>Zia · cadence</span>
          <span className="ml-auto flex gap-3">
            <span>38 sent</span>
            <span>21 opened</span>
            <span className="text-accent">6 replied</span>
          </span>
        </div>
      </div>
    </motion.div>
  );
}

/* Automation — the "how hands-off?" setup shown as a pipeline: an autonomy
   level over the 5 stages as a connected flow, each running on its own except
   the human gate you keep before the offer. */
function StepAutomation() {
  const levels = ["Assisted", "Balanced", "Autonomous"];
  const sel = 2;
  const stages = [
    { Icon: Search, label: "Source", mode: "auto" as const },
    { Icon: Mail, label: "Outreach", mode: "auto" as const },
    { Icon: Calendar, label: "Schedule", mode: "auto" as const },
    { Icon: Mic, label: "Interview", mode: "auto" as const },
    { Icon: Flag, label: "Offer", mode: "gate" as const },
  ];
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.97 }}
      transition={{ duration: 0.4 }}
      className="mx-auto w-full max-w-[560px]"
    >
      <div className="rounded-2xl border border-white/10 bg-surface/80 p-6 shadow-2xl backdrop-blur-sm">
        <div className="mb-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="grid h-9 w-9 place-items-center rounded-full bg-accent/15 text-accent">
              <SlidersHorizontal className="h-4 w-4" />
            </div>
            <div>
              <div className="text-sm font-medium text-white">Automation</div>
              <div className="font-mono text-[10px] uppercase tracking-widest text-zinc-500">How hands-off do you want to be?</div>
            </div>
          </div>
          <span className="rounded-full border border-accent/25 bg-accent/10 px-2.5 py-0.5 text-[11px] text-accent">Autonomous</span>
        </div>

        {/* Autonomy level */}
        <div className="mb-8 flex gap-1.5 rounded-xl border border-white/8 bg-black/20 p-1">
          {levels.map((l, i) => (
            <div
              key={l}
              className={`flex-1 rounded-lg py-2 text-center text-xs font-medium ${
                i === sel ? "bg-accent text-black" : "text-zinc-500"
              }`}
            >
              {l}
            </div>
          ))}
        </div>

        {/* Pipeline flow — connected stage nodes, last one is the human gate */}
        <div className="relative">
          <div className="absolute left-5 right-5 top-5 h-px bg-white/10" />
          <div className="relative flex justify-between">
            {stages.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.08 }}
                className="flex w-[96px] flex-col items-center gap-2"
              >
                <div
                  className={`grid h-10 w-10 place-items-center rounded-full border bg-surface ${
                    s.mode === "gate" ? "border-amber-500/50 text-amber-400" : "border-accent/50 text-accent"
                  }`}
                >
                  <s.Icon className="h-4 w-4" />
                </div>
                <div className="text-center">
                  <div className="text-[12px] font-medium text-white">{s.label}</div>
                  <div className={`font-mono text-[9px] uppercase tracking-wider ${s.mode === "gate" ? "text-amber-400" : "text-accent"}`}>
                    {s.mode === "gate" ? "You approve" : "Auto"}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <p className="mt-7 text-[12px] leading-relaxed text-zinc-500">
          Meera runs the whole funnel end-to-end — only pausing at the gate you keep before an offer.
        </p>
      </div>
    </motion.div>
  );
}

/* Naira interview — a live voice call: Naira's animated voice orb + a waveform,
   the module progress, a running timer, and the live transcript with a typing
   cursor on the candidate's answer. */
function Step6Interview() {
  const bars = [0.4, 0.8, 0.55, 1, 0.7, 0.9, 0.5, 0.75, 0.45, 0.85, 0.6];
  const modules = [
    { m: "M1", done: true, live: false },
    { m: "M2", done: false, live: true },
    { m: "M3", done: false, live: false },
    { m: "M4", done: false, live: false },
  ];
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.97 }}
      transition={{ duration: 0.4 }}
      className="mx-auto w-full max-w-[560px]"
    >
      <div className="rounded-2xl border border-white/10 bg-surface/80 p-5 shadow-2xl backdrop-blur-sm">
        {/* header */}
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-medium text-white">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-2 w-2 animate-ping rounded-full bg-red-500/70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500" />
            </span>
            Live interview
          </div>
          <span className="font-mono text-[11px] text-zinc-400">12:48</span>
        </div>

        {/* voice orb + waveform */}
        <div className="mb-4 flex flex-col items-center rounded-xl border border-white/8 bg-black/20 py-6">
          <div className="relative grid h-16 w-16 place-items-center">
            <motion.span
              className="absolute inset-0 rounded-full bg-accent/15"
              animate={{ scale: [1.1, 1.35, 1.1] }}
              transition={{ repeat: Infinity, duration: 2.4, ease: "easeInOut" }}
            />
            <span className="absolute inset-0 rounded-full bg-accent/25" />
            <div className="relative grid h-11 w-11 place-items-center rounded-full bg-accent text-black">
              <Mic className="h-5 w-5" />
            </div>
          </div>
          <div className="mt-3 mb-4 text-center">
            <div className="text-sm font-medium text-white">Naira</div>
            <div className="text-[11px] text-zinc-500">speaking…</div>
          </div>
          <div className="flex h-9 items-center gap-1">
            {bars.map((b, i) => (
              <motion.span
                key={i}
                className="w-1 rounded-full bg-accent/70"
                animate={{ height: [`${b * 28}%`, `${Math.min(100, b * 100)}%`, `${b * 28}%`] }}
                transition={{ repeat: Infinity, duration: 0.9 + (i % 3) * 0.25, ease: "easeInOut", delay: i * 0.06 }}
              />
            ))}
          </div>
        </div>

        {/* module progress */}
        <div className="mb-4 flex items-center gap-2">
          {modules.map((mm) => (
            <div
              key={mm.m}
              className={`flex flex-1 items-center justify-center gap-1 rounded-lg border py-1.5 font-mono text-[10px] ${
                mm.live
                  ? "border-accent/40 bg-accent/10 text-accent"
                  : mm.done
                    ? "border-white/10 bg-white/5 text-zinc-400"
                    : "border-white/8 text-zinc-600"
              }`}
            >
              {mm.done && <Check className="h-2.5 w-2.5 text-accent" />}
              {mm.live && <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />}
              {mm.m}
            </div>
          ))}
        </div>

        {/* live transcript */}
        <div className="space-y-2">
          <div className="max-w-[88%] rounded-xl rounded-tl-sm border border-white/8 bg-white/[0.03] p-3">
            <div className="mb-1 font-mono text-[10px] uppercase tracking-wider text-accent/80">Naira</div>
            <div className="text-[13px] leading-relaxed text-zinc-300">Walk me through handling write-heavy load at peak traffic.</div>
          </div>
          <div className="ml-auto max-w-[88%] rounded-xl rounded-tr-sm border border-white/8 bg-white/[0.05] p-3">
            <div className="mb-1 text-right font-mono text-[10px] uppercase tracking-wider text-zinc-500">Alex</div>
            <div className="text-[13px] leading-relaxed text-white">
              Write-behind Redis cache, batched flushes to Postgres
              <span className="ml-0.5 inline-block h-3 w-[2px] -mb-0.5 animate-pulse bg-accent align-middle" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* Final report — faithful to el-platform's real Naira ReportCard: a header
   (overall score + verdict chip + integrity + the 5-segment red→emerald
   alignment scale + one-line headline + logistics), then the tab strip with the
   Role-Fit competency cards (JTBD score bar + evidence + skills). */
function Step7Offer() {
  const SEG = ["bg-red-500", "bg-orange-500", "bg-amber-500", "bg-green-500", "bg-emerald-500"];
  const SEG_DIM = ["bg-red-500/20", "bg-orange-500/20", "bg-amber-500/20", "bg-green-500/20", "bg-emerald-500/20"];
  const activeSeg = 3; // "Aligned"
  const tabs = [
    { label: "Assessment", Icon: ClipboardList, active: false },
    { label: "Role Fit", Icon: Target, active: true },
    { label: "Recommendations", Icon: Lightbulb, active: false },
    { label: "Behavioral", Icon: Activity, active: false },
  ];
  const comps = [
    {
      jtbd: "Design resilient, multi-region systems", weight: 40, score: 94,
      evidence: "Walked through an active-active failover with clear consistency-vs-availability tradeoffs.",
      skills: ["System design", "Failover", "Multi-region"],
    },
    {
      jtbd: "Operate services under production load", weight: 35, score: 88,
      evidence: "Concrete write-behind caching + backpressure; owned the on-call rotation at Stripe.",
      skills: ["Reliability", "Caching", "On-call"],
    },
  ];
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.97 }}
      transition={{ duration: 0.4 }}
      className="mx-auto w-full max-w-[600px] space-y-3"
    >
      {/* Header card */}
      <div className="rounded-2xl border border-white/10 bg-surface/80 p-5 shadow-2xl backdrop-blur-sm">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            <img
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=120&h=120&auto=format&fit=crop"
              alt=""
              className="h-10 w-10 rounded-full object-cover"
            />
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] uppercase tracking-wider text-zinc-500">Naira report card</span>
                <span className="inline-flex items-center gap-1 rounded-md border border-accent/30 bg-accent/10 px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-accent">
                  <Mic className="h-2.5 w-2.5" /> Voice · Naira
                </span>
              </div>
              <div className="mt-1 font-mono text-2xl font-bold text-white">
                4.6<span className="ml-1 text-sm font-normal text-zinc-500">/ 5 overall</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-end gap-1.5">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-green-500/40 bg-green-500/10 px-3 py-1 text-[12px] font-medium text-green-400">
              <span className="h-1.5 w-1.5 rounded-full bg-green-500" /> Aligned
            </span>
            <span className="inline-flex items-center gap-1 rounded-md border border-white/10 bg-card px-1.5 py-0.5 text-[10px] font-semibold text-zinc-400">
              <Shield className="h-2.5 w-2.5" /> Integrity 98%
            </span>
          </div>
        </div>

        {/* Alignment scale */}
        <div className="mt-4 space-y-2">
          <div className="flex items-center gap-1">
            {SEG.map((seg, i) => (
              <div
                key={i}
                className={`h-2 flex-1 rounded-full ${
                  i === activeSeg ? `${seg} ring-2 ring-white/20 ring-offset-2 ring-offset-surface` : SEG_DIM[i]
                }`}
              />
            ))}
          </div>
          <div className="flex justify-between text-[10px] uppercase tracking-wider text-zinc-500">
            <span>Strongly not aligned</span>
            <span>Aligned</span>
            <span>Strongly aligned</span>
          </div>
        </div>

        {/* Headline */}
        <p className="mt-4 border-l-2 border-white/20 pl-3 text-[13px] leading-relaxed text-zinc-200">
          Exceptional systems depth with proven production ownership — a strong hire for the Lead SRE role.
        </p>

        {/* Logistics */}
        <div className="mt-4 grid grid-cols-3 gap-2">
          {[["Expected", "$220k"], ["Notice", "30 days"], ["Location", "Remote · US"]].map(([l, v]) => (
            <div key={l} className="rounded-lg border border-white/8 bg-white/[0.02] px-3 py-2">
              <div className="text-[10px] uppercase tracking-wider text-zinc-500">{l}</div>
              <div className="text-[12px] font-medium text-white">{v}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Tabs + Role-Fit competency cards */}
      <div>
        <div className="mb-3 flex flex-wrap gap-1 text-[11px]">
          {tabs.map((t) => (
            <span
              key={t.label}
              className={`flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 ${
                t.active ? "bg-white/10 font-medium text-white" : "text-zinc-500"
              }`}
            >
              <t.Icon className="h-3 w-3" /> {t.label}
            </span>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-2.5">
          {comps.map((c, i) => (
            <div key={i} className="rounded-xl border border-white/10 bg-surface/60 p-4">
              <div className="text-[10px] uppercase tracking-wider text-zinc-500">
                JTBD #{i + 1} <span className="ml-1 font-mono">{c.weight}% weight</span>
              </div>
              <h4 className="mt-0.5 text-[13px] font-semibold leading-snug text-white">{c.jtbd}</h4>

              <div className="mb-2 mt-2 flex items-baseline gap-1.5">
                <span className="font-mono text-2xl font-bold text-white">{c.score}</span>
                <span className="text-[11px] text-zinc-500">/ 100</span>
              </div>
              <div className="h-2.5 w-full overflow-hidden rounded-full bg-white/8">
                <motion.div
                  className="h-full rounded-full bg-accent"
                  initial={{ width: 0 }}
                  animate={{ width: `${c.score}%` }}
                  transition={{ duration: 0.8, delay: 0.15 + i * 0.1, ease: "easeOut" }}
                />
              </div>

              <p className="mt-3 text-[11px] leading-relaxed text-zinc-400">{c.evidence}</p>
              <div className="mt-2 flex flex-wrap gap-1">
                {c.skills.map((s) => (
                  <span key={s} className="rounded-full bg-white/5 px-2 py-0.5 text-[10px] text-zinc-400">{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
