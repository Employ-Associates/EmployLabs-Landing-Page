import React from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "../Button";

export const Hero: React.FC = () => {
  return (
    <section className="relative flex items-center justify-center min-h-screen pt-16 pb-8 overflow-hidden bg-black md:pt-20">
      {/* Cinematic Background */}
      {/* <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=2344&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center opacity-100"></div> */}
      <div className="absolute inset-0 bg-[url('/images/operational.png')] bg-cover bg-center opacity-100"></div>
      <div className="absolute inset-0 bg-linear-to-b from-black/40 via-black/80 to-black"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent"></div>

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

        <h1 className="mb-6 text-4xl font-medium tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl animate-fade-in-up">
          AI People Search <br />
          <span className="text-transparent bg-clip-text bg-linear-to-b from-white to-white/50">
            Built for Intelligence
          </span>
        </h1>

        <p
          className="max-w-3xl mx-auto mt-6 text-base font-normal leading-relaxed sm:text-lg md:text-xl text-zinc-300 animate-fade-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          Our proprietary AI system automatically discovers and ranks the best
          talent from 80 million+ profiles. Behind the scenes, it fetches
          candidates, maps competencies, and delivers comprehensive insights
          that other search engines can't match.
        </p>

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
            Experience People Search
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
