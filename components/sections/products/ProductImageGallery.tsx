'use client';

import Image from 'next/image';
import { useState } from 'react';

interface Props {
  images: string[];
  productName: string;
}

export default function ProductImageGallery({ images, productName }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeImage = images[activeIndex] ?? images[0];

  return (
    <div className="space-y-3">
      {/* Main image */}
      <div
        className="relative w-full overflow-hidden rounded-2xl"
        style={{ aspectRatio: '4/3', background: 'linear-gradient(135deg, #F8E8D8 0%, #F0CEAD 100%)' }}
      >
        {/* TODO: Replace with actual product image */}
        <Image
          src={activeImage}
          alt={`${productName} 이미지 ${activeIndex + 1}`}
          fill
          className="object-cover"
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
        />

        {/* Placeholder icon */}
        <div className="absolute inset-0 flex items-center justify-center" aria-hidden="true">
          <svg width="72" height="72" viewBox="0 0 24 24" fill="none" stroke="#C06A2A" strokeWidth="0.7" strokeLinecap="round" strokeLinejoin="round" opacity="0.2">
            <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z" />
            <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
          </svg>
        </div>
      </div>

      {/* Thumbnail row — only show if more than 1 image */}
      {images.length > 1 && (
        <div className="flex gap-2.5">
          {images.map((src, i) => (
            <button
              key={src}
              onClick={() => setActiveIndex(i)}
              className="relative flex-shrink-0 rounded-xl overflow-hidden border-2 transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
              style={{
                width: '72px',
                height: '72px',
                borderColor: i === activeIndex ? '#8B4513' : '#E8DFD0',
                background: 'linear-gradient(135deg, #F8E8D8 0%, #F0CEAD 100%)',
              }}
              aria-label={`이미지 ${i + 1} 보기`}
              aria-current={i === activeIndex}
            >
              {/* TODO: Replace with actual thumbnail image */}
              <Image
                src={src}
                alt={`${productName} 썸네일 ${i + 1}`}
                fill
                className="object-cover"
                sizes="72px"
              />
              {i === activeIndex && (
                <div className="absolute inset-0 rounded-xl" style={{ boxShadow: 'inset 0 0 0 2px #8B4513' }} />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
