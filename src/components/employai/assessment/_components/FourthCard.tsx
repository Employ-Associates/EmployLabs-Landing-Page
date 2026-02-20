import { type FC } from "react";
import {
  Database,
  Shield,
  CheckCircle,
  AlertTriangle,
  Activity,
} from "lucide-react";

const FourthCard: FC = () => {
  return (
    <div className="select-none w-full md:aspect-[432/400] p-2">
      <div className="h-full py-8 md:px-6 relative overflow-hidden rounded-[10px]">
        <div className="mb-6">
          <h4 className="text-2xl font-medium text-[#ffffff] mb-4">
            Signal Confidence
          </h4>
          <p className="text-sm text-[#d4d4d8] leading-relaxed">
            Eliminate false positives. We provide a reliability score for every
            assessment, triangulating evidence from multiple data sources.
          </p>
        </div>

        <div className="select-none max-w-full max-h-full overflow-hidden w-full h-full">
          <div className="w-full h-full relative p-3 rounded-[18px] bg-zinc-950/30 before:content-[''] before:pointer-events-none before:select-none before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:rounded-[18px] before:p-px before:bg-[linear-gradient(to_bottom_right,hsla(0,0%,100%,0.07),transparent)] before:mask-linear-gradient(#000,#000)_content-box,linear-gradient(#000,#000)] before:mask-exclude">
            <div className="h-full py-6 px-5 relative overflow-hidden isolate rounded-[10px] bg-[linear-gradient(134deg,hsla(0,0%,100%,0.08),hsla(0,0%,100%,0.02),hsla(0,0%,100%,0)_55%)]">
              {/* Confidence Spectrum - Different Layout */}
              <div className="space-y-4">
                {/* Confidence Meter */}
                <div className="relative">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-zinc-400">
                      Signal Strength
                    </span>
                    <span className="text-lg font-bold text-white">95%</span>
                  </div>
                  <div className="w-full h-4 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 rounded-full relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-full animate-pulse"></div>
                    </div>
                  </div>
                  <div className="flex justify-between text-xs text-zinc-500 mt-1">
                    <span>Low</span>
                    <span>Medium</span>
                    <span>High</span>
                  </div>
                </div>

                {/* Validation Matrix */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 rounded-lg bg-emerald-500/5 border border-emerald-500/20">
                    <div className="flex items-center gap-2 mb-2">
                      <Database className="w-4 h-4 text-emerald-400" />
                      <span className="text-xs text-zinc-400">Data Points</span>
                    </div>
                    <div className="text-xl font-bold text-white">1,247</div>
                    <div className="text-xs text-emerald-400">Validated</div>
                  </div>

                  <div className="p-3 rounded-lg bg-blue-500/5 border border-blue-500/20">
                    <div className="flex items-center gap-2 mb-2">
                      <Shield className="w-4 h-4 text-blue-400" />
                      <span className="text-xs text-zinc-400">Sources</span>
                    </div>
                    <div className="text-xl font-bold text-white">12</div>
                    <div className="text-xs text-blue-400">
                      Cross-referenced
                    </div>
                  </div>
                </div>

                {/* Confidence Breakdown */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between p-2 rounded bg-white/5">
                    <span className="text-sm text-white">
                      Technical Assessment
                    </span>
                    <div className="flex items-center gap-2">
                      <div className="w-12 h-2 bg-white/10 rounded-full">
                        <div
                          className="h-full bg-emerald-500 rounded-full"
                          style={{ width: "98%" }}
                        ></div>
                      </div>
                      <span className="text-sm font-medium text-emerald-400">
                        98%
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-2 rounded bg-white/5">
                    <span className="text-sm text-white">
                      Behavioral Patterns
                    </span>
                    <div className="flex items-center gap-2">
                      <div className="w-12 h-2 bg-white/10 rounded-full">
                        <div
                          className="h-full bg-blue-500 rounded-full"
                          style={{ width: "95%" }}
                        ></div>
                      </div>
                      <span className="text-sm font-medium text-blue-400">
                        95%
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-2 rounded bg-white/5">
                    <span className="text-sm text-white">
                      Reference Validation
                    </span>
                    <div className="flex items-center gap-2">
                      <div className="w-12 h-2 bg-white/10 rounded-full">
                        <div
                          className="h-full bg-purple-500 rounded-full"
                          style={{ width: "92%" }}
                        ></div>
                      </div>
                      <span className="text-sm font-medium text-purple-400">
                        92%
                      </span>
                    </div>
                  </div>
                </div>

                {/* Confidence Status */}
                <div className="flex items-center justify-center pt-2">
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                    <Activity className="w-4 h-4 text-emerald-400" />
                    <span className="text-sm font-medium text-emerald-400">
                      High Confidence Signal
                    </span>
                  </div>
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
