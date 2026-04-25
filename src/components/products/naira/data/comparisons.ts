import {
  CheckCircle,
  TrendingUp,
  TrendingDown,
  Minus,
  type LucideIcon,
} from "lucide-react";

export interface ColValue {
  score: number;
  note: string;
  Icon: LucideIcon;
}

export interface Comparison {
  dimension: string;
  ai: ColValue;
  human: ColValue;
  combined: ColValue;
}

export const comparisons: Comparison[] = [
  {
    dimension: "Consistency",
    ai:       { score: 95, note: "Same rubric every time",          Icon: CheckCircle },
    human:    { score: 72, note: "Varies by interviewer mood",      Icon: TrendingDown },
    combined: { score: 98, note: "Calibrated by human oversight",   Icon: TrendingUp },
  },
  {
    dimension: "Speed",
    ai:       { score: 97, note: "Instant parallel processing",     Icon: TrendingUp },
    human:    { score: 55, note: "Limited by scheduling bandwidth", Icon: TrendingDown },
    combined: { score: 92, note: "AI handles screening; humans decide", Icon: TrendingUp },
  },
  {
    dimension: "Emotional Intelligence",
    ai:       { score: 48, note: "Proxy signals only",              Icon: TrendingDown },
    human:    { score: 91, note: "Reads tone, body language, context", Icon: CheckCircle },
    combined: { score: 88, note: "Human EQ informs final read",    Icon: TrendingUp },
  },
  {
    dimension: "Pattern Recognition",
    ai:       { score: 96, note: "Trained on 50k+ assessments",    Icon: TrendingUp },
    human:    { score: 74, note: "Subject to cognitive shortcuts",  Icon: Minus },
    combined: { score: 97, note: "AI flags; human interprets",     Icon: TrendingUp },
  },
  {
    dimension: "Edge Case Judgment",
    ai:       { score: 61, note: "Weak on novel situations",        Icon: TrendingDown },
    human:    { score: 88, note: "Strong contextual reasoning",     Icon: CheckCircle },
    combined: { score: 91, note: "Human judgment on AI edge flags", Icon: TrendingUp },
  },
  {
    dimension: "Cultural Nuance",
    ai:       { score: 44, note: "Limited cultural context model",  Icon: TrendingDown },
    human:    { score: 83, note: "Deep contextual awareness",       Icon: CheckCircle },
    combined: { score: 82, note: "Human-weighted for nuance",       Icon: TrendingUp },
  },
  {
    dimension: "Scalability",
    ai:       { score: 99, note: "1 to 10,000 simultaneously",     Icon: TrendingUp },
    human:    { score: 38, note: "Bottleneck at volume",            Icon: TrendingDown },
    combined: { score: 94, note: "AI screens; humans triage top %", Icon: TrendingUp },
  },
  {
    dimension: "Bias Detection",
    ai:       { score: 87, note: "Consistent blind-rubric scoring", Icon: TrendingUp },
    human:    { score: 62, note: "Susceptible to affinity bias",    Icon: TrendingDown },
    combined: { score: 93, note: "Audited by both layers",          Icon: TrendingUp },
  },
];
