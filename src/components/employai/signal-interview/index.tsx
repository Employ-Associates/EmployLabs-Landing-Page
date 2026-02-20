"use client";

import React from "react";
import SectionHeading from "../shared/sectionHeading";
import IllustrateAnimate from "../IllustrateAnimate";
import SignalInterviewDashboard from "./SignalInterviewDashboard";
import FirstCard from "./_components/FirstCard";
import SecondCard from "./_components/SecondCard";
import ThirdCard from "./_components/ThirdCard";
import FourthCard from "./_components/FourthCard";
import { InterviewScoreChart } from "../../MockupCharts";
import Image from "next/image";

const SignalInterviewSection: React.FC = () => {
  return (
    <section
      id="signal-interview"
      className="py-12 sm:py-16 md:py-20 lg:py-24 bg-black overflow-hidden relative isolate"
    >
      <div
        className="pointer-events-none absolute top-0 left-0 w-[50vw] h-[50vh] z-0"
        style={{
          background:
            "radial-gradient(ellipse at top left, rgba(255,255,255,0.07) 0%, transparent 80%)",
          mixBlendMode: "overlay",
        }}
      />

      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-24 relative z-10">
        <div className="flex flex-col gap-4 sm:gap-5 md:gap-6 text-left items-start max-w-4xl">
          <SectionHeading
            heading="Introducing Signal Interview™"
            badgeText="Interview Intelligence"
            badgeStyle="#9333ea"
          />
          <p className="text-base sm:text-lg md:text-xl leading-normal text-zinc-400 max-w-full sm:max-w-xl">
            <span className="text-white font-medium">
              Most interviews fail because humans can only probe what they
              personally understand.
            </span>{" "}
            Signal Interview™ captures structured, explainable evidence from
            subject-matter directed conversations.
          </p>
        </div>
      </div>

      {/* Desktop Dashboard Illustration */}
      <div className="relative pointer-events-none flex flex-col justify-center items-center before:block before:content-[''] before:mt-[-8%] after:content-[''] after:block after:mb-[-3%]">
        <div className="h-[600px] sm:h-[900px] w-full select-none pointer-events-none mb-[40px]">
          <div
            className="relative [contain:strict] w-full h-full"
            style={{
              perspective: "4000px",
              perspectiveOrigin: "100% 0",
              transformStyle: "preserve-3d",
              clipPath: "inset(0 0 0 0)",
            }}
          >
            <div
              className="absolute inset-0 rounded-[10px] border border-[#1e1e1e] bg-[var(--color-bg-primary)] w-[1600px] h-[900px] mt-[100px] sm:mt-[280px] mb-auto ml-[1%] sm:ml-auto mr-auto overflow-hidden"
              style={{
                transform:
                  "translateX(2%) scale(1.2) rotateX(47deg) rotateY(31deg) rotate(324deg)",
                transformOrigin: "top left",
                backfaceVisibility: "hidden",
                transformStyle: "preserve-3d",
              }}
            >
              <div
                className="py-4 px-3.5"
                style={{ transformStyle: "preserve-3d" }}
              />
              <IllustrateAnimate
                delay={2}
                duration={1.4}
                className="absolute h-full w-full inset-y-2"
              >
                <SignalInterviewDashboard />
              </IllustrateAnimate>
              {/* Blackish gradient from bottom */}
              <div
                className="absolute inset-0 pointer-events-none z-10"
                style={{
                  background:
                    "linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.6) 25%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.1) 75%, transparent 100%)",
                  transformStyle: "preserve-3d",
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Grid Section - 2x2 Cards (use local components) */}
      <div className="max-w-350 mx-auto px-6 sm:px-8 md:px-12 pb-12 sm:pb-16 md:pb-20 lg:pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          <div className="md:border-r md:border-b border-zinc-900">
            <FirstCard />
          </div>
          <div className="md:border-b border-zinc-900">
            <SecondCard />
          </div>
          <div className="md:border-r border-zinc-900">
            <ThirdCard />
          </div>
          <div>
            <FourthCard />
          </div>
        </div>

        {/* Read More Button */}
        <div className="mt-12 text-center">
          <button className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-medium rounded-full hover:bg-zinc-200 transition-colors">
            Read More
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default SignalInterviewSection;
