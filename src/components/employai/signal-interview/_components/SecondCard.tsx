import { type FC } from "react";
import { AlertTriangle, CheckCircle2, XCircle } from "lucide-react";

const SecondCard: FC = () => {
  return (
    <div className="select-none w-full md:aspect-432/400 p-2">
      <div className="h-full py-8 md:px-6 relative overflow-hidden rounded-[10px]">
        <div className="mb-6">
          <h4 className="text-2xl font-medium text-[#ffffff] mb-4">
            Detects Gaps
          </h4>
          <p className="text-sm text-[#d4d4d8] leading-relaxed">
            Cross-checked, evidence-backed detection that surfaces
            inconsistencies and knowledge gaps in candidate responses.
          </p>
        </div>

        <div className="select-none max-w-full max-h-full overflow-hidden w-full h-full">
          <div className="w-full h-full relative p-3 rounded-[18px] bg-zinc-950/30 before:content-[''] before:pointer-events-none before:select-none before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:rounded-[18px] before:p-px before:bg-[linear-gradient(to_bottom_right,hsla(0,0%,100%,0.07),transparent)] before:mask-linear-gradient(#000,#000)_content-box,linear-gradient(#000,#000)] before:mask-exclude">
            <div className="h-full py-6 px-5 relative overflow-hidden isolate rounded-[10px] bg-[linear-gradient(134deg,hsla(0,0%,100%,0.08),hsla(0,0%,100%,0.02),hsla(0,0%,100%,0)_55%)]">
              {/* Split-Screen Gap Detection */}
              <div className="flex-1 relative z-10 grid grid-cols-2 gap-4">
                {/* Left: Verified Evidence */}
                <div className="space-y-3">
                  <div className="text-xs uppercase text-zinc-500 font-semibold tracking-wider mb-3 flex items-center gap-2">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>Verified</span>
                  </div>

                  <div className="p-3 bg-zinc-900/40 rounded border border-zinc-800/50">
                    <div className="text-sm font-medium text-zinc-200 mb-1">
                      Technical Fundamentals
                    </div>
                    <div className="text-xs text-zinc-500">
                      Core concepts validated
                    </div>
                  </div>

                  <div className="p-3 bg-zinc-900/40 rounded border border-zinc-800/50">
                    <div className="text-sm font-medium text-zinc-200 mb-1">
                      Implementation Details
                    </div>
                    <div className="text-xs text-zinc-500">
                      Aligns with experience
                    </div>
                  </div>

                  <div className="p-3 bg-zinc-900/40 rounded border border-zinc-800/50">
                    <div className="text-sm font-medium text-zinc-200 mb-1">
                      Problem Solving
                    </div>
                    <div className="text-xs text-zinc-500">
                      Consistent methodology
                    </div>
                  </div>
                </div>

                {/* Right: Detected Gaps */}
                <div className="space-y-3">
                  <div className="text-xs uppercase text-red-400 font-semibold tracking-wider mb-3 flex items-center gap-2">
                    <XCircle className="w-3 h-3" />
                    <span>Gaps Detected</span>
                  </div>

                  <div className="p-4 bg-red-950/20 rounded border-2 border-red-900/40">
                    <div className="flex items-start gap-3 mb-3">
                      <AlertTriangle className="w-5 h-5 text-red-400 mt-0.5" />
                      <div className="flex-1">
                        <div className="text-sm font-medium text-red-200 mb-1">
                          Scale Considerations
                        </div>
                        <div className="text-xs text-red-300/70 leading-relaxed">
                          Missing evidence for distributed systems claims
                        </div>
                      </div>
                    </div>
                    <div className="pt-2 border-t border-red-900/30">
                      <div className="text-xs text-red-400 font-mono">
                        CROSS_VALIDATED
                      </div>
                    </div>
                  </div>

                  <div className="p-2 bg-zinc-900/30 rounded border border-zinc-800/40 text-center">
                    <div className="text-xs text-zinc-500">
                      1 gap requires follow-up
                    </div>
                  </div>
                </div>
              </div>

              {/* Gap Analysis Summary */}
              <div className="mt-6 pt-4 border-t border-zinc-800/50 z-10">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs uppercase text-zinc-500 font-semibold tracking-wider">
                    Detection Summary
                  </span>
                  <span className="px-3 py-1 rounded text-xs font-mono bg-zinc-800/50 text-zinc-300 border border-zinc-700/50">
                    1 GAP
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-2 text-xs">
                  <div className="text-center p-2 bg-zinc-900/50 rounded border border-zinc-800/50">
                    <div className="text-white font-medium">2</div>
                    <div className="text-zinc-500">Verified</div>
                  </div>
                  <div className="text-center p-2 bg-zinc-900/50 rounded border border-zinc-800/50">
                    <div className="text-red-400 font-medium">1</div>
                    <div className="text-zinc-500">Gap</div>
                  </div>
                  <div className="text-center p-2 bg-zinc-900/50 rounded border border-zinc-800/50">
                    <div className="text-white font-medium">High</div>
                    <div className="text-zinc-500">Confidence</div>
                  </div>
                </div>
              </div>

              {/* Background Ambient Glow */}
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-red-500/6 rounded-full blur-3xl pointer-events-none"></div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-50 bg-linear-to-t from-black to-transparent pointer-events-none"></div>
      </div>
    </div>
  );
};

export default SecondCard;
