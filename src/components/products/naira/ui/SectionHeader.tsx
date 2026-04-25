"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  badge?: string;
  align?: "left" | "center";
  className?: string;
}

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function SectionHeader({
  title,
  subtitle,
  badge,
  align = "left",
  className,
}: SectionHeaderProps) {
  const isCenter = align === "center";

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ staggerChildren: 0.1 }}
      className={cn(
        "flex flex-col gap-2",
        isCenter && "items-center text-center",
        className
      )}
    >
      {badge && (
        <motion.span
          variants={fadeUp}
          transition={{ duration: 0.45, ease: "easeOut" as const }}
          className={cn(
            "inline-block uppercase tracking-widest text-xs font-semibold",
            "text-white",
            "[text-shadow:0_0_12px_rgba(20,184,166,0.45)]"
          )}
        >
          {badge}
        </motion.span>
      )}

      <motion.h2
        variants={fadeUp}
        transition={{ duration: 0.45, ease: "easeOut" as const }}
        className="text-3xl md:text-4xl font-bold text-text-primary leading-tight"
      >
        {title}
      </motion.h2>

      {subtitle && (
        <motion.p
          variants={fadeUp}
          transition={{ duration: 0.45, ease: "easeOut" as const }}
          className={cn(
            "mt-1 text-base md:text-lg text-text-secondary leading-relaxed",
            isCenter ? "max-w-2xl mx-auto" : "max-w-2xl"
          )}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
}
