"use client";

import TopNavigation from '@/components/TopNavigation';
import Footer from '@/components/Footer';

import FlipCard from '@/components/FlipCard';
import { useCalendly } from '@/components/CalendlyProvider';

export default function SaaSProductsPage() {
  const { openModal } = useCalendly();
  return (
    <>
      <TopNavigation />
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative pt-24 sm:pt-32 pb-16 sm:pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 sm:mb-8 leading-[1.1] tracking-tight">
                From Idea to
                <br />
                <span className="gradient-text-modern inline-block mt-2">Recurring Revenue</span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                We build SaaS products that acquire users, retain customers, and scale sustainably. Strategy, design, and development under one roof.
              </p>
            </div>
          </div>
        </section>

        {/* SaaS That Actually Succeeds */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                SaaS That Actually Succeeds
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              {/* What kills most SaaS products */}
              <div className="bg-red-50 p-8 rounded-2xl border-2 border-red-200">
                <h3 className="text-2xl font-bold text-red-900 mb-6">What kills most SaaS products:</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 text-xl mt-0.5">✕</span>
                    <span className="text-gray-700">Building features nobody asked for</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 text-xl mt-0.5">✕</span>
                    <span className="text-gray-700">Ignoring onboarding and activation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 text-xl mt-0.5">✕</span>
                    <span className="text-gray-700">Underestimating technical complexity</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 text-xl mt-0.5">✕</span>
                    <span className="text-gray-700">Launching without growth mechanisms</span>
                  </li>
                </ul>
              </div>

              {/* How we build differently */}
              <div className="bg-green-50 p-8 rounded-2xl border-2 border-green-200">
                <h3 className="text-2xl font-bold text-green-900 mb-6">How we build differently:</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 text-xl mt-0.5">✓</span>
                    <span className="text-gray-700">Start with customer development and validation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 text-xl mt-0.5">✓</span>
                    <span className="text-gray-700">Obsess over time-to-value and activation rates</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 text-xl mt-0.5">✓</span>
                    <span className="text-gray-700">Build scalable architecture from day one</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 text-xl mt-0.5">✓</span>
                    <span className="text-gray-700">Design viral loops and expansion revenue</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Our SaaS Playbook */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Our SaaS Playbook
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {[
                {
                  phase: "Week 1-2",
                  title: "Discovery & Validation",
                  description: "Customer interviews, competitive analysis, and business model design. We validate demand before writing code."
                },
                {
                  phase: "Week 3-4",
                  title: "Design & Architecture",
                  description: "Information architecture, user flows, and technical planning. Every decision serves your business metrics."
                },
                {
                  phase: "Week 5-10",
                  title: "MVP Development",
                  description: "Core features only. Clean code, scalable infrastructure, and delightful UX. Built to impress early adopters."
                },
                {
                  phase: "Week 11+",
                  title: "Launch & Growth",
                  description: "Go-to-market execution, user feedback loops, and rapid iteration. We help you find product-market fit."
                }
              ].map((step, index) => (
                <FlipCard key={index} phase={step.phase} title={step.title} description={step.description} />
              ))}
            </div>
          </div>
        </section>

        {/* SaaS Categories We Excel At */}
        <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                SaaS Categories We Excel At
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {[
                {
                  title: "B2B Tools",
                  description: "CRMs, project management, analytics platforms - we understand enterprise needs and long sales cycles."
                },
                {
                  title: "Marketplaces",
                  description: "Two-sided platforms with complex matching, payments, and trust systems."
                },
                {
                  title: "Developer Tools",
                  description: "APIs, SDKs, and technical products that developers actually want to use."
                },
                {
                  title: "Vertical SaaS",
                  description: "Industry-specific solutions with deep domain requirements."
                },
                {
                  title: "AI-Powered SaaS",
                  description: "Products where AI is the core differentiator, not just a feature."
                }
              ].map((category, index) => (
                <div key={index} className="group relative bg-white p-8 rounded-2xl border-2 border-gray-200 hover:border-gray-900 transition-colors duration-300 overflow-hidden">
                  {/* Animated blue border at top - moves left to right */}
                  <div className="absolute top-0 left-0 h-1.5 w-full bg-blue-600 transform translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-700 ease-out rounded-t-2xl" />

                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />

                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{category.title}</h3>
                    <p className="text-gray-700 leading-relaxed">{category.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Investment Tiers */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Investment Tiers
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
              {[
                {
                  name: "SaaS MVP",
                  description: "Validate your concept with paying customers",
                  price: "$8,000",
                  features: [
                    "Core feature set",
                    "Payment integration",
                    "Basic admin panel",
                    "4-week timeline"
                  ],
                  highlighted: false
                },
                {
                  name: "Complete SaaS Development",
                  description: "Production-ready platform built to scale",
                  price: "$25,000",
                  features: [
                    "Complete feature set",
                    "Advanced billing",
                    "Analytics dashboard",
                    "API & webhooks",
                    "14-week timeline"
                  ],
                  highlighted: true
                }
              ].map((tier, index) => (
                <div key={index} className={`group relative bg-white p-10 rounded-2xl border-2 transition-all duration-300 ${
                  tier.highlighted
                    ? "border-blue-500 shadow-2xl scale-105 overflow-visible"
                    : "border-gray-200 hover:border-gray-900 overflow-hidden"
                }`}>
                  {/* Animated blue border at top - moves left to right (only for non-highlighted) */}
                  {!tier.highlighted && (
                    <>
                      <div className="absolute top-0 left-0 h-1.5 w-full bg-blue-600 transform translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-700 ease-out rounded-t-2xl" />
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                    </>
                  )}

                  {tier.highlighted && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-6 py-1 rounded-full text-sm font-bold z-20">
                      Most Popular
                    </div>
                  )}

                  <div className="relative z-10">
                    <h3 className="text-3xl font-bold text-gray-900 mb-3">{tier.name}</h3>
                    <p className="text-gray-600 mb-6 text-base">{tier.description}</p>
                    <p className="text-4xl font-bold text-blue-600 mb-8">{tier.price}</p>
                    <ul className="space-y-4 mb-10">
                      {tier.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-start gap-3">
                          <svg className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-700 text-base">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <button
                      onClick={openModal}
                      className={`block w-full text-center py-4 px-8 rounded-xl font-bold text-lg transition-all duration-300 ${
                        tier.highlighted
                          ? "btn-primary text-white"
                          : "btn-secondary bg-white text-gray-900 border-2 border-gray-300"
                      }`}
                    >
                      LET'S BUILD
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio Highlights */}
        <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Portfolio Highlights
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
              {[
                {
                  name: "ProjectFlow - Project Management SaaS",
                  metrics: [
                    "10,000+ active teams",
                    "$2M ARR in year one",
                    "92% monthly retention"
                  ]
                },
                {
                  name: "DataSync - Integration Platform",
                  metrics: [
                    "500+ API connections",
                    "Processing 1M+ events daily",
                    "$50K MRR after 6 months"
                  ]
                },
                {
                  name: "TalentPool - Recruiting SaaS",
                  metrics: [
                    "100K+ candidate profiles",
                    "AI-powered matching",
                    "3x faster hiring process"
                  ]
                }
              ].map((project, index) => (
                <div key={index} className="group relative bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl border-2 border-blue-200 hover:border-gray-900 transition-colors duration-300 overflow-hidden">
                  {/* Animated blue border at top - moves left to right */}
                  <div className="absolute top-0 left-0 h-1.5 w-full bg-blue-600 transform translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-700 ease-out rounded-t-2xl" />

                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-100/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />

                  <div className="relative z-10">
                    <h3 className="text-xl font-bold text-gray-900 mb-6">{project.name}</h3>
                    <ul className="space-y-3">
                      {project.metrics.map((metric, mIndex) => (
                        <li key={mIndex} className="flex items-start gap-2">
                          <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span className="text-gray-700 text-sm">{metric}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Our SaaS Products Succeed */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Why Our SaaS Products Succeed
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
              {[
                {
                  title: "Product-Market Fit Focus",
                  description: "We validate before we build. Customer development, landing page tests, and early sales before heavy investment."
                },
                {
                  title: "Metrics-Driven Development",
                  description: "Every feature ties to a metric: activation, retention, expansion. We build what moves the needle."
                },
                {
                  title: "Technical Excellence",
                  description: "Clean code, comprehensive testing, and DevOps from day one. Your product won't break when you scale."
                },
                {
                  title: "Go-to-Market Partnership",
                  description: "We don't just build and disappear. We help with launch, early sales, and finding your growth channels."
                }
              ].map((reason, index) => (
                <div key={index} className="group relative bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl border-2 border-blue-200 hover:border-gray-900 transition-colors duration-300 overflow-hidden">
                  {/* Animated blue border at top - moves left to right */}
                  <div className="absolute top-0 left-0 h-1.5 w-full bg-blue-600 transform translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-700 ease-out rounded-t-2xl" />

                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-100/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />

                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{reason.title}</h3>
                    <p className="text-gray-700 leading-relaxed">{reason.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* CTA Section */}
        <section id="contact" className="py-16 sm:py-20 bg-gradient-to-br from-blue-600 to-indigo-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Build Your SaaS?
            </h2>
            <p className="text-xl text-blue-100 mb-10">
              Let's turn your expertise into recurring revenue.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={openModal}
                className="btn-primary-light px-8 py-4 text-blue-700 rounded-xl font-semibold text-lg"
              >
                LET'S BUILD
              </button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
