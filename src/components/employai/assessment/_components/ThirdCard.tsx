import { type FC } from "react";
import { TrendingUp, ArrowUpRight } from "lucide-react";

const ThirdCard: FC = () => {
  // Sparkline data (simulated)
  const data = [10, 15, 25, 30, 45, 50, 65, 80, 85, 95];
  const max = Math.max(...data);
  const points = data
    .map((d, i) => {
      const x = (i / (data.length - 1)) * 100;
      const y = 100 - (d / max) * 100;
      return `${x},${y}`;
    })
    .join(" ");

  return (
    <div className="select-none w-full md:aspect-432/400 p-2">
      <div className="h-full py-8 md:px-6 relative overflow-hidden rounded-[10px]">
        <div className="mb-6">
          <h4 className="text-2xl font-medium text-[#ffffff] mb-4">
            Growth Trajectory
          </h4>
          <p className="text-sm text-[#d4d4d8] leading-relaxed">
            We track learning velocity and capability progression over time,
            identifying compounding growth patterns.
          </p>
        </div>

        <div className="select-none max-w-full max-h-full overflow-hidden w-full h-full">
          <div className="w-full h-full relative p-3 rounded-[18px] bg-zinc-950/30 before:content-[''] before:pointer-events-none before:select-none before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:rounded-[18px] before:p-px before:bg-[linear-gradient(to_bottom_right,hsla(0,0%,100%,0.07),transparent)] before:mask-linear-gradient(#000,#000)_content-box,linear-gradient(#000,#000)] before:mask-exclude">
            <div className="h-full py-6 px-5 relative overflow-hidden isolate rounded-[10px] bg-[linear-gradient(134deg,hsla(0,0%,100%,0.08),hsla(0,0%,100%,0.02),hsla(0,0%,100%,0)_55%)]">
              {/* Assessment Breakdown (Visual + Text) */}
              <div className="flex-1 relative z-10 flex flex-col justify-center">
                {/* Visual: Velocity Chart */}
                <div className="relative w-full h-30 bg-zinc-900/30 rounded-lg border border-zinc-800/50 p-2 overflow-hidden mb-3">
                  <div className="absolute inset-0 flex items-center justify-center p-3">
                    <svg
                      className="w-full h-full overflow-visible"
                      preserveAspectRatio="none"
                      viewBox="0 0 100 100"
                    >
                      <defs>
                        <linearGradient
                          id="growthGradient"
                          x1="0"
                          y1="0"
                          x2="0"
                          y2="1"
                        >
                          <stop offset="0%" stopColor="rgba(16,185,129,0.3)" />
                          <stop offset="100%" stopColor="rgba(16,185,129,0)" />
                        </linearGradient>
                      </defs>

                      {/* Area under curve */}
                      <path
                        d={`M0,100 ${points
                          .split(" ")
                          .map((p) => `L${p}`)
                          .join(" ")} L100,100 Z`}
                        fill="url(#growthGradient)"
                      />

                      {/* Line */}
                      <polyline
                        points={points}
                        fill="none"
                        stroke="#10b981"
                        strokeWidth="2"
                        strokeLinecap="round"
                        vectorEffect="non-scaling-stroke"
                      />

                      {/* Data Points */}
                      <circle
                        cx="100"
                        cy="5"
                        r="3"
                        fill="#10b981"
                        stroke="white"
                        strokeWidth="1"
                      />
                    </svg>
                  </div>

                  {/* Text Overlay (Metric) */}
                  <div className="absolute top-2 left-3">
                    <span className="text-[10px] text-zinc-500 block">
                      Velocity
                    </span>
                    <span className="text-sm font-mono font-bold text-white">
                      +3.2x
                    </span>
                  </div>
                </div>

                {/* Key Metrics */}
                <div className="grid grid-cols-2 gap-2">
                  <div className="p-2 bg-zinc-900/50 rounded border border-zinc-800">
                    <div className="text-[10px] text-zinc-500 mb-1">
                      Learning Response
                    </div>
                    <div className="text-xs text-zinc-200 font-mono">
                      Immediate
                    </div>
                  </div>
                  <div className="p-2 bg-zinc-900/50 rounded border border-zinc-800">
                    <div className="text-[10px] text-zinc-500 mb-1">
                      Complexity Uptake
                    </div>
                    <div className="text-xs text-emerald-300 font-mono">
                      Accelerating
                    </div>
                  </div>
                </div>
              </div>

              {/* Judgment Output (Footer) */}
              <div className="mt-4 pt-4 border-t border-zinc-800/50 z-10">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] text-zinc-500 font-medium uppercase">
                    Trajectory Signal
                  </span>
                  <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                    <TrendingUp className="w-3 h-3 text-emerald-400" />
                    <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider">
                      Compounding
                    </span>
                  </div>
                </div>

                <div className="text-[10px] text-zinc-400 mt-1 italic">
                  "Capability increases with problem complexity"
                </div>
              </div>

              {/* Background Ambient Glow */}
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none"></div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-50 bg-linear-to-t from-black to-transparent pointer-events-none"></div>
      </div>
    </div>
  );
};

export default ThirdCard;
