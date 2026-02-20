import { type FC } from "react";
import { Layers, Database, CheckSquare } from "lucide-react";

const ThirdCard: FC = () => {
  return (
    <div className="select-none w-full md:aspect-432/400 p-2">
      <div className="h-full py-8 md:px-6 relative overflow-hidden rounded-[10px]">
        <div className="mb-6">
          <h4 className="text-2xl font-medium text-[#ffffff] mb-4">
            Structured Signal Extraction
          </h4>
          <p className="text-sm text-[#d4d4d8] leading-relaxed">
            Convert interview intelligence into comparable signal across
            dimensions, ready for benchmarking and evaluation.
          </p>
        </div>

        <div className="select-none max-w-full max-h-full overflow-hidden w-full h-full">
          <div className="w-full h-full relative p-3 rounded-[18px] bg-zinc-950/30 before:content-[''] before:pointer-events-none before:select-none before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:rounded-[18px] before:p-px before:bg-[linear-gradient(to_bottom_right,hsla(0,0%,100%,0.07),transparent)] before:mask-linear-gradient(#000,#000)_content-box,linear-gradient(#000,#000)] before:mask-exclude">
            <div className="h-full py-6 px-5 relative overflow-hidden isolate rounded-[10px] bg-[linear-gradient(134deg,hsla(0,0%,100%,0.08),hsla(0,0%,100%,0.02),hsla(0,0%,100%,0)_55%)]">
              {/* Horizontal Signal Extraction */}
              <div className="flex-1 relative z-10 flex flex-col justify-center gap-6">
                {/* Dimension 1 */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Layers className="w-3.5 h-3.5 text-slate-400" />
                      <span className="text-sm font-medium text-zinc-200">
                        Technical Depth
                      </span>
                    </div>
                    <span className="text-xs text-blue-400 font-mono">4/5</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    {Array.from({ length: 5 }, (_, i) => (
                      <div
                        key={i}
                        className={`flex-1 h-2 rounded ${
                          i < 4 ? "bg-blue-400/70" : "bg-zinc-800/60"
                        }`}
                      ></div>
                    ))}
                  </div>
                </div>

                {/* Dimension 2 */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Layers className="w-3.5 h-3.5 text-slate-400" />
                      <span className="text-sm font-medium text-zinc-200">
                        Communication
                      </span>
                    </div>
                    <span className="text-xs text-purple-400 font-mono">
                      3/5
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    {Array.from({ length: 5 }, (_, i) => (
                      <div
                        key={i}
                        className={`flex-1 h-2 rounded ${
                          i < 3 ? "bg-purple-400/70" : "bg-zinc-800/60"
                        }`}
                      ></div>
                    ))}
                  </div>
                </div>

                {/* Dimension 3 */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Layers className="w-3.5 h-3.5 text-slate-400" />
                      <span className="text-sm font-medium text-zinc-200">
                        Problem Solving
                      </span>
                    </div>
                    <span className="text-xs text-blue-400 font-mono">4/5</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    {Array.from({ length: 5 }, (_, i) => (
                      <div
                        key={i}
                        className={`flex-1 h-2 rounded ${
                          i < 4 ? "bg-blue-400/70" : "bg-zinc-800/60"
                        }`}
                      ></div>
                    ))}
                  </div>
                </div>

                {/* Extraction Divider */}
                <div className="flex items-center justify-center gap-3 py-3">
                  <div className="flex-1 h-px bg-linear-to-r from-transparent via-zinc-700 to-transparent"></div>
                  <div className="flex items-center gap-2 px-3 py-1.5 bg-zinc-900/60 rounded border border-zinc-800/60">
                    <Database className="w-3.5 h-3.5 text-blue-400/80" />
                    <span className="text-xs text-zinc-400 font-mono">
                      Signal extracted & ready
                    </span>
                  </div>
                  <div className="flex-1 h-px bg-linear-to-r from-transparent via-zinc-700 to-transparent"></div>
                </div>

                {/* Status Badge */}
                <div className="flex items-center justify-center">
                  <div className="px-6 py-2 rounded-full bg-zinc-800/50 border border-zinc-700/50">
                    <div className="flex items-center gap-2">
                      <CheckSquare className="w-4 h-4 text-zinc-400" />
                      <span className="text-sm font-mono text-zinc-300">
                        COMPARABLE
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Background Ambient Glow */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-500/6 rounded-full blur-3xl pointer-events-none"></div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-50 bg-linear-to-t from-black to-transparent pointer-events-none"></div>
      </div>
    </div>
  );
};

export default ThirdCard;
