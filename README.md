# 🌐 VASTscribe - Premium AI Transcription Landing Page

[![CI](https://github.com/vastscribe/landing/actions/workflows/ci.yml/badge.svg)](https://github.com/vastscribe/landing/actions/workflows/ci.yml)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Next.js](https://img.shields.io/badge/Next.js-14-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)](https://www.typescriptlang.org/)

A **premium SaaS landing page** for VASTscribe, built with Next.js 14, TailwindCSS, and Framer Motion. Features a modern dark theme, glassmorphism design, and smooth animations.

## ✨ Features

### 🎨 Design System
- **Premium brand colors** with custom gradient palette
- **Glassmorphism effects** with backdrop blur and transparency
- **Dark/Light mode** toggle with system preference detection
- **Responsive design** optimized for mobile-first experience
- **Custom animations** with Framer Motion and CSS transitions

### 🚀 Performance
- **Next.js 14** with App Router and React Server Components
- **Static export** ready for CDN deployment
- **Optimized images** and fonts with next/font
- **TypeScript** for type safety and better DX
- **Tree-shaking** and code splitting out of the box

### 🎭 Interactive Components
- **Cursor-following gradient** that follows mouse movement
- **Animated hero section** with morphing SVG waveforms
- **3D-tilt cards** with glassmorphism effects
- **Scroll-triggered animations** using Framer Motion
- **Drag & drop upload zone** with file validation
- **Pricing table** with smooth monthly/annual toggle

### 📱 Pages & Sections
- **Hero Section** - Full-screen with parallax effects
- **Features Grid** - Interactive cards with hover animations
- **Pricing Table** - Glass cards with popular plan highlighting
- **Upload Zone** - Drag-and-drop with Lottie animations
- **Dashboard** - Placeholder with animated statistics
- **Legal Pages** - Privacy policy with proper formatting

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

```bash
# Clone the repository
git clone https://github.com/vastscribe/landing.git
cd vastscribe-landing

# Install dependencies
pnpm install

# Start development server
pnpm dev

# Navigate to http://localhost:3000
```

### Build & Deploy

```bash
# Build for production
pnpm build

# Start production server
pnpm start

# Export static files
pnpm export
```

## 🛠️ Development

### Project Structure

```
├── app/                    # Next.js 14 App Router
│   ├── globals.css        # Global styles & Tailwind
│   ├── layout.tsx         # Root layout with providers
│   ├── page.tsx          # Homepage
│   ├── pricing/          # Pricing page
│   ├── upload/           # Upload page
│   ├── dashboard/        # Dashboard page
│   └── legal/            # Legal pages
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   ├── HeroSection.tsx   # Landing hero
│   ├── FeaturesGrid.tsx  # Features showcase
│   ├── PricingTable.tsx  # Pricing plans
│   ├── Navbar.tsx        # Navigation bar
│   └── Footer.tsx        # Site footer
├── lib/                   # Utility functions
│   ├── utils.ts          # Common utilities
│   └── seo.ts            # SEO configuration
└── public/               # Static assets
```

### Scripts

```bash
pnpm dev          # Start development server
pnpm build        # Build for production
pnpm start        # Start production server
pnpm lint         # Run ESLint
pnpm type-check   # Run TypeScript checks
pnpm export       # Export static site
```

### Environment Variables

Create a `.env.local` file:

```env
# Optional: Analytics & tracking
NEXT_PUBLIC_GA_ID=your_google_analytics_id
NEXT_PUBLIC_VERCEL_URL=your_vercel_url

# TODO: Add when implementing backend
# NEXT_PUBLIC_API_URL=your_api_url
# WAITLIST_API_KEY=your_waitlist_api_key
```

## 🎨 Customization

### Brand Colors

Edit `tailwind.config.ts` to customize the color palette:

```ts
colors: {
  brand: {
    50: '#f5f4ff',    // Light background
    500: '#4F46E5',   // Primary brand
    600: '#4136d0',   // Primary darker
    900: '#1B1460',   // Dark accent
  },
  accent: '#7F5AF0',  // Neon accent
  darkBg: '#0E0B1F',  // Dark background
}
```

### Animations

Framer Motion animations use these defaults:

```ts
const spring = { mass: 1, stiffness: 120, damping: 14 }
```

Disable animations for accessibility:

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

## 🔧 Tech Stack

- **[Next.js 14](https://nextjs.org/)** - React framework with App Router
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety
- **[TailwindCSS](https://tailwindcss.com/)** - Utility-first CSS
- **[Framer Motion](https://www.framer.com/motion/)** - Animation library
- **[React Icons](https://react-icons.github.io/react-icons/)** - Icon library
- **[Radix UI](https://www.radix-ui.com/)** - Unstyled components
- **[Vercel OG](https://vercel.com/docs/concepts/functions/edge-functions/og-image-generation)** - Dynamic social images

## 📦 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Other Platforms

The project exports to static files and can be deployed to:
- **Netlify** - Drop the `out/` folder
- **GitHub Pages** - Enable Pages with `out/` folder
- **AWS S3** - Upload `out/` to S3 bucket
- **Cloudflare Pages** - Connect repository

## 🚧 TODO

### Backend Integration
- [ ] Implement waitlist API endpoint
- [ ] Add user authentication (Auth0/Supabase)
- [ ] Connect upload functionality
- [ ] Add payment processing (Stripe)
- [ ] Implement dashboard API

### Features
- [ ] Add blog section
- [ ] Implement search functionality
- [ ] Add testimonials carousel
- [ ] Create admin dashboard
- [ ] Add email templates

### Performance
- [ ] Add service worker for caching
- [ ] Implement image optimization
- [ ] Add lazy loading for components
- [ ] Set up monitoring (Sentry)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Design inspiration from modern SaaS platforms
- Icons by [Heroicons](https://heroicons.com/)
- Fonts by [Google Fonts](https://fonts.google.com/)
- Animations powered by [Framer Motion](https://www.framer.com/motion/)

---

<div align="center">
  <p>Built with ❤️ for content creators</p>
  <p>
    <a href="https://vastscribe.com">Website</a> •
    <a href="mailto:hello@vastscribe.com">Contact</a> •
    <a href="https://twitter.com/vastscribe">Twitter</a>
  </p>
</div> 