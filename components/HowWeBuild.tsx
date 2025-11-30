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
    <section id="process" className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-base font-bold text-gray-900 mb-2 tracking-tight">
            How We Build Together
          </h2>
          <p className="text-xs text-gray-600 max-w-2xl mx-auto font-light">
            A proven process from idea to market
          </p>
        </div>

        {/* Interactive Timeline */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
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
                    <h3 className={`text-sm font-semibold ${
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
          <div className="lg:sticky lg:top-8">
            <div className="bg-white rounded-2xl p-6 shadow-2xl border border-gray-100">
              {/* Large Number */}
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${steps[activeStep].color} text-white font-bold text-lg mb-4 shadow-lg`}>
                {steps[activeStep].number}
              </div>

              {/* Title */}
              <h3 className="text-sm font-bold text-gray-900 mb-2">
                {steps[activeStep].title}
              </h3>

              {/* Description */}
              <p className="text-xs text-gray-600 leading-relaxed mb-4">
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
              <div className="flex gap-2 mt-6">
                <button
                  onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
                  disabled={activeStep === 0}
                  className="px-4 py-2 rounded-lg bg-gray-100 text-gray-900 text-xs font-medium hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                >
                  Previous
                </button>
                <button
                  onClick={() => setActiveStep(Math.min(steps.length - 1, activeStep + 1))}
                  disabled={activeStep === steps.length - 1}
                  className={`flex-1 px-4 py-2 rounded-lg bg-gradient-to-r ${steps[activeStep].color} text-white text-xs font-medium hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300`}
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
