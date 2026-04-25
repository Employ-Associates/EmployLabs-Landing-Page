import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "teal" | "green" | "amber" | "red" | "indigo" | "purple" | "cyan";
  size?: "sm" | "md" | "lg";
  className?: string;
}

const variantClasses: Record<NonNullable<BadgeProps["variant"]>, string> = {
  default: "bg-zinc-900 border-zinc-700 text-white",
  teal:    "bg-zinc-900 border-zinc-700 text-white",
  green:   "bg-[rgba(16,185,129,0.10)] border-signal-green text-signal-green",
  amber:   "bg-[rgba(245,158,11,0.10)] border-signal-amber text-signal-amber",
  red:     "bg-[rgba(239,68,68,0.10)] border-signal-red text-signal-red",
  indigo:  "bg-[rgba(99,102,241,0.10)] border-signal-indigo text-signal-indigo",
  purple:  "bg-[rgba(167,139,250,0.10)] border-signal-purple text-signal-purple",
  cyan:    "bg-[rgba(34,211,238,0.10)] border-signal-cyan text-signal-cyan",
};

const sizeClasses: Record<NonNullable<BadgeProps["size"]>, string> = {
  sm: "px-2 py-0.5 text-xs",
  md: "px-2.5 py-1 text-sm",
  lg: "px-3 py-1.5 text-base",
};

export default function Badge({
  children,
  variant = "default",
  size = "md",
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center border font-mono-data font-medium",
        "uppercase tracking-wide rounded-[6px]",
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
    >
      {children}
    </span>
  );
}
