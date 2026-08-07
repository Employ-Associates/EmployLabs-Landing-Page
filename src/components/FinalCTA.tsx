"use client";

import { ArrowRight } from "lucide-react";

/* Cinematic CTA — a single plain, premium still framed by the "window" overlay
   (slow bob), with only the headline + one themed button on top. */

const CTA_VIDEO = "/assets/videos/cta_bg.mp4";

const WINDOW_OVERLAY =
  "https://soft-zoom-63098134.figma.site/_assets/v11/0b4a435b2df2747593c43d7a1c9b4578f7d8d90c.png";

export function FinalCTA() {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-black">
      {/* Background video */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src={CTA_VIDEO}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      />

      {/* Window overlay — full window shown; the solid dark gradient below covers
          its lower edge instead of a hard clip. */}
      <div className="absolute inset-0 z-[1] overflow-hidden pointer-events-none">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={WINDOW_OVERLAY}
          alt=""
          aria-hidden
          className="h-full w-full object-cover"
          style={{ transform: "scale(1.5)" }}
        />
      </div>

      {/* Legibility wash */}
      <div className="absolute inset-0 z-[2] pointer-events-none bg-black/30" />

      {/* Subtle dark fades on top of the window — from the top and the bottom */}
      <div className="absolute inset-x-0 top-0 z-[2] h-1/4 pointer-events-none bg-gradient-to-b from-black/45 via-black/15 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 z-[2] h-2/5 pointer-events-none bg-gradient-to-t from-black via-black/70 to-transparent" />

      {/* Content — title + one button only */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center gap-8 px-6 text-center">
        <h2 className="max-w-5xl font-title leading-tight tracking-tight text-5xl md:text-6xl lg:text-7xl text-white">
          <span className="block text-white/75">Everyone&rsquo;s automating now.</span>
          Don&rsquo;t get left behind.
        </h2>

        <div className="flex flex-col sm:flex-row items-center gap-4">
          <a
            href="https://app.employlabs.ai"
            className="font-sans h-12 flex items-center p-1 rounded-sm bg-white text-zinc-900 border-2 border-white/60 font-medium hover:bg-zinc-100 transition-colors shadow-xl shadow-black/20 group cursor-pointer"
          >
            <span className="flex-1 px-6 text-[16px] text-center whitespace-nowrap">Automate Now</span>
            <div className="bg-zinc-900 w-9 h-9 rounded-sm flex items-center justify-center text-white group-hover:scale-105 transition-transform shrink-0">
              <ArrowRight className="w-5 h-5" />
            </div>
          </a>
          <a
            href="https://app.employlabs.ai"
            className="font-sans h-12 px-6 flex items-center justify-center rounded-sm bg-white/10 backdrop-blur-md border-2 border-white/50 text-white font-medium hover:bg-white/20 transition-colors text-[16px] whitespace-nowrap cursor-pointer"
          >
            Book a Call
          </a>
        </div>
      </div>
    </section>
  );
}
