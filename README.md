# Binoy Dcruz - Portfolio Website

Professional portfolio website for Binoy Dcruz, a SEBI certified financial advisor and wellness coach with 20+ years of experience.

## 🌟 Features

- **Modern Design**: Built with Astro, React, and Tailwind CSS
- **Fast Performance**: Static site generation with optimal loading speeds
- **Responsive**: Mobile-first design that works on all devices
- **SEO Optimized**: Comprehensive meta tags and structured data
- **Accessible**: WCAG compliant with proper semantic HTML

## 🚀 Tech Stack

- **Framework**: [Astro](https://astro.build/) v5.x
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) v4.x
- **Interactive Components**: [React](https://react.dev/) v19
- **Forms**: React Hook Form
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Cloudflare Pages

## 📂 Project Structure

```
binoydcruze/
├── public/              # Static assets
│   └── images/          # Image files
├── src/
│   ├── components/      # Reusable components
│   │   ├── common/      # Common components (Button, Card, etc.)
│   │   ├── layout/      # Layout components (Header, Footer)
│   │   ├── sections/    # Page sections (Hero, About, Services)
│   │   └── ui/          # UI components (ContactForm)
│   ├── data/            # Data files (siteConfig, services, navigation)
│   ├── layouts/         # Page layouts
│   ├── pages/           # Route pages
│   ├── styles/          # Global styles
│   └── utils/           # Utility functions
├── functions/           # Cloudflare Workers (contact form API)
├── astro.config.mjs     # Astro configuration
├── tailwind.config.mjs  # Tailwind configuration
└── tsconfig.json        # TypeScript configuration
```

## 🛠️ Development

### Prerequisites

- Node.js >= 20.0.0
- npm or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/Pranavj17/binoydcruze.git
cd binoydcruze

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:4321`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Lint code with ESLint
- `npm run format` - Format code with Prettier
- `npm run check` - Type check with Astro

## 🎨 Design System

### Color Palette

- **Primary Navy**: #1a2744 - Professional, trustworthy
- **Trust Blue**: #2d5a8a - Financial expertise
- **Wisdom Gold**: #c9a227 - Enlightenment, wisdom
- **Neutrals**: Pearl (#e8ecf1), Ivory (#f8f9fb)

### Typography

- **Headings**: Cormorant Garamond (serif)
- **Body**: Inter (sans-serif)
- **Accent**: Lora (serif)

## 📝 Content Management

### Updating Services

Edit `src/data/services.ts` to add/modify services

### Updating Site Information

Edit `src/data/siteConfig.ts` to update contact details, social links, etc.

### Adding Images

Place images in `public/images/` directory and reference them as `/images/filename.ext`

## 🚢 Deployment

### Cloudflare Pages

1. Connect GitHub repository to Cloudflare Pages
2. Set build settings:
   - Build command: `npm run build`
   - Build output directory: `dist`
   - Node version: `20`
3. Deploy!

### Environment Variables

Set these in Cloudflare Pages dashboard:
- `RESEND_API_KEY` - For contact form emails
- `CONTACT_EMAIL` - Destination email address

## 📧 Contact Form

The contact form uses Cloudflare Workers (in `functions/api/contact.ts`) and Resend for email delivery.

To enable:
1. Sign up for [Resend](https://resend.com/)
2. Get API key
3. Add environment variables in Cloudflare Pages

## 🔗 Links

- **LinkedIn**: [binoy-dcruz-trusted-advisor](https://www.linkedin.com/in/binoy-dcruz-trusted-advisor/)
- **Website**: https://binoydcruz.com (after deployment)

## 📄 License

MIT License - See LICENSE file for details

## 👨‍💻 Developer

Built by [Pranav](https://github.com/Pranavj17)

---

© 2025 Binoy Dcruz. All rights reserved.
