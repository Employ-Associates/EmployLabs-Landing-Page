import React from "react";
import { Plus } from "lucide-react";

export const WhyEmploySection: React.FC = () => {
  const problems = [
    {
      title: "Keyword search misses capable candidates",
      description:
        "Traditional search relies on resume keywords, ignoring career trajectory and potential.",
      accentColor: "#6366f1",
      icon: "search",
    },
    {
      title: "Interviews surface opinions, not signal",
      description:
        "Manual interviews are subjective, unstructured, and often measure likability over competence.",
      accentColor: "#8b5cf6",
      icon: "chat",
    },
    {
      title: "Recruiters are forced to filter, not understand",
      description:
        "Volume forces recruiters to scan for flags rather than evaluate for depth and fit.",
      accentColor: "#3b82f6",
      icon: "filter",
    },
  ];

  return (
    <section className="py-12 sm:py-40 isolate">
      {/* Header Section */}
      <div className="w-full mx-auto px-6 md:px-12 lg:px-16 max-w-360">
        <div className="grid grid-cols-4 md:grid-cols-12 gap-6 mb-12">
          <div className="col-start-1 col-end-5 md:col-end-13 lg:col-end-7">
            <h2 className="text-balance text-[40px] sm:text-[56px] leading-11 sm:leading-[1.1] font-medium tracking-[-0.015em] sm:tracking-[-0.0325em] text-white">
              Why Employ Exists
            </h2>
          </div>
          <div className="col-start-1 col-end-5 md:col-end-9 lg:col-start-7 lg:col-end-13 self-end">
            <p className="text-balance text-right text-[17px] leading-[24.5px] font-medium text-zinc-200">
              Hiring Has Outgrown Human-Only Systems
            </p>
            <p className="text-balance text-[15px] text-right leading-5.5 font-normal text-zinc-300 mt-3">
              Hiring today breaks not because of lack of candidates — but
              because humans cannot search, correlate, and evaluate talent at
              the depth modern roles demand.
            </p>
          </div>
        </div>
      </div>

      {/* Cards Section */}
      <div className="w-full mx-auto px-6 md:px-12 lg:px-16 max-w-360">
        {/* Mobile/Tablet: Carousel Layout */}
        <div className="lg:hidden">
          <div className="overflow-x-auto overflow-y-hidden snap-x snap-mandatory overscroll-x-contain snap-always scrollbar-none">
            <div className="grid grid-flow-col gap-6 min-w-fit relative">
              {/* Left Padding */}
              <div
                aria-hidden="true"
                className="block"
                style={{
                  minWidth:
                    "max(calc((100vw - 1440px) / 2 - 8px), calc(1.5rem - 8px))",
                }}
              ></div>

              {/* Problem Cards */}
              {problems.map((problem, index) => (
                <div key={index} className="snap-center">
                  <button className="text-left bg-[#0f0f0f] relative isolate flex flex-col justify-end overflow-hidden py-6 px-4 sm:py-8 sm:px-5 md:py-10 md:px-6 h-90 sm:h-100 md:h-110 lg:h-125 w-[85vw] sm:w-80 md:w-90 rounded-lg hover:brightness-110 transition-[filter] duration-200 ease-out">
                    {/* Professional Illustration */}
                    <div className="absolute top-8 sm:top-10 md:top-12 left-0 right-0 px-3 sm:px-4 md:px-6 flex items-center justify-center">
                      <div className="w-full max-w-70 py-8 sm:py-12">
                        {/* Card 1 - Search with Missed Candidate */}
                        {problem.icon === "search" && (
                          <div className="space-y-3">
                            {/* Search Bar */}
                            <div className="bg-zinc-900/50 border border-zinc-800/50 rounded-md px-3 py-2.5 flex items-center gap-2">
                              <svg
                                className="w-4 h-4 text-zinc-600"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                />
                              </svg>
                              <div className="flex-1 h-2 bg-zinc-800 rounded"></div>
                            </div>
                            {/* Keywords */}
                            <div className="flex gap-1.5 px-1">
                              <span className="text-[10px] px-2 py-1 rounded border border-zinc-800/50 text-zinc-600">
                                React
                              </span>
                              <span className="text-[10px] px-2 py-1 rounded border border-zinc-800/50 text-zinc-600">
                                5+ years
                              </span>
                            </div>
                            {/* Missed Candidate */}
                            <div className="mt-4 bg-red-950/20 border border-red-900/30 rounded-md px-3 py-2.5 flex items-center gap-2.5">
                              <div className="w-7 h-7 rounded-full bg-zinc-800/50"></div>
                              <div className="flex-1">
                                <div className="h-1.5 w-16 bg-zinc-800/50 rounded mb-1.5"></div>
                                <div className="h-1 w-12 bg-zinc-800/30 rounded"></div>
                              </div>
                              <span className="text-[9px] font-mono text-red-400/70">
                                MISSED
                              </span>
                            </div>
                          </div>
                        )}

                        {/* Card 2 - Subjective Interview */}
                        {problem.icon === "chat" && (
                          <div className="space-y-2.5">
                            {/* Interview Comment 1 */}
                            <div className="bg-zinc-900/50 border border-zinc-800/50 rounded-md px-3 py-2.5 flex items-start gap-2.5">
                              <div className="w-6 h-6 rounded-full bg-zinc-800/50 shrink-0 mt-0.5"></div>
                              <div className="flex-1 space-y-1.5">
                                <div className="h-1.5 w-20 bg-zinc-800 rounded"></div>
                                <div className="h-1.5 w-28 bg-zinc-800/60 rounded"></div>
                              </div>
                              <span className="text-sm">👍</span>
                            </div>
                            {/* Interview Comment 2 */}
                            <div className="bg-zinc-900/50 border border-zinc-800/50 rounded-md px-3 py-2.5 flex items-start gap-2.5">
                              <div className="w-6 h-6 rounded-full bg-zinc-800/50 shrink-0 mt-0.5"></div>
                              <div className="flex-1 space-y-1.5">
                                <div className="h-1.5 w-24 bg-zinc-800 rounded"></div>
                                <div className="h-1.5 w-20 bg-zinc-800/60 rounded"></div>
                              </div>
                              <span className="text-sm opacity-40">👎</span>
                            </div>
                            {/* Subjective Badge */}
                            <div className="mt-3 bg-amber-950/20 border border-amber-900/30 rounded-md px-3 py-2 text-center">
                              <span className="text-[9px] font-mono text-amber-400/70">
                                SUBJECTIVE
                              </span>
                            </div>
                          </div>
                        )}

                        {/* Card 3 - Filter Quick Scan */}
                        {problem.icon === "filter" && (
                          <div className="space-y-3">
                            {/* Stacked Candidates */}
                            <div className="relative">
                              <div className="absolute inset-0 bg-zinc-900/30 border border-zinc-800/30 rounded-md blur-[1px] translate-y-1"></div>
                              <div className="relative bg-zinc-900/50 border border-zinc-800/50 rounded-md px-3 py-3">
                                <div className="flex items-center gap-2.5 mb-2">
                                  <div className="w-7 h-7 rounded-full bg-zinc-800/50"></div>
                                  <div className="flex-1 h-2 bg-zinc-800 rounded"></div>
                                  <svg
                                    className="w-3.5 h-3.5 text-zinc-700"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12"
                                    />
                                  </svg>
                                </div>
                                <div className="flex gap-1 pl-9">
                                  <div className="h-1 w-10 bg-zinc-800/60 rounded"></div>
                                  <div className="h-1 w-12 bg-zinc-800/60 rounded"></div>
                                </div>
                              </div>
                            </div>
                            {/* Quick Scan Badge */}
                            <div className="bg-zinc-900/50 border border-zinc-800/50 rounded-md px-3 py-2 flex items-center justify-between">
                              <span className="text-[9px] font-mono text-zinc-600">
                                QUICK SCAN
                              </span>
                              <div className="flex gap-1">
                                <div className="w-1 h-1 rounded-full bg-red-500/60"></div>
                                <div className="w-1 h-1 rounded-full bg-zinc-700"></div>
                                <div className="w-1 h-1 rounded-full bg-zinc-700"></div>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Content at Bottom */}
                    <div className="flex justify-between items-start w-full mt-4 relative z-10">
                      <div className="title max-w-full flex flex-col">
                        <span className="inline-block text-white text-balance align-top text-lg sm:text-xl font-medium">
                          {problem.title}
                        </span>
                        <p className="mt-2 sm:mt-3 text-[13px] sm:text-[14px] text-zinc-400 leading-5 sm:leading-5.5 text-balance">
                          {problem.description}
                        </p>
                      </div>
                    </div>

                    {/* Plus Button - No Rounded Border */}
                    <div className="absolute bottom-6 right-5 sm:bottom-8 sm:right-6 md:bottom-10 md:right-8">
                      <div
                        className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center transition-opacity hover:opacity-70"
                        style={{ backgroundColor: problem.accentColor }}
                      >
                        <Plus
                          className="w-4 h-4 sm:w-5 sm:h-5 text-white"
                          strokeWidth={2}
                        />
                      </div>
                    </div>
                  </button>
                </div>
              ))}

              {/* Right Padding */}
              <div
                aria-hidden="true"
                className="block"
                style={{
                  minWidth:
                    "max(calc((100vw - 1440px) / 2 - 8px), calc(1.5rem - 8px))",
                }}
              ></div>
            </div>
          </div>
        </div>

        {/* Desktop: Grid Layout */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-3 gap-8">
            {problems.map((problem, index) => (
              <button
                key={index}
                className="text-left bg-[#0b0b0b] relative isolate flex flex-col justify-end overflow-hidden py-10 px-6 h-125 rounded-lg hover:brightness-110 transition-[filter] duration-200 ease-out"
              >
                {/* Professional Illustration */}
                <div className="absolute top-12 left-0 right-0 px-6 flex items-center justify-center">
                  <div className="w-full max-w-70 py-12">
                    {/* Card 1 - Search with Missed Candidate */}
                    {problem.icon === "search" && (
                      <div className="space-y-3">
                        {/* Search Bar */}
                        <div className="bg-zinc-900/50 border border-zinc-800/50 rounded-md px-3 py-2.5 flex items-center gap-2">
                          <svg
                            className="w-4 h-4 text-zinc-600"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            />
                          </svg>
                          <div className="flex-1 h-2 bg-zinc-800 rounded"></div>
                        </div>
                        {/* Keywords */}
                        <div className="flex gap-1.5 px-1">
                          <span className="text-[10px] px-2 py-1 rounded border border-zinc-800/50 text-zinc-600">
                            React
                          </span>
                          <span className="text-[10px] px-2 py-1 rounded border border-zinc-800/50 text-zinc-600">
                            5+ years
                          </span>
                        </div>
                        {/* Missed Candidate */}
                        <div className="mt-4 bg-red-950/20 border border-red-900/30 rounded-md px-3 py-2.5 flex items-center gap-2.5">
                          <div className="w-7 h-7 rounded-full bg-zinc-800/50"></div>
                          <div className="flex-1">
                            <div className="h-1.5 w-16 bg-zinc-800/50 rounded mb-1.5"></div>
                            <div className="h-1 w-12 bg-zinc-800/30 rounded"></div>
                          </div>
                          <span className="text-[9px] font-mono text-red-400/70">
                            MISSED
                          </span>
                        </div>
                      </div>
                    )}

                    {/* Card 2 - Subjective Interview */}
                    {problem.icon === "chat" && (
                      <div className="space-y-2.5">
                        {/* Interview Comment 1 */}
                        <div className="bg-zinc-900/50 border border-zinc-800/50 rounded-md px-3 py-2.5 flex items-start gap-2.5">
                          <div className="w-6 h-6 rounded-full bg-zinc-800/50 shrink-0 mt-0.5"></div>
                          <div className="flex-1 space-y-1.5">
                            <div className="h-1.5 w-20 bg-zinc-800 rounded"></div>
                            <div className="h-1.5 w-28 bg-zinc-800/60 rounded"></div>
                          </div>
                          <span className="text-sm">👍</span>
                        </div>
                        {/* Interview Comment 2 */}
                        <div className="bg-zinc-900/50 border border-zinc-800/50 rounded-md px-3 py-2.5 flex items-start gap-2.5">
                          <div className="w-6 h-6 rounded-full bg-zinc-800/50 shrink-0 mt-0.5"></div>
                          <div className="flex-1 space-y-1.5">
                            <div className="h-1.5 w-24 bg-zinc-800 rounded"></div>
                            <div className="h-1.5 w-20 bg-zinc-800/60 rounded"></div>
                          </div>
                          <span className="text-sm opacity-40">👎</span>
                        </div>
                        {/* Subjective Badge */}
                        <div className="mt-3 bg-amber-950/20 border border-amber-900/30 rounded-md px-3 py-2 text-center">
                          <span className="text-[9px] font-mono text-amber-400/70">
                            SUBJECTIVE
                          </span>
                        </div>
                      </div>
                    )}

                    {/* Card 3 - Filter Quick Scan */}
                    {problem.icon === "filter" && (
                      <div className="space-y-3">
                        {/* Stacked Candidates */}
                        <div className="relative">
                          <div className="absolute inset-0 bg-zinc-900/30 border border-zinc-800/30 rounded-md blur-[1px] translate-y-1"></div>
                          <div className="relative bg-zinc-900/50 border border-zinc-800/50 rounded-md px-3 py-3">
                            <div className="flex items-center gap-2.5 mb-2">
                              <div className="w-7 h-7 rounded-full bg-zinc-800/50"></div>
                              <div className="flex-1 h-2 bg-zinc-800 rounded"></div>
                              <svg
                                className="w-3.5 h-3.5 text-zinc-700"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12"
                                />
                              </svg>
                            </div>
                            <div className="flex gap-1 pl-9">
                              <div className="h-1 w-10 bg-zinc-800/60 rounded"></div>
                              <div className="h-1 w-12 bg-zinc-800/60 rounded"></div>
                            </div>
                          </div>
                        </div>
                        {/* Quick Scan Badge */}
                        <div className="bg-zinc-900/50 border border-zinc-800/50 rounded-md px-3 py-2 flex items-center justify-between">
                          <span className="text-[9px] font-mono text-zinc-600">
                            QUICK SCAN
                          </span>
                          <div className="flex gap-1">
                            <div className="w-1 h-1 rounded-full bg-red-500/60"></div>
                            <div className="w-1 h-1 rounded-full bg-zinc-700"></div>
                            <div className="w-1 h-1 rounded-full bg-zinc-700"></div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Content at Bottom */}
                <div className="flex justify-between items-start w-full mt-4 relative z-10">
                  <div className="title max-w-full flex flex-col">
                    <span className="inline-block text-white text-balance align-top text-lg sm:text-xl font-medium">
                      {problem.title}
                    </span>
                    <p className="mt-2 sm:mt-3 text-[13px] sm:text-[14px] text-zinc-400 leading-5 sm:leading-5.5 text-balance">
                      {problem.description}
                    </p>
                  </div>
                </div>

                {/* Plus Button - No Rounded Border */}
                <div className="absolute bottom-10 right-8">
                  <div
                    className="w-10 h-10 flex items-center justify-center transition-opacity hover:opacity-70"
                    style={{ backgroundColor: problem.accentColor }}
                  >
                    <Plus className="w-5 h-5 text-white" strokeWidth={2} />
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Statement */}
      <div className="w-full mx-auto px-6 md:px-12 lg:px-16 max-w-360 mt-16">
        <div className="text-center">
          <p className="text-[20px] sm:text-[24px] leading-7 sm:leading-8 font-medium text-white">
            Employ was built for a different reality.
          </p>
        </div>
      </div>
    </section>
  );
};
