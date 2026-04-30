"use client";

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { Button } from "../Button";

export const Header: React.FC = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Employ", href: "/" },
    { label: "Vision", href: "/vision" },
    { label: "People Search", href: "/people-search-engine" },
    { label: "Naira", href: "/naira-ai-interviewer" },
    { label: "Resources", href: "#resources" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "bg-black/50 backdrop-blur-xl py-3" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-350 mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="z-50 flex items-center gap-2">
          <a
            href="/"
            className="text-xl font-bold tracking-tighter text-white transition-colors cursor-pointer hover:text-white/80"
          >
            EmployLabs.
          </a>
        </div>

        {/* Desktop Nav */}
        <nav className="absolute items-center hidden gap-8 -translate-x-1/2 md:flex left-1/2">
          {navItems.map((item) => {
            const isActive =
              item.href ===
              (pathname === "" || pathname === undefined ? "/" : pathname)
                ? true
                : pathname?.startsWith(item.href) && item.href !== "/";

            return (
              <a
                key={item.label}
                href={item.href}
                className={`text-xs tracking-wider uppercase transition-all flex items-center gap-2 ${
                  isActive
                    ? "text-white font-semibold drop-shadow-[0_6px_18px_rgba(59,130,246,0.12)]"
                    : "text-white/80 hover:text-white"
                }`}
              >
                <span className={`relative`}>{item.label}</span>
              </a>
            );
          })}
        </nav>

        {/* Desktop Actions */}
        <div className="items-center hidden gap-4 md:flex">
          <a
            href="https://cal.com/saurabhemploy/impossibleispossible"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="primary"
              size="sm"
              className="px-5 text-black bg-white rounded-full hover:bg-zinc-200"
            >
              Get in Touch
            </Button>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="relative z-70 text-white md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-60 flex flex-col px-6 pt-32 min-h-screen space-y-8 bg-black overflow-y-auto md:hidden">
          {navItems.map((item) => {
            const isActive =
              item.href ===
              (pathname === "" || pathname === undefined ? "/" : pathname)
                ? true
                : pathname?.startsWith(item.href) && item.href !== "/";

            return (
              <a
                key={item.label}
                href={item.href}
                className={`text-3xl font-light ${isActive ? "text-white font-semibold" : "text-white/90"}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            );
          })}
          <div className="flex flex-col gap-4 pt-8">
            <a
              href="https://cal.com/saurabhemploy/impossibleispossible"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="primary"
                className="justify-center w-full py-4 text-lg rounded-full"
              >
                Get in Touch
              </Button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
