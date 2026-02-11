"use client";

import Image from "next/image";

export default function LogoCarousel() {
  const companies = [
    { name: "LeverageFlo", src: "/testimonial/levarage.png" },
    { name: "InCarton", src: "/testimonial/incarton.png" },
    { name: "AppsMove", src: "/testimonial/appsmove.webp" },
    { name: "PruShip", src: "/testimonial/pruship_logo.png" },
    { name: "Q&A ERP", src: "/testimonial/qa.webp" },
    { name: "The Wave", src: "/testimonial/wavelogo.webp" },
    { name: "LeverageFlo AI", src: "/testimonial/leveragefloai.svg" },
  ];

  // Duplicate the array for seamless infinite scroll
  const duplicatedCompanies = [...companies, ...companies];

  return (
    <section className="py-8 sm:py-6 lg:py-4 px-4 sm:px-6 lg:px-8 bg-transparent overflow-hidden">
      <div className="relative">
        {/* Gradient overlays for fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 lg:w-32 z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 lg:w-32 z-10 pointer-events-none" />

        {/* Scrolling container */}
        <div className="flex items-center animate-scroll">
          {duplicatedCompanies.map((company, index) => (
            <div
              key={`${company.name}-${index}`}
              className="flex-shrink-0 mx-6 sm:mx-8 lg:mx-12 flex items-center justify-center"
            >
              <Image
                src={company.src}
                alt={company.name}
                width={160}
                height={50}
                className="h-8 sm:h-10 lg:h-12 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
