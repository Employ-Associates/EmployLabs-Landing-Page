"use client";
import React from "react";

const tabs = ["CROs", "Head of Marketing", "Founders"];

type Candidate = {
  id: string;
  name: string;
  title: string;
  company?: string;
  score: number; // 0-100
  location?: string;
  tags?: string[];
  linkedin?: string;
  github?: string;
  skills?: string[];
  previousCompanies?: string[];
  competencyLevel?: string;
};

const sampleCandidates: Candidate[] = [
  {
    id: "1",
    name: "Aisha Rahman",
    title: "Growth Lead",
    company: "Acme",
    score: 92,
    location: "NY",
    tags: ["growth", "saas"],
    linkedin: "linkedin.com/in/aisharahman",
    github: "github.com/aisharahman",
    skills: [
      "Growth Hacking",
      "A/B Testing",
      "Analytics",
      "Marketing Automation",
    ],
    previousCompanies: ["TechCorp", "StartupXYZ"],
    competencyLevel: "Expert",
  },
  {
    id: "5",
    name: "Maya Chen",
    title: "Growth Manager",
    company: "ScaleUp",
    score: 71,
    location: "NY",
    tags: ["growth", "email"],
    linkedin: "linkedin.com/in/mayachen",
    github: "github.com/mayachen",
    skills: ["Email Marketing", "SEO", "Content Strategy", "Data Analysis"],
    previousCompanies: ["GrowthCo", "DigitalAgency"],
    competencyLevel: "Advanced",
  },
  {
    id: "9",
    name: "David Kim",
    title: "Growth Hacker",
    company: "TechStart",
    score: 88,
    location: "NY",
    tags: ["growth", "viral"],
    linkedin: "linkedin.com/in/davidkim",
    github: "github.com/davidkim",
    skills: [
      "Viral Marketing",
      "Product Launch",
      "User Acquisition",
      "Social Media",
    ],
    previousCompanies: ["ViralTech", "SocialCorp"],
    competencyLevel: "Expert",
  },
  {
    id: "10",
    name: "Sarah Johnson",
    title: "Growth Specialist",
    company: "GrowthCo",
    score: 79,
    location: "NY",
    tags: ["growth", "analytics"],
    linkedin: "linkedin.com/in/sarahjohnson",
    github: "github.com/sarahjohnson",
    skills: ["Google Analytics", "SQL", "Python", "Marketing Analytics"],
    previousCompanies: ["DataTech", "AnalyticsPro"],
    competencyLevel: "Advanced",
  },
  {
    id: "11",
    name: "Alex Rivera",
    title: "Growth Lead",
    company: "InnovateNY",
    score: 85,
    location: "NY",
    tags: ["growth", "b2b"],
    linkedin: "linkedin.com/in/alexrivera",
    github: "github.com/alexrivera",
    skills: ["B2B Marketing", "Lead Generation", "CRM", "Sales Enablement"],
    previousCompanies: ["B2BTech", "SalesForce"],
    competencyLevel: "Expert",
  },
  {
    id: "12",
    name: "Emma Thompson",
    title: "Growth Manager",
    company: "ScaleFast",
    score: 76,
    location: "NY",
    tags: ["growth", "conversion"],
    linkedin: "linkedin.com/in/emmathompson",
    github: "github.com/emmathompson",
    skills: [
      "Conversion Optimization",
      "CRO",
      "UX Research",
      "Funnel Analysis",
    ],
    previousCompanies: ["ConvertCo", "UXLabs"],
    competencyLevel: "Advanced",
  },
  {
    id: "13",
    name: "Ryan Patel",
    title: "Growth Specialist",
    company: "BoostInc",
    score: 82,
    location: "NY",
    tags: ["growth", "retention"],
    linkedin: "linkedin.com/in/ryanpatel",
    github: "github.com/ryanpatel",
    skills: [
      "Customer Retention",
      "LTV Optimization",
      "Churn Analysis",
      "Product Analytics",
    ],
    previousCompanies: ["RetentionPro", "CustomerTech"],
    competencyLevel: "Advanced",
  },
];

const CandidateCard: React.FC<{ c: Candidate; isTop?: boolean }> = ({
  c,
  isTop,
}) => {
  return (
    <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-4 flex flex-col relative">
      {isTop && (
        <div className="absolute top-2 right-2 text-yellow-400 text-lg">★</div>
      )}
      <div className="flex-1">
        <div className="text-sm text-zinc-300">
          {c.title} • {c.company}
        </div>
        <div className="text-white font-semibold text-lg">{c.name}</div>
        <div className="text-xs text-zinc-400 mt-1">{c.location}</div>

        {/* Competency Level */}
        <div className="mt-2">
          <span
            className={`text-xs px-2 py-1 rounded-full ${
              c.competencyLevel === "Expert"
                ? "bg-emerald-500/20 text-emerald-300"
                : "bg-blue-500/20 text-blue-300"
            }`}
          >
            {c.competencyLevel} Level
          </span>
        </div>

        {/* Skills */}
        <div className="mt-3">
          <div className="text-xs text-zinc-400 mb-1">Key Skills:</div>
          <div className="flex flex-wrap gap-1">
            {(c.skills || []).slice(0, 3).map((skill, idx) => (
              <span
                key={idx}
                className="text-xs bg-zinc-800 text-zinc-300 px-2 py-1 rounded"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Previous Companies */}
        <div className="mt-3">
          <div className="text-xs text-zinc-400 mb-1">Previous:</div>
          <div className="text-xs text-zinc-300">
            {(c.previousCompanies || []).join(", ")}
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-3 flex gap-2">
          {c.linkedin && <span className="text-xs text-blue-400">in</span>}
          {c.github && <span className="text-xs text-gray-400">gh</span>}
        </div>
      </div>

      <div className="mt-3 flex justify-between items-end">
        <div className="text-xs text-zinc-400">
          {(c.tags || []).join(" • ")}
        </div>
        <div className="inline-flex items-center gap-2">
          <div className="text-xs text-zinc-400">Score</div>
          <div
            className={`px-2 py-1 rounded text-sm font-semibold ${
              c.score >= 80
                ? "bg-teal-500/10 text-teal-300"
                : "bg-orange-500/10 text-orange-300"
            }`}
          >
            {c.score}
          </div>
        </div>
      </div>
    </div>
  );
};

const MoreCandidatesCard: React.FC = () => {
  return (
    <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-4 flex items-center justify-center min-h-30">
      <div className="text-center">
        <div className="text-2xl font-bold text-emerald-400 mb-2">200+</div>
        <div className="text-sm text-zinc-300">more candidates</div>
        <div className="text-xs text-zinc-400 mt-1">available</div>
      </div>
    </div>
  );
};

const DiscoverySection: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 sm:mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-3 h-3 bg-emerald-400 inline-block rounded-sm" />
            <span className="text-sm text-zinc-400">Search intelligence</span>
          </div>

          <div className="flex flex-col lg:flex-row w-full lg:justify-between gap-6">
            <h2 className="text-3xl sm:text-4xl lg:text-6xl text-white max-w-4xl lg:w-[60%]">
              People Intelligence Discovery
            </h2>

            <div className="max-w-3xl text-base sm:text-lg text-zinc-400 lg:w-[35%] lg:text-right">
              Our AI automatically fetches and analyzes 80M+ profiles,
              delivering complete candidate intelligence including LinkedIn,
              GitHub, skills, companies, and competency assessments - far beyond
              traditional search engines.
            </div>
          </div>
        </div>

        <div className="relative bg-linear-to-br from-zinc-900/70 via-zinc-900/60 to-zinc-800/60 rounded-2xl overflow-hidden">
          {/* background visual placeholder */}
          <div className="absolute inset-0 bg-[url('https://framerusercontent.com/images/6abFIPQLo2K2Kt8jFyws5LwLo.png')] bg-cover bg-center opacity-80" />

          <div className="relative p-4 sm:p-6 md:p-8 lg:p-12">
            {/* AI Internal Search Process - Machine View */}
            <div className="mt-6 bg-zinc-900/90 border border-zinc-800 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 font-mono">
              {/* System Status Header */}
              <div className="mb-6 pb-4 border-b border-zinc-800">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-3 gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                    <span className="text-xs text-zinc-400">
                      SYSTEM_STATUS: ACTIVE
                    </span>
                  </div>
                  <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs text-zinc-500">
                    <span>QUERY_ID: qry_78a9d2f1</span>
                    <span className="hidden sm:inline">THREAD: 0x4a8f</span>
                    <span>LATENCY: 2.347s</span>
                  </div>
                </div>
                <div className="bg-black/60 rounded-lg p-3 border border-zinc-700/50">
                  <div className="text-emerald-400 text-xs leading-relaxed">
                    {"> db.profiles.aggregate(["}
                  </div>
                  <div className="text-zinc-400 text-xs ml-4 leading-relaxed">
                    {
                      '  { $match: { role: /growth.*lead/i, loc: "NY", exp: { $gte: 5 } } },'
                    }
                  </div>
                  <div className="text-zinc-400 text-xs ml-4 leading-relaxed">
                    {
                      '  { $lookup: { from: "skills", pipeline: [...neural_embed] } },'
                    }
                  </div>
                  <div className="text-zinc-400 text-xs ml-4 leading-relaxed">
                    {
                      "  { $vectorSearch: { dim: 1024, topK: 847, threshold: 0.85 } }"
                    }
                  </div>
                  <div className="text-emerald-400 text-xs leading-relaxed">
                    {"])"}
                  </div>
                </div>
              </div>

              {/* Real-time Processing Logs */}
              <div className="mb-6 bg-black/40 rounded-lg p-4 border border-zinc-800/50">
                <div className="text-xs text-zinc-500 mb-3">EXECUTION LOG:</div>
                <div className="space-y-1.5 max-h-48 overflow-y-auto">
                  <div className="flex items-start gap-3">
                    <span className="text-zinc-600 shrink-0">00:00.123</span>
                    <span className="text-emerald-400">✓</span>
                    <span className="text-zinc-400">
                      INDEX_SCAN → profiles_idx_role_loc (80,234,891 docs)
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-zinc-600 shrink-0">00:00.456</span>
                    <span className="text-blue-400">⟳</span>
                    <span className="text-zinc-400">
                      NEURAL_EMBED → transformer_v4.2 (batch_size: 512)
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-zinc-600 shrink-0">00:01.201</span>
                    <span className="text-purple-400">◆</span>
                    <span className="text-zinc-400">
                      VECTOR_SEARCH → cosine_similarity (dim: 1024, matches:
                      2847)
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-zinc-600 shrink-0">00:01.789</span>
                    <span className="text-orange-400">⚡</span>
                    <span className="text-zinc-400">
                      XGBOOST_RANK → feature_extract (35 signals, 847→234)
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-zinc-600 shrink-0">00:02.134</span>
                    <span className="text-emerald-400">✓</span>
                    <span className="text-zinc-400">
                      FINAL_SCORE → ensemble_model (234→23 candidates)
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-zinc-600 shrink-0">00:02.347</span>
                    <span className="text-emerald-400">●</span>
                    <span className="text-emerald-400">
                      COMPLETE → result_cache_write (ttl: 3600s)
                    </span>
                  </div>
                </div>
              </div>

              {/* System Metrics Grid */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 mb-6">
                <div className="bg-zinc-800/30 rounded-lg p-3 sm:p-4 border border-zinc-700/30">
                  <div className="text-zinc-600 text-xs mb-1">DOCS_SCANNED</div>
                  <div className="text-white text-xl sm:text-2xl font-bold">
                    80.2M
                  </div>
                  <div className="text-zinc-500 text-xs mt-1">+0.3% vs avg</div>
                </div>
                <div className="bg-zinc-800/30 rounded-lg p-3 sm:p-4 border border-zinc-700/30">
                  <div className="text-zinc-600 text-xs mb-1">EMBED_TIME</div>
                  <div className="text-white text-xl sm:text-2xl font-bold">
                    0.745s
                  </div>
                  <div className="text-emerald-500 text-xs mt-1">
                    -12% latency
                  </div>
                </div>
                <div className="bg-zinc-800/30 rounded-lg p-3 sm:p-4 border border-zinc-700/30">
                  <div className="text-zinc-600 text-xs mb-1">GPU_UTIL</div>
                  <div className="text-white text-xl sm:text-2xl font-bold">
                    87%
                  </div>
                  <div className="text-zinc-500 text-xs mt-1">4x A100 80GB</div>
                </div>
                <div className="bg-zinc-800/30 rounded-lg p-3 sm:p-4 border border-zinc-700/30">
                  <div className="text-zinc-600 text-xs mb-1">CACHE_HIT</div>
                  <div className="text-white text-xl sm:text-2xl font-bold">
                    94.2%
                  </div>
                  <div className="text-emerald-500 text-xs mt-1">optimal</div>
                </div>
              </div>

              {/* Pipeline Stages with Technical Details */}
              <div className="bg-zinc-800/20 rounded-lg p-4 sm:p-5 mb-6 border border-zinc-700/30">
                <div className="text-xs text-zinc-500 mb-4">
                  PIPELINE EXECUTION:
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                      <div className="w-8 h-8 shrink-0 bg-emerald-500/20 rounded flex items-center justify-center text-emerald-400 text-xs">
                        S1
                      </div>
                      <div className="min-w-0">
                        <div className="text-white text-xs sm:text-sm truncate">
                          Search Index
                        </div>
                        <div className="text-zinc-500 text-[10px] sm:text-xs truncate">
                          elasticsearch_v8.12 | shards: 24
                        </div>
                      </div>
                    </div>
                    <div className="text-right shrink-0">
                      <div className="text-white text-sm sm:text-base font-bold">
                        80.2M
                      </div>
                      <div className="text-zinc-600 text-xs">0.123s</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                      <div className="w-8 h-8 shrink-0 bg-blue-500/20 rounded flex items-center justify-center text-blue-400 text-xs">
                        S2
                      </div>
                      <div className="min-w-0">
                        <div className="text-white text-xs sm:text-sm truncate">
                          Neural Embed
                        </div>
                        <div className="text-zinc-500 text-[10px] sm:text-xs truncate">
                          transformer_xlm_roberta | batch: 512
                        </div>
                      </div>
                    </div>
                    <div className="text-right shrink-0">
                      <div className="text-white text-sm sm:text-base font-bold">
                        2,847
                      </div>
                      <div className="text-zinc-600 text-xs">0.745s</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                      <div className="w-8 h-8 shrink-0 bg-purple-500/20 rounded flex items-center justify-center text-purple-400 text-xs">
                        S3
                      </div>
                      <div className="min-w-0">
                        <div className="text-white text-xs sm:text-sm truncate">
                          Vector Search
                        </div>
                        <div className="text-zinc-500 text-[10px] sm:text-xs truncate">
                          faiss_ivf | clusters: 4096 | probe: 64
                        </div>
                      </div>
                    </div>
                    <div className="text-right shrink-0">
                      <div className="text-white text-sm sm:text-base font-bold">
                        847
                      </div>
                      <div className="text-zinc-600 text-xs">0.456s</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                      <div className="w-8 h-8 shrink-0 bg-orange-500/20 rounded flex items-center justify-center text-orange-400 text-xs">
                        S4
                      </div>
                      <div className="min-w-0">
                        <div className="text-white text-xs sm:text-sm truncate">
                          XGBoost Rank
                        </div>
                        <div className="text-zinc-500 text-[10px] sm:text-xs truncate">
                          v2.0.3 | trees: 500 | depth: 8
                        </div>
                      </div>
                    </div>
                    <div className="text-right shrink-0">
                      <div className="text-white text-sm sm:text-base font-bold">
                        234
                      </div>
                      <div className="text-zinc-600 text-xs">0.588s</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                      <div className="w-8 h-8 shrink-0 bg-emerald-500/20 rounded flex items-center justify-center text-emerald-400 text-xs">
                        S5
                      </div>
                      <div className="min-w-0">
                        <div className="text-white text-xs sm:text-sm truncate">
                          Ensemble Score
                        </div>
                        <div className="text-zinc-500 text-[10px] sm:text-xs truncate">
                          weighted_blend | confidence: 0.947
                        </div>
                      </div>
                    </div>
                    <div className="text-right shrink-0">
                      <div className="text-emerald-400 text-sm sm:text-base font-bold">
                        23
                      </div>
                      <div className="text-zinc-600 text-xs">0.435s</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Model Output Stats */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div className="bg-black/40 rounded-lg p-4 border border-zinc-800/50">
                  <div className="text-xs text-zinc-500 mb-3">
                    FEATURE_IMPORTANCE:
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-16 text-xs text-zinc-400">
                        skill_vec
                      </div>
                      <div className="flex-1 bg-zinc-800 rounded-full h-1.5">
                        <div
                          className="bg-emerald-400 h-1.5 rounded-full"
                          style={{ width: "87%" }}
                        />
                      </div>
                      <div className="w-8 text-xs text-zinc-500 text-right">
                        0.87
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-16 text-xs text-zinc-400">
                        exp_match
                      </div>
                      <div className="flex-1 bg-zinc-800 rounded-full h-1.5">
                        <div
                          className="bg-blue-400 h-1.5 rounded-full"
                          style={{ width: "73%" }}
                        />
                      </div>
                      <div className="w-8 text-xs text-zinc-500 text-right">
                        0.73
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-16 text-xs text-zinc-400">
                        culture_fit
                      </div>
                      <div className="flex-1 bg-zinc-800 rounded-full h-1.5">
                        <div
                          className="bg-purple-400 h-1.5 rounded-full"
                          style={{ width: "68%" }}
                        />
                      </div>
                      <div className="w-8 text-xs text-zinc-500 text-right">
                        0.68
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-16 text-xs text-zinc-400">
                        growth_pot
                      </div>
                      <div className="flex-1 bg-zinc-800 rounded-full h-1.5">
                        <div
                          className="bg-orange-400 h-1.5 rounded-full"
                          style={{ width: "61%" }}
                        />
                      </div>
                      <div className="w-8 text-xs text-zinc-500 text-right">
                        0.61
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-black/40 rounded-lg p-4 border border-zinc-800/50">
                  <div className="text-xs text-zinc-500 mb-3">
                    SCORE_DISTRIBUTION:
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-zinc-400">score ≥ 90</span>
                      <span className="text-emerald-400 font-bold">
                        12 candidates
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-zinc-400">80 ≤ score {"<"} 90</span>
                      <span className="text-blue-400 font-bold">
                        8 candidates
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-zinc-400">70 ≤ score {"<"} 80</span>
                      <span className="text-orange-400 font-bold">
                        3 candidates
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-xs mt-4 pt-3 border-t border-zinc-800">
                      <span className="text-zinc-400">mean_score</span>
                      <span className="text-white font-bold">87.3</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-zinc-400">std_dev</span>
                      <span className="text-zinc-500 font-bold">8.7</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-zinc-400">confidence</span>
                      <span className="text-emerald-400 font-bold">0.947</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscoverySection;
