import { type FC } from "react";
import { Network, Zap, GitCommit } from "lucide-react";

const SecondCard: FC = () => {
  return (
    <div className="select-none w-full md:aspect-432/400 p-2">
      <div className="h-full py-8 md:px-6 relative overflow-hidden rounded-[10px]">
        <div className="mb-6">
          <h4 className="text-2xl font-medium text-[#ffffff] mb-4">
            Competency Patterns
          </h4>
          <p className="text-sm text-[#d4d4d8] leading-relaxed">
            We analyze how skills interact and cluster together, identifying
            reinforcing patterns and potential failure modes.
          </p>
        </div>

        <div className="select-none max-w-full max-h-full overflow-hidden w-full h-full">
          <div className="w-full h-full relative p-3 rounded-[18px] bg-zinc-950/30 before:content-[''] before:pointer-events-none before:select-none before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:rounded-[18px] before:p-px before:bg-[linear-gradient(to_bottom_right,hsla(0,0%,100%,0.07),transparent)] before:mask-linear-gradient(#000,#000)_content-box,linear-gradient(#000,#000)] before:mask-exclude">
            <div className="h-full py-6 px-5 relative overflow-hidden isolate rounded-[10px] bg-[linear-gradient(134deg,hsla(0,0%,100%,0.08),hsla(0,0%,100%,0.02),hsla(0,0%,100%,0)_55%)]">
              {/* Assessment Breakdown (Visual + Text) */}
              <div className="flex-1 relative z-10 flex flex-col justify-center">
                {/* Visual: Node Cluster Map */}
                <div className="relative w-full h-35 border border-zinc-800/50 bg-zinc-900/30 rounded-lg overflow-hidden mb-3">
                  {/* Grid Background */}
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[16px_16px]"></div>

                  {/* Dynamic Cluster Visualization */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg className="w-full h-full" viewBox="0 0 200 120">
                      {/* Connection Lines */}
                      <line
                        x1="100"
                        y1="60"
                        x2="60"
                        y2="30"
                        stroke="rgba(59,130,246,0.4)"
                        strokeWidth="1"
                      />
                      {/* Center to BottomRight */}
                      <line
                        x1="100"
                        y1="60"
                        x2="140"
                        y2="90"
                        stroke="rgba(59,130,246,0.4)"
                        strokeWidth="1"
                      />
                      {/* Center to TopRight */}
                      <line
                        x1="100"
                        y1="60"
                        x2="150"
                        y2="40"
                        stroke="rgba(59,130,246,0.4)"
                        strokeWidth="1"
                      />
                      {/* TopLeft to BottomLeft (interaction) */}
                      <line
                        x1="60"
                        y1="30"
                        x2="50"
                        y2="80"
                        stroke="rgba(255,255,255,0.1)"
                        strokeWidth="1"
                        strokeDasharray="3,2"
                      />

                      {/* Satellite Nodes */}
                      <circle
                        cx="60"
                        cy="30"
                        r="14"
                        fill="#0f172a"
                        stroke="rgba(59,130,246,0.3)"
                        strokeWidth="1"
                      />
                      <text
                        x="60"
                        y="33"
                        fontSize="8"
                        textAnchor="middle"
                        fill="#94a3b8"
                        fontFamily="monospace"
                      >
                        Sup
                      </text>

                      <circle
                        cx="140"
                        cy="90"
                        r="12"
                        fill="#0f172a"
                        stroke="rgba(59,130,246,0.3)"
                        strokeWidth="1"
                      />
                      <text
                        x="140"
                        y="93"
                        fontSize="8"
                        textAnchor="middle"
                        fill="#94a3b8"
                        fontFamily="monospace"
                      >
                        Beh
                      </text>

                      <circle
                        cx="150"
                        cy="40"
                        r="10"
                        fill="#0f172a"
                        stroke="rgba(59,130,246,0.3)"
                        strokeWidth="1"
                      />

                      <circle
                        cx="50"
                        cy="80"
                        r="10"
                        fill="#0f172a"
                        stroke="rgba(239,68,68,0.3)"
                        strokeWidth="1"
                      />
                      <text
                        x="50"
                        y="83"
                        fontSize="7"
                        textAnchor="middle"
                        fill="#f87171"
                        fontFamily="monospace"
                      >
                        Err
                      </text>

                      {/* Central Node */}
                      <circle
                        cx="100"
                        cy="60"
                        r="20"
                        fill="rgba(59,130,246,0.1)"
                        stroke="#3b82f6"
                        strokeWidth="1.5"
                      />
                      <circle cx="100" cy="60" r="8" fill="#3b82f6" />
                      <text
                        x="100"
                        y="90"
                        fontSize="9"
                        textAnchor="middle"
                        fill="white"
                        fontWeight="bold"
                      >
                        Core
                      </text>
                    </svg>
                  </div>
                </div>

                {/* Key Insights */}
                <div className="grid grid-cols-2 gap-2">
                  <div className="p-2 bg-zinc-900/50 rounded border border-zinc-800">
                    <div className="text-[10px] text-zinc-500 mb-1">
                      Interactions
                    </div>
                    <div className="text-xs text-zinc-200 font-mono">
                      Reinforcing
                    </div>
                  </div>
                  <div className="p-2 bg-zinc-900/50 rounded border border-zinc-800">
                    <div className="text-[10px] text-zinc-500 mb-1">
                      Failure Modes
                    </div>
                    <div className="text-xs text-red-300 font-mono">
                      Identified
                    </div>
                  </div>
                </div>
              </div>

              {/* Judgment Output (Footer) */}
              <div className="mt-4 pt-4 border-t border-zinc-800/50 z-10 flex flex-col gap-2">
                <div className="flex justify-between items-end">
                  <span className="text-xs text-zinc-500 font-medium uppercase tracking-wider">
                    Pattern Strength
                  </span>
                  <span className="text-sm font-medium text-zinc-300">
                    Integrated
                  </span>
                </div>

                {/* Progress Bar Style Indicator */}
                <div className="w-full h-2 bg-zinc-800 rounded-full overflow-hidden flex">
                  <div className="w-1/3 bg-zinc-700"></div>
                  <div className="w-1/3 bg-zinc-600"></div>
                  <div className="w-1/3 bg-zinc-500"></div>
                </div>

                <div className="text-sm text-zinc-400 mt-2">
                  "Skills reinforce each other under real constraints"
                </div>
              </div>

              {/* Background Ambient Glow */}
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-500/8 rounded-full blur-3xl pointer-events-none"></div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-50 bg-linear-to-t from-black to-transparent pointer-events-none"></div>
      </div>
    </div>
  );
};

export default SecondCard;
