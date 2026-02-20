"use client";

import React, { useState } from "react";
import {
  Search,
  Filter,
  MapPin,
  Briefcase,
  GraduationCap,
  Award,
  Users,
} from "lucide-react";
import { Button } from "../Button";

interface SearchFilters {
  query: string;
  location: string;
  role: string;
  experience: string;
  skills: string[];
  education: string;
}

interface Candidate {
  id: string;
  name: string;
  title: string;
  company: string;
  location: string;
  experience: string;
  education: string;
  skills: string[];
  matchScore: number;
  avatar?: string;
}

const mockCandidates: Candidate[] = [
  {
    id: "1",
    name: "Sarah Chen",
    title: "Senior Software Engineer",
    company: "TechCorp Inc.",
    location: "San Francisco, CA",
    experience: "8 years",
    education: "MS Computer Science, Stanford",
    skills: ["React", "Node.js", "Python", "AWS", "Machine Learning"],
    matchScore: 95,
  },
  {
    id: "2",
    name: "Marcus Rodriguez",
    title: "Product Manager",
    company: "InnovateLabs",
    location: "Austin, TX",
    experience: "6 years",
    education: "MBA, Harvard Business School",
    skills: ["Product Strategy", "Agile", "Data Analysis", "Leadership"],
    matchScore: 88,
  },
  {
    id: "3",
    name: "Dr. Emily Watson",
    title: "Data Scientist",
    company: "AI Solutions Ltd",
    location: "Boston, MA",
    experience: "10 years",
    education: "PhD Statistics, MIT",
    skills: ["Python", "R", "TensorFlow", "Big Data", "Statistics"],
    matchScore: 92,
  },
];

export const SearchInterface: React.FC = () => {
  const [filters, setFilters] = useState<SearchFilters>({
    query: "",
    location: "",
    role: "",
    experience: "",
    skills: [],
    education: "",
  });
  const [isSearching, setIsSearching] = useState(false);
  const [results, setResults] = useState<Candidate[]>([]);
  const [showFilters, setShowFilters] = useState(false);

  const handleSearch = async () => {
    setIsSearching(true);
    // Simulate API call
    setTimeout(() => {
      setResults(mockCandidates);
      setIsSearching(false);
    }, 1500);
  };

  const updateFilter = (key: keyof SearchFilters, value: any) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      {/* Search Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-medium text-white mb-4">
          People Search Engine
        </h1>
        <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
          Discover exceptional talent with AI-powered precision. Search across
          millions of profiles with advanced filtering and matching algorithms.
        </p>
      </div>

      {/* Search Bar */}
      <div className="bg-zinc-900/50 backdrop-blur-xl rounded-2xl border border-zinc-800 p-8 mb-8">
        <div className="flex flex-col lg:flex-row gap-4 mb-6">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-zinc-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search by name, skills, company, or keywords..."
              value={filters.query}
              onChange={(e) => updateFilter("query", e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-zinc-800/50 border border-zinc-700 rounded-xl text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div className="flex gap-4">
            <div className="relative">
              <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-zinc-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Location"
                value={filters.location}
                onChange={(e) => updateFilter("location", e.target.value)}
                className="w-48 pl-12 pr-4 py-4 bg-zinc-800/50 border border-zinc-700 rounded-xl text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <Button
              variant="outline"
              onClick={() => setShowFilters(!showFilters)}
              className="px-6 py-4 border-zinc-600 text-zinc-300 hover:bg-zinc-800/50"
            >
              <Filter className="w-5 h-5 mr-2" />
              Filters
            </Button>
            <Button
              variant="primary"
              onClick={handleSearch}
              disabled={isSearching}
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white"
            >
              {isSearching ? "Searching..." : "Search"}
            </Button>
          </div>
        </div>

        {/* Advanced Filters */}
        {showFilters && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-zinc-700">
            <div>
              <label className="block text-sm font-medium text-zinc-300 mb-2">
                Role/Title
              </label>
              <select
                value={filters.role}
                onChange={(e) => updateFilter("role", e.target.value)}
                className="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Any Role</option>
                <option value="engineer">Engineer</option>
                <option value="manager">Manager</option>
                <option value="analyst">Analyst</option>
                <option value="scientist">Data Scientist</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-zinc-300 mb-2">
                Experience Level
              </label>
              <select
                value={filters.experience}
                onChange={(e) => updateFilter("experience", e.target.value)}
                className="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Any Experience</option>
                <option value="entry">Entry Level (0-2 years)</option>
                <option value="mid">Mid Level (3-5 years)</option>
                <option value="senior">Senior Level (6-10 years)</option>
                <option value="executive">Executive (10+ years)</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-zinc-300 mb-2">
                Education
              </label>
              <select
                value={filters.education}
                onChange={(e) => updateFilter("education", e.target.value)}
                className="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Any Education</option>
                <option value="bachelors">Bachelor's Degree</option>
                <option value="masters">Master's Degree</option>
                <option value="phd">PhD</option>
              </select>
            </div>
          </div>
        )}
      </div>

      {/* Results */}
      {isSearching && (
        <div className="text-center py-16">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
          <p className="text-zinc-400 mt-4">
            Searching through millions of profiles...
          </p>
        </div>
      )}

      {results.length > 0 && !isSearching && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-medium text-white">
              Found {results.length} candidates
            </h2>
            <div className="flex items-center gap-4 text-sm text-zinc-400">
              <span>Sort by:</span>
              <select className="bg-zinc-800 border border-zinc-700 rounded px-3 py-1 text-white">
                <option>Match Score</option>
                <option>Experience</option>
                <option>Location</option>
              </select>
            </div>
          </div>

          {results.map((candidate) => (
            <div
              key={candidate.id}
              className="bg-zinc-900/50 backdrop-blur-xl rounded-xl border border-zinc-800 p-6 hover:border-zinc-700 transition-colors"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-linear-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold text-xl">
                    {candidate.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-medium text-white">
                        {candidate.name}
                      </h3>
                      <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm font-medium">
                        {candidate.matchScore}% Match
                      </span>
                    </div>
                    <p className="text-zinc-300 mb-2">
                      {candidate.title} at {candidate.company}
                    </p>
                    <div className="flex items-center gap-6 text-sm text-zinc-400 mb-4">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {candidate.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Briefcase className="w-4 h-4" />
                        {candidate.experience}
                      </div>
                      <div className="flex items-center gap-1">
                        <GraduationCap className="w-4 h-4" />
                        {candidate.education}
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {candidate.skills.slice(0, 5).map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-zinc-800 text-zinc-300 rounded-full text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                      {candidate.skills.length > 5 && (
                        <span className="px-3 py-1 bg-zinc-800 text-zinc-300 rounded-full text-sm">
                          +{candidate.skills.length - 5} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-zinc-600 text-zinc-300 hover:bg-zinc-800"
                  >
                    View Profile
                  </Button>
                  <Button
                    variant="primary"
                    size="sm"
                    className="bg-blue-600 hover:bg-blue-700"
                  >
                    Contact
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {results.length === 0 && !isSearching && filters.query && (
        <div className="text-center py-16">
          <Users className="w-16 h-16 text-zinc-600 mx-auto mb-4" />
          <h3 className="text-xl font-medium text-white mb-2">
            No candidates found
          </h3>
          <p className="text-zinc-400">
            Try adjusting your search criteria or filters
          </p>
        </div>
      )}
    </div>
  );
};
