# Logo Carousel Feature

## Overview
An infinite auto-scrolling logo carousel showcasing trusted company brands, positioned between the Hero section and "Who We Build For" section.

## Features

### ✨ Auto-Scrolling Animation
- **Direction**: Right to left
- **Speed**: 20 seconds per full cycle
- **Effect**: Seamless infinite loop
- **Interaction**: Pauses on hover

### 🎨 Visual Design
- **Modern gradient logos** with different color schemes
- **Fade edges** using gradient overlays
- **Shadow effects** for depth
- **Hover scale animation** for interactivity

### 🏢 Companies Featured
1. **Stripe** - Blue gradient (from-blue-600 to-blue-700)
2. **Shopify** - Green gradient (from-green-600 to-green-700)
3. **GitHub** - Dark gradient (from-gray-700 to-gray-900)
4. **Netflix** - Red gradient (from-red-600 to-red-700)
5. **Spotify** - Light green gradient (from-green-500 to-green-600)

## Technical Implementation

### Component Structure
```
LogoCarousel.tsx
├── Header text ("Trusted by innovative companies")
├── Gradient fade overlays (left & right)
└── Scrolling container with duplicated logos
```

### Animation
- Uses CSS `@keyframes scroll` animation
- Translates from 0 to -50% (half the duplicated array)
- Creates seamless infinite loop effect
- Pauses on hover for better UX

### Styling
- White background with top/bottom borders
- 200px width per logo
- 32px horizontal spacing between logos
- Gradient overlays for smooth fade-in/fade-out

## Code Highlights

### Infinite Scroll Logic
```javascript
const duplicatedCompanies = [...companies, ...companies];
```
- Duplicates the company array
- Animation translates -50% (shows first set, loops back)
- Creates seamless infinite effect

### CSS Animation
```css
@keyframes scroll {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
```

### Hover Pause
```css
.animate-scroll:hover {
  animation-play-state: paused;
}
```

## Positioning
Located in homepage layout:
```
Hero Section
↓
Logo Carousel ← NEW
↓
Who We Build For
```

## Customization Options

### Change Speed
Modify animation duration in globals.css:
```css
.animate-scroll {
  animation: scroll 20s linear infinite; /* Change 20s */
}
```

### Add More Companies
Edit the companies array in LogoCarousel.tsx:
```javascript
const companies = [
  { name: "CompanyName", color: "from-color-600 to-color-700" },
  // Add more...
];
```

### Adjust Logo Width
Change width in the component:
```javascript
style={{ width: "200px" }} // Adjust size
```

### Modify Spacing
Change horizontal margin:
```javascript
className="flex-shrink-0 mx-8" // Change mx-8
```

## Browser Compatibility
- ✅ All modern browsers
- ✅ CSS animations supported
- ✅ Gradient overlays
- ✅ Transform animations

## Performance
- Lightweight CSS animations
- No JavaScript calculations for scroll
- GPU-accelerated transforms
- Smooth 60fps animation

## Accessibility
- Respects `prefers-reduced-motion`
- Pausable on hover
- Screen reader friendly company names

## Future Enhancements
- Real company logo images instead of text
- Different animation speeds option
- Vertical scroll variant
- Click-through to case studies
- Dynamic loading from CMS
- Multiple rows for more logos

---

**Result**: A modern, professional logo carousel that builds trust and credibility while adding visual interest to the homepage.
