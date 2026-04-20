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
      <div className="relative w-full overflow-hidden rounded-2xl" style={{ aspectRatio: '4/3', background: 'linear-gradient(135deg, #F8E8D8 0%, #F0CEAD 100%)' }}>
        <Image src={activeImage} alt={`${productName} 이미지 ${activeIndex + 1}`} fill className="object-cover" priority sizes="(max-width: 768px) 100vw, 50vw" />
      </div>
      {images.length > 1 && (
        <div className="flex gap-2.5">
          {images.map((src, i) => (
            <button key={src} onClick={() => setActiveIndex(i)} className="relative flex-shrink-0 rounded-xl overflow-hidden border-2 transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2" style={{ width: '72px', height: '72px', borderColor: i === activeIndex ? '#8B4513' : '#E8DFD0', background: 'linear-gradient(135deg, #F8E8D8 0%, #F0CEAD 100%)' }} aria-label={`이미지 ${i + 1} 보기`} aria-current={i === activeIndex}>
              <Image src={src} alt={`${productName} 썬네일 ${i + 1}`} fill className="object-cover" sizes="72px" />
              {i === activeIndex && <div className="absolute inset-0 rounded-xl" style={{ boxShadow: 'inset 0 0 0 2px #8B4513' }} />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
