import React from "react";
import ScrollReveal from "../ScrollReveal";

interface HeaderTextProps {
  children: React.ReactNode;
  className?: string;
  baseOpacity?: number;
  enableBlur?: boolean;
  baseRotation?: number;
  blurStrength?: number;
  containerClassName?: string;
}

export const HeaderText: React.FC<HeaderTextProps> = ({
  children,
  className = "",
  baseOpacity = 0.2,
  enableBlur = true,
  baseRotation = 2,
  blurStrength = 6,
  containerClassName = "mb-20 text-center",
}) => {
  return (
    <ScrollReveal
      baseOpacity={baseOpacity}
      enableBlur={enableBlur}
      baseRotation={baseRotation}
      blurStrength={blurStrength}
      containerClassName={containerClassName}
      textClassName={`text-4xl md:text-5xl font-medium tracking-tight bg-clip-text bg-gradient-to-br from-white to-zinc-400 text-transparent ${className}`}
    >
      {children}
    </ScrollReveal>
  );
};

// Gradient text span component for use within headers
export const GradientText: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <span className="bg-clip-text bg-linear-to-b from-white to-white/50">
      {children}
    </span>
  );
};
