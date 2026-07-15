import type { Metadata, Viewport } from 'next';
import './globals.css';
import { AnimatedBackground } from '@/components/AnimatedBackground';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { JsonLd, organizationSchema, websiteSchema, servicesSchema } from '@/components/JsonLd';

export const metadata: Metadata = {
  metadataBase: new URL('https://revera.com.au'),
  title: {
    default: 'REVERA — AI Automation & Web Development Agency',
    template: '%s | REVERA',
  },
  description:
    'REVERA is a premium AI Automation & Web Development agency helping Australian businesses grow with AI Receptionists, AI Chatbots, and high-converting websites.',
  keywords: [
    'AI automation',
    'AI receptionist',
    'AI chatbot',
    'web development',
    'Australian business',
    'business automation',
    'AI agency',
    'Sydney AI',
  ],
  authors: [{ name: 'REVERA' }],
  creator: 'REVERA',
  publisher: 'REVERA',
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    url: 'https://revera.com.au',
    siteName: 'REVERA',
    title: 'REVERA — Automate Your Business With AI',
    description:
      'We build AI Receptionists, AI Chatbots and high-converting websites that save time, increase bookings and help businesses grow.',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'REVERA — AI Automation Agency',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'REVERA — Automate Your Business With AI',
    description:
      'We build AI Receptionists, AI Chatbots and high-converting websites that save time, increase bookings and help businesses grow.',
    images: ['/og-image.svg'],
    creator: '@revera',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: '/',
  },
};

export const viewport: Viewport = {
  themeColor: '#050816',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <JsonLd
          data={[organizationSchema, websiteSchema, ...servicesSchema]}
        />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className="min-h-screen bg-[rgb(var(--background))] text-white antialiased">
        <AnimatedBackground />
        <Navbar />
        <main className="relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}