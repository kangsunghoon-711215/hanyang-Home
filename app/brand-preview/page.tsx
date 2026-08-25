import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '브랜드 디자인 시스템 — Brand Preview',
  description: '색상, 타이포그래피, 간격 토큰을 시각적으로 확인할 수 있는 브랜드 미리보기 페이지입니다.',
};

// ── Color token definitions ────────────────────────────────
const colorGroups = [
  {
    label: '주색 (Primary)',
    description: '따뜻한 흙빛 브라운 — 전통, 신뢰, 장인정신',
    swatches: [
      { name: '50',  hex: '#FDF6F0', textDark: true },
      { name: '100', hex: '#F8E8D8', textDark: true },
      { name: '200', hex: '#F0CEAD', textDark: true },
      { name: '300', hex: '#E4AD7A', textDark: true },
      { name: '400', hex: '#D4894A', textDark: true },
      { name: '500', hex: '#C06A2A', textDark: false },
      { name: '600 (Core)', hex: '#8B4513', textDark: false },
      { name: '700', hex: '#6E350F', textDark: false },
      { name: '800', hex: '#52280B', textDark: false },
      { name: '900', hex: '#3A1C08', textDark: false },
    ],
  },
  {
    label: '보조색 (Secondary)',
    description: '자연 그린 — 신선함, 원재료, 자연친화',
    swatches: [
      { name: '50',  hex: '#F3F7EE', textDark: true },
      { name: '100', hex: '#E2EDD4', textDark: true },
      { name: '200', hex: '#C3D9A6', textDark: true },
      { name: '300', hex: '#9CC273', textDark: true },
      { name: '400', hex: '#78A84C', textDark: true },
      { name: '500 (Core)', hex: '#5C7A3E', textDark: false },
      { name: '600', hex: '#4A6232', textDark: false },
      { name: '700', hex: '#3A4D27', textDark: false },
      { name: '800', hex: '#2B3A1D', textDark: false },
      { name: '900', hex: '#1E2914', textDark: false },
    ],
  },
  {
    label: '강조색 (Accent)',
    description: '황금빛 골드 — 식욕, 따뜻함, 프리미엄',
    swatches: [
      { name: '50',  hex: '#FEFBF0', textDark: true },
      { name: '100', hex: '#FDF4D3', textDark: true },
      { name: '200', hex: '#FAE79F', textDark: true },
      { name: '300', hex: '#F5D460', textDark: true },
      { name: '400', hex: '#ECC02C', textDark: true },
      { name: '500 (Core)', hex: '#D4A017', textDark: true },
      { name: '600', hex: '#A97D10', textDark: false },
      { name: '700', hex: '#7E5D0C', textDark: false },
      { name: '800', hex: '#5A4209', textDark: false },
      { name: '900', hex: '#3D2D06', textDark: false },
    ],
  },
  {
    label: '중립색 (Neutral)',
    description: '웜-틴티드 뉴트럴 — 배경, 경계선, 텍스트',
    swatches: [
      { name: '50 (Background)', hex: '#FBF8F3', textDark: true },
      { name: '100', hex: '#F4EFE7', textDark: true },
      { name: '200 (Border)', hex: '#E8DFD0', textDark: true },
      { name: '300', hex: '#D4C8B4', textDark: true },
      { name: '400', hex: '#B8A892', textDark: true },
      { name: '500 (Muted)', hex: '#96856E', textDark: false },
      { name: '600', hex: '#7A6A57', textDark: false },
      { name: '700', hex: '#5E5244', textDark: false },
      { name: '800', hex: '#3D3530', textDark: false },
      { name: '900 (Text)', hex: '#1A1A1A', textDark: false },
    ],
  },
];

const semanticColors = [
  { label: '배경 (Background)', hex: '#FBF8F3', usage: 'app background' },
  { label: '서피스 (Surface)', hex: '#FFFFFF', usage: 'card, modal' },
  { label: '본문 텍스트 (Text)', hex: '#1A1A1A', usage: 'body copy' },
  { label: '보조 텍스트 (Muted)', hex: '#96856E', usage: 'captions, labels' },
  { label: '경계선 (Border)', hex: '#E8DFD0', usage: 'dividers, outlines' },
  { label: '성공 (Success)', hex: '#5C7A3E', usage: 'positive states' },
  { label: '경고 (Warning)', hex: '#D4A017', usage: 'caution states' },
  { label: '오류 (Error)', hex: '#C0392B', usage: 'error states' },
];

const typographySpecimens = [
  {
    font: 'Noto Serif KR',
    role: '헤딩 서체 (Heading)',
    usage: 'H1, H2, H3 — 제목 전용',
    specimens: [
      { label: 'Display — 72px / 700', className: 'font-heading text-7xl font-bold leading-tight tracking-korean', text: '자연의 맛' },
      { label: 'H1 — 48px / 700', className: 'font-heading text-5xl font-bold leading-snug tracking-korean', text: '장인이 만드는 정성' },
      { label: 'H2 — 36px / 600', className: 'font-heading text-4xl font-semibold tracking-korean', text: '신선한 원재료, 깊은 풍미' },
      { label: 'H3 — 28px / 500', className: 'font-heading text-3xl font-medium tracking-wide', text: '전통을 담은 한 그릇' },
    ],
  },
  {
    font: 'Cormorant Garamond',
    role: '악센트 서체 (Accent / Display)',
    usage: '히어로 영문 장식, 인용구',
    specimens: [
      { label: 'Italic Display — 60px / 300', className: 'font-accent text-6xl font-light italic text-primary-400', text: 'Nature\'s finest' },
      { label: 'Regular — 36px / 400', className: 'font-accent text-4xl font-normal text-neutral-600', text: 'Crafted with Care' },
      { label: 'Quote — 24px / 300 Italic', className: 'font-accent text-2xl font-light italic text-neutral-500', text: '"맛의 근원은 정직한 재료입니다"' },
    ],
  },
  {
    font: 'Pretendard Variable',
    role: '본문 서체 (Body)',
    usage: '모든 본문, UI 텍스트',
    specimens: [
      { label: 'Large Body — 18px / 400', className: 'font-body text-lg font-normal leading-korean text-neutral-800', text: '오랜 전통과 최신 위생 설비가 만들어낸 깊은 맛. 엄선된 원재료만을 사용하여 정성껏 만들어집니다.' },
      { label: 'Body — 16px / 400', className: 'font-body text-base font-normal leading-korean text-neutral-700', text: 'HACCP 인증을 받은 청정 생산 시설에서 엄격한 위생 기준에 따라 제조되어 안전하고 믿을 수 있습니다.' },
      { label: 'Small — 14px / 400', className: 'font-body text-sm font-normal leading-relaxed text-neutral-500', text: '제조원: 주식회사 ○○식품 | 유통기한: 제조일로부터 60일 | 보관방법: 냉장 0~10°C' },
      { label: 'Label — 12px / 500 Upper', className: 'font-body text-xs font-medium uppercase tracking-widest text-neutral-400', text: 'HACCP CERTIFIED · SINCE 2010' },
    ],
  },
];

const spacingScale = [2, 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128];

const shadowTokens = [
  { name: 'brand-sm', label: 'sm', value: '0 1px 3px rgba(138,69,19,0.08)', usage: 'Tags, chips' },
  { name: 'brand', label: 'DEFAULT', value: '0 4px 12px rgba(138,69,19,0.10)', usage: 'Cards' },
  { name: 'brand-md', label: 'md', value: '0 8px 24px rgba(138,69,19,0.12)', usage: 'Dropdowns' },
  { name: 'brand-lg', label: 'lg', value: '0 16px 40px rgba(138,69,19,0.14)', usage: 'Modals' },
  { name: 'brand-xl', label: 'xl', value: '0 24px 64px rgba(138,69,19,0.18)', usage: 'Drawers' },
  { name: 'glow-gold', label: 'glow-gold', value: '0 0 40px rgba(212,160,23,0.25)', usage: 'CTA glow' },
];

const radiusTokens = [
  { name: 'none', value: '0px', class: 'rounded-none' },
  { name: 'sm', value: '2px', class: 'rounded-sm' },
  { name: 'DEFAULT', value: '6px', class: 'rounded' },
  { name: 'md', value: '8px', class: 'rounded-md' },
  { name: 'lg', value: '12px', class: 'rounded-lg' },
  { name: 'xl', value: '16px', class: 'rounded-xl' },
  { name: '2xl', value: '24px', class: 'rounded-2xl' },
  { name: '3xl', value: '32px', class: 'rounded-3xl' },
  { name: 'full', value: '9999px', class: 'rounded-full' },
];

// ── Section header component ───────────────────────────────
function SectionHeader({ number, title, subtitle }: { number: string; title: string; subtitle: string }) {
  return (
    <div className="mb-10 pb-6 border-b border-neutral-200">
      <div className="flex items-baseline gap-4">
        <span className="font-accent text-6xl font-light text-neutral-200 select-none leading-none">
          {number}
        </span>
        <div>
          <h2 className="font-heading text-2xl font-semibold text-neutral-900 tracking-korean">
            {title}
          </h2>
          <p className="font-body text-sm text-neutral-500 mt-1">{subtitle}</p>
        </div>
      </div>
    </div>
  );
}

// ── Main brand preview page ────────────────────────────────
export default function BrandPreviewPage() {
  return (
    <div className="min-h-screen bg-neutral-50">
      {/* ── Hero Header ──────────────────────────────────── */}
      <header
        className="relative overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #3A1C08 0%, #6E350F 30%, #8B4513 60%, #C06A2A 100%)',
        }}
      >
        {/* Grain overlay */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E\")",
          }}
        />
        {/* Gold accent line */}
        <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-accent to-transparent opacity-80" />

        <div className="relative container-brand py-20">
          <div className="flex items-start justify-between flex-wrap gap-8">
            <div>
              <div
                className="font-body text-xs font-medium uppercase tracking-widest mb-4"
                style={{ color: 'rgba(212, 160, 23, 0.9)' }}
              >
                Brand Design System · v1.0
              </div>
              <h1
                className="font-heading text-5xl md:text-6xl font-bold tracking-korean mb-4"
                style={{ color: '#FBF8F3' }}
              >
                브랜드 디자인 시스템
              </h1>
              <p
                className="font-accent text-2xl font-light italic mb-2"
                style={{ color: 'rgba(251, 248, 243, 0.7)' }}
              >
                Korean Food Manufacturing Company
              </p>
              <p
                className="font-body text-base leading-relaxed max-w-xl"
                style={{ color: 'rgba(251, 248, 243, 0.6)' }}
              >
                색상, 타이포그래피, 간격, 그림자 토큰을 시각적으로 확인하고 클라이언트 승인을 위한 브랜드 미리보기 페이지입니다.
              </p>
            </div>
            {/* Mini brand mark */}
            <div className="text-right">
              <div
                className="inline-flex flex-col items-end gap-1 p-6 rounded-2xl border"
                style={{
                  background: 'rgba(251, 248, 243, 0.06)',
                  borderColor: 'rgba(212, 160, 23, 0.3)',
                }}
              >
                <span className="font-accent text-4xl font-light" style={{ color: '#D4A017' }}>
                  자연의 맛
                </span>
                <span
                  className="font-body text-xs tracking-widest"
                  style={{ color: 'rgba(251, 248, 243, 0.5)' }}
                >
                  정성의 향
                </span>
              </div>
            </div>
          </div>

          {/* Token quick stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            {[
              { n: '40', label: '색상 토큰', sub: 'Color tokens' },
              { n: '3',  label: '서체 패밀리', sub: 'Font families' },
              { n: '6',  label: '그림자 레벨', sub: 'Shadow levels' },
              { n: '9',  label: '모서리 반경', sub: 'Border radii' },
            ].map((stat) => (
              <div
                key={stat.label}
                className="p-4 rounded-xl"
                style={{ background: 'rgba(251,248,243,0.07)', border: '1px solid rgba(212,160,23,0.2)' }}
              >
                <div className="font-accent text-3xl font-light" style={{ color: '#D4A017' }}>
                  {stat.n}
                </div>
                <div className="font-heading text-sm font-medium mt-1" style={{ color: '#FBF8F3' }}>
                  {stat.label}
                </div>
                <div className="font-body text-xs" style={{ color: 'rgba(251,248,243,0.45)' }}>
                  {stat.sub}
                </div>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* ── Main Content ──────────────────────────────────── */}
      <main className="container-brand py-16 space-y-24">

        {/* ════════════════════════════════════════════════
            01. COLOR SYSTEM
            ════════════════════════════════════════════════ */}
        <section>
          <SectionHeader
            number="01"
            title="색상 시스템 (Color System)"
            subtitle="All color palettes with semantic naming — use CSS vars or Tailwind classes"
          />

          {/* Full palettes */}
          <div className="space-y-10">
            {colorGroups.map((group) => (
              <div key={group.label}>
                <div className="mb-3">
                  <h3 className="font-heading text-lg font-semibold text-neutral-800 tracking-wide">
                    {group.label}
                  </h3>
                  <p className="font-body text-sm text-neutral-500">{group.description}</p>
                </div>
                <div className="grid grid-cols-5 md:grid-cols-10 gap-2">
                  {group.swatches.map((swatch) => (
                    <div key={swatch.name} className="group">
                      <div
                        className="h-16 rounded-lg shadow-brand-sm mb-2 transition-transform duration-200 group-hover:scale-105 group-hover:shadow-brand cursor-default"
                        style={{ backgroundColor: swatch.hex }}
                      />
                      <div className="font-body text-xs text-neutral-600 leading-tight">
                        <div className="font-medium">{swatch.name}</div>
                        <div className="text-neutral-400 font-mono text-[10px]">{swatch.hex}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Semantic colors */}
          <div className="mt-12">
            <h3 className="font-heading text-lg font-semibold text-neutral-800 mb-4 tracking-wide">
              시맨틱 색상 (Semantic Colors)
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {semanticColors.map((color) => (
                <div
                  key={color.label}
                  className="card-brand p-4 flex items-center gap-3"
                >
                  <div
                    className="w-10 h-10 rounded-lg flex-shrink-0 shadow-brand-sm"
                    style={{ backgroundColor: color.hex }}
                  />
                  <div>
                    <div className="font-body text-sm font-medium text-neutral-800">
                      {color.label}
                    </div>
                    <div className="font-mono text-xs text-neutral-400">{color.hex}</div>
                    <div className="font-body text-xs text-neutral-400 italic">{color.usage}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Color combinations */}
          <div className="mt-10">
            <h3 className="font-heading text-lg font-semibold text-neutral-800 mb-4 tracking-wide">
              조합 예시 (Color Combinations)
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="rounded-xl overflow-hidden shadow-brand">
                <div className="bg-primary p-5">
                  <div className="font-body text-xs text-primary-200 uppercase tracking-widest mb-1">Primary</div>
                  <div className="font-heading text-2xl font-bold text-white tracking-korean">주색 배경</div>
                  <p className="font-body text-sm text-primary-200 mt-2 leading-relaxed">흰색 텍스트와 조합</p>
                </div>
                <div className="bg-primary-50 p-4">
                  <span className="font-body text-xs text-primary-600">Light variant for backgrounds</span>
                </div>
              </div>
              <div className="rounded-xl overflow-hidden shadow-brand">
                <div className="bg-accent p-5">
                  <div className="font-body text-xs text-accent-800 uppercase tracking-widest mb-1">Accent</div>
                  <div className="font-heading text-2xl font-bold text-primary-900 tracking-korean">강조 배경</div>
                  <p className="font-body text-sm text-primary-800 mt-2 leading-relaxed">어두운 텍스트와 조합</p>
                </div>
                <div className="bg-accent-50 p-4">
                  <span className="font-body text-xs text-accent-700">CTA buttons, highlights</span>
                </div>
              </div>
              <div className="rounded-xl overflow-hidden shadow-brand">
                <div className="bg-secondary p-5">
                  <div className="font-body text-xs text-secondary-200 uppercase tracking-widest mb-1">Secondary</div>
                  <div className="font-heading text-2xl font-bold text-white tracking-korean">보조 배경</div>
                  <p className="font-body text-sm text-secondary-200 mt-2 leading-relaxed">흰색 텍스트와 조합</p>
                </div>
                <div className="bg-secondary-50 p-4">
                  <span className="font-body text-xs text-secondary-600">Tags, badges, accents</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════
            02. TYPOGRAPHY
            ════════════════════════════════════════════════ */}
        <section>
          <SectionHeader
            number="02"
            title="타이포그래피 (Typography)"
            subtitle="Three font families with Korean-optimized line-height and letter-spacing"
          />

          <div className="space-y-16">
            {typographySpecimens.map((family, fi) => (
              <div
                key={family.font}
                className="card-brand p-8"
              >
                {/* Family header */}
                <div className="flex items-start justify-between gap-4 mb-8 pb-6 border-b border-neutral-100 flex-wrap">
                  <div>
                    <div className="font-body text-xs font-medium uppercase tracking-widest text-neutral-400 mb-1">
                      {String(fi + 1).padStart(2, '0')} / 03
                    </div>
                    <h3 className="font-heading text-xl font-semibold text-neutral-900">
                      {family.font}
                    </h3>
                    <p className="font-body text-sm text-neutral-500 mt-0.5">{family.role}</p>
                  </div>
                  <div className="text-right">
                    <div
                      className="inline-block px-3 py-1.5 rounded-full text-xs font-medium"
                      style={{ background: '#FDF6F0', color: '#8B4513', border: '1px solid #F0CEAD' }}
                    >
                      {family.usage}
                    </div>
                  </div>
                </div>

                {/* Specimens */}
                <div className="space-y-8">
                  {family.specimens.map((specimen) => (
                    <div key={specimen.label} className="group">
                      <div className="font-body text-xs text-neutral-400 uppercase tracking-wider mb-2">
                        {specimen.label}
                      </div>
                      <div className={specimen.className + ' word-keep'}>
                        {specimen.text}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Korean text sample */}
          <div className="mt-10 rounded-2xl overflow-hidden">
            <div className="bg-neutral-900 p-8">
              <div className="font-body text-xs text-neutral-500 uppercase tracking-widest mb-6">
                Korean Body Text Sample — Full Paragraph
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <div className="font-body text-xs text-neutral-600 mb-3">Pretendard — 본문 (한국어)</div>
                  <p className="font-body text-base text-neutral-200 leading-korean word-keep">
                    저희 식품은 오랜 전통과 현대적 생산 기술을 결합하여 최고 품질의 제품을 만들어냅니다. 엄선된 원재료만을 사용하며, HACCP 인증 시설에서 엄격한 위생 기준 아래 생산합니다.
                  </p>
                </div>
                <div>
                  <div className="font-body text-xs text-neutral-600 mb-3">Noto Serif KR — 헤딩 (한국어)</div>
                  <p className="font-heading text-xl font-medium text-neutral-200 leading-korean word-keep tracking-korean">
                    자연에서 온 재료로 정성껏 빚어낸 맛. 한 입 한 입에 담긴 장인의 정성과 자연의 신선함을 느껴보세요.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════
            03. SPACING SCALE
            ════════════════════════════════════════════════ */}
        <section>
          <SectionHeader
            number="03"
            title="간격 시스템 (Spacing Scale)"
            subtitle="4px base unit — consistent spacing tokens for all layout decisions"
          />

          <div className="card-brand p-8">
            <div className="space-y-4">
              {spacingScale.map((px) => (
                <div key={px} className="flex items-center gap-4 group">
                  <div className="w-20 font-mono text-xs text-neutral-400 text-right">
                    {px}px
                  </div>
                  <div
                    className="h-6 rounded bg-primary-200 group-hover:bg-primary-400 transition-colors duration-200"
                    style={{ width: `${Math.min(px * 2.5, 640)}px` }}
                  />
                  <div className="font-mono text-xs text-neutral-400">
                    {(px / 16).toFixed(3).replace(/\.?0+$/, '')}rem
                  </div>
                  <div className="font-body text-xs text-neutral-400">
                    space-{px / 4}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════
            04. SHADOWS
            ════════════════════════════════════════════════ */}
        <section>
          <SectionHeader
            number="04"
            title="그림자 시스템 (Shadow System)"
            subtitle="Warm brown-tinted shadows maintaining brand warmth at every elevation"
          />

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {shadowTokens.map((shadow) => (
              <div
                key={shadow.name}
                className="bg-white rounded-xl p-6 transition-transform duration-200 hover:-translate-y-1"
                style={{ boxShadow: shadow.value }}
              >
                <div className="font-heading text-base font-semibold text-neutral-800 mb-1">
                  shadow-{shadow.label}
                </div>
                <div className="font-body text-xs text-neutral-400 mb-3 italic">{shadow.usage}</div>
                <div className="font-mono text-xs text-neutral-300 leading-relaxed break-all">
                  {shadow.value}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ════════════════════════════════════════════════
            05. BORDER RADIUS
            ════════════════════════════════════════════════ */}
        <section>
          <SectionHeader
            number="05"
            title="모서리 반경 (Border Radius)"
            subtitle="From sharp to fully rounded — pick the right radius for each component"
          />

          <div className="grid grid-cols-3 md:grid-cols-5 gap-4">
            {radiusTokens.map((r) => (
              <div key={r.name} className="text-center">
                <div
                  className="w-full aspect-square bg-primary-100 border-2 border-primary-200 mx-auto mb-3 flex items-center justify-center"
                  style={{ borderRadius: r.value, maxWidth: '80px' }}
                >
                  <div className="w-1/2 h-1/2 bg-primary rounded-sm" style={{ borderRadius: r.value }} />
                </div>
                <div className="font-heading text-xs font-semibold text-neutral-700">{r.name}</div>
                <div className="font-mono text-xs text-neutral-400">{r.value}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ════════════════════════════════════════════════
            06. COMPONENT PREVIEW
            ════════════════════════════════════════════════ */}
        <section>
          <SectionHeader
            number="06"
            title="컴포넌트 미리보기 (Component Preview)"
            subtitle="Buttons, tags, cards — all using brand tokens"
          />

          {/* Buttons */}
          <div className="card-brand p-8 mb-6">
            <h3 className="font-heading text-base font-semibold text-neutral-700 mb-6 uppercase tracking-wider text-xs">
              Buttons
            </h3>
            <div className="flex flex-wrap gap-4 items-center">
              <button className="btn-primary">
                제품 문의하기
              </button>
              <button className="btn-secondary">
                더 알아보기
              </button>
              <button className="btn-accent">
                지금 주문하기
              </button>
              <button
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium text-sm text-neutral-600 border border-neutral-300 hover:bg-neutral-100 transition-colors"
              >
                닫기
              </button>
            </div>

            {/* Button sizes */}
            <div className="flex flex-wrap gap-4 items-center mt-6 pt-6 border-t border-neutral-100">
              <button className="btn-primary text-xs px-4 py-2">Small</button>
              <button className="btn-primary text-sm px-6 py-3">Medium</button>
              <button className="btn-primary text-base px-8 py-4">Large</button>
            </div>
          </div>

          {/* Tags & Badges */}
          <div className="card-brand p-8 mb-6">
            <h3 className="font-heading text-base font-semibold text-neutral-700 mb-6 uppercase tracking-wider text-xs">
              Tags & Badges
            </h3>
            <div className="flex flex-wrap gap-3">
              <span className="tag-brand">HACCP 인증</span>
              <span className="tag-brand">원재료</span>
              <span className="tag-brand">무방부제</span>
              <span
                className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium"
                style={{ background: '#F3F7EE', color: '#3A4D27', border: '1px solid #C3D9A6' }}
              >
                신선 냉장
              </span>
              <span
                className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium"
                style={{ background: '#FEFBF0', color: '#7E5D0C', border: '1px solid #FAE79F' }}
              >
                프리미엄
              </span>
            </div>
          </div>

          {/* Card example */}
          <div>
            <h3 className="font-heading text-base font-semibold text-neutral-700 mb-4 uppercase tracking-wider text-xs">
              Product Card
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {['대표 제품 A', '시즌 특선 B', '프리미엄 C'].map((name, i) => (
                <div key={name} className="card-brand overflow-hidden">
                  {/* Image placeholder */}
                  <div
                    className="aspect-[4/3] flex items-center justify-center"
                    style={{
                      background: `linear-gradient(135deg, hsl(${20 + i * 30},45%,${85 - i * 5}%) 0%, hsl(${20 + i * 30},35%,${78 - i * 5}%) 100%)`,
                    }}
                  >
                    <div className="text-center">
                      <div className="font-accent text-4xl font-light" style={{ color: '#8B4513', opacity: 0.4 }}>
                        食
                      </div>
                      <div className="font-body text-xs text-neutral-500 mt-1">제품 이미지</div>
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-heading text-base font-semibold text-neutral-900 tracking-korean">
                        {name}
                      </h4>
                      <span className="tag-brand text-xs ml-2 flex-shrink-0">신제품</span>
                    </div>
                    <p className="font-body text-sm text-neutral-500 leading-relaxed mb-4 word-keep">
                      엄선된 원재료로 정성껏 만들어진 대표 제품입니다.
                    </p>
                    <button className="btn-secondary text-sm w-full py-2.5">
                      자세히 보기
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════
            07. BRAND VOICE
            ════════════════════════════════════════════════ */}
        <section>
          <SectionHeader
            number="07"
            title="브랜드 보이스 (Brand Voice)"
            subtitle="Tone, tagline, and messaging guidelines"
          />

          <div className="grid md:grid-cols-2 gap-6">
            {/* Tagline showcase */}
            <div
              className="rounded-2xl p-10 flex flex-col justify-between"
              style={{
                background: 'linear-gradient(135deg, #FBF8F3 0%, #F4EFE7 100%)',
                border: '1px solid #E8DFD0',
              }}
            >
              <div className="font-body text-xs uppercase tracking-widest text-neutral-400 mb-6">
                Brand Tagline
              </div>
              <div>
                <div className="font-heading text-4xl font-bold text-primary-800 tracking-korean mb-2 word-keep">
                  자연의 맛,
                </div>
                <div className="font-heading text-4xl font-bold text-primary tracking-korean word-keep">
                  정성의 향
                </div>
                <div className="font-accent text-xl font-light italic text-neutral-500 mt-3">
                  Nature&apos;s Taste, Crafted with Care
                </div>
              </div>
              <div className="mt-8 pt-6 border-t border-neutral-200">
                <div className="font-body text-sm text-neutral-500 leading-relaxed word-keep">
                  자연에서 온 신선한 재료와 장인의 정성이 만나 완성되는 깊은 맛의 여정
                </div>
              </div>
            </div>

            {/* Brand tones */}
            <div className="card-brand p-8">
              <div className="font-body text-xs uppercase tracking-widest text-neutral-400 mb-6">
                Brand Tone Keywords
              </div>
              <div className="space-y-3">
                {[
                  { ko: '따뜻한', en: 'Warm', desc: '고객과의 친근한 관계' },
                  { ko: '신뢰로운', en: 'Trustworthy', desc: '품질과 위생에 대한 확신' },
                  { ko: '전통적인', en: 'Traditional', desc: '오랜 노하우와 레시피' },
                  { ko: '정성스러운', en: 'Crafted', desc: '한 제품 한 제품에 담긴 공들임' },
                  { ko: '자연친화적인', en: 'Natural', desc: '원재료의 순수함 강조' },
                ].map((tone) => (
                  <div
                    key={tone.ko}
                    className="flex items-center gap-4 p-3 rounded-lg"
                    style={{ background: '#FDF6F0' }}
                  >
                    <div className="w-1 h-8 rounded-full bg-primary flex-shrink-0" />
                    <div>
                      <span className="font-heading text-sm font-semibold text-primary-700">{tone.ko}</span>
                      <span className="font-body text-xs text-neutral-400 ml-2">/ {tone.en}</span>
                    </div>
                    <div className="font-body text-xs text-neutral-400 ml-auto hidden md:block">
                      {tone.desc}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* ── Footer ───────────────────────────────────────── */}
      <footer className="mt-24 border-t border-neutral-200 bg-white">
        <div className="container-brand py-10">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <div className="font-heading text-base font-semibold text-neutral-800 tracking-korean">
                브랜드 디자인 시스템
              </div>
              <div className="font-body text-xs text-neutral-400 mt-1">
                Korean Food Manufacturing Company · v1.0 · 2026
              </div>
            </div>
            <div className="font-body text-xs text-neutral-400">
              이 페이지는 클라이언트 승인 후 삭제됩니다
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
