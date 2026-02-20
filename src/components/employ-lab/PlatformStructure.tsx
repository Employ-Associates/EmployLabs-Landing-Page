import React from "react";
import ScrollReveal from "../ScrollReveal";
import { Button } from "../Button";

export const PlatformStructure: React.FC = () => {
  return (
    <section className="relative py-32">
      <div className="max-w-6xl px-6 mx-auto">
        <div className="mb-8 text-center">
          <ScrollReveal
            baseOpacity={0}
            enableBlur={true}
            baseRotation={2}
            blurStrength={6}
            containerClassName=""
            textClassName="text-4xl md:text-5xl lg:text-7xl font-medium text-white tracking-tight"
          >
            Intelligence Stack
          </ScrollReveal>
        </div>

        <div className="mb-20 text-center">
          <ScrollReveal
            baseOpacity={0.1}
            enableBlur={true}
            baseRotation={2}
            blurStrength={6}
            containerClassName=""
            textClassName="text-lg! text-zinc-300 max-w-4xl mx-auto font-light! leading-relaxed"
          >
            Employ Labs is building the three core infrastructure layers that
            will power AI-native workforce intelligence.
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Employ Section - Operational Layer - Takes 2 columns */}
          <div className="relative bg-black/50 border border-zinc-800 rounded-lg p-8 hover:border-zinc-600 transition-colors lg:col-span-2">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1531252582519-2d7e6795be96?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3DD')] bg-cover bg-center opacity-80 rounded-xl"></div>
            <div className="absolute inset-0 bg-linear-to-bl from-black/50 via-black/95 to-black rounded-xl"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                {/* <div className="w-3 h-3 rounded-full bg-blue-400"></div> */}
                <h3 className="text-3xl font-semibold text-white">EmployAI</h3>
                <span className="text-xs px-2 py-1 bg-white text-black rounded-full">
                  Operations Layer
                </span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <p className="text-zinc-300 mb-6 leading-relaxed">
                    The operational intelligence platform that brings workforce
                    data to life. AI-native operations built on structured
                    competency intelligence.
                  </p>

                  <ul className="space-y-3 text-zinc-400">
                    <li className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-zinc-500"></div>
                      AI-powered workforce operations
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-zinc-500"></div>
                      Real-time intelligence integration
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-zinc-500"></div>
                      Autonomous talent lifecycle management
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-zinc-500"></div>
                      Ecosystem API connectivity
                    </li>
                  </ul>
                </div>

                <div>
                  <div className="space-y-4 mb-8">
                    <div className="text-sm font-medium text-zinc-300 mb-2">
                      Operational Components:
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-zinc-800 text-zinc-300 rounded-full text-sm">
                        AI Agent Framework
                      </span>
                      <span className="px-3 py-1 bg-zinc-800 text-zinc-300 rounded-full text-sm">
                        Autonomous Workflows
                      </span>
                      <span className="px-3 py-1 bg-zinc-800 text-zinc-300 rounded-full text-sm">
                        Intelligence Integration
                      </span>
                    </div>
                  </div>

                  <div>
                    <Button
                      variant="outline"
                      className="w-full text-white border-zinc-600 hover:bg-white/10"
                    >
                      View Operations Platform →
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Data Engine Section - Data Engine Layer */}
          <div className="relative bg-black/50 border border-zinc-800 rounded-lg p-8 hover:border-zinc-600 transition-colors">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1536048810607-3dc7f86981cb')] bg-cover bg-center opacity-50 rounded-xl"></div>
            <div className="absolute inset-0 bg-linear-to-bl from-transparent via-black/95 to-black rounded-xl"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <h3 className="text-3xl font-semibold text-white">
                  Data Engine
                </h3>
                <span className="text-xs px-2 py-1 bg-white text-black rounded-full">
                  Data Engine Layer
                </span>
              </div>

              <p className="text-zinc-300 mb-6 leading-relaxed">
                The processing powerhouse that transforms raw workforce data
                into structured intelligence. Advanced algorithms that extract,
                normalize, and enrich competency information.
              </p>

              <ul className="space-y-3 mb-8 text-zinc-400">
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-zinc-500"></div>
                  Real-time data ingestion and processing
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-zinc-500"></div>
                  Competency extraction and normalization
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-zinc-500"></div>
                  Intelligent data enrichment
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-zinc-500"></div>
                  Quality assurance and validation
                </li>
              </ul>

              <div className="space-y-4">
                <div className="text-sm font-medium text-zinc-300 mb-2">
                  Engine Components:
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-zinc-800 text-zinc-300 rounded-full text-sm">
                    Data Processing Pipeline
                  </span>
                  <span className="px-3 py-1 bg-zinc-800 text-zinc-300 rounded-full text-sm">
                    Competency Extraction
                  </span>
                  <span className="px-3 py-1 bg-zinc-800 text-zinc-300 rounded-full text-sm">
                    Quality Validation
                  </span>
                </div>
              </div>

              <div className="mt-8">
                <Button
                  variant="outline"
                  className="w-full text-white border-zinc-600 hover:bg-white/10"
                >
                  View Data Engine →
                </Button>
              </div>
            </div>
          </div>

          {/* Search Engine Section - Search Layer */}
          <div className="relative bg-black/50 border border-zinc-800 rounded-lg p-8 hover:border-zinc-600 transition-colors">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1598527901414-3e9d8ecec353?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHZhbGxleXxlbnwwfHwwfHx8Mg%3D%3D')] bg-cover bg-center opacity-40 rounded-xl"></div>
            <div className="absolute inset-0 bg-linear-to-bl from-transparent via-black/95 to-black rounded-xl"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                {/* <div className="w-3 h-3 rounded-full bg-purple-400"></div> */}
                <h3 className="text-3xl font-semibold text-white">
                  Search Engine
                </h3>
                <span className="text-xs px-2 py-1 bg-white text-black rounded-full">
                  Search Layer
                </span>
              </div>

              <p className="text-zinc-300 mb-8 leading-relaxed">
                The foundational data infrastructure for workforce intelligence.
                Structured competency graphs that AI systems can understand and
                operate upon.
              </p>

              <ul className="space-y-3 mb-8 text-zinc-400">
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-zinc-500"></div>
                  Structured human capability indexing
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-zinc-500"></div>
                  Competency graph databases
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-zinc-500"></div>
                  Search beyond keywords and resumes
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-zinc-500"></div>
                  API-first intelligence layer
                </li>
              </ul>

              <div className="space-y-4">
                <div className="text-sm font-medium text-zinc-300 mb-2">
                  Infrastructure Components:
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-zinc-800 text-zinc-300 rounded-full text-sm">
                    Competency Search Engine
                  </span>
                  <span className="px-3 py-1 bg-zinc-800 text-zinc-300 rounded-full text-sm">
                    Structured Data Pipeline
                  </span>
                  <span className="px-3 py-1 bg-zinc-800 text-zinc-300 rounded-full text-sm">
                    Intelligence APIs
                  </span>
                </div>
              </div>

              <div className="mt-8">
                <Button
                  variant="outline"
                  className="w-full text-white border-zinc-600 hover:bg-white/10"
                >
                  View Data Infrastructure →
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="mt-16 text-center">
          <p className="text-lg text-zinc-400 max-w-3xl mx-auto leading-relaxed">
            Together, Serpex and Employ form the complete workforce intelligence
            infrastructure stack. Data flows from Serpex to power Employ's
            AI-native operations, creating a flywheel of intelligence that
            improves with every deployment.
          </p>
        </div> */}
      </div>
    </section>
  );
};
