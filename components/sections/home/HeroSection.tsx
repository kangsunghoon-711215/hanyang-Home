import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0" style={{ background: 'linear-gradient(160deg, #1A0802 0%, #3A1C08 55%, #52280B 100%)' }} />
      <div className="absolute inset-0">
        <Image src="/images/hero-placeholder.jpg" alt="자연에서 온 신선한 식재료" fill priority className="object-cover" sizes="100vw" />
      </div>
      <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(26,8,2,0.92) 0%, rgba(26,8,2,0.62) 42%, rgba(26,8,2,0.28) 100%)' }} />
      <div className="absolute inset-0 pointer-events-none opacity-25" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E\")" }} />
      <div className="relative z-10 container-brand w-full pb-28 pt-44">
        <div className="mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full font-body text-sm font-medium" style={{ border: '1px solid rgba(212,160,23,0.45)', color: '#D4A017', background: 'rgba(212,160,23,0.08)' }}>자연에서 식탁까지</span>
        </div>
        <h1 className="font-heading font-bold text-white word-keep" style={{ fontSize: 'clamp(2.25rem, 5.5vw, 4.5rem)', lineHeight: '1.22', letterSpacing: '0.03em', maxWidth: '740px' }}>
          자연의 맛을 그대로,<br />
          <span style={{ color: '#D4A017' }}>식탁 위의 정직함</span>
        </h1>
        <p className="mt-6 font-body word-keep" style={{ fontSize: 'clamp(1rem, 2vw, 1.2rem)', color: 'rgba(251,248,243,0.72)', lineHeight: '1.85', maxWidth: '500px' }}>
          엄선된 깨끗한 원재료와 HACCP 인증 생산 시설에서<br className="hidden sm:block" />
          정성껏 만든 안전하고 맛있는 식품을 제공합니다.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <Link href="/products" className="btn-accent inline-flex items-center justify-center gap-2 text-base" style={{ paddingTop: '1rem', paddingBottom: '1rem', paddingLeft: '2.5rem', paddingRight: '2.5rem' }}>제품 보러가기<ArrowRightIcon /></Link>
          <Link href="/about" className="inline-flex items-center justify-center gap-2 px-8 font-body text-base font-medium rounded-lg transition-all duration-200 hover:-translate-y-0.5" style={{ paddingTop: '1rem', paddingBottom: '1rem', border: '1px solid rgba(251,248,243,0.22)', color: 'rgba(251,248,243,0.82)' }}>회사 소개 →</Link>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2" style={{ color: 'rgba(251,248,243,0.32)' }}>
        <span className="font-body text-[10px] tracking-widest uppercase">scroll</span>
        <div className="w-px h-8" style={{ background: 'linear-gradient(to bottom, rgba(212,160,23,0.55), transparent)' }} />
      </div>
    </section>
  );
}

function ArrowRightIcon() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7" /></svg>;
}
