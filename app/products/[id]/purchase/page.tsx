import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import products from '@/content/products.json';
import ProductImageGallery from '@/components/sections/products/ProductImageGallery';
import PurchaseActions from '@/components/sections/products/PurchaseActions';

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
    title: `${product.name} 구매하기`,
    description: `${product.name} 구매 안내 및 상세정보`,
    alternates: { canonical: `/products/${params.id}/purchase` },
  };
}

export default function ProductPurchasePage({ params }: Props) {
  const product = products.find((p) => p.id === params.id);
  if (!product) notFound();

  return (
    <>
      {/* ── Breadcrumb ─────────────────────────────────────── */}
      <div
        className="border-b pt-24"
        style={{ borderColor: '#E8DFD0', background: '#FBF8F3' }}
      >
        <div className="container-brand py-4">
          <nav className="flex items-center gap-2 font-body text-sm text-neutral-400" aria-label="breadcrumb">
            <Link href="/" className="hover:text-primary transition-colors duration-150">홈</Link>
            <ChevronIcon />
            <Link href="/products" className="hover:text-primary transition-colors duration-150">제품 소개</Link>
            <ChevronIcon />
            <Link href={`/products/${product.id}`} className="hover:text-primary transition-colors duration-150">{product.name}</Link>
            <ChevronIcon />
            <span className="text-neutral-700 font-medium">구매하기</span>
          </nav>
        </div>
      </div>

      {/* ── Buy frame + 상세정보: left column scrolls, right column
          (name/price/CTA) stays pinned in view via position: sticky ─ */}
      <section className="section-padding" style={{ background: '#FBF8F3' }}>
        <div className="container-brand">
          <style
            dangerouslySetInnerHTML={{
              __html: `
            .purchase-layout { display: grid; grid-template-columns: 1fr; row-gap: 2.5rem; }
            @media (min-width: 1024px) {
              .purchase-layout {
                grid-template-columns: 1fr 1fr;
                column-gap: 4rem;
                row-gap: 2.5rem;
                grid-template-areas: "gallery info" "detail info";
                align-items: start;
              }
              .purchase-layout .pg-gallery { grid-area: gallery; }
              .purchase-layout .pg-detail { grid-area: detail; }
              .purchase-layout .pg-info {
                grid-area: info;
                position: sticky;
                top: 6rem;
                align-self: start;
              }
            }
          `,
            }}
          />

          <div className="purchase-layout">

            {/* Gallery */}
            <div className="pg-gallery">
              <ProductImageGallery images={product.images} productName={product.name} />
            </div>

            {/* Name + price + buy button — stays visible while 상세정보 scrolls */}
            <div className="pg-info">
              <div className="flex items-center gap-2 mb-4">
                {product.badge && (
                  <span
                    className="font-body text-xs font-semibold px-3 py-1 rounded-full"
                    style={{ background: '#8B4513', color: '#FBF8F3' }}
                  >
                    {product.badge}
                  </span>
                )}
                <span className="font-body text-xs text-primary-500 font-medium tracking-wider uppercase">
                  {product.category}
                </span>
              </div>

              <h1 className="font-heading font-bold text-neutral-900 word-keep mb-6"
                style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', lineHeight: '1.25' }}
              >
                {product.name}
              </h1>

              <PurchaseActions
                productName={product.name}
                price={product.price}
                listPrice={product.listPrice}
                purchaseLink={product.purchaseLink}
              />
            </div>

            {/* 상세정보 */}
            <div className="pg-detail">
              <div className="rounded-2xl border overflow-hidden" style={{ borderColor: '#E8DFD0', background: '#FFFFFF' }}>
                <h2 className="font-heading text-xl font-bold text-neutral-900 word-keep text-center pt-8 pb-6">
                  상세정보
                </h2>

                {/* Detail panels — stacked full-width, supplied by client.
                    Plain <img>/<video>, not next/image: panels have unknown/
                    varying aspect ratios. Former GIF panels are compressed
                    to muted looping mp4. */}
                {product.detailImages && product.detailImages.length > 0 && (
                  <div className="mb-8">
                    {product.detailImages.map((src, i) =>
                      src.endsWith('.mp4') ? (
                        <video
                          key={src}
                          src={src}
                          className="block w-full h-auto"
                          autoPlay
                          loop
                          muted
                          playsInline
                          aria-label={`${product.name} 상세정보 ${i + 1}`}
                        />
                      ) : (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          key={src}
                          src={src}
                          alt={`${product.name} 상세정보 ${i + 1}`}
                          loading="lazy"
                          className="block w-full h-auto"
                        />
                      )
                    )}
                  </div>
                )}

                {/* Specs table */}
                <div className="px-5 pb-6 sm:px-8 sm:pb-8">
                  <div
                    className="rounded-xl overflow-hidden border"
                    style={{ borderColor: '#E8DFD0' }}
                  >
                    <div
                      className="px-5 py-3 border-b"
                      style={{ background: '#F4EFE7', borderColor: '#E8DFD0' }}
                    >
                      <h3 className="font-heading text-sm font-semibold text-neutral-700">제품 규격</h3>
                    </div>
                    <table className="w-full">
                      <tbody>
                        {product.specs.map(({ label, value }, i) => (
                          <tr
                            key={label}
                            style={{ borderBottom: i < product.specs.length - 1 ? '1px solid #F4EFE7' : 'none' }}
                          >
                            <td
                              className="font-body text-sm font-semibold text-neutral-600 px-5 py-3.5 w-32"
                              style={{ background: '#FBF8F3' }}
                            >
                              {label}
                            </td>
                            <td className="font-body text-sm text-neutral-700 px-5 py-3.5 bg-white">
                              {value}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Keeps the mobile floating buy bar (PurchaseActions) from
              covering the last of the specs table content. */}
          <div className="h-20 lg:hidden" aria-hidden="true" />
        </div>
      </section>
    </>
  );
}

/* ── Inline SVG icons ─────────────────────────────────── */

function ChevronIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}
