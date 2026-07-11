"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight } from "lucide-react";

export function Nav({ variant = "light" }: { variant?: "light" | "dark" }) {
  const [isScrolled, setIsScrolled] = useState(false);
  // "light" = the un-scrolled top bar sits on a light hero (home) → dark text.
  // "dark" = it sits on a dark/black hero (Vision, People Search, Naira) →
  // light text. The floating capsule (post-scroll) is always a dark pill
  // with light text, so it needs no variant handling.
  const isDark = variant === "dark";

  useEffect(() => {
    const handleScroll = () => {
      // 70% of the viewport height
      const threshold = window.innerHeight * 0.7;
      setIsScrolled(window.scrollY > threshold);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Navbar — absolute so it scrolls up and away with the hero (not sticky).
          The floating capsule below re-appears on scroll for persistent nav. */}
      <nav className="absolute top-0 left-0 right-0 z-50 bg-transparent">
        <div className="w-full px-6 md:px-12 pt-6 md:pt-8 grid grid-cols-3 items-start">
          {/* Left: vertical nav links */}
          <div className={`hidden md:flex flex-col gap-2 text-lg font-medium justify-self-start ${isDark ? "text-white/80" : "text-zinc-800"}`}>
            <Link href="/" className="hover:text-white transition-colors w-fit">Employ</Link>
            <Link href="/vision" className="hover:text-white transition-colors w-fit">Vision</Link>
            <Link href="/people-search-engine" className="hover:text-white transition-colors w-fit">People Search</Link>
            <Link href="/naira-ai-interviewer" className="hover:text-white transition-colors w-fit">Naira</Link>
          </div>

          {/* Center: logo */}
          <div className={`flex items-center gap-3 justify-self-center ${isDark ? "text-white" : "text-zinc-900"}`}>
            <div className={`w-8 h-8 flex items-center justify-center font-display font-black text-lg tracking-tighter leading-none rounded-none ${isDark ? "bg-white text-black" : "bg-zinc-900 text-white"}`}>EL</div>
            <span className="font-display font-bold text-xl tracking-tight">Employlabs</span>
          </div>

          <div className="flex items-center gap-4 justify-self-end">
            <a href="https://app.employlabs.ai" className="font-sans h-12 flex items-center p-1 rounded-sm bg-white text-zinc-900 border-2 border-white/60 font-medium hover:bg-zinc-100 transition-colors shadow-xl shadow-black/20 group cursor-pointer">
              <span className="flex-1 px-6 text-[16px] text-center">Book Demo</span>
              <div className="bg-zinc-900 w-9 h-9 rounded-sm flex items-center justify-center text-white group-hover:scale-105 transition-transform shrink-0">
                <ArrowRight className="w-5 h-5" />
              </div>
            </a>
          </div>
        </div>
      </nav>

      {/* Floating Capsule Navbar */}
      <AnimatePresence>
        {isScrolled && (
          <motion.nav
            initial={{ y: -100, opacity: 0, x: "-50%" }}
            animate={{ y: 0, opacity: 1, x: "-50%" }}
            exit={{ y: -100, opacity: 0, x: "-50%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed top-4 left-1/2 z-50 bg-zinc-950/95 backdrop-blur-xl border border-white/10 rounded-lg pl-8 pr-3 py-2 flex items-center justify-between w-[90%] max-w-[800px] shadow-2xl"
          >
            <div className="flex items-center gap-3 text-white cursor-pointer hover:text-accent transition-colors" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <div className="bg-white text-black w-8 h-8 flex items-center justify-center font-display font-black text-lg tracking-tighter leading-none rounded-none">EL</div>
              <span className="font-display font-bold text-sm tracking-tight pr-2">Employlabs</span>
            </div>

            <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-300">
              <Link href="/" className="hover:text-white transition-colors">Employ</Link>
              <Link href="/vision" className="hover:text-white transition-colors">Vision</Link>
              <Link href="/people-search-engine" className="hover:text-white transition-colors">People Search</Link>
              <Link href="/naira-ai-interviewer" className="hover:text-white transition-colors">Naira</Link>
            </div>

            <a href="https://app.employlabs.ai" className="font-sans h-11 flex items-center p-1 rounded-sm bg-zinc-100 border border-zinc-200 text-zinc-900 hover:bg-white transition-all duration-300 text-sm font-bold group cursor-pointer">
              <span className="flex-1 px-5 text-center">Book Demo</span>
              <div className="bg-zinc-900 w-9 h-9 rounded-sm flex items-center justify-center text-white group-hover:scale-105 transition-transform shrink-0">
                <ArrowRight className="w-4 h-4" />
              </div>
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
