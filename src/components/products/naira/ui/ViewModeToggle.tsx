"use client";

import { cn } from "@/lib/utils";

export type ViewMode = "report" | "table";

interface ViewModeToggleProps {
  value: ViewMode;
  onChange: (mode: ViewMode) => void;
  className?: string;
}

const OPTIONS: { value: ViewMode; label: string }[] = [
  { value: "report", label: "Report View" },
  { value: "table", label: "Table View" },
];

export default function ViewModeToggle({
  value,
  onChange,
  className,
}: ViewModeToggleProps) {
  return (
    <div
      role="group"
      aria-label="View mode selector"
      className={cn(
        "inline-flex gap-1 rounded-xl p-1",
        "bg-bg-inset border border-border-subtle",
        className
      )}
    >
      {OPTIONS.map((opt) => {
        const active = value === opt.value;
        return (
          <button
            key={opt.value}
            type="button"
            aria-pressed={active}
            onClick={() => onChange(opt.value)}
            className={cn(
              "relative rounded-[6px] px-3 py-1.5 text-sm font-medium",
              "transition-all duration-200 ease-out",
              "focus-visible:outline-none focus-visible:ring-2",
              "focus-visible:ring-white focus-visible:ring-inset",
              active
                ? "bg-bg-card text-text-primary shadow-sm"
                : "text-text-muted hover:text-text-secondary"
            )}
          >
            {opt.label}
          </button>
        );
      })}
    </div>
  );
}
