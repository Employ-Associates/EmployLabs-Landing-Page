"use client";

import React from "react";
import { Brain, Search, Zap, Users, Target, Shield } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Proprietary AI Engine",
    description:
      "Our custom-built AI engine processes 80M+ profiles with semantic indexing and vector databases, understanding context like no other search engine.",
  },
  {
    icon: Search,
    title: "Intelligence Data Layer",
    description:
      "Mapping competencies from our intelligence data layer, we create comprehensive people profiles with skills, experience, and potential fit.",
  },
  {
    icon: Target,
    title: "ML-Powered Ranking",
    description:
      "Fine-tuned models and re-ranking algorithms automatically surface the best people, learning from patterns in successful hires.",
  },
  {
    icon: Users,
    title: "80M+ Profile Database",
    description:
      "Massive proprietary index of professional profiles with real-time updates, far beyond what public search engines can access.",
  },
  {
    icon: Zap,
    title: "Automated Discovery",
    description:
      "Behind-the-scenes AI automatically fetches and analyzes people, delivering comprehensive insights without manual intervention.",
  },
  {
    icon: Shield,
    title: "Internal AI Security",
    description:
      "Enterprise-grade security designed for internal AI systems, with complete data control and privacy-first architecture.",
  },
];

export const FeaturesSection: React.FC = () => {
  return (
    <section className="py-32 bg-black">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-3 h-3 bg-emerald-400 inline-block rounded-sm" />
            <span className="text-sm text-zinc-400">Advanced features</span>
          </div>

          <div className="flex flex-col lg:flex-row w-full lg:justify-between gap-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-white max-w-4xl">
              Advanced Search Capabilities
            </h2>

            <div className="max-w-3xl text-base sm:text-lg text-zinc-400 lg:text-right">
              Built exclusively for AI systems, our proprietary engine delivers
              unmatched depth and automation in talent discovery.
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-zinc-900/50 border border-zinc-800 p-8 hover:border-zinc-700 transition-all duration-300"
            >
              <div className="w-14 h-14 border border-zinc-700 flex items-center justify-center mb-6">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-medium text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-zinc-400 leading-relaxed text-[15px]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
