"use client";

import React, { useRef, useEffect } from "react";

export interface ChromaItem {
  image: string;
  title: string;
  subtitle: string;
  handle?: string;
  location?: string;
  borderColor?: string;
  gradient?: string;
  url?: string;
}

export interface ChromaGridProps {
  items?: ChromaItem[];
  className?: string;
  radius?: number;
  damping?: number;
  fadeOut?: number;
  ease?: string;
}

const ChromaGrid: React.FC<ChromaGridProps> = ({
  items,
  className = "",
  radius = 300,
  damping = 0.45,
  fadeOut = 0.6,
}) => {
  const rootRef = useRef<HTMLDivElement>(null);
  const fadeRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number>(0);

  // Default demo data if none provided
  const demo: ChromaItem[] = [
    {
      image: "https://i.pravatar.cc/300?img=8",
      title: "Alex Rivera",
      subtitle: "Full Stack Developer",
      handle: "@alexrivera",
      borderColor: "#4F46E5",
      gradient: "linear-gradient(145deg,#4F46E5,#000)",
      url: "#",
    },
  ];

  const data = items?.length ? items : demo;

  const setVars = (el: HTMLDivElement, x: number, y: number) => {
    el.style.setProperty("--x", `${x}px`);
    el.style.setProperty("--y", `${y}px`);
  };

  // Damped follow: exponential smoothing toward the target with a time
  // constant of `damping` seconds, matching gsap's eased `gsap.to(pos, ...)`.
  const tick = (time: number) => {
    const el = rootRef.current;
    if (!el) {
      rafRef.current = null;
      return;
    }
    const last = lastTimeRef.current || time;
    const dt = (time - last) / 1000;
    lastTimeRef.current = time;

    const factor = damping > 0 ? 1 - Math.exp(-dt / damping) : 1;
    const p = pos.current;
    const t = target.current;
    p.x += (t.x - p.x) * factor;
    p.y += (t.y - p.y) * factor;
    setVars(el, p.x, p.y);

    if (Math.abs(t.x - p.x) > 0.1 || Math.abs(t.y - p.y) > 0.1) {
      rafRef.current = requestAnimationFrame(tick);
    } else {
      p.x = t.x;
      p.y = t.y;
      setVars(el, p.x, p.y);
      rafRef.current = null;
    }
  };

  const moveTo = (x: number, y: number) => {
    target.current = { x, y };
    if (rafRef.current === null) {
      lastTimeRef.current = 0;
      rafRef.current = requestAnimationFrame(tick);
    }
  };

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const { width, height } = el.getBoundingClientRect();
    pos.current = { x: width / 2, y: height / 2 };
    target.current = { x: width / 2, y: height / 2 };
    el.style.setProperty("--x", `${width / 2}px`);
    el.style.setProperty("--y", `${height / 2}px`);
    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const handleMove = (e: React.PointerEvent) => {
    const el = rootRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    moveTo(e.clientX - r.left, e.clientY - r.top);
    const fade = fadeRef.current;
    if (fade) {
      fade.style.transitionDuration = "0.25s";
      fade.style.opacity = "0";
    }
  };

  const handleLeave = () => {
    const fade = fadeRef.current;
    if (fade) {
      fade.style.transitionDuration = `${fadeOut}s`;
      fade.style.opacity = "1";
    }
  };

  const handleCardClick = (url?: string) => {
    if (url) window.location.href = url;
  };

  const handleCardMove: React.MouseEventHandler<HTMLElement> = (e) => {
    const c = e.currentTarget as HTMLElement;
    const rect = c.getBoundingClientRect();
    c.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
    c.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
  };

  return (
    <div
      ref={rootRef}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
      className={`relative w-full h-full flex flex-wrap justify-center items-center gap-8 p-4 ${className}`}
      style={
        {
          "--r": `${radius}px`,
          "--x": "50%",
          "--y": "50%",
        } as React.CSSProperties
      }
    >
      {data.map((c, i) => (
        <article
          key={i}
          onMouseMove={handleCardMove}
          onClick={() => handleCardClick(c.url)}
          className="group relative flex flex-col w-[320px] h-[420px] rounded-[20px] overflow-hidden border-2 border-zinc-800 transition-colors duration-300 cursor-pointer bg-zinc-900"
          style={
            {
              "--card-border": c.borderColor || "transparent",
              background: c.gradient,
              "--spotlight-color": "rgba(255,255,255,0.3)",
            } as React.CSSProperties
          }
        >
          {/* Spotlight overlay on card */}
          <div
            className="absolute inset-0 pointer-events-none transition-opacity duration-500 z-20 opacity-0 group-hover:opacity-100"
            style={{
              background:
                "radial-gradient(circle at var(--mouse-x) var(--mouse-y), var(--spotlight-color), transparent 70%)",
            }}
          />

          {/* Image Container: Fixed height to ensure uniformity */}
          <div className="relative z-10 w-full h-[280px] p-[10px] box-border">
            <img
              src={c.image}
              alt={c.title}
              loading="lazy"
              className="w-full h-full object-cover rounded-[10px]"
            />
          </div>

          {/* Footer: Takes remaining space */}
          <footer className="relative z-10 flex-1 p-4 text-white font-sans grid grid-cols-[1fr_auto] gap-x-3 content-start">
            <h3 className="m-0 text-[1.1rem] font-semibold leading-tight">
              {c.title}
            </h3>
            {c.handle && (
              <span className="text-[0.8rem] opacity-80 text-right font-mono text-zinc-300 tracking-wider pt-1">
                {c.handle}
              </span>
            )}
            <p className="m-0 text-[0.85rem] opacity-70 col-span-2 mt-2 leading-snug">
              {c.subtitle}
            </p>
          </footer>
        </article>
      ))}

      {/* Global dark filter */}
      <div
        className="absolute inset-0 pointer-events-none z-30"
        style={{
          backdropFilter: "grayscale(1) brightness(0.5)",
          WebkitBackdropFilter: "grayscale(1) brightness(0.5)",
          background: "rgba(0,0,0,0.001)",
          maskImage:
            "radial-gradient(circle var(--r) at var(--x) var(--y),transparent 0%,transparent 15%,rgba(0,0,0,0.10) 30%,rgba(0,0,0,0.22)45%,rgba(0,0,0,0.35)60%,rgba(0,0,0,0.50)75%,rgba(0,0,0,0.68)88%,white 100%)",
          WebkitMaskImage:
            "radial-gradient(circle var(--r) at var(--x) var(--y),transparent 0%,transparent 15%,rgba(0,0,0,0.10) 30%,rgba(0,0,0,0.22)45%,rgba(0,0,0,0.35)60%,rgba(0,0,0,0.50)75%,rgba(0,0,0,0.68)88%,white 100%)",
        }}
      />

      {/* Fade overlay for idle state */}
      <div
        ref={fadeRef}
        className="absolute inset-0 pointer-events-none transition-opacity duration-[250ms] z-40"
        style={{
          backdropFilter: "grayscale(1) brightness(0.5)",
          WebkitBackdropFilter: "grayscale(1) brightness(0.5)",
          background: "rgba(0,0,0,0.001)",
          maskImage:
            "radial-gradient(circle var(--r) at var(--x) var(--y),white 0%,white 15%,rgba(255,255,255,0.90)30%,rgba(255,255,255,0.78)45%,rgba(255,255,255,0.65)60%,rgba(255,255,255,0.50)75%,rgba(255,255,255,0.32)88%,transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(circle var(--r) at var(--x) var(--y),white 0%,white 15%,rgba(255,255,255,0.90)30%,rgba(255,255,255,0.78)45%,rgba(255,255,255,0.65)60%,rgba(255,255,255,0.50)75%,rgba(255,255,255,0.32)88%,transparent 100%)",
          opacity: 1,
        }}
      />
    </div>
  );
};

export default ChromaGrid;
