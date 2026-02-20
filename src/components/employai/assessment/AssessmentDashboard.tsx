"use client";

import React from "react";
import {
  BarChart3,
  CheckCircle2,
  AlertTriangle,
  Brain,
  TrendingUp,
} from "lucide-react";

const AssessmentDashboard: React.FC = () => {
  return (
    <div className="w-full h-full bg-zinc-950 border border-zinc-800 rounded-lg overflow-hidden flex flex-col">
      {/* Browser Header */}
      <div className="h-8 bg-zinc-900 border-b border-zinc-800 flex items-center px-3 gap-1.5">
        <div className="flex gap-1">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
        </div>
        <div className="flex-1 flex justify-center">
          <div className="bg-zinc-800 rounded px-2 py-0.5 text-xs text-zinc-400 font-mono flex items-center gap-1.5">
            <BarChart3 className="w-3 h-3" />
            <span>Decision-Ready Assessment - Sarah Johnson</span>
          </div>
        </div>
      </div>

      {/* Main Dashboard Content */}
      <div className="flex-1 overflow-y-auto">
        {/* Compact Header */}
        <div className="px-3 py-2 bg-zinc-900/30 border-b border-zinc-800/50">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div>
                <h3 className="text-sm font-semibold text-white">
                  Candidate Evaluation Report
                </h3>
                <p className="text-xs text-zinc-400">
                  Decision-Ready Assessment
                </p>
              </div>
              <div className="flex items-center gap-2 px-2 py-1 bg-zinc-800/30 rounded">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                <span className="text-xs text-zinc-300">Strong Hire</span>
                <span className="text-xs text-zinc-500">•</span>
                <span className="text-xs text-zinc-300">AI: 94%</span>
                <span className="text-xs text-zinc-500">•</span>
                <span className="text-xs text-zinc-300">Match: 91%</span>
              </div>
            </div>
            <div className="text-right">
              <div className="text-xs text-zinc-500">EMP-8921-ASS</div>
              <div className="text-xs text-zinc-500">Feb 5, 2026</div>
            </div>
          </div>
        </div>

        {/* Compact Dashboard Grid */}
        <div className="p-3">
          <div className="grid grid-cols-2 gap-3">
            {/* Left Column */}
            <div className="space-y-3">
              {/* Candidate Snapshot */}
              <div className="bg-zinc-900/50 border border-zinc-800/50 rounded p-3">
                <h4 className="text-xs font-semibold text-white mb-2 flex items-center gap-1.5">
                  <span className="w-4 h-4 bg-blue-500/20 text-blue-400 rounded-full flex items-center justify-center text-xs font-bold">
                    1
                  </span>
                  Candidate Snapshot
                </h4>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="space-y-1">
                    <div>
                      <span className="text-zinc-500">Name:</span>{" "}
                      <span className="text-white">Sarah Johnson</span>
                    </div>
                    <div>
                      <span className="text-zinc-500">Role:</span>{" "}
                      <span className="text-white">Senior Engineer</span>
                    </div>
                    <div>
                      <span className="text-zinc-500">Company:</span>{" "}
                      <span className="text-white">TechFlow</span>
                    </div>
                    <div>
                      <span className="text-zinc-500">Exp:</span>{" "}
                      <span className="text-white">8+ years</span>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div>
                      <span className="text-zinc-500">Location:</span>{" "}
                      <span className="text-white">Austin, TX</span>
                    </div>
                    <div>
                      <span className="text-zinc-500">Work:</span>{" "}
                      <span className="text-white">Hybrid</span>
                    </div>
                    <div>
                      <span className="text-zinc-500">Status:</span>{" "}
                      <span className="text-green-400">Active</span>
                    </div>
                    <div>
                      <span className="text-zinc-500">Updated:</span>{" "}
                      <span className="text-white">1h ago</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Technical Assessment */}
              <div className="bg-zinc-900/50 border border-zinc-800/50 rounded p-3">
                <h4 className="text-xs font-semibold text-white mb-2 flex items-center gap-1.5">
                  <span className="w-4 h-4 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center text-xs font-bold">
                    3
                  </span>
                  Technical Assessment
                </h4>
                <div className="grid grid-cols-2 gap-2">
                  <div className="space-y-1.5">
                    <div>
                      <div className="flex justify-between text-xs mb-0.5">
                        <span className="text-zinc-400">React/Next.js</span>
                        <span className="text-zinc-300">9.5/10</span>
                      </div>
                      <div className="w-full bg-zinc-800 rounded-full h-1">
                        <div
                          className="bg-green-600 h-1 rounded-full"
                          style={{ width: "95%" }}
                        ></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs mb-0.5">
                        <span className="text-zinc-400">Node.js</span>
                        <span className="text-zinc-300">9.2/10</span>
                      </div>
                      <div className="w-full bg-zinc-800 rounded-full h-1">
                        <div
                          className="bg-green-600 h-1 rounded-full"
                          style={{ width: "92%" }}
                        ></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs mb-0.5">
                        <span className="text-zinc-400">TypeScript</span>
                        <span className="text-zinc-300">9.1/10</span>
                      </div>
                      <div className="w-full bg-zinc-800 rounded-full h-1">
                        <div
                          className="bg-green-600 h-1 rounded-full"
                          style={{ width: "91%" }}
                        ></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs mb-0.5">
                        <span className="text-zinc-400">AWS/GCP</span>
                        <span className="text-zinc-300">8.8/10</span>
                      </div>
                      <div className="w-full bg-zinc-800 rounded-full h-1">
                        <div
                          className="bg-green-600 h-1 rounded-full"
                          style={{ width: "88%" }}
                        ></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs mb-0.5">
                        <span className="text-zinc-400">Docker/K8s</span>
                        <span className="text-zinc-300">8.5/10</span>
                      </div>
                      <div className="w-full bg-zinc-800 rounded-full h-1">
                        <div
                          className="bg-green-600 h-1 rounded-full"
                          style={{ width: "85%" }}
                        ></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs mb-0.5">
                        <span className="text-zinc-400">Python</span>
                        <span className="text-zinc-300">8.3/10</span>
                      </div>
                      <div className="w-full bg-zinc-800 rounded-full h-1">
                        <div
                          className="bg-yellow-600 h-1 rounded-full"
                          style={{ width: "83%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <div>
                      <div className="flex justify-between text-xs mb-0.5">
                        <span className="text-zinc-400">System Design</span>
                        <span className="text-zinc-300">9.3/10</span>
                      </div>
                      <div className="w-full bg-zinc-800 rounded-full h-1">
                        <div
                          className="bg-green-600 h-1 rounded-full"
                          style={{ width: "93%" }}
                        ></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs mb-0.5">
                        <span className="text-zinc-400">Database Design</span>
                        <span className="text-zinc-300">8.9/10</span>
                      </div>
                      <div className="w-full bg-zinc-800 rounded-full h-1">
                        <div
                          className="bg-green-600 h-1 rounded-full"
                          style={{ width: "89%" }}
                        ></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs mb-0.5">
                        <span className="text-zinc-400">API Design</span>
                        <span className="text-zinc-300">9.0/10</span>
                      </div>
                      <div className="w-full bg-zinc-800 rounded-full h-1">
                        <div
                          className="bg-green-600 h-1 rounded-full"
                          style={{ width: "90%" }}
                        ></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs mb-0.5">
                        <span className="text-zinc-400">Testing</span>
                        <span className="text-zinc-300">8.7/10</span>
                      </div>
                      <div className="w-full bg-zinc-800 rounded-full h-1">
                        <div
                          className="bg-green-600 h-1 rounded-full"
                          style={{ width: "87%" }}
                        ></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs mb-0.5">
                        <span className="text-zinc-400">Performance</span>
                        <span className="text-zinc-300">8.1/10</span>
                      </div>
                      <div className="w-full bg-zinc-800 rounded-full h-1">
                        <div
                          className="bg-yellow-600 h-1 rounded-full"
                          style={{ width: "81%" }}
                        ></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs mb-0.5">
                        <span className="text-zinc-400">Security</span>
                        <span className="text-zinc-300">7.8/10</span>
                      </div>
                      <div className="w-full bg-zinc-800 rounded-full h-1">
                        <div
                          className="bg-yellow-600 h-1 rounded-full"
                          style={{ width: "78%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Dimensions */}
              <div className="bg-zinc-900/50 border border-zinc-800/50 rounded p-3">
                <h4 className="text-xs font-semibold text-white mb-2 flex items-center gap-1.5">
                  <span className="w-4 h-4 bg-violet-500/20 text-violet-400 rounded-full flex items-center justify-center text-xs font-bold">
                    2
                  </span>
                  Dimensions
                </h4>
                <div className="space-y-2">
                  <div className="p-2 bg-zinc-800/30 rounded">
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-xs font-medium text-white">
                          Technical Proficiency
                        </span>
                      </div>
                      <div className="text-xs text-green-400 font-medium">
                        Strong Aligned
                      </div>
                    </div>
                    <div className="text-xs text-zinc-500">
                      9.5/10 React, 9.2/10 Node.js, 9.1/10 TypeScript
                    </div>
                  </div>

                  <div className="p-2 bg-zinc-800/30 rounded">
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-xs font-medium text-white">
                          Problem Solving
                        </span>
                      </div>
                      <div className="text-xs text-green-400 font-medium">
                        Strong Aligned
                      </div>
                    </div>
                    <div className="text-xs text-zinc-500">
                      System design interview: 9.3/10, Algorithm challenges
                      passed
                    </div>
                  </div>

                  <div className="p-2 bg-zinc-800/30 rounded">
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                        <span className="text-xs font-medium text-white">
                          Communication
                        </span>
                      </div>
                      <div className="text-xs text-yellow-400 font-medium">
                        Aligned
                      </div>
                    </div>
                    <div className="text-xs text-zinc-500">
                      Prefers written communication, technical discussions clear
                    </div>
                  </div>

                  <div className="p-2 bg-zinc-800/30 rounded">
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-xs font-medium text-white">
                          Leadership Potential
                        </span>
                      </div>
                      <div className="text-xs text-green-400 font-medium">
                        Strong Aligned
                      </div>
                    </div>
                    <div className="text-xs text-zinc-500">
                      Led 3-person team, mentored 2 junior developers
                    </div>
                  </div>

                  <div className="p-2 bg-zinc-800/30 rounded">
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        <span className="text-xs font-medium text-white">
                          Team Collaboration
                        </span>
                      </div>
                      <div className="text-xs text-red-400 font-medium">
                        Not Aligned
                      </div>
                    </div>
                    <div className="text-xs text-zinc-500">
                      Limited pair programming experience, prefers independent
                      work
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-3">
              {/* Verified Profile Signals */}
              <div className="bg-zinc-900/50 border border-zinc-800/50 rounded p-3">
                <h4 className="text-xs font-semibold text-white mb-2 flex items-center gap-1.5">
                  <span className="w-4 h-4 bg-cyan-500/20 text-cyan-400 rounded-full flex items-center justify-center text-xs font-bold">
                    4
                  </span>
                  Verified Profile Signals
                </h4>
                <div className="space-y-2">
                  <div>
                    <h5 className="font-medium text-white text-xs mb-1">
                      Profile Verification
                    </h5>
                    <div className="space-y-0.5 text-xs">
                      <div className="flex justify-between">
                        <span className="text-zinc-400">LinkedIn</span>
                        <span className="text-green-400 flex items-center gap-1">
                          <CheckCircle2 className="w-3 h-3" />
                          Found
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-zinc-400">GitHub</span>
                        <span className="text-green-400 flex items-center gap-1">
                          <CheckCircle2 className="w-3 h-3" />
                          15 repos analyzed
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-zinc-400">Portfolio</span>
                        <span className="text-zinc-500">○ Not found</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h5 className="font-medium text-white text-xs mb-1">
                      Activity Score
                    </h5>
                    <div className="flex justify-between">
                      <span className="text-zinc-400">Activity Score</span>
                      <span className="text-green-400 flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3" />
                        8.2/10
                      </span>
                    </div>
                  </div>
                  <div>
                    <h5 className="font-medium text-white text-xs mb-1">
                      Data Sources
                    </h5>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div className="bg-zinc-800/30 rounded p-2">
                        <div className="text-zinc-300 font-medium">
                          GitHub Profile
                        </div>
                        <div className="text-zinc-500">15 repos analyzed</div>
                      </div>
                      <div className="bg-zinc-800/30 rounded p-2">
                        <div className="text-zinc-300 font-medium">
                          LinkedIn Profile
                        </div>
                        <div className="text-zinc-500">
                          Verified work history
                        </div>
                      </div>
                      <div className="bg-zinc-800/30 rounded p-2">
                        <div className="text-zinc-300 font-medium">
                          Interview Transcripts
                        </div>
                        <div className="text-zinc-500">
                          2 technical interviews
                        </div>
                      </div>
                      <div className="bg-zinc-800/30 rounded p-2">
                        <div className="text-zinc-300 font-medium">
                          Resume Data
                        </div>
                        <div className="text-zinc-500">Parsed & validated</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Executive AI Summary */}
              <div className="bg-zinc-900/50 border border-zinc-800/50 rounded p-3">
                <h4 className="text-xs font-semibold text-white mb-2 flex items-center gap-1.5">
                  <span className="w-4 h-4 bg-purple-500/20 text-purple-400 rounded-full flex items-center justify-center text-xs font-bold">
                    5
                  </span>
                  Executive AI Summary
                </h4>
                <div className="space-y-2">
                  <div>
                    <h5 className="font-medium text-white text-xs mb-1">
                      Top Strengths
                    </h5>
                    <ul className="text-xs text-zinc-300 space-y-0.5">
                      <li>
                        • Exceptional full-stack developer with deep expertise
                        in React, Node.js, and modern JavaScript frameworks
                      </li>
                      <li>
                        • Demonstrates outstanding system design and
                        architecture skills with proven experience in scalable
                        solutions
                      </li>
                      <li>
                        • Proven cross-functional leadership abilities with
                        successful team management and mentoring experience
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-white text-xs mb-1">
                      Key Gaps / Risks
                    </h5>
                    <ul className="text-xs text-zinc-300 space-y-0.5">
                      <li>
                        • Limited hands-on experience with fintech
                        domain-specific technologies and regulatory requirements
                      </li>
                      <li>
                        • Shows strong preference for independent work which may
                        require adaptation to highly collaborative team
                        environments
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-white text-xs mb-1">
                      Seniority Readiness
                    </h5>
                    <p className="text-xs text-zinc-300">
                      Fully prepared for senior leadership roles with
                      demonstrated technical excellence, team leadership
                      experience, and strategic thinking capabilities that align
                      with senior engineering expectations
                    </p>
                  </div>
                </div>
              </div>

              {/* Hiring Recommendation */}
              <div className="bg-zinc-900/50 border border-zinc-800/50 rounded p-3">
                <h4 className="text-xs font-semibold text-white mb-2 flex items-center gap-1.5">
                  <span className="w-4 h-4 bg-orange-500/20 text-orange-400 rounded-full flex items-center justify-center text-xs font-bold">
                    6
                  </span>
                  Hiring Recommendation
                </h4>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-green-400 mt-0.5 shrink-0" />
                    <div>
                      <h5 className="font-medium text-white text-xs mb-0.5">
                        Proceed with Offer
                      </h5>
                      <p className="text-xs text-zinc-300">
                        Exceptional technical capabilities & leadership
                        potential. Recommend onboarding plan that includes
                        structured pairing and cross-functional rotations to
                        strengthen real-time collaboration skills.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <AlertTriangle className="w-3.5 h-3.5 text-yellow-400 mt-0.5 shrink-0" />
                    <div>
                      <h5 className="font-medium text-white text-xs mb-0.5">
                        Domain Adaptation
                      </h5>
                      <p className="text-xs text-zinc-300">
                        2-4 weeks for fintech domain adaptation
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Compact Footer */}
        <div className="px-3 py-2 border-t border-zinc-800 bg-zinc-900/30">
          <div className="flex items-center justify-between">
            <div className="text-xs text-zinc-500">
              Assessment completed • ASS-2026-001 • 2 minutes ago
            </div>
            <div className="flex gap-1.5">
              <button className="px-2 py-1 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 rounded text-xs">
                Export
              </button>
              <button className="px-2 py-1 bg-zinc-600 hover:bg-zinc-500 text-white rounded text-xs">
                Share
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssessmentDashboard;
