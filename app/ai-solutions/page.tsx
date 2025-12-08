import Link from 'next/link';
import TopNavigation from '@/components/TopNavigation';
import Footer from '@/components/Footer';

export default function AISolutionsPage() {
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
              Build AI Products That
              <br />
              <span className="gradient-text-modern inline-block mt-2">Actually Solve Problems</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Turn complex business challenges into intelligent solutions. We build custom AI products that deliver real value, not just fancy demos.
            </p>
          </div>
        </div>
      </section>

      {/* What Real AI Solutions Look Like */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              What Real AI Solutions Look Like
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* What we don't build */}
            <div className="bg-red-50 p-8 rounded-2xl border-2 border-red-200">
              <h3 className="text-2xl font-bold text-red-900 mb-6">What we don't build:</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-red-500 text-xl mt-0.5">✕</span>
                  <span className="text-gray-700">Generic ChatGPT wrappers that anyone could make</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 text-xl mt-0.5">✕</span>
                  <span className="text-gray-700">"AI-powered" labels on basic if-then logic</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 text-xl mt-0.5">✕</span>
                  <span className="text-gray-700">Solutions looking for problems to solve</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 text-xl mt-0.5">✕</span>
                  <span className="text-gray-700">One-size-fits-all templates with AI buzzwords</span>
                </li>
              </ul>
            </div>

            {/* What we actually build */}
            <div className="bg-green-50 p-8 rounded-2xl border-2 border-green-200">
              <h3 className="text-2xl font-bold text-green-900 mb-6">What we actually build:</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-green-500 text-xl mt-0.5">✓</span>
                  <span className="text-gray-700">Custom AI architectures designed for your specific use case</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 text-xl mt-0.5">✓</span>
                  <span className="text-gray-700">Intelligent systems that learn and improve from user interactions</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 text-xl mt-0.5">✓</span>
                  <span className="text-gray-700">AI that enhances human capabilities, not replaces them</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 text-xl mt-0.5">✓</span>
                  <span className="text-gray-700">Products where AI creates genuine competitive advantage</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* AI Solutions We Create */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              AI Solutions We Create
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                title: "Intelligent Automation",
                description: "Replace manual workflows with AI that understands context, makes decisions, and handles edge cases like a human would."
              },
              {
                title: "Predictive Analytics",
                description: "Turn historical data into future insights. From demand forecasting to churn prediction, we build models that drive decisions."
              },
              {
                title: "Natural Language Processing",
                description: "Chat interfaces, semantic search, document analysis - make unstructured data work for your business."
              },
              {
                title: "Computer Vision",
                description: "Image recognition, quality control, visual search - extract value from visual data at scale."
              },
              {
                title: "Recommendation Engines",
                description: "Personalization that drives engagement. Netflix-style recommendations for your industry."
              },
              {
                title: "AI Agents",
                description: "Autonomous systems that plan, execute, and learn. From customer service to complex workflows."
              }
            ].map((solution, index) => (
              <div key={index} className="group relative bg-white p-8 rounded-2xl border-2 border-gray-200 hover:border-gray-900 transition-colors duration-300 overflow-hidden">
                {/* Animated blue border at top - moves left to right */}
                <div className="absolute top-0 left-0 h-1.5 w-full bg-blue-600 transform translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-700 ease-out rounded-t-2xl" />

                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />

                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{solution.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{solution.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our AI Development Process */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our AI Development Process
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {[
              {
                phase: "Week 1-2",
                title: "Problem Definition",
                description: "We start with the problem, not the technology. Deep dive into your business logic, data, and success metrics. No AI for AI's sake."
              },
              {
                phase: "Week 3-4",
                title: "Architecture Design",
                description: "Custom model selection, prompt engineering, data pipelines. We design systems that scale and improve over time."
              },
              {
                phase: "Week 5-8",
                title: "Build & Train",
                description: "Development with continuous testing. Real data, real scenarios, real validation. We build for production, not demos."
              },
              {
                phase: "Week 9+",
                title: "Deploy & Optimize",
                description: "Launch with monitoring, feedback loops, and continuous improvement. Your AI gets smarter every day."
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

      {/* Investment Options */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Investment Options
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                name: "AI Proof of Concept",
                description: "Test your AI hypothesis with real users before full commitment",
                price: "Starting at $6,500",
                features: [
                  "Feasibility study",
                  "Working prototype",
                  "Performance benchmarks",
                  "ROI projection",
                  "3-week delivery"
                ],
                highlighted: false
              },
              {
                name: "Complete AI Product",
                description: "Production-ready AI solution with full infrastructure",
                price: "Starting at $35,000",
                features: [
                  "Custom architecture",
                  "Model training & optimization",
                  "API development",
                  "Monitoring dashboard",
                  "90-day optimization support"
                ],
                highlighted: true
              },
              {
                name: "AI Transformation Package",
                description: "End-to-end AI integration across your business",
                price: "Starting at $75,000",
                features: [
                  "Multi-system integration",
                  "Team training",
                  "Process automation",
                  "Custom models",
                  "6-month partnership"
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

      {/* Case Studies */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Case Studies
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                name: "RecruitAI - Semantic Talent Matching",
                metrics: [
                  "100K+ candidate profiles indexed",
                  "85% reduction in screening time",
                  "OpenAI embeddings + custom ranking"
                ]
              },
              {
                name: "InventoryIQ - Demand Prediction",
                metrics: [
                  "40% reduction in stockouts",
                  "$2M saved in first year",
                  "Custom ML pipeline on AWS"
                ]
              },
              {
                name: "SupportBot - Intelligent Customer Service",
                metrics: [
                  "70% query resolution without human",
                  "24/7 availability",
                  "Multi-language support"
                ]
              }
            ].map((caseStudy, index) => (
              <div key={index} className="group relative bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl border-2 border-blue-200 hover:border-gray-900 transition-colors duration-300 overflow-hidden">
                {/* Animated blue border at top - moves left to right */}
                <div className="absolute top-0 left-0 h-1.5 w-full bg-blue-600 transform translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-700 ease-out rounded-t-2xl" />

                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />

                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">{caseStudy.name}</h3>
                  <ul className="space-y-3">
                    {caseStudy.metrics.map((metric, mIndex) => (
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

      {/* CTA Section */}
      <section id="cta" className="py-16 sm:py-20 bg-gradient-to-br from-blue-600 to-indigo-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Build Real AI?
          </h2>
          <p className="text-xl text-blue-100 mb-10">
            Let's skip the hype and build AI that transforms your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#cta"
              className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl"
            >
              Start Your AI Project
            </Link>
            <Link
              href="/#cta"
              className="bg-blue-700 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-800 transition-all duration-300 border-2 border-white/20"
            >
              Book Strategy Call
            </Link>
          </div>
        </div>
      </section>
    </div>
    <Footer />
    </>
  );
}
