import type React from "react";

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  name:
    | "arrow"
    | "check"
    | "brain"
    | "users"
    | "userCheck"
    | "clock"
    | "target"
    | "trending"
    | "search"
    | "plus"
    | "menu";
  size?: number;
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  icon?: boolean;
  children: React.ReactNode;
}

export interface NewPillProps {
  children: React.ReactNode;
}

export interface EyebrowPillProps {
  children: React.ReactNode;
  accent?: "blue" | "purple" | "emerald";
}

export interface EyebrowProps {
  children: React.ReactNode;
}

export interface MonoTagProps {
  children: React.ReactNode;
  tone?: "neutral" | "danger" | "warn";
}

export interface RoleCycleItem {
  label: string;
  industry: string;
  artifact: string;
  artifactKind: "code" | "doc";
  naira: string;
  you: string;
  flaws: ["danger" | "warn", string, string][];
  body: React.ReactNode;
}

export interface NairaSessionPreviewProps {
  role: RoleCycleItem;
  idx: number;
  total: number;
}

export interface IndustryCategory {
  tag: string;
  name: string;
  roles: string;
}

export interface ModuleData {
  tag: string;
  code: string;
  title: string;
  body: string;
  tests: string[];
  examples: [string, string][];
}

export interface ScoringDimension {
  name: string;
  weight: number;
  score: number;
  rubric: string;
  hard: boolean;
}
