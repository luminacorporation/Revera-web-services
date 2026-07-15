import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/dashboard/', '/private/'],
    },
    sitemap: 'https://revera.com.au/sitemap.xml',
    host: 'https://revera.com.au',
  };
}