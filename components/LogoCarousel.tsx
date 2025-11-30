"use client";

export default function LogoCarousel() {
  const companies = [
    "Stripe",
    "Shopify",
    "GitHub",
    "Netflix",
    "Spotify",
  ];

  // Duplicate the array for seamless infinite scroll
  const duplicatedCompanies = [...companies, ...companies];

  return (
    <section className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto mb-4 sm:mb-6 lg:mb-8">
        <p className="text-center text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider">
          Trusted by innovative companies
        </p>
      </div>

      <div className="relative">
        {/* Gradient overlays for fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 lg:w-32  z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 lg:w-32 z-10 pointer-events-none" />

        {/* Scrolling container */}
        <div className="flex animate-scroll">
          {duplicatedCompanies.map((company, index) => (
            <div
              key={`${company}-${index}`}
              className="flex-shrink-0 mx-6 sm:mx-8 lg:mx-12 flex items-center justify-center"
            >
              <span className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-400 hover:text-gray-900 transition-colors duration-300">
                {company}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
