"use client";
import {
  Brain,
  BarChart3,
  Search,
  VectorSquareIcon,
  Trophy,
} from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

type Stage = {
  id: string;
  number: number;
  title: string;
  subtitle: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  inputCount: string;
  outputCount: string;
  candidates: Array<{
    name: string;
    title: string;
    company: string;
    score: number;
  }>;
  details: {
    title: string;
    description: string;
    metrics: Array<{ label: string; value: string }>;
    features: string[];
  };
};

const stages: Stage[] = [
  {
    id: "search",
    number: 1,
    title: "Search across 80M+ profiles",
    subtitle: "Initial filtering by role, location, and basic criteria",
    icon: Search,
    color: "emerald",
    inputCount: "80M+",
    outputCount: "2,847",
    candidates: [
      {
        name: "Aisha Rahman",
        title: "Growth Lead",
        company: "Acme",
        score: 92,
      },
      {
        name: "David Kim",
        title: "Growth Hacker",
        company: "TechStart",
        score: 88,
      },
      {
        name: "Alex Rivera",
        title: "Growth Lead",
        company: "InnovateNY",
        score: 85,
      },
      {
        name: "Ryan Patel",
        title: "Growth Specialist",
        company: "BoostInc",
        score: 82,
      },
    ],
    details: {
      title: "Distributed Search Engine",
      description:
        "Our AI-powered search engine simultaneously queries multiple data sources including LinkedIn, GitHub, company databases, and professional networks to build a comprehensive initial people pool.",
      metrics: [
        { label: "Data Sources", value: "15+" },
        { label: "Search Speed", value: "1.2s" },
        { label: "Profiles Scanned", value: "80M+" },
        { label: "Real-time Updates", value: "24/7" },
      ],
      features: [
        "Multi-source parallel querying",
        "Real-time profile aggregation",
        "Duplicate detection & merging",
        "Privacy-compliant data access",
        "Geographic distribution filtering",
        "Role-based initial scoring",
      ],
    },
  },
  {
    id: "neural",
    number: 2,
    title: "Neural Processing",
    subtitle: "Deep analysis of skills, experience, and competency levels",
    icon: Brain,
    color: "blue",
    inputCount: "2,847",
    outputCount: "847",
    candidates: [
      {
        name: "Aisha Rahman",
        title: "Growth Lead",
        company: "Acme",
        score: 94,
      },
      {
        name: "David Kim",
        title: "Growth Hacker",
        company: "TechStart",
        score: 91,
      },
      {
        name: "Alex Rivera",
        title: "Growth Lead",
        company: "InnovateNY",
        score: 88,
      },
      {
        name: "Maya Chen",
        title: "Growth Manager",
        company: "ScaleUp",
        score: 85,
      },
    ],
    details: {
      title: "Multi-Modal Neural Analysis",
      description:
        "Advanced transformer models analyze people profiles across multiple dimensions, extracting deep insights from work history, skills, projects, and achievements to assess competency levels.",
      metrics: [
        { label: "Model Accuracy", value: "99.7%" },
        { label: "Skills Extracted", value: "200+" },
        { label: "Experience Patterns", value: "50+" },
        { label: "Processing Time", value: "0.8s" },
      ],
      features: [
        "NLP-based skill extraction",
        "Career trajectory analysis",
        "Competency level assessment",
        "Tech stack proficiency mapping",
        "Leadership potential scoring",
        "Growth velocity calculation",
      ],
    },
  },
  {
    id: "semantic",
    number: 3,
    title: "Semantic Search",
    subtitle: "Contextual understanding of role requirements and candidate fit",
    icon: VectorSquareIcon,
    color: "purple",
    inputCount: "847",
    outputCount: "234",
    candidates: [
      {
        name: "Aisha Rahman",
        title: "Growth Lead",
        company: "Acme",
        score: 96,
      },
      {
        name: "David Kim",
        title: "Growth Hacker",
        company: "TechStart",
        score: 93,
      },
      {
        name: "Alex Rivera",
        title: "Growth Lead",
        company: "InnovateNY",
        score: 90,
      },
      {
        name: "Emma Thompson",
        title: "Growth Manager",
        company: "ScaleFast",
        score: 87,
      },
    ],
    details: {
      title: "Context-Aware Matching",
      description:
        "Semantic embeddings understand the deeper meaning behind role requirements and people experiences, matching beyond keywords to capabilities and cultural fit.",
      metrics: [
        { label: "Semantic Accuracy", value: "97.2%" },
        { label: "Context Vectors", value: "1024D" },
        { label: "Similarity Score", value: "0-1.0" },
        { label: "Embedding Model", value: "Custom" },
      ],
      features: [
        "Role requirement embedding",
        "Candidate profile vectorization",
        "Contextual similarity matching",
        "Industry-specific understanding",
        "Cultural fit prediction",
        "Hidden skill discovery",
      ],
    },
  },
  {
    id: "rerank",
    number: 4,
    title: "Rerank",
    subtitle:
      "Advanced ranking based on growth potential and cultural alignment",
    icon: BarChart3,
    color: "orange",
    inputCount: "234",
    outputCount: "89",
    candidates: [
      {
        name: "Aisha Rahman",
        title: "Growth Lead",
        company: "Acme",
        score: 97,
      },
      {
        name: "David Kim",
        title: "Growth Hacker",
        company: "TechStart",
        score: 95,
      },
      {
        name: "Alex Rivera",
        title: "Growth Lead",
        company: "InnovateNY",
        score: 92,
      },
      {
        name: "Ryan Patel",
        title: "Growth Specialist",
        company: "BoostInc",
        score: 90,
      },
    ],
    details: {
      title: "Multi-Factor Reranking",
      description:
        "Advanced machine learning models reassess people using signals including growth trajectory, impact potential, team dynamics, and long-term value prediction.",
      metrics: [
        { label: "Ranking Factors", value: "35+" },
        { label: "Model Type", value: "XGBoost" },
        { label: "Feature Importance", value: "Analyzed" },
        { label: "Confidence Level", value: "94%" },
      ],
      features: [
        "Growth potential modeling",
        "Team composition analysis",
        "Cultural alignment scoring",
        "Impact prediction",
        "Retention probability",
        "Compensation fit analysis",
      ],
    },
  },
  {
    id: "scoring",
    number: 5,
    title: "Final Scoring",
    subtitle: "Comprehensive scoring with confidence intervals",
    icon: Trophy,
    color: "red",
    inputCount: "89",
    outputCount: "23",
    candidates: [
      {
        name: "Aisha Rahman",
        title: "Growth Lead",
        company: "Acme",
        score: 98,
      },
      {
        name: "David Kim",
        title: "Growth Hacker",
        company: "TechStart",
        score: 96,
      },
      {
        name: "Alex Rivera",
        title: "Growth Lead",
        company: "InnovateNY",
        score: 94,
      },
      {
        name: "Ryan Patel",
        title: "Growth Specialist",
        company: "BoostInc",
        score: 92,
      },
    ],
    details: {
      title: "Holistic Candidate Scoring",
      description:
        "Final scoring combines all previous stage signals with validation checks, producing comprehensive people profiles with reasoning and confidence metrics.",
      metrics: [
        { label: "Final Accuracy", value: "99.9%" },
        { label: "Confidence Range", value: "85-99%" },
        { label: "Score Components", value: "12" },
        { label: "Validation Checks", value: "8" },
      ],
      features: [
        "Weighted multi-stage scoring",
        "Confidence interval calculation",
        "Explainable AI reasoning",
        "Interview readiness score",
        "Offer acceptance prediction",
        "Detailed candidate reports",
      ],
    },
  },
];

const PipelineStagesSection: React.FC = () => {
  const [activeStage, setActiveStage] = useState(0);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      sectionRefs.current.forEach((ref, index) => {
        if (ref) {
          const { offsetTop, offsetHeight } = ref;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveStage(index);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getColorClasses = (color: string, active: boolean) => {
    // Use a neutral, clean theme similar to FeaturesSection.
    // Keep accents very subtle and avoid bright color variations.
    const neutral = {
      bg: active ? "bg-zinc-800/40" : "bg-zinc-900/30",
      text: active ? "text-white" : "text-zinc-400",
      border: active ? "border-zinc-600" : "border-zinc-800",
    };

    return neutral;
  };

  // Stage 1: Search Engine Layout - Grid Table Style
  const SearchStageContent = ({ stage }: { stage: Stage }) => (
    <div className="p-4 sm:p-6 md:p-8">
      <div className="mb-6 sm:mb-8 pb-4 sm:pb-6 border-b border-zinc-800">
        <div className="flex items-center gap-3 mb-3">
          <Search className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          <h3 className="text-xl sm:text-2xl font-bold text-white">
            {stage.details.title}
          </h3>
        </div>
        <p className="text-zinc-400 text-sm max-w-3xl">
          {stage.details.description}
        </p>
      </div>

      {/* Metrics Bar */}
      <div className="grid grid-cols-2 sm:flex sm:justify-between items-center gap-4 mb-6 sm:mb-8 pb-4 sm:pb-6 border-b border-zinc-800">
        {stage.details.metrics.map((metric, idx) => (
          <div key={idx} className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-white mb-1">
              {metric.value}
            </div>
            <div className="text-xs text-zinc-500 uppercase tracking-wider">
              {metric.label}
            </div>
          </div>
        ))}
      </div>

      {/* Table Layout - Desktop */}
      <div className="hidden md:block space-y-0">
        {/* Table Header */}
        <div className="grid grid-cols-12 gap-4 px-4 py-3 border-b border-zinc-800">
          <div className="col-span-1 text-xs text-zinc-500 uppercase tracking-wider">
            Rank
          </div>
          <div className="col-span-4 text-xs text-zinc-500 uppercase tracking-wider">
            Candidate
          </div>
          <div className="col-span-3 text-xs text-zinc-500 uppercase tracking-wider">
            Role
          </div>
          <div className="col-span-3 text-xs text-zinc-500 uppercase tracking-wider">
            Company
          </div>
          <div className="col-span-1 text-xs text-zinc-500 uppercase tracking-wider text-right">
            Score
          </div>
        </div>

        {/* Table Rows */}
        {stage.candidates.map((candidate, idx) => (
          <div
            key={idx}
            className="grid grid-cols-12 gap-4 px-4 py-4 border-b border-zinc-800/50 hover:bg-zinc-900/30 transition-colors"
          >
            <div className="col-span-1 text-zinc-400 text-sm">#{idx + 1}</div>
            <div className="col-span-4 text-white font-medium">
              {candidate.name}
            </div>
            <div className="col-span-3 text-zinc-400 text-sm">
              {candidate.title}
            </div>
            <div className="col-span-3 text-zinc-400 text-sm">
              {candidate.company}
            </div>
            <div className="col-span-1 text-white font-semibold text-right">
              {candidate.score}
            </div>
          </div>
        ))}
      </div>

      {/* Mobile Card Layout */}
      <div className="md:hidden space-y-3">
        {stage.candidates.map((candidate, idx) => (
          <div
            key={idx}
            className="bg-zinc-800/30 rounded-lg p-4 border border-zinc-800/50"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <div className="text-white font-medium mb-1">
                  {candidate.name}
                </div>
                <div className="text-sm text-zinc-400">{candidate.title}</div>
                <div className="text-xs text-zinc-500">{candidate.company}</div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-white">
                  {candidate.score}
                </div>
                <div className="text-xs text-zinc-500">Score</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs text-zinc-600">Rank #{idx + 1}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Features Footer */}
      <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-zinc-800">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {stage.details.features.slice(0, 3).map((feature, idx) => (
            <div key={idx} className="flex items-start gap-2">
              <div className="w-1 h-1 bg-white rounded-full mt-2 shrink-0" />
              <span className="text-sm text-zinc-400">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // Stage 2: Neural Processing Layout - Card Grid with Split View
  const NeuralStageContent = ({ stage }: { stage: Stage }) => (
    <div className="p-4 sm:p-6 md:p-8">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 sm:mb-8 pb-4 sm:pb-6 border-b border-zinc-800 gap-4">
        <div className="flex items-center gap-3">
          <Brain className="w-5 h-5 sm:w-6 sm:h-6 text-white shrink-0" />
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              {stage.details.title}
            </h3>
            <p className="text-zinc-400 text-xs sm:text-sm mt-1">
              {stage.details.description}
            </p>
          </div>
        </div>
        <div className="text-left sm:text-right">
          <div className="text-xl sm:text-2xl font-bold text-white">
            {stage.inputCount} → {stage.outputCount}
          </div>
          <div className="text-xs text-zinc-500">Profiles Processed</div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left: Features List */}
        <div className="lg:col-span-1 space-y-4">
          <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
            Capabilities
          </h4>
          {stage.details.features.map((feature, idx) => (
            <div
              key={idx}
              className="flex items-start gap-3 pb-3 border-b border-zinc-800/50 last:border-0"
            >
              <div className="text-zinc-500 text-xs font-mono mt-0.5 shrink-0">
                {String(idx + 1).padStart(2, "0")}
              </div>
              <span className="text-sm text-zinc-400">{feature}</span>
            </div>
          ))}
        </div>

        {/* Right: Candidate Cards */}
        <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {stage.candidates.map((candidate, idx) => (
            <div key={idx} className="border border-zinc-800 p-4 sm:p-5">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1 min-w-0">
                  <div className="text-white font-semibold mb-1 truncate">
                    {candidate.name}
                  </div>
                  <div className="text-xs text-zinc-500 truncate">
                    {candidate.title}
                  </div>
                  <div className="text-xs text-zinc-600 truncate">
                    {candidate.company}
                  </div>
                </div>
                <div className="text-right shrink-0 ml-4">
                  <div className="text-xl sm:text-2xl font-bold text-white">
                    {candidate.score}
                  </div>
                  <div className="text-xs text-zinc-500">Score</div>
                </div>
              </div>
              <div className="flex gap-2">
                {stage.details.metrics.slice(0, 2).map((metric, midx) => (
                  <div
                    key={midx}
                    className="flex-1 text-center py-2 border-t border-zinc-800"
                  >
                    <div className="text-xs text-zinc-500">{metric.label}</div>
                    <div className="text-sm text-white font-semibold">
                      {metric.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // Stage 3: Semantic Search Layout - Minimal with Large Typography
  const SemanticStageContent = ({ stage }: { stage: Stage }) => (
    <div className="p-4 sm:p-6 md:p-8 lg:p-12">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8 sm:mb-12 pb-6 sm:pb-8 border-b border-zinc-800">
          <VectorSquareIcon className="w-10 h-10 sm:w-12 sm:h-12 text-white mx-auto mb-4" />
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            {stage.details.title}
          </h3>
          <p className="text-sm sm:text-base text-zinc-400 max-w-2xl mx-auto">
            {stage.details.description}
          </p>
        </div>

        {/* Metrics in Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 mb-8 sm:mb-12">
          {stage.details.metrics.map((metric, idx) => (
            <div key={idx} className="text-center">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2">
                {metric.value}
              </div>
              <div className="text-xs text-zinc-500 uppercase tracking-wider">
                {metric.label}
              </div>
            </div>
          ))}
        </div>

        {/* Features in Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 sm:gap-x-12 gap-y-3 sm:gap-y-4 pt-6 sm:pt-8 border-t border-zinc-800">
          {stage.details.features.map((feature, idx) => (
            <div key={idx} className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 bg-white shrink-0" />
              <span className="text-sm text-zinc-400">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // Stage 4: Rerank Layout - Asymmetric Split
  const RerankStageContent = ({ stage }: { stage: Stage }) => (
    <div className="p-4 sm:p-6 md:p-8">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8">
        {/* Left Sidebar - Compact */}
        <div className="lg:col-span-2 lg:border-r border-zinc-800 lg:pr-8">
          <div className="flex items-center gap-3 mb-6">
            <BarChart3 className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            <h3 className="text-lg sm:text-xl font-bold text-white">
              {stage.details.title}
            </h3>
          </div>

          <p className="text-sm text-zinc-400 mb-6 sm:mb-8">
            {stage.details.description}
          </p>

          {/* Metrics Stacked */}
          <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
            {stage.details.metrics.map((metric, idx) => (
              <div
                key={idx}
                className="flex items-baseline justify-between pb-3 border-b border-zinc-800/50"
              >
                <span className="text-xs text-zinc-500 uppercase tracking-wider">
                  {metric.label}
                </span>
                <span className="text-base sm:text-lg font-bold text-white">
                  {metric.value}
                </span>
              </div>
            ))}
          </div>

          {/* Features Compact */}
          <div className="space-y-2">
            {stage.details.features.slice(0, 4).map((feature, idx) => (
              <div
                key={idx}
                className="text-xs text-zinc-500 flex items-start gap-2"
              >
                <span className="text-white shrink-0">·</span>
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Content - Large Candidate Cards */}
        <div className="lg:col-span-3 space-y-4">
          <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
            Reranked Results
          </h4>
          {stage.candidates.map((candidate, idx) => (
            <div
              key={idx}
              className="border border-zinc-800 p-4 sm:p-6 hover:border-zinc-700 transition-colors"
            >
              <div className="flex flex-col sm:flex-row items-start justify-between gap-4">
                <div className="flex gap-3 sm:gap-4 flex-1 min-w-0">
                  <div className="text-3xl sm:text-4xl font-bold text-zinc-600 shrink-0">
                    {idx + 1}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-lg sm:text-xl font-bold text-white mb-1 truncate">
                      {candidate.name}
                    </div>
                    <div className="text-sm text-zinc-500 mb-3 truncate">
                      {candidate.title} · {candidate.company}
                    </div>
                    <div className="flex flex-wrap gap-3 sm:gap-4 text-xs">
                      <span className="text-zinc-600">Growth: High</span>
                      <span className="text-zinc-600">
                        Fit: {candidate.score}%
                      </span>
                      <span className="text-zinc-600">Experience: 5+ yrs</span>
                    </div>
                  </div>
                </div>
                <div className="text-left sm:text-right shrink-0">
                  <div className="text-2xl sm:text-3xl font-bold text-white">
                    {candidate.score}
                  </div>
                  <div className="text-xs text-zinc-500 mt-1">Final Score</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // Stage 5: Final Scoring Layout - Dashboard Style
  const ScoringStageContent = ({ stage }: { stage: Stage }) => (
    <div className="p-4 sm:p-6 md:p-8">
      <div className="mb-6 sm:mb-8 pb-4 sm:pb-6 border-b border-zinc-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-start sm:items-center gap-3">
          <Trophy className="w-6 h-6 sm:w-8 sm:h-8 text-white shrink-0" />
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              {stage.details.title}
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 mt-1">
              {stage.details.description}
            </p>
          </div>
        </div>
        <div className="flex gap-6 sm:gap-8">
          {stage.details.metrics.slice(0, 2).map((metric, idx) => (
            <div key={idx} className="text-center">
              <div className="text-xl sm:text-2xl font-bold text-white">
                {metric.value}
              </div>
              <div className="text-xs text-zinc-500">{metric.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Top 3 Podium Style */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
        {stage.candidates.slice(0, 3).map((candidate, idx) => (
          <div
            key={idx}
            className={`border border-zinc-800 p-4 sm:p-6 ${idx === 0 ? "border-white" : ""}`}
          >
            <div className="text-center mb-4">
              <div
                className={`text-5xl sm:text-6xl font-bold mb-2 ${idx === 0 ? "text-white" : "text-zinc-600"}`}
              >
                {idx + 1}
              </div>
              <div className="text-lg sm:text-xl font-bold text-white mb-1 truncate">
                {candidate.name}
              </div>
              <div className="text-xs text-zinc-500 mb-3 truncate">
                {candidate.title}
              </div>
              <div className="text-xs text-zinc-600 truncate">
                {candidate.company}
              </div>
            </div>
            <div className="pt-4 border-t border-zinc-800 text-center">
              <div className="text-2xl sm:text-3xl font-bold text-white">
                {candidate.score}
              </div>
              <div className="text-xs text-zinc-500 mt-1">Overall Score</div>
            </div>
          </div>
        ))}
      </div>

      {/* Remaining Candidates */}
      <div className="space-y-2">
        {stage.candidates.slice(3).map((candidate, idx) => (
          <div
            key={idx}
            className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-0 py-3 px-4 border-b border-zinc-800/50"
          >
            <div className="flex items-center gap-3 sm:gap-4 min-w-0 flex-1">
              <div className="text-zinc-600 font-mono text-sm w-8 shrink-0">
                {String(idx + 4).padStart(2, "0")}
              </div>
              <div className="text-white font-medium truncate">
                {candidate.name}
              </div>
              <div className="text-sm text-zinc-500 truncate hidden sm:block">
                {candidate.title}
              </div>
              <div className="text-sm text-zinc-600 truncate hidden md:block">
                {candidate.company}
              </div>
            </div>
            <div className="text-white font-semibold ml-11 sm:ml-0">
              {candidate.score}
            </div>
          </div>
        ))}
      </div>

      {/* Score Components Footer */}
      <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-zinc-800">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {[
            "Skills",
            "Experience",
            "Culture",
            "Growth",
            "Leadership",
            "Impact",
          ].map((component, idx) => (
            <div key={idx} className="text-center">
              <div className="text-base sm:text-lg font-bold text-white mb-1">
                {92 + idx}
              </div>
              <div className="text-xs text-zinc-500">{component}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderStageContent = (stage: Stage) => {
    switch (stage.id) {
      case "search":
        return <SearchStageContent stage={stage} />;
      case "neural":
        return <NeuralStageContent stage={stage} />;
      case "semantic":
        return <SemanticStageContent stage={stage} />;
      case "rerank":
        return <RerankStageContent stage={stage} />;
      case "scoring":
        return <ScoringStageContent stage={stage} />;
      default:
        return <SearchStageContent stage={stage} />;
    }
  };

  return (
    <section className="py-16 sm:py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header (aligned with FeaturesSection theme) */}
        <div className="mb-12 sm:mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-3 h-3 bg-emerald-400 inline-block rounded-sm" />
            <span className="text-sm text-zinc-400">AI Pipeline</span>
          </div>

          <div className="flex flex-col lg:flex-row w-full lg:justify-between gap-6">
            <h2 className="text-3xl sm:text-4xl lg:text-6xl text-white max-w-4xl lg:w-[60%]">
              Search at the Speed of Thought
            </h2>

            <div className="max-w-3xl text-base sm:text-lg text-zinc-400 lg:w-[35%] lg:text-right">
              A 5-stage pipeline that turns 80M+ profiles into prioritized
              people using neural models, semantic indexing and multi-factor
              ranking.
            </div>
          </div>
        </div>

        {/* Pipeline Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          {/* Left Sidebar - Sticky Navigation */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-24 space-y-3 sm:space-y-4">
              {stages.map((stage, index) => {
                const isActive = activeStage === index;
                const colorClasses = getColorClasses(stage.color, isActive);

                return (
                  <div
                    key={stage.id}
                    className={`p-3 sm:p-4 rounded-none border transition-all duration-300 cursor-pointer ${
                      colorClasses.bg
                    } ${colorClasses.border} ${
                      isActive ? "lg:scale-105" : "opacity-60 hover:opacity-80"
                    }`}
                    onClick={() => {
                      const element = sectionRefs.current[index];
                      if (element) {
                        const yOffset = -100;
                        const y =
                          element.getBoundingClientRect().top +
                          window.pageYOffset +
                          yOffset;
                        window.scrollTo({ top: y, behavior: "smooth" });
                      }
                    }}
                  >
                    <div className="flex items-start gap-2 sm:gap-3">
                      <div
                        className={`shrink-0 w-10 h-10 sm:w-12 sm:h-12 ${colorClasses.bg} rounded-none flex items-center justify-center border ${colorClasses.border}`}
                      >
                        <stage.icon className="text-xl sm:text-2xl" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-xs sm:text-sm font-semibold text-white mb-1">
                          {stage.title}
                        </div>
                        <div className="text-xs text-zinc-400 line-clamp-2">
                          {stage.subtitle}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Content - Scrollable Stages */}
          <div className="lg:col-span-8 space-y-12 sm:space-y-16">
            {stages.map((stage, index) => {
              const colorClasses = getColorClasses(stage.color, true);

              return (
                <div
                  key={stage.id}
                  ref={(el) => {
                    sectionRefs.current[index] = el;
                  }}
                  className="scroll-mt-24"
                >
                  <div
                    className={`${colorClasses.border} ${colorClasses.bg} rounded-lg relative overflow-hidden p-3 sm:p-6 md:p-10`}
                  >
                    {/* subtle background illustration for each stage card */}
                    <div className="absolute inset-0 bg-[url('https://framerusercontent.com/images/m9FgiqiUQCvFxojW7JDZXfys.png')] bg-cover bg-center opacity-90" />
                    <div className="relative z-10 bg-zinc-900/90">
                      {/* Render stage-specific component */}
                      {renderStageContent(stage)}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PipelineStagesSection;
