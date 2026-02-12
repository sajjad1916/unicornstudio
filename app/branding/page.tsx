"use client";

import TopNavigation from '@/components/TopNavigation';
import Footer from '@/components/Footer';

import FlipCard from '@/components/FlipCard';
import { useCalendly } from '@/components/CalendlyProvider';

export default function BrandingPage() {
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
                Build a Brand
                <br />
                <span className="gradient-text-modern inline-block mt-2">That Sticks</span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                Great products deserve memorable brands. We create strategic brand identities that resonate with your audience and stand out in the market.
              </p>
            </div>
          </div>
        </section>

        {/* Why Brand Identity Matters */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Why Brand Identity Matters
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {[
                {
                  title: "First Impressions",
                  description: "You have 50 milliseconds to make an impression. Make it count with professional, cohesive branding."
                },
                {
                  title: "Trust & Credibility",
                  description: "Professional branding increases perceived value by 20%. Customers trust brands that look established."
                },
                {
                  title: "Market Differentiation",
                  description: "Stand out in saturated markets. Own a unique position in your customers' minds."
                },
                {
                  title: "Premium Pricing",
                  description: "Strong brands command 23% higher prices. Stop competing on cost alone."
                }
              ].map((item, index) => (
                <div key={index} className="group relative bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl border-2 border-blue-200 hover:border-gray-900 transition-colors duration-300 overflow-hidden">
                  {/* Animated blue border at top */}
                  <div className="absolute top-0 left-0 h-1.5 w-full bg-blue-600 transform translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-700 ease-out rounded-t-2xl" />

                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-100/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />

                  <div className="relative z-10">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                    <p className="text-gray-700 leading-relaxed text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Brands We Create */}
        <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Brands We Create
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {[
                {
                  title: "Tech Startups",
                  description: "Modern, scalable identities that attract investors and early adopters. Built for rapid growth."
                },
                {
                  title: "SaaS Companies",
                  description: "Professional brands that convey trust and reliability. Perfect for B2B sales."
                },
                {
                  title: "Mobile Apps",
                  description: "Eye-catching identities optimized for app stores and small screens. Designed to be memorable."
                },
                {
                  title: "AI Products",
                  description: "Forward-thinking brands that balance innovation with approachability. Making AI feel human."
                },
                {
                  title: "Developer Tools",
                  description: "Technical but not intimidating. Brands that developers respect and remember."
                }
              ].map((category, index) => (
                <div key={index} className="group relative bg-white p-8 rounded-2xl border-2 border-gray-200 hover:border-gray-900 transition-colors duration-300 overflow-hidden">
                  {/* Animated blue border at top */}
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

        {/* Our Branding Process */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Our Branding Process
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {[
                {
                  phase: "Step 1",
                  title: "Discovery & Research",
                  description: "We dive deep into your business, values, and audience. Competitive analysis, user research, and strategic positioning."
                },
                {
                  phase: "Step 2",
                  title: "Concept Development",
                  description: "Three distinct creative directions. Each with its own personality, visual language, and strategic rationale."
                },
                {
                  phase: "Step 3",
                  title: "Refinement",
                  description: "Your chosen direction refined through collaborative iteration. Every detail perfected."
                },
                {
                  phase: "Step 4",
                  title: "System Creation",
                  description: "Complete brand guidelines and assets. Everything needed for consistent application across all touchpoints."
                }
              ].map((step, index) => (
                <FlipCard key={index} phase={step.phase} title={step.title} description={step.description} />
              ))}
            </div>
          </div>
        </section>

        {/* Brand Deliverables */}
        <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Brand Deliverables
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {[
                {
                  title: "Core Identity",
                  items: [
                    "Logo design (primary + variations)",
                    "Color palette (primary, secondary, accents)",
                    "Typography system (headlines, body, UI)",
                    "Visual style (photography, illustration, icons)"
                  ]
                },
                {
                  title: "Brand Voice",
                  items: [
                    "Personality attributes",
                    "Tone of voice guide",
                    "Messaging framework",
                    "Tagline development"
                  ]
                },
                {
                  title: "Brand Guidelines",
                  items: [
                    "20-30 page brand manual",
                    "Logo usage rules",
                    "Color specifications",
                    "Typography hierarchy",
                    "Application examples"
                  ]
                },
                {
                  title: "Digital Assets",
                  items: [
                    "Social media templates",
                    "Email signatures",
                    "Presentation template",
                    "Favicon & app icons"
                  ]
                }
              ].map((feature, index) => (
                <div key={index} className="group relative bg-white p-8 rounded-2xl border-2 border-gray-200 hover:border-gray-900 transition-colors duration-300 overflow-hidden">
                  {/* Animated blue border at top */}
                  <div className="absolute top-0 left-0 h-1.5 w-full bg-blue-600 transform translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-700 ease-out rounded-t-2xl" />

                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />

                  <div className="relative z-10">
                    <h3 className="text-xl font-bold text-gray-900 mb-6">{feature.title}</h3>
                    <ul className="space-y-3">
                      {feature.items.map((item, iIndex) => (
                        <li key={iIndex} className="flex items-start gap-2">
                          <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-700 text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Investment Options */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Investment Options
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
              {[
                {
                  name: "Branding Starter Package",
                  description: "Essential identity for early-stage companies",
                  price: "$1,500",
                  features: [
                    "Logo design",
                    "Color palette",
                    "Typography selection",
                    "Basic guidelines",
                    "2-week delivery"
                  ],
                  highlighted: false
                },
                {
                  name: "Full Branding",
                  description: "Complete brand system for growing companies",
                  price: "$3,000",
                  features: [
                    "Everything in Starter",
                    "Brand voice guide",
                    "Extended guidelines",
                    "Digital templates",
                    "Social media assets",
                    "4-week delivery"
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
                    <ul className="space-y-3 mb-8">
                      {tier.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-start gap-2">
                          <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <button
                      onClick={openModal}
                      className={`block w-full text-center py-4 px-8 rounded-xl font-bold transition-all duration-300 ${
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

        {/* Recent Brand Launches */}
        <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Recent Brand Launches
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
              {[
                {
                  name: "NeuralNet - AI Analytics Platform",
                  description: "Modern, trustworthy identity that balances innovation with enterprise credibility"
                },
                {
                  name: "SwiftPay - Fintech Mobile App",
                  description: "Bold, simple brand that stands out in the crowded finance category"
                },
                {
                  name: "DevTools - Developer Platform",
                  description: "Technical but approachable identity that resonates with engineers"
                }
              ].map((project, index) => (
                <div key={index} className="group relative bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl border-2 border-blue-200 hover:border-gray-900 transition-colors duration-300 overflow-hidden">
                  {/* Animated blue border at top */}
                  <div className="absolute top-0 left-0 h-1.5 w-full bg-blue-600 transform translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-700 ease-out rounded-t-2xl" />

                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-100/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />

                  <div className="relative z-10">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{project.name}</h3>
                    <p className="text-gray-700 leading-relaxed">{project.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What Makes Our Brands Different */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                What Makes Our Brands Different
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
              {[
                {
                  title: "Strategic Foundation",
                  description: "Every creative decision tied to business objectives. Beautiful brands that also drive results."
                },
                {
                  title: "Systematic Thinking",
                  description: "Flexible design systems that scale with your business. Consistent across infinite applications."
                },
                {
                  title: "Digital-First Design",
                  description: "Optimized for screens first, print second. Perfect for modern digital products."
                },
                {
                  title: "Implementation Focus",
                  description: "We don't just deliver logos. Complete systems with templates and guidelines for real-world use."
                }
              ].map((reason, index) => (
                <div key={index} className="group relative bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl border-2 border-blue-200 hover:border-gray-900 transition-colors duration-300 overflow-hidden">
                  {/* Animated blue border at top */}
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

        {/* Brand Success Metrics */}
        <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Brand Success Metrics
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Average results from Unicorn Studio brand launches
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {[
                {
                  metric: "40%",
                  description: "increase in perceived value"
                },
                {
                  metric: "3x",
                  description: "more investor interest"
                },
                {
                  metric: "55%",
                  description: "better talent attraction"
                },
                {
                  metric: "2x",
                  description: "higher conversion rates"
                }
              ].map((item, index) => (
                <div key={index} className="group relative bg-white p-8 rounded-2xl border-2 border-gray-200 hover:border-gray-900 transition-colors duration-300 overflow-hidden text-center">
                  {/* Animated blue border at top */}
                  <div className="absolute top-0 left-0 h-1.5 w-full bg-blue-600 transform translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-700 ease-out rounded-t-2xl" />

                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />

                  <div className="relative z-10">
                    <h3 className="text-4xl font-bold text-blue-600 mb-3">{item.metric}</h3>
                    <p className="text-gray-700 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                FAQs
              </h2>
            </div>

            <div className="space-y-6">
              {[
                {
                  question: "How many logo concepts do we get?",
                  answer: "Three distinct directions, each fully developed with color and type recommendations."
                },
                {
                  question: "What if we need changes after delivery?",
                  answer: "We include two rounds of refinement. Additional changes available at hourly rate."
                },
                {
                  question: "Can you refresh our existing brand?",
                  answer: "Yes, we can evolve your current identity or create something entirely new."
                },
                {
                  question: "Do you handle naming?",
                  answer: "Yes, naming services available as an add-on to any branding package."
                },
                {
                  question: "What about trademark?",
                  answer: "We provide trademark-ready files but recommend working with legal counsel for registration."
                }
              ].map((faq, index) => (
                <div key={index} className="group relative bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl border-2 border-blue-200 hover:border-gray-900 transition-colors duration-300 overflow-hidden">
                  {/* Animated blue border at top */}
                  <div className="absolute top-0 left-0 h-1.5 w-full bg-blue-600 transform translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-700 ease-out rounded-t-2xl" />

                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-100/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />

                  <div className="relative z-10">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{faq.question}</h3>
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
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
              Ready to Build Your Brand?
            </h2>
            <p className="text-xl text-blue-100 mb-10">
              Let&apos;s create an identity that captures your vision and captivates your market.
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
