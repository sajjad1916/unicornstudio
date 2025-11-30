"use client";

import { useState, useEffect } from "react";

export default function BottomNavigation() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isVisible, setIsVisible] = useState(false);

  const navLinks = [
    { name: "Services", href: "#services", id: "services" },
    { name: "Process", href: "#process", id: "process" },
    { name: "Pricing", href: "#pricing", id: "pricing" },
    { name: "Portfolio", href: "#portfolio", id: "portfolio" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById("hero");
      const sections = ["hero", "who", "services", "process", "pricing", "portfolio", "why-us", "faq", "contact"];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      // Hide navigation when in hero section
      if (heroSection) {
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
        setIsVisible(window.scrollY > heroBottom - window.innerHeight / 2);
      }

      // Detect active section
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            // Map similar sections to nav items
            if (sectionId === "hero" || sectionId === "who") {
              setActiveSection("services");
            } else if (sectionId === "why-us" || sectionId === "faq") {
              setActiveSection("portfolio");
            } else {
              setActiveSection(sectionId);
            }
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-50 px-4 transition-all duration-500 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0 pointer-events-none"
      }`}
    >
      <div className="bg-white/40 backdrop-blur-xl border border-white/30 shadow-2xl rounded-full px-4 py-3">
        <div className="flex items-center gap-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`px-3 sm:px-4 py-2 rounded-full font-medium text-sm transition-all duration-300 ${
                activeSection === link.id
                  ? "bg-blue-600 text-white shadow-lg scale-105"
                  : "text-gray-700 hover:text-blue-600 hover:bg-blue-50/50"
              }`}
            >
              {link.name}
            </a>
          ))}

          {/* Book a Meeting CTA */}
          <a
            href="#contact"
            className="ml-2 px-4 sm:px-6 py-2 bg-blue-600 text-white rounded-full font-semibold text-sm hover:bg-blue-700 hover:shadow-lg transition-all duration-300"
          >
            Book a Meeting
          </a>
        </div>
      </div>
    </nav>
  );
}
