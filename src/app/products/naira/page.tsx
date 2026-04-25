"use client";

import dynamic from "next/dynamic";
import Navbar from "@/components/products/naira/layout/Navbar";
import ScrollProgress from "@/components/products/naira/ui/ScrollProgress";
import Hero from "@/components/products/naira/sections/Hero";
import TrustStrip from "@/components/products/naira/sections/TrustStrip";
import PainSection from "@/components/products/naira/sections/PainSection";
import CTASection from "@/components/products/naira/sections/CTASection";
import ProcessFlow from "@/components/products/naira/sections/ProcessFlow";
import SampleBrief from "@/components/products/naira/sections/SampleBrief";
import CandidateSection from "@/components/products/naira/sections/CandidateSection";

const SectionSkeleton = () => (
  <div className="py-20 px-4">
    <div className="max-w-7xl mx-auto">
      <div className="h-8 w-48 rounded animate-pulse mb-4" style={{ background: "#1a1a1a" }} />
      <div className="h-4 w-96 rounded animate-pulse" style={{ background: "#1a1a1a" }} />
    </div>
  </div>
);

const SignalWeightMap = dynamic(
  () => import("@/components/products/naira/sections/SignalWeightMap"),
  { loading: SectionSkeleton }
);
const HowScoresCalculated = dynamic(
  () => import("@/components/products/naira/sections/HowScoresCalculated"),
  { loading: SectionSkeleton }
);
const HistoricalValidation = dynamic(
  () => import("@/components/products/naira/sections/HistoricalValidation"),
  { loading: SectionSkeleton }
);
const SystemWeaknesses = dynamic(
  () => import("@/components/products/naira/sections/SystemWeaknesses"),
  { loading: SectionSkeleton }
);
const AssessmentTimeline = dynamic(
  () => import("@/components/products/naira/sections/AssessmentTimeline"),
  { loading: SectionSkeleton }
);
const AIvsPanel = dynamic(
  () => import("@/components/products/naira/sections/AIvsPanel"),
  { loading: SectionSkeleton }
);
const FAQ = dynamic(
  () => import("@/components/products/naira/sections/FAQ"),
  { loading: SectionSkeleton }
);
const WhatWasConducted = dynamic(
  () => import("@/components/products/naira/sections/WhatWasConducted"),
  { loading: SectionSkeleton }
);

export default function NairaPage() {
  return (
    <div
      className="bg-black text-white min-h-screen font-sans"
    >
      <ScrollProgress />
      <Navbar />
      <main id="main-content" className="relative">
        <Hero />
        <TrustStrip />
        <PainSection />
        <WhatWasConducted />
        <ProcessFlow />
        <SignalWeightMap />
        <HowScoresCalculated />
        <HistoricalValidation />
        <SystemWeaknesses />
        <AssessmentTimeline />
        <AIvsPanel />
        <FAQ />
        <SampleBrief />
        <CandidateSection />
        <CTASection />
      </main>
    </div>
  );
}
