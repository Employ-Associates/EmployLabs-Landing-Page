"use client";

import { ReactLenis } from "lenis/react";
import type { ReactNode } from "react";

/**
 * Buttery smooth scroll via Lenis (v1.3, real-scroll mode — no transform hijack,
 * so `position: fixed` (hero video) and `position: sticky` (Funnel pin) stay
 * correct, and motion/react's `useScroll` keeps firing on native scroll events).
 *
 * We deliberately do NOT pull in GSAP: `motion/react` already covers our
 * scroll-scrubbed + in-view animation; Lenis only adds the inertia/easing feel.
 */
export function SmoothScroll({ children }: { children: ReactNode }) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.09,
        duration: 1.15,
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 1.4,
      }}
    >
      {children}
    </ReactLenis>
  );
}
