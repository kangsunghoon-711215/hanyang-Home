import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import products from '@/content/products.json';
import ProductImageGallery from '@/components/sections/products/ProductImageGallery';

interface Props {
  params: { id: string };
}

export const dynamicParams = false;

export function generateStaticParams() {
  return products.map((p) => ({ id: p.id }));
}

export function generateMetadata({ params }: Props): Metadata {
  const product = products.find((p) => p.id === params.id);
  if (!product) return {};
  return {
    title: product.name,
    description: product.description,
    alternates: { canonical: `/products/${params.id}` },
    openGraph: {
      title: `${product.name} | 속편한 한끼 식사`,
      description: product.description,
      images: [{ url: product.images[0], width: 800, height: 600 }],
      locale: 'ko_KR',
      type: 'website',
    },
  };
}

const PHONE = '010-9139-4110';
const PHONE_INTL = 'tel:+82-10-9139-4110';

export default function ProductDetailPage({ params }: Props) {
  const product = products.find((p) => p.id === params.id);
  if (!product) notFound();

  return (
    <>
      <div className="border-b pt-24" style={{ borderColor: '#E8DFD0', background: '#FBF8F3' }}>
        <div className="container-brand py-4">
          <nav className="flex items-center gap-2 font-body text-sm text-neutral-400" aria-label="breadcrumb">
            <Link href="/" className="hover:text-primary transition-colors duration-150">홈</Link>
            <ChevronIcon />
            <Link href="/products" className="hover:text-primary transition-colors duration-150">제품 소개</Link>
            <ChevronIcon />
            <span className="text-neutral-700 font-medium">{product.name}</span>
          </nav>
        </div>
      </div>

      <section className="section-padding" style={{ background: '#FBF8F3' }}>
        <div className="container-brand">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            <ProductImageGallery images={product.images} productName={product.name} />
            <div>
              <div className="flex items-center gap-2 mb-4">
                {product.badge && (
                  <span className="font-body text-xs font-semibold px-3 py-1 rounded-full" style={{ background: '#8B4513', color: '#FBF8F3' }}>
                    {product.badge}
                  </span>
                )}
                <span className="font-body text-xs text-primary-500 font-medium tracking-wider uppercase">{product.category}</span>
              </div>
              <h1 className="font-heading font-bold text-neutral-900 word-keep mb-4" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', lineHeight: '1.25' }}>
                {product.name}
              </h1>
              <p className="font-body text-base text-neutral-600 leading-korean word-keep mb-8">{product.description}</p>
              {product.features && product.features.length > 0 && (
                <div className="mb-8">
                  <h2 className="font-heading text-base font-semibold text-neutral-800 mb-3">제품 특징</h2>
                  <ul className="space-y-2">
                    {product.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-2.5 font-body text-sm text-neutral-600">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#5C7A3E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 mt-0.5" aria-hidden="true"><path d="m9 12 2 2 4-4" /><circle cx="12" cy="12" r="10" /></svg>
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              <div className="rounded-xl overflow-hidden border mb-8" style={{ borderColor: '#E8DFD0' }}>
                <div className="px-5 py-3 border-b" style={{ background: '#F4EFE7', borderColor: '#E8DFD0' }}>
                  <h2 className="font-heading text-sm font-semibold text-neutral-700">제품 규격</h2>
                </div>
                <table className="w-full">
                  <tbody>
                    {product.specs.map(({ label, value }, i) => (
                      <tr key={label} style={{ borderBottom: i < product.specs.length - 1 ? '1px solid #F4EFE7' : 'none' }}>
                        <td className="font-body text-sm font-semibold text-neutral-600 px-5 py-3.5 w-32" style={{ background: '#FBF8F3' }}>{label}</td>
                        <td className="font-body text-sm text-neutral-700 px-5 py-3.5 bg-white">{value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <a href={PHONE_INTL} className="btn-primary w-full sm:w-auto flex items-center justify-center gap-2 text-base" style={{ paddingTop: '1rem', paddingBottom: '1rem' }}>
                <PhoneIcon />
                제품 문의하기
              </a>
              <p className="mt-3 font-body text-xs text-neutral-400 text-center sm:text-left">평일 09:00 – 18:00 · {PHONE}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16" style={{ background: 'linear-gradient(135deg, #3A1C08 0%, #52280B 100%)' }}>
        <div className="container-brand text-center">
          <h2 className="font-heading font-bold word-keep mb-3" style={{ color: '#FFFFFF', fontSize: 'clamp(1.5rem, 3vw, 2.25rem)' }}>구매 및 유통 문의</h2>
          <p className="font-body word-keep mb-7" style={{ color: 'rgba(251,248,243,0.65)' }}>대량 구매, 유통 문의, 제품 상담은 전화 또는 온라인으로 문의해 주세요.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={PHONE_INTL} className="btn-accent inline-flex items-center justify-center gap-2"><PhoneIcon color="#3A1C08" />전화 문의</a>
            <Link href="/contact" className="btn-secondary" style={{ borderColor: 'rgba(251,248,243,0.25)', color: 'rgba(251,248,243,0.82)' }}>온라인 문의하기 →</Link>
          </div>
        </div>
      </section>
    </>
  );
}

function ChevronIcon() {
  return <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m9 18 6-6-6-6" /></svg>;
}

function PhoneIcon({ color = '#FBF8F3' }: { color?: string }) {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.02 2.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z" /></svg>;
}
