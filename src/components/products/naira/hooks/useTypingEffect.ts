import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

interface UseTypingEffectOptions {
  text: string;
  startDelay?: number;
  charDelay?: number;
  enabled?: boolean;
}

interface UseTypingEffectResult {
  displayed: string;
  isDone: boolean;
  isTyping: boolean;
}

export function useTypingEffect({
  text,
  startDelay = 500,
  charDelay = 65,
  enabled = true,
}: UseTypingEffectOptions): UseTypingEffectResult {
  const shouldReduceMotion = useReducedMotion();
  const [displayed, setDisplayed] = useState("");
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    if (!enabled) return;

    if (shouldReduceMotion) {
      setDisplayed(text);
      setIsDone(true);
      return;
    }

    setDisplayed("");
    setIsDone(false);

    const timers: ReturnType<typeof setTimeout>[] = [];
    let cumulative = startDelay;

    text.split("").forEach((_, idx) => {
      const jitter = (Math.random() - 0.5) * 30;
      cumulative += charDelay + jitter;

      timers.push(
        setTimeout(() => {
          setDisplayed(text.slice(0, idx + 1));
          if (idx === text.length - 1) setIsDone(true);
        }, cumulative)
      );
    });

    return () => timers.forEach(clearTimeout);
  }, [text, startDelay, charDelay, enabled, shouldReduceMotion]);

  return { displayed, isDone, isTyping: !isDone };
}
