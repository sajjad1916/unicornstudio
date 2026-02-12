"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

export default function TopNavigation() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const isMobile = window.innerWidth < 768;

      if (isMobile) {
        setIsVisible(true);
      } else if (currentScrollY < lastScrollY || currentScrollY < 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Lock body scroll when sidebar is open
  useEffect(() => {
    if (sidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [sidebarOpen]);

  const closeSidebar = () => {
    setSidebarOpen(false);
    setServicesOpen(false);
  };

  const serviceLinks = [
    { name: "SaaS Products", href: "/saas-products" },
    { name: "AI Solutions", href: "/ai-solutions" },
    { name: "AI Integrations", href: "/ai-integrations" },
    { name: "Mobile Apps", href: "/mobile-apps" },
    { name: "Product Websites", href: "/product-websites" },
    { name: "Branding", href: "/branding" },
  ];

  const menuLinks = [
    { name: "Home", href: "/" },
    { name: "Portfolio", href: "/#portfolio" },
    { name: "Pricing", href: "/#pricing" },
    { name: "Testimonials", href: "/#testimonials" },
    { name: "FAQ", href: "/#faq" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <>
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

              {/* Desktop CTA Button */}
              <a
                href="#contact"
                className="hidden md:inline-flex btn-primary px-4 sm:px-6 py-2 sm:py-2.5 text-white rounded-lg sm:rounded-xl font-semibold text-xs sm:text-sm"
              >
                Book a Call
              </a>

              {/* Mobile Hamburger Button */}
              <button
                onClick={() => setSidebarOpen(true)}
                className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg hover:bg-gray-100 transition-colors"
                aria-label="Open menu"
              >
                <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar Overlay */}
      <div
        className={`fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          sidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeSidebar}
      />

      {/* Mobile Sidebar */}
      <div
        ref={sidebarRef}
        className={`fixed top-0 right-0 bottom-0 z-[70] w-[280px] bg-white shadow-2xl transition-transform duration-300 ease-out md:hidden ${
          sidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
          <span className="text-lg font-bold text-gray-900">Menu</span>
          <button
            onClick={closeSidebar}
            className="flex items-center justify-center w-9 h-9 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Close menu"
          >
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Sidebar Links */}
        <div className="overflow-y-auto h-[calc(100%-65px)] py-3">
          {/* Home */}
          <Link
            href="/"
            onClick={closeSidebar}
            className="flex items-center px-5 py-3 text-gray-800 font-medium hover:bg-blue-50 hover:text-blue-600 transition-colors"
          >
            Home
          </Link>

          {/* Services with expandable sub-menu */}
          <div>
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="flex items-center justify-between w-full px-5 py-3 text-gray-800 font-medium hover:bg-blue-50 hover:text-blue-600 transition-colors"
            >
              <span>Services</span>
              <svg
                className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${
                  servicesOpen ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                servicesOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="bg-gray-50/70 py-1">
                {serviceLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={closeSidebar}
                    className="flex items-center px-8 py-2.5 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mr-3 flex-shrink-0" />
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Other menu links */}
          {menuLinks.slice(1).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={closeSidebar}
              className="flex items-center px-5 py-3 text-gray-800 font-medium hover:bg-blue-50 hover:text-blue-600 transition-colors"
            >
              {link.name}
            </Link>
          ))}

          {/* Book a Call inside sidebar */}
          <div className="px-5 pt-4 mt-2 border-t border-gray-100">
            <a
              href="#contact"
              onClick={closeSidebar}
              className="btn-primary flex items-center justify-center w-full px-6 py-3 text-white rounded-xl font-semibold text-sm"
            >
              Book a Call
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
