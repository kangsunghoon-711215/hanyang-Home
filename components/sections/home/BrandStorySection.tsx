const pillars = [
  { icon: LeafIcon, heading: '신선한 원재료', description: '100% 품질보증된 원재료만을 엄선하여 사용합니다. 산지에서 바로 수급한 신선한 재료가 맛의 기본입니다.' },
  { icon: ShieldIcon, heading: '위생적인 생산 환경', description: 'HACCP 인증을 받은 최신 시설에서 엄격한 위생 기준을 준수하며 생산합니다. 안전한 위생이 최우선입니다.' },
  { icon: AwardIcon, heading: '믿을 수 있는 품질', description: '정기적인 품질 검사와 투명한 생산 공정으로 고객이 믿고 선택할 수 있는 제품을 만듭니다.' },
] as const;

export default function BrandStorySection() {
  return (
    <section className="section-padding" style={{ background: '#FBF8F3' }}>
      <div className="container-brand">
        <div className="text-center mb-14">
          <span className="tag-brand mb-4 inline-flex">우리의 약속</span>
          <h2 className="font-heading font-bold text-neutral-900 word-keep">자연과 정성으로 만드는<br className="hidden sm:block" /> 건강한 식품</h2>
          <p className="mt-4 font-body text-neutral-500 leading-korean word-keep max-w-lg mx-auto">오랜 전통과 현대적 기술이 만나, 자연 그대로의 맛을 안전하게 전달합니다.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {pillars.map(({ icon: Icon, heading, description }) => (
            <div key={heading} className="group relative bg-white rounded-2xl p-8 border border-neutral-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-brand-md">
              <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6" style={{ background: 'linear-gradient(135deg, #FDF6F0 0%, #F8E8D8 100%)', border: '1px solid #F0CEAD' }}><Icon /></div>
              <div className="absolute top-0 left-8 right-8 h-0.5 rounded-full" style={{ background: 'linear-gradient(90deg, transparent, rgba(212,160,23,0.4), transparent)' }} />
              <h3 className="font-heading text-xl font-semibold text-neutral-900 mb-3 word-keep">{heading}</h3>
              <p className="font-body text-sm text-neutral-500 leading-korean word-keep">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function LeafIcon() {
  return <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#8B4513" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z" /><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" /></svg>;
}
function ShieldIcon() {
  return <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#8B4513" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="m9 12 2 2 4-4" /></svg>;
}
function AwardIcon() {
  return <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#8B4513" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="8" r="6" /><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" /></svg>;
}
