import React from "react";
import { Clock, Target, TrendingUp } from "lucide-react";

const OutcomesSection: React.FC = () => {
  const outcomes = [
    {
      icon: Clock,
      metric: "50%",
      label: "Time Saved",
      description:
        "Reduce hiring cycle time by automating candidate evaluation and interview processes",
      testimonial:
        '"We cut our hiring time from 6 weeks to 3 weeks, allowing us to scale our team 2x faster."',
      company: "TechCorp Global",
    },
    {
      icon: Target,
      metric: "70%",
      label: "Higher Accuracy",
      description:
        "Improve hiring decision accuracy with AI-powered candidate assessment and scoring",
      testimonial:
        '"Our hiring accuracy improved dramatically - we reduced bad hires by 70% in the first quarter."',
      company: "InnovateLabs",
    },
    {
      icon: TrendingUp,
      metric: "3x",
      label: "Faster Scaling",
      description:
        "Scale your hiring capacity without proportional increases in headcount or resources",
      testimonial:
        '"Employ AI allowed us to hire 150 engineers in 6 months without adding a single recruiter to our team."',
      company: "ScaleTech Solutions",
    },
  ];

  return (
    <section className="relative py-16 sm:py-20 md:py-32 bg-black overflow-hidden">
      {/* Clean Background */}
      <div className="absolute inset-0 bg-black">
        {/* Subtle Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
            backgroundSize: `40px 40px`,
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Clean Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-white mb-4 md:mb-6 tracking-tight">
            Proven Results
          </h2>
          <p className="text-base sm:text-lg text-zinc-400 max-w-3xl mx-auto px-4">
            Real outcomes from organizations using Employ AI to transform their
            hiring processes
          </p>
        </div>

        {/* Layered Card Layout */}
        <div className="relative max-w-6xl mx-auto mt-12 sm:mt-16 lg:mt-20">
          {/* Mobile: Stack all cards */}
          <div className="block lg:hidden space-y-6">
            {outcomes.map((outcome, index) => (
              <div
                key={index}
                className="group relative bg-zinc-950/50 border border-zinc-800/80 p-5 sm:p-6 hover:border-zinc-700 transition-all duration-300 hover:shadow-xl overflow-hidden"
              >
                {/* Subtle hover background */}
                <div className="absolute inset-0 bg-zinc-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Icon */}
                <div className="w-10 h-10 sm:w-12 bg-zinc-800/50 border border-zinc-700/50 flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-zinc-700/50 transition-colors duration-300">
                  <outcome.icon className="w-5 h-5 sm:w-6 text-zinc-400 group-hover:text-zinc-300 transition-colors duration-300" />
                </div>

                {/* Metric */}
                <div className="mb-3 sm:mb-4">
                  <div className="text-2xl sm:text-3xl font-bold text-white mb-1 sm:mb-2">
                    {outcome.metric}
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-zinc-200 mb-2 sm:mb-3">
                    {outcome.label}
                  </h3>
                </div>

                {/* Testimonial */}
                <blockquote className="text-zinc-400 italic text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed">
                  {outcome.testimonial}
                </blockquote>

                {/* Company */}
                <div className="text-xs sm:text-sm font-medium text-zinc-500">
                  — {outcome.company}
                </div>
              </div>
            ))}
          </div>

          {/* Desktop: Layered layout */}
          <div className="hidden lg:block">
            {/* Card 1 - Left (Background) */}
            <div className="absolute left-0 top-0 w-96 z-10">
              {outcomes.slice(0, 1).map((outcome, index) => (
                <div
                  key={index}
                  className="group relative bg-zinc-950/50 border border-zinc-800/80 p-8 hover:border-zinc-700 transition-all duration-300 hover:shadow-xl overflow-hidden"
                >
                  {/* Subtle hover background */}
                  <div className="absolute inset-0 bg-zinc-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Icon */}
                  <div className="w-14 h-14 bg-zinc-800/50 border border-zinc-700/50 flex items-center justify-center mb-6 group-hover:bg-zinc-700/50 transition-colors duration-300">
                    <outcome.icon className="w-7 h-7 text-zinc-400 group-hover:text-zinc-300 transition-colors duration-300" />
                  </div>

                  {/* Metric */}
                  <div className="mb-4">
                    <div className="text-4xl font-bold text-white mb-2">
                      {outcome.metric}
                    </div>
                    <h3 className="text-xl font-semibold text-zinc-200 mb-3">
                      {outcome.label}
                    </h3>
                  </div>

                  {/* Testimonial */}
                  <blockquote className="text-zinc-400 italic text-base mb-4 leading-relaxed">
                    {outcome.testimonial}
                  </blockquote>

                  {/* Company */}
                  <div className="text-sm font-medium text-zinc-500">
                    — {outcome.company}
                  </div>
                </div>
              ))}
            </div>

            {/* Card 3 - Right (Background) */}
            <div className="absolute right-0 top-0 w-96 z-10">
              {outcomes.slice(2, 3).map((outcome, index) => (
                <div
                  key={index + 2}
                  className="group relative bg-zinc-950/50 border border-zinc-800/80 p-8 hover:border-zinc-700 transition-all duration-300 hover:shadow-xl overflow-hidden"
                >
                  {/* Subtle hover background */}
                  <div className="absolute inset-0 bg-zinc-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Icon */}
                  <div className="w-14 h-14 bg-zinc-800/50 border border-zinc-700/50 flex items-center justify-center mb-6 group-hover:bg-zinc-700/50 transition-colors duration-300">
                    <outcome.icon className="w-7 h-7 text-zinc-400 group-hover:text-zinc-300 transition-colors duration-300" />
                  </div>

                  {/* Metric */}
                  <div className="mb-4">
                    <div className="text-4xl font-bold text-white mb-2">
                      {outcome.metric}
                    </div>
                    <h3 className="text-xl font-semibold text-zinc-200 mb-3">
                      {outcome.label}
                    </h3>
                  </div>

                  {/* Testimonial */}
                  <blockquote className="text-zinc-400 italic text-base mb-4 leading-relaxed">
                    {outcome.testimonial}
                  </blockquote>

                  {/* Company */}
                  <div className="text-sm font-medium text-zinc-500">
                    — {outcome.company}
                  </div>
                </div>
              ))}
            </div>

            {/* Card 2 - Center (Foreground) */}
            <div className="relative z-20 mx-auto w-96">
              {outcomes.slice(1, 2).map((outcome, index) => (
                <div
                  key={index + 1}
                  className="group relative bg-zinc-950/50 border border-zinc-700 p-8 overflow-hidden shadow-2xl"
                >
                  {/* Subtle hover background */}
                  <div className="absolute inset-0 bg-zinc-900/20 opacity-100" />

                  {/* Icon */}
                  <div className="w-14 h-14 bg-zinc-700/50 border border-zinc-700/50 flex items-center justify-center mb-6">
                    <outcome.icon className="w-7 h-7 text-zinc-300" />
                  </div>

                  {/* Metric */}
                  <div className="mb-4">
                    <div className="text-4xl font-bold text-white mb-2">
                      {outcome.metric}
                    </div>
                    <h3 className="text-xl font-semibold text-zinc-200 mb-3">
                      {outcome.label}
                    </h3>
                  </div>

                  {/* Testimonial */}
                  <blockquote className="text-zinc-400 italic text-base mb-4 leading-relaxed">
                    {outcome.testimonial}
                  </blockquote>

                  {/* Company */}
                  <div className="text-sm font-medium text-zinc-500">
                    — {outcome.company}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Clean Bottom Note */}
        {/* <div className="text-center mt-12 sm:mt-16">
          <p className="text-xs sm:text-sm text-zinc-500 px-4">
            Results based on pilot programs with enterprise clients
          </p>
        </div> */}
      </div>
    </section>
  );
};

export default OutcomesSection;
