import { type FC } from "react";
import { Layers, CheckCircle2, ArrowRight } from "lucide-react";

const FirstCard: FC = () => {
  return (
    <div className="select-none w-full md:aspect-432/400 p-2">
      <div className="h-full py-8 md:px-6 relative overflow-hidden rounded-[10px]">
        <div className="mb-6">
          <h4 className="text-2xl font-medium text-[#ffffff] mb-4">
            Capability Depth
          </h4>
          <p className="text-sm text-[#d4d4d8] leading-relaxed">
            We evaluate candidates across three layers of understanding:
            foundational principles, applied execution, and advanced reasoning.
          </p>
        </div>

        <div className="select-none max-w-full max-h-full overflow-hidden w-full h-full">
          <div className="w-full h-full relative p-3 rounded-[18px] bg-zinc-950/30 before:content-[''] before:pointer-events-none before:select-none before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:rounded-[18px] before:p-px before:bg-[linear-gradient(to_bottom_right,hsla(0,0%,100%,0.07),transparent)] before:mask-linear-gradient(#000,#000)_content-box,linear-gradient(#000,#000)] before:mask-exclude">
            <div className="h-full py-6 px-5 relative overflow-hidden isolate rounded-[10px] bg-[linear-gradient(134deg,hsla(0,0%,100%,0.08),hsla(0,0%,100%,0.02),hsla(0,0%,100%,0)_55%)]">
              {/* Assessment Breakdown (Visual + Text) */}
              <div className="flex-1 relative z-10 flex flex-col gap-4">
                {/* Visual: Stacked Layers of Understanding */}
                <div className="flex flex-col gap-3">
                  {/* Layer 1: Foundational */}
                  <div className="group relative">
                    <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-zinc-700"></div>
                    <div className="ml-4 p-4 bg-zinc-900/40 rounded-lg border border-zinc-800/60">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-zinc-200">
                          Foundational
                        </span>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-slate-500"></div>
                          <span className="text-xs text-zinc-500 font-mono">
                            L1_PASS
                          </span>
                        </div>
                      </div>
                      <div className="text-sm text-zinc-400 leading-relaxed">
                        Core principles and mental models
                      </div>
                    </div>
                  </div>

                  {/* Layer 2: Applied */}
                  <div className="group relative ml-2">
                    <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-zinc-600"></div>
                    <div className="ml-4 p-4 bg-zinc-900/60 rounded-lg border border-zinc-700/60">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-zinc-100">
                          Applied Execution
                        </span>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-slate-400"></div>
                          <span className="text-xs text-zinc-400 font-mono">
                            L2_VERIFIED
                          </span>
                        </div>
                      </div>
                      <div className="text-sm text-zinc-300 leading-relaxed">
                        Real-world implementation and constraints
                      </div>
                    </div>
                  </div>

                  {/* Layer 3: Advanced */}
                  <div className="group relative ml-4">
                    <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-blue-500/60"></div>
                    <div className="ml-4 p-4 bg-zinc-800/40 rounded-lg border border-zinc-600/60">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-semibold text-white">
                          Advanced Reasoning
                        </span>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                          <span className="text-xs text-zinc-300 font-mono">
                            L3_SIGNAL
                          </span>
                        </div>
                      </div>
                      <div className="text-sm text-zinc-200 leading-relaxed">
                        Strategic trade-offs and complex decisions
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Judgment Output (Footer) */}
              <div className="mt-6 pt-4 border-t border-zinc-800/50 z-10">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs uppercase text-zinc-500 font-semibold tracking-wider">
                    Assessment Output
                  </span>
                  <span className="px-3 py-1 rounded text-xs font-mono bg-zinc-800/50 text-zinc-300 border border-zinc-700/50">
                    DEEP
                  </span>
                </div>
                <div className="flex items-center gap-2 text-sm text-zinc-300 bg-zinc-900/50 p-3 rounded border border-zinc-800/50">
                  <CheckCircle2 className="w-4 h-4 text-zinc-400" />
                  <span className="font-mono">
                    "Reasoning exceeds standard implementation"
                  </span>
                </div>
              </div>

              {/* Background Ambient Glow */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/8 rounded-full blur-3xl pointer-events-none"></div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-50 bg-linear-to-t from-black to-transparent pointer-events-none"></div>
      </div>
    </div>
  );
};

export default FirstCard;
