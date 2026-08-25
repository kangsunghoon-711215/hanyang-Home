import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">

      {/* ── Background layers ────────────────────────── */}
      {/* Base: rich dark warm gradient (visible when image is absent) */}
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(160deg, #1A0802 0%, #3A1C08 55%, #52280B 100%)' }}
      />

      <div className="absolute inset-0">
        <Image
          src="/images/hero-placeholder.jpg"
          alt="자연에서 온 신선한 식재료"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </div>

      {/* Gradient overlay (bottom-to-top) for text legibility */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to top, rgba(26,8,2,0.92) 0%, rgba(26,8,2,0.62) 42%, rgba(26,8,2,0.28) 100%)',
        }}
      />

      {/* Grain texture overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-25"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E\")",
        }}
      />

      {/* ── Content ──────────────────────────────────── */}
      <div className="relative z-10 container-brand w-full pb-28 pt-44">

        {/* Badge */}
        <div className="mb-6 animate-fade-in">
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full font-body text-sm font-medium"
            style={{
              border: '1px solid rgba(212,160,23,0.45)',
              color: '#D4A017',
              background: 'rgba(212,160,23,0.08)',
            }}
          >
            {/* TODO: Replace with actual brand badge text */}
            자연에서 식탁까지
          </span>
        </div>

        {/* Headline
          슬로건 후보:
          1. "자연의 맛을 그대로, 식탁 위의 정직함"  — 자연과 신뢰 강조 (기본값)
          2. "정성이 담긴 한 입, 건강한 내일을 위해"  — 정성과 건강 강조
          3. "땅에서 온 진심, 매일의 밥상을 완성하다" — 농업적 정통성 강조
          TODO: 실제 브랜드 슬로건으로 교체
        */}
        <h1
          className="font-heading font-bold text-white word-keep animate-fade-up"
          style={{
            fontSize: 'clamp(2.25rem, 5.5vw, 4.5rem)',
            lineHeight: '1.22',
            letterSpacing: '0.03em',
            maxWidth: '740px',
          }}
        >
          자연의 맛을 그대로,
          <br />
          <span style={{ color: '#D4A017' }}>식탁 위의 정직함</span>
        </h1>

        {/* Sub-headline */}
        <p
          className="mt-6 font-body word-keep animate-fade-up delay-150"
          style={{
            fontSize: 'clamp(1rem, 2vw, 1.2rem)',
            color: 'rgba(251,248,243,0.72)',
            lineHeight: '1.85',
            maxWidth: '500px',
          }}
        >
          {/* TODO: Replace with actual company description */}
          엄선된 깨끗한 원재료와 HACCP 인증 생산 시설에서
          <br className="hidden sm:block" />
          정성껏 만든 안전하고 맛있는 식품을 제공합니다.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 animate-fade-up delay-300">
          <Link
            href="/products"
            className="btn-accent inline-flex items-center justify-center gap-2 text-base"
            style={{ paddingTop: '1rem', paddingBottom: '1rem', paddingLeft: '2.5rem', paddingRight: '2.5rem' }}
          >
            제품 보러가기
            <ArrowRightIcon />
          </Link>
          <Link
            href="/about"
            className="inline-flex items-center justify-center gap-2 px-8 font-body text-base font-medium rounded-lg transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
            style={{
              paddingTop: '1rem',
              paddingBottom: '1rem',
              border: '1px solid rgba(251,248,243,0.22)',
              color: 'rgba(251,248,243,0.82)',
            }}
          >
            회사 소개 →
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-float"
        style={{ color: 'rgba(251,248,243,0.32)' }}
      >
        <span className="font-body text-[10px] tracking-widest uppercase">scroll</span>
        <div
          className="w-px h-8"
          style={{ background: 'linear-gradient(to bottom, rgba(212,160,23,0.55), transparent)' }}
        />
      </div>
    </section>
  );
}

function ArrowRightIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}
