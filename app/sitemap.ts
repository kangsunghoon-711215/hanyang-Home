import { MetadataRoute } from 'next';
import products from '@/content/products.json';

const BASE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000').replace(/\/$/, '');

export default function sitemap(): MetadataRoute.Sitemap {
  const productRoutes = products.map((p) => ({
    url: `${BASE_URL}/products/${p.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [
    { url: BASE_URL,                        lastModified: new Date(), changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${BASE_URL}/about`,             lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/products`,          lastModified: new Date(), changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${BASE_URL}/contact`,           lastModified: new Date(), changeFrequency: 'yearly',  priority: 0.6 },
    ...productRoutes,
  ];
}
