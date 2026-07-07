"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "motion/react";
import {
  FileText, Upload, Bot, Check, Mail, MessageSquare,
  Calendar, Mic, Award, ArrowRight, Sparkles, Image as ImageIcon, Box, Paperclip, ArrowUp,
  UserCheck, BarChart, ChevronRight, Activity, Zap, Shield, FileSearch
} from "lucide-react";

export function Funnel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const [activeStep, setActiveStep] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const totalSteps = 8;
    // Calculate which step is active (0 to 7) based on scroll percentage.
    let step = Math.floor(latest * totalSteps);
    if (step >= totalSteps) step = totalSteps - 1;
    if (step !== activeStep) {
      setActiveStep(step);
    }
  });

  const stepContent = [
    { title: "Upload the Job", subtitle: "Drop in the JD. Meera extracts core requirements and context automatically." },
    { title: "Build the ICP", subtitle: "Meera converts the JD into an Ideal Candidate Profile and clarifies ambiguities." },
    { title: "Select Persona", subtitle: "Choose the exact archetype you need to tune the search parameters." },
    { title: "Score & Shortlist", subtitle: "Meera searches and scores the talent pool against your confirmed profile." },
    { title: "Reach out & Automate", subtitle: "Sia contacts your shortlist across channels and monitors responses." },
    { title: "Autonomous Scheduling", subtitle: "Interested candidates receive a booking link for zero back-and-forth scheduling." },
    { title: "AI Voice Interview", subtitle: "Naira conducts a live voice interview and generates a scored report card." },
    { title: "Make the Offer", subtitle: "Review the finalists, read their reports, and extend the offer." },
  ];

  return (
    <section ref={containerRef} className="relative bg-transparent h-[800vh]" id="funnel">
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-start overflow-hidden px-4 md:px-8">

        {/* Dynamic Titles */}
        <div className="text-center mb-0 md:mb-4 shrink-0 z-20 w-full max-w-6xl mx-auto pt-24 md:pt-28">
          <div className="relative h-14 md:h-20 mb-2 md:mb-4 w-full">
            <AnimatePresence mode="wait">
              <motion.h3
                key={`title-${activeStep}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 text-3xl md:text-4xl lg:text-5xl font-display font-medium text-white tracking-tight flex items-center justify-center w-full"
              >
                {stepContent[activeStep].title}
              </motion.h3>
            </AnimatePresence>
          </div>
          <div className="relative h-16 md:h-12 w-full mx-auto px-4">
            <AnimatePresence mode="wait">
              <motion.p
                key={`sub-${activeStep}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 text-zinc-400 text-sm md:text-base max-w-2xl mx-auto text-center flex items-start justify-center w-full"
              >
                {stepContent[activeStep].subtitle}
              </motion.p>
            </AnimatePresence>
          </div>
        </div>

        {/* Central Visual Canvas */}
        <div className="w-full max-w-[1200px] relative h-[450px] md:h-[600px] flex items-center justify-center">
           <AnimatePresence mode="wait">
              {activeStep === 0 && <Step0Upload key="step0" />}
              {activeStep === 1 && <Step1ICP key="step1" />}
              {activeStep === 2 && <Step2Persona key="step2" />}
              {activeStep === 3 && <Step3Score key="step3" />}
              {activeStep === 4 && <Step4Outreach key="step4" />}
              {activeStep === 5 && <Step5Schedule key="step5" />}
              {activeStep === 6 && <Step6Interview key="step6" />}
              {activeStep === 7 && <Step7Offer key="step7" />}
           </AnimatePresence>
        </div>

        {/* Progress indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className={`h-1 rounded-full transition-all duration-500 ${i === activeStep ? 'w-8 bg-accent' : 'w-2 bg-zinc-800'}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function Step0Upload() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4 }}
      className="w-full max-w-sm md:max-w-md mx-auto relative flex flex-col items-center justify-center h-full"
    >
      <div className="w-full relative">
        <div className="flex justify-between items-center text-xs text-zinc-500 mb-2 px-1">
          <div className="flex items-center gap-2"><ImageIcon className="w-3 h-3" /> Image</div>
          <div className="font-mono">720 x 960</div>
        </div>

        <div className="h-72 md:h-[420px] w-full bg-zinc-900 border border-accent relative group overflow-hidden">
           <div className="absolute top-[-3px] left-[-3px] w-1.5 h-1.5 bg-accent z-10" />
           <div className="absolute top-[-3px] right-[-3px] w-1.5 h-1.5 bg-accent z-10" />
           <div className="absolute bottom-[-3px] left-[-3px] w-1.5 h-1.5 bg-accent z-10" />
           <div className="absolute bottom-[-3px] right-[-3px] w-1.5 h-1.5 bg-accent z-10" />

           <div className="absolute inset-0 p-6 md:p-8 text-zinc-400 font-mono text-xs opacity-50 flex flex-col gap-4 overflow-hidden mask-image:linear-gradient(to_bottom,black_60%,transparent_100%)]">
             <div className="text-white text-sm">ROLE: Lead Staff Site Reliability Engineer</div>
             <div>
               REQUIREMENTS:<br/>
               - 8+ years of production Go & Kubernetes experience<br/>
               - Expertise in distributed systems & eBPF<br/>
               - Track record of leading infra teams at scale
             </div>
             <div>
               RESPONSIBILITIES:<br/>
               - Architect global load balancing tier<br/>
               - Mentorship and technical direction<br/>
               - Drive multi-region failover strategy
             </div>
           </div>
        </div>

        {/* Floating input box */}
        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[95%] max-w-[400px] bg-surface-800 border border-white/10 rounded-2xl p-3 shadow-2xl backdrop-blur-xl z-20">
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
        </div>
      </div>
    </motion.div>
  )
}

function Step1ICP() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4 }}
      className="w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 h-full absolute inset-0 md:relative px-2"
    >
      {/* Parsing Feed */}
      <div className="md:col-span-5 bg-zinc-900/40 p-5 md:p-6 rounded-2xl border border-white/10 shadow-2xl flex flex-col relative overflow-hidden">
         <div className="flex items-center justify-between mb-4 pb-4 border-b border-white/5 shrink-0">
           <div className="flex items-center gap-3">
             <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-accent">
               <FileSearch className="w-4 h-4" />
             </div>
             <div>
               <h4 className="text-white font-medium text-sm">Document Analysis</h4>
               <span className="text-xs text-zinc-500 font-mono">Running</span>
             </div>
           </div>
           <div className="flex gap-1">
             <span className="w-1.5 h-1.5 rounded-full bg-zinc-600 animate-pulse delay-75"></span>
             <span className="w-1.5 h-1.5 rounded-full bg-zinc-600 animate-pulse delay-150"></span>
             <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse delay-300"></span>
           </div>
         </div>
         <div className="space-y-3 flex-1 overflow-y-auto pr-2 font-mono text-[10px] md:text-xs">
           <motion.div initial={{opacity:0, x:-10}} animate={{opacity:1, x:0}} transition={{delay: 0.2}} className="text-zinc-500">{`> Parsing job_description.pdf...`}</motion.div>
           <motion.div initial={{opacity:0, x:-10}} animate={{opacity:1, x:0}} transition={{delay: 0.8}} className="text-zinc-500">{`> Extracting core competencies...`}</motion.div>
           <motion.div initial={{opacity:0, x:-10}} animate={{opacity:1, x:0}} transition={{delay: 1.4}} className="text-zinc-300 bg-zinc-950 p-2 rounded border border-white/5 mt-2 mb-2">
             Found implicit requirement: <span className="text-accent">High-Availability Systems</span> (derived from "99.99% uptime")
           </motion.div>
           <motion.div initial={{opacity:0, x:-10}} animate={{opacity:1, x:0}} transition={{delay: 2.0}} className="text-zinc-500">{`> Cross-referencing title with market standards...`}</motion.div>
           <motion.div initial={{opacity:0, x:-10}} animate={{opacity:1, x:0}} transition={{delay: 2.6}} className="text-accent">{`✓ ICP Baseline generated successfully.`}</motion.div>
         </div>
      </div>

      {/* ICP Parameters */}
      <div className="md:col-span-7 flex flex-col gap-4 md:gap-6">
        <div className="bg-zinc-950 p-5 md:p-6 rounded-2xl border border-accent/30 shadow-2xl flex-1 relative overflow-hidden flex flex-col">
           <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-3xl" />
           <div className="flex items-center gap-2 mb-4 shrink-0 text-xs text-zinc-500 uppercase tracking-widest font-mono">
             <Activity className="w-3.5 h-3.5 text-accent" /> Ideal Candidate Profile
           </div>

           <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <div className="text-xs text-zinc-500 mb-1">Target Title</div>
                <div className="text-white font-medium text-sm md:text-base">Lead Staff SRE</div>
              </div>
              <div>
                <div className="text-xs text-zinc-500 mb-1">Experience Level</div>
                <div className="text-white font-medium text-sm md:text-base">8+ Years</div>
              </div>
           </div>

           <div className="space-y-4 flex-1">
              <div>
                <div className="text-[10px] md:text-xs text-zinc-500 mb-2">Must-Haves</div>
                <div className="flex flex-wrap gap-2">
                  {["Golang", "Kubernetes", "eBPF", "System Architecture"].map(s => (
                    <span key={s} className="text-xs bg-accent/10 border border-accent/20 px-2 py-1 rounded text-accent font-medium">{s}</span>
                  ))}
                </div>
              </div>
              <div>
                <div className="text-[10px] md:text-xs text-zinc-500 mb-2">Nice-to-Haves</div>
                <div className="flex flex-wrap gap-2">
                  {["Rust", "AWS Graviton", "FinOps"].map(s => (
                    <span key={s} className="text-xs bg-white/5 border border-white/10 px-2 py-1 rounded text-zinc-300">{s}</span>
                  ))}
                </div>
              </div>
           </div>
        </div>

        {/* Clarification prompt */}
        <motion.div initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} transition={{delay: 3}} className="bg-zinc-900/80 p-4 md:p-5 rounded-xl border border-white/10 flex items-start gap-3">
          <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 shrink-0 mt-1">
             <MessageSquare className="w-4 h-4" />
          </div>
          <div>
            <div className="text-white text-xs md:text-sm mb-1.5 font-medium">Meera needs clarification</div>
            <div className="text-[10px] md:text-xs text-zinc-400 leading-relaxed mb-3">
              The JD mentions "leading teams", but doesn't specify if this is a people-manager role or a technical IC lead. Which should I optimize for?
            </div>
            <div className="flex flex-wrap gap-2">
              <button className="text-[10px] bg-white text-black px-3 py-1.5 rounded-md font-medium hover:bg-zinc-200 transition-colors">Technical IC Lead</button>
              <button className="text-[10px] bg-zinc-800 text-white border border-white/10 px-3 py-1.5 rounded-md hover:bg-zinc-700 transition-colors">People Manager</button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

function Step2Persona() {
  const personas = [
    { id: 1, title: "The Architect", desc: "System Design Focus", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop" },
    { id: 2, title: "The Operator", desc: "Flawless Execution", img: "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=800&auto=format&fit=crop" },
    { id: 3, title: "The Optimizer", desc: "Performance Tuning", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop" },
    { id: 4, title: "The Leader", desc: "Team & Processes", img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=800&auto=format&fit=crop" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4 }}
      className="w-full max-w-[1200px] mx-auto h-full flex items-center justify-center absolute inset-0 md:relative px-2 md:px-4"
    >
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 w-full">
        {personas.map((p, i) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15 }}
            className={`flex flex-col gap-2 transition-all duration-500 ${i !== 1 ? 'opacity-60 md:grayscale scale-95' : 'scale-100'}`}
          >
            {/* Header */}
            <div className="flex justify-between items-center text-[10px] md:text-xs text-zinc-500 px-1">
              <div className="flex items-center gap-1.5">
                 <ImageIcon className="w-3 h-3" /> Image
              </div>
              <div className="font-mono">720 x 960</div>
            </div>

            {/* Image Frame */}
            <div className={`relative aspect-[3/4] w-full bg-zinc-900 border ${i === 1 ? 'border-accent' : 'border-transparent'}`}>
              {/* Corner markers for the active one */}
              {i === 1 && (
                <>
                   <div className="absolute top-[-3px] left-[-3px] w-1.5 h-1.5 bg-accent z-10" />
                   <div className="absolute top-[-3px] right-[-3px] w-1.5 h-1.5 bg-accent z-10" />
                   <div className="absolute bottom-[-3px] left-[-3px] w-1.5 h-1.5 bg-accent z-10" />
                   <div className="absolute bottom-[-3px] right-[-3px] w-1.5 h-1.5 bg-accent z-10" />
                </>
              )}

              <img src={p.img} alt={p.title} className="w-full h-full object-cover absolute inset-0" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/40" />

              <div className="absolute inset-0 p-4 md:p-6 flex flex-col items-center justify-between text-center">
                 <h4 className="text-lg md:text-2xl font-display font-medium text-white tracking-tight leading-tight mt-2 md:mt-4 drop-shadow-md">
                   {p.title}
                 </h4>

                 {i === 1 ? (
                   <button className="bg-transparent border border-white rounded-full px-4 py-1.5 md:px-6 md:py-2 text-xs md:text-sm text-white backdrop-blur-sm hover:bg-white hover:text-black transition-colors">
                     Select Persona
                   </button>
                 ) : (
                   <div className="text-[10px] md:text-xs text-white/70">
                     {p.desc}
                   </div>
                 )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

function Step3Score() {
  const candidates = [
    { name: "Alex Rivera", role: "Sr. SRE at Stripe", score: 96, img: 11, status: "High Match" },
    { name: "Chen Wei", role: "Platform Eng at Netflix", score: 92, img: 21, status: "Strong Match" },
    { name: "Sarah Jenkins", role: "Systems Lead at HashiCorp", score: 88, img: 22, status: "Good Match" },
    { name: "David Kim", role: "Backend Eng at Uber", score: 81, img: 23, status: "Potential Fit" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4 }}
      className="w-full max-w-5xl mx-auto h-full flex flex-col justify-center absolute inset-0 md:relative px-2"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 h-[400px] md:h-full">

        {/* Candidate List */}
        <div className="md:col-span-5 bg-zinc-900/40 rounded-2xl border border-white/10 shadow-2xl overflow-hidden flex flex-col h-full">
          <div className="p-3 md:p-4 border-b border-white/10 bg-zinc-950/50 flex items-center justify-between">
            <span className="text-[10px] md:text-xs font-mono text-zinc-500">TALENT POOL (420)</span>
            <span className="text-[9px] md:text-[10px] bg-accent/10 text-accent px-2 py-0.5 rounded border border-accent/20">Sorted by Fit</span>
          </div>
          <div className="flex-1 overflow-y-auto p-2 space-y-1">
            {candidates.map((c, i) => (
              <motion.div
                key={c.name}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className={`flex items-center justify-between p-2 md:p-3 rounded-xl cursor-pointer transition-colors ${i === 0 ? 'bg-zinc-800/80 border border-white/10' : 'hover:bg-zinc-900 border border-transparent'}`}
              >
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="relative">
                    <img src={`https://i.pravatar.cc/150?u=${c.img}`} alt={c.name} className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-white/10 object-cover" />
                    {i === 0 && <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-accent rounded-full border-2 border-zinc-900" />}
                  </div>
                  <div>
                    <div className="text-white text-[10px] md:text-xs font-medium">{c.name}</div>
                    <div className="text-zinc-500 text-[9px] md:text-[10px]">{c.role}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className={`font-mono text-xs md:text-sm font-bold ${i === 0 ? 'text-accent' : 'text-white'}`}>{c.score}</div>
                  <div className="text-[8px] md:text-[9px] text-zinc-500">{c.status}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Candidate Deep Dive */}
        <div className="md:col-span-7 bg-zinc-950 rounded-2xl border border-accent/30 shadow-2xl p-4 md:p-6 flex flex-col relative overflow-hidden h-full">
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

          <div className="flex items-start justify-between mb-4 md:mb-6 shrink-0">
            <div className="flex items-center gap-3 md:gap-4">
              <img src={`https://i.pravatar.cc/150?u=11`} className="w-12 h-12 md:w-16 md:h-16 rounded-xl border border-white/20 object-cover shadow-lg" />
              <div>
                <h3 className="text-lg md:text-xl text-white font-medium mb-1">Alex Rivera</h3>
                <div className="text-xs md:text-sm text-zinc-400 mb-2">Senior Site Reliability Engineer at Stripe</div>
                <div className="flex gap-2">
                  <span className="text-[9px] md:text-[10px] bg-white/10 text-white px-2 py-0.5 rounded">San Francisco (Remote)</span>
                  <span className="text-[9px] md:text-[10px] bg-white/10 text-white px-2 py-0.5 rounded">$180k - $220k</span>
                </div>
              </div>
            </div>
            <div className="bg-zinc-900 border border-white/10 rounded-lg p-2 md:p-3 text-center min-w-[60px] md:min-w-[80px]">
              <div className="text-xl md:text-2xl text-accent font-mono font-bold mb-1">96</div>
              <div className="text-[8px] md:text-[9px] text-zinc-500 uppercase tracking-widest">Match Score</div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 md:gap-4 mb-4 md:mb-6 flex-1">
            <div className="bg-zinc-900/50 p-3 rounded-xl border border-white/5 h-full">
              <div className="text-[10px] md:text-xs text-zinc-400 mb-2 flex items-center gap-1.5"><Check className="w-3 h-3 text-accent"/> Core Strengths</div>
              <ul className="text-[9px] md:text-[10px] text-white space-y-1.5 pl-4 list-disc marker:text-zinc-600">
                <li>10+ years Go experience</li>
                <li>Architected Stripe's global ingress</li>
                <li>Deep eBPF knowledge</li>
              </ul>
            </div>
            <div className="bg-zinc-900/50 p-3 rounded-xl border border-white/5 h-full">
              <div className="text-[10px] md:text-xs text-zinc-400 mb-2 flex items-center gap-1.5"><Shield className="w-3 h-3 text-yellow-500"/> Risk Areas</div>
              <ul className="text-[9px] md:text-[10px] text-white space-y-1.5 pl-4 list-disc marker:text-zinc-600">
                <li>Less experience with Rust</li>
                <li>Primarily IC, fewer direct reports</li>
              </ul>
            </div>
          </div>

          <div className="mt-auto flex items-center justify-between pt-3 md:pt-4 border-t border-white/10 shrink-0">
            <div className="text-[9px] md:text-xs text-zinc-500 italic hidden md:block">Meera analyzed 42 data points for this match.</div>
            <button className="bg-white hover:bg-zinc-200 text-black px-4 py-1.5 md:py-2 rounded-lg text-xs font-medium transition-colors w-full md:w-auto">
              Approve to Outreach
            </button>
          </div>
        </div>

      </div>
    </motion.div>
  )
}

function Step4Outreach() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4 }}
      className="w-full max-w-5xl mx-auto h-full flex flex-col justify-center absolute inset-0 md:relative"
    >
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="bg-zinc-900/60 p-5 md:p-6 rounded-2xl border border-accent/30 text-center mb-6 md:mb-8 shadow-[0_0_30px_rgba(85,234,140,0.05)] backdrop-blur-md relative overflow-hidden"
      >
         <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-transparent pointer-events-none" />
         <h4 className="text-accent font-medium mb-2 flex items-center justify-center gap-2 text-sm md:text-base">
            <Sparkles className="w-4 h-4" /> Autopilot Engaged
         </h4>
         <p className="text-xs md:text-sm text-zinc-400 mb-4 max-w-md mx-auto hidden md:block">Sia is now autonomously contacting the top matches across multiple channels.</p>
         <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-1.5 rounded-full text-[10px] md:text-xs font-mono border border-accent/20">
           <div className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" />
           SEQUENCE ACTIVE
         </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
         <motion.div
           initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}
           className="bg-zinc-950 p-4 md:p-5 rounded-2xl border border-white/10 relative shadow-xl"
         >
            <div className="flex items-center justify-between mb-3 md:mb-4 pb-3 border-b border-white/5">
              <div className="flex items-center gap-2">
                <Mail className="w-3 h-3 md:w-4 md:h-4 text-zinc-400" />
                <span className="text-[10px] md:text-xs text-zinc-400 font-medium">Email to Alex Rivera</span>
              </div>
              <span className="text-[9px] md:text-[10px] font-mono text-accent">SENT</span>
            </div>
            <div className="text-xs md:text-sm text-zinc-300 leading-relaxed font-serif">
              "Hi Alex, loved your recent work on K8s ingress at Stripe. We're hitting similar concurrency bottlenecks and looking for a Lead SRE..."
            </div>
         </motion.div>

         <motion.div
           initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 }}
           className="bg-zinc-950 p-4 md:p-5 rounded-2xl border border-white/10 relative shadow-xl"
         >
            <div className="flex items-center justify-between mb-3 md:mb-4 pb-3 border-b border-white/5">
              <div className="flex items-center gap-2">
                <MessageSquare className="w-3 h-3 md:w-4 md:h-4 text-accent" />
                <span className="text-[10px] md:text-xs text-zinc-400 font-medium">WhatsApp to Chen Wei</span>
              </div>
              <span className="text-[9px] md:text-[10px] font-mono text-accent">DELIVERED</span>
            </div>
            <div className="text-xs md:text-sm text-zinc-300 leading-relaxed bg-accent/5 p-3 rounded-lg border border-accent/10">
              "Hey Chen! Sia here from EmployLabs. Are you open to a quick chat about a Lead Platform role? I think your Netflix experience is a perfect fit."
            </div>
         </motion.div>
      </div>
    </motion.div>
  )
}

function Step5Schedule() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4 }}
      className="w-full max-w-5xl mx-auto h-full flex flex-col justify-center absolute inset-0 md:relative"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 items-stretch">
        <div className="col-span-1 bg-zinc-900/40 p-5 md:p-6 rounded-2xl border border-white/10 flex flex-col justify-center items-center text-center">
          <Calendar className="w-8 h-8 md:w-10 md:h-10 text-accent mb-4" />
          <h4 className="text-white text-base md:text-lg font-medium mb-2">Calendars Synced</h4>
          <p className="text-xs md:text-sm text-zinc-400">Meera cross-references your hiring team's availability instantly.</p>
        </div>
        <div className="col-span-1 md:col-span-2 bg-zinc-950 p-5 md:p-6 rounded-2xl border border-white/10 shadow-2xl flex flex-col justify-center">
           <div className="flex items-center justify-between mb-4 md:mb-6 pb-4 border-b border-white/5">
             <div className="text-xs md:text-sm text-white font-medium">Alex Rivera <span className="text-zinc-500">selected a time</span></div>
             <div className="text-[9px] md:text-xs text-accent font-mono bg-accent/10 px-2 py-1 rounded">JUST NOW</div>
           </div>

           <div className="grid grid-cols-5 gap-1.5 md:gap-2">
              {["Mon", "Tue", "Wed", "Thu", "Fri"].map((day, i) => (
                <div key={day} className="flex flex-col gap-1.5 md:gap-2">
                  <div className="text-[9px] md:text-[10px] text-zinc-500 font-mono text-center mb-1">{day}</div>
                  <div className="h-6 md:h-8 rounded bg-zinc-900 border border-white/5" />
                  <div className="h-6 md:h-8 rounded bg-zinc-900 border border-white/5" />
                  <motion.div
                    initial={i === 3 ? { opacity: 0, scale: 0.8 } : { opacity: 1 }}
                    animate={i === 3 ? { opacity: 1, scale: 1 } : { opacity: 1 }}
                    transition={{ delay: 0.5, type: "spring" }}
                    className={`h-6 md:h-8 rounded border ${i === 3 ? 'bg-accent border-accent shadow-[0_0_15px_rgba(85,234,140,0.4)]' : 'bg-zinc-900 border-white/5'}`}
                  />
                  <div className="h-6 md:h-8 rounded bg-zinc-900 border border-white/5" />
                </div>
              ))}
           </div>

           <motion.div
             initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 }}
             className="mt-6 text-center text-xs md:text-sm text-white flex items-center justify-center gap-2"
           >
             <Check className="w-3 h-3 md:w-4 md:h-4 text-accent" /> Interview scheduled for <strong className="text-accent">Thursday, 10:00 AM</strong>
           </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

function Step6Interview() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4 }}
      className="w-full max-w-5xl mx-auto h-full flex flex-col justify-center absolute inset-0 md:relative px-2"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 h-[450px] md:h-full">
        {/* Call Interface */}
        <div className="md:col-span-7 bg-zinc-900/40 border border-white/10 rounded-2xl p-4 md:p-6 flex flex-col shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 via-accent to-emerald-500 opacity-50" />

          <div className="flex justify-between items-center mb-6 shrink-0">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-zinc-800 border border-white/10 flex items-center justify-center">
                  <Mic className="w-4 h-4 text-accent" />
                </div>
                <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-accent rounded-full animate-pulse border-2 border-zinc-900" />
              </div>
              <div>
                <div className="text-white text-sm font-medium">Technical Screen</div>
                <div className="text-xs text-accent">00:14:22</div>
              </div>
            </div>
            <div className="flex items-center gap-1 opacity-50">
               {[...Array(6)].map((_, i) => (
                 <motion.div key={i} animate={{height: [8, Math.random()*24 + 8, 8]}} transition={{repeat: Infinity, duration: 0.5 + Math.random()*0.5}} className="w-1 bg-accent rounded-full shrink-0" />
               ))}
            </div>
          </div>

          <div className="flex-1 overflow-y-auto space-y-4 pr-2">
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="w-[90%] bg-zinc-950 p-3 rounded-xl rounded-tl-sm border border-white/5 text-xs text-zinc-300">
              <span className="text-accent font-medium block text-[10px] mb-1">Naira (AI)</span>
              That's an interesting approach to scaling the datastore. How did you specifically address the write-heavy loads during peak traffic events?
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.5 }} className="w-[90%] ml-auto bg-zinc-800/80 p-3 rounded-xl rounded-tr-sm border border-white/10 text-xs text-white">
              <span className="text-zinc-400 font-medium block text-[10px] mb-1 text-right">Alex Rivera</span>
              We implemented a write-behind caching layer using Redis, and batched writes to Postgres. It smoothed out the spikes significantly...
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 2.5 }} className="w-[90%] bg-accent/10 p-3 rounded-xl rounded-tl-sm border border-accent/20 text-xs text-accent font-mono flex items-center gap-2 mt-4">
              <Zap className="w-3.5 h-3.5 shrink-0" /> Naira is analyzing response for "System Design" depth...
            </motion.div>
          </div>
        </div>

        {/* Live Evaluation Checklist */}
        <div className="md:col-span-5 bg-zinc-950 border border-white/10 rounded-2xl p-4 md:p-6 flex flex-col shadow-2xl overflow-hidden">
           <h4 className="text-[10px] md:text-xs font-mono text-zinc-500 uppercase tracking-widest mb-4 flex items-center gap-2 shrink-0">
             <UserCheck className="w-3.5 h-3.5" /> Live Assessment
           </h4>

           <div className="space-y-3 flex-1 overflow-y-auto pr-2">
             {[
               { criteria: "Communication & Clarity", status: "passed", text: "Clear and concise explanations." },
               { criteria: "Go Concurrency", status: "passed", text: "Understands channels and go-routines deeply." },
               { criteria: "System Design (Scale)", status: "evaluating", text: "Currently probing on DB write scaling..." },
               { criteria: "Cultural Fit", status: "pending", text: "Awaiting behavioral questions." }
             ].map((item, i) => (
               <div key={item.criteria} className={`p-3 rounded-xl border ${item.status === 'passed' ? 'bg-accent/5 border-accent/20' : item.status === 'evaluating' ? 'bg-blue-500/5 border-blue-500/20' : 'bg-zinc-900 border-white/5'}`}>
                 <div className="flex items-center justify-between mb-1.5">
                   <span className="text-[10px] md:text-xs font-medium text-white">{item.criteria}</span>
                   {item.status === 'passed' && <Check className="w-3 h-3 text-accent" />}
                   {item.status === 'evaluating' && <Activity className="w-3 h-3 text-blue-400 animate-pulse" />}
                   {item.status === 'pending' && <div className="w-1.5 h-1.5 rounded-full bg-zinc-600" />}
                 </div>
                 <div className={`text-[9px] md:text-[10px] ${item.status === 'passed' ? 'text-zinc-400' : item.status === 'evaluating' ? 'text-blue-300' : 'text-zinc-600'}`}>
                   {item.text}
                 </div>
               </div>
             ))}
           </div>
        </div>
      </div>
    </motion.div>
  )
}

function Step7Offer() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4 }}
      className="w-full max-w-5xl mx-auto h-full flex flex-col justify-center absolute inset-0 md:relative px-2"
    >
      <div className="grid grid-cols-4 gap-2 md:gap-4 mb-4 md:mb-6 shrink-0">
        <div className="p-3 md:p-4 bg-zinc-900/40 rounded-xl border border-white/10 text-center flex flex-col justify-center"><div className="text-xl md:text-3xl text-zinc-500 font-display mb-1">420</div><div className="text-[8px] md:text-[10px] text-zinc-600 uppercase tracking-wider font-mono">Sourced</div></div>
        <div className="p-3 md:p-4 bg-zinc-900/40 rounded-xl border border-white/10 text-center flex flex-col justify-center"><div className="text-xl md:text-3xl text-zinc-400 font-display mb-1">125</div><div className="text-[8px] md:text-[10px] text-zinc-500 uppercase tracking-wider font-mono">Screened</div></div>
        <div className="p-3 md:p-4 bg-zinc-900/60 rounded-xl border border-white/10 text-center flex flex-col justify-center"><div className="text-xl md:text-3xl text-white font-display mb-1">18</div><div className="text-[8px] md:text-[10px] text-zinc-400 uppercase tracking-wider font-mono">Interviewed</div></div>
        <div className="p-3 md:p-4 bg-accent/10 rounded-xl border border-accent/30 text-center flex flex-col justify-center"><div className="text-xl md:text-3xl text-accent font-display mb-1">3</div><div className="text-[8px] md:text-[10px] text-accent uppercase tracking-wider font-mono font-bold">Finalists</div></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 flex-1 min-h-[300px]">

        {/* Dossier Left */}
        <div className="md:col-span-7 lg:col-span-8 bg-zinc-950 border border-white/10 rounded-2xl p-4 md:p-8 shadow-2xl flex flex-col justify-between h-full">
           <div>
             <div className="flex items-center gap-3 mb-4 md:mb-6 pb-4 md:pb-6 border-b border-white/5">
               <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-accent/20 flex items-center justify-center border border-accent/30">
                 <Award className="w-5 h-5 md:w-6 md:h-6 text-accent" />
               </div>
               <div>
                 <h2 className="text-white text-lg md:text-2xl font-medium">Alex Rivera</h2>
                 <p className="text-[10px] md:text-sm text-zinc-400">Top Finalist \u2014 Lead Staff SRE</p>
               </div>
             </div>

             <div className="space-y-4 md:space-y-6">
               <div>
                 <h4 className="text-[10px] md:text-xs text-zinc-500 font-mono uppercase tracking-widest mb-2 md:mb-3">Interview Summary</h4>
                 <p className="text-xs md:text-sm text-zinc-300 leading-relaxed bg-zinc-900/50 p-3 md:p-4 rounded-xl border border-white/5">
                   Alex demonstrated exceptional depth in Go and Kubernetes. During the system design phase, they architected a robust multi-region failover strategy that aligned perfectly with our requirements. Communication was clear and concise.
                 </p>
               </div>
               <div className="grid grid-cols-2 gap-3 md:gap-4">
                  <div className="bg-zinc-900/50 p-3 md:p-4 rounded-xl border border-white/5">
                    <div className="text-[10px] md:text-xs text-zinc-500 mb-1">Technical Fit</div>
                    <div className="text-base md:text-lg text-white font-medium">98/100</div>
                  </div>
                  <div className="bg-zinc-900/50 p-3 md:p-4 rounded-xl border border-white/5">
                    <div className="text-[10px] md:text-xs text-zinc-500 mb-1">Cultural Fit</div>
                    <div className="text-base md:text-lg text-white font-medium">95/100</div>
                  </div>
               </div>
             </div>
           </div>
        </div>

        {/* Action Right */}
        <div className="md:col-span-5 lg:col-span-4 bg-zinc-900/60 border border-accent/40 rounded-2xl p-5 md:p-6 shadow-[0_0_40px_rgba(85,234,140,0.1)] flex flex-col items-center justify-center text-center relative overflow-hidden backdrop-blur-xl h-full">
           <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent" />
           <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-accent/10 flex items-center justify-center mb-4 md:mb-6">
              <span className="text-2xl md:text-3xl">🎉</span>
           </div>
           <h3 className="text-lg md:text-xl text-white font-medium mb-2">Ready to Hire?</h3>
           <p className="text-[10px] md:text-xs text-zinc-400 mb-6 md:mb-8">Approve the offer and Sia will automatically send the package to Alex.</p>

           <div className="w-full mt-auto">
             <button className="w-full bg-accent hover:bg-white text-zinc-950 transition-colors py-3 rounded-xl font-bold flex items-center justify-center gap-2 text-[10px] md:text-sm shadow-[0_0_20px_rgba(85,234,140,0.3)]">
               Generate Offer <ArrowRight className="w-3 h-3 md:w-4 md:h-4" />
             </button>
             <button className="w-full bg-transparent text-zinc-500 hover:text-white transition-colors py-2 md:py-3 mt-1 md:mt-2 rounded-xl text-[10px] md:text-xs font-medium">
               Review Other Finalists
             </button>
           </div>
        </div>
      </div>
    </motion.div>
  )
}
