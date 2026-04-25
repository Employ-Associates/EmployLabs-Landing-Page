import type { LucideIcon } from "lucide-react";

/* ─── View Mode ──────────────────────────────────────────────────────────── */

export type ViewMode = "plain" | "full";

/* ─── Color Tokens ───────────────────────────────────────────────────────── */

export type SignalColor =
  | "teal"
  | "green"
  | "amber"
  | "red"
  | "indigo"
  | "purple"
  | "cyan";

/* ─── Badge ──────────────────────────────────────────────────────────────── */

export type BadgeVariant =
  | "default"
  | "teal"
  | "green"
  | "amber"
  | "red"
  | "indigo"
  | "purple"
  | "cyan";

/* ─── Metric ─────────────────────────────────────────────────────────────── */

export interface Metric {
  value: number;
  label: string;
  suffix?: string;
  icon?: LucideIcon;
  trend?: "up" | "down" | "neutral";
  trendValue?: string;
  description?: string;
  variant?: SignalColor;
}

/* ─── Timeline ───────────────────────────────────────────────────────────── */

export interface TimelineEvent {
  date: string;
  title: string;
  description: string;
  color: SignalColor;
}

/* ─── FAQ ────────────────────────────────────────────────────────────────── */

export interface FAQItem {
  id: string;
  question: string;
  icon?: LucideIcon;
  answer: {
    plain: string;
    full: string;
  };
}

/* ─── Signal Weight ──────────────────────────────────────────────────────── */

export interface SignalWeight {
  label: string;
  weight: number;
  color: SignalColor;
  detail?: string;
}
