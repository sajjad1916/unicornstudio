"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Melissa from "@/public/testimonial/Melissa.jpeg";
import Daniel from "@/public/testimonial/Daniel.jpeg";
import Lokesh from "@/public/testimonial/Lokesh.jpeg";
import Tivan from "@/public/testimonial/Tivan.jpeg";

const testimonials = [
  {
    name: "Melissa Pancoast",
    role: "Operations Director",
    quote:
      "Our customer response time went from 8 hours to 30 seconds. Customer satisfaction scores increased 45% in the first month.",
    stats: [
      { label: "45% ↑ Satisfaction", bg: "bg-green-50", text: "text-green-700" },
      { label: "30 Second Response", bg: "bg-blue-50", text: "text-blue-700" },
    ],
    image: Melissa,
    tag: "AI SaaS MVP",
  },
  {
    name: "Daniel Luu",
    role: "CEO",
    quote:
      "We eliminated 80% of manual data entry and redirected our team to strategic growth initiatives. Revenue increased 200% in 6 months.",
    stats: [
      { label: "200% ↑ Revenue", bg: "bg-green-50", text: "text-green-700" },
      { label: "80% Less Manual Work", bg: "bg-blue-50", text: "text-blue-700" },
    ],
    image: Daniel,
    tag: "AI Agent & Automation",
  },
  {
    name: "Lokesh Johri",
    role: "CTO & Co-Founder",
    quote:
      "The platform's analytics tools helped us optimize our campaigns, boosting conversion rates by 60% in just three months.",
    stats: [
      { label: "60% ↑ Conversions", bg: "bg-green-50", text: "text-green-700" },
      { label: "3 Month ROI", bg: "bg-blue-50", text: "text-blue-700" },
    ],
    image: Lokesh,
    tag: "AI SaaS MVP",
  },
  {
    name: "Tivan Amour",
    role: "CTO",
    quote:
      "Integration was seamless, and we scaled our operations by 150% without additional overhead. Truly transformative.",
    stats: [
      { label: "150% ↑ Scale", bg: "bg-green-50", text: "text-green-700" },
      { label: "Zero Overhead", bg: "bg-teal-50", text: "text-teal-700" },
    ],
    image: Tivan,
    tag: "AI Agent & Automation",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const t = testimonials[current];

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Real Results from{" "}
            <span className="text-blue-500">Real Businesses</span>
          </h2>
        </div>

        <div className="relative">
          {/* Card */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-lg">
            <div className="flex items-center gap-4 mb-5">
              <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 border-2 border-gray-100">
                <Image
                  src={t.image}
                  alt={t.name}
                  width={48}
                  height={48}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="font-bold text-gray-900">{t.name}</div>
                <div className="text-sm text-gray-500">{t.role}</div>
              </div>
            </div>

            <div className="text-xs font-semibold text-blue-600 bg-blue-50 inline-block px-3 py-1 rounded-full mb-4">
              {t.tag}
            </div>

            <blockquote className="text-gray-700 leading-relaxed mb-5 italic text-lg">
              &ldquo;{t.quote}&rdquo;
            </blockquote>

            <div className="flex flex-wrap gap-3">
              {t.stats.map((stat, i) => (
                <span
                  key={i}
                  className={`${stat.bg} ${stat.text} text-xs font-semibold px-3 py-1.5 rounded-lg`}
                >
                  {stat.label}
                </span>
              ))}
            </div>
          </div>

          {/* Navigation arrows */}
          <button
            onClick={prev}
            className="absolute -left-4 sm:-left-14 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-50 text-gray-700 w-10 h-10 rounded-full flex items-center justify-center shadow-md border border-gray-200 transition-colors z-10"
            aria-label="Previous testimonial"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={next}
            className="absolute -right-4 sm:-right-14 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-50 text-gray-700 w-10 h-10 rounded-full flex items-center justify-center shadow-md border border-gray-200 transition-colors z-10"
            aria-label="Next testimonial"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                i === current ? "bg-blue-500 w-6" : "bg-gray-300"
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
