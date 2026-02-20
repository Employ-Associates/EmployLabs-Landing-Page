"use client";

import React from "react";
import { Building, Users, Search, TrendingUp } from "lucide-react";

const useCases = [
  {
    icon: Building,
    title: "Enterprise Recruitment",
    description:
      "Large organizations use our platform to source top talent across global markets with advanced filtering and bulk search capabilities.",
    features: [
      "Bulk candidate sourcing",
      "Advanced filtering",
      "Team collaboration",
      "Integration with ATS",
    ],
  },
  {
    icon: Users,
    title: "HR Teams",
    description:
      "Internal HR departments leverage our semantic search to find internal candidates for promotions and lateral moves.",
    features: [
      "Internal mobility",
      "Succession plannwing",
      "Skills gap analysis",
      "Diversity hiring",
    ],
  },
  {
    icon: Search,
    title: "Executive Search",
    description:
      "Specialized firms use our platform for C-level and senior executive placements with precise competency matching.",
    features: [
      "Executive profiles",
      "Board member search",
      "Confidential searches",
      "Market intelligence",
    ],
  },
  {
    icon: TrendingUp,
    title: "Startup Hiring",
    description:
      "Growing companies access our extensive network to find specialists and generalists for critical roles.",
    features: [
      "Fast hiring cycles",
      "Competitive intelligence",
      "Remote talent pools",
      "Technical screening",
    ],
  },
];

export const UseCasesSection: React.FC = () => {
  return (
    <section className="py-32 bg-zinc-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-medium text-white mb-4">
            Built for Every Hiring Need
          </h2>
          <p className="text-lg text-zinc-300 max-w-3xl mx-auto">
            From startups to enterprises, our platform adapts to your unique
            talent acquisition requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className="bg-black/50 backdrop-blur-sm rounded-xl p-8 border border-zinc-800 hover:border-zinc-700 transition-colors"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center">
                  <useCase.icon className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-2xl font-medium text-white">
                  {useCase.title}
                </h3>
              </div>
              <p className="text-zinc-300 mb-6 leading-relaxed">
                {useCase.description}
              </p>
              <ul className="space-y-2">
                {useCase.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-2 text-zinc-400"
                  >
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
