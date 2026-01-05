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
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-white via-blue-50/30 to-white pt-24 sm:pt-32 pb-8 sm:pb-10">
      {/* Mesh gradient background */}
      <div className="absolute inset-0 mesh-gradient opacity-60" />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:64px_64px]" />

      {/* Enhanced animated gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-gradient-to-r from-blue-400/30 to-cyan-400/20 rounded-full blur-3xl animate-blob" />
      <div className="absolute bottom-1/4 -right-32 w-[500px] h-[500px] bg-gradient-to-l from-indigo-400/30 to-purple-400/20 rounded-full blur-3xl animate-blob animation-delay-2000" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-br from-blue-300/20 to-cyan-300/10 rounded-full blur-3xl animate-blob animation-delay-4000" />

      {/* Floating geometric shapes */}
      <div className="absolute top-20 left-[10%] w-20 h-20 border-2 border-blue-200/40 rounded-2xl rotate-12 animate-float" />
      <div className="absolute bottom-32 right-[15%] w-16 h-16 border-2 border-purple-200/40 rounded-full animate-float animation-delay-2000" />
      <div className="absolute top-1/3 right-[8%] w-12 h-12 border-2 border-cyan-200/40 rounded-lg -rotate-12 animate-float animation-delay-4000" />

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <div className="text-center mb-4 sm:mb-12">
          {/* Animated Badge */}
          {/* <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200/60 text-blue-700 text-xs sm:text-sm font-semibold mb-6 sm:mb-8 animate-fadeIn shadow-lg shadow-blue-100/50 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
            </span>
            Now accepting new projects for 2025
          </div> */}

          {/* Main heading with enhanced typography */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 sm:mb-8 leading-[1.1] tracking-tight px-2">
            Turn your idea into
            <br />
            <span className="gradient-text-modern inline-block mt-2">scalable AI & SaaS products</span>
            <br />
            <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-gray-600 mt-3 sm:mt-4 block">without the hiring hassle</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-8 sm:mb-10 max-w-3xl mx-auto leading-relaxed px-4">
            We handle the entire journey from concept to launch. You bring the vision and domain expertise. We bring world-class product development. No recruiting, no managing, no overhead.
          </p>

          {/* Feature pills */}
          {/* <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10 sm:mb-12 px-4">
            <div className="flex items-center gap-1.5 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white border border-gray-200 shadow-sm text-xs sm:text-sm text-gray-700 font-medium">
              <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Fixed Price</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white border border-gray-200 shadow-sm text-xs sm:text-sm text-gray-700 font-medium">
              <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
              <span>2-12 Weeks</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white border border-gray-200 shadow-sm text-xs sm:text-sm text-gray-700 font-medium">
              <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
              </svg>
              <span>Production Ready</span>
            </div>
          </div> */}

          {/* CTA Buttons with enhanced styling */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-12 sm:mb-16 px-4 w-full max-w-md sm:max-w-none mx-auto">
            <a
              href="#contact"
              className="btn-primary group w-full sm:w-auto px-8 py-4 text-white rounded-xl font-semibold text-base text-center flex items-center justify-center gap-2"
            >
              <span className="relative z-10">Start Building</span>
              <svg className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#portfolio"
              className="btn-secondary w-full sm:w-auto px-8 py-4 bg-white text-gray-900 rounded-xl font-semibold text-base border-2 border-gray-300 text-center backdrop-blur-sm"
            >
              <span className="relative z-10">See Our Work</span>
            </a>
          </div>

          {/* Animated stats with glassmorphism */}
          {/* <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto mb-12 sm:mb-16 px-4">
            <div className="text-center p-4 sm:p-6 rounded-2xl bg-white/60 backdrop-blur-sm border border-gray-200/60 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-br from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2">
                {products}+
              </div>
              <div className="text-xs sm:text-sm text-gray-600 font-semibold">Products Launched</div>
            </div>
            <div className="text-center p-4 sm:p-6 rounded-2xl bg-white/60 backdrop-blur-sm border border-gray-200/60 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-br from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">
                ${revenue}M+
              </div>
              <div className="text-xs sm:text-sm text-gray-600 font-semibold">Revenue Generated</div>
            </div>
            <div className="text-center p-4 sm:p-6 rounded-2xl bg-white/60 backdrop-blur-sm border border-gray-200/60 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-br from-cyan-600 to-blue-600 bg-clip-text text-transparent mb-2">
                100%
              </div>
              <div className="text-xs sm:text-sm text-gray-600 font-semibold">Client Satisfaction</div>
            </div>
            <div className="text-center p-4 sm:p-6 rounded-2xl bg-white/60 backdrop-blur-sm border border-gray-200/60 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-br from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                24/7
              </div>
              <div className="text-xs sm:text-sm text-gray-600 font-semibold">Support Available</div>
            </div>
          </div> */}
           <div className="mt-1 sm:mt-12">
          <LogoCarousel />
        </div>
        </div>


        {/* Logo Carousel */}
       
      </div>
    </section>
  );
}
