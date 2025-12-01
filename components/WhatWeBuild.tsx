"use client";

import { useState } from "react";

export default function WhatWeBuild() {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      name: "AI Solutions",
      description: "Custom AI implementations that solve real business problems. From intelligent automation to predictive analytics, we make AI work for your specific use case."
    },
    {
      name: "SaaS Products",
      description: "Full-featured subscription platforms built to scale. Multi-tenant architecture, billing systems, admin dashboards - everything you need for recurring revenue."
    },
    {
      name: "AI Integrations",
      description: "Enhance your existing products with AI capabilities. OpenAI, Claude, Gemini, or custom models - we integrate intelligence where it matters most."
    },
    {
      name: "Mobile Apps",
      description: "Native and cross-platform apps that users love. iOS, Android, or React Native - we choose the right approach for your audience and budget."
    },
    {
      name: "Product Websites",
      description: "High-converting web experiences that tell your story. From landing pages to full marketing sites, designed to turn visitors into customers."
    },
    {
      name: "Brand Identity",
      description: "Strategic branding that sets you apart. Logo, visual system, messaging - we create brands that resonate with your target market."
    },
  ];

  return (
    <section id="services" className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 tracking-tight">
            What We Build
          </h2>
        </div>

        {/* Mobile Accordion View */}
        <div className="lg:hidden space-y-2">
          {services.map((service, index) => (
            <div
              key={index}
              className={`relative rounded-2xl border-2 transition-all duration-300 overflow-hidden ${
                activeService === index
                  ? "border-blue-500 bg-gradient-to-br from-blue-50 to-indigo-50 shadow-lg"
                  : "border-gray-200 bg-white"
              }`}
            >
              {/* Animated blue border at top - moves left to right on active */}
              <div className={`absolute top-0 left-0 h-1.5 w-full bg-blue-600 transform transition-transform duration-700 ease-out rounded-t-2xl ${
                activeService === index ? "translate-x-0" : "translate-x-[-100%]"
              }`} />
              {/* Service Header - Always Visible */}
              <button
                onClick={() => setActiveService(index)}
                className="w-full p-4 flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  {/* Number Badge */}
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm transition-colors duration-300 ${
                    activeService === index
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 text-gray-600"
                  }`}>
                    {index + 1}
                  </div>

                  {/* Service Name */}
                  <h3 className={`text-base font-bold text-left transition-colors duration-300 ${
                    activeService === index ? "text-blue-900" : "text-gray-900"
                  }`}>
                    {service.name}
                  </h3>
                </div>

                {/* Expand/Collapse Icon */}
                <svg
                  className={`w-5 h-5 transition-all duration-300 flex-shrink-0 ${
                    activeService === index ? "text-blue-600 rotate-180" : "text-gray-400"
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Expandable Content */}
              <div
                className={`transition-all duration-300 overflow-hidden ${
                  activeService === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-4 pb-4">
                  <div className="pl-11 pr-2">
                    <p className="text-sm text-gray-700 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Service Counter */}
          <div className="text-center pt-4">
            <p className="text-xs text-gray-500 font-medium">
              {activeService + 1} of {services.length} services
            </p>
          </div>
        </div>

        {/* Desktop Tab Layout */}
        <div className="hidden lg:grid grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column - Service Tabs */}
          <div className="space-y-3">
            {services.map((service, index) => (
              <button
                key={index}
                onClick={() => setActiveService(index)}
                className={`w-full text-left p-6 rounded-2xl transition-all duration-300 ${
                  activeService === index
                    ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-xl scale-105"
                    : "bg-white border-2 border-gray-200 text-gray-900 hover:border-blue-500 hover:shadow-lg"
                }`}
              >
                <div className="flex items-center justify-between">
                  <h3 className={`text-xl font-bold ${
                    activeService === index ? "text-white" : "text-gray-900"
                  }`}>
                    {service.name}
                  </h3>
                  <svg
                    className={`w-6 h-6 transition-transform duration-300 ${
                      activeService === index ? "text-white rotate-90" : "text-gray-400"
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </button>
            ))}
          </div>

          {/* Right Column - Content Display */}
          <div className="sticky top-8">
            <div className="relative bg-gradient-to-br from-gray-50 to-blue-50/30 p-10 rounded-2xl border border-gray-200 shadow-xl min-h-[350px] flex items-center overflow-hidden">
              {/* Animated blue border at top - moves left to right */}
              <div className="absolute top-0 left-0 h-1.5 w-full bg-blue-600 transform translate-x-[-100%] transition-transform duration-700 ease-out rounded-t-2xl animate-border"
                key={activeService}
                style={{ animation: 'slideIn 700ms ease-out forwards' }}
              />

              <div className="relative z-10">
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  {services[activeService].name}
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {services[activeService].description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
