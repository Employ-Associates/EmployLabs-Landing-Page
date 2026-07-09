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
      {/* Top Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-transparent ${isScrolled ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'}`}>
        <div className="w-full px-6 md:px-12 h-20 md:h-24 flex items-center justify-between">
          <div className={`flex items-center gap-3 ${isDark ? "text-white" : "text-zinc-900"}`}>
            <div className={`w-8 h-8 flex items-center justify-center font-display font-black text-lg tracking-tighter leading-none rounded-none ${isDark ? "bg-white text-black" : "bg-zinc-900 text-white"}`}>EL</div>
            <span className="font-display font-bold text-xl tracking-tight">EMPLOYLABS</span>
          </div>

          <div className={`hidden md:flex items-center gap-8 text-sm font-medium ${isDark ? "text-zinc-300" : "text-zinc-800"}`}>
            <Link href="/" className="hover:text-white transition-colors">Employ</Link>
            <Link href="/vision" className="hover:text-white transition-colors">Vision</Link>
            <Link href="/people-search-engine" className="hover:text-white transition-colors">People Search</Link>
            <Link href="/naira-ai-interviewer" className="hover:text-white transition-colors">Naira</Link>
          </div>

          <div className="flex items-center gap-4">
            <button className="font-sans h-11 flex items-center p-1 rounded-sm bg-zinc-300 border border-white text-zinc-900 hover:bg-white transition-colors text-sm font-bold shadow-sm group">
              <span className="flex-1 px-4 text-center">Book Demo</span>
              <div className="bg-zinc-900 w-8 h-8 rounded-sm flex items-center justify-center text-white group-hover:scale-105 transition-transform shrink-0">
                <ArrowRight className="w-4 h-4" />
              </div>
            </button>
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
            className="fixed top-4 left-1/2 z-50 bg-zinc-950/95 backdrop-blur-xl border border-white/10 rounded-full pl-8 pr-3 py-2 flex items-center justify-between w-[90%] max-w-[800px] shadow-2xl"
          >
            <div className="flex items-center gap-3 text-white cursor-pointer hover:text-accent transition-colors" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <div className="bg-white text-black w-8 h-8 flex items-center justify-center font-display font-black text-lg tracking-tighter leading-none rounded-none">EL</div>
              <span className="font-display font-bold text-sm tracking-tight pr-2">EMPLOYLABS</span>
            </div>

            <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-300">
              <Link href="/" className="hover:text-white transition-colors">Employ</Link>
              <Link href="/vision" className="hover:text-white transition-colors">Vision</Link>
              <Link href="/people-search-engine" className="hover:text-white transition-colors">People Search</Link>
              <Link href="/naira-ai-interviewer" className="hover:text-white transition-colors">Naira</Link>
            </div>

            <button className="font-sans h-11 flex items-center p-1 rounded-full bg-zinc-100 border border-zinc-200 text-zinc-900 hover:bg-white transition-all duration-300 text-sm font-bold group">
              <span className="flex-1 px-5 text-center">Book Demo</span>
              <div className="bg-zinc-900 w-9 h-9 rounded-full flex items-center justify-center text-white group-hover:scale-105 transition-transform shrink-0">
                <ArrowRight className="w-4 h-4" />
              </div>
            </button>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
