"use client";

import React, { useMemo, useRef, ReactNode, RefObject } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionTemplate,
  MotionValue,
} from "motion/react";

interface ScrollRevealProps {
  children: ReactNode;
  scrollContainerRef?: RefObject<HTMLElement>;
  enableBlur?: boolean;
  baseOpacity?: number;
  baseRotation?: number;
  blurStrength?: number;
  containerClassName?: string;
  textClassName?: string;
  rotationEnd?: string;
  wordAnimationEnd?: string;
}

// gsap used a 0.05s stagger and a 0.5s per-tween duration on a scrubbed
// timeline. We reproduce the same proportional per-word offset by mapping each
// word to a sub-range of the container's scroll progress (0 -> 1).
const STAGGER = 0.05;
const DURATION = 0.5;

interface RevealWordProps {
  children: ReactNode;
  progress: MotionValue<number>;
  start: number;
  end: number;
  baseOpacity: number;
  blurStrength: number;
  enableBlur: boolean;
}

const RevealWord: React.FC<RevealWordProps> = ({
  children,
  progress,
  start,
  end,
  baseOpacity,
  blurStrength,
  enableBlur,
}) => {
  const opacity = useTransform(progress, [start, end], [baseOpacity, 1]);
  const blur = useTransform(progress, [start, end], [blurStrength, 0]);
  const filter = useMotionTemplate`blur(${blur}px)`;

  return (
    <motion.span
      className="inline-block word"
      style={{ opacity, filter: enableBlur ? filter : undefined }}
    >
      {children}
    </motion.span>
  );
};

type Token =
  | { type: "space"; content: string; key: number }
  | {
      type: "word";
      content: string;
      key: number;
      start: number;
      end: number;
    };

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  scrollContainerRef,
  enableBlur = true,
  baseOpacity = 0.1,
  baseRotation = 3,
  blurStrength = 4,
  containerClassName = "",
  textClassName = "",
}) => {
  const containerRef = useRef<HTMLHeadingElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    container: scrollContainerRef,
    offset: ["start end", "center center"],
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [baseRotation, 0]);

  const tokens = useMemo<Token[]>(() => {
    const text = typeof children === "string" ? children : "";
    const parts = text.split(/(\s+)/);
    const wordCount = parts.filter((p) => !p.match(/^\s+$/)).length;
    const total = Math.max((wordCount - 1) * STAGGER + DURATION, DURATION);

    let wordIndex = 0;
    return parts.map((part, index): Token => {
      if (part.match(/^\s+$/)) {
        return { type: "space", content: part, key: index };
      }
      const start = (wordIndex * STAGGER) / total;
      const end = Math.min((wordIndex * STAGGER + DURATION) / total, 1);
      wordIndex += 1;
      return { type: "word", content: part, key: index, start, end };
    });
  }, [children]);

  return (
    <motion.h2
      ref={containerRef}
      className={`my-5 ${containerClassName}`}
      style={{ transformOrigin: "0% 50%", rotate }}
    >
      <p className={`leading-tight ${textClassName}`}>
        {tokens.map((token) =>
          token.type === "space" ? (
            token.content
          ) : (
            <RevealWord
              key={token.key}
              progress={scrollYProgress}
              start={token.start}
              end={token.end}
              baseOpacity={baseOpacity}
              blurStrength={blurStrength}
              enableBlur={enableBlur}
            >
              {token.content}
            </RevealWord>
          ),
        )}
      </p>
    </motion.h2>
  );
};

export default ScrollReveal;
