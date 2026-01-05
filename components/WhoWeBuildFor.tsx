export default function WhoWeBuildFor() {
  const audiences = [
    {
      title: "Established Businesses & Agencies",
      description: "Transform your industry knowledge into recurring revenue streams. We help service companies productize their expertise without diverting focus from core operations.",
      icon: "🏢",
      features: ["Productization", "Recurring Revenue", "Core Focus Maintained"]
    },
    {
      title: "Startup Founders and Entrepreneurs",
      description: "We make your ideas into products whether you are raising your first round or validating your idea",
      icon: "👤",
      features: ["Deep Expertise", "Fast Execution", "Scalable Impact"]
    },
  ];

  return (
    <section id="who" className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs sm:text-sm font-medium mb-4 sm:mb-6">
            Our Clients
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 tracking-tight px-4">
            Who We Build For
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto font-light px-4">
            Partnering with visionaries who know their domain
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {audiences.map((audience, index) => (
            <div
              key={index}
              className="group relative bg-white p-6 sm:p-8 lg:p-10 rounded-2xl border-2 border-gray-200 hover:border-gray-900 transition-colors duration-300 overflow-hidden"
            >
              {/* Animated blue border at top - moves left to right */}
              <div className="absolute top-0 left-0 h-1.5 w-full bg-blue-600 transform translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-700 ease-out rounded-t-2xl" />

              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />

              <div className="relative z-10">
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">{audience.icon}</div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                  {audience.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4 sm:mb-6 font-light">
                  {audience.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {audience.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 bg-blue-50 text-blue-700 rounded-lg text-sm font-medium"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
