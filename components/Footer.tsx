import Image from "next/image";

export default function Footer() {
  const navigation = {
    services: [
      { name: "AI Solutions", href: "/ai-solutions" },
      { name: "SaaS Products", href: "/saas-products" },
      { name: "Mobile Apps", href: "/mobile-apps" },
      { name: "Product Websites", href: "/product-websites" },
      { name: "AI Integrations", href: "/ai-integrations" },
      { name: "Branding", href: "/branding" },
    ],
    company: [
      { name: "Process", href: "/#process" },
      { name: "Pricing", href: "/#pricing" },
      { name: "Portfolio", href: "/#portfolio" },
      { name: "FAQ", href: "/#faq" },
    ],
    social: [
      { name: "LinkedIn", href: "https://www.linkedin.com/company/the-unicorn-studio/" },
      { name: "X (Twitter)", href: "https://x.com/unicornstudioai" },
      { name: "Instagram", href: "https://www.instagram.com/unicornstudio.io/" },
      { name: "Facebook", href: "https://www.facebook.com/unicornstudio.io" },
    ],
  };

  return (
    <footer className="relative bg-white border-t border-gray-200 overflow-hidden">
      {/* Subtle gradient orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Brand Section */}
            <div>
              <div className="mb-4">
                <Image
                  src="/testimonial/main logo.svg"
                  alt="Unicorn Studio"
                  width={180}
                  height={48}
                  className="h-24 sm:h-28 w-auto object-contain"
                />
              </div>
              <p className="text-sm text-gray-600 leading-relaxed mb-6 max-w-sm">
                Full-service product development studio specializing in AI, SaaS, and mobile applications. From concept to launch, we bring your vision to life.
              </p>

              {/* Contact */}
              <div className="space-y-3">
                <a
                  href="mailto:contact@unicornstudio.io"
                  className="flex items-center gap-3 text-sm text-gray-600 hover:text-blue-600 transition-colors group"
                >
                  <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                    <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span>contact@unicornstudio.io</span>
                </a>
              </div>
            </div>

            {/* Services Links */}
            <div>
              <h4 className="text-sm font-semibold text-gray-900 mb-4">Services</h4>
              <ul className="space-y-3">
                {navigation.services.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-sm text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-2 group"
                    >
                      <svg className="w-4 h-4 text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                      <span className="group-hover:translate-x-1 transition-transform">{item.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="text-sm font-semibold text-gray-900 mb-4">Company</h4>
              <ul className="space-y-3">
                {navigation.company.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-sm text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-2 group"
                    >
                      <svg className="w-4 h-4 text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                      <span className="group-hover:translate-x-1 transition-transform">{item.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-sm font-semibold text-gray-900 mb-4">Social Links</h4>
              <ul className="space-y-3">
                {navigation.social.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-2 group"
                    >
                      <svg className="w-4 h-4 text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                      <span className="group-hover:translate-x-1 transition-transform">{item.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-xs text-gray-500">
              © {new Date().getFullYear()} Unicorn Studio. All rights reserved.
            </p>

            <div className="flex items-center gap-6">
              <a href="#" className="text-xs text-gray-500 hover:text-gray-900 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-xs text-gray-500 hover:text-gray-900 transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
