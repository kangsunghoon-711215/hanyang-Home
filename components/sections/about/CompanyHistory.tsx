const milestones = [
  { year: '2016', title: '회사 설립', description: '식품 제조 전문 기업으로 설립. 창업 이념인 "자연의 맛, 정성의 향"을 기치로 출발했습니다.' },
  { year: '2021', title: '생산 시설 확장', description: '증가하는 수요에 대응하기 위해 생산 라인을 확장하고 최신 설비를 도입했습니다.' },
  { year: '2022', title: 'HACCP 인증 취득', description: '식품안전관리인증기준(HACCP) 인증을 취득하며 위생·안전 수준을 공식적으로 인정받았습니다.' },
  { year: '2023', title: '대표 제품 출시', description: '오랜 연구 개발 끝에 대표 제품을 출시하며 소비자들로부터 큰 호응을 얻었습니다.' },
  { year: '2024', title: '주요 유통망 입점', description: '전국 주요 대형마트 및 온라인 쇼핑몰 입점을 통해 유통망을 확대했습니다.' },
  { year: '2026', title: '현재', description: '지속적인 품질 개선과 신제품 개발로 신뢰받는 식품 기업으로 성장하고 있습니다.' },
] as const;

export default function CompanyHistory() {
  return (
    <section className="section-padding" style={{ background: '#FBF8F3' }}>
      <div className="container-brand">
        <div className="text-center mb-14">
          <span className="tag-brand mb-4 inline-flex">연혁</span>
          <h2 className="font-heading font-bold text-neutral-900 word-keep">걸어온 길</h2>
          <p className="mt-3 font-body text-neutral-500 word-keep max-w-md mx-auto leading-korean">끊임없는 노력과 혁신으로 성장해 온 우리의 역사입니다.</p>
        </div>
        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-1/2 top-0 bottom-0 w-px hidden md:block -translate-x-1/2" style={{ background: 'linear-gradient(to bottom, transparent, #E8DFD0 8%, #E8DFD0 92%, transparent)' }} aria-hidden="true" />
          <div className="absolute left-6 top-0 bottom-0 w-px md:hidden" style={{ background: 'linear-gradient(to bottom, transparent, #E8DFD0 8%, #E8DFD0 92%, transparent)' }} aria-hidden="true" />
          <div className="space-y-8 md:space-y-0">
            {milestones.map((item, i) => {
              const isRight = i % 2 === 0;
              return (
                <div key={`${item.year}-${i}`} className={`relative flex pl-16 md:pl-0 md:items-center ${isRight ? 'md:flex-row' : 'md:flex-row-reverse'} md:gap-0`}>
                  <div className={`w-full md:w-[calc(50%-2rem)] ${isRight ? 'md:pr-8 md:text-right' : 'md:pl-8'}`}>
                    <div className="bg-white rounded-xl p-6 border border-neutral-200 shadow-brand-sm hover:shadow-brand transition-shadow duration-300">
                      <span className="font-accent text-xl italic font-light mb-2 block" style={{ color: '#D4A017' }}>{item.year}</span>
                      <h3 className="font-heading text-lg font-semibold text-neutral-900 mb-2 word-keep">{item.title}</h3>
                      <p className="font-body text-sm text-neutral-500 leading-korean word-keep">{item.description}</p>
                    </div>
                  </div>
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2 border-primary bg-white z-10 items-center justify-center flex-shrink-0"><div className="w-1.5 h-1.5 rounded-full" style={{ background: '#D4A017' }} /></div>
                  <div className="md:hidden absolute left-4 top-7 w-4 h-4 rounded-full border-2 border-primary bg-white z-10 flex items-center justify-center flex-shrink-0"><div className="w-1.5 h-1.5 rounded-full" style={{ background: '#D4A017' }} /></div>
                  <div className="hidden md:block w-[calc(50%-2rem)]" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
