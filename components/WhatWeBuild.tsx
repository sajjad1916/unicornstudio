"use client";

import { useState } from "react";

export default function WhatWeBuild() {
  const [activePhase, setActivePhase] = useState("Development");

  const services = [
    { name: "AI solutions", icon: "○" },
    { name: "AI integration", icon: "○" },
    { name: "SaaS products", icon: "○" },
    { name: "Mobile apps", icon: "○", badges: ["🍎", "🤖"] },
    { name: "Product websites", icon: "○" },
    { name: "Branding", icon: "○" },
  ];

  const phases = [
    {
      name: "Strategy",
      description: "We dig deeper than surface requirements. Market research, competitive analysis, user interviews. We validate demand and design business models that actually work."
    },
    {
      name: "UX",
      description: "Obsessed with how it feels. User flows, wireframes, prototypes - we test and refine until everything clicks. Complex workflows become intuitive."
    },
    {
      name: "Branding",
      description: "Your vision, visually realized. From brand identity to product interfaces, we create cohesive experiences that resonate with your target market."
    },
    {
      name: "Design",
      description: "Every pixel serves a purpose - whether it's building trust, driving action, or simplifying complexity. Beautiful and functional."
    },
    {
      name: "Development",
      description: "We build fast, scalable, and secure apps with a sharp eye for performance and usability. Modern tech stacks that scale - Next.js, React Native, cloud infrastructure, AI APIs."
    },
  ];

  const currentPhase = phases.find(p => p.name === activePhase) || phases[4];

  return (
    <section id="services" className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="w-full max-w-full lg:max-w-[50%] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-24 items-start">
          {/* Left Column - Services List */}
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 sm:mb-8 tracking-tight leading-tight">
              What we design + build
            </h2>

            <div className="space-y-3 sm:space-y-4">
              {services.map((service, index) => (
                <div key={index} className="flex items-center gap-2 sm:gap-3 group">
                  <span className="text-blue-600 text-sm sm:text-base">{service.icon}</span>
                  <span className="text-base sm:text-lg text-gray-900 font-light group-hover:text-blue-600 transition-colors duration-300">
                    {service.name}
                  </span>
                  {service.badges && (
                    <div className="flex gap-1.5">
                      {service.badges.map((badge, idx) => (
                        <span key={idx} className="text-base opacity-60">
                          {badge}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Description & Process */}
          <div className="space-y-4 sm:space-y-6">
            <div>
              <p className="text-sm sm:text-base text-gray-900 mb-4 sm:mb-6 leading-relaxed">
                You can work with us on the full journey or just one piece of it.
              </p>

              <div className="flex flex-wrap gap-2 sm:gap-3 mb-4 sm:mb-6">
                {phases.map((phase, index) => (
                  <button
                    key={index}
                    onClick={() => setActivePhase(phase.name)}
                    className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                      activePhase === phase.name
                        ? "bg-gray-900 text-white"
                        : "bg-white border-2 border-gray-300 text-gray-900 hover:border-blue-600 hover:text-blue-600"
                    }`}
                  >
                    {phase.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-gray-50 p-4 sm:p-6 rounded-xl min-h-[100px] sm:min-h-[120px] transition-all duration-300">
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {currentPhase.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
