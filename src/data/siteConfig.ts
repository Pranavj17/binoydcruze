export const siteConfig = {
  name: 'Binoy Dcruz',
  title: 'Binoy Dcruz | Financial Advisor & Wellness Coach',
  description:
    'SEBI certified professional with 20 years of experience in wealth management, personal finance, and psychological understanding of happiness and enlightenment.',
  url: 'https://binoydcruz.com',
  ogImage: '/og-image.jpg',
  links: {
    linkedin: 'https://www.linkedin.com/in/binoy-dcruz-trusted-advisor/',
    email: 'contact@binoydcruz.com',
    phone: '+91 95351 95903',
  },
  author: {
    name: 'Binoy Dcruz',
    credentials: ['SEBI Certified', '20+ Years Experience'],
    specializations: [
      'Wealth Management',
      'Personal Finance',
      'Investment Advisory',
      'Financial Planning',
      'Happiness & Enlightenment Training',
    ],
  },
  analytics: {
    // Cloudflare Web Analytics beacon token
    cfBeacon: '', // Add after setup
  },
} as const;

export type SiteConfig = typeof siteConfig;
