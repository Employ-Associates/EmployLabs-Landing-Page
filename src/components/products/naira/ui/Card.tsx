"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  variant?: "default" | "signal";
  signalColor?: "green" | "amber" | "red" | "indigo";
}

const signalBorderColors: Record<NonNullable<CardProps["signalColor"]>, string> = {
  green:  "border-l-signal-green",
  amber:  "border-l-signal-amber",
  red:    "border-l-signal-red",
  indigo: "border-l-signal-indigo",
};

export default function Card({
  children,
  className,
  hover = true,
  variant = "default",
  signalColor = "green",
}: CardProps) {
  const isSignal = variant === "signal";

  return (
    <motion.div
      whileHover={
        hover
          ? {
              y: -2,
            }
          : undefined
      }
      transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
      className={cn(
        "bg-zinc-900 rounded-lg",
        "border border-zinc-800",
        "p-4 md:p-6",
        isSignal && [
          "border-l-[3px] pl-5 md:pl-5",
          signalBorderColors[signalColor],
        ],
        className
      )}
    >
      {children}
    </motion.div>
  );
}
