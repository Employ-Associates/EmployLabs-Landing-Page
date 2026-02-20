import { type FC } from "react";
import { TrendingUp, MapPin, Briefcase, Award } from "lucide-react";

const FirstCard: FC = () => {
  return (
    <div className="select-none w-full md:aspect-[432/400] p-2">
      <div className="h-full py-8 md:px-6 relative overflow-hidden rounded-[10px]">
        <div className="mb-6">
          <h4 className="text-2xl font-medium text-[#ffffff] mb-4">
            Career Trajectories
          </h4>
          <p className="text-sm text-[#d4d4d8] leading-relaxed">
            Maps complete career paths, not just job titles. Analyzes
            progression patterns for optimal talent identification.
          </p>
        </div>

        <div className="select-none max-w-full max-h-full overflow-hidden w-full h-full">
          <div className="w-full h-full relative p-3 rounded-[18px] bg-zinc-950/30 before:content-[''] before:pointer-events-none before:select-none before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:rounded-[18px] before:p-[1px] before:bg-[linear-gradient(to_bottom_right,hsla(0,0%,100%,0.07),transparent)] before:[mask:linear-gradient(#000,#000)_content-box,linear-gradient(#000,#000)] before:[mask-composite:exclude]">
            <div className="h-full py-6 px-5 relative overflow-hidden isolate rounded-[10px] bg-[linear-gradient(134deg,hsla(0,0%,100%,0.08),hsla(0,0%,100%,0.02),hsla(0,0%,100%,0)_55%)]">
              {/* Career Path Visualization */}
              <div className="space-y-4">
                {/* Path Node 1 */}
                <div className="flex items-start gap-3 group">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                    <Briefcase className="w-5 h-5 text-zinc-400" />
                  </div>
                  <div className="flex-1 pt-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium text-white">
                        Senior Engineer
                      </span>
                      <span className="text-xs text-zinc-500">2020-2022</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3 h-3 text-zinc-600" />
                      <span className="text-xs text-zinc-500">Tech Corp</span>
                    </div>
                  </div>
                </div>

                {/* Connector Line */}
                <div className="ml-5 h-6 w-px bg-gradient-to-b from-white/20 to-white/5"></div>

                {/* Path Node 2 */}
                <div className="flex items-start gap-3 group">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-zinc-400" />
                  </div>
                  <div className="flex-1 pt-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium text-white">
                        Lead Engineer
                      </span>
                      <span className="text-xs text-zinc-500">2022-2024</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3 h-3 text-zinc-600" />
                      <span className="text-xs text-zinc-500">
                        Innovation Labs
                      </span>
                    </div>
                  </div>
                </div>

                {/* Connector Line */}
                <div className="ml-5 h-6 w-px bg-gradient-to-b from-white/20 to-white/5"></div>

                {/* Path Node 3 - Current */}
                <div className="flex items-start gap-3 group">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                    <Award className="w-5 h-5 text-blue-400" />
                  </div>
                  <div className="flex-1 pt-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium text-white">
                        Engineering Director
                      </span>
                      <span className="text-xs text-blue-400">Current</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3 h-3 text-zinc-600" />
                      <span className="text-xs text-zinc-500">Scale AI</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Trajectory Metrics */}
              <div className="mt-6 pt-4 border-t border-white/5">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-zinc-500">Progression Rate</span>
                  <span className="text-white font-medium">+156%</span>
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

export default FirstCard;
