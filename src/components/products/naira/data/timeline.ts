import type { TimelineEvent } from "../types";

export const timelineEvents: TimelineEvent[] = [
  {
    date: "Day 0",
    title: "Application Received",
    description:
      "Candidate completes initial profile and work history. System assigns structured interview questions based on role requirements and seniority level. Scheduling link sent within 15 minutes.",
    color: "teal",
  },
  {
    date: "Day 1",
    title: "Initial Screen (30 min)",
    description:
      "Phone screen with trained assessor covering behavioral questions and role alignment. Conversation is recorded, transcribed, and scored against rubric within 2 hours. Pass rate: 68%.",
    color: "green",
  },
  {
    date: "Day 2",
    title: "Full Assessment (3 hours)",
    description:
      "Technical interview (60 min) + work sample (90 min) + written communication component (30 min). All sessions recorded and transcribed. Assessors complete scoring same day.",
    color: "indigo",
  },
  {
    date: "Day 3",
    title: "Report Delivered",
    description:
      "Hiring manager receives complete scorecard with dimension breakdowns, confidence intervals, interview highlights, and hiring recommendation. Candidate receives feedback report simultaneously.",
    color: "purple",
  },
] as const;
