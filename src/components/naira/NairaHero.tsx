"use client";

import React, { useState, useEffect } from "react";
import { Button, EyebrowPill, MonoTag } from "./primitives";
import type { RoleCycleItem, NairaSessionPreviewProps } from "./types";

const ROLE_CYCLE: RoleCycleItem[] = [
  {
    label: "Backend Engineer",
    industry: "Tech · L3",
    artifact: "delete_user.py",
    artifactKind: "code",
    naira:
      "Walk me through this endpoint. What stands out about the access control?",
    you: "The DELETE doesn't check ownership — anyone with a token can delete any record.",
    flaws: [
      ["danger", "CRITICAL", "Missing ownership check"],
      ["warn", "PERF", "N+1 on cascade delete"],
    ],
    body: (
      <div className="font-mono text-[10.5px] leading-[1.7]">
        <div>
          <span className="text-zinc-600">@router.delete(</span>
          <span className="text-emerald-400/80">&quot;/{`{id}`}&quot;</span>
          <span className="text-zinc-600">)</span>
        </div>
        <div>
          <span className="text-purple-300/90">async def</span>{" "}
          <span className="text-blue-300">delete_user</span>
          <span className="text-zinc-500">(id, db):</span>
        </div>
        <div className="text-zinc-300 pl-3">
          user = <span className="text-blue-300">await</span> db.get(User, id)
        </div>
        <div className="text-zinc-300 pl-3">
          <span className="text-purple-300/90">if not</span> user:{" "}
          <span className="text-purple-300/90">raise</span> 404
        </div>
        <div className="text-zinc-300 pl-3">
          <span className="text-blue-300">await</span> db.delete(user)
        </div>
        <div className="text-zinc-300 pl-3">
          <span className="text-purple-300/90">for</span> p{" "}
          <span className="text-purple-300/90">in</span> user.posts:
        </div>
        <div className="text-zinc-300 pl-6">
          <span className="text-blue-300">await</span> db.delete(p)
          <span className="text-zinc-700"> # N+1</span>
        </div>
        <div className="text-zinc-300 pl-3">
          <span className="text-blue-300">await</span> db.commit()
        </div>
      </div>
    ),
  },
  {
    label: "Enterprise Sales AE",
    industry: "B2B SaaS · L3",
    artifact: "Q3-Pricing-Proposal.md",
    artifactKind: "doc",
    naira: "Read through this proposal. What concerns you about the framing?",
    you: "It's pitched on seat count, but their CFO buys on consolidation savings — wrong frame.",
    flaws: [
      ["danger", "CRITICAL", "Misaligned with CFO buying motion"],
      ["warn", "FRAMING", "No consolidation ROI"],
    ],
    body: (
      <div className="text-[11px] leading-[1.6] text-zinc-300">
        <div className="text-white font-semibold mb-2">
          Acme Corp — Enterprise Tier
        </div>
        <div className="text-zinc-500 mb-2">
          Prepared for: Sarah Chen, VP Ops
        </div>
        <div className="space-y-1.5">
          <div>
            <span className="text-zinc-500">Seats:</span> 250 × $89/mo
          </div>
          <div>
            <span className="text-zinc-500">Term:</span> 3-year, prepaid
          </div>
          <div>
            <span className="text-zinc-500">Total:</span>{" "}
            <span className="text-white">$801,000</span>
          </div>
          <div className="pt-2 text-zinc-400 italic">
            &quot;Best-in-class collaboration platform with enterprise-grade
            security…&quot;
          </div>
          <div className="pt-2 text-zinc-600">[ROI section: missing]</div>
          <div className="text-zinc-600">[Consolidation savings: missing]</div>
        </div>
      </div>
    ),
  },
  {
    label: "Senior Product Manager",
    industry: "Consumer · L3",
    artifact: "PRD-discovery-AI.md",
    artifactKind: "doc",
    naira: "What's missing from this PRD before you'd ship it?",
    you: "No success metric tied to user behavior, only adoption. And no kill criteria.",
    flaws: [
      ["danger", "CRITICAL", "No behavioral success metric"],
      ["warn", "RISK", "Missing kill criteria"],
    ],
    body: (
      <div className="text-[11px] leading-[1.6] text-zinc-300">
        <div className="text-white font-semibold mb-2">
          PRD: AI Search Rewrite
        </div>
        <div className="space-y-1.5">
          <div>
            <span className="text-zinc-500">Owner:</span> Discovery Pod
          </div>
          <div>
            <span className="text-zinc-500">Target:</span> Q3 2026
          </div>
          <div className="pt-2">
            <span className="text-zinc-500">Goals</span>
          </div>
          <div className="pl-3 text-zinc-400">
            — Increase search adoption 40%
          </div>
          <div className="pl-3 text-zinc-400">— Reduce zero-result rate</div>
          <div className="pt-2 text-zinc-600">[Behavioral signal: TBD]</div>
          <div className="text-zinc-600">[Rollback plan: TBD]</div>
        </div>
      </div>
    ),
  },
  {
    label: "HR Business Partner",
    industry: "People Ops · L2",
    artifact: "JD-Senior-Engineer.md",
    artifactKind: "doc",
    naira:
      "Walk me through this job spec. What would you change before posting?",
    you: "The 'rockstar' language signals bias, and the 10-yr requirement excludes capable mid-levels.",
    flaws: [
      ["danger", "BIAS", "Gendered/coded language"],
      ["warn", "SCOPE", "Years-of-experience inflation"],
    ],
    body: (
      <div className="text-[11px] leading-[1.6] text-zinc-300">
        <div className="text-white font-semibold mb-2">
          Senior Software Engineer
        </div>
        <div className="space-y-1.5 text-zinc-400">
          <div className="text-zinc-500">Requirements</div>
          <div>
            —{" "}
            <span className="bg-red-950/40 text-red-300/80 px-1">
              10+ years
            </span>{" "}
            hands-on Python
          </div>
          <div>
            —{" "}
            <span className="bg-red-950/40 text-red-300/80 px-1">Rockstar</span>{" "}
            mentality, ninja-level skills
          </div>
          <div>— Bachelor&apos;s degree mandatory</div>
          <div>— Must thrive under pressure</div>
          <div className="pt-2 text-zinc-500">Compensation</div>
          <div className="text-zinc-600">[Range: not disclosed]</div>
        </div>
      </div>
    ),
  },
  {
    label: "Clinical Operations Lead",
    industry: "Healthcare · L3",
    artifact: "Protocol-Deviation-Memo.md",
    artifactKind: "doc",
    naira: "Read this deviation memo. Would you sign off?",
    you: "Not as written — root cause is symptomatic, and the CAPA doesn't address the actual gap.",
    flaws: [
      ["danger", "REGULATORY", "Symptomatic root cause"],
      ["warn", "CAPA", "Action plan doesn't close gap"],
    ],
    body: (
      <div className="text-[11px] leading-[1.6] text-zinc-300">
        <div className="text-white font-semibold mb-2">
          Protocol Deviation — Site 042
        </div>
        <div className="space-y-1.5 text-zinc-400">
          <div>
            <span className="text-zinc-500">Study:</span> EL-2026-014
          </div>
          <div>
            <span className="text-zinc-500">Severity:</span>{" "}
            <span className="text-amber-400/80">Major</span>
          </div>
          <div className="pt-2 text-zinc-500">Root Cause</div>
          <div className="text-zinc-400">
            &quot;Coordinator was busy that week.&quot;
          </div>
          <div className="pt-2 text-zinc-500">CAPA</div>
          <div className="text-zinc-400">
            &quot;Retrain site staff on protocol.&quot;
          </div>
          <div className="pt-2 text-zinc-600">
            [Systemic factors: not analyzed]
          </div>
        </div>
      </div>
    ),
  },
];

const NairaSessionPreview: React.FC<NairaSessionPreviewProps> = ({
  role,
  idx,
  total,
}) => (
  <div className="relative w-full">
    <div className="absolute -inset-8 rounded-3xl bg-black/20" />

    <div className="relative bg-zinc-950/80 backdrop-blur-xl border border-zinc-800 rounded-xl overflow-hidden shadow-2xl w-full">
      <div className="flex items-center justify-between px-4 py-3 border-b border-zinc-800/80 bg-zinc-900/40">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
          <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
          <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
        </div>
        <span className="font-mono text-[10px] tracking-widest text-zinc-500 uppercase">
          Naira · Live
        </span>
        <span className="text-[10px] font-mono text-purple-400">M1 / 4</span>
      </div>

      <div
        key={idx}
        className="naira-fade-in flex items-center justify-between px-5 py-3 bg-gradient-to-r from-purple-950/40 via-purple-900/20 to-transparent border-b border-purple-500/20"
      >
        <div>
          <div className="text-[10px] font-mono uppercase tracking-widest text-purple-400/80">
            Now interviewing
          </div>
          <div className="text-[15px] font-medium text-white mt-0.5">
            {role.label}
          </div>
        </div>
        <div className="text-right">
          <div className="text-[10px] font-mono uppercase tracking-widest text-zinc-600">
            Track
          </div>
          <div className="text-[12px] text-zinc-300 mt-0.5">
            {role.industry}
          </div>
        </div>
      </div>

      <div key={`body-${idx}`} className="grid grid-cols-2 naira-fade-in">
        <div className="p-5 border-r border-zinc-800/80">
          <div className="text-[10px] font-mono uppercase tracking-widest text-zinc-600 mb-4">
            Naira · Speaking
          </div>
          <div className="flex items-center justify-center h-20 gap-1 mb-5">
            {[
              14, 28, 42, 56, 38, 22, 48, 62, 30, 18, 40, 54, 32, 20, 44, 58,
              26,
            ].map((h, i) => (
              <span
                key={i}
                className="w-1 rounded-full bg-gradient-to-t from-purple-500 to-purple-300"
                style={{
                  height: `${h}px`,
                  animation: `nairaWaveform 1.2s ease-in-out ${i * 0.07}s infinite alternate`,
                }}
              />
            ))}
          </div>
          <div className="space-y-3 text-[12px] leading-relaxed">
            <div className="text-zinc-400">
              <span className="text-purple-400">N&#8202;:</span> {role.naira}
            </div>
            <div className="text-zinc-500">
              <span className="text-zinc-300">You&#8202;:</span> {role.you}
            </div>
            <div className="flex items-center gap-2 text-purple-400">
              <span className="w-1 h-1 rounded-full bg-purple-400 animate-pulse" />
              <span
                className="w-1 h-1 rounded-full bg-purple-400 animate-pulse"
                style={{ animationDelay: "0.2s" }}
              />
              <span
                className="w-1 h-1 rounded-full bg-purple-400 animate-pulse"
                style={{ animationDelay: "0.4s" }}
              />
              <span className="font-mono text-[10px] uppercase tracking-wider">
                probing
              </span>
            </div>
          </div>
        </div>

        <div className="bg-[#0a0a0a]">
          <div className="flex items-center justify-between px-4 py-2 border-b border-zinc-800/80 bg-zinc-900/30">
            <span className="font-mono text-[10px] text-zinc-500">
              {role.artifact}
            </span>
            <MonoTag>readonly</MonoTag>
          </div>
          <div className="px-4 py-4 min-h-[180px]">{role.body}</div>
          <div className="px-4 pb-4 space-y-1.5">
            {role.flaws.map(([tone, tag, text], i) => (
              <div
                key={i}
                className={`flex items-center gap-2 px-2 py-1 ${tone === "danger" ? "bg-red-950/30 border-red-500/60" : "bg-amber-950/30 border-amber-500/60"} border-l-2 text-[10px]`}
              >
                <MonoTag tone={tone}>{tag}</MonoTag>
                <span className="text-zinc-400">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between px-4 py-2.5 border-t border-zinc-800/80 bg-zinc-900/30 font-mono text-[10px] uppercase tracking-wider text-zinc-600">
        <span>M1 — Artifact Audit</span>
        <div className="flex items-center gap-1.5">
          {Array.from({ length: total }).map((_, i) => (
            <span
              key={i}
              className={`w-1.5 h-1.5 rounded-full transition-colors ${i === idx ? "bg-purple-400" : "bg-zinc-700"}`}
            />
          ))}
        </div>
      </div>
    </div>
  </div>
);

export const NairaHero: React.FC = () => {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setTimeout(
      () => setIdx((x) => (x + 1) % ROLE_CYCLE.length),
      5000,
    );
    return () => clearTimeout(t);
  }, [idx]);

  const role = ROLE_CYCLE[idx];

  return (
    <section
      className="relative flex items-center min-h-screen pt-32 pb-20 overflow-hidden bg-black"
      data-screen-label="Hero"
    >
      <div
        className="absolute inset-0 bg-cover bg-center rotate-180"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1635776062360-af423602aff3')",
          opacity: 1,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/30 to-black" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-16 grid lg:grid-cols-12 gap-12 items-center w-full">
        <div className="lg:col-span-7">
          <div className="flex items-center gap-3 mb-8">
            <EyebrowPill accent="purple">
              Signal Interview™ · Live Assessment
            </EyebrowPill>
            <span className="hidden sm:inline-flex items-center gap-2 text-[11px] font-mono tracking-wider text-zinc-500 uppercase">
              <span className="relative flex w-1.5 h-1.5">
                <span className="absolute inline-flex w-full h-full bg-purple-400 rounded-full opacity-75 animate-ping"></span>
                <span className="relative inline-flex w-1.5 h-1.5 bg-purple-400 rounded-full"></span>
              </span>
              v3.0 — Live
            </span>
          </div>
          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[80px] font-medium tracking-tight leading-[1.02] text-transparent bg-clip-text"
            style={{
              backgroundImage:
                "linear-gradient(180deg, #fff 0%, rgba(255,255,255,0.55) 100%)",
            }}
          >
            Meet Naira.
            <br />
            The Interview That{" "}
            <span className="italic font-light">Thinks Back.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-xl md:text-2xl text-zinc-200 leading-snug font-light">
            One assessment agent.{" "}
            <span className="text-white font-medium">
              Every role, every industry.
            </span>
          </p>
          <p className="mt-4 max-w-2xl text-base md:text-lg text-zinc-400 leading-relaxed">
            Engineering. Sales. Product. HR. Finance. Marketing. Legal.
            Clinical. Naira generates a fresh assessment for whoever walks in
            &mdash; calibrated to the role, not pulled from a question bank.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-10">
            <Button variant="primary" size="lg" icon>
              Run a Sample Assessment
            </Button>
            <Button variant="outline" size="lg">
              See How Scoring Works
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-px mt-14 max-w-xl bg-zinc-800/50 border border-zinc-800">
            {[
              ["10+", "Industries covered"],
              ["3-8s", "To generate a session"],
              ["0", "Pre-built blueprints"],
            ].map(([n, l]) => (
              <div key={l} className="bg-black/50 backdrop-blur-sm px-5 py-5">
                <div className="text-2xl font-bold text-white">{n}</div>
                <div className="mt-1 text-[11px] uppercase tracking-wider text-zinc-500">
                  {l}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5 w-full">
          <NairaSessionPreview
            role={role}
            idx={idx}
            total={ROLE_CYCLE.length}
          />
        </div>
      </div>
    </section>
  );
};
