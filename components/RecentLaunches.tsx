"use client";

import { useState, useEffect } from "react";

export default function RecentLaunches() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects = [
    {
      name: "TalentAI",
      description: "Semantic candidate search for recruiting firms",
      stats: "100K+ profiles indexed with AI-powered matching",
      tags: ["AI Solution", "SaaS Product"],
      image: "/api/placeholder/800/600"
    },
    {
      name: "DataFlow",
      description: "Automated migration tool for Airtable to Supabase",
      stats: "Handles complex schemas with real-time progress tracking",
      tags: ["SaaS Product", "AI Integration"],
      image: "/api/placeholder/800/600"
    },
    {
      name: "MindfulPath",
      description: "Mental wellness app with AI coaching",
      stats: "10,000+ active users in first quarter",
      tags: ["Mobile App", "AI Integration"],
      image: "/api/placeholder/800/600"
    },
    {
      name: "ProfilePro",
      description: "AI headshot generator for professionals",
      stats: "Gemini-powered with automatic background removal",
      tags: ["AI Solution", "Product Website"],
      image: "/api/placeholder/800/600"
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % projects.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [projects.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-base font-bold text-gray-900 mb-2">
            Recent Launches
          </h2>
          <p className="text-xs text-gray-600">
            Real products, real results, real impact
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative overflow-hidden rounded-3xl bg-white shadow-2xl">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {projects.map((project, index) => (
              <div
                key={index}
                className="min-w-full flex flex-col lg:flex-row"
              >
                {/* Image Side */}
                <div className="lg:w-3/5 relative bg-gradient-to-br from-blue-500 to-cyan-500 min-h-[400px] lg:min-h-[500px]">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-white text-6xl font-bold opacity-20">
                      {project.name}
                    </div>
                  </div>
                </div>

                {/* Content Side */}
                <div className="lg:w-2/5 p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-semibold"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-sm font-bold text-gray-900 mb-2">
                    {project.name}
                  </h3>

                  <p className="text-xs text-gray-700 mb-2 leading-relaxed">
                    {project.description}
                  </p>

                  <p className="text-xs text-gray-600 mb-4">
                    {project.stats}
                  </p>

                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all duration-300"
                  >
                    <span>View Case Study</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Dots */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentIndex === index
                    ? "bg-blue-600 w-8"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
