"use client";

import { useState } from "react";

export default function InvestmentTiers() {
  const [activeIndex, setActiveIndex] = useState(1);

  const packages = [
    {
      tag: "Quick Launch",
      name: "Product Website",
      outcome: "High-converting website that drives action. Perfect for launching products or validating ideas.",
      investment: "4,500",
      timeline: "3-week turnaround",
      ideal: "Launching products or validating ideas",
      delivers: [
        "Strategy workshop",
        "Professional copywriting",
        "Responsive design",
        "CMS integration",
        "SEO optimization"
      ],
      color: "blue",
      gradient: "from-blue-500/10 via-cyan-500/5 to-transparent"
    },
    {
      tag: "Most Chosen",
      name: "AI-Powered MVP",
      outcome: "From validated idea to working product. Everything you need to acquire first customers and raise funding.",
      investment: "12,000",
      timeline: "4-6 weeks",
      ideal: "Acquiring first customers and raising funding",
      delivers: [
        "Strategy & validation",
        "Brand foundation",
        "UX/UI design",
        "Core development",
        "AI integration",
        "30-day post-launch support"
      ],
      color: "indigo",
      gradient: "from-indigo-500/10 via-purple-500/5 to-transparent",
      featured: true
    },
    {
      tag: "Native Experience",
      name: "Mobile App Package",
      outcome: "Native or cross-platform apps with backend infrastructure.",
      investment: "18,000",
      timeline: "6-8 weeks",
      ideal: "Mobile-first products",
      delivers: [
        "iOS/Android development",
        "API backend",
        "App store deployment",
        "Push notifications",
        "Analytics integration"
      ],
      color: "cyan",
      gradient: "from-cyan-500/10 via-blue-500/5 to-transparent"
    },
    {
      tag: "Full Stack",
      name: "Complete SaaS Platform",
      outcome: "Enterprise-ready infrastructure built for growth. Full suite from branding to deployment.",
      investment: "25,000",
      timeline: "8-12 weeks",
      ideal: "Building for scale",
      delivers: [
        "Brand identity system",
        "Comprehensive UX research",
        "Multi-tenant architecture",
        "Payment & subscription handling",
        "Admin dashboards",
        "90-day growth partnership"
      ],
      color: "violet",
      gradient: "from-violet-500/10 via-fuchsia-500/5 to-transparent"
    },
  ];

  return (
    <section id="pricing" className="relative py-12 sm:py-20 lg:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden bg-white">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(59,130,246,0.03)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(139,92,246,0.03)_0%,transparent_50%)]" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 mb-4 sm:mb-6">
            <svg className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span className="text-xs sm:text-sm font-semibold text-blue-900">Investment Packages</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 tracking-tight px-4">
            Choose your starting point
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            Fixed investment, flexible scope. Every package designed to deliver real business value.
          </p>
        </div>

        {/* Mobile Horizontal Tab Design */}
        <div className="lg:hidden mb-12">
          {/* Horizontal Package Tabs */}
          <div className="flex gap-2 mb-4 overflow-x-auto pb-2 px-1">
            {packages.map((pkg, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`relative flex-shrink-0 px-3 py-2 rounded-lg transition-all duration-300 border-2 overflow-hidden group ${
                  activeIndex === index
                    ? 'bg-gray-900 text-white border-gray-900'
                    : 'bg-white text-gray-700 border-gray-200 hover:border-blue-300'
                }`}
              >
                {/* Animated line on hover - only for non-active tabs */}
                {activeIndex !== index && (
                  <div className="absolute bottom-0 left-0 h-0.5 w-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 transform translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out" />
                )}
                <div className="relative z-10 text-xs font-bold">
                  {pkg.name}
                </div>
                <div className="relative z-10 text-xs font-semibold mt-0.5">
                  ${pkg.investment}
                </div>
              </button>
            ))}
          </div>

          {/* Active Package Content */}
          <div className="bg-white rounded-xl border-2 border-gray-900 shadow-xl overflow-hidden">
            <div className="h-0.5 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500" />

            <div className="p-4">
              {/* Investment & Timeline */}
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-gray-200">
                <div>
                  <div className="text-2xl font-bold text-gray-900">
                    ${packages[activeIndex].investment}
                  </div>
                  <div className="text-xs text-gray-500">
                    {packages[activeIndex].timeline}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xs font-semibold text-gray-500 uppercase">
                    {packages[activeIndex].tag}
                  </div>
                  <div className="text-xs text-gray-600 mt-1">
                    {packages[activeIndex].ideal}
                  </div>
                </div>
              </div>

              {/* What You Get - Compact */}
              <div className="space-y-2 mb-4">
                {packages[activeIndex].delivers.slice(0, 4).map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <div className="w-4 h-4 rounded bg-blue-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-xs text-gray-700 leading-relaxed">
                      {item}
                    </span>
                  </div>
                ))}
                {packages[activeIndex].delivers.length > 4 && (
                  <div className="text-xs text-gray-500 pl-6">
                    +{packages[activeIndex].delivers.length - 4} more
                  </div>
                )}
              </div>

              {/* CTA Button */}
              <a
                href="#contact"
                className="block w-full py-2.5 px-4 bg-gray-900 text-white rounded-lg font-semibold text-sm text-center hover:bg-gray-800 transition-all duration-300"
              >
                Start This Package
              </a>
            </div>
          </div>
        </div>

        {/* Desktop Grid Layout */}
        <div className="hidden lg:grid grid-cols-2 gap-6 mb-12">
          {packages.map((pkg, index) => (
            <div
              key={index}
              onClick={() => setActiveIndex(index)}
              onMouseEnter={() => setActiveIndex(index)}
              className={`group/card cursor-pointer relative transition-all duration-500 ${
                pkg.featured ? "col-span-2" : ""
              } ${
                activeIndex === index ? "scale-[1.02]" : "scale-100"
              }`}
            >
              {/* Card Container */}
              <div
                className={`relative h-full rounded-3xl border-2 transition-all duration-500 overflow-hidden ${
                  activeIndex === index
                    ? "border-gray-900 shadow-2xl bg-white"
                    : "border-gray-200 shadow-lg bg-white hover:border-gray-300"
                }`}
              >
                {/* Animated line on hover - only for non-active cards */}
                {activeIndex !== index && (
                  <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 transform translate-x-[-100%] group-hover/card:translate-x-0 transition-transform duration-700 ease-out rounded-t-3xl" />
                )}
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${pkg.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                {/* Content */}
                <div className={`relative p-8 ${pkg.featured ? "p-12" : ""}`}>
                  <div className={`grid gap-8 ${pkg.featured ? "grid-cols-2 gap-16" : ""}`}>
                    {/* Left Side - Outcome & Info */}
                    <div className="space-y-6">
                      {/* Tag & Name */}
                      <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-xs font-bold uppercase tracking-wider mb-3">
                          {pkg.tag}
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">
                          {pkg.name}
                        </h3>
                        <p className="text-base text-gray-700 leading-relaxed">
                          {pkg.outcome}
                        </p>
                      </div>

                      {/* Investment Display - Unique Style */}
                      <div className="flex items-end gap-6 py-6 border-y border-gray-200">
                        <div>
                          <div className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
                            Investment
                          </div>
                          <div className="flex items-baseline gap-1">
                            <span className="text-3xl font-bold text-gray-900">
                              ${pkg.investment}
                            </span>
                          </div>
                        </div>
                        <div className="pb-1">
                          <div className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
                            Timeline
                          </div>
                          <div className="text-base font-semibold text-gray-700">
                            {pkg.timeline}
                          </div>
                        </div>
                      </div>

                      {/* Ideal For */}
                      <div className="flex items-start gap-3 p-4 rounded-2xl bg-gray-50">
                        <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <div>
                          <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
                            Ideal for
                          </div>
                          <div className="text-sm font-medium text-gray-900">
                            {pkg.ideal}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Right Side - What You Get */}
                    <div className="space-y-4">
                      <div className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-6">
                        What You Get
                      </div>
                      <div className="space-y-4">
                        {pkg.delivers.map((item, idx) => (
                          <div key={idx} className="flex items-start gap-3 group/item">
                            <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 transition-transform duration-300">
                              <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                            <span className="text-sm text-gray-700 leading-relaxed pt-0.5">
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* CTA Button */}
                      <div className="pt-6">
                        <a
                          href="#contact"
                          className={`block w-full py-4 px-6 rounded-xl font-semibold text-center transition-all duration-300 ${
                            activeIndex === index
                              ? "bg-gray-900 text-white shadow-lg hover:shadow-xl hover:bg-gray-800 scale-105"
                              : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                          }`}
                        >
                          Start This Package
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Active Indicator - Top gradient line */}
                {activeIndex === index && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-t-3xl" />
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Value Proposition Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100">
            <div className="w-12 h-12 rounded-xl bg-blue-500 flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Fixed Timeline</h3>
            <p className="text-sm text-gray-700">
              Clear deadlines. No endless revisions. We ship on time.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-100">
            <div className="w-12 h-12 rounded-xl bg-indigo-500 flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Quality Guaranteed</h3>
            <p className="text-sm text-gray-700">
              Production-ready code. Not prototypes or shortcuts.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-gradient-to-br from-violet-50 to-fuchsia-50 border border-violet-100">
            <div className="w-12 h-12 rounded-xl bg-violet-500 flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Built to Scale</h3>
            <p className="text-sm text-gray-700">
              Architecture that grows with your business success.
            </p>
          </div>
        </div>

        {/* Custom Solution CTA */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900 to-gray-800 p-8 sm:p-12">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold uppercase tracking-wider mb-4">
              Custom Solutions
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              Need something different?
            </h3>
            <p className="text-base text-gray-300 mb-6 max-w-2xl">
              Every business is unique. Let's build a custom package that fits your specific needs, timeline, and budget.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-900 rounded-xl font-semibold hover:shadow-2xl hover:shadow-white/20 transition-all duration-300 hover:scale-105"
            >
              <span>Let's talk about your project</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
