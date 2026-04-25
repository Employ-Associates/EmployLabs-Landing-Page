import type { SignalWeight } from "../types";

export const signalWeights: SignalWeight[] = [
  {
    label: "Technical Depth",
    weight: 35,
    color: "teal",
    detail: "From work sample + technical interview questions",
  },
  {
    label: "Structured Thinking",
    weight: 25,
    color: "indigo",
    detail: "Problem decomposition, edge case handling, trade-off analysis",
  },
  {
    label: "Communication Quality",
    weight: 20,
    color: "purple",
    detail: "Clarity, conciseness, ability to explain complex concepts",
  },
  {
    label: "Behavioral Alignment",
    weight: 15,
    color: "cyan",
    detail: "Culture fit, collaboration signals, growth mindset indicators",
  },
  {
    label: "Work Sample Output",
    weight: 5,
    color: "amber",
    detail: "Code quality, completeness, attention to detail",
  },
] as const;
