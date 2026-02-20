"use client";

import React from "react";
import { Search, Zap } from "lucide-react";

const PeopleSearchDashboard: React.FC = () => {
  return (
    <div className="w-full h-full bg-zinc-950 border border-zinc-800 rounded-lg overflow-hidden flex flex-col">
      {/* Browser Header */}
      <div className="h-10 bg-zinc-900 border-b border-zinc-800 flex items-center px-4 gap-2">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="flex-1 flex justify-center">
          <div className="bg-zinc-800 rounded-md px-3 py-1 text-xs text-zinc-400 font-mono flex items-center gap-2">
            <Search className="w-3 h-3" />
            <span>AI-Powered Talent Search</span>
          </div>
        </div>
      </div>

      {/* Main Dashboard Content */}
      <div className="flex-1 p-4">
        {/* Search Bar */}
        <div className="mb-3">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for senior platform engineers with Rust experience..."
              className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-zinc-300 placeholder-zinc-500 text-sm focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20"
            />
            <div className="absolute right-3 top-3 text-zinc-400">
              <Zap className="w-4 h-4" />
            </div>
          </div>
        </div>

        {/* AI Search Process Visualization */}
        <div className="mb-4 bg-zinc-900/90 border border-zinc-800 rounded-lg p-4 font-mono">
          {/* System Status Header */}
          <div className="mb-4 pb-3 border-b border-zinc-800">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                <span className="text-xs text-zinc-400">AI_SEARCH: ACTIVE</span>
              </div>
              <div className="flex items-center gap-4 text-xs text-zinc-500">
                <span>QUERY_ID: qry_78a9d2f1</span>
                <span>LATENCY: 1.847s</span>
              </div>
            </div>
            <div className="bg-black/60 rounded p-3 border border-zinc-700/50">
              <div className="text-emerald-400 text-xs">
                {"> ai.search.profiles({"}
              </div>
              <div className="text-zinc-400 text-xs ml-4">
                {'  role: "senior platform engineer",'}
              </div>
              <div className="text-zinc-400 text-xs ml-4">
                {'  skills: ["rust", "aws", "docker"],'}
              </div>
              <div className="text-zinc-400 text-xs ml-4">
                {"  neural_embed: true,"}
              </div>
              <div className="text-zinc-400 text-xs ml-4">
                {"  vector_search: { topK: 1247, threshold: 0.85 }"}
              </div>
              <div className="text-emerald-400 text-xs">{"});"}</div>
            </div>
          </div>

          {/* Real-time Processing Logs */}
          <div className="mb-4 bg-black/40 rounded p-3 border border-zinc-800/50">
            <div className="text-xs text-zinc-500 mb-2 font-semibold">
              EXECUTION LOG:
            </div>
            <div className="space-y-1 max-h-32 overflow-y-auto">
              <div className="flex items-start gap-3">
                <span className="text-zinc-600 shrink-0 text-xs">
                  00:00.234
                </span>
                <span className="text-emerald-400">✓</span>
                <span className="text-zinc-400 text-xs">
                  PROFILE_INDEX_SCAN → 80.2M docs filtered
                </span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-zinc-600 shrink-0 text-xs">
                  00:00.567
                </span>
                <span className="text-blue-400">⟳</span>
                <span className="text-zinc-400 text-xs">
                  NEURAL_EMBEDDING → transformer processing batch
                </span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-zinc-600 shrink-0 text-xs">
                  00:01.123
                </span>
                <span className="text-purple-400">◆</span>
                <span className="text-zinc-400 text-xs">
                  VECTOR_SIMILARITY → 2,847 matches found
                </span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-zinc-600 shrink-0 text-xs">
                  00:01.456
                </span>
                <Zap className="w-3 h-3 text-orange-400" />
                <span className="text-zinc-400 text-xs">
                  AI_RANKING → scoring 1,247 candidates
                </span>
              </div>
            </div>
          </div>

          {/* Processing Metrics */}
          <div className="grid grid-cols-3 gap-3">
            <div className="bg-zinc-800/30 rounded p-3 border border-zinc-700/30">
              <div className="text-zinc-600 text-xs mb-1">PROCESSED</div>
              <div className="text-white text-2xl font-bold">80.2M</div>
              <div className="text-zinc-500 text-xs">profiles</div>
            </div>
            <div className="bg-zinc-800/30 rounded p-3 border border-zinc-700/30">
              <div className="text-zinc-600 text-xs mb-1">MATCHES</div>
              <div className="text-white text-2xl font-bold">1,247</div>
              <div className="text-zinc-500 text-xs">candidates</div>
            </div>
            <div className="bg-zinc-800/30 rounded p-3 border border-zinc-700/30">
              <div className="text-zinc-600 text-xs mb-1">AI ACCURACY</div>
              <div className="text-white text-2xl font-bold">94.2%</div>
              <div className="text-zinc-500 text-xs">quality</div>
            </div>
          </div>
        </div>

        {/* AI Processing Status */}
        <div className="mb-4 bg-zinc-900/50 border border-zinc-800 rounded-lg p-3">
          <h3 className="text-sm font-semibold text-white mb-2 flex items-center gap-2">
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
            AI Processing Status
          </h3>
          <div className="grid grid-cols-3 gap-3">
            <div className="flex items-center justify-between text-xs">
              <span className="text-zinc-400">Neural Embed</span>
              <span className="text-emerald-400">Active</span>
            </div>
            <div className="flex items-center justify-between text-xs">
              <span className="text-zinc-400">Vector Search</span>
              <span className="text-blue-400">Running</span>
            </div>
            <div className="flex items-center justify-between text-xs">
              <span className="text-zinc-400">Ranking Engine</span>
              <span className="text-purple-400">Ready</span>
            </div>
          </div>
        </div>

        {/* Results Section */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <div>
              <h3 className="text-lg font-semibold text-white">
                Search Results
              </h3>
              <p className="text-zinc-400 text-sm">
                Found 1,247 candidates • AI-ranked by capability match
              </p>
            </div>
            <div className="flex gap-2">
              <button className="px-3 py-1 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 rounded text-sm">
                Filter
              </button>
              <button className="px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded text-sm">
                Export
              </button>
            </div>
          </div>

          {/* Candidate Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
            <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-4 hover:border-zinc-700 transition-colors">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-zinc-800 rounded-full flex items-center justify-center text-sm">
                    AC
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Alex Chen</h4>
                    <p className="text-zinc-400 text-sm">
                      Senior Platform Engineer
                    </p>
                    <p className="text-zinc-500 text-xs">San Francisco, CA</p>
                  </div>
                </div>
                <div className="px-2 py-1 bg-green-500/10 text-green-400 text-xs rounded-full border border-green-500/20">
                  95% Match
                </div>
              </div>
              <div className="flex flex-wrap gap-1 mb-3">
                <span className="px-2 py-1 bg-blue-500/10 text-blue-400 text-xs rounded">
                  Rust
                </span>
                <span className="px-2 py-1 bg-blue-500/10 text-blue-400 text-xs rounded">
                  AWS
                </span>
                <span className="px-2 py-1 bg-blue-500/10 text-blue-400 text-xs rounded">
                  Docker
                </span>
                <span className="px-2 py-1 bg-purple-500/10 text-purple-400 text-xs rounded">
                  System Design
                </span>
              </div>
              <div className="flex items-center justify-between">
                <div className="text-xs text-zinc-400">
                  7 years experience • Expert level
                </div>
                <div className="flex gap-2">
                  <button className="px-2 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded text-xs">
                    View
                  </button>
                  <button className="px-2 py-1 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 rounded text-xs">
                    Compare
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-4 hover:border-zinc-700 transition-colors">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-zinc-800 rounded-full flex items-center justify-center text-sm">
                    SJ
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Sarah Johnson</h4>
                    <p className="text-zinc-400 text-sm">Principal Engineer</p>
                    <p className="text-zinc-500 text-xs">Seattle, WA</p>
                  </div>
                </div>
                <div className="px-2 py-1 bg-yellow-500/10 text-yellow-400 text-xs rounded-full border border-yellow-500/20">
                  87% Match
                </div>
              </div>
              <div className="flex flex-wrap gap-1 mb-3">
                <span className="px-2 py-1 bg-blue-500/10 text-blue-400 text-xs rounded">
                  Go
                </span>
                <span className="px-2 py-1 bg-blue-500/10 text-blue-400 text-xs rounded">
                  Kubernetes
                </span>
                <span className="px-2 py-1 bg-blue-500/10 text-blue-400 text-xs rounded">
                  GCP
                </span>
                <span className="px-2 py-1 bg-purple-500/10 text-purple-400 text-xs rounded">
                  Architecture
                </span>
              </div>
              <div className="flex items-center justify-between">
                <div className="text-xs text-zinc-400">
                  9 years experience • Expert level
                </div>
                <div className="flex gap-2">
                  <button className="px-2 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded text-xs">
                    View
                  </button>
                  <button className="px-2 py-1 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 rounded text-xs">
                    Compare
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PeopleSearchDashboard;
