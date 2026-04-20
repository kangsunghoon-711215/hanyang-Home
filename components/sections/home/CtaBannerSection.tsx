import Link from 'next/link';

const PHONE = '010-9139-4110';
const PHONE_INTL = 'tel:+82-10-9139-4110';

export default function CtaBannerSection() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28" style={{ background: 'linear-gradient(135deg, #6E350F 0%, #8B4513 40%, #C06A2A 100%)' }}>
      <div className="absolute inset-0 pointer-events-none opacity-20" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E\")" }} />
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(212,160,23,0.55) 30%, rgba(212,160,23,0.85) 50%, rgba(212,160,23,0.55) 70%, transparent)' }} />
      <div className="relative z-10 container-brand text-center">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full font-body text-xs font-semibold tracking-widest uppercase mb-6" style={{ background: 'rgba(212,160,23,0.15)', border: '1px solid rgba(212,160,23,0.35)', color: '#D4A017' }}>상담 및 문의</span>
        <h2 className="font-heading font-bold text-white word-keep mb-3" style={{ textShadow: '0 2px 12px rgba(0,0,0,0.2)' }}>유통 문의 및 제품 상담은<br className="hidden sm:block" />전화로 문의해 주세요</h2>
        <p className="font-body text-base word-keep mb-8" style={{ color: 'rgba(251,248,243,0.7)' }}>평일 09:00 – 18:00 운영 (토·일·공휴일 휴무)</p>
        <a href={PHONE_INTL} className="inline-flex items-center gap-3 transition-all duration-200 hover:scale-105 active:scale-100 mb-8" aria-label={`전화 문의: ${PHONE}`}>
          <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(212,160,23,0.2)', border: '1px solid rgba(212,160,23,0.35)' }}><PhoneIcon /></div>
          <span className="font-heading font-bold tracking-wide" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: '#D4A017', lineHeight: '1' }}>{PHONE}</span>
        </a>
        <div><Link href="/contact" className="font-body text-sm font-medium transition-colors duration-150 inline-flex items-center gap-1.5" style={{ color: 'rgba(251,248,243,0.55)' }}>온라인으로 문의하기 →</Link></div>
      </div>
    </section>
  );
}

function PhoneIcon() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D4A017" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.02 2.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z" /></svg>;
}
