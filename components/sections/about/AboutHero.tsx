export default function AboutHero() {
  return (
    <section className="relative flex items-center overflow-hidden" style={{ minHeight: '50vh', background: 'linear-gradient(160deg, #1A0802 0%, #3A1C08 55%, #52280B 100%)' }}>
      <div className="absolute inset-0 pointer-events-none opacity-20" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E\")" }} />
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(212,160,23,0.5) 30%, rgba(212,160,23,0.8) 50%, rgba(212,160,23,0.5) 70%, transparent)' }} />
      <div className="relative z-10 container-brand py-28 pt-36">
        <span className="inline-flex items-center px-4 py-1.5 rounded-full font-body text-xs font-semibold tracking-widest uppercase mb-5" style={{ background: 'rgba(212,160,23,0.1)', border: '1px solid rgba(212,160,23,0.35)', color: '#D4A017' }}>회사 소개</span>
        <h1 className="font-heading font-bold text-white word-keep" style={{ fontSize: 'clamp(2.25rem, 5vw, 4rem)', lineHeight: '1.22', letterSpacing: '0.03em', maxWidth: '640px' }}>자연과 함께<br /><span style={{ color: '#D4A017' }}>정직한 식품을 만듭니다</span></h1>
        <p className="mt-5 font-body word-keep" style={{ fontSize: 'clamp(1rem, 1.8vw, 1.15rem)', color: 'rgba(251,248,243,0.65)', lineHeight: '1.85', maxWidth: '480px' }}>오랜 전통과 현대적 기술이 만나는 곳,<br className="hidden sm:block" />자연의 맛을 그대로 식탁에 전합니다.</p>
      </div>
    </section>
  );
}
