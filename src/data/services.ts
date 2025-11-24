export interface Service {
  id: string;
  title: string;
  tagline: string;
  description: string;
  icon: string;
  features: string[];
  href: string;
  category: 'financial' | 'wellness';
}

export const services: Service[] = [
  {
    id: 'wealth-management',
    title: 'Wealth Management',
    tagline: 'Build and Preserve Your Wealth',
    description:
      'Comprehensive wealth management strategies tailored to your financial goals, risk tolerance, and life stage.',
    icon: 'trending-up',
    features: [
      'Portfolio construction & rebalancing',
      'Risk assessment & mitigation',
      'Tax-efficient investing',
      'Estate planning integration',
    ],
    href: '/services/financial-advisory#wealth-management',
    category: 'financial',
  },
  {
    id: 'financial-planning',
    title: 'Financial Planning',
    tagline: 'Secure Your Future',
    description:
      'Holistic financial planning covering retirement, education funding, insurance needs, and major life goals.',
    icon: 'calculator',
    features: [
      'Retirement planning',
      'Goal-based investing',
      'Insurance needs analysis',
      'Cash flow management',
    ],
    href: '/services/financial-advisory#financial-planning',
    category: 'financial',
  },
  {
    id: 'investment-advisory',
    title: 'Investment Advisory',
    tagline: 'Expert Guidance for Every Investment',
    description:
      'SEBI-certified investment advisory services to help you make informed decisions and maximize returns.',
    icon: 'bar-chart-3',
    features: [
      'Stock selection & analysis',
      'Mutual fund recommendations',
      'Fixed income strategies',
      'Alternative investments',
    ],
    href: '/services/financial-advisory#investment-advisory',
    category: 'financial',
  },
  {
    id: 'happiness-training',
    title: 'Psychology of Happiness',
    tagline: 'Discover True Contentment',
    description:
      'Training programs exploring the psychological foundations of happiness and their connection to financial well-being.',
    icon: 'smile',
    features: [
      'Understanding happiness drivers',
      'Money & happiness relationship',
      'Mindful financial decisions',
      'Stress-free wealth management',
    ],
    href: '/services/wellness-training#happiness',
    category: 'wellness',
  },
  {
    id: 'enlightenment-coaching',
    title: 'Enlightenment Coaching',
    tagline: 'Beyond Material Success',
    description:
      'Deep exploration of consciousness, purpose, and the integration of spiritual wisdom with material prosperity.',
    icon: 'sun',
    features: [
      'Purpose discovery',
      'Mindfulness practices',
      'Values alignment',
      'Holistic success framework',
    ],
    href: '/services/wellness-training#enlightenment',
    category: 'wellness',
  },
  {
    id: 'client-relations',
    title: 'Client Relations',
    tagline: 'Building Trust & Long-Term Partnerships',
    description:
      'Personalized client relationship management ensuring your financial journey is supported at every step.',
    icon: 'users',
    features: [
      'Regular portfolio reviews',
      'Personalized communication',
      'Life event planning',
      'Ongoing education',
    ],
    href: '/services/financial-advisory#client-relations',
    category: 'financial',
  },
];

export const getServicesByCategory = (category: Service['category']) =>
  services.filter((s) => s.category === category);
