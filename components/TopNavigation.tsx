"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function TopNavigation() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show navbar when scrolling up, hide when scrolling down
      if (currentScrollY < lastScrollY || currentScrollY < 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="bg-white/80 backdrop-blur-xl border-b border-gray-200/50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16">
            {/* Logo/Brand */}
            <Link href="/" className="flex items-center group">
              <Image
                src="/testimonial/main logo.svg"
                alt="Unicorn Studio"
                width={160}
                height={40}
                className="h-24 sm:h-28 w-auto object-contain"
                priority
              />
            </Link>

            {/* CTA Button */}
            <a
              href="#contact"
              className="btn-primary px-4 sm:px-6 py-2 sm:py-2.5 text-white rounded-lg sm:rounded-xl font-semibold text-xs sm:text-sm"
            >
              Book a Call
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
