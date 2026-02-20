import React from "react";

export const InfrastructureVisualization: React.FC = () => {
  return (
    <div className="relative w-full h-[400px] flex items-center justify-center perspective-[1200px] overflow-visible">
      {/* Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-600/20 blur-[100px] rounded-full"></div>

      {/* Floating Stack Container */}
      <div className="relative transform-style-3d rotate-x-[60deg] rotate-z-[-45deg] animate-float">
        {/* Layer 1: Recruitment Engine (Bottom) */}
        <div className="absolute top-[160px] left-0 w-64 h-64 bg-zinc-900/90 border border-zinc-700 rounded-3xl shadow-xl flex items-center justify-center transform translate-z-0 transition-all hover:translate-z-10 group">
          <div className="text-center transform -rotate-z-[45deg] -rotate-x-[-60deg]">
            <div className="text-xs text-zinc-400 font-mono mb-2">
              Recruitment Engine
            </div>
            <div className="grid grid-cols-3 gap-2 opacity-50">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="w-4 h-4 rounded bg-zinc-600"></div>
              ))}
            </div>
          </div>
          {/* Connecting lines */}
          <div className="absolute -top-10 left-1/2 h-10 w-px bg-gradient-to-t from-zinc-700 to-transparent border-l border-dashed border-zinc-600"></div>
        </div>

        {/* Layer 2: Data Engine (Middle) */}
        <div className="absolute top-[80px] left-0 w-64 h-64 bg-zinc-900/90 border border-zinc-700 rounded-3xl shadow-2xl flex items-center justify-center transform translate-z-[40px] transition-all group">
          <div className="text-center transform -rotate-z-[45deg] -rotate-x-[-60deg]">
            <div className="text-xs text-blue-400 font-mono mb-2">
              Data Engine
            </div>
            <div className="flex gap-2 justify-center">
              <div className="px-2 py-1 bg-blue-900/30 border border-blue-500/30 rounded text-[8px] text-blue-200">
                Skills
              </div>
              <div className="px-2 py-1 bg-blue-900/30 border border-blue-500/30 rounded text-[8px] text-blue-200">
                Traits
              </div>
            </div>
          </div>
          <div className="absolute -top-10 left-1/2 h-10 w-px bg-gradient-to-t from-zinc-700 to-blue-500/50"></div>
        </div>

        {/* Layer 3: Superintelligence (Top) */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-black/80 border border-blue-500/50 rounded-3xl shadow-[0_0_50px_rgba(59,130,246,0.2)] flex items-center justify-center transform translate-z-[80px] transition-all hover:translate-z-[100px]">
          <div className="text-center transform -rotate-z-[45deg] -rotate-x-[-60deg]">
            {/* Glowing Brain Representation */}
            <div className="w-16 h-16 mx-auto bg-gradient-to-br from-blue-400 to-purple-600 rounded-full blur-md opacity-50 absolute inset-0 m-auto"></div>
            <div className="relative z-10">
              <div className="text-sm font-bold text-white mb-1">
                Superintelligence
              </div>
              <div className="text-[10px] text-blue-200">AGI Hiring Agent</div>
            </div>
          </div>
        </div>
      </div>

      {/* Labels */}
      <div className="absolute top-0 right-0 text-right space-y-24 pt-10 hidden md:block">
        <div>
          <div className="text-white font-medium">Superintelligence</div>
          <div className="text-xs text-zinc-500">Decision Layer</div>
        </div>
        <div>
          <div className="text-white font-medium">Data Engine</div>
          <div className="text-xs text-zinc-500">Processing Layer</div>
        </div>
        <div>
          <div className="text-white font-medium">Recruitment Engine</div>
          <div className="text-xs text-zinc-500">Execution Layer</div>
        </div>
      </div>
    </div>
  );
};
