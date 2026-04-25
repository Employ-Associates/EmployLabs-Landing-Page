import {
  Users,
  Target,
  AlertCircle,
  UserCheck,
  Clock,
  Repeat,
  type LucideIcon,
} from "lucide-react";

type MetricVariant = "default" | "teal" | "green" | "purple";

export interface MetricDef {
  value: number;
  suffix?: string;
  label: string;
  Icon: LucideIcon;
  variant: MetricVariant;
  description: string;
  trend?: "up" | "down" | "neutral";
  trendValue?: string;
}

export const metrics: MetricDef[] = [
  {
    value: 52847,
    label: "Candidates Assessed",
    Icon: Users,
    variant: "default",
    description: "Across 200+ companies",
  },
  {
    value: 94,
    suffix: "%",
    label: "Accuracy Rate",
    Icon: Target,
    variant: "green",
    description: "Score predicts strong 6-month performance",
    trend: "up",
    trendValue: "+3% vs 2024",
  },
  {
    value: 3,
    suffix: ".2%",
    label: "False Positive Rate",
    Icon: AlertCircle,
    variant: "default",
    description: "Candidates who scored Pass but underperformed",
    trend: "down",
    trendValue: "−0.4% vs 2024",
  },
  {
    value: 87,
    suffix: "%",
    label: "6-Month Retention",
    Icon: UserCheck,
    variant: "purple",
    description: "Hires who remained at 6 months",
    trend: "up",
    trendValue: "+5% vs industry avg",
  },
  {
    value: 12,
    suffix: " days",
    label: "Avg Time to Hire",
    Icon: Clock,
    variant: "teal",
    description: "From first invite to offer",
    trend: "down",
    trendValue: "−3 days vs legacy process",
  },
  {
    value: 42,
    suffix: ":10",
    label: "Interview-to-Offer Ratio",
    Icon: Repeat,
    variant: "default",
    description: "42 strong candidates per 10 offers extended",
  },
] as const;
