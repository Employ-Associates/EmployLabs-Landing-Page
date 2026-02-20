"use client";

import React from "react";
import { motion } from "framer-motion";

const stats = [
  {
    number: "12M+",
    label: "Professional Profiles",
    description: "Verified candidates across all industries",
  },
  {
    number: "< 0.1s",
    label: "Search Response Time",
    description: "Lightning-fast results at scale",
  },
  {
    number: "95%",
    label: "Match Accuracy",
    description: "AI-powered precision matching",
  },
  {
    number: "500+",
    label: "Enterprise Clients",
    description: "Trusted by leading organizations",
  },
];

export const StatsSection: React.FC = () => {
  return (
    <section className="py-32 bg-zinc-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-medium text-white mb-4">
            Powering Global Talent Acquisition
          </h2>
          <p className="text-lg text-zinc-300 max-w-3xl mx-auto">
            Delivering enterprise-grade performance with unmatched scale and
            precision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-5xl md:text-6xl font-bold text-blue-400 mb-2">
                {stat.number}
              </div>
              <div className="text-xl font-medium text-white mb-2">
                {stat.label}
              </div>
              <div className="text-zinc-400">{stat.description}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
