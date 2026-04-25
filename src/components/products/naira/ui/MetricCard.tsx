"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";
import Card from "./Card";
import { useCountUp } from "../hooks/useCountUp";
import { cn } from "@/lib/utils";

interface MetricCardProps {
  value: number;
  label: string;
  suffix?: string;
  icon?: React.ReactNode;
  trend?: "up" | "down" | "neutral";
  trendValue?: string;
  description?: string;
  variant?: "default" | "teal" | "green" | "purple";
  className?: string;
}

const variantConfig: Record<
  NonNullable<MetricCardProps["variant"]>,
  { value: string; icon: string }
> = {
  default: { value: "text-text-primary",  icon: "text-text-secondary" },
  teal:    { value: "text-white",       icon: "text-white" },
  green:   { value: "text-signal-green",   icon: "text-signal-green" },
  purple:  { value: "text-signal-purple",  icon: "text-signal-purple" },
};

const trendConfig = {
  up: {
    Icon: TrendingUp,
    classes: "bg-[rgba(16,185,129,0.12)] text-signal-green",
  },
  down: {
    Icon: TrendingDown,
    classes: "bg-[rgba(239,68,68,0.12)] text-signal-red",
  },
  neutral: {
    Icon: Minus,
    classes: "bg-bg-inset text-text-muted",
  },
};

export default function MetricCard({
  value,
  label,
  suffix,
  icon,
  trend,
  trendValue,
  description,
  variant = "default",
  className,
}: MetricCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const count = useCountUp({ end: value, duration: 1500, enabled: isInView });

  const { value: valueColor, icon: iconColor } = variantConfig[variant];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.45, ease: "easeOut" as const }}
      className={className}
    >
      <Card>
        <div className="flex items-center justify-between gap-2 mb-3">
          <p className="text-sm text-text-muted uppercase tracking-wide font-medium">
            {label}
          </p>
          {icon && (
            <span className={cn("opacity-80 [&>svg]:h-6 [&>svg]:w-6", iconColor)}>
              {icon}
            </span>
          )}
        </div>

        <div className="flex items-baseline gap-1">
          <span
            className={cn(
              "font-mono-data font-bold text-4xl md:text-5xl tabular-nums leading-none",
              valueColor
            )}
          >
            {count.toLocaleString()}
          </span>
          {suffix && (
            <span className="font-mono-data text-2xl text-text-secondary leading-none">
              {suffix}
            </span>
          )}
        </div>

        {trend && trendValue && (
          <div className="mt-3">
            {(() => {
              const { Icon, classes } = trendConfig[trend];
              return (
                <span
                  className={cn(
                    "inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs font-medium",
                    classes
                  )}
                >
                  <Icon className="h-3.5 w-3.5" />
                  {trendValue}
                </span>
              );
            })()}
          </div>
        )}

        {description && (
          <p className="mt-2 text-sm text-text-secondary leading-relaxed">
            {description}
          </p>
        )}
      </Card>
    </motion.div>
  );
}
