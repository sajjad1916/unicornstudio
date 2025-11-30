# Unicorn Studio - Landing Page

A modern, professional landing page for Unicorn Studio built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Modern Design**: Beautiful gradient backgrounds, smooth animations, and responsive layout
- **Full-Featured Sections**:
  - Hero section with animated blob backgrounds
  - Who We Build For
  - What We Build (Services)
  - How We Build Together (Process)
  - Investment Tiers (Pricing)
  - Recent Launches (Portfolio)
  - Why Choose Us
  - FAQ with interactive accordion
  - Call to Action
  - Footer with navigation
- **Responsive Navigation**: Sticky header with mobile menu
- **Smooth Scrolling**: Anchor links for seamless navigation
- **Interactive Elements**: Hover effects, animations, and transitions

## Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **React**: 19

## Getting Started

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Run Development Server**:
   ```bash
   npm run dev
   ```

3. **Open Browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/
│   ├── globals.css       # Global styles and animations
│   ├── layout.tsx        # Root layout with metadata
│   └── page.tsx          # Main page assembling all components
├── components/
│   ├── Navigation.tsx    # Sticky navigation header
│   ├── Hero.tsx          # Hero section
│   ├── WhoWeBuildFor.tsx # Target audience section
│   ├── WhatWeBuild.tsx   # Services section
│   ├── HowWeBuild.tsx    # Process section
│   ├── InvestmentTiers.tsx # Pricing section
│   ├── RecentLaunches.tsx # Portfolio section
│   ├── WhyChooseUs.tsx   # Benefits section
│   ├── FAQ.tsx           # Frequently asked questions
│   ├── CTA.tsx           # Call to action section
│   └── Footer.tsx        # Footer with links
└── public/               # Static assets (add your images here)
```

## Customization

### Colors
The main gradient colors can be customized in [app/globals.css](app/globals.css):
- Primary gradient: Purple (#667eea) to Violet (#764ba2)

### Content
Update the content in each component file under the `components/` directory.

### Images
Add your images to the `public/` directory and reference them in your components.

## Features to Add

Consider adding these enhancements:
- Image optimization with Next.js Image component
- Contact form with email integration
- Analytics (Google Analytics, Plausible, etc.)
- SEO optimization with next-seo
- Blog section
- Case studies with detailed project pages
- Testimonials section
- Newsletter signup

## License

All rights reserved - Unicorn Studio
