import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatNumber(num: number): string {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M+'
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K+'
  }
  return num.toString()
}

export const unsplashImages = {
  hero: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=1920&q=80&auto=format&fit=crop',
  barberShop: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=800&q=80&auto=format&fit=crop',
  electrician: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80&auto=format&fit=crop',
  restaurant: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80&auto=format&fit=crop',
  dentist: 'https://images.unsplash.com/photo-1606811849180-0d4b1a8b4c4e?w=800&q=80&auto=format&fit=crop',
  tradie: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80&auto=format&fit=crop',
  mechanic: 'https://images.unsplash.com/photo-1581090700227-1e8e9f8c4e0f?w=800&q=80&auto=format&fit=crop',
  businessMeeting: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80&auto=format&fit=crop',
  modernOffice: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80&auto=format&fit=crop',
  aiTechnology: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80&auto=format&fit=crop',
  customerService: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&q=80&auto=format&fit=crop',
  laptopCoding: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=800&q=80&auto=format&fit=crop',
  happyOwner: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80&auto=format&fit=crop',
  aiChatbot: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80&auto=format&fit=crop',
  websiteDesign: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80&auto=format&fit=crop',
  caseStudyBefore: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80&auto=format&fit=crop',
  caseStudyAfter: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80&auto=format&fit=crop',
  team: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80&auto=format&fit=crop',
}

export const navigationLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/ai-receptionists', label: 'AI Receptionists' },
  { href: '/ai-chatbots', label: 'AI Chatbots' },
  { href: '/web-development', label: 'Web Development' },
  { href: '/case-studies', label: 'Case Studies' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/contact', label: 'Contact' },
]

export const footerLinks = {
  services: [
    { href: '/ai-receptionists', label: 'AI Receptionists' },
    { href: '/ai-chatbots', label: 'AI Chatbots' },
    { href: '/web-development', label: 'Web Development' },
    { href: '/services', label: 'All Services' },
  ],
  company: [
    { href: '/about', label: 'About Us' },
    { href: '/case-studies', label: 'Case Studies' },
    { href: '/pricing', label: 'Pricing' },
    { href: '/contact', label: 'Contact' },
  ],
  resources: [
    { href: '/blog', label: 'Blog' },
    { href: '/help', label: 'Help Center' },
    { href: '/api-docs', label: 'API Docs' },
    { href: '/status', label: 'System Status' },
  ],
  legal: [
    { href: '/privacy', label: 'Privacy Policy' },
    { href: '/terms', label: 'Terms of Service' },
    { href: '/cookie-policy', label: 'Cookie Policy' },
    { href: '/gdpr', label: 'GDPR Compliance' },
  ],
}

export const socialLinks = [
  { href: 'https://twitter.com/revera', label: 'Twitter', icon: 'twitter' },
  { href: 'https://linkedin.com/company/revera', label: 'LinkedIn', icon: 'linkedin' },
  { href: 'https://github.com/revera', label: 'GitHub', icon: 'github' },
  { href: 'mailto:hello@revera.com.au', label: 'Email', icon: 'mail' },
]

export const stats = [
  { value: '500+', label: 'Hours Saved' },
  { value: '95%', label: 'Calls Answered' },
  { value: '24/7', label: 'AI Availability' },
  { value: '98%', label: 'Client Satisfaction' },
]