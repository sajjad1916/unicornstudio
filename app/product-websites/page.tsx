import Link from 'next/link';
import TopNavigation from '@/components/TopNavigation';
import Footer from '@/components/Footer';

export default function ProductWebsitesPage() {
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
                Websites That Turn Visitors
                <br />
                <span className="gradient-text-modern inline-block mt-2">Into Customers</span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                Your product deserves a website that sells. We create high-converting product sites that establish credibility and drive action.
              </p>
            </div>
          </div>
        </section>

        {/* Beyond Pretty Pages */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Beyond Pretty Pages
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              {/* What doesn't work */}
              <div className="bg-red-50 p-8 rounded-2xl border-2 border-red-200">
                <h3 className="text-2xl font-bold text-red-900 mb-6">What doesn&apos;t work:</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 text-xl mt-0.5">✕</span>
                    <span className="text-gray-700">Beautiful designs with unclear messaging</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 text-xl mt-0.5">✕</span>
                    <span className="text-gray-700">Feature lists without benefit focus</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 text-xl mt-0.5">✕</span>
                    <span className="text-gray-700">Generic templates that look like everyone else</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 text-xl mt-0.5">✕</span>
                    <span className="text-gray-700">Slow-loading, over-animated experiences</span>
                  </li>
                </ul>
              </div>

              {/* What actually converts */}
              <div className="bg-green-50 p-8 rounded-2xl border-2 border-green-200">
                <h3 className="text-2xl font-bold text-green-900 mb-6">What actually converts:</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 text-xl mt-0.5">✓</span>
                    <span className="text-gray-700">Clear value proposition above the fold</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 text-xl mt-0.5">✓</span>
                    <span className="text-gray-700">Social proof that builds trust</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 text-xl mt-0.5">✓</span>
                    <span className="text-gray-700">Compelling CTAs that drive action</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 text-xl mt-0.5">✓</span>
                    <span className="text-gray-700">Fast, responsive, SEO-optimized code</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Types of Product Websites */}
        <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Types of Product Websites
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {[
                {
                  title: "SaaS Marketing Sites",
                  description: "Convert trials, showcase features, and build trust with enterprise buyers. Designed for the full customer journey."
                },
                {
                  title: "Mobile App Landing Pages",
                  description: "Drive app store downloads with compelling visuals, social proof, and clear value props. Optimized for mobile traffic."
                },
                {
                  title: "Startup Launch Sites",
                  description: "Validate ideas, collect emails, and build buzz. From waitlist pages to full product showcases."
                },
                {
                  title: "API Documentation Sites",
                  description: "Developer-friendly docs that drive adoption. Clear examples, interactive demos, and great search."
                },
                {
                  title: "E-commerce Product Pages",
                  description: "High-converting product showcases with rich media, reviews, and optimized checkout flows."
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

        {/* What Makes Our Sites Different */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                What Makes Our Sites Different
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
              {[
                {
                  title: "Research-Driven Copy",
                  description: "We interview users, analyze competitors, and test messages. Every word earns its place."
                },
                {
                  title: "Conversion Architecture",
                  description: "Information hierarchy based on user psychology. Guide visitors naturally toward conversion."
                },
                {
                  title: "Performance Obsessed",
                  description: "Sub-second load times, perfect SEO scores, and accessibility compliance. Speed is a feature."
                },
                {
                  title: "Built to Scale",
                  description: "CMS integration, component libraries, and clean code. Easy to maintain and expand."
                }
              ].map((feature, index) => (
                <div key={index} className="group relative bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl border-2 border-blue-200 hover:border-gray-900 transition-colors duration-300 overflow-hidden">
                  {/* Animated blue border at top */}
                  <div className="absolute top-0 left-0 h-1.5 w-full bg-blue-600 transform translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-700 ease-out rounded-t-2xl" />

                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-100/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />

                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                    <p className="text-gray-700 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Website Process */}
        <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Our Website Process
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {[
                {
                  phase: "Week 1",
                  title: "Research & Strategy",
                  description: "User interviews, competitor analysis, and conversion mapping. We understand what makes your customers buy."
                },
                {
                  phase: "Week 2",
                  title: "Copy & Messaging",
                  description: "Value propositions, feature benefits, and compelling CTAs. Words that sell, not just describe."
                },
                {
                  phase: "Week 3",
                  title: "Design & Prototype",
                  description: "Responsive designs in Figma. Every breakpoint considered, every interaction planned."
                },
                {
                  phase: "Week 4",
                  title: "Development & Launch",
                  description: "Built in Webflow, Framer, or custom code. Fast, SEO-optimized, and ready to convert."
                }
              ].map((step, index) => (
                <div key={index} className="group h-64 perspective-1000">
                  <div className="relative w-full h-full transition-transform duration-700 transform-style-3d group-hover:rotate-y-180">
                    {/* Front of card */}
                    <div className="absolute inset-0 w-full h-full backface-hidden bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl border-2 border-blue-200 flex flex-col items-center justify-center text-center">
                      <div className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-bold mb-4">
                        {step.phase}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                      <div className="mt-4 text-xs text-gray-500">Hover to see details</div>
                    </div>

                    {/* Back of card */}
                    <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 bg-gradient-to-br from-blue-600 to-indigo-600 p-8 rounded-2xl border-2 border-blue-700 flex items-center justify-center">
                      <p className="text-white leading-relaxed text-sm text-center">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What's Included */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                What&apos;s Included
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {[
                {
                  title: "Strategy & Research",
                  items: [
                    "User & competitor analysis",
                    "Conversion optimization plan",
                    "Content strategy",
                    "SEO keyword research"
                  ]
                },
                {
                  title: "Design & Copy",
                  items: [
                    "Responsive design (all devices)",
                    "Professional copywriting",
                    "Custom graphics/illustrations",
                    "Animation & interactions"
                  ]
                },
                {
                  title: "Development",
                  items: [
                    "Webflow/Framer/Next.js",
                    "CMS setup",
                    "Form integration",
                    "Analytics setup"
                  ]
                },
                {
                  title: "Launch & Growth",
                  items: [
                    "Performance optimization",
                    "SEO implementation",
                    "A/B testing setup",
                    "30-day support"
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

        {/* Pricing */}
        <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Pricing
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
              {[
                {
                  name: "Landing Page",
                  description: "Single page that converts",
                  price: "Starting at $3,500",
                  features: [
                    "Hero to CTA optimization",
                    "Mobile-responsive",
                    "Form integration",
                    "2-week delivery"
                  ],
                  highlighted: false
                },
                {
                  name: "Marketing Website",
                  description: "5-10 page complete site",
                  price: "Starting at $8,500",
                  features: [
                    "Full site design",
                    "CMS integration",
                    "Blog setup",
                    "SEO optimization",
                    "4-week delivery"
                  ],
                  highlighted: true
                },
                {
                  name: "Enterprise Website",
                  description: "Complex sites with advanced features",
                  price: "Starting at $15,000",
                  features: [
                    "15+ pages",
                    "Custom functionality",
                    "Multi-language",
                    "Advanced integrations",
                    "6-week delivery"
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

        {/* Conversion Stats from Recent Launches */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Conversion Stats from Recent Launches
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
              {[
                {
                  name: "TechSaaS.com",
                  before: "0.8% trial signups",
                  after: "3.2% trial signups",
                  increase: "300% conversion increase"
                },
                {
                  name: "AppLaunch.io",
                  before: "500 monthly downloads",
                  after: "2,300 monthly downloads",
                  increase: "360% download increase"
                },
                {
                  name: "B2BPlatform.com",
                  before: "10 demo requests/month",
                  after: "65 demo requests/month",
                  increase: "550% lead increase"
                }
              ].map((project, index) => (
                <div key={index} className="group relative bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl border-2 border-blue-200 hover:border-gray-900 transition-colors duration-300 overflow-hidden">
                  {/* Animated blue border at top */}
                  <div className="absolute top-0 left-0 h-1.5 w-full bg-blue-600 transform translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-700 ease-out rounded-t-2xl" />

                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-100/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />

                  <div className="relative z-10">
                    <h3 className="text-xl font-bold text-gray-900 mb-6">{project.name}</h3>
                    <div className="space-y-3">
                      <div className="flex items-start gap-2">
                        <span className="text-red-500 text-sm font-semibold">Before:</span>
                        <span className="text-gray-700 text-sm">{project.before}</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-green-500 text-sm font-semibold">After:</span>
                        <span className="text-gray-700 text-sm">{project.after}</span>
                      </div>
                      <div className="mt-4 pt-4 border-t border-blue-200">
                        <span className="text-blue-600 font-bold text-lg">{project.increase}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies We Use */}
        <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Technologies We Use
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {[
                {
                  title: "Platforms",
                  items: ["Webflow", "Framer", "WordPress", "Next.js", "Gatsby"]
                },
                {
                  title: "Analytics",
                  items: ["Google Analytics", "Mixpanel", "Hotjar", "Segment"]
                },
                {
                  title: "Marketing",
                  items: ["HubSpot", "Mailchimp", "Intercom", "ConvertKit"]
                },
                {
                  title: "Performance",
                  items: ["Cloudflare", "Vercel", "Netlify", "AWS"]
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

        {/* CTA Section */}
        <section id="cta" className="py-16 sm:py-20 bg-gradient-to-br from-blue-600 to-indigo-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              Ready for a Website That Sells?
            </h2>
            <p className="text-xl text-blue-100 mb-10">
              Let&apos;s create your high-converting product website.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#cta"
                className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl"
              >
                Start Your Website Project
              </Link>
              <Link
                href="/#cta"
                className="bg-blue-700 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-800 transition-all duration-300 border-2 border-white/20"
              >
                View Website Portfolio
              </Link>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
