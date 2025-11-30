"use client";

import { useState } from "react";

export default function HowWeBuild() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      number: "01",
      title: "Strategy First",
      description: "Market research, competitive analysis, user interviews. We validate demand and design business models that actually work.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      number: "02",
      title: "Brand & Design",
      description: "From brand identity to product interfaces, we create cohesive experiences. Every pixel serves a purpose.",
      color: "from-purple-500 to-pink-500"
    },
    {
      number: "03",
      title: "User Experience",
      description: "User flows, wireframes, prototypes - we test and refine until everything clicks. Complex workflows become intuitive.",
      color: "from-orange-500 to-red-500"
    },
    {
      number: "04",
      title: "Development",
      description: "Modern tech stacks that scale - Next.js, React Native, cloud infrastructure, AI APIs. Production-ready, not prototypes.",
      color: "from-green-500 to-emerald-500"
    },
    {
      number: "05",
      title: "Growth Partnership",
      description: "Launch is just the beginning. We monitor performance, implement feedback, and help you scale.",
      color: "from-indigo-500 to-blue-500"
    },
  ];

  return (
    <section id="process" className="py-12 sm:py-20 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 tracking-tight px-4">
            How We Build Together
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto font-light px-4">
            A proven process from idea to market
          </p>
        </div>

        {/* Mobile Horizontal Stepper */}
        <div className="lg:hidden">
          {/* Horizontal Step Indicators */}
          <div className="flex justify-between items-start mb-6 px-2">
            {steps.map((step, index) => (
              <button
                key={index}
                onClick={() => setActiveStep(index)}
                className="flex flex-col items-center gap-2 flex-1 relative"
              >
                {/* Connecting Line */}
                {index < steps.length - 1 && (
                  <div className="absolute top-5 left-1/2 w-full h-0.5 bg-gray-200">
                    <div
                      className={`h-full bg-gradient-to-r ${step.color} transition-all duration-500`}
                      style={{ width: activeStep > index ? '100%' : '0%' }}
                    />
                  </div>
                )}

                {/* Step Circle */}
                <div className={`relative z-10 w-10 h-10 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center text-white font-bold text-xs shadow-lg transition-all duration-300 ${
                  activeStep === index ? 'scale-125 ring-4 ring-blue-100' : activeStep > index ? 'scale-100' : 'scale-90 opacity-60'
                }`}>
                  {activeStep > index ? (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    step.number
                  )}
                </div>

                {/* Step Title - Only show for active */}
                <div className={`text-center transition-all duration-300 ${
                  activeStep === index ? 'opacity-100' : 'opacity-0 h-0'
                }`}>
                  <span className="text-xs font-semibold text-gray-900 leading-tight">
                    {step.title}
                  </span>
                </div>
              </button>
            ))}
          </div>

          {/* Active Step Content */}
          <div className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100">
            {/* Number Badge */}
            <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${steps[activeStep].color} text-white font-bold text-lg mb-4 shadow-lg`}>
              {steps[activeStep].number}
            </div>

            {/* Title */}
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              {steps[activeStep].title}
            </h3>

            {/* Description */}
            <p className="text-sm text-gray-600 leading-relaxed mb-6">
              {steps[activeStep].description}
            </p>

            {/* Progress Indicator */}
            <div className="space-y-2 mb-6">
              <div className="flex justify-between text-xs text-gray-500">
                <span>Progress</span>
                <span>{activeStep + 1} of {steps.length}</span>
              </div>
              <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className={`h-full bg-gradient-to-r ${steps[activeStep].color} transition-all duration-500 rounded-full`}
                  style={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
                />
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex gap-3">
              <button
                onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
                disabled={activeStep === 0}
                className="px-5 py-2.5 rounded-lg bg-gray-100 text-gray-900 text-sm font-medium hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
              >
                Previous
              </button>
              <button
                onClick={() => setActiveStep(Math.min(steps.length - 1, activeStep + 1))}
                disabled={activeStep === steps.length - 1}
                className={`flex-1 px-5 py-2.5 rounded-lg bg-gradient-to-r ${steps[activeStep].color} text-white text-sm font-medium hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300`}
              >
                {activeStep === steps.length - 1 ? 'Complete' : 'Next Step'}
              </button>
            </div>
          </div>
        </div>

        {/* Desktop Two-Column Layout */}
        <div className="hidden lg:grid grid-cols-2 gap-12 items-start">
          {/* Left Side - Step Numbers */}
          <div className="space-y-3">
            {steps.map((step, index) => (
              <button
                key={index}
                onClick={() => setActiveStep(index)}
                className={`w-full text-left p-6 rounded-2xl transition-all duration-300 ${
                  activeStep === index
                    ? "bg-white shadow-xl scale-105 border-2 border-blue-500"
                    : "bg-white/50 hover:bg-white hover:shadow-lg border-2 border-transparent"
                }`}
              >
                <div className="flex items-center gap-4">
                  {/* Number Circle */}
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center text-white font-bold shadow-lg flex-shrink-0 ${
                    activeStep === index ? "scale-110" : ""
                  } transition-transform duration-300`}>
                    {step.number}
                  </div>

                  {/* Title */}
                  <div className="flex-grow">
                    <h3 className={`text-lg font-semibold ${
                      activeStep === index ? "text-gray-900" : "text-gray-600"
                    }`}>
                      {step.title}
                    </h3>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Right Side - Content Display */}
          <div className="sticky top-8">
            <div className="bg-white rounded-2xl p-6 shadow-2xl border border-gray-100">
              {/* Large Number */}
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${steps[activeStep].color} text-white font-bold text-lg mb-4 shadow-lg`}>
                {steps[activeStep].number}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {steps[activeStep].title}
              </h3>

              {/* Description */}
              <p className="text-base text-gray-600 leading-relaxed mb-6">
                {steps[activeStep].description}
              </p>

              {/* Progress Bar */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm text-gray-500 mb-2">
                  <span>Progress</span>
                  <span>{activeStep + 1} of {steps.length}</span>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r ${steps[activeStep].color} transition-all duration-500 rounded-full`}
                    style={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
                  />
                </div>
              </div>

              {/* Navigation */}
              <div className="flex gap-3 mt-8">
                <button
                  onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
                  disabled={activeStep === 0}
                  className="px-6 py-3 rounded-lg bg-gray-100 text-gray-900 text-sm font-medium hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                >
                  Previous
                </button>
                <button
                  onClick={() => setActiveStep(Math.min(steps.length - 1, activeStep + 1))}
                  disabled={activeStep === steps.length - 1}
                  className={`flex-1 px-6 py-3 rounded-lg bg-gradient-to-r ${steps[activeStep].color} text-white text-sm font-medium hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300`}
                >
                  Next Step
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
