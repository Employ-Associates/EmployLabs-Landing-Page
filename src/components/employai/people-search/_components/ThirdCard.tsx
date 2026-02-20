import { type FC } from "react";
import { Target, TrendingUp, Users, Star } from "lucide-react";

const ThirdCard: FC = () => {
  return (
    <div className="select-none w-full md:aspect-[432/400] p-2">
      <div className="h-full py-8 md:px-6 relative overflow-hidden rounded-[10px]">
        <div className="mb-6">
          <h4 className="text-2xl font-medium text-[#ffffff] mb-4">
            High-Performer Patterns
          </h4>
          <p className="text-sm text-[#d4d4d8] leading-relaxed">
            Learns from top talent to identify exceptional potential. Analyzes
            behavioral patterns and success indicators.
          </p>
        </div>

        <div className="select-none max-w-full max-h-full overflow-hidden w-full h-full">
          <div className="w-full h-full relative p-3 rounded-[18px] bg-zinc-950/30 before:content-[''] before:pointer-events-none before:select-none before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:rounded-[18px] before:p-[1px] before:bg-[linear-gradient(to_bottom_right,hsla(0,0%,100%,0.07),transparent)] before:[mask:linear-gradient(#000,#000)_content-box,linear-gradient(#000,#000)] before:[mask-composite:exclude]">
            <div className="h-full py-6 px-5 relative overflow-hidden isolate rounded-[10px] bg-[linear-gradient(134deg,hsla(0,0%,100%,0.08),hsla(0,0%,100%,0.02),hsla(0,0%,100%,0)_55%)]">
              {/* Performance Indicators */}
              <div className="space-y-3">
                {/* Top Indicator */}
                <div className="p-4 rounded-lg bg-green-500/5 border border-green-500/20">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <Star className="w-4 h-4 text-green-400" />
                      <span className="text-sm font-medium text-white">
                        Impact Velocity
                      </span>
                    </div>
                    <span className="text-xs text-green-400">92%</span>
                  </div>
                  <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-green-400 rounded-full"
                      style={{ width: "92%" }}
                    ></div>
                  </div>
                </div>

                {/* Second Indicator */}
                <div className="p-4 rounded-lg bg-blue-500/5 border border-blue-500/20">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-blue-400" />
                      <span className="text-sm font-medium text-white">
                        Growth Trajectory
                      </span>
                    </div>
                    <span className="text-xs text-blue-400">88%</span>
                  </div>
                  <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-blue-400 rounded-full"
                      style={{ width: "88%" }}
                    ></div>
                  </div>
                </div>

                {/* Third Indicator */}
                <div className="p-4 rounded-lg bg-purple-500/5 border border-purple-500/20">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <Target className="w-4 h-4 text-purple-400" />
                      <span className="text-sm font-medium text-white">
                        Problem Solving
                      </span>
                    </div>
                    <span className="text-xs text-purple-400">85%</span>
                  </div>
                  <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-purple-400 rounded-full"
                      style={{ width: "85%" }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Pattern Match Score */}
              <div className="mt-6 pt-4 border-t border-white/5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-zinc-500" />
                    <span className="text-xs text-zinc-500">
                      Pattern Confidence
                    </span>
                  </div>
                  <span className="text-sm font-medium text-white">High</span>
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

export default ThirdCard;
