import type { Metadata } from 'next';
import AboutHero from '@/components/sections/about/AboutHero';
import CompanyHistory from '@/components/sections/about/CompanyHistory';
import FacilitySection from '@/components/sections/about/FacilitySection';
import CertificationsSection from '@/components/sections/about/CertificationsSection';

export const metadata: Metadata = {
  title: '회사 소개',
  description: '오랜 전통과 현대적 기술이 만나는 식품 제조 기업입니다. HACCP 인증 시설에서 엄선된 원재료로 정성껏 만든 식품을 제공합니다.',
  alternates: { canonical: '/about' },
  openGraph: {
    title: '회사 소개 | 속편한 한끼 식사',
    description: '오랜 전통과 현대적 기술이 만나는 식품 제조 기업. HACCP 인증 시설에서 정성껏 만든 식품을 제공합니다.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
    locale: 'ko_KR',
    type: 'website',
  },
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <CompanyHistory />
      <FacilitySection />
      <CertificationsSection />
    </>
  );
}
