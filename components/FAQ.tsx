"use client";

import { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How quickly can we launch?",
      answer: "Most MVPs ship in 4-8 weeks. Mobile apps in 8-12 weeks. Product websites in 2-3 weeks. We've launched focused products in as fast as 10 days.",
    },
    {
      question: "Do you handle everything from branding to development?",
      answer: "Yes. We're a full-service studio. You work with one team from strategy through launch, ensuring consistency and efficiency.",
    },
    {
      question: "What if I'm not technical?",
      answer: "Perfect. We translate between business and technology. You focus on the problem and customers. We handle everything else.",
    },
    {
      question: "Can you work with our existing brand/code?",
      answer: "Absolutely. We can work within existing brand guidelines or codebases. We're comfortable inheriting and improving what you've already built.",
    },
    {
      question: "What about after launch?",
      answer: "We offer ongoing partnerships for updates, scaling, and feature development. Or we can hand off to your team with comprehensive documentation.",
    },
    {
      question: "Which AI models do you work with?",
      answer: "All major providers - OpenAI, Claude, Gemini, plus open-source models. We choose based on your specific needs and budget.",
    },
    {
      question: "Why \"Unicorn Studio\"?",
      answer: "We help build the rare ones - products that achieve product-market fit, sustainable growth, and real impact. Your unicorn doesn't need a billion-dollar valuation. It needs to solve real problems profitably.",
    },
  ];

  return (
    <section id="faq" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 px-4">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-3 sm:space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl overflow-hidden hover:border-blue-300 transition-colors duration-200"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 flex items-center justify-between text-left bg-white hover:bg-gray-50 transition-colors duration-200"
              >
                <span className="text-sm sm:text-base font-semibold text-gray-900 pr-3">
                  {faq.question}
                </span>
                <svg
                  className={`w-5 h-5 sm:w-6 sm:h-6 text-blue-600 flex-shrink-0 transition-transform duration-200 ${
                    openIndex === index ? "transform rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-50">
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
