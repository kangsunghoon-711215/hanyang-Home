'use client';

import { useState } from 'react';

interface Props {
  productName: string;
  price: number | null;
}

const PHONE = '010-9139-4110';
const PHONE_INTL = 'tel:+82-10-9139-4110';

export default function PurchaseActions({ productName, price }: Props) {
  const [quantity, setQuantity] = useState(1);

  const formatWon = (value: number) => `${value.toLocaleString('ko-KR')}원`;

  return (
    <div
      className="rounded-xl border p-5 sm:p-6"
      style={{ borderColor: '#E8DFD0', background: '#FBF8F3' }}
    >
      {/* Price */}
      <div className="flex items-center justify-between mb-5">
        <span className="font-body text-sm text-neutral-500">판매가</span>
        {/* TODO: Replace with actual price once pricing is finalized */}
        <span className="font-heading text-xl font-bold text-neutral-900">
          {price !== null ? formatWon(price) : '가격 문의'}
        </span>
      </div>

      <div className="h-px mb-5" style={{ background: '#E8DFD0' }} />

      {/* Quantity */}
      <div className="flex items-center justify-between mb-5">
        <span className="font-body text-sm text-neutral-500">수량</span>
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setQuantity((q) => Math.max(1, q - 1))}
            className="w-8 h-8 rounded-lg border font-body text-base flex items-center justify-center transition-colors duration-150 hover:bg-primary-50"
            style={{ borderColor: '#E8DFD0' }}
            aria-label="수량 감소"
          >
            −
          </button>
          <span className="font-body text-base font-medium w-6 text-center" aria-live="polite">
            {quantity}
          </span>
          <button
            type="button"
            onClick={() => setQuantity((q) => q + 1)}
            className="w-8 h-8 rounded-lg border font-body text-base flex items-center justify-center transition-colors duration-150 hover:bg-primary-50"
            style={{ borderColor: '#E8DFD0' }}
            aria-label="수량 증가"
          >
            +
          </button>
        </div>
      </div>

      <div className="h-px mb-5" style={{ background: '#E8DFD0' }} />

      {/* Total */}
      <div className="flex items-center justify-between mb-6">
        <span className="font-body text-sm font-semibold text-neutral-700">합계</span>
        <span className="font-heading text-lg font-bold" style={{ color: '#8B4513' }}>
          {price !== null ? formatWon(price * quantity) : '가격 문의'}
        </span>
      </div>

      {/* Buy button — payment not wired up yet, ready to connect later */}
      <button type="button" className="btn-accent w-full text-base" style={{ paddingTop: '1rem', paddingBottom: '1rem' }}>
        {productName} 구매하기
      </button>
      <p className="mt-2.5 font-body text-xs text-neutral-400 text-center">
        온라인 결제 연동 준비 중입니다. 지금 바로 주문하시려면{' '}
        <a href={PHONE_INTL} className="text-primary font-medium hover:underline">
          전화 문의({PHONE})
        </a>
        를 이용해 주세요.
      </p>
    </div>
  );
}
