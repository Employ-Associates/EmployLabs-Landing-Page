"use client";

import React from "react";
import { Database, Cpu, Network, Eye } from "lucide-react";

const technologies = [
  {
    icon: Database,
    title: "Intelligence Data Layer",
    description:
      "Our proprietary intelligence data layer maps competencies across 80M+ profiles, creating rich candidate intelligence that powers automated discovery.",
  },
  {
    icon: Cpu,
    title: "Semantic Vector Database",
    description:
      "Advanced vector database with semantic indexing enables context-aware search that understands nuanced requirements and candidate potential.",
  },
  {
    icon: Network,
    title: "ML Re-ranking Engine",
    description:
      "Fine-tuned machine learning models continuously re-rank results, learning from successful placements to improve future recommendations.",
  },
  {
    icon: Eye,
    title: "Comprehensive Profiling",
    description:
      "Complete people profiles including LinkedIn, GitHub, previous companies, skills assessment, and competency mapping for holistic evaluation.",
  },
];

export const TechnologySection: React.FC = () => {
  return (
    <section className="py-32 bg-black">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-medium text-white mb-4">
            How Our Engine Works
          </h2>
          <p className="text-lg text-zinc-300 max-w-3xl mx-auto">
            Cutting-edge AI technology stack designed exclusively for automated
            talent intelligence and discovery systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {technologies.map((tech, index) => (
            <div key={index} className="flex gap-6">
              <div className="w-16 h-16 bg-blue-600/20 rounded-xl flex items-center justify-center shrink-0">
                <tech.icon className="w-8 h-8 text-blue-400" />
              </div>
              <div>
                <h3 className="text-2xl font-medium text-white mb-3">
                  {tech.title}
                </h3>
                <p className="text-zinc-300 leading-relaxed">
                  {tech.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-zinc-900/50 backdrop-blur-sm rounded-2xl p-8 border border-zinc-800">
          <h3 className="text-2xl font-medium text-white mb-6 text-center">
            AI Search Pipeline
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-400 mb-2">1</div>
              <h4 className="text-lg font-medium text-white mb-2">
                Intelligence Mapping
              </h4>
              <p className="text-zinc-400">
                Data flows from our intelligence layer, mapping competencies and
                creating comprehensive candidate profiles
              </p>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-400 mb-2">2</div>
              <h4 className="text-lg font-medium text-white mb-2">
                Vector Search & ML
              </h4>
              <p className="text-zinc-400">
                Semantic vector search combined with fine-tuned ML models finds
                contextually relevant candidates
              </p>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-400 mb-2">3</div>
              <h4 className="text-lg font-medium text-white mb-2">
                Automated Ranking
              </h4>
              <p className="text-zinc-400">
                AI automatically re-ranks results, delivering the best
                candidates with complete profile intelligence
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
