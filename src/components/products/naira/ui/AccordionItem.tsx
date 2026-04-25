"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Card from "./Card";
import Badge from "./Badge";
import { cn } from "@/lib/utils";

interface AccordionBadge {
  text: string;
  variant: "default" | "teal" | "green" | "amber" | "red" | "indigo" | "purple" | "cyan";
}

interface AccordionItemProps {
  title: string | React.ReactNode;
  children: React.ReactNode;
  defaultOpen?: boolean;
  icon?: React.ReactNode;
  badge?: AccordionBadge;
  className?: string;
}

export default function AccordionItem({
  title,
  children,
  defaultOpen = false,
  icon,
  badge,
  className,
}: AccordionItemProps) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <Card hover={false} className={cn("p-0 overflow-hidden", className)}>
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((prev) => !prev)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setOpen((prev) => !prev);
          }
        }}
        className={cn(
          "w-full flex items-center gap-3 py-4 px-5 text-left",
          "transition-colors duration-150 ease-out",
          "hover:bg-bg-inset focus-visible:outline-none",
          "focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-inset"
        )}
      >
        {icon && (
          <span className="shrink-0 opacity-70 [&>svg]:h-5 [&>svg]:w-5 text-text-secondary">
            {icon}
          </span>
        )}

        <span className="flex-1 text-lg font-semibold text-text-primary leading-snug">
          {title}
        </span>

        {badge && (
          <Badge variant={badge.variant} size="sm">
            {badge.text}
          </Badge>
        )}

        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
          className="shrink-0 text-text-secondary"
        >
          <ChevronDown className="h-5 w-5" aria-hidden="true" />
        </motion.span>
      </button>

      {open && (
        <div className="border-t border-border-subtle" />
      )}

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
            style={{ overflow: "hidden" }}
          >
            <div className="px-5 pb-5 pt-4 text-text-secondary">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Card>
  );
}
