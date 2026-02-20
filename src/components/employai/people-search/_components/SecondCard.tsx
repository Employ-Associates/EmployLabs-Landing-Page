import { type FC } from "react";
import { Brain, Zap, Code, Database } from "lucide-react";

const SecondCard: FC = () => {
  return (
    <div className="select-none w-full md:aspect-[432/400] p-2">
      <div className="h-full py-8 md:px-6 relative overflow-hidden rounded-[10px]">
        <div className="mb-6">
          <h4 className="text-2xl font-medium text-[#ffffff] mb-4">
            Skill Combinations
          </h4>
          <p className="text-sm text-[#d4d4d8] leading-relaxed">
            Identifies synergistic skill sets, not isolated competencies.
            Analyzes how abilities combine for exceptional performance.
          </p>
        </div>

        <div className="select-none max-w-full max-h-full overflow-hidden w-full h-full">
          <div className="w-full h-full relative p-3 rounded-[18px] bg-zinc-950/30 before:content-[''] before:pointer-events-none before:select-none before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:rounded-[18px] before:p-[1px] before:bg-[linear-gradient(to_bottom_right,hsla(0,0%,100%,0.07),transparent)] before:[mask:linear-gradient(#000,#000)_content-box,linear-gradient(#000,#000)] before:[mask-composite:exclude]">
            <div className="h-full py-6 px-5 relative overflow-hidden isolate rounded-[10px] bg-[linear-gradient(134deg,hsla(0,0%,100%,0.08),hsla(0,0%,100%,0.02),hsla(0,0%,100%,0)_55%)]">
              {/* Skill Cluster Visualization */}
              <div className="space-y-4">
                {/* Core Skill Set */}
                <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                  <div className="flex items-center gap-2 mb-3">
                    <Brain className="w-4 h-4 text-purple-400" />
                    <span className="text-sm font-medium text-white">
                      Core Skills
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 text-xs rounded bg-purple-500/10 border border-purple-500/20 text-purple-300">
                      Machine Learning
                    </span>
                    <span className="px-2 py-1 text-xs rounded bg-purple-500/10 border border-purple-500/20 text-purple-300">
                      Python
                    </span>
                    <span className="px-2 py-1 text-xs rounded bg-purple-500/10 border border-purple-500/20 text-purple-300">
                      Deep Learning
                    </span>
                  </div>
                </div>

                {/* Synergistic Skills */}
                <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                  <div className="flex items-center gap-2 mb-3">
                    <Zap className="w-4 h-4 text-blue-400" />
                    <span className="text-sm font-medium text-white">
                      Synergy Multipliers
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 text-xs rounded bg-blue-500/10 border border-blue-500/20 text-blue-300">
                      Cloud Architecture
                    </span>
                    <span className="px-2 py-1 text-xs rounded bg-blue-500/10 border border-blue-500/20 text-blue-300">
                      MLOps
                    </span>
                  </div>
                </div>

                {/* Supporting Skills */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                    <Code className="w-4 h-4 text-zinc-400 mb-2" />
                    <div className="text-xs text-zinc-500 mb-1">
                      Engineering
                    </div>
                    <div className="text-sm font-medium text-white">
                      4 skills
                    </div>
                  </div>
                  <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                    <Database className="w-4 h-4 text-zinc-400 mb-2" />
                    <div className="text-xs text-zinc-500 mb-1">
                      Data Systems
                    </div>
                    <div className="text-sm font-medium text-white">
                      3 skills
                    </div>
                  </div>
                </div>
              </div>

              {/* Synergy Score */}
              <div className="mt-6 pt-4 border-t border-white/5">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-zinc-500">Combination Score</span>
                  <span className="text-white font-medium">94/100</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-50 bg-linear-to-t from-black to-transparent pointer-events-none"></div>
      </div>
    </div>
  );
};

export default SecondCard;
