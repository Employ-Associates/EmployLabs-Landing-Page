"use client";

import React from "react";
import { Target, Bot, BarChart3, Zap } from "lucide-react";

const SignalInterviewDashboard: React.FC = () => {
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
            <Target className="w-3 h-3" />
            <span>Signal Interview™ - Live Session</span>
          </div>
        </div>
      </div>

      {/* Main Interview Interface */}
      <div className="flex h-full">
        {/* Main Video Area */}
        <div className="flex-1 flex flex-col">
          {/* Video Grid */}
          <div className="flex-1 grid grid-cols-2 gap-2 p-4">
            {/* Naira */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden relative">
              <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded flex items-center gap-1">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                Naira
              </div>
              <div className="h-full flex items-center justify-center bg-gradient-to-br from-blue-900/20 to-green-900/20">
                <div className="text-center">
                  <div className="w-24 h-24 bg-blue-500/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <Bot className="w-12 h-12 text-blue-400" />
                  </div>
                  <div className="text-white font-semibold mb-2">
                    Naira (interviewer)
                  </div>
                  <div className="text-zinc-400 text-sm">Speaking...</div>
                  <div className="mt-4 flex justify-center">
                    <div className="flex items-center gap-1 text-green-400 text-xs">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      Live
                    </div>
                  </div>
                </div>
              </div>
              {/* AI Speaking Indicator */}
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-black/60 rounded-lg p-3">
                  <div className="text-white text-sm mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                    AI Speaking
                  </div>
                  <div className="text-zinc-300 text-sm">
                    "That's an excellent point about cache invalidation
                    strategies. Can you elaborate on how you'd handle the cache
                    consistency in a distributed environment?"
                  </div>
                </div>
              </div>
            </div>

            {/* Interviewee */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden relative">
              <div className="absolute top-2 left-2 bg-blue-500 text-white text-xs px-2 py-1 rounded flex items-center gap-1">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                Alex Chen
              </div>
              <div className="h-full flex items-center justify-center bg-gradient-to-br from-zinc-800 to-zinc-900">
                <div className="text-center">
                  <div className="w-24 h-24 bg-zinc-700 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <span className="text-4xl">👤</span>
                  </div>
                  <div className="text-white font-semibold mb-2">Alex Chen</div>
                  <div className="text-zinc-400 text-sm">
                    Senior Platform Engineer
                  </div>
                  <div className="mt-4 flex justify-center">
                    <div className="flex items-center gap-1 text-blue-400 text-xs">
                      <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                      Connected
                    </div>
                  </div>
                </div>
              </div>
              {/* Interviewee Status */}
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-black/60 rounded-lg p-3">
                  <div className="text-zinc-300 text-sm">
                    "Well, in a distributed caching system, I'd implement a
                    multi-level cache hierarchy..."
                  </div>
                  <div className="mt-2 flex items-center gap-4 text-xs text-zinc-400">
                    <span>🎤 Active</span>
                    <BarChart3 className="w-3 h-3 inline mr-1" />
                    <span>Analyzing</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Interview Controls */}
          <div className="p-4 border-t border-zinc-800">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <button className="w-12 h-12 bg-red-500 hover:bg-red-600 rounded-full flex items-center justify-center text-white">
                  📞
                </button>
                <button className="w-12 h-12 bg-zinc-700 hover:bg-zinc-600 rounded-full flex items-center justify-center text-white">
                  🎤
                </button>
                <button className="w-12 h-12 bg-zinc-700 hover:bg-zinc-600 rounded-full flex items-center justify-center text-white">
                  📹
                </button>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-sm text-zinc-400">12:34 remaining</div>
                <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded text-sm">
                  Next Question
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Sidebar - Live Chat & Analysis */}
        <div className="w-80 bg-zinc-900 border-l border-zinc-800 flex flex-col">
          {/* Live Chat */}
          <div className="flex-1 p-4">
            <h3 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              Live Chat
            </h3>
            <div className="space-y-3 max-h-96 overflow-y-auto">
              <div className="flex gap-3">
                <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center text-xs">
                  <Bot className="w-4 h-4 text-blue-400" />
                </div>
                <div className="flex-1">
                  <div className="text-xs text-zinc-400 mb-1">Naira • now</div>
                  <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-2 text-sm text-zinc-300">
                    Excellent point on multi-level cache hierarchy. That
                    approach effectively addresses consistency challenges in
                    distributed systems.
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center text-xs">
                  <BarChart3 className="w-4 h-4 text-green-400" />
                </div>
                <div className="flex-1">
                  <div className="text-xs text-zinc-400 mb-1">
                    Analysis • 2s ago
                  </div>
                  <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-2 text-sm text-zinc-300">
                    Signal detected: System Architecture Knowledge +15pts
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center text-xs">
                  <Target className="w-4 h-4 text-purple-400" />
                </div>
                <div className="flex-1">
                  <div className="text-xs text-zinc-400 mb-1">
                    Adaptive AI • 5s ago
                  </div>
                  <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-2 text-sm text-zinc-300">
                    Preparing follow-up: Cache invalidation edge cases
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-8 h-8 bg-orange-500/20 rounded-full flex items-center justify-center text-xs">
                  <Zap className="w-4 h-4 text-orange-400" />
                </div>
                <div className="flex-1">
                  <div className="text-xs text-zinc-400 mb-1">
                    Real-time • 8s ago
                  </div>
                  <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg p-2 text-sm text-zinc-300">
                    Confidence: 94% | Clarity: 87% | Depth: 96%
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Live Analysis Panel */}
          <div className="p-4 border-t border-zinc-800">
            <h3 className="text-sm font-semibold text-white mb-3">
              Live Analysis
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-xs text-zinc-400">
                  Technical Accuracy
                </span>
                <span className="text-green-400 text-xs font-mono">94%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs text-zinc-400">Communication</span>
                <span className="text-blue-400 text-xs font-mono">87%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs text-zinc-400">Problem Solving</span>
                <span className="text-purple-400 text-xs font-mono">96%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs text-zinc-400">Overall Score</span>
                <span className="text-emerald-400 text-sm font-bold">92%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignalInterviewDashboard;
