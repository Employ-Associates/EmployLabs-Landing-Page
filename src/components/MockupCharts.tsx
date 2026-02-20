"use client";

import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

const skillData = [
  { subject: "Coding", A: 120, fullMark: 150 },
  { subject: "Sys Design", A: 98, fullMark: 150 },
  { subject: "Comm", A: 86, fullMark: 150 },
  { subject: "Leadership", A: 99, fullMark: 150 },
  { subject: "Problem Solving", A: 85, fullMark: 150 },
  { subject: "Culture", A: 65, fullMark: 150 },
];

export const CandidateRadar: React.FC = () => {
  return (
    <div className="w-full h-full min-h-[250px] bg-zinc-900 rounded-lg p-4 border border-zinc-800">
      <h4 className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-2 text-center">
        Skill Calibration
      </h4>
      <div className="w-full h-[200px]">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart cx="50%" cy="50%" outerRadius="70%" data={skillData}>
            <PolarGrid stroke="#3f3f46" />
            <PolarAngleAxis
              dataKey="subject"
              tick={{ fill: "#a1a1aa", fontSize: 10 }}
            />
            <Radar
              name="Candidate"
              dataKey="A"
              stroke="#2dd4bf"
              strokeWidth={2}
              fill="#2dd4bf"
              fillOpacity={0.2}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

const interviewData = [
  { name: "Intro", score: 85 },
  { name: "Tech 1", score: 92 },
  { name: "Tech 2", score: 88 },
  { name: "Sys Des", score: 76 },
  { name: "Behav", score: 95 },
];

export const InterviewScoreChart: React.FC<{ theme?: "dark" | "light" }> = ({
  theme = "dark",
}) => {
  const isDark = theme === "dark";
  const bgColor = isDark ? "bg-zinc-900" : "bg-white";
  const borderColor = isDark ? "border-zinc-800" : "border-neutral-100";
  const textColor = isDark ? "fill-zinc-400" : "fill-neutral-500";
  const barColor = isDark ? "#fff" : "#000";
  const tooltipBg = isDark ? "#18181b" : "#ffffff";
  const tooltipBorder = isDark ? "#3f3f46" : "#e5e5e5";
  const tooltipText = isDark ? "#fff" : "#000";

  return (
    <div
      className={`w-full h-full min-h-[200px] ${bgColor} rounded-lg p-4 border ${borderColor}`}
    >
      <h4 className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-4">
        Interview Scores
      </h4>
      <ResponsiveContainer width="100%" height={180}>
        <BarChart
          data={interviewData}
          layout="vertical"
          margin={{ top: 0, right: 30, left: 20, bottom: 5 }}
        >
          <XAxis type="number" hide domain={[0, 100]} />
          <YAxis
            dataKey="name"
            type="category"
            tick={{ fontSize: 10, fill: isDark ? "#a1a1aa" : "#737373" }}
            width={50}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip
            cursor={{ fill: isDark ? "#27272a" : "#f5f5f5" }}
            contentStyle={{
              backgroundColor: tooltipBg,
              borderRadius: "4px",
              border: `1px solid ${tooltipBorder}`,
              color: tooltipText,
              fontSize: "12px",
            }}
          />
          <Bar
            dataKey="score"
            fill={barColor}
            radius={[0, 4, 4, 0]}
            barSize={12}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

const throughputData = [
  { day: "Mon", candidates: 45 },
  { day: "Tue", candidates: 52 },
  { day: "Wed", candidates: 38 },
  { day: "Thu", candidates: 65 },
  { day: "Fri", candidates: 48 },
];

export const ThroughputChart: React.FC = () => {
  return (
    <div className="w-full h-full min-h-[200px] bg-zinc-900 rounded-lg p-4 border border-zinc-800">
      <h4 className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-4">
        Candidates Processed
      </h4>
      <ResponsiveContainer width="100%" height={180}>
        <BarChart data={throughputData}>
          <CartesianGrid
            strokeDasharray="3 3"
            vertical={false}
            stroke="#27272a"
          />
          <XAxis
            dataKey="day"
            tick={{ fontSize: 10, fill: "#71717a" }}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip
            cursor={{ fill: "#27272a" }}
            contentStyle={{
              backgroundColor: "#18181b",
              borderRadius: "4px",
              border: "1px solid #3f3f46",
              color: "#fff",
            }}
          />
          <Bar
            dataKey="candidates"
            fill="#2dd4bf"
            radius={[4, 4, 0, 0]}
            barSize={20}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
