"use client";

import { motion } from "motion/react";
import { Workflow, Folder, Search, ArrowUp, Loader2, ChevronDown, Check } from "lucide-react";

// --- Radial layout math -----------------------------------------------------
// 8 stage nodes evenly spaced (45deg steps) on an ellipse centered on the
// "Cofounder" node. 0deg = East, angles increase clockwise (y grows downward).
// Nodes sit on radius (31,29); their faint child boxes sit further out (42,39).
// All values are viewBox/percentage coordinates so the SVG spokes (same space)
// line up exactly with the absolutely-positioned node cards.
const point = (deg: number, rx: number, ry: number) => {
  const r = (deg * Math.PI) / 180;
  return { x: 50 + rx * Math.cos(r), y: 50 + ry * Math.sin(r) };
};

type Badge = { q: number; r: number; d: number };
type Stage = {
  label: string;
  angle: number;
  badge?: Badge;
  status?: "done" | "running";
  result?: { pass: number; fail: number };
  offered?: number;
};

const STAGES: Stage[] = [
  { label: "Role", angle: -90, status: "done" }, // N
  { label: "ICP", angle: -45, status: "done" }, // NE
  { label: "Sourcing", angle: 0, badge: { q: 3, r: 2, d: 2 } }, // E
  { label: "Outreach", angle: 45, badge: { q: 4, r: 4, d: 3 } }, // SE
  { label: "Interview", angle: 90, badge: { q: 4, r: 3, d: 2 } }, // S
  { label: "Scoring", angle: 135, status: "running", result: { pass: 2, fail: 1 } }, // SW
  { label: "Offer", angle: 180, offered: 1 }, // W
  { label: "JD Intake", angle: 225, status: "done" }, // NW
];

const NODES = STAGES.map((s) => ({
  ...s,
  node: point(s.angle, 39, 37),
  child: point(s.angle, 49, 47),
}));

// --- Right-panel chat data --------------------------------------------------
const TABS = ["Home", "Roles", "Pipeline", "Tasks", "Library"] as const;

export function ParadigmShift() {
  return (
    <section id="paradigm" className="py-32 md:py-40 relative overflow-hidden bg-zinc-950">
      {/* Ambient accent glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[800px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent/5 via-transparent to-transparent pointer-events-none blur-3xl" />

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden inline-flex items-center gap-2 px-3 py-1 rounded-full bg-card/70 backdrop-blur-md border border-white/10 text-zinc-300 text-xs font-mono uppercase tracking-widest mb-8 shadow-lg before:absolute before:inset-x-3 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent before:content-['']"
          >
            <Workflow className="w-3.5 h-3.5 text-white" />
            <span>The Paradigm Shift</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-display mb-6 tracking-tight text-white leading-tight"
          >
            The Autonomous Way
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-zinc-400 leading-relaxed max-w-2xl mx-auto"
          >
            Meera runs your entire hiring pipeline — you stay in control.
          </motion.p>
        </div>

        {/* App-window frame */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="w-full max-w-[1400px] mx-auto relative rounded-2xl border border-white/10 bg-surface overflow-hidden shadow-[0_40px_120px_-20px_rgba(0,0,0,0.8)] aspect-[16/10] min-h-[560px]"
        >
          {/* Top-edge sheen */}
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none z-30" />

          <div className="flex flex-col lg:flex-row h-full min-w-0">
            {/* ============ LEFT: infinite-canvas org chart ============ */}
            <div
              className="relative flex-1 min-w-0 h-full overflow-hidden bg-[#0e0e11]"
              style={{
                backgroundImage:
                  "radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)",
                backgroundSize: "22px 22px",
              }}
            >
              {/* faint accent bloom behind the center node */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-72 w-72 rounded-full bg-accent/5 blur-[90px] pointer-events-none" />

              {/* SVG layer: big dashed circle + radial spokes + child connectors */}
              <svg
                className="absolute inset-0 h-full w-full pointer-events-none"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
              >
                <g
                  stroke="rgba(255,255,255,0.12)"
                  strokeDasharray="4 4"
                  fill="none"
                  vectorEffect="non-scaling-stroke"
                >
                  <ellipse cx={50} cy={50} rx={39} ry={37} />
                  {NODES.map((n) => (
                    <g key={n.label} vectorEffect="non-scaling-stroke">
                      <line x1={50} y1={50} x2={n.node.x} y2={n.node.y} vectorEffect="non-scaling-stroke" />
                      <line
                        x1={n.node.x}
                        y1={n.node.y}
                        x2={n.child.x}
                        y2={n.child.y}
                        stroke="rgba(255,255,255,0.07)"
                        vectorEffect="non-scaling-stroke"
                      />
                    </g>
                  ))}
                </g>
              </svg>

              {/* Toolbar pill (top-left) */}
              <div className="absolute top-4 left-4 z-20 flex items-center gap-2 rounded-lg border border-white/10 bg-card/80 backdrop-blur px-2 py-1.5">
                <span className="grid h-5 w-5 place-items-center rounded bg-accent text-[9px] font-bold text-black">EL</span>
                <span className="font-mono text-xs text-zinc-300">EmployLabs Recruiter</span>
                <ChevronDown className="h-3 w-3 text-zinc-500" />
                <span className="mx-0.5 h-4 w-px bg-white/10" />
                <span className="font-mono text-xs text-zinc-500">⌗ 60%</span>
              </div>

              {/* Ghost icon buttons (top-right) */}
              <div className="absolute top-4 right-4 z-20 flex items-center gap-1">
                <button className="grid h-7 w-7 place-items-center rounded-md text-zinc-400 hover:bg-white/5 hover:text-zinc-200 transition-colors">
                  <Folder className="h-4 w-4" />
                </button>
                <button className="grid h-7 w-7 place-items-center rounded-md text-zinc-400 hover:bg-white/5 hover:text-zinc-200 transition-colors">
                  <Search className="h-4 w-4" />
                </button>
              </div>

              {/* Faint empty child boxes */}
              {NODES.map((n) => (
                <div
                  key={`child-${n.label}`}
                  className="absolute z-0 h-7 w-12 -translate-x-1/2 -translate-y-1/2 rounded-md border border-white/5"
                  style={{ left: `${n.child.x}%`, top: `${n.child.y}%` }}
                />
              ))}

              {/* Stage nodes */}
              {NODES.map((n) => (
                <div
                  key={`node-${n.label}`}
                  className="absolute z-10 -translate-x-1/2 -translate-y-1/2"
                  style={{ left: `${n.node.x}%`, top: `${n.node.y}%` }}
                >
                  <div className="relative">
                    {n.badge && (
                      <div className="absolute bottom-full left-1/2 mb-1.5 -translate-x-1/2 flex items-center gap-1.5 rounded-full border border-white/10 bg-card/90 px-2 py-0.5 font-mono text-[10px] text-zinc-300 whitespace-nowrap shadow-lg">
                        <span className="flex items-center gap-1">
                          <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                          {n.badge.q}
                        </span>
                        <span className="flex items-center gap-1 text-sky-300">
                          <Loader2 className="h-2.5 w-2.5 animate-spin" />
                          {n.badge.r}
                        </span>
                        <span className="flex items-center gap-1">
                          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                          {n.badge.d}
                        </span>
                      </div>
                    )}
                    {n.result && (
                      <div className="absolute bottom-full left-1/2 mb-1.5 -translate-x-1/2 flex items-center gap-2 rounded-full border border-white/10 bg-card/90 px-2 py-0.5 font-mono text-[10px] whitespace-nowrap shadow-lg">
                        <span className="flex items-center gap-1 text-accent">
                          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                          {n.result.pass}
                        </span>
                        <span className="flex items-center gap-1 text-red-400">
                          <span className="h-1.5 w-1.5 rounded-full bg-red-400" />
                          {n.result.fail}
                        </span>
                      </div>
                    )}
                    {n.offered != null && (
                      <div className="absolute bottom-full left-1/2 mb-1.5 -translate-x-1/2 flex items-center gap-1.5 rounded-full border border-accent/25 bg-accent/10 px-2 py-0.5 font-mono text-[10px] text-accent whitespace-nowrap shadow-lg">
                        <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                        {n.offered} offered
                      </div>
                    )}
                    <div
                      className={`flex items-center gap-1.5 rounded-lg border bg-card px-3 py-1.5 text-xs text-zinc-200 shadow-[0_8px_24px_-8px_rgba(0,0,0,0.7)] ${
                        n.status === "done" ? "border-accent/40" : "border-white/10"
                      }`}
                    >
                      {n.status === "done" && (
                        <Check className="h-3.5 w-3.5 shrink-0 text-accent" strokeWidth={3} />
                      )}
                      {n.status === "running" && (
                        <Loader2 className="h-3.5 w-3.5 shrink-0 animate-spin text-sky-300" />
                      )}
                      {n.label}
                    </div>
                  </div>
                </div>
              ))}

              {/* Center "Meera" node — the orchestrator every stage reports into */}
              <div className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
                <div className="relative">
                  <span className="absolute bottom-full left-1/2 mb-2 -translate-x-1/2 text-2xl leading-none animate-[isoFloat_5s_ease-in-out_infinite]">
                    🌻
                  </span>
                  <div className="rounded-lg border border-accent/40 bg-card px-4 py-2 text-sm font-medium text-white shadow-[0_12px_40px_-8px_rgba(0,0,0,0.85)]">
                    Meera
                  </div>
                </div>
              </div>

              {/* Canvas path label (bottom-left) */}
              <div className="absolute bottom-4 left-4 z-20 font-mono text-[11px] text-zinc-600">
                employ-labs/autonomous-hiring
              </div>
            </div>

            {/* ============ RIGHT: agent chat panel ============ */}
            <div className="hidden lg:flex w-[38%] shrink-0 flex-col border-l border-white/10 bg-surface min-w-0">
              {/* Tabs */}
              <div className="flex items-center gap-1 border-b border-white/10 px-3 py-2.5">
                {TABS.map((tab) => (
                  <span
                    key={tab}
                    className={
                      tab === "Home"
                        ? "rounded-md bg-white/5 px-2.5 py-1 text-xs font-medium text-white"
                        : "rounded-md px-2.5 py-1 text-xs text-zinc-500 hover:text-zinc-300 transition-colors"
                    }
                  >
                    {tab}
                  </span>
                ))}
              </div>

              {/* Chat body */}
              <div className="flex-1 min-h-0 overflow-y-auto px-4 py-5 space-y-4">
                {/* 1. Meera greeting */}
                <div className="flex gap-2.5">
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-md border border-accent/30 bg-accent/15 text-[10px] font-bold text-accent">
                    M
                  </span>
                  <p className="text-[13px] leading-relaxed text-zinc-300">
                    Hey Kartey 👋{" "}Here&rsquo;s where the{" "}
                    <span className="font-medium text-white">Lead SRE</span> pipeline stands right
                    now — I pulled the latest state across every stage.
                  </p>
                </div>

                {/* 2. Pipeline-state snapshot card */}
                <div className="pl-8">
                  <div className="overflow-hidden rounded-xl border border-white/10 bg-white/[0.03]">
                    <div className="flex items-center justify-between border-b border-white/10 px-3.5 py-2">
                      <span className="text-[11px] font-medium text-white">Pipeline · Lead SRE</span>
                      <span className="flex items-center gap-1 font-mono text-[10px] text-accent">
                        <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                        live
                      </span>
                    </div>
                    <div className="divide-y divide-white/5">
                      {[
                        { dot: "bg-amber-400", stage: "Sourced", owner: "Meera", n: "214" },
                        { dot: "bg-sky-300", stage: "Engaged", owner: "Zia", n: "38" },
                        { dot: "bg-violet-300", stage: "Interviewing", owner: "Naira", n: "6" },
                        { dot: "bg-accent", stage: "Shortlisted", owner: "for you", n: "3" },
                      ].map((row) => (
                        <div key={row.stage} className="flex items-center justify-between px-3.5 py-1.5">
                          <span className="flex items-center gap-2 text-[12px] text-zinc-300">
                            <span className={`h-1.5 w-1.5 rounded-full ${row.dot}`} />
                            {row.stage}
                            <span className="text-[10px] text-zinc-500">· {row.owner}</span>
                          </span>
                          <span className="font-mono text-[12px] text-white">{row.n}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* 3. Live agent activity */}
                <div className="space-y-2 pl-8">
                  <div className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2.5">
                    <span className="grid h-6 w-6 shrink-0 place-items-center rounded-md bg-sky-400/15 text-[10px] font-bold text-sky-300">
                      Z
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="text-xs font-medium text-white">Zia</p>
                      <p className="truncate text-[11px] text-zinc-500">Engaging 38 candidates · email + WhatsApp</p>
                    </div>
                    <span className="flex shrink-0 items-center gap-1.5 rounded-full border border-accent/20 bg-accent/10 px-2 py-0.5 text-[10px] font-medium text-accent">
                      <Loader2 className="h-2.5 w-2.5 animate-spin" />
                      Running
                    </span>
                  </div>
                  <div className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2.5">
                    <span className="grid h-6 w-6 shrink-0 place-items-center rounded-md bg-violet-400/15 text-[10px] font-bold text-violet-300">
                      N
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="text-xs font-medium text-white">Naira</p>
                      <p className="truncate text-[11px] text-zinc-500">Live voice interviews · 4 of 6 done</p>
                    </div>
                    <span className="flex shrink-0 items-center gap-1.5 rounded-full border border-accent/20 bg-accent/10 px-2 py-0.5 text-[10px] font-medium text-accent">
                      <Loader2 className="h-2.5 w-2.5 animate-spin" />
                      Running
                    </span>
                  </div>
                </div>

                {/* 4. Human question */}
                <div className="flex justify-end">
                  <div className="max-w-[82%] rounded-2xl rounded-br-sm bg-white/10 px-3.5 py-2 text-[13px] leading-relaxed text-white">
                    Nice — who&rsquo;s furthest along?
                  </div>
                </div>

                {/* 5. Meera response */}
                <div className="flex gap-2.5">
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-md border border-accent/30 bg-accent/15 text-[10px] font-bold text-accent">
                    M
                  </span>
                  <p className="text-[13px] leading-relaxed text-zinc-300">
                    Naira has wrapped 4 of 6 interviews. <span className="font-medium text-white">Alex
                    Rivera</span> leads at a 96 fit — cleared system design and Go concurrency, strong
                    on-call track record.{" "}
                    <span className="font-medium text-white">
                      I&rsquo;ll have the full ranked shortlist with scorecards ready for your review
                      in ~20 minutes.
                    </span>
                  </p>
                </div>
              </div>

              {/* Chat input */}
              <div className="border-t border-white/10 p-3">
                <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2">
                  <span className="flex-1 truncate text-[13px] text-zinc-500">
                    Ask Meera to adjust the pipeline…
                  </span>
                  <button className="grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-white/10 text-zinc-200 hover:bg-accent hover:text-black transition-colors">
                    <ArrowUp className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
