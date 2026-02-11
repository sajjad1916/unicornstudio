import Image from 'next/image';
import Melissa from '@/public/testimonial/Melissa.jpeg';
import Daniel from '@/public/testimonial/Daniel.jpeg';
import Lokesh from '@/public/testimonial/Lokesh.jpeg';
import Tivan from '@/public/testimonial/Tivan.jpeg';

const testimonials = [
  {
    name: 'Melissa Pancoast',
    role: 'Operations Director',
    quote:
      'Our customer response time went from 8 hours to 30 seconds. Customer satisfaction scores increased 45% in the first month.',
    stats: [
      { label: '45% ↑ Satisfaction', bg: 'bg-green-50', text: 'text-green-700' },
      { label: '30 Second Response', bg: 'bg-blue-50', text: 'text-blue-700' },
    ],
    image: Melissa,
    tag: 'AI SaaS MVP',
  },
  {
    name: 'Daniel Luu',
    role: 'CEO',
    quote:
      'We eliminated 80% of manual data entry and redirected our team to strategic growth initiatives. Revenue increased 200% in 6 months.',
    stats: [
      { label: '200% ↑ Revenue', bg: 'bg-green-50', text: 'text-green-700' },
      { label: '80% Less Manual Work', bg: 'bg-blue-50', text: 'text-blue-700' },
    ],
    image: Daniel,
    tag: 'AI Agent & Automation',
  },
  {
    name: 'Lokesh Johri',
    role: 'CTO & Co-Founder',
    quote:
      'The platform\'s analytics tools helped us optimize our campaigns, boosting conversion rates by 60% in just three months.',
    stats: [
      { label: '60% ↑ Conversions', bg: 'bg-green-50', text: 'text-green-700' },
      { label: '3 Month ROI', bg: 'bg-blue-50', text: 'text-blue-700' },
    ],
    image: Lokesh,
    tag: 'AI SaaS MVP',
  },
  {
    name: 'Tivan Amour',
    role: 'CTO',
    quote:
      'Integration was seamless, and we scaled our operations by 150% without additional overhead. Truly transformative.',
    stats: [
      { label: '150% ↑ Scale', bg: 'bg-green-50', text: 'text-green-700' },
      { label: 'Zero Overhead', bg: 'bg-teal-50', text: 'text-teal-700' },
    ],
    image: Tivan,
    tag: 'AI Agent & Automation',
  },
];

export default function ServiceTestimonials() {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Real Results from{' '}
            <span className="text-blue-500">Real Businesses</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="group relative bg-white p-6 sm:p-8 rounded-2xl border-2 border-gray-200 hover:border-gray-900 transition-colors duration-300 overflow-hidden"
            >
              {/* Animated blue border at top */}
              <div className="absolute top-0 left-0 h-1.5 w-full bg-blue-600 transform translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-700 ease-out rounded-t-2xl" />

              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 border-2 border-gray-100">
                    <Image
                      src={t.image}
                      alt={t.name}
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">{t.name}</div>
                    <div className="text-sm text-gray-500">{t.role}</div>
                  </div>
                </div>

                <div className="text-xs font-semibold text-blue-600 bg-blue-50 inline-block px-3 py-1 rounded-full mb-4">
                  {t.tag}
                </div>

                <blockquote className="text-gray-700 leading-relaxed mb-5 italic">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>

                <div className="flex flex-wrap gap-3">
                  {t.stats.map((stat, i) => (
                    <span
                      key={i}
                      className={`${stat.bg} ${stat.text} text-xs font-semibold px-3 py-1.5 rounded-lg`}
                    >
                      {stat.label}
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
