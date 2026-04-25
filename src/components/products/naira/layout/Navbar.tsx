"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "How It Works",   href: "#process" },
  { label: "Track Record",   href: "#validation" },
  { label: "For Candidates", href: "#candidate-experience" },
  { label: "FAQ",            href: "#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 h-16 transition-all duration-300",
          scrolled
            ? "border-b border-zinc-900 [backdrop-filter:blur(12px)] bg-black/80"
            : "bg-transparent"
        )}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between gap-6">
          <Link
            href="/"
            className="text-xl font-bold text-white shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded"
          >
            EmployLabs.
          </Link>

          <ul className="hidden md:flex items-center gap-6">
            {navLinks.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  className={cn(
                    "text-sm font-medium text-zinc-500 transition-colors duration-150",
                    "hover:text-white focus-visible:outline-none focus-visible:text-white"
                  )}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.15 }}
              className={cn(
                "hidden sm:inline-flex items-center px-4 py-2 rounded-lg",
                "bg-white text-black text-sm font-semibold",
                "hover:bg-zinc-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              )}
            >
              Get a Free Assessment
            </motion.a>

            <button
              type="button"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((v) => !v)}
              className={cn(
                "md:hidden p-2 rounded-md text-zinc-500",
                "hover:text-white hover:bg-zinc-900",
                "transition-colors duration-150",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              )}
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 z-40 bg-black/60 md:hidden"
            />
            <motion.div
              key="drawer"
              role="dialog"
              aria-modal="true"
              aria-label="Navigation menu"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
              className={cn(
                "fixed top-0 right-0 z-50 h-full w-72",
                "bg-black border-l border-zinc-900",
                "flex flex-col px-6 pt-20 pb-8 gap-4",
                "md:hidden"
              )}
            >
              <nav>
                <ul className="flex flex-col gap-1">
                  {navLinks.map(({ label, href }) => (
                    <li key={href}>
                      <a
                        href={href}
                        onClick={() => setMobileOpen(false)}
                        className={cn(
                          "block py-3 px-2 rounded-md",
                          "text-base font-medium text-zinc-500",
                          "hover:text-white hover:bg-zinc-900",
                          "transition-colors duration-150"
                        )}
                      >
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
              <div className="mt-auto">
                <a
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="block w-full text-center px-4 py-3 rounded-lg bg-white text-black text-sm font-semibold hover:bg-zinc-200"
                >
                  Get a Free Assessment
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
