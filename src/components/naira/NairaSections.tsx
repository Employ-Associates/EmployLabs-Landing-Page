import React from 'react';
import { Button, EyebrowPill, MonoTag } from './primitives';
import type { ScoringDimension } from './types';

export const NairaArchitecture: React.FC = () => (
  <section className="relative py-32 bg-black border-t border-zinc-900" data-screen-label="Architecture">
    <div className="max-w-[1400px] mx-auto px-6 lg:px-16">
      <div className="grid lg:grid-cols-12 gap-8 mb-20">
        <div className="lg:col-span-5">
          <EyebrowPill accent="purple">Conductor-Driven, No Blueprints</EyebrowPill>
          <h2 className="mt-6 text-4xl md:text-5xl font-medium tracking-tight leading-[1.05] text-white">
            A simple architecture, doing what AI does best.
          </h2>
        </div>
        <div className="lg:col-span-6 lg:col-start-7 self-end">
          <p className="text-lg text-zinc-400 leading-relaxed">
            No pre-built blueprints. No artifact libraries to maintain. No SME review queues. The JD processing context — ICP, JTBDs, RAR framework, skill graph — flows into one LLM call that generates the session plan. From there, the Conductor runs it.
          </p>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-px bg-zinc-800/50 border border-zinc-800">
        {[
          {
            num: '01',
            title: 'Session Plan Generator',
            kind: 'LLM · One-shot · Pre-session',
            body: 'Reads ICP, JTBDs, RAR, skill graph, candidate resume. Outputs module sequence, time allocations, probing strategy, scoring dimensions. ~3-8 seconds.',
            tone: 'purple',
            tags: ['GPT-class LLM', 'Single call', 'Plan, not artifacts'],
          },
          {
            num: '02',
            title: 'The Conductor',
            kind: 'Pure code · State machine · No LLM',
            body: 'Phase transitions. Time budget enforcement. Screen-switch commands. Adaptive triggers. Coverage tracking. The thing that keeps the AI on the rails.',
            tone: 'blue',
            tags: ['Deterministic', 'Redis-persisted', 'Crash-safe'],
          },
          {
            num: '03',
            title: 'Voice Agent + Dynamic Screens',
            kind: 'LLM · Streaming · Mid-session',
            body: 'Asks questions, probes, generates artifacts on-the-spot, evaluates judgment through conversation. Reacts to what it learned in warmup.',
            tone: 'emerald',
            tags: ['Streaming voice', 'On-the-spot artifacts', 'Adaptive depth'],
          },
        ].map((col) => (
          <div key={col.num} className="bg-zinc-950/80 backdrop-blur-sm p-8 relative">
            <div className="flex items-baseline gap-3 mb-6">
              <span className="font-mono text-[10px] tracking-widest text-zinc-700">{col.num}</span>
              <span className={`font-mono text-[10px] tracking-widest ${col.tone === 'purple' ? 'text-purple-400' : col.tone === 'blue' ? 'text-blue-400' : 'text-emerald-400'} uppercase`}>{col.kind}</span>
            </div>
            <h3 className="text-2xl font-medium text-white mb-4">{col.title}</h3>
            <p className="text-[14px] text-zinc-400 leading-relaxed mb-6">{col.body}</p>
            <div className="flex flex-wrap gap-1.5">
              {col.tags.map((t) => <MonoTag key={t}>{t}</MonoTag>)}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-20">
        <div className="flex items-end justify-between mb-10">
          <h3 className="text-2xl md:text-3xl font-medium text-white tracking-tight">Five screens. Naira chooses live.</h3>
          <span className="hidden md:inline font-mono text-[11px] uppercase tracking-widest text-zinc-600">screen_command → frontend</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {[
            ['Voice Only', 'Warmup, M2 triage, M3 open'],
            ['Voice + Code Viewer', 'M1 review, technical roles'],
            ['Voice + Doc Viewer', 'M1 review, non-technical'],
            ['Voice + Code Editor', 'M4 hands-on, technical'],
            ['Voice + Doc Editor', 'M4 hands-on, non-technical'],
          ].map(([t, s], i) => (
            <div key={t} className="border border-zinc-800 bg-zinc-950/40 p-5 hover:border-zinc-700 transition-colors duration-300 group">
              <div className="aspect-[4/3] bg-zinc-900/40 border border-zinc-800/60 mb-4 flex items-center justify-center relative overflow-hidden">
                {i === 0 && (
                  <div className="flex gap-0.5">
                    {[16, 28, 38, 22, 46, 30, 18, 34, 24, 42, 20].map((h, j) => (
                      <span key={j} className="w-0.5 rounded-full bg-zinc-600" style={{ height: `${h}px` }} />
                    ))}
                  </div>
                )}
                {i === 1 && (
                  <div className="grid grid-cols-2 w-full h-full">
                    <div className="border-r border-zinc-800/60 flex items-center justify-center"><div className="w-3 h-3 rounded-full bg-zinc-700" /></div>
                    <div className="p-1.5 space-y-0.5"><div className="h-0.5 w-full bg-zinc-700" /><div className="h-0.5 w-3/4 bg-zinc-700" /><div className="h-0.5 w-2/3 bg-red-500/40" /></div>
                  </div>
                )}
                {i === 2 && (
                  <div className="grid grid-cols-2 w-full h-full">
                    <div className="border-r border-zinc-800/60 flex items-center justify-center"><div className="w-3 h-3 rounded-full bg-zinc-700" /></div>
                    <div className="p-1.5 space-y-0.5"><div className="h-0.5 w-3/4 bg-zinc-600" /><div className="h-0.5 w-full bg-zinc-700" /><div className="h-0.5 w-1/2 bg-zinc-700" /><div className="h-0.5 w-2/3 bg-zinc-700" /></div>
                  </div>
                )}
                {i === 3 && (
                  <div className="grid grid-cols-2 w-full h-full">
                    <div className="border-r border-zinc-800/60 flex items-center justify-center"><div className="w-3 h-3 rounded-full bg-zinc-700" /></div>
                    <div className="p-1.5 space-y-0.5"><div className="h-0.5 w-full bg-zinc-700" /><div className="h-0.5 w-2/3 bg-purple-400/60" /><div className="h-0.5 w-1/2 bg-zinc-700" /><div className="h-0.5 w-1/4 bg-purple-400 animate-pulse" /></div>
                  </div>
                )}
                {i === 4 && (
                  <div className="grid grid-cols-2 w-full h-full">
                    <div className="border-r border-zinc-800/60 flex items-center justify-center"><div className="w-3 h-3 rounded-full bg-zinc-700" /></div>
                    <div className="p-1.5 space-y-1"><div className="h-0.5 w-1/2 bg-zinc-500" /><div className="h-0.5 w-3/4 bg-zinc-700" /><div className="h-0.5 w-2/3 bg-purple-400/60" /></div>
                  </div>
                )}
              </div>
              <div className="font-medium text-[13px] text-white">{t}</div>
              <div className="text-[11px] text-zinc-500 mt-1 leading-snug">{s}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export const NairaScoring: React.FC = () => {
  const dims: ScoringDimension[] = [
    { name: 'Deal Qualification', weight: 30, score: 4.2, rubric: 'Strong', hard: true },
    { name: 'Stakeholder Mapping', weight: 25, score: 3.6, rubric: 'Solid', hard: true },
    { name: 'Commercial Reasoning', weight: 25, score: 4.0, rubric: 'Strong', hard: false },
    { name: 'Communication Quality', weight: 20, score: 3.8, rubric: 'Solid', hard: false },
  ];

  return (
    <section className="relative py-32 bg-black overflow-hidden" data-screen-label="Scoring">
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-16">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <EyebrowPill accent="purple">RAR Scoring</EyebrowPill>
            <h2 className="mt-6 text-4xl md:text-5xl lg:text-[56px] font-medium tracking-tight leading-[1.05] text-white">
              Every score points to a moment in conversation.
            </h2>
            <p className="mt-8 text-lg text-zinc-400 leading-relaxed">
              Naira scores against the role&apos;s RAR framework — dimensions, weights, hard-fail flags. The result is multi-signal: transcript analysis, artifact engagement, coverage of seeded flaws, and probe-layer depth. Open the report and click any dimension to jump to the exact transcript moment.
            </p>
            <div className="mt-10 grid grid-cols-3 gap-px bg-zinc-800/50 border border-zinc-800 max-w-md">
              {[['3.9', 'Naira Score'], ['2/2', 'Hard-Fail Pass'], ['100%', 'JTBD Coverage']].map(([n, l]) => (
                <div key={l} className="bg-black/60 px-4 py-4">
                  <div className="text-xl font-bold text-white">{n}</div>
                  <div className="mt-1 text-[10px] uppercase tracking-wider text-zinc-500">{l}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="bg-zinc-950/80 backdrop-blur-xl border border-zinc-800 rounded-xl overflow-hidden">
              <div className="flex items-center justify-between px-5 py-4 border-b border-zinc-800/80 bg-zinc-900/30">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center text-[11px] font-semibold text-white">MK</div>
                  <div>
                    <div className="text-[13px] font-medium text-white">Maya K. — Enterprise Account Executive</div>
                    <div className="font-mono text-[10px] text-zinc-500 uppercase tracking-wider">Session 4f29a · 55 min · L3 · Sales</div>
                  </div>
                </div>
                <span className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-mono uppercase tracking-widest">Strong Hire</span>
              </div>

              <div className="px-5 py-5 border-b border-zinc-800/80">
                <div className="flex items-baseline justify-between mb-3">
                  <span className="font-mono text-[10px] tracking-widest text-zinc-500 uppercase">Naira Score (weighted)</span>
                  <span className="text-3xl font-bold text-white">3.92<span className="text-zinc-600 text-lg font-normal"> / 5</span></span>
                </div>
                <div className="h-1.5 bg-zinc-900 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-purple-500 to-purple-300" style={{ width: '78%' }} />
                </div>
              </div>

              <div className="divide-y divide-zinc-800/80">
                {dims.map((d) => (
                  <div key={d.name} className="px-5 py-4 grid grid-cols-12 gap-4 items-center hover:bg-zinc-900/30 transition-colors group">
                    <div className="col-span-5 flex items-center gap-2">
                      <span className="text-[13px] text-white font-medium">{d.name}</span>
                      {d.hard && <MonoTag tone="danger">Hard-fail</MonoTag>}
                    </div>
                    <div className="col-span-2 font-mono text-[11px] text-zinc-500">w {d.weight}%</div>
                    <div className="col-span-3">
                      <div className="flex gap-0.5">
                        {[1, 2, 3, 4, 5].map((n) => (
                          <div key={n} className={`flex-1 h-1.5 ${n <= Math.floor(d.score) ? 'bg-purple-400' : n === Math.ceil(d.score) ? 'bg-purple-400/40' : 'bg-zinc-800'}`} />
                        ))}
                      </div>
                    </div>
                    <div className="col-span-2 text-right">
                      <span className="font-mono text-[11px] text-white">{d.score.toFixed(1)}</span>
                      <span className="ml-2 text-[10px] text-zinc-500">{d.rubric}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="px-5 py-4 bg-zinc-900/30 border-t border-zinc-800/80">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-500">Transcript Trace · Deal Qualification</span>
                  <span className="font-mono text-[10px] text-purple-400">M2 @ 18:42</span>
                </div>
                <p className="text-[13px] text-zinc-300 italic leading-relaxed">
                  &quot;…the champion going dark before procurement isn&apos;t a closing problem &mdash; it&apos;s a buying-committee problem. I&apos;d stop selling features and start asking who else has to say yes. If we can&apos;t get a CFO meeting in week one, the deal isn&apos;t real, and I&apos;d rather find that out now than chase it for a quarter.&quot;
                </p>
                <div className="mt-3 flex items-center gap-2 text-[11px] text-zinc-500">
                  <span className="text-purple-400 font-mono">+0.6</span>
                  <span>multi-threading instinct, qualification rigor</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const NairaOutcomes: React.FC = () => (
  <section className="relative py-32 bg-black border-t border-zinc-900" data-screen-label="Outcomes">
    <div className="max-w-[1400px] mx-auto px-6 lg:px-16">
      <div className="text-center mb-16">
        <EyebrowPill accent="purple">Two Sessions, One Pipeline</EyebrowPill>
        <h2 className="mt-6 text-3xl md:text-5xl font-medium tracking-tight text-white max-w-3xl mx-auto leading-[1.1]">
          Screen wide. Assess deep. Hire confident.
        </h2>
      </div>

      <div className="relative max-w-5xl mx-auto mb-20">
        <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent" />
        <div className="grid grid-cols-3 gap-4 relative">
          {[
            { label: 'Round 1', title: 'JTBD Voice', time: '15-30 min', body: "Naira's lighter cousin covers all JTBDs with breadth.", tone: 'blue' },
            { label: 'Round 2', title: 'Naira Assessment', time: '30-75 min', body: 'Deep judgment. M1-M4 composed for role and seniority.', tone: 'purple', primary: true },
            { label: 'Round 3', title: 'Human Panel', time: 'Optional', body: 'Specialist recruiter reviews Naira report, runs final check.', tone: 'neutral' },
          ].map((s, i) => (
            <div key={i} className={`relative ${s.primary ? 'scale-[1.04]' : ''}`}>
              <div className={`p-6 ${s.primary ? 'bg-gradient-to-b from-purple-950/40 to-zinc-950/80 border-purple-500/40' : 'bg-zinc-950/60 border-zinc-800'} border backdrop-blur-sm`}>
                <div className="flex items-baseline justify-between mb-4">
                  <span className={`font-mono text-[10px] tracking-widest uppercase ${s.tone === 'purple' ? 'text-purple-400' : s.tone === 'blue' ? 'text-blue-400' : 'text-zinc-600'}`}>{s.label}</span>
                  <span className="font-mono text-[10px] text-zinc-600">{s.time}</span>
                </div>
                <h4 className="text-lg font-medium text-white mb-2">{s.title}</h4>
                <p className="text-[13px] text-zinc-400 leading-relaxed">{s.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-px bg-zinc-800/50 border border-zinc-800">
        {[
          { n: '92%', l: 'False-positive reduction', q: "Naira caught the senior AE who couldn't articulate a buying committee — three rounds of human panels had passed him.", co: 'Enterprise SaaS, EMEA' },
          { n: '5.2x', l: 'Throughput per recruiter', q: 'We replaced four assessment vendors — eng, sales, PM, and HR — with one Naira contract. Recruiters got their week back.', co: 'Series-C Fintech, Bangalore GCC' },
          { n: '0', l: 'Question banks to maintain', q: 'Every candidate gets a unique session. Nothing to update, nothing to leak, nothing to game — across every function we hire for.', co: 'Healthcare Platform, US' },
        ].map((o) => (
          <div key={o.l} className="bg-black/60 p-8 hover:bg-zinc-950/60 transition-colors group">
            <div className="text-4xl font-bold text-white mb-2">{o.n}</div>
            <div className="text-[12px] uppercase tracking-wider text-purple-400/80 font-mono mb-5">{o.l}</div>
            <p className="text-zinc-400 italic text-[14px] leading-relaxed mb-4">&quot;{o.q}&quot;</p>
            <div className="text-[11px] text-zinc-600 font-mono uppercase tracking-wider">— {o.co}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export const NairaCTA: React.FC = () => (
  <section className="relative py-48 overflow-hidden" data-screen-label="CTA">
    <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=2400&auto=format&fit=crop&q=70')", opacity: 0.5 }} />
    <div className="absolute inset-0 bg-gradient-to-b from-black via-black/60 to-black" />
    <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at center, rgba(126,34,206,0.2), transparent 60%)' }} />
    <div className="relative z-10 max-w-4xl px-6 mx-auto text-center">
      <EyebrowPill accent="purple">Run a Naira Session</EyebrowPill>
      <h3 className="mt-8 mb-8 text-4xl md:text-7xl font-medium leading-[1.05] text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(180deg, #fff, rgba(255,255,255,0.5))' }}>
        Stop hiring on resumes.<br />Start hiring on judgment.
      </h3>
      <p className="mb-12 text-xl text-zinc-300 leading-relaxed">
        Drop in a JD. We&apos;ll generate a calibrated session and run a sample assessment on your strongest current engineer — so you can see what Naira sees, before a single new candidate enters the pipeline.
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <Button variant="primary" size="lg" icon>Run a Sample Session</Button>
        <Button variant="outline" size="lg">Talk to an Architect</Button>
      </div>
    </div>
  </section>
);


