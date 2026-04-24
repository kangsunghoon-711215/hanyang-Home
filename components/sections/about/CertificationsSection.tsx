const qualityPoints = [
  {
    icon: HaccpIcon,
    title: 'HACCP 인증',
    description: '식품안전관리인증기준(HACCP) 인증을 취득한 시설에서만 생산합니다.',
    highlight: true,
  },
  {
    icon: CheckIcon,
    title: '정기 품질 검사',
    description: '매 생산 배치마다 자체 품질 검사 및 외부 공인 검사 기관을 통한 정기 검사를 실시합니다.',
    highlight: false,
  },
  {
    icon: LeafIcon,
    title: '원재료 사용',
    description: '모든 원재료는 국내 인증 농가에서 수급하며, 산지 직거래를 통해 신선도를 보장합니다.',
    highlight: false,
  },
  {
    icon: ShieldIcon,
    title: '무첨가 원칙',
    description: '방부제 등 불필요한 첨가물 없이 원재료 본연의 맛을 지킵니다.',
    highlight: false,
  },
] as const;

export default function CertificationsSection() {
  return (
    <section className="section-padding" style={{ background: '#FBF8F3' }}>
      <div className="container-brand">
        <div className="text-center mb-14">
          <span className="tag-brand mb-4 inline-flex">품질 &amp; 위생</span>
          <h2 className="font-heading font-bold text-neutral-900 word-keep">
            믿을 수 있는 품질을 약속합니다
          </h2>
          <p className="mt-3 font-body text-neutral-500 word-keep max-w-lg mx-auto leading-korean">
            엄격한 기준과 투명한 공정으로 매 제품에 최선을 다합니다.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-3xl mx-auto">
          {qualityPoints.map(({ icon: Icon, title, description, highlight }) => (
            <div
              key={title}
              className="relative rounded-2xl p-7 border transition-shadow duration-300 hover:shadow-brand-md"
              style={{
                background: highlight ? 'linear-gradient(135deg, #8B4513 0%, #C06A2A 100%)' : '#FFFFFF',
                borderColor: highlight ? 'transparent' : '#E8DFD0',
              }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                style={{
                  background: highlight ? 'rgba(255,255,255,0.15)' : 'linear-gradient(135deg, #FDF6F0 0%, #F8E8D8 100%)',
                  border: highlight ? '1px solid rgba(255,255,255,0.2)' : '1px solid #F0CEAD',
                }}
              >
                <Icon highlight={highlight} />
              </div>
              <h3
                className="font-heading text-lg font-semibold mb-2 word-keep"
                style={{ color: highlight ? '#FFFFFF' : '#1A1A1A' }}
              >
                {title}
              </h3>
              <p
                className="font-body text-sm leading-korean word-keep"
                style={{ color: highlight ? 'rgba(251,248,243,0.78)' : '#96856E' }}
              >
                {description}
              </p>
              {highlight && (
                <div
                  className="absolute top-4 right-4 px-2.5 py-1 rounded-full font-body text-[10px] font-bold tracking-wider"
                  style={{ background: 'rgba(212,160,23,0.25)', color: '#D4A017', border: '1px solid rgba(212,160,23,0.4)' }}
                >
                  인증 완료
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HaccpIcon({ highlight }: { highlight: boolean }) {
  const c = highlight ? '#FBF8F3' : '#8B4513';
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function CheckIcon({ highlight }: { highlight: boolean }) {
  const c = highlight ? '#FBF8F3' : '#8B4513';
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M9 11l3 3L22 4" />
      <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
    </svg>
  );
}

function LeafIcon({ highlight }: { highlight: boolean }) {
  const c = highlight ? '#FBF8F3' : '#8B4513';
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </svg>
  );
}

function ShieldIcon({ highlight }: { highlight: boolean }) {
  const c = highlight ? '#FBF8F3' : '#8B4513';
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="8" x2="12" y2="12" />
      <line x1="12" y1="16" x2="12.01" y2="16" />
    </svg>
  );
}
