import { type FC } from "react";
import { TrendingUp, BarChart2, Globe } from "lucide-react";

const FourthCard: FC = () => {
  return (
    <div className="select-none w-full md:aspect-432/400 p-2">
      <div className="h-full py-8 md:px-6 relative overflow-hidden rounded-[10px]">
        <div className="mb-6">
          <h4 className="text-2xl font-medium text-[#ffffff] mb-4">
            Global Benchmarking
          </h4>
          <p className="text-sm text-[#d4d4d8] leading-relaxed">
            Compare candidate signal against a global dataset to contextualize
            strengths and gaps across regions and industries.
          </p>
        </div>

        <div className="select-none max-w-full max-h-full overflow-hidden w-full h-full">
          <div className="w-full h-full relative p-3 rounded-[18px] bg-zinc-950/30 before:content-[''] before:pointer-events-none before:select-none before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:rounded-[18px] before:p-px before:bg-[linear-gradient(to_bottom_right,hsla(0,0%,100%,0.07),transparent)] before:mask-linear-gradient(#000,#000)_content-box,linear-gradient(#000,#000)] before:mask-exclude">
            <div className="h-full py-6 px-5 relative overflow-hidden isolate rounded-[10px] bg-[linear-gradient(134deg,hsla(0,0%,100%,0.08),hsla(0,0%,100%,0.02),hsla(0,0%,100%,0)_55%)]">
              {/* Circular Percentile Visualization */}
              <div className="flex-1 relative z-10 flex flex-col items-center justify-center">
                {/* Main Percentile Circle */}
                <div className="relative">
                  {/* Outer Ring - Context */}
                  <div className="w-48 h-48 rounded-full border-8 border-zinc-800/40 flex items-center justify-center relative">
                    {/* Inner Ring - Performance */}
                    <div className="w-36 h-36 rounded-full border-8 border-blue-500/30 flex items-center justify-center">
                      {/* Core Metric */}
                      <div className="text-center">
                        <div className="text-5xl font-bold text-white mb-1">
                          87<span className="text-2xl text-zinc-400">th</span>
                        </div>
                        <div className="text-xs text-zinc-400 font-mono">
                          PERCENTILE
                        </div>
                      </div>
                    </div>

                    {/* Progress Indicator */}
                    <div className="absolute inset-0">
                      <svg
                        className="w-full h-full -rotate-90"
                        viewBox="0 0 100 100"
                      >
                        <circle
                          cx="50"
                          cy="50"
                          r="46"
                          fill="none"
                          stroke="rgba(59, 130, 246, 0.3)"
                          strokeWidth="8"
                          strokeDasharray={`${87 * 2.89} 289`}
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Context Label */}
                <div className="mt-6 text-center">
                  <div className="text-sm text-zinc-300 mb-1">
                    Top 13% of global talent pool
                  </div>
                  <div className="text-xs text-zinc-500">
                    vs. 12.5M profiles
                  </div>
                </div>

                {/* Dimension Breakdown */}
                <div className="mt-6 grid grid-cols-3 gap-3 w-full max-w-sm">
                  <div className="text-center p-3 bg-zinc-900/40 rounded border border-zinc-800/50">
                    <div className="text-lg font-bold text-blue-400 mb-1">
                      92
                    </div>
                    <div className="text-xs text-zinc-500">Technical</div>
                  </div>
                  <div className="text-center p-3 bg-zinc-900/40 rounded border border-zinc-800/50">
                    <div className="text-lg font-bold text-purple-400 mb-1">
                      78
                    </div>
                    <div className="text-xs text-zinc-500">Comm</div>
                  </div>
                  <div className="text-center p-3 bg-zinc-900/40 rounded border border-zinc-800/50">
                    <div className="text-lg font-bold text-blue-400 mb-1">
                      89
                    </div>
                    <div className="text-xs text-zinc-500">Problem</div>
                  </div>
                </div>
              </div>

              {/* Benchmark Summary */}
              <div className="mt-6 pt-4 border-t border-zinc-800/50 z-10">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs uppercase text-zinc-500 font-semibold tracking-wider">
                    Benchmark Status
                  </span>
                  <span className="px-3 py-1 rounded text-xs font-mono bg-zinc-800/50 text-zinc-300 border border-zinc-700/50">
                    STRONG
                  </span>
                </div>
                <div className="flex items-center gap-2 text-xs text-zinc-400">
                  <BarChart2 className="w-4 h-4 text-zinc-500" />
                  <span>Compared against 12.5M global profiles</span>
                </div>
              </div>

              {/* Background Ambient Glow */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-500/8 rounded-full blur-3xl pointer-events-none"></div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-50 bg-linear-to-t from-black to-transparent pointer-events-none"></div>
      </div>
    </div>
  );
};

export default FourthCard;
