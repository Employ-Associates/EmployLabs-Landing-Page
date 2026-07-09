"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import {
  Code, MessageSquare, Mic, Layers, PenTool, Sparkles,
  Smile, Pause, Terminal, Database, CheckCircle2, Zap
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
        <div className="flex flex-col lg:flex-row bg-surface border border-white/5 rounded-2xl overflow-hidden w-full shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] hover:shadow-[0_30px_70px_rgba(0,0,0,0.95)] transition-shadow duration-500 min-h-[420px] lg:min-h-[500px] relative group">

          {/* Subtle gradient hover effect */}
          <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.01] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />

          {/* Visual Area */}
          <div className="w-full lg:w-[60%] relative min-h-[400px] lg:min-h-0 flex items-center justify-center bg-surface lg:border-r border-white/5 overflow-hidden">
            <img
              src={agent.bgImage}
              alt="Background"
              className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-[1.03] transition-transform duration-[4000ms] ease-out"
            />

            {/* Center Widget */}
            <div className="relative z-20 w-full max-w-md flex justify-center p-4">
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

            <button className="self-start rounded-full border border-white/10 px-6 py-2.5 text-xs font-medium text-white hover:bg-white/5 hover:border-white/20 transition-colors mb-12 cursor-pointer">
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
      name: "Meera",
      role: "The Recruiter Brain",
      icon: Code,
      accent: "var(--color-accent)",
      desc: "Meera turns every job description into clarity. She surfaces patterns, uncovers core requirements, and quantifies fit, then recommends candidates that drive outcomes.",
      bgImage: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop",
      features: [
        { title: "Parse the Job Description", active: false, detail: "Extracts hard constraints and implicit signals." },
        { title: "Build Candidate Personas", active: false, detail: "Maps raw requirements into actionable profiles." },
        { title: "Source from 800M+ profiles", active: false, detail: "Scans globally to identify top 1% matches." },
        { title: "Score and rank matches", active: false },
        {
          title: "Monitor and improve",
          active: true,
          detail: "Track outcomes in production and continuously refine sourcing policies using performance and hiring insights."
        }
      ],
      renderWidget: () => (
        <div className="bg-[#1a1a1a]/90 backdrop-blur-2xl border border-white/10 rounded-sm w-[90%] max-w-lg shadow-2xl overflow-hidden text-left mt-8 lg:mt-0">
          <div className="p-4 border-b border-white/10 flex items-center justify-between">
            <span className="text-white font-medium text-sm">Agent Canvas</span>
            <span className="text-zinc-400 text-xs px-2 py-1 rounded-full bg-white/5">Parsing JD</span>
          </div>
          <div className="p-5">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-accent/20 border border-accent/30 flex items-center justify-center">
                <Database className="w-5 h-5 text-accent"/>
              </div>
              <div>
                <h4 className="text-white text-sm">Lead Staff SRE</h4>
                <p className="text-xs text-zinc-400">Extracting requirements...</p>
              </div>
            </div>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between items-center bg-white/5 p-2.5 rounded-sm border border-white/5">
                <span className="text-zinc-300">Kubernetes Architecture</span>
                <span className="text-accent bg-accent/10 px-2 py-0.5 rounded">Must-have</span>
              </div>
              <div className="flex justify-between items-center bg-white/5 p-2.5 rounded-sm border border-white/5">
                <span className="text-zinc-300">Golang Concurrency</span>
                <span className="text-accent bg-accent/10 px-2 py-0.5 rounded">Must-have</span>
              </div>
              <div className="flex justify-between items-center bg-white/5 p-2.5 rounded-sm border border-white/5">
                <span className="text-zinc-300">Rust</span>
                <span className="text-zinc-500 bg-zinc-800 px-2 py-0.5 rounded">Nice-to-have</span>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "zia",
      name: "Zia",
      role: "The Candidate Engager",
      icon: MessageSquare,
      accent: "var(--color-gold)",
      desc: "Zia handles the outreach lifecycle. She initiates contact, answers complex candidate queries, handles objections, and seamlessly schedules interviews with interested talent.",
      bgImage: "https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=2052&auto=format&fit=crop",
      features: [
        { title: "Multi-channel Outreach", active: false, detail: "Contacts candidates where they are most responsive." },
        { title: "Dynamic Follow-ups", active: false, detail: "Adjusts messaging based on applicant engagement." },
        { title: "Objection Handling", active: false, detail: "Addresses concerns and answers questions directly." },
        { title: "Answer Queries", active: false },
        {
          title: "Autonomous Scheduling",
          active: true,
          detail: "Automatically reads back interest and handles complex calendar coordination without any back-and-forth emails."
        }
      ],
      renderWidget: () => (
        <div className="bg-[#1a1a1a]/90 backdrop-blur-2xl border border-white/10 rounded-sm w-[90%] max-w-lg shadow-2xl overflow-hidden text-left mt-8 lg:mt-0">
          <div className="p-4 border-b border-white/10 flex items-center justify-between">
            <span className="text-white font-medium text-sm">Outreach Sequence</span>
            <span className="text-gold text-xs px-2 py-1 rounded-full bg-gold/10 flex items-center gap-1"><CheckCircle2 className="w-3 h-3"/> Active</span>
          </div>
          <div className="p-5 space-y-4">
            <div className="bg-white/5 border border-white/5 rounded-sm p-3">
              <div className="flex justify-between text-[10px] uppercase tracking-wider text-zinc-500 mb-2">
                <span>To: Alex Rivera</span>
                <span>Day 1</span>
              </div>
              <div className="text-sm text-zinc-300 mb-1">Stripe &lt;-&gt; Acme Corp (Lead SRE)</div>
              <div className="text-xs text-zinc-400 leading-relaxed">Hi Alex, saw your work on Stripe's ingress routing. We are solving similar scale issues at Acme Corp and I think your background is a perfect fit...</div>
            </div>
            <div className="pl-6 border-l border-white/10 space-y-4">
              <div className="bg-white/5 border border-white/5 rounded-sm p-3">
                <div className="flex justify-between text-[10px] uppercase tracking-wider text-zinc-500 mb-2">
                  <span>Reply from Alex</span>
                  <span>Day 2</span>
                </div>
                <div className="text-xs text-white">Sounds interesting. What's the comp band looking like?</div>
              </div>
              <div className="bg-gold/10 border border-gold/20 rounded-sm p-3">
                <div className="flex justify-between text-[10px] uppercase tracking-wider text-gold mb-2">
                  <span className="flex items-center gap-1"><Zap className="w-3 h-3"/> Zia Auto-reply</span>
                  <span>Day 2</span>
                </div>
                <div className="text-xs text-zinc-300 leading-relaxed">The band is $180k-$220k base + equity. Should I send over some times for a quick intro call?</div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "naira",
      name: "Naira",
      role: "The Interviewer",
      icon: Mic,
      accent: "#a5b4fc",
      desc: "Naira conducts live, conversational voice interviews. She probes on technical depth, evaluates against your rubric, and synthesizes the conversation into a scored report.",
      bgImage: "https://images.unsplash.com/photo-1434394354979-a235cd36269d?q=80&w=2051&auto=format&fit=crop",
      features: [
        { title: "Voice Generation", active: false, detail: "Lifelike, responsive audio for natural conversations." },
        { title: "Technical Probing", active: false, detail: "Asks follow-up questions to test actual depth." },
        { title: "Dynamic Context", active: false, detail: "Adapts to applicant's specific background instantly." },
        { title: "Live Transcription", active: false },
        {
          title: "Rubric Evaluation",
          active: true,
          detail: "Grades the interview in real-time against your exact technical and cultural rubrics to ensure perfectly unbiased outcomes."
        }
      ],
      renderWidget: () => (
        <div className="bg-[#1a1a1a]/90 backdrop-blur-2xl border border-white/10 rounded-sm w-[90%] max-w-lg shadow-2xl overflow-hidden text-left mt-8 lg:mt-0">
          <div className="p-4 border-b border-white/10 flex items-center justify-between">
             <span className="text-white font-medium text-sm">Voice call details</span>
             <div className="flex gap-2">
                <span className="text-accent text-[10px] uppercase tracking-wider px-2 py-1 rounded border border-accent/20 bg-accent/10 flex items-center gap-1"><Smile className="w-3 h-3"/> Happy</span>
                <span className="text-zinc-400 text-[10px] uppercase tracking-wider px-2 py-1 rounded border border-white/10 bg-white/5 flex items-center gap-1"><span className="w-1.5 h-1.5 bg-orange-500 rounded-full"/> Transferred</span>
             </div>
          </div>
          <div className="p-5 space-y-4">
             <div className="text-xs text-zinc-400 space-y-1">
                <div>Ticket ID: <span className="text-zinc-500">(call_+1747...)</span></div>
                <div>Aug 18, 2025 23:56 <span className="text-zinc-500">(2m 7s)</span></div>
             </div>
             {/* Scrubber */}
             <div className="flex items-center gap-3 text-xs text-zinc-500 bg-black/40 border border-white/5 rounded-sm p-2.5 px-3">
                <span>0:19</span>
                <div className="flex-1 h-1 bg-white/10 rounded-full overflow-hidden">
                   <div className="w-1/3 h-full bg-zinc-400" />
                </div>
                <span>-1:48</span>
                <Pause className="w-3 h-3" />
             </div>
             {/* Tabs */}
             <div className="flex text-xs">
                <button className="px-4 py-2 bg-white text-black font-medium rounded-sm text-[11px] uppercase tracking-wider">Transcript</button>
                <button className="px-4 py-2 text-zinc-400 hover:text-white transition-colors text-[11px] uppercase tracking-wider">Details</button>
                <button className="px-4 py-2 text-zinc-400 hover:text-white transition-colors text-[11px] uppercase tracking-wider">Latency</button>
             </div>
             {/* Logs */}
             <div className="bg-green-950/30 border border-green-500/20 text-green-400 text-[11px] p-2 rounded flex items-center gap-2">
                <Terminal className="w-3 h-3" /> Initialization code <span className="bg-green-500/20 px-1.5 rounded ml-1">4 logs</span>
             </div>
             {/* Chat */}
             <div className="space-y-4 text-xs mt-4">
                <div className="text-zinc-300 leading-relaxed">Hello! You're speaking with Naira, your AI interviewer. How are you doing today?</div>
                <div className="text-[10px] text-zinc-500">2s</div>
                <div className="flex justify-end">
                   <div className="bg-white text-black px-4 py-2.5 rounded-sm font-medium shadow-sm">I'm doing well, ready to get started.</div>
                </div>
                <div className="text-right text-[10px] text-zinc-500">4s</div>
             </div>
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
          <div className="flex items-center gap-2 text-[10px] font-mono tracking-widest uppercase text-zinc-500 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
            ENTITY GRID
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display text-white tracking-tight leading-tight">
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
