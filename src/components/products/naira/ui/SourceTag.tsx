"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SourceTagProps {
  source: string;
  icon?: React.ReactNode;
  variant?: "default" | "subtle";
  className?: string;
}

export default function SourceTag({
  source,
  icon,
  variant = "default",
  className,
}: SourceTagProps) {
  return (
    <motion.span
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.15, ease: "easeOut" as const }}
      className={cn(
        "inline-flex items-center gap-1.5 rounded-[6px] border px-2.5 py-1",
        "font-mono-data text-xs font-medium text-text-muted",
        "transition-colors duration-150 ease-out",
        "cursor-default select-none",
        variant === "default" &&
          "bg-bg-inset border-border-subtle hover:border-border-strong",
        variant === "subtle" &&
          "bg-transparent border-border-subtle opacity-60 hover:border-border-strong hover:opacity-80",
        className
      )}
    >
      {icon && (
        <span className="opacity-70 [&>svg]:h-3.5 [&>svg]:w-3.5">
          {icon}
        </span>
      )}
      {source}
    </motion.span>
  );
}
