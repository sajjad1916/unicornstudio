"use client";

import TopNavigation from '@/components/TopNavigation';
import Footer from '@/components/Footer';
import ServiceTestimonials from '@/components/ServiceTestimonials';
import FlipCard from '@/components/FlipCard';
import { useCalendly } from '@/components/CalendlyProvider';

export default function MobileAppsPage() {
  const { openModal } = useCalendly();
  return (
    <>
      <TopNavigation />
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative pt-24 sm:pt-32 pb-16 sm:pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-5xl mx-auto">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 sm:mb-8 leading-[1.1] tracking-tight">
                Mobile Apps That Users Love
                <br />
                <span className="gradient-text-modern inline-block mt-2">and Businesses Scale</span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-600 leading-relaxed">
                Native performance. Stunning design. Built to grow.
                <br />
                We create mobile experiences that stand out in crowded app stores.
              </p>
            </div>
          </div>
        </section>

        {/* Why Mobile Matters More Than Ever */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Why Mobile Matters More Than Ever
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {[
                {
                  stat: "90%",
                  description: "of mobile time is spent in apps"
                },
                {
                  stat: "88%",
                  description: "more engagement with push notifications"
                },
                {
                  stat: "Mobile-first",
                  description: "users expect native experiences"
                },
                {
                  stat: "App store",
                  description: "presence builds credibility"
                }
              ].map((item, index) => (
                <div key={index} className="group relative bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl border-2 border-blue-200 hover:border-gray-900 transition-colors duration-300 overflow-hidden text-center">
                  {/* Animated blue border at top */}
                  <div className="absolute top-0 left-0 h-1.5 w-full bg-blue-600 transform translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-700 ease-out rounded-t-2xl" />

                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-100/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />

                  <div className="relative z-10">
                    <h3 className="text-3xl font-bold text-gray-900 mb-3">{item.stat}</h3>
                    <p className="text-gray-700 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Apps We Build */}
        <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Apps We Build
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {[
                {
                  title: "Consumer Apps",
                  description: "Social, entertainment, lifestyle - apps that become daily habits with millions of users."
                },
                {
                  title: "Business Tools",
                  description: "Productivity, collaboration, field service - apps that make work better on the go."
                },
                {
                  title: "Health & Wellness",
                  description: "Fitness tracking, mental health, medical - apps that improve lives with sensitive data handling."
                },
                {
                  title: "Marketplace & Commerce",
                  description: "Shopping, delivery, booking - transactional apps with complex flows and payments."
                },
                {
                  title: "AI-Native Mobile",
                  description: "Voice assistants, image recognition, personal AI - intelligence in your pocket."
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

        {/* Our Mobile Tech Stack */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Our Mobile Tech Stack
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {[
                {
                  title: "Native Development",
                  items: [
                    "iOS (Swift/SwiftUI)",
                    "Android (Kotlin/Jetpack)",
                    "Platform-specific features",
                    "Optimal performance"
                  ]
                },
                {
                  title: "Cross-Platform",
                  items: [
                    "React Native",
                    "Flutter",
                    "Single codebase",
                    "40% faster delivery"
                  ]
                },
                {
                  title: "Backend Infrastructure",
                  items: [
                    "Real-time sync",
                    "Push notifications",
                    "Cloud storage",
                    "API development"
                  ]
                },
                {
                  title: "AI Integration",
                  items: [
                    "On-device ML",
                    "Cloud AI APIs",
                    "Voice & vision",
                    "Natural language"
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

        {/* What's Included */}
        <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                What&apos;s Included
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {[
                {
                  title: "Core Features",
                  items: [
                    "Stunning UI/UX design",
                    "User authentication",
                    "Push notifications",
                    "Analytics integration",
                    "Offline functionality"
                  ]
                },
                {
                  title: "Advanced Capabilities",
                  items: [
                    "In-app purchases",
                    "Social features",
                    "Location services",
                    "Camera/media handling",
                    "Real-time chat"
                  ]
                },
                {
                  title: "Launch Support",
                  items: [
                    "App store optimization",
                    "Submission handling",
                    "Beta testing setup",
                    "Launch marketing",
                    "Post-launch iterations"
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

        {/* Our Mobile Process */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Our Mobile Process
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {[
                {
                  phase: "Week 1-2",
                  title: "Strategy & Design",
                  description: "User research, competitive analysis, and experience design. We map every screen and interaction."
                },
                {
                  phase: "Week 3-4",
                  title: "Prototype",
                  description: "Interactive prototype for user testing. Validate flows and features before development."
                },
                {
                  phase: "Week 5-10",
                  title: "Development",
                  description: "Agile sprints with weekly demos. Clean code, comprehensive testing, and continuous integration."
                },
                {
                  phase: "Week 11-12",
                  title: "Launch",
                  description: "App store submission, marketing materials, and launch campaign. We handle the entire process."
                }
              ].map((step, index) => (
                <FlipCard key={index} phase={step.phase} title={step.title} description={step.description} />
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Options */}
        <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Pricing Options
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
              {[
                {
                  name: "Mobile MVP",
                  description: "Test your app concept with real users",
                  price: "$6,000",
                  features: [
                    "iOS or Android",
                    "5-8 core screens",
                    "Basic backend",
                    "8-week delivery"
                  ],
                  highlighted: false
                },
                {
                  name: "Complete Mobile App",
                  description: "Launch on both iOS and Android",
                  price: "$20,000",
                  features: [
                    "Both platforms",
                    "10-15 screens",
                    "Full backend",
                    "Push & analytics",
                    "12-week delivery"
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

        {/* Recent Launches */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Recent Launches
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
              {[
                {
                  name: "FitTrack - Fitness App",
                  metrics: [
                    "50K downloads in 3 months",
                    "4.8 star rating",
                    "AI-powered workout plans"
                  ]
                },
                {
                  name: "QuickServe - Restaurant Management",
                  metrics: [
                    "500+ restaurants",
                    "$1M+ processed monthly",
                    "Real-time order management"
                  ]
                },
                {
                  name: "MindSpace - Mental Wellness",
                  metrics: [
                    "25K active users",
                    "85% weekly retention",
                    "GPT-powered journaling"
                  ]
                }
              ].map((project, index) => (
                <div key={index} className="group relative bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl border-2 border-blue-200 hover:border-gray-900 transition-colors duration-300 overflow-hidden">
                  {/* Animated blue border at top */}
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

        {/* App Store Success Factors */}
        <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                App Store Success Factors
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
              {[
                {
                  title: "Great First Impression",
                  description: "Screenshots that sell, descriptions that convert, and reviews that build trust."
                },
                {
                  title: "Retention Mechanics",
                  description: "Push notifications, streaks, rewards - features that bring users back daily."
                },
                {
                  title: "Viral Growth",
                  description: "Social sharing, referral programs, network effects - built-in growth engines."
                },
                {
                  title: "Monetization Strategy",
                  description: "Subscriptions, in-app purchases, ads - revenue models that align with user value."
                }
              ].map((reason, index) => (
                <div key={index} className="group relative bg-white p-8 rounded-2xl border-2 border-gray-200 hover:border-gray-900 transition-colors duration-300 overflow-hidden">
                  {/* Animated blue border at top */}
                  <div className="absolute top-0 left-0 h-1.5 w-full bg-blue-600 transform translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-700 ease-out rounded-t-2xl" />

                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />

                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{reason.title}</h3>
                    <p className="text-gray-700 leading-relaxed">{reason.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ServiceTestimonials />

        {/* CTA Section */}
        <section id="contact" className="py-16 sm:py-20 bg-gradient-to-br from-blue-600 to-indigo-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              Let&apos;s Build Your App
            </h2>
            <p className="text-xl text-blue-100 mb-10">
              From idea to app store success. We handle everything.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={openModal}
                className="btn-primary text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300"
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
