import React from "react";
import { Button } from "../Button";

export const CallToActionSection: React.FC = () => {
  return (
    <section className="relative py-48 mt-20">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1521405785232-7a56b029191e?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW91dGFpbnN8ZW58MHx8MHx8fDA%3D')] bg-cover bg-center opacity-90"></div>
      <div className="absolute inset-0 bg-linear-to-t from-black via-black/50 to-transparent"></div>
      <div className="absolute inset-0 bg-linear-to-b from-black via-transparent to-transparent"></div>

      <div className="relative z-10 max-w-4xl px-6 mx-auto text-center">
        <h2 className="mb-8 text-4xl md:text-5xl lg:text-7xl font-medium text-white">
          The future of intelligence human & artificial.
        </h2>
        <p className="mb-16 text-2xl text-zinc-300">
          Join early access or request a demo of our solutions.
        </p>
        <div className="flex justify-center">
          <a
            href="https://cal.com/employ-partnerships/30min"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="primary"
              size="lg"
              className="text-black bg-white rounded-full hover:bg-zinc-200"
              icon
            >
              Talk to a Specialist
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};
