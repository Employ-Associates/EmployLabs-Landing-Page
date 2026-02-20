import React from "react";
import { UserCheck, Brain, Users, Target } from "lucide-react";

export const HumanOwnershipSection: React.FC = () => {
  return (
    <section
      id="human-ownership"
      className="py-32 bg-black text-white scroll-mt-20 relative overflow-hidden"
    >
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-zinc-900/50 border border-zinc-800 rounded-full">
            <UserCheck className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-zinc-400 font-medium">
              Human-AI Partnership
            </span>
          </div>

          <h2 className="mb-6 text-4xl md:text-5xl lg:text-6xl font-medium leading-tight text-white max-w-4xl mx-auto">
            Specialist Recruiters. <br />
            Real Accountability.
          </h2>

          <p className="text-lg md:text-xl leading-relaxed text-zinc-400 max-w-3xl mx-auto">
            Employ is not a platform. Every role is owned by specialist
            recruiters who interpret AI insights correctly, contextualize
            candidates for your environment, and engage with judgment.
          </p>
        </div>

        {/* Enterprise Features Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Card 1 - AI Power */}
          <div className="group relative">
            <div className="absolute inset-0 bg-linear-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative p-8 bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 hover:border-zinc-700 transition-colors duration-300 h-full">
              <div className="w-12 h-12 mb-6 bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                <Brain className="w-6 h-6 text-blue-400" />
              </div>
              <h4 className="font-semibold text-xl mb-3 text-white">
                AI Gives Depth & Scale
              </h4>
              <p className="text-zinc-400 leading-relaxed">
                Processing thousands of candidates with consistent, deep
                evaluation across technical depth, communication, and
                problem-solving.
              </p>
            </div>
          </div>

          {/* Card 2 - Human Judgment */}
          <div className="group relative">
            <div className="absolute inset-0 bg-linear-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative p-8 bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 hover:border-zinc-700 transition-colors duration-300 h-full">
              <div className="w-12 h-12 mb-6 bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
                <Users className="w-6 h-6 text-purple-400" />
              </div>
              <h4 className="font-semibold text-xl mb-3 text-white">
                Humans Own Outcomes
              </h4>
              <p className="text-zinc-400 leading-relaxed">
                Accountability does not scale with software. Every hire is
                backed by a specialist recruiter who understands context and
                owns results.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-20 grid grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">
              100%
            </div>
            <div className="text-sm text-zinc-500">Human-Owned Roles</div>
          </div>
          <div className="text-center border-x border-zinc-800">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">
              24/7
            </div>
            <div className="text-sm text-zinc-500">Recruiter Support</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">
              10+
            </div>
            <div className="text-sm text-zinc-500">
              Years Average Experience
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
