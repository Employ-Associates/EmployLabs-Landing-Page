"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, MotionProps } from "motion/react";

import { cn } from "@/lib/utils";

type CharacterSet = string[] | readonly string[];

interface HyperTextProps extends MotionProps {
  /** The text content to be animated */
  children: string;
  /** Optional className for styling */
  className?: string;
  /** Duration of the animation in milliseconds */
  duration?: number;
  /** Delay before animation starts in milliseconds */
  delay?: number;
  /** Component to render as - defaults to div */
  as?: React.ElementType;
  /** Whether to start animation when element comes into view */
  startOnView?: boolean;
  /** Whether to trigger animation on hover */
  animateOnHover?: boolean;
  /** Custom character set for scramble effect. Defaults to uppercase alphabet */
  characterSet?: CharacterSet;
  /** Callback when animation ends */
  onAnimationEnd?: () => void;
}

const DEFAULT_CHARACTER_SET = Object.freeze(
  "abcdefghijklmnopqrstuvwxyz".split(""),
) as readonly string[];

const getRandomInt = (max: number): number => Math.floor(Math.random() * max);

export function HyperText({
  children,
  className,
  duration = 800,
  delay = 0,
  as: Component = "div",
  startOnView = false,
  animateOnHover = true,
  characterSet = DEFAULT_CHARACTER_SET,
  onAnimationEnd,
  ...props
}: HyperTextProps) {
  const MotionComponent = motion.create(Component, {
    forwardMotionProps: true,
  });

  const [displayText, setDisplayText] = useState<string[]>(() =>
    children.split(""),
  );
  const [isAnimating, setIsAnimating] = useState(false);
  const iterationCount = useRef(0);
  const elementRef = useRef<HTMLElement>(null);
  const [modifiedChildren, setModifiedChildren] = useState<string>(children);

  // Trigger animation when children changes
  useEffect(() => {
    iterationCount.current = 0;
    // Capitalize only the first letter of the word
    const modChildren = children.charAt(0).toUpperCase() + children.slice(1);
    setModifiedChildren(modChildren);
    setDisplayText(modChildren.split(""));
    setIsAnimating(true);
  }, [children]);

  const handleAnimationTrigger = () => {
    if (animateOnHover && !isAnimating) {
      iterationCount.current = 0;
      setIsAnimating(true);
    }
  };

  // Handle animation start based on view or delay
  useEffect(() => {
    if (!startOnView) {
      const startTimeout = setTimeout(() => {
        setIsAnimating(true);
      }, delay);
      return () => clearTimeout(startTimeout);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsAnimating(true);
          }, delay);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "-30% 0px -30% 0px" },
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [delay, startOnView]);

  // Handle scramble animation
  useEffect(() => {
    if (!isAnimating) return;

    const maxIterations = modifiedChildren.length;
    const startTime = performance.now();
    let animationFrameId: number;

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Keep a fractional progress value for diagnostics but compute
      // a concrete reveal count so we always reveal the right number
      // of characters (use Math.ceil so the first character appears
      // quickly and the final character is revealed at completion).
      iterationCount.current = progress * maxIterations;
      const revealCount = Math.ceil(progress * maxIterations);

      setDisplayText((currentText) =>
        currentText.map((letter, index) =>
          letter === " "
            ? letter
            : index < revealCount
              ? modifiedChildren[index]
              : characterSet[getRandomInt(characterSet.length)],
        ),
      );

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setIsAnimating(false);
        if (onAnimationEnd) onAnimationEnd();
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, [modifiedChildren, duration, isAnimating, characterSet]);

  return (
    <MotionComponent
      ref={elementRef}
      className={cn("overflow-hidden py-2 text-4xl font-medium", className)}
      onMouseEnter={handleAnimationTrigger}
      {...props}
    >
      <AnimatePresence>
        {displayText.map((letter, index) => (
          <motion.span
            key={index}
            className={cn("", letter === " " ? "w-3" : "")}
          >
            {letter}
          </motion.span>
        ))}
      </AnimatePresence>
    </MotionComponent>
  );
}
