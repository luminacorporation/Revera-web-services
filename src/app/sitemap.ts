import type { MetadataRoute } from 'next';

const baseUrl = 'https://revera.com.au';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/about',
    '/services',
    '/ai-receptionists',
    '/ai-chatbots',
    '/web-development',
    '/case-studies',
    '/pricing',
    '/contact',
    '/book-demo',
    '/dashboard',
    '/privacy',
    '/terms',
  ];

  const now = new Date();

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
    changeFrequency: route === '' ? 'daily' : 'weekly',
    priority: route === '' ? 1 : 0.8,
  }));
}
