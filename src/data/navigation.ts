export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export const mainNavigation: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/#about' },
  {
    label: 'Services',
    href: '/#services',
    children: [
      { label: 'Financial Advisory', href: '/services/financial-advisory' },
      { label: 'Wellness Training', href: '/services/wellness-training' },
    ],
  },
  { label: 'Testimonials', href: '/#testimonials' },
  { label: 'Contact', href: '/#contact' },
];

export const footerNavigation = {
  services: [
    { label: 'Wealth Management', href: '/services/financial-advisory#wealth-management' },
    { label: 'Financial Planning', href: '/services/financial-advisory#financial-planning' },
    { label: 'Investment Advisory', href: '/services/financial-advisory#investment-advisory' },
    { label: 'Happiness Training', href: '/services/wellness-training#happiness' },
  ],
  company: [
    { label: 'About', href: '/#about' },
    { label: 'Services', href: '/#services' },
    { label: 'Testimonials', href: '/#testimonials' },
    { label: 'Contact', href: '/#contact' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Disclaimer', href: '/disclaimer' },
  ],
};
