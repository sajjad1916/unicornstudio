import Link from 'next/link';
import TopNavigation from '@/components/TopNavigation';
import Footer from '@/components/Footer';

export default function AIIntegrationsPage() {
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
                Add AI to Your Product in
                <br />
                <span className="gradient-text-modern inline-block mt-2">Weeks, Not Months</span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                Your users expect intelligent features. Your competitors are shipping them. We'll integrate AI into your existing product faster than you can hire an AI team.
              </p>
            </div>
          </div>
        </section>

        {/* The Smart Way to Add AI */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                The Smart Way to Add AI
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              {/* What doesn't work */}
              <div className="bg-red-50 p-8 rounded-2xl border-2 border-red-200">
                <h3 className="text-2xl font-bold text-red-900 mb-6">What doesn't work:</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 text-xl mt-0.5">✕</span>
                    <span className="text-gray-700">Bolting on generic chatbots that frustrate users</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 text-xl mt-0.5">✕</span>
                    <span className="text-gray-700">Adding AI features that don't align with core workflows</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 text-xl mt-0.5">✕</span>
                    <span className="text-gray-700">Implementing AI because "everyone else is doing it"</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 text-xl mt-0.5">✕</span>
                    <span className="text-gray-700">Treating AI as a separate product instead of native functionality</span>
                  </li>
                </ul>
              </div>

              {/* What actually works */}
              <div className="bg-green-50 p-8 rounded-2xl border-2 border-green-200">
                <h3 className="text-2xl font-bold text-green-900 mb-6">What actually works:</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 text-xl mt-0.5">✓</span>
                    <span className="text-gray-700">AI features designed around your users' existing behaviors</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 text-xl mt-0.5">✓</span>
                    <span className="text-gray-700">Intelligence that enhances your core value proposition</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 text-xl mt-0.5">✓</span>
                    <span className="text-gray-700">Seamless integration that feels like it was always there</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 text-xl mt-0.5">✓</span>
                    <span className="text-gray-700">AI that solves the problems your users actually have</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Integration Approaches */}
        <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Integration Approaches
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
              {[
                {
                  title: "Enhance Core Features",
                  description: "Make your existing features smarter. Auto-suggestions, intelligent defaults, predictive actions - AI that users don't even notice."
                },
                {
                  title: "Add New Capabilities",
                  description: "Unlock features that weren't possible before. Natural language search, content generation, intelligent routing."
                },
                {
                  title: "Automate Workflows",
                  description: "Let AI handle the repetitive tasks. Data entry, categorization, quality checks - free your users for high-value work."
                },
                {
                  title: "Personalize Experience",
                  description: "Every user gets their perfect product. Adaptive interfaces, custom recommendations, personalized insights."
                }
              ].map((approach, index) => (
                <div key={index} className="group relative bg-white p-8 rounded-2xl border-2 border-gray-200 hover:border-gray-900 transition-colors duration-300 overflow-hidden">
                  {/* Animated blue border at top - moves left to right */}
                  <div className="absolute top-0 left-0 h-1.5 w-full bg-blue-600 transform translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-700 ease-out rounded-t-2xl" />

                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />

                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{approach.title}</h3>
                    <p className="text-gray-700 leading-relaxed">{approach.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Built for Your Stack */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Built for Your Stack
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {[
                {
                  title: "Frontend Integration",
                  items: [
                    "React/Next.js components",
                    "Real-time AI responses",
                    "Optimistic UI updates",
                    "Progressive enhancement"
                  ]
                },
                {
                  title: "Backend Architecture",
                  items: [
                    "API gateway design",
                    "Queue management",
                    "Caching strategies",
                    "Cost optimization"
                  ]
                },
                {
                  title: "Model Integration",
                  items: [
                    "OpenAI/Claude/Gemini",
                    "Custom model hosting",
                    "Prompt management",
                    "Version control"
                  ]
                },
                {
                  title: "Data Pipeline",
                  items: [
                    "ETL for training data",
                    "Vector databases",
                    "Real-time processing",
                    "Privacy compliance"
                  ]
                }
              ].map((stack, index) => (
                <div key={index} className="group relative bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl border-2 border-blue-200 hover:border-gray-900 transition-colors duration-300 overflow-hidden">
                  {/* Animated blue border at top - moves left to right */}
                  <div className="absolute top-0 left-0 h-1.5 w-full bg-blue-600 transform translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-700 ease-out rounded-t-2xl" />

                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-100/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />

                  <div className="relative z-10">
                    <h3 className="text-xl font-bold text-gray-900 mb-6">{stack.title}</h3>
                    <ul className="space-y-3">
                      {stack.items.map((item, iIndex) => (
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

        {/* Our Integration Process */}
        <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Our Integration Process
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {[
                {
                  phase: "Week 1",
                  title: "AI Audit",
                  description: "We analyze your product, identify high-impact opportunities, and design an integration roadmap that aligns with your roadmap."
                },
                {
                  phase: "Week 2-3",
                  title: "Design & Prototype",
                  description: "Create AI experiences that feel native. Mockups, user flows, and interactive prototypes to validate before building."
                },
                {
                  phase: "Week 4-6",
                  title: "Build & Test",
                  description: "Develop robust AI infrastructure. From API integration to error handling, we build for reliability at scale."
                },
                {
                  phase: "Week 7-8",
                  title: "Launch & Monitor",
                  description: "Deploy with confidence. A/B testing, performance monitoring, and gradual rollout strategies."
                }
              ].map((step, index) => (
                <div key={index} className="relative bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl border-2 border-blue-200">
                  <div className="absolute -top-4 left-8 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-bold">
                    {step.phase}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 mt-2">{step.title}</h3>
                  <p className="text-gray-700 leading-relaxed text-sm">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Pricing
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
              {[
                {
                  name: "AI Feature Integration",
                  description: "Add 1-3 AI features to your existing product",
                  price: "Starting at $15,000",
                  features: [
                    "Feature design & UX",
                    "API integration",
                    "Testing & optimization",
                    "30-day support",
                    "4-week delivery"
                  ],
                  highlighted: false
                },
                {
                  name: "Comprehensive AI Enhancement",
                  description: "Transform your product with AI across multiple touchpoints",
                  price: "Starting at $40,000",
                  features: [
                    "Full product audit",
                    "5-10 AI features",
                    "Custom model training",
                    "Performance dashboard",
                    "8-week delivery"
                  ],
                  highlighted: true
                },
                {
                  name: "Enterprise AI Platform",
                  description: "Complete AI infrastructure for your organization",
                  price: "Starting at $85,000",
                  features: [
                    "Multi-product integration",
                    "Custom model development",
                    "MLOps setup",
                    "Team training",
                    "Ongoing support"
                  ],
                  highlighted: false
                }
              ].map((tier, index) => (
                <div key={index} className={`group relative bg-white p-8 rounded-2xl border-2 transition-all duration-300 overflow-hidden ${
                  tier.highlighted
                    ? "border-blue-500 shadow-2xl scale-105"
                    : "border-gray-200 hover:border-gray-900"
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
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                    <p className="text-gray-600 mb-4 text-sm">{tier.description}</p>
                    <p className="text-3xl font-bold text-blue-600 mb-6">{tier.price}</p>
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
                    <Link
                      href="#cta"
                      className={`block text-center py-3 px-6 rounded-xl font-bold transition-all duration-300 ${
                        tier.highlighted
                          ? "bg-blue-600 text-white hover:bg-blue-700 shadow-lg"
                          : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                      }`}
                    >
                      Get Started
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Success Stories
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
              {[
                {
                  before: "Manual data entry taking hours per client",
                  after: "AI extraction with 98% accuracy in seconds",
                  result: "Legal tech SaaS - 300% productivity increase"
                },
                {
                  before: "Generic search returning irrelevant results",
                  after: "Semantic search understanding user intent",
                  result: "Ecommerce platform - 45% increase in conversions"
                },
                {
                  before: "Support team overwhelmed with repetitive questions",
                  after: "AI handling 70% of queries automatically",
                  result: "B2B SaaS - $500K annual savings"
                }
              ].map((story, index) => (
                <div key={index} className="group relative bg-white p-8 rounded-2xl border-2 border-gray-200 hover:border-gray-900 transition-colors duration-300 overflow-hidden">
                  {/* Animated blue border at top - moves left to right */}
                  <div className="absolute top-0 left-0 h-1.5 w-full bg-blue-600 transform translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-700 ease-out rounded-t-2xl" />

                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />

                  <div className="relative z-10">
                    <div className="mb-6">
                      <div className="text-xs font-bold text-red-600 mb-2">BEFORE</div>
                      <p className="text-gray-700 text-sm leading-relaxed">{story.before}</p>
                    </div>
                    <div className="mb-6">
                      <div className="text-xs font-bold text-green-600 mb-2">AFTER</div>
                      <p className="text-gray-700 text-sm leading-relaxed">{story.after}</p>
                    </div>
                    <div className="pt-4 border-t-2 border-gray-100">
                      <p className="text-blue-900 font-bold text-sm">{story.result}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="cta" className="py-16 sm:py-20 bg-gradient-to-br from-blue-600 to-indigo-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Ship AI Features?
            </h2>
            <p className="text-xl text-blue-100 mb-10">
              Your competitors are already building. Let's help you leap ahead.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#cta"
                className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl"
              >
                Get AI Integration Roadmap
              </Link>
              <Link
                href="/#cta"
                className="bg-blue-700 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-800 transition-all duration-300 border-2 border-white/20"
              >
                See Integration Examples
              </Link>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
