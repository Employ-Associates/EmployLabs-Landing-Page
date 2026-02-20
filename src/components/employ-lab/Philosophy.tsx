import React from "react";
import ScrollReveal from "../ScrollReveal";
import Image from "next/image";
import { FloatingParticles } from "../FloatingParticles";

export const Philosophy: React.FC = () => {
  return (
    <section className="relative py-32">
      <div className="max-w-6xl px-6 mx-auto">
        <ScrollReveal
          baseOpacity={0}
          enableBlur={true}
          baseRotation={2}
          blurStrength={6}
          containerClassName="mb-20 text-center"
          textClassName="text-4xl md:text-5xl lg:text-7xl font-medium text-white tracking-tight"
        >
          The AI-Native Workforce Intelligence Paradigm
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            {/* <ScrollReveal
              baseOpacity={0.1}
              enableBlur={true}
              baseRotation={2}
              blurStrength={6}
              containerClassName="mb-8"
              textClassName="text-2xl font-semibold text-white mb-6"
            >
              Beyond Traditional Hiring
            </ScrollReveal> */}

            <ScrollReveal
              baseOpacity={0.2}
              enableBlur={true}
              baseRotation={2}
              blurStrength={1}
              containerClassName="mb-8"
              textClassName="text-lg! text-zinc-100 leading-relaxed font-light!"
            >
              The future of work isn't about automating existing processes—it's
              about reimagining workforce intelligence from the ground up.
              AI-native operations require AI-native data structures,
              intelligence layers, and operational frameworks.
            </ScrollReveal>

            <ScrollReveal
              baseOpacity={0.3}
              enableBlur={true}
              baseRotation={2}
              blurStrength={1}
              containerClassName="text-zinc-400 leading-relaxed"
              textClassName="text-lg! text-zinc-100 leading-relaxed"
            >
              We're building the infrastructure that enables organizations to
              operate with workforce intelligence as naturally as they operate
              with data intelligence today.
            </ScrollReveal>
          </div>

          <div className="flex justify-center relative">
            <div className="relative">
              <FloatingParticles count={60} color="255, 255, 255" />
              <Image
                src="/ill/mind.png"
                alt="AI-Native Workforce Intelligence"
                width={610}
                height={600}
                className="relative z-10"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
