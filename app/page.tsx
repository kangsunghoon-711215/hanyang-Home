import type { Metadata } from 'next';
import HeroSection from '@/components/sections/home/HeroSection';
import BrandStorySection from '@/components/sections/home/BrandStorySection';
import ProductPreviewSection from '@/components/sections/home/ProductPreviewSection';
import CtaBannerSection from '@/components/sections/home/CtaBannerSection';

export const metadata: Metadata = {
  alternates: { canonical: '/' },
  openGraph: {
    title: '속편한 한끼 식사 | 자연의 맛, 정성의 향',
    description: '엄선된 원재료로 정성껏 만든 식품. HACCP 인증 생산 시설에서 안전하고 맛있는 제품을 제공합니다.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
    locale: 'ko_KR',
    type: 'website',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: '속편한 한끼 식사',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000',
  description: '엄선된 원재료로 정성껏 만든 식품. HACCP 인증 생산 시설에서 안전하고 맛있는 제품을 제공합니다.',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+82-10-9139-4110',
    contactType: 'customer service',
    availableLanguage: 'Korean',
    hoursAvailable: 'Mo-Fr 09:00-18:00',
  },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeroSection />
      <BrandStorySection />
      <ProductPreviewSection />
      <CtaBannerSection />
    </>
  );
}
