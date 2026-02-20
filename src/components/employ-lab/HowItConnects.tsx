"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import ScrollReveal from "../ScrollReveal";
import { desc } from "framer-motion/client";

const layers = [
  {
    src: "/ill/connect/mind.png",
    position: "absolute top-20 left-20",
    z: "z-30",
    title: "• Inference Engine",
    description:
      "Revolutionary inference engines enabling contextual role understanding, latent competency mapping, predictive success modeling, and discovery of untapped talent.",
  },
  {
    src: "/ill/connect/cube.png",
    position:
      "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2",
    z: "z-20",
    title: "• Representation Engine",
    description:
      "Envisioning a unified representation of human intelligence, mapping identities, embedding capabilities, modeling growth trajectories, and quantifying confidence in workforce insights.",
  },
  {
    src: "/ill/connect/operational.png",
    position: "absolute bottom-20 right-20",
    z: "z-10",
    title: "• Operational Engine",
    description:
      "Harmonizing digital echoes from public signals, conversational pulses from interactions, and behavioral traces from career journeys to orchestrate adaptive workforce dynamics.",
  },
];
export const HowItConnects: React.FC = () => {
  const containerVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariant = {
    hidden: { opacity: 0, y: 60, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
      },
    },
  };

  return (
    <section className="relative py-32 bg-black overflow-hidden min-h-screen">
      <div className="px-6">
        {/* Title */}
        <ScrollReveal
          baseOpacity={0}
          enableBlur
          blurStrength={6}
          containerClassName="mb-2 text-center"
          textClassName="text-4xl md:text-5xl lg:text-7xl font-medium text-white tracking-tight"
        >
          How It Connects
        </ScrollReveal>

        <ScrollReveal
          baseOpacity={0.1}
          enableBlur
          blurStrength={6}
          containerClassName="mb-16 text-center"
          textClassName="text-lg text-zinc-300 max-w-3xl mx-auto leading-relaxed"
        >
          A visionary convergence of AI, data, and operations to unlock
          unparalleled workforce potential.
        </ScrollReveal>

        {/* Mobile Layout: Vertical Stack */}
        <div className="flex flex-col gap-16 md:hidden">
          {layers.map((img, index) => (
            <motion.div
              key={img.src}
              className="flex flex-col items-center gap-4"
              variants={itemVariant}
            >
              <span className="text-white text-xl font-medium">
                {img.title}
              </span>
              <Image
                src={img.src}
                alt={img.title}
                width={480}
                height={480}
                className="rounded-xl shadow-2xl w-64 h-64 object-contain"
                priority={index === 0}
              />
              <span className="text-zinc-300 text-sm max-w-xs text-center px-4">
                {img.description}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Desktop Layout: Absolute Positioned */}
        <div className="hidden md:block relative w-full max-w-300 h-200 mx-auto">
          {/* Intelligence Layer - Top Left */}
          <motion.div
            className="absolute top-20 left-20 z-30"
            variants={itemVariant}
          >
            <div className="absolute top-0 left-0 right-0 flex items-center justify-center pointer-events-none">
              <span className="text-white text-xl font-medium">
                {layers[0].title}
              </span>
            </div>
            <Image
              src={layers[0].src}
              alt={layers[0].title}
              width={480}
              height={480}
              className="rounded-xl shadow-2xl w-80 h-80 lg:w-96 lg:h-96 object-contain"
              priority
            />
            <div className="absolute -bottom-5 left-0 right-0 flex items-center justify-center pointer-events-none">
              <span className="text-zinc-300 text-sm max-w-xs text-center">
                {layers[0].description}
              </span>
            </div>
          </motion.div>

          {/* Data Foundation - Center */}
          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20"
            variants={itemVariant}
          >
            <div className="absolute top-0 left-0 right-0 flex items-center justify-center pointer-events-none">
              <span className="text-white text-xl font-medium">
                {layers[1].title}
              </span>
            </div>
            <Image
              src={layers[1].src}
              alt={layers[1].title}
              width={480}
              height={480}
              className="rounded-xl shadow-2xl w-80 h-80 lg:w-96 lg:h-96 object-contain"
            />
            <div className="absolute -bottom-5 left-0 right-0 flex items-center justify-center pointer-events-none">
              <span className="text-zinc-300 text-sm max-w-xs text-center">
                {layers[1].description}
              </span>
            </div>
          </motion.div>

          {/* Operational - Bottom Right */}
          <motion.div
            className="absolute bottom-20 right-20 z-10"
            variants={itemVariant}
          >
            <div className="absolute top-0 left-0 right-0 flex items-center justify-center pointer-events-none">
              <span className="text-white text-xl font-medium">
                {layers[2].title}
              </span>
            </div>
            <Image
              src={layers[2].src}
              alt={layers[2].title}
              width={480}
              height={480}
              className="rounded-xl shadow-2xl w-80 h-80 lg:w-96 lg:h-96 object-contain"
            />
            <div className="absolute -bottom-5 left-0 right-0 flex items-center justify-center pointer-events-none">
              <span className="text-zinc-300 text-sm max-w-xs text-center">
                {layers[2].description}
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
