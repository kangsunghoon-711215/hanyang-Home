export default function ProductsHero() {
  return (
    <section className="relative flex items-center overflow-hidden" style={{ minHeight: '45vh', background: 'linear-gradient(160deg, #1A0802 0%, #3A1C08 55%, #52280B 100%)' }}>
      <div className="absolute inset-0 pointer-events-none opacity-20" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E\")" }} />
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(212,160,23,0.5) 30%, rgba(212,160,23,0.8) 50%, rgba(212,160,23,0.5) 70%, transparent)' }} />
      <div className="relative z-10 container-brand py-24 pt-36">
        <span className="inline-flex items-center px-4 py-1.5 rounded-full font-body text-xs font-semibold tracking-widest uppercase mb-5" style={{ background: 'rgba(212,160,23,0.1)', border: '1px solid rgba(212,160,23,0.35)', color: '#D4A017' }}>제품 소개</span>
        <h1 className="font-heading font-bold text-white word-keep" style={{ fontSize: 'clamp(2.25rem, 5vw, 4rem)', lineHeight: '1.22', letterSpacing: '0.03em', maxWidth: '600px' }}>정성으로 만든<br /><span style={{ color: '#D4A017' }}>대표 제품들</span></h1>
        <p className="mt-5 font-body word-keep" style={{ fontSize: 'clamp(1rem, 1.8vw, 1.15rem)', color: 'rgba(251,248,243,0.65)', lineHeight: '1.85', maxWidth: '440px' }}>자연에서 온 신선한 재료로 만든 우리 제품을 소개합니다.</p>
      </div>
    </section>
  );
}
