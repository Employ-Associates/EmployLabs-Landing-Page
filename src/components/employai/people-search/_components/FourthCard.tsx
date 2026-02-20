import { type FC } from "react";
import { Search, Sparkles, Filter, CheckCircle2 } from "lucide-react";

const FourthCard: FC = () => {
  return (
    <div className="select-none w-full md:aspect-[432/400] p-2">
      <div className="h-full py-8 md:px-6 relative overflow-hidden rounded-[10px]">
        <header className="mb-6">
          <h4 className="text-2xl font-medium text-[#ffffff] mb-4">
            Discovery Engine
          </h4>
          <p className="text-sm text-[#d4d4d8] leading-relaxed">
            Surfaces candidates for why they fit, not just matching profiles.
            Provides comprehensive reasoning and insights.
          </p>
        </header>

        <div className="select-none max-w-full max-h-full overflow-hidden w-full h-full">
          <div className="w-full h-full relative p-3 rounded-[18px] bg-zinc-950/30 before:content-[''] before:pointer-events-none before:select-none before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:rounded-[18px] before:p-[1px] before:bg-[linear-gradient(to_bottom_right,hsla(0,0%,100%,0.07),transparent)] before:[mask:linear-gradient(#000,#000)_content-box,linear-gradient(#000,#000)] before:[mask-composite:exclude]">
            <div className="h-full py-6 px-5 relative overflow-hidden isolate rounded-[10px] bg-[linear-gradient(134deg,hsla(0,0%,100%,0.08),hsla(0,0%,100%,0.02),hsla(0,0%,100%,0)_55%)]">
              {/* Search Query */}
              <div className="mb-4 p-3 rounded-lg bg-white/5 border border-white/10">
                <div className="flex items-center gap-2 mb-2">
                  <Search className="w-4 h-4 text-zinc-400" />
                  <span className="text-xs text-zinc-500">Active Search</span>
                </div>
                <p className="text-sm text-white font-medium">
                  Senior ML Engineer with production experience
                </p>
              </div>

              {/* Discovery Results */}
              <div className="space-y-3">
                {/* Top Match */}
                <div className="p-3 rounded-lg bg-blue-500/5 border border-blue-500/20">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                        <span className="text-xs font-medium text-blue-300">
                          1
                        </span>
                      </div>
                      <div>
                        <div className="text-sm font-medium text-white">
                          Sarah Chen
                        </div>
                        <div className="text-xs text-zinc-500">
                          ML Engineer @ TechCo
                        </div>
                      </div>
                    </div>
                    <CheckCircle2 className="w-4 h-4 text-blue-400" />
                  </div>
                  <div className="flex items-center gap-2 text-xs text-zinc-400">
                    <Sparkles className="w-3 h-3" />
                    <span>8 years production ML · 12 deployed models</span>
                  </div>
                </div>

                {/* Second Match */}
                <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                        <span className="text-xs font-medium text-zinc-300">
                          2
                        </span>
                      </div>
                      <div>
                        <div className="text-sm font-medium text-white">
                          Alex Kumar
                        </div>
                        <div className="text-xs text-zinc-500">
                          Senior Engineer @ AI Labs
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-zinc-400">
                    <Sparkles className="w-3 h-3" />
                    <span>6 years ML · Scale specialist</span>
                  </div>
                </div>

                {/* Third Match */}
                <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                        <span className="text-xs font-medium text-zinc-300">
                          3
                        </span>
                      </div>
                      <div>
                        <div className="text-sm font-medium text-white">
                          Maria Garcia
                        </div>
                        <div className="text-xs text-zinc-500">
                          Lead ML @ DataCorp
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-zinc-400">
                    <Sparkles className="w-3 h-3" />
                    <span>7 years · Team leadership</span>
                  </div>
                </div>
              </div>

              {/* Filter Status */}
              <div className="mt-4 pt-4 border-t border-white/5">
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <Filter className="w-3 h-3 text-zinc-500" />
                    <span className="text-zinc-500">Filtered Results</span>
                  </div>
                  <span className="text-white font-medium">247 → 3</span>
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

export default FourthCard;
