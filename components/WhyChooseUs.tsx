export default function WhyChooseUs() {
  const comparisonData = [
    {
      category: "Speed to Market",
      unicorn: "21 days - 2 months",
      unicornCheck: true,
      freelancer: "2-3 months",
      freelancerCheck: false,
      agency: "4-6 months",
      agencyCheck: false,
      inHouse: "3-4 months",
      inHouseCheck: false,
    },
    {
      category: "Fixed Pricing",
      unicorn: "Fixed fee",
      unicornCheck: true,
      freelancer: "Unpredictable",
      freelancerCheck: false,
      agency: "High fixed cost",
      agencyCheck: false,
      inHouse: "Ongoing salaries",
      inHouseCheck: false,
    },
    {
      category: "Project Management",
      unicorn: "Dedicated support",
      unicornCheck: true,
      freelancer: "Self-managed",
      freelancerCheck: false,
      agency: "Account manager",
      agencyCheck: true,
      inHouse: "Direct control",
      inHouseCheck: true,
    },
    {
      category: "Technical Expertise",
      unicorn: "MVP, SaaS & AI",
      unicornCheck: true,
      freelancer: "Single technology focus",
      freelancerCheck: false,
      agency: "Multi-domain",
      agencyCheck: true,
      inHouse: "Team dependent",
      inHouseCheck: false,
    },
  ];

  return (
    <section id="why-us" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-base font-bold text-gray-900 mb-2">
            Why choose us
          </h2>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="p-4 text-left text-sm font-semibold text-gray-900">Category</th>
                <th className="p-4 text-center bg-blue-50 border-2 border-blue-200 rounded-t-2xl">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                  </div>
                  <div className="text-sm font-bold text-blue-900">Unicorn Studio</div>
                </th>
                <th className="p-4 text-center">
                  <div className="text-sm font-semibold text-gray-700">Freelancer</div>
                </th>
                <th className="p-4 text-center">
                  <div className="text-sm font-semibold text-gray-700">Traditional Agency</div>
                </th>
                <th className="p-4 text-center">
                  <div className="text-sm font-semibold text-gray-700">In-House</div>
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row, index) => (
                <tr key={index} className="border-b border-gray-100">
                  <td className="p-4 text-sm font-medium text-gray-900">
                    {row.category}
                  </td>
                  <td className="p-4 text-center bg-blue-50 border-x-2 border-blue-200">
                    <div className="flex items-center justify-center gap-2 mb-1">
                      <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>
                    <div className="text-sm font-semibold text-blue-900">
                      {row.unicorn}
                    </div>
                  </td>
                  <td className="p-4 text-center">
                    <div className="flex items-center justify-center gap-2 mb-1">
                      {row.freelancerCheck ? (
                        <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center">
                          <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                      ) : (
                        <div className="w-5 h-5 bg-red-100 rounded-full flex items-center justify-center">
                          <svg className="w-3 h-3 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </div>
                      )}
                    </div>
                    <div className="text-sm text-gray-600">
                      {row.freelancer}
                    </div>
                  </td>
                  <td className="p-4 text-center">
                    <div className="flex items-center justify-center gap-2 mb-1">
                      {row.agencyCheck ? (
                        <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center">
                          <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                      ) : (
                        <div className="w-5 h-5 bg-red-100 rounded-full flex items-center justify-center">
                          <svg className="w-3 h-3 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </div>
                      )}
                    </div>
                    <div className="text-sm text-gray-600">
                      {row.agency}
                    </div>
                  </td>
                  <td className="p-4 text-center">
                    <div className="flex items-center justify-center gap-2 mb-1">
                      {row.inHouseCheck ? (
                        <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center">
                          <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                      ) : (
                        <div className="w-5 h-5 bg-red-100 rounded-full flex items-center justify-center">
                          <svg className="w-3 h-3 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </div>
                      )}
                    </div>
                    <div className="text-sm text-gray-600">
                      {row.inHouse}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
