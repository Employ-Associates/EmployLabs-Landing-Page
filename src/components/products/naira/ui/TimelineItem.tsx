"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface TimelineItemProps {
  date: string;
  title: string;
  description: string;
  color: "teal" | "green" | "indigo" | "purple" | "amber" | "cyan";
  isLast?: boolean;
  className?: string;
}

const dotBorder: Record<TimelineItemProps["color"], string> = {
  teal:   "border-white",
  green:  "border-signal-green",
  indigo: "border-signal-indigo",
  purple: "border-signal-purple",
  amber:  "border-signal-amber",
  cyan:   "border-signal-cyan",
};

const pingColor: Record<TimelineItemProps["color"], string> = {
  teal:   "bg-white",
  green:  "bg-signal-green",
  indigo: "bg-signal-indigo",
  purple: "bg-signal-purple",
  amber:  "bg-signal-amber",
  cyan:   "bg-signal-cyan",
};

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" as const } },
};

export default function TimelineItem({
  date,
  title,
  description,
  color,
  isLast = false,
  className,
}: TimelineItemProps) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      className={cn("flex gap-5", className)}
    >
      <div className="flex flex-col items-center">
        <div className="relative flex items-center justify-center mt-1">
          <span
            className={cn(
              "absolute inline-flex h-5 w-5 rounded-full opacity-30 animate-ping",
              pingColor[color]
            )}
            style={{ animationDuration: "2s" }}
          />
          <span
            className={cn(
              "relative h-2.5 w-2.5 rounded-full border-2 bg-bg-root",
              dotBorder[color]
            )}
          />
        </div>

        {!isLast && (
          <div className="mt-1 flex-1 w-px bg-border-subtle" />
        )}
      </div>

      <div className={cn("pb-8 min-w-0", isLast && "pb-0")}>
        <p className="font-mono-data text-xs text-text-muted uppercase tracking-wide">
          {date}
        </p>
        <h3 className="mt-1 text-lg font-semibold text-text-primary leading-snug">
          {title}
        </h3>
        <p className="mt-2 text-sm text-text-secondary leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
}
