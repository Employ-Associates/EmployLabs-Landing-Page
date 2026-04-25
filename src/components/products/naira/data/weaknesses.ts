import {
  Building2,
  BookOpen,
  Globe,
  Clock,
  Brain,
  Wifi,
  type LucideIcon,
} from "lucide-react";
import type { SignalColor } from "../types";

export interface Weakness {
  id: string;
  Icon: LucideIcon;
  title: string;
  signalColor: Extract<SignalColor, "red" | "amber">;
  problem: string;
  impact: string;
  impactVariant: "red" | "amber";
  mitigation: string;
}

export const weaknesses: Weakness[] = [
  {
    id: "senior_executives",
    Icon: Building2,
    title: "Senior Executive Roles (VP+)",
    signalColor: "red",
    problem:
      "Leadership assessment requires stakeholder interviews, board alignment, and cultural-fit signals our structured rubric doesn't capture.",
    impact: "Accuracy: 78% (vs 94% baseline)",
    impactVariant: "red",
    mitigation:
      "We recommend pairing with executive reference calls and board member interviews before any offer.",
  },
  {
    id: "domain_experts",
    Icon: BookOpen,
    title: "Highly Domain-Specific Roles",
    signalColor: "amber",
    problem:
      "Work samples can't replicate niche industry knowledge — e.g., specialized regulation, proprietary toolchains, or rare research domains.",
    impact: "False negative rate: 12% (vs 6% baseline)",
    impactVariant: "amber",
    mitigation:
      "Add a domain expert panel review for roles requiring specialized credentials or certifications.",
  },
  {
    id: "non_english",
    Icon: Globe,
    title: "Non-Primary Language Speakers",
    signalColor: "amber",
    problem:
      "Communication scoring is normed on English-first speakers. Candidates in a second language score up to 11% lower on rubric clarity even at equivalent technical depth.",
    impact: "Communication score bias: ≈ −11% mean shift",
    impactVariant: "amber",
    mitigation:
      "Request a language-adjusted rubric for roles where English fluency is not a core job requirement.",
  },
  {
    id: "time_pressure",
    Icon: Clock,
    title: "High-Anxiety / Time-Constrained Situations",
    signalColor: "amber",
    problem:
      "Timed work samples disadvantage candidates with test anxiety or ADHD without accommodation. The format may measure speed tolerance more than domain skill.",
    impact: "Performance gap vs untimed: up to 15%",
    impactVariant: "amber",
    mitigation:
      "Candidates may request untimed accommodations. Scores are flagged but not disqualified on this basis.",
  },
  {
    id: "career_changers",
    Icon: Brain,
    title: "Career Changers with Transferable Skills",
    signalColor: "red",
    problem:
      "The benchmarks are built from people already in adjacent roles. Novel career trajectories have no reference class, making score confidence intervals wide.",
    impact: "Score CI expands to ±22% for first-career pivots",
    impactVariant: "red",
    mitigation:
      "Treat scores as directional only and weight the structured interview more heavily for non-traditional candidates.",
  },
  {
    id: "remote_technical",
    Icon: Wifi,
    title: "Poor Remote Assessment Conditions",
    signalColor: "red",
    problem:
      "Connectivity issues, ambient noise, or unfamiliar hardware during live coding sessions introduce noise that can't be distinguished from signal.",
    impact: "Score variance doubles when tech issues are reported",
    impactVariant: "red",
    mitigation:
      "Any session with a reported technical issue is automatically flagged for human review before a decision is made.",
  },
] as const;
