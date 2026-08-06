"use client";

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
// const heroImg = "/assets/images/custom_hero_bg.png";
const heroVideo = "/assets/videos/hero_bg.mp4";

const companies = [
  {
    name: "Stripe",
    logo: (
      <svg
        className="w-8 h-8 text-zinc-500 group-hover:text-accent transition-colors"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13.9 11.2c-1.3-.4-2-.7-2-1.3 0-.5.5-.8 1.4-.8 1 0 1.9.3 2.5.7l.8-2c-.8-.4-1.9-.7-3.1-.7-2.3 0-3.9 1.1-3.9 3.2 0 1.9 1.6 2.6 3.4 3.1 1.5.4 2.1.8 2.1 1.4 0 .6-.6.9-1.6.9-1.2 0-2.4-.4-3.1-.9l-.8 2c1 .6 2.4.9 3.7.9 2.4 0 4.1-1.1 4.1-3.3.1-2.2-1.5-2.7-3.6-3.3z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    name: "Vercel",
    logo: (
      <svg
        className="w-9 h-8 text-zinc-500 group-hover:text-accent transition-colors"
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M24 22.5H0L12 1.5L24 22.5Z" />
      </svg>
    ),
  },
  {
    name: "Linear",
    logo: (
      <svg
        className="w-8 h-8 text-zinc-500 group-hover:text-accent transition-colors"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L13 17.93zm1.39-1.2l-6.81-6.81C8.1 9.32 8.52 8.78 9 8.35l6.81 6.81c-.43.48-.97.9-1.61 1.21.19-.34.19-.71 0-1.21-.19-.5-.52-.83-1.02-1.02-.5-.19-.87-.19-1.21 0a2.24 2.24 0 01-1.02 1.02c.5.19.83.52 1.02 1.02.19.5.19.87 0 1.21zM18 12c0 1.66-.67 3.16-1.76 4.24L9.41 9.41C10.49 8.32 12 7.65 13.66 7.65 16.05 7.65 18 9.6 18 12z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    name: "Supabase",
    logo: (
      <svg
        className="w-7 h-8 text-zinc-500 group-hover:text-accent transition-colors"
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M21.36 11.02h-7.11l4.02-9.4c.16-.39-.23-.76-.55-.49L5.36 11.58c-.28.24-.12.71.25.71h7.11l-4.02 9.4c-.16.39.23.76.55.49l12.36-10.45c.28-.24.12-.71-.25-.71z" />
      </svg>
    ),
  },
  {
    name: "Retool",
    logo: (
      <svg
        className="w-8 h-8 text-zinc-500 group-hover:text-accent transition-colors"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17.5 4.5H6.5C5.4 4.5 4.5 5.4 4.5 6.5V17.5C4.5 18.6 5.4 19.5 6.5 19.5H17.5C18.6 19.5 19.5 18.6 19.5 17.5V6.5C19.5 5.4 18.6 4.5 17.5 4.5ZM16.5 13.5H13.5V16.5H10.5V13.5H7.5V10.5H10.5V7.5H13.5V10.5H16.5V13.5Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    name: "Scale AI",
    logo: (
      <svg
        className="w-9 h-9 text-zinc-500 group-hover:text-accent transition-colors"
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M2 2h20v4H2V2zm0 8h20v4H2v-4zm0 8h20v4H2v-4z" />
      </svg>
    ),
  },
  {
    name: "Figma",
    logo: (
      <svg
        className="w-7 h-9 text-zinc-500 group-hover:text-accent transition-colors"
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 2C9.24 2 7 4.24 7 7c0 2.33 1.59 4.29 3.75 4.84L10.75 14c0 1.66 1.34 3 3 3s3-1.34 3-3V7c0-2.76-2.24-5-5-5zm0 10c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z" />
      </svg>
    ),
  },
  {
    name: "HashiCorp",
    logo: (
      <svg
        className="w-8 h-8 text-zinc-500 group-hover:text-accent transition-colors"
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 2L2 7.75v8.5L12 22l10-5.75v-8.5L12 2zm8 13.25L12 19.8l-8-4.55V8.75l8-4.55 8 4.55v6.5z" />
      </svg>
    ),
  },
];

export function Hero() {
  return (
    <section className="relative h-screen min-h-[750px] flex items-center justify-center overflow-hidden bg-transparent">
      {/* Background video — FIXED so it stays pinned under the nav + hero while
          scrolling, then the next (opaque dark) section scrolls up over it and
          covers it. Sits at -z-10 (above the white page canvas, below content). */}
      <video
        className="fixed inset-0 h-screen w-full object-cover pointer-events-none -z-10"
        src={heroVideo}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      />

      {/* Previous background image (kept for reference)
      <div
        className="absolute inset-0 pointer-events-none opacity-100"
        style={{
          backgroundImage: `url(${heroImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      /> */}

      {/* Whitish light wash coming from the top and the top-right corner */}
      <div
        className="fixed inset-0 pointer-events-none -z-10"
        style={{
          background:
            "linear-gradient(215deg, rgba(255,255,255,0.28) 0%, rgba(255,255,255,0.10) 22%, transparent 48%)",
        }}
      />
      <div
        className="fixed inset-0 pointer-events-none -z-10"
        style={{
          background:
            "linear-gradient(to bottom, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0.22) 18%, transparent 42%)",
        }}
      />

      {/* Bottom overlay for blending with next dark section */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-zinc-950 via-zinc-950/70 to-transparent pointer-events-none" />

      {/* Noise overlay for 'grainy' style — fixed with the bg */}
      <div
        className="fixed inset-0 pointer-events-none opacity-[0.25] mix-blend-overlay -z-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.2' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Content anchored to the bottom: title bottom-left, description + CTA bottom-right */}
      <div className="absolute inset-0 z-10 flex items-end">
        <div className="w-full px-6 md:px-12 pb-20 md:pb-28 flex flex-col md:flex-row md:items-end md:justify-between gap-10 md:gap-12">
          {/* Left bottom: badge + title */}
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 pl-4 pr-1 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-white text-[14px] font-medium mb-6 cursor-pointer hover:bg-white/20 transition-colors group"
            >
              Weemploy automates hiring end-to-end
              <div className="bg-white w-6 h-6 rounded-full flex items-center justify-center text-black group-hover:scale-105 transition-transform">
                <ArrowRight className="w-3 h-3" />
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-[68px] md:text-[100px] lg:text-[116px] tracking-tight leading-[1.03] text-white font-medium font-title"
            >
              Hiring, <br />
              on Autopilot.
            </motion.h1>
          </div>

          {/* Right bottom: description + CTA */}
          <div className="max-w-md flex flex-col items-start gap-8 md:pb-3">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative overflow-hidden text-[16px] md:text-[18px] text-zinc-100/90 font-normal leading-relaxed backdrop-blur-md bg-black/35 border border-white/15 rounded-sm px-5 py-4 before:absolute before:inset-x-4 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent before:content-['']"
            >
              Autonomous hiring — from JD to interviewed, explainable
              candidates. You just pick from the shortlist.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <a href="https://app.weemploy.ai" className="font-sans h-12 flex items-center p-1 rounded-sm bg-white text-zinc-900 border-2 border-white/60 font-medium hover:bg-zinc-100 transition-colors shadow-xl shadow-black/20 group cursor-pointer">
                <span className="flex-1 px-6 text-[16px] text-center">
                  Automate Hiring
                </span>
                <div className="bg-zinc-900 w-9 h-9 rounded-sm flex items-center justify-center text-white group-hover:scale-105 transition-transform shrink-0">
                  <ArrowRight className="w-5 h-5" />
                </div>
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Auto-scrolling trusted companies logo band — commented out for now
      <div className="absolute bottom-16 md:bottom-20 left-0 right-0 z-20 w-full overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 text-center mb-5">
          <p className="text-[12px] md:text-[14px] font-mono text-zinc-400 uppercase tracking-[0.25em] font-bold">
            TRUSTED BY FORWARD-THINKING TEAMS AT
          </p>
        </div>

        <div
          className="relative w-full overflow-hidden"
          style={{
            maskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
            WebkitMaskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)"
          }}
        >
          <motion.div
            className="flex gap-28 whitespace-nowrap w-max py-3"
            animate={{ x: ["-50%", "0%"] }}
            transition={{
              ease: "linear",
              duration: 35,
              repeat: Infinity,
            }}
          >
            {[...companies, ...companies].map((company, index) => (
              <div key={index} className="inline-flex items-center gap-4.5 group cursor-pointer select-none">
                {company.logo}
                <span className="font-display font-bold text-[18px] md:text-[24px] tracking-widest text-zinc-400 group-hover:text-accent transition-colors duration-200 uppercase">
                  {company.name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      */}
    </section>
  );
}
