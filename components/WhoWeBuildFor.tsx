export default function WhoWeBuildFor() {
  const audiences = [
    {
      title: "Established Businesses & Agencies",
      description: "Transform your industry knowledge into recurring revenue streams. We help service companies productize their expertise without diverting focus from core operations.",
      icon: "🏢",
      features: ["Productization", "Recurring Revenue", "Core Focus Maintained"]
    },
    {
      title: "Solo Founders & Domain Experts",
      description: "You understand the problem deeply. We make it real. Perfect for consultants, operators, and experts ready to scale their impact beyond billable hours.",
      icon: "👤",
      features: ["Deep Expertise", "Fast Execution", "Scalable Impact"]
    },
  ];

  return (
    <section id="who" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-medium mb-6">
            Our Clients
          </div>
          <h2 className="text-base font-bold text-gray-900 mb-2 tracking-tight">
            Who We Build For
          </h2>
          <p className="text-xs text-gray-600 max-w-2xl mx-auto font-light">
            Partnering with visionaries who know their domain
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {audiences.map((audience, index) => (
            <div
              key={index}
              className="group relative bg-white p-10 rounded-2xl border border-gray-200 card-hover"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />

              <div className="relative z-10">
                <div className="text-2xl mb-3">{audience.icon}</div>
                <h3 className="text-sm font-bold text-gray-900 mb-2">
                  {audience.title}
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed mb-3 font-light">
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
