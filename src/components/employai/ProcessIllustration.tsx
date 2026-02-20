"use client";

import React, { useState, useEffect } from "react";
import {
  ArrowRight,
  ChevronDown,
  Zap,
  UserSearch,
  DatabaseZap,
  Cpu,
} from "lucide-react";
import {
  TbDatabase,
  TbBrain,
  TbSearch,
  TbMessageCircle,
  TbCalculator,
  TbChartBar,
} from "react-icons/tb";

const ProcessIllustration: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [stepPhase, setStepPhase] = useState(0); // 0: initial, 1: reviewing

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => {
        let nextStep = (prev + 1) % 6;

        // Don't advance if we're in special phases
        if (prev === 2 || prev === 5) return prev;

        // Set phase to 0 for normal steps
        setStepPhase(0);

        return nextStep;
      });
    }, 2000);

    return () => clearInterval(timer);
  }, []); // Handle People Search transitions
  useEffect(() => {
    if (activeStep === 2 && stepPhase === 0) {
      const timer = setTimeout(() => setStepPhase(1), 1000);
      return () => clearTimeout(timer);
    }
  }, [activeStep, stepPhase]);

  useEffect(() => {
    if (activeStep === 2 && stepPhase === 1) {
      const timer = setTimeout(() => {
        setActiveStep(3);
        setStepPhase(0);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [activeStep, stepPhase]);

  // Handle Decision Output transitions
  useEffect(() => {
    if (activeStep === 5 && stepPhase === 0) {
      const timer = setTimeout(() => setStepPhase(1), 1000);
      return () => clearTimeout(timer);
    }
  }, [activeStep, stepPhase]);

  useEffect(() => {
    if (activeStep === 5 && stepPhase === 1) {
      const timer = setTimeout(() => {
        setActiveStep(0);
        setStepPhase(0);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [activeStep, stepPhase]);

  // Separate effect for handling phase transitions
  useEffect(() => {
    if (activeStep === 2 && stepPhase === 1) {
      // After 2 seconds in reviewing phase, move to next step
      const phaseTimer = setTimeout(() => {
        setActiveStep(3);
        setStepPhase(0);
      }, 2000);

      return () => clearTimeout(phaseTimer);
    }
  }, [activeStep, stepPhase]);

  const steps = [
    {
      id: "01",
      title: "Context Ingestion",
      subtitle: "JD & Semantics",
      icon: DatabaseZap,
      color: "red",
      lightColor: "bg-red-500/10 text-red-400",
      dotColor: "bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.6)]",
      ringColor: "ring-red-500/30 shadow-red-500/10",
    },
    {
      id: "02",
      title: "Skill Extraction",
      subtitle: "Pattern Analysis",
      icon: TbBrain,
      color: "yellow",
      lightColor: "bg-yellow-500/10 text-yellow-400",
      dotColor: "bg-yellow-500 shadow-[0_0_8px_rgba(234,179,8,0.6)]",
      ringColor: "ring-yellow-500/30 shadow-yellow-500/10",
    },
    {
      id: "03",
      title: "People Search",
      subtitle: "Talent Discovery",
      icon: UserSearch,
      color: "green",
      lightColor: "bg-green-500/10 text-green-400",
      dotColor: "bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]",
      ringColor: "ring-green-500/30 shadow-green-500/10",
    },
    {
      id: "04",
      title: "Signal Interview™",
      subtitle: "Adaptive Probing",
      icon: TbMessageCircle,
      color: "amber",
      lightColor: "bg-amber-500/10 text-amber-400",
      dotColor: "bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.6)]",
      ringColor: "ring-amber-500/30 shadow-amber-500/10",
    },
    {
      id: "05",
      title: "Scoring Engine",
      subtitle: "Evidence Synth",
      icon: Cpu,
      color: "rose",
      lightColor: "bg-rose-500/10 text-rose-400",
      dotColor: "bg-rose-500 shadow-[0_0_8px_rgba(244,63,94,0.6)]",
      ringColor: "ring-rose-500/30 shadow-rose-500/10",
    },
    {
      id: "06",
      title: "Decision Output",
      subtitle: "Hiring Report",
      icon: TbChartBar,
      color: "green",
      lightColor: "bg-green-500/10 text-green-400",
      dotColor: "bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]",
      ringColor: "ring-green-500/30 shadow-green-500/10",
    },
  ];

  return (
    <section className="py-24 sm:py-32 bg-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-black">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
            backgroundSize: `40px 40px`,
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
        {/* Header */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-6xl font-medium text-white mb-6 tracking-tight">
            System Architecture
          </h2>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            A unified intelligence pipeline that transforms unstructured
            requirements into definitive hiring signals.
          </p>
        </div>

        {/* Premium Enterprise Card Container */}
        {/* Premium Enterprise Card Container */}
        <div className="rounded-3xl p-px bg-gradient-to-b from-zinc-800 to-zinc-900/0 text-left shadow-2xl">
          <div className="rounded-[23px] bg-zinc-950 border border-zinc-900 overflow-hidden relative h-full">
            {/* Top Bar (Browser/System Style) */}
            <div className="h-12 border-b border-zinc-900 bg-zinc-900/50 flex items-center justify-between px-6 gap-2">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-zinc-800" />
                <div className="w-3 h-3 rounded-full bg-zinc-800" />
                <div className="w-3 h-3 rounded-full bg-zinc-800" />
                <div className="ml-4 px-3 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-[10px] text-zinc-500 font-mono flex items-center gap-2 select-none">
                  <span>AI-DRIVEN HIRING PIPELINE</span>
                  <span className="text-zinc-600">|</span>
                  <span>STATUS: ACTIVE</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse ml-2 shadow-[0_0_8px_rgba(16,185,129,0.5)]"></span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="px-2 py-1 rounded bg-zinc-900/50 border border-zinc-800 text-[9px] text-zinc-400 font-mono uppercase tracking-wider">
                  Enterprise
                </div>
                <div className="px-2 py-1 rounded bg-linear-to-r from-zinc-100/10 to-black/10 border border-blue-500/20 text-[9px] text-blue-400 font-mono uppercase tracking-wider">
                  Premium AI
                </div>
                <div className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_6px_rgba(59,130,246,0.6)] animate-pulse"></div>
              </div>
            </div>

            {/* Visualization Area */}
            <div className="p-8 lg:p-16 relative min-h-[400px] flex flex-col justify-center">
              {/* Steps Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 relative z-10">
                {steps.map((step, index) => {
                  const isCompleted = index < activeStep;
                  const isCurrent = index === activeStep;
                  const isPending = index > activeStep;

                  return (
                    <div key={step.id} className="group relative">
                      {/* Card Body */}
                      <div
                        className={`
                          relative flex flex-col items-center p-5 rounded-sm border transition-all duration-500 h-full z-10
                          ${
                            isCurrent
                              ? index === 2 && stepPhase === 1
                                ? "bg-zinc-900/90 border-yellow-500/20 shadow-[0_0_20px_rgba(234,179,8,0.15)]"
                                : index === 5 && stepPhase === 1
                                  ? "bg-zinc-900/90 border-green-500/20 shadow-[0_0_20px_rgba(34,197,94,0.15)]"
                                  : "bg-zinc-900/90 border-blue-500/20 shadow-[0_0_20px_rgba(59,130,246,0.15)]"
                              : isCompleted
                                ? "bg-zinc-900/40 border-zinc-800/80"
                                : "bg-transparent border-transparent opacity-50"
                          }
                        `}
                      >
                        {/* Connection Dots (Desktop) */}
                        {/* Input Dot */}
                        {index > 0 && (
                          <div
                            className={`hidden lg:block absolute top-1/2 -left-[5px] -translate-y-1/2 w-2 h-2 rounded-[1px] border transition-all duration-500 z-20
                             ${isCompleted || isCurrent ? "bg-blue-500 border-blue-400 shadow-[0_0_8px_rgba(59,130,246,0.6)]" : "bg-zinc-900 border-zinc-700"}
                          `}
                          />
                        )}

                        {/* Output Dot */}
                        {index < steps.length - 1 && (
                          <div
                            className={`hidden lg:block absolute top-1/2 -right-[5px] -translate-y-1/2 w-2 h-2 rounded-[1px] border transition-all duration-500 z-20
                             ${isCompleted ? "bg-blue-500 border-blue-400 shadow-[0_0_8px_rgba(59,130,246,0.6)]" : "bg-zinc-900 border-zinc-700"}
                             ${isCurrent ? "bg-blue-500 border-blue-400 animate-pulse" : ""}
                          `}
                          />
                        )}

                        {/* Icon Box */}
                        <div
                          className={`
                          w-12 h-12 rounded-lg flex items-center justify-center mb-5 transition-all duration-500 border border-zinc-700/50
                          bg-gradient-to-br from-zinc-800 to-black text-zinc-200
                        `}
                        >
                          <step.icon className="w-6 h-6" />
                        </div>

                        {/* Step Number */}
                        <div className="w-full flex justify-between items-center mb-3">
                          <span
                            className={`text-[9px] font-mono tracking-wider ${
                              isCurrent
                                ? index === 2 && stepPhase === 1
                                  ? "text-yellow-400"
                                  : index === 5 && stepPhase === 1
                                    ? "text-green-400"
                                    : "text-blue-400"
                                : "text-zinc-600"
                            }`}
                          >
                            0{index + 1}
                          </span>
                          {isCompleted && (
                            <div className="h-px flex-1 bg-zinc-800 mx-2" />
                          )}
                        </div>

                        {/* Text Content */}
                        <div className="text-center w-full">
                          <h3
                            className={`text-sm font-medium mb-1 tracking-tight ${
                              isCurrent
                                ? index === 2 && stepPhase === 1
                                  ? "text-yellow-400"
                                  : index === 5 && stepPhase === 1
                                    ? "text-green-400"
                                    : "text-white"
                                : "text-zinc-500"
                            }`}
                          >
                            {step.title}
                          </h3>
                          <p className="text-[10px] font-mono text-zinc-600 uppercase tracking-wide">
                            {step.subtitle}
                          </p>
                        </div>

                        {/* Human Review Text */}
                        {(index === 2 || index === 5) && (
                          <div className="mt-3 text-center">
                            <p
                              className={`text-[9px] font-mono uppercase tracking-wider ${
                                isCurrent && index === 2 && stepPhase === 1
                                  ? "text-yellow-400"
                                  : isCurrent && index === 5 && stepPhase === 1
                                    ? "text-green-400"
                                    : "text-zinc-500"
                              }`}
                            >
                              reviewing by recruiter
                            </p>
                          </div>
                        )}

                        {/* Corner Accents for Active State */}
                        {isCurrent && (
                          <>
                            <div className="absolute top-0 left-0 w-2 h-2 border-l border-t border-blue-500/80" />
                            <div className="absolute top-0 right-0 w-2 h-2 border-r border-t border-blue-500/80" />
                            <div className="absolute bottom-0 left-0 w-2 h-2 border-l border-b border-blue-500/80" />
                            <div className="absolute bottom-0 right-0 w-2 h-2 border-r border-b border-blue-500/80" />
                          </>
                        )}
                      </div>

                      {/* Connecting Line (Desktop) */}
                      {index < steps.length - 1 && (
                        <div className="hidden lg:block absolute top-1/2 -right-6 w-6 h-px -translate-y-1/2 z-0">
                          {/* Inactive Line Track */}
                          <div className="absolute inset-0 bg-zinc-800/50" />

                          {/* Active Progress Line */}
                          <div
                            className={`absolute inset-0 bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)] transition-all duration-500 origin-left ease-out
                             ${isCompleted ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"}
                             `}
                          />
                        </div>
                      )}

                      {/* Mobile/Tablet Connector (vertical, animated) */}
                      <div className="lg:hidden flex justify-center py-4">
                        {index < steps.length - 1 && (
                          <div className="relative flex items-center justify-center w-full">
                            {/* Track */}
                            <div className="w-0.5 h-12 bg-zinc-800 rounded" />

                            {/* Active progress bar (animated) */}
                            <div
                              className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-0.5 bg-blue-500 rounded origin-bottom transition-all duration-500 ease-out ${
                                isCompleted
                                  ? "h-12 opacity-100 shadow-[0_0_8px_rgba(59,130,246,0.45)]"
                                  : isCurrent
                                    ? "h-6 opacity-90 animate-pulse"
                                    : "h-0 opacity-0"
                              }`}
                            />
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Footer Metadata */}
            <div className="border-t border-zinc-900 bg-zinc-950/50 px-6 py-4 flex flex-col md:flex-row gap-6 md:gap-12 items-start md:items-center">
              <div className="flex items-center gap-4">
                <div className="p-2 rounded bg-zinc-900 border border-zinc-800 text-zinc-400">
                  <Zap
                    className="w-4 h-4"
                    fill="currentColor"
                    fillOpacity={0.2}
                  />
                </div>
                <div>
                  <div className="text-[10px] uppercase text-zinc-500 font-semibold tracking-wider">
                    Powered by
                  </div>
                  <div className="text-xs font-mono text-zinc-300">
                    ML Model
                  </div>
                </div>
              </div>

              <div className="h-8 w-px bg-zinc-800 hidden md:block" />

              <div className="flex-1 w-full">
                <div className="flex justify-between items-end mb-2">
                  <div className="text-[10px] uppercase text-zinc-500 font-semibold tracking-wider">
                    Sequence Progress
                  </div>
                  <div className="text-[10px] font-mono text-blue-400">
                    {Math.round(((activeStep + 1) / steps.length) * 100)}%
                    COMPLETE
                  </div>
                </div>
                <div className="h-1 w-full bg-zinc-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-blue-500 transition-all duration-500 ease-out"
                    style={{
                      width: `${((activeStep + 1) / steps.length) * 100}%`,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessIllustration;
