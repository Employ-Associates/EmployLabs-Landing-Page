import React from "react";
import ScrollReveal from "../ScrollReveal";
import { Button } from "../Button";

export const PartnerEngage: React.FC = () => {
  return (
    <section className="relative py-32 bg-zinc-900">
      <div className="max-w-4xl px-6 mx-auto text-center">
        <ScrollReveal
          baseOpacity={0}
          enableBlur={true}
          baseRotation={2}
          blurStrength={6}
          containerClassName="mb-8"
          textClassName="text-4xl md:text-5xl font-medium text-white tracking-tight"
        >
          Build With Us
        </ScrollReveal>

        <ScrollReveal
          baseOpacity={0.1}
          enableBlur={true}
          baseRotation={2}
          blurStrength={6}
          containerClassName="mb-12"
          textClassName="text-xl text-zinc-300 max-w-2xl mx-auto leading-relaxed"
        >
          We work with companies, operators, and researchers building the future
          of hiring.
        </ScrollReveal>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button
            variant="primary"
            size="lg"
            className="px-8 text-black bg-white rounded-full hover:bg-zinc-200"
          >
            Partner / Pilot / Contact
          </Button>
        </div>
      </div>
    </section>
  );
};
