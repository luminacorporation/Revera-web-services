import { type Organization, type Service, type WebSite, type BreadcrumbList, type Thing, type WithContext } from 'schema-dts';

interface JsonLdProps {
  data: Thing | Thing[];
}

export function JsonLd({ data }: JsonLdProps) {
  const payload = Array.isArray(data)
    ? { '@context': 'https://schema.org', '@graph': data }
    : { '@context': 'https://schema.org', ...(data as object) };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(payload) }}
    />
  );
}

export const organizationSchema: Organization = {
  '@type': 'Organization',
  '@id': 'https://revera.com.au/#organization',
  name: 'REVERA',
  url: 'https://revera.com.au',
  logo: 'https://revera.com.au/favicon.svg',
  description:
    'Premium AI Automation & Web Development agency helping Australian businesses grow with AI.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Sydney',
    addressRegion: 'NSW',
    addressCountry: 'AU',
  },
  sameAs: [
    'https://twitter.com/revera',
    'https://linkedin.com/company/revera',
    'https://github.com/revera',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+61-2-1234-5678',
    contactType: 'customer service',
    email: 'hello@revera.com.au',
    areaServed: 'AU',
  },
};

export const websiteSchema: WebSite = {
  '@type': 'WebSite',
  '@id': 'https://revera.com.au/#website',
  url: 'https://revera.com.au',
  name: 'REVERA',
  publisher: { '@id': 'https://revera.com.au/#organization' },
};

export const servicesSchema: Service[] = [
  {
    '@type': 'Service',
    name: 'AI Receptionists',
    description:
      '24/7 AI receptionist that answers calls, books appointments, and recovers missed calls.',
    provider: { '@id': 'https://revera.com.au/#organization' },
    areaServed: 'AU',
    serviceType: 'AI Automation',
  },
  {
    '@type': 'Service',
    name: 'AI Chatbots',
    description:
      'Intelligent chatbots for lead generation, customer support, and FAQ automation.',
    provider: { '@id': 'https://revera.com.au/#organization' },
    areaServed: 'AU',
    serviceType: 'AI Automation',
  },
  {
    '@type': 'Service',
    name: 'Website Development',
    description:
      'Lightning-fast, SEO-optimised websites with booking systems and analytics.',
    provider: { '@id': 'https://revera.com.au/#organization' },
    areaServed: 'AU',
    serviceType: 'Web Development',
  },
];

export function breadcrumbSchema(items: { name: string; url: string }[]): BreadcrumbList {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `https://revera.com.au${item.url}`,
    })),
  };
}
