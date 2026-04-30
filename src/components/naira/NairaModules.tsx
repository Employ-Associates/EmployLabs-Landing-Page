import React from 'react';
import { EyebrowPill, MonoTag } from './primitives';
import type { ModuleData } from './types';

export const NairaProblem: React.FC = () => (
  <section className="relative py-32 bg-black border-t border-zinc-900" data-screen-label="Why Naira">
    <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)', backgroundSize: '64px 64px' }} />
    <div className="relative max-w-[1400px] mx-auto px-6 lg:px-16">
      <div className="grid lg:grid-cols-12 gap-8 mb-16">
        <div className="lg:col-span-5">
          <EyebrowPill accent="purple">Why Naira</EyebrowPill>
          <h2 className="mt-6 text-4xl md:text-5xl lg:text-[56px] font-medium tracking-tight leading-[1.05] text-white">
            Production hires don&apos;t fail at <span className="text-zinc-500 italic">producing.</span><br />
            They fail at <span className="text-purple-300">judgment.</span>
          </h2>
        </div>
        <div className="lg:col-span-6 lg:col-start-7 self-end">
          <p className="text-lg text-zinc-400 leading-relaxed">
            Whether it&apos;s a backend engineer reviewing an API, a sales AE reading a proposal, or a clinical lead signing off on a deviation memo &mdash; the hardest skill is knowing whether the work in front of you is good. That&apos;s what Naira tests, in conversation, on artifacts that don&apos;t exist before the call begins.
          </p>
        </div>
      </div>

      <div className="border-t border-zinc-800">
        {[
          { before: 'Static question banks recycled across 1,000 candidates', after: 'A fresh artifact, generated mid-session, calibrated to this candidate' },
          { before: 'Multiple-choice that rewards pattern recognition', after: 'Open dialogue that surfaces priorities, trade-offs, and blind spots' },
          { before: 'One assessment platform per function, ten vendors to wrangle', after: 'One agent across engineering, sales, product, HR, finance, and beyond' },
          { before: 'A score with no audit trail — or a 200-page transcript no one reads', after: 'RAR scoring per dimension, traceable to the moment in conversation' },
        ].map((row, i) => (
          <div key={i} className="grid grid-cols-1 md:grid-cols-12 gap-6 py-7 border-b border-zinc-800 group">
            <div className="md:col-span-1 flex items-start">
              <span className="font-mono text-[11px] text-zinc-700 tracking-widest">0{i + 1}</span>
            </div>
            <div className="md:col-span-5 flex items-start gap-3">
              <span className="mt-1 text-zinc-700 font-mono text-[10px] uppercase tracking-widest">Before</span>
              <p className="text-zinc-500 line-through decoration-zinc-700">{row.before}</p>
            </div>
            <div className="md:col-span-6 flex items-start gap-3">
              <span className="mt-1 text-purple-400/80 font-mono text-[10px] uppercase tracking-widest">Naira</span>
              <p className="text-white text-[17px] font-medium leading-snug">{row.after}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export const NairaModules: React.FC = () => {
  const mods: ModuleData[] = [
    {
      tag: 'M1', code: 'Artifact Audit',
      title: 'Review &amp; Critique',
      body: 'Naira generates a work artifact with seeded flaws. The candidate reviews aloud while Naira probes what they find and miss.',
      tests: ['Critical thinking', 'Domain depth', 'Quality bar'],
      examples: [
        ['Engineer', 'FastAPI endpoint with N+1 + missing auth'],
        ['Sales AE', 'Enterprise proposal with wrong ICP framing'],
        ['HR', 'JD with biased language + missing requirements'],
        ['PM', 'PRD with misaligned metrics + missing edge cases'],
        ['Marketing', 'Campaign brief with wrong audience targeting'],
        ['Clinical', 'Deviation memo with symptomatic root cause'],
      ],
    },
    {
      tag: 'M2', code: 'Scenario Triage',
      title: 'Crisis Decision-Making',
      body: 'A messy real situation with no clean answer. Naira listens for priorities, stakeholders, communication, trade-offs.',
      tests: ['Judgment under pressure', 'Stakeholder reasoning', 'Pragmatism'],
      examples: [
        ['Engineer', 'Production DB corrupted, 50K users offline'],
        ['Sales AE', 'Champion goes silent 3 weeks before close'],
        ['CS Lead', 'Enterprise client threatening public churn'],
        ['Finance', 'R&D 40% over budget the day before board'],
        ['Operations', 'Vendor fails QA on critical shipment'],
        ['HR', 'Star performer accused on internal Slack'],
      ],
    },
    {
      tag: 'M3', code: 'Strategy / System Design',
      title: 'Deep Thinking',
      body: 'A complex, role-anchored design challenge. Naira probes layer by layer &mdash; assumptions, trade-offs, blast radius.',
      tests: ['Systems thinking', 'Architectural taste', 'Communication'],
      examples: [
        ['VP Eng', 'Org-wide rate limiting across 50 microservices'],
        ['Head of Sales', 'GTM motion for DACH on €200K budget'],
        ['PM', 'Discovery process for AI replacing manual workflow'],
        ['Marketing', 'Brand reposition under new category entrant'],
        ['Finance Dir', 'Reforecast model under 30% revenue cut'],
        ['Legal', 'Multi-jurisdiction data residency strategy'],
      ],
    },
    {
      tag: 'M4', code: 'Improve / Extend',
      title: 'Hands-On Work',
      body: 'Naira opens an editable artifact and the candidate works while talking through it. Read-only flips to editable mid-session.',
      tests: ['Execution craft', 'Refactoring', 'Working clarity'],
      examples: [
        ['Engineer', 'Add retry-with-backoff to a batch processor'],
        ['Marketing', 'Rewrite executive summary of a campaign brief'],
        ['PM', 'Fill in success criteria + kill metrics in a PRD'],
        ['HR', 'Draft an interview scorecard from a JD'],
        ['Sales', 'Reframe a pricing proposal around buyer ROI'],
        ['Legal', 'Mark up a contentious vendor clause'],
      ],
    },
  ];

  return (
    <section className="relative py-32 bg-black" data-screen-label="Four Modules">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-16">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <EyebrowPill accent="purple">The Four Modules · Universal</EyebrowPill>
          <h2 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-tight text-white">
            Four ways to test judgment.<br /><span className="text-zinc-500">Same modules. Any role.</span>
          </h2>
          <p className="mt-6 text-lg text-zinc-400 leading-relaxed">
            M1&ndash;M4 are universal. Naira composes them based on role and seniority &mdash; and the artifacts swap from code to docs to scenarios depending on whether you&apos;re hiring an engineer, a marketer, or a clinical ops lead.
          </p>
        </div>

        <div className="space-y-5">
          {mods.map((m) => (
            <article key={m.tag} className="group relative bg-zinc-950/60 border border-zinc-800 hover:border-zinc-700 transition-colors duration-300 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative grid grid-cols-1 lg:grid-cols-12">
                <div className="lg:col-span-4 p-8 lg:p-10 border-b lg:border-b-0 lg:border-r border-zinc-800/80">
                  <div className="flex items-center gap-3 mb-5">
                    <span className="font-mono text-[10px] tracking-widest text-purple-400 px-2 py-1 bg-purple-500/10 border border-purple-500/20">{m.tag}</span>
                    <span className="font-mono text-[10px] tracking-widest text-zinc-600 uppercase">{m.code}</span>
                  </div>
                  <h3 className="text-3xl font-medium text-white leading-tight mb-4" dangerouslySetInnerHTML={{ __html: m.title }} />
                  <p className="text-[14px] text-zinc-400 leading-relaxed mb-6" dangerouslySetInnerHTML={{ __html: m.body }} />
                  <div className="flex flex-wrap gap-1.5">
                    {m.tests.map((t) => <MonoTag key={t}>{t}</MonoTag>)}
                  </div>
                </div>
                <div className="lg:col-span-8 p-8 lg:p-10">
                  <div className="font-mono text-[10px] uppercase tracking-widest text-zinc-600 mb-5">What this module looks like, by role</div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3.5">
                    {m.examples.map(([role, ex], i) => (
                      <div key={i} className="flex items-start gap-3 py-2 border-b border-zinc-900/80">
                        <span className="min-w-[88px] text-[11px] font-mono uppercase tracking-wider text-purple-400/80">{role}</span>
                        <span className="text-[13px] text-zinc-300 leading-snug">{ex}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 border border-zinc-800 bg-zinc-950/40 backdrop-blur-sm">
          <div className="px-6 py-4 border-b border-zinc-800/80 flex items-center justify-between">
            <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-500">Module Composition</span>
            <span className="text-[12px] text-zinc-500">Same logic across all 10 role categories</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-zinc-800">
            {[
              ['L1', 'Junior', 'M1 · M2 · M4', 'Read, evaluate, do basic work'],
              ['L2', 'Mid', 'M1 · M3 · M4', 'First exposure to design thinking'],
              ['L3', 'Senior', 'M1 · M3', 'Pure judgment & systems thinking'],
              ['L4', 'Director', 'M1 · M2 · M3', 'Strategy, crisis, systemic design'],
            ].map(([tier, label, mods, desc]) => (
              <div key={tier} className="p-6">
                <div className="flex items-baseline gap-2 mb-3">
                  <span className="font-mono text-[10px] tracking-widest text-purple-400">{tier}</span>
                  <span className="text-white font-medium">{label}</span>
                </div>
                <div className="font-mono text-[13px] text-zinc-300 mb-2">{mods}</div>
                <div className="text-[12px] text-zinc-500 leading-snug">{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
