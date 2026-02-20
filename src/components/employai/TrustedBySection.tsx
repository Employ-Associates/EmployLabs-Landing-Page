import React from "react";

const companies = [
  { name: "BMW", logo: "BMW" },
  { name: "Randstad", logo: "Randstad" },
  { name: "Deloitte", logo: "Deloitte" },
  { name: "Accenture", logo: "Accenture" },
];

export const TrustedBySection: React.FC = () => {
  return (
    <section className="relative py-12 bg-black border-t border-b border-white/5">
      <div className="max-w-5xl px-6 mx-auto">
        <p className="mb-8 text-sm font-medium tracking-widest text-center uppercase text-zinc-500">
          Trusted by Agencies & Enterprises
        </p>
        <div className="flex flex-wrap items-center justify-center gap-12 md:gap-16">
          {companies.map((company) => (
            <div
              key={company.name}
              className="flex items-center justify-center"
            >
              <span className="text-xl font-semibold tracking-wide text-white/40 hover:text-white/70 transition-colors duration-300">
                {company.logo}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
