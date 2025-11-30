"use client";

import { useEffect, useState } from "react";
import LogoCarousel from "./LogoCarousel";

export default function Hero() {
  const [products, setProducts] = useState(0);
  const [revenue, setRevenue] = useState(0);

  useEffect(() => {
    // Animate products from 0 to 50+
    const productInterval = setInterval(() => {
      setProducts((prev) => {
        if (prev >= 50) {
          clearInterval(productInterval);
          return 50;
        }
        return prev + 1;
      });
    }, 30);

    // Animate revenue from 0 to 100M
    const revenueInterval = setInterval(() => {
      setRevenue((prev) => {
        if (prev >= 100) {
          clearInterval(revenueInterval);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => {
      clearInterval(productInterval);
      clearInterval(revenueInterval);
    };
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden bg-white">
      {/* Mesh gradient background */}
      <div className=" inset-0 mesh-gradient" />

      {/* Grid pattern overlay */}
      <div className=" inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:64px_64px]" />

      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl animate-blob" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl animate-blob animation-delay-2000" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-300/10 rounded-full blur-3xl animate-blob animation-delay-4000" />

      <div className="max-w-7xl mx-auto text-center relative z-10">
        {/* Badge */}
        {/* <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-medium mb-8 animate-fadeIn">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          Now accepting new projects for 2025
        </div> */}

        {/* Main heading with modern typography */}
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 leading-tight tracking-tight">
          Turn your idea into
          <br />
          <span className="gradient-text-modern">scalable products</span>
        </h1>

        {/* Subheading */}
        <p className="text-sm text-gray-600 mb-6 max-w-3xl mx-auto leading-relaxed font-light">
          Full-service AI & SaaS development. From concept to launch.
          <br className="hidden sm:block" />
          No recruiting, no managing, no overhead.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-8">
          <a
            href="#contact"
            className="group relative px-5 py-2.5 bg-blue-600 text-white rounded-lg font-semibold text-sm overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25"
          >
            <span className="relative z-10">Start Your Project</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
          <a
            href="#portfolio"
            className="px-5 py-2.5 bg-white text-gray-900 rounded-lg font-semibold text-sm border-2 border-gray-200 hover:border-blue-600 hover:shadow-lg transition-all duration-300"
          >
            View Our Work
          </a>
        </div>

        {/* Animated scrolling stats */}
        {/* <div className="grid grid-cols-2 gap-8 max-w-2xl mx-auto pt-8 border-t border-gray-200">
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-br from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-1">
              {products}+
            </div>
            <div className="text-sm text-gray-500 font-medium">Products Launched</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-br from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-1">
              ${revenue}M+
            </div>
            <div className="text-sm text-gray-500 font-medium">Revenue Generated</div>
          </div>
        </div> */}
        <LogoCarousel />
      </div>
    </section>
  );
}
