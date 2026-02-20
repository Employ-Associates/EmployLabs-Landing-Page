"use client";
import React, { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "../Button";
import { AnimatePresence } from "motion/react";
import { TextAnimate } from "@/components/ui/text-animate";

export const Hero: React.FC = () => {
  const texts = ["GCCs", "Start-ups", "Enterprise"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIndex((i) => (i + 1) % texts.length);
    }, 3000); // 2s animation + 1s pause
    return () => clearTimeout(timer);
  }, [index, texts.length]);

  return (
    <section className="relative flex items-center justify-center min-h-screen pt-16 pb-8 overflow-hidden bg-black md:pt-20">
      {/* Cinematic Background */}
      {/* <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1635776062360-af423602aff3?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JhZGllbnQlMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHwy')] bg-cover bg-center opacity-90"></div> */}
      {/* <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1644203578939-f0c36d10ceaa?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center opacity-90"></div> */}
      {/* <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1456428199391-a3b1cb5e93ab?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center opacity-90"></div> */}
      {/* <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1710028267906-945fee272d0a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center opacity-90"></div> */}
      {/* <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1561631167-8807c6a71ea3')] bg-cover bg-center opacity-90"></div> */}
      {/* <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1554668125-ffae9502cac9')] bg-cover bg-center opacity-90"></div> */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1661705969607-cde73828023d')] bg-cover bg-center opacity-100"></div>
      {/* <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1747422220716-17490b7139cc?q=80&w=2885&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center opacity-100"></div> */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/60 to-black"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center -mt-12.5">
        <div className="flex flex-wrap items-center justify-center gap-2 mb-2">
          <div className="inline-flex items-center gap-2 rounded-full bg-neutral-100 px-4 py-1.5 text-sm font-medium text-neutral-800">
            <span className="rounded-full bg-neutral-900 px-2 py-0.5 text-xs font-semibold text-white">
              New
            </span>
            People Search
          </div>
          <div className="inline-flex items-center gap-2 rounded-full bg-neutral-100 px-4 py-1.5 text-sm font-medium text-neutral-800">
            <span className="rounded-full bg-neutral-900 px-2 py-0.5 text-xs font-semibold text-white">
              New
            </span>
            Signal Interview Engine V1.2
          </div>
        </div>

        <div className="pb-2">
          <div className="text-4xl font-medium tracking-tight text-transparent bg-clip-text bg-linear-to-b from-white to-white/50 sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl animate-fade-in-up">
            <div className="text-center">AI-Native Recruitment</div>
            <div className="text-left mt-4 pb-2">
              Agency For{" "}
              <TextAnimate
                key={texts[index]}
                animation="blurInUp"
                by="text"
                duration={2} /* seconds expected by component */
                className="inline text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-medium"
                segmentClassName="text-transparent bg-clip-text bg-linear-to-b from-white/90 to-white/50"
              >
                {texts[index]}
              </TextAnimate>
            </div>
          </div>
        </div>

        <p
          className="max-w-3xl mx-auto mt-6 text-base font-normal leading-relaxed sm:text-lg md:text-xl text-zinc-300 animate-fade-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          Employ combines AI-first people search, subject-matter expert
          interview agents, and specialist recruiters to deliver hiring outcomes
          traditional recruitment cannot.
        </p>

        {/* <p
          className="max-w-2xl mx-auto mt-4 text-base text-zinc-400 animate-fade-in-up"
          style={{ animationDelay: "0.3s" }}
        >
          Built for high-growth companies and global capability centers that
          demand speed, precision, and certainty in hiring.
        </p> */}

        <div
          className="flex flex-col justify-center gap-4 mt-8 sm:flex-row animate-fade-in-up"
          style={{ animationDelay: "0.4s" }}
        >
          <Button
            variant="primary"
            size="lg"
            className="gap-2 px-8 text-black bg-white rounded-full hover:bg-zinc-200"
            icon
          >
            Experience Signal Interview
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="gap-2 px-8 text-white rounded-full border-zinc-700 hover:bg-white/10"
          >
            <a href="/vision">Our Vision</a>
          </Button>
        </div>
      </div>
    </section>
  );
};
