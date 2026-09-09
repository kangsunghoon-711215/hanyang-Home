interface Props {
  productName: string;
  price: number;
  listPrice?: number;
  purchaseLink: string;
}

const PHONE = '010-9139-4110';
const PHONE_INTL = 'tel:+82-10-9139-4110';

export default function PurchaseActions({ productName, price, listPrice, purchaseLink }: Props) {
  const formatWon = (value: number) => `${value.toLocaleString('ko-KR')}원`;

  return (
    <>
      <div
        className="rounded-xl border p-5 sm:p-6"
        style={{ borderColor: '#E8DFD0', background: '#FBF8F3' }}
      >
        {/* Price */}
        {listPrice && listPrice > price && (
          <div className="flex items-center justify-between mb-1.5">
            <span className="font-body text-sm text-neutral-500">네이버 스토어 판매가</span>
            <span className="font-body text-sm text-neutral-400 line-through">
              {formatWon(listPrice)}
            </span>
          </div>
        )}
        <div className="flex items-center justify-between mb-5">
          <span className="font-body text-sm font-semibold text-neutral-700">특별 할인가</span>
          <span className="font-heading text-2xl font-bold" style={{ color: '#8B4513' }}>
            {formatWon(price)}
          </span>
        </div>

        <div className="h-px mb-5" style={{ background: '#E8DFD0' }} />

        {/* Buy button — links out to the PayN checkout link for this product */}
        <a
          href={purchaseLink}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-accent w-full text-base flex items-center justify-center"
          style={{ paddingTop: '1rem', paddingBottom: '1rem' }}
        >
          {productName} 구매하기
        </a>
        <p className="mt-2.5 font-body text-xs text-neutral-400 text-center">
          결제 페이지가 새 창에서 열립니다. 전화로 주문하시려면{' '}
          <a href={PHONE_INTL} className="text-primary font-medium hover:underline">
            전화 문의({PHONE})
          </a>
          를 이용해 주세요.
        </p>
      </div>

      {/* Mobile-only floating bar — on small screens the info column isn't
          sticky (it's stacked above the long 상세정보 scroll), so the CTA
          would otherwise scroll out of view. Pins price + buy button to
          the bottom of the viewport instead. */}
      <div
        className="lg:hidden fixed bottom-0 left-0 right-0 z-40 border-t"
        style={{
          borderColor: '#E8DFD0',
          background: '#FFFFFF',
          boxShadow: '0 -4px 16px rgba(138, 69, 19, 0.10)',
          paddingBottom: 'env(safe-area-inset-bottom)',
        }}
      >
        <div className="container-brand py-3 flex items-center gap-4">
          <div className="flex-1 min-w-0">
            <span className="block font-body text-xs text-neutral-400 truncate">{productName}</span>
            <span className="font-heading text-lg font-bold leading-tight" style={{ color: '#8B4513' }}>
              {formatWon(price)}
            </span>
          </div>
          <a
            href={purchaseLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-accent text-sm px-6 py-3 whitespace-nowrap flex-none"
          >
            구매하기
          </a>
        </div>
      </div>
    </>
  );
}
