"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

interface WeightBarProps {
  label: string;
  weight: number;
  color?: "teal" | "indigo" | "purple" | "cyan" | "amber" | "green";
  detail?: string;
  className?: string;
}

const barColors: Record<NonNullable<WeightBarProps["color"]>, string> = {
  teal:   "bg-white",
  indigo: "bg-signal-indigo",
  purple: "bg-signal-purple",
  cyan:   "bg-signal-cyan",
  amber:  "bg-signal-amber",
  green:  "bg-signal-green",
};

export default function WeightBar({
  label,
  weight,
  color = "teal",
  detail,
  className,
}: WeightBarProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <div ref={ref} className={cn("space-y-1.5", className)}>
      <div className="flex items-center justify-between gap-2">
        <span className="text-sm font-medium text-text-primary">{label}</span>
        <span className="font-mono-data text-sm font-bold text-white tabular-nums">
          {weight}%
        </span>
      </div>

      <div className="relative h-2 rounded-full overflow-hidden bg-bg-inset">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${weight}%` } : {}}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className={cn("h-full rounded-full", barColors[color])}
        />
      </div>

      {detail && (
        <p className="text-xs text-text-muted leading-relaxed">{detail}</p>
      )}
    </div>
  );
}
