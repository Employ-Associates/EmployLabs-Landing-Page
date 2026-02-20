"use client";
import { type FC, useState } from "react";
import SectionHeading from "./shared/sectionHeading";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    quote:
      "EmployAI transformed our hiring process completely. We went from weeks of interviews to days, and the quality of hires has never been better. Naira is incredibly thorough and fair.",
    name: "Sarah Chen",
    role: "Head of Talent at TechFlow",
    image: "/user-1.png",
  },
  {
    id: 3,
    quote:
      "The depth of assessment EmployAI provides is remarkable. It doesn't just check skills - it understands cognitive depth and cultural fit. We've reduced our time-to-hire by 60%.",
    name: "Emma Thompson",
    role: "VP of Engineering at CreativeHub",
    image: "/user-3.jpg",
  },
  {
    id: 4,
    quote:
      "EmployAI's autonomous interviewing scaled our recruitment without compromising quality. We can now evaluate hundreds of candidates efficiently while maintaining the personal touch.",
    name: "Priya Patel",
    role: "Chief People Officer at NextGen Solutions",
    image: "/user-4.jpg",
  },
  {
    id: 5,
    quote:
      "Hiring should be about finding the best talent, not endless interviews. EmployAI makes intelligent hiring accessible, affordable, and scalable for every organization.",
    name: "Kartey R",
    role: "Founder & CEO of EmployAI",
    image: "/user-founder.jpg",
  },
];

const TestinomialSection: FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  return (
    <section className="block isolate py-[48px] sm:py-[160px]">
      <div className="px-6 mx-auto max-w-7xl">
        {/* <div className="grid gap-4 mb-12 md:grid-cols-12 md:gap-6">
          <div className="md:col-span-6">
            <SectionHeading
              heading="What our customers say"
              badgeText="Testimonials"
              badgeStyle="bg-[#b59aff] border-none"
            />
          </div>
          <div className="self-end md:col-start-8 md:col-end-13">
            <p className="text-[17px] leading-[24.5px] tracking-[0.01em] font-medium text-[#969799] text-balance">
              Hear from teams who have transformed their workflow and achieved 
              remarkable results with Linear.
            </p>
          </div>
        </div> */}

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <span className="relative inline-flex items-center px-3 py-1 rounded-full text-white text-xs font-merriweather shadow-md overflow-hidden bg-gradient-to-r from-[#2c86f3] via-[#000] to-[#000000]">
            {/* Glowing top border */}
            <span
              className="absolute left-0 top-0 w-full h-[6px] rounded-t-full pointer-events-none"
              style={{
                background:
                  "linear-gradient(90deg, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0.2) 100%)",
                filter: "blur(6px)",
                opacity: 0.9,
              }}
            />
            <span className="relative z-10">Customer Stories</span>
          </span>
        </div>

        {/* Testimonial Slider */}
        <div className="mb-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <blockquote className="text-[24px] font-onest md:text-[32px] leading-[1.4] font-medium text-white mb-6">
                &quot;{testimonials[currentTestimonial].quote}&quot;
              </blockquote>
              <div className="flex items-center justify-center gap-4">
                <Image
                  src={testimonials[currentTestimonial].image}
                  alt={testimonials[currentTestimonial].name}
                  width={48}
                  height={48}
                  className="rounded-full"
                />
                <div className="text-left">
                  <p className="text-[16px] font-medium text-white">
                    {testimonials[currentTestimonial].name}
                  </p>
                  <p className="text-[14px] text-[#969799]">
                    {testimonials[currentTestimonial].role}
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <div className="flex items-center justify-center gap-4">
              <button
                onClick={prevTestimonial}
                className="flex justify-center items-center text-xs text-[#969799] hover:text-white rounded-full w-12 h-12 bg-[#232323] hover:brightness-125 transition-colors"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={nextTestimonial}
                className="flex justify-center items-center text-xs text-[#969799] hover:text-white rounded-full w-12 h-12 bg-[#232323] hover:brightness-125 transition-colors"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="px-4 mt-12 ml-0 sm:ml-52 sm:px-0">
        <Carousel />
      </div> */}
    </section>
  );
};

export default TestinomialSection;
