import { type FC } from "react";
import { MessageCircle, ArrowRight, CheckCircle2 } from "lucide-react";

const FirstCard: FC = () => {
  return (
    <div className="select-none w-full md:aspect-432/400 p-2">
      <div className="h-full py-8 md:px-6 relative overflow-hidden rounded-[10px]">
        <div className="mb-6">
          <h4 className="text-2xl font-medium text-[#ffffff] mb-4">
            Probes Reasoning
          </h4>
          <p className="text-sm text-[#d4d4d8] leading-relaxed">
            Adaptive, subject-matter guided probes that reveal candidate
            reasoning and depth through intelligent follow-up questions.
          </p>
        </div>

        <div className="select-none max-w-full max-h-full overflow-hidden w-full h-full">
          <div className="w-full h-full relative p-3 rounded-[18px] bg-zinc-950/30 before:content-[''] before:pointer-events-none before:select-none before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:rounded-[18px] before:p-px before:bg-[linear-gradient(to_bottom_right,hsla(0,0%,100%,0.07),transparent)] before:mask-linear-gradient(#000,#000)_content-box,linear-gradient(#000,#000)] before:mask-exclude">
            <div className="h-full py-6 px-5 relative overflow-hidden isolate rounded-[10px] bg-[linear-gradient(134deg,hsla(0,0%,100%,0.08),hsla(0,0%,100%,0.02),hsla(0,0%,100%,0)_55%)]">
              {/* Probe Chain Visualization */}
              <div className="flex-1 relative z-10 flex flex-col gap-4">
                {/* Initial Question */}
                <div className="group relative">
                  <div className="p-4 bg-zinc-900/40 rounded-lg border border-zinc-800/60">
                    <div className="flex items-start gap-3">
                      <div className="shrink-0 w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                        <MessageCircle className="w-4 h-4 text-zinc-400" />
                      </div>
                      <div className="flex-1">
                        <div className="text-xs text-zinc-500 mb-1">
                          Q1 · Initial
                        </div>
                        <div className="text-sm text-zinc-200">
                          "Describe your system design approach"
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Probe Connector */}
                <div className="flex items-center gap-2 ml-6">
                  <div className="w-px h-6 bg-linear-to-b from-blue-500/40 to-transparent"></div>
                  <ArrowRight className="w-3 h-3 text-blue-500/60 -ml-px" />
                  <span className="text-xs text-zinc-600 font-mono">
                    PROBE_DEPTH_1
                  </span>
                </div>

                {/* Adaptive Follow-up */}
                <div className="group relative ml-4">
                  <div className="p-4 bg-zinc-900/60 rounded-lg border border-zinc-700/60">
                    <div className="flex items-start gap-3">
                      <div className="shrink-0 w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                        <MessageCircle className="w-4 h-4 text-blue-400" />
                      </div>
                      <div className="flex-1">
                        <div className="text-xs text-zinc-400 mb-1">
                          Q2 · Adaptive
                        </div>
                        <div className="text-sm text-zinc-100">
                          "How would you handle scale constraints?"
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Deep Probe Connector */}
                <div className="flex items-center gap-2 ml-10">
                  <div className="w-0.5 h-8 bg-linear-to-b from-blue-500/70 via-blue-500/50 to-transparent"></div>
                  <ArrowRight className="w-4 h-4 text-blue-400 -ml-px" />
                  <span className="text-xs text-zinc-400 font-mono font-semibold">
                    PROBE_DEPTH_2
                  </span>
                </div>

                {/* Deep Reasoning Probe */}
                <div className="group relative ml-8">
                  <div className="p-5 bg-zinc-800/50 rounded-lg border-2 border-blue-500/30">
                    <div className="flex items-start gap-3">
                      <div className="shrink-0 w-9 h-9 rounded-lg bg-blue-500/20 border-2 border-blue-500/40 flex items-center justify-center">
                        <MessageCircle className="w-5 h-5 text-blue-300" />
                      </div>
                      <div className="flex-1">
                        <div className="text-xs text-blue-300 mb-1 font-medium">
                          Q3 · Deep Reasoning
                        </div>
                        <div className="text-sm text-white font-medium">
                          "What trade-offs would you make?"
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Reasoning Signal Output */}
              <div className="mt-6 pt-4 border-t border-zinc-800/50 z-10">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs uppercase text-zinc-500 font-semibold tracking-wider">
                    Reasoning Signal
                  </span>
                  <span className="px-3 py-1 rounded text-xs font-mono bg-zinc-800/50 text-zinc-300 border border-zinc-700/50">
                    STRONG
                  </span>
                </div>
                <div className="flex items-center gap-2 text-sm text-zinc-300 bg-zinc-900/50 p-3 rounded border border-zinc-800/50">
                  <CheckCircle2 className="w-4 h-4 text-zinc-400" />
                  <span className="font-mono text-xs">
                    "Shows advanced reasoning through trade-offs"
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
