import Image from 'next/image';
import Link from 'next/link';
import products from '@/content/products.json';

export default function ProductPreviewSection() {
  // Show up to 3 products on the homepage
  const preview = products.slice(0, 3);

  return (
    <section className="section-padding" style={{ background: '#F4EFE7' }}>
      <div className="container-brand">

        {/* Section header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <span className="tag-brand mb-3 inline-flex">제품 소개</span>
            {/* TODO: Replace heading with actual section title */}
            <h2 className="font-heading font-bold text-neutral-900 word-keep">대표 제품</h2>
          </div>
          <Link
            href="/products"
            className="font-body text-sm font-medium text-primary hover:text-primary-700 transition-colors duration-150 flex items-center gap-1.5 self-start sm:self-auto"
          >
            전체 제품 보기
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {/* Product cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {preview.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-2xl overflow-hidden border border-neutral-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-brand-lg"
            >
              {/* Product image */}
              <div
                className="relative overflow-hidden"
                style={{ height: '220px', background: 'linear-gradient(135deg, #F8E8D8 0%, #F0CEAD 100%)' }}
              >
                <Image
                  src={product.images[0]}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />

                {/* Badge */}
                {product.badge && (
                  <div className="absolute top-4 left-4">
                    <span
                      className="font-body text-xs font-semibold px-3 py-1 rounded-full"
                      style={{ background: '#8B4513', color: '#FBF8F3' }}
                    >
                      {product.badge}
                    </span>
                  </div>
                )}

                {/* Image placeholder icon */}
                <div className="absolute inset-0 flex items-center justify-center" aria-hidden="true">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#C06A2A" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" opacity="0.25">
                    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z" />
                    <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
                  </svg>
                </div>
              </div>

              {/* 상세페이지 보기 버튼 */}
              <Link
                href={`/products/${product.id}`}
                className="flex items-center justify-center gap-2 w-full py-3 font-body text-sm font-semibold transition-all duration-200"
                style={{ background: '#8B4513', color: '#FBF8F3' }}
              >
                상세페이지 보기
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>

              {/* Card body */}
              <div className="p-6">
                <span className="font-body text-xs text-primary-500 font-medium tracking-wider uppercase mb-2 block">
                  {product.category}
                </span>
                <h3 className="font-heading text-lg font-semibold text-neutral-900 word-keep mb-2">
                  {product.name}
                </h3>
                <p className="font-body text-sm text-neutral-500 leading-relaxed word-keep line-clamp-2">
                  {product.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <Link href="/products" className="btn-primary">
            전체 제품 보기
          </Link>
        </div>
      </div>
    </section>
  );
}
