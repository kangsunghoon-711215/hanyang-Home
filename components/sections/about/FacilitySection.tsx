import Image from 'next/image';

// TODO: Replace captions with actual facility information
const facilityImages = [
  {
    src: '/images/facility/facility-main.png',
    alt: '생산 시설 전경',
    caption: '최신 설비를 갖춘 생산 라인',
    wide: true, // spans 2 columns on desktop
  },
  {
    src: '/images/facility/facility-hygiene.png',
    alt: '위생 관리 구역',
    caption: 'HACCP 인증 위생 관리 구역',
    wide: false,
  },
  {
    src: '/images/facility/facility-storage.png',
    alt: '냉동 보관 시설',
    caption: '온도 관리 냉동 보관 시설',
    wide: false,
  },
] as const;

export default function FacilitySection() {
  return (
    <section className="section-padding" style={{ background: '#F4EFE7' }}>
      <div className="container-brand">

        {/* Section header */}
        <div className="mb-12">
          <span className="tag-brand mb-4 inline-flex">생산 시설</span>
          <h2 className="font-heading font-bold text-neutral-900 word-keep">
            {/* TODO: Replace with actual section heading */}
            위생적인 생산 환경
          </h2>
          <p className="mt-3 font-body text-neutral-500 word-keep max-w-xl leading-korean">
            {/* TODO: Replace with actual description */}
            HACCP 인증을 받은 최신 시설에서 엄격한 위생 기준을 준수하며 생산합니다.
            고객의 안전을 위해 매 공정을 철저히 관리합니다.
          </p>
        </div>

        {/* Masonry-style 2-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

          {/* Wide image — spans full width on desktop */}
          <div className="md:col-span-2">
            <FacilityImageCard item={facilityImages[0]} aspectClass="aspect-[16/7]" />
          </div>

          {/* Two narrower images */}
          {facilityImages.slice(1).map((item) => (
            <FacilityImageCard key={item.src} item={item} aspectClass="aspect-[4/3]" />
          ))}
        </div>
      </div>
    </section>
  );
}

function FacilityImageCard({
  item,
  aspectClass,
}: {
  item: { src: string; alt: string; caption: string };
  aspectClass: string;
}) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-neutral-200">
      {/* Image */}
      <div
        className={`relative ${aspectClass} overflow-hidden`}
        style={{ background: 'linear-gradient(135deg, #E8DFD0 0%, #D4C8B4 100%)' }}
      >
        {/* TODO: Replace with actual facility image */}
        <Image
          src={item.src}
          alt={item.alt}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-103"
          sizes="(max-width: 768px) 100vw, 50vw"
        />

        {/* Placeholder icon (shows when image is absent) */}
        <div className="absolute inset-0 flex items-center justify-center" aria-hidden="true">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#96856E" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" opacity="0.4">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <polyline points="21 15 16 10 5 21" />
          </svg>
        </div>
      </div>

      {/* Caption */}
      <div className="bg-white px-5 py-4 border-t border-neutral-200">
        <p className="font-body text-sm text-neutral-600 font-medium word-keep">
          {/* TODO: Replace with actual caption */}
          {item.caption}
        </p>
      </div>
    </div>
  );
}
