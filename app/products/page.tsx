import type { Metadata } from 'next';
import ProductsHero from '@/components/sections/products/ProductsHero';
import ProductGrid from '@/components/sections/products/ProductGrid';

export const metadata: Metadata = {
  title: '제품 소개',
  description: '자연에서 온 신선한 재료로 정성껏 만든 제품들을 소개합니다. 품질보증된 원재료와 HACCP 인증 시설에서 생산한 제품을 만나보세요.',
  alternates: { canonical: '/products' },
  openGraph: {
    title: '제품 소개 | 속편한 한끼 식사',
    description: '자연에서 온 신선한 재료로 정성껏 만든 제품들을 소개합니다.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
    locale: 'ko_KR',
    type: 'website',
  },
};

export default function ProductsPage() {
  return (
    <>
      <ProductsHero />
      <ProductGrid />
    </>
  );
}
