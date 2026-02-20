"use client";

import React from "react";
import { Check } from "lucide-react";
import { Button } from "../Button";

const plans = [
  {
    name: "Starter",
    price: "$499",
    period: "month",
    description: "Perfect for small teams and startups",
    features: [
      "Up to 100 searches/month",
      "Basic filtering",
      "Email support",
      "API access",
    ],
    popular: false,
  },
  {
    name: "Professional",
    price: "$1,499",
    period: "month",
    description: "Ideal for growing companies",
    features: [
      "Up to 1,000 searches/month",
      "Advanced filtering & analytics",
      "Priority support",
      "Bulk export",
      "Integration APIs",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "pricing",
    description: "For large organizations with complex needs",
    features: [
      "Unlimited searches",
      "Custom integrations",
      "Dedicated account manager",
      "On-premise deployment",
      "Advanced analytics",
      "SLA guarantees",
    ],
    popular: false,
  },
];

export const PricingSection: React.FC = () => {
  return (
    <section className="py-32 bg-zinc-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-medium text-white mb-4">
            Choose Your Plan
          </h2>
          <p className="text-lg text-zinc-300 max-w-3xl mx-auto">
            Flexible pricing designed to scale with your hiring needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-black/50 backdrop-blur-sm rounded-xl p-8 border transition-colors ${
                plan.popular
                  ? "border-blue-500 ring-2 ring-blue-500/20"
                  : "border-zinc-800 hover:border-zinc-700"
              }`}
            >
              {plan.popular && (
                <div className="text-center mb-4">
                  <span className="inline-block px-3 py-1 bg-blue-600 text-white text-sm font-medium rounded-full">
                    Most Popular
                  </span>
                </div>
              )}
              <div className="text-center mb-6">
                <h3 className="text-2xl font-medium text-white mb-2">
                  {plan.name}
                </h3>
                <div className="text-4xl font-bold text-white mb-1">
                  {plan.price}
                  {plan.period !== "pricing" && (
                    <span className="text-lg font-normal text-zinc-400">
                      /{plan.period}
                    </span>
                  )}
                </div>
                <p className="text-zinc-400">{plan.description}</p>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-3 text-zinc-300"
                  >
                    <Check className="w-5 h-5 text-green-400 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button
                variant={plan.popular ? "primary" : "outline"}
                className={`w-full ${
                  plan.popular
                    ? "bg-blue-600 hover:bg-blue-700 text-white"
                    : "border-zinc-600 text-zinc-300 hover:bg-zinc-800/50"
                }`}
              >
                {plan.name === "Enterprise" ? "Contact Sales" : "Get Started"}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
