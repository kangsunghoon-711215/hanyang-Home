import type { Metadata } from 'next';
import Image from 'next/image';
import KakaoMap from '@/components/ui/KakaoMap';

export const metadata: Metadata = {
  title: '문의하기',
  description: '전화, 이메일, 방문으로 문의해 주세요. 제품 구매 및 유통 상담은 평일 09:00~18:00 가능합니다.',
  alternates: { canonical: '/contact' },
  openGraph: {
    title: '문의하기 | 속편한 한끼 식사',
    description: '전화, 이메일, 방문으로 문의해 주세요. 평일 09:00~18:00 상담 가능합니다.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
    locale: 'ko_KR',
    type: 'website',
  },
};

const PHONE = '010-9139-4110';
const PHONE_INTL = 'tel:+82-10-9139-4110';
const EMAIL = 'aux97@naver.com';
const ADDRESS = '부천시 원미구 도당동 100-7 동양테크노 203호';
const MAP_URL = 'https://map.kakao.com/link/map/동양테크노,37.510791,126.783442';
const MAP_LAT = 37.510791;
const MAP_LNG = 126.783442;

const contactCards = [
  {
    icon: PhoneIcon,
    title: '전화 문의',
    content: PHONE,
    sub: '평일 09:00 ~ 18:00',
    action: { label: '모바일에서 바로 통화하기', href: PHONE_INTL },
  },
  {
    icon: EmailIcon,
    title: '이메일 문의',
    content: EMAIL,
    sub: '24시간 접수 · 영업일 기준 1일 내 회신',
    action: { label: '이메일 보내기', href: `mailto:${EMAIL}` },
  },
  {
    icon: LocationIcon,
    title: '오시는 길',
    content: ADDRESS,
    sub: '주차 가능 · 대중교통 이용 권장',
    action: { label: '지도 보기', href: MAP_URL },
  },
];

export default function ContactPage() {
  return (
    <>
      {/* ── Section 1: Hero ──────────────────────────────────── */}
      <section
        className="relative flex items-center overflow-hidden"
        style={{ minHeight: '42vh', background: 'linear-gradient(160deg, #1A0802 0%, #3A1C08 55%, #52280B 100%)' }}
      >
        <div
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E\")",
          }}
        />
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(212,160,23,0.5) 30%, rgba(212,160,23,0.8) 50%, rgba(212,160,23,0.5) 70%, transparent)' }}
        />
        <div className="relative z-10 container-brand py-28 pt-36">
          <span
            className="inline-flex items-center px-4 py-1.5 rounded-full font-body text-xs font-semibold tracking-widest uppercase mb-5"
            style={{ background: 'rgba(212,160,23,0.1)', border: '1px solid rgba(212,160,23,0.35)', color: '#D4A017' }}
          >
            Contact
          </span>
          <h1
            className="font-heading font-bold text-white word-keep"
            style={{ fontSize: 'clamp(2.25rem, 5vw, 4rem)', lineHeight: '1.22', letterSpacing: '0.03em', maxWidth: '560px' }}
          >
            문의하기
          </h1>
          <p
            className="mt-5 font-body word-keep"
            style={{ fontSize: 'clamp(1rem, 1.8vw, 1.15rem)', color: 'rgba(251,248,243,0.65)', lineHeight: '1.85', maxWidth: '440px' }}
          >
            제품 구매, 유통 상담, 방문 등 어떤 문의든 편하게 연락해 주세요.
          </p>
        </div>
      </section>

      {/* ── Section 2: Contact Info Cards ────────────────── */}
      <section className="section-padding" style={{ background: '#FBF8F3' }}>
        <div className="container-brand">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactCards.map(({ icon: Icon, title, content, sub, action }) => (
              <div
                key={title}
                className="bg-white rounded-2xl p-8 border border-neutral-200 flex flex-col"
                style={{ boxShadow: '0 4px 12px rgba(138,69,19,0.07)' }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 flex-shrink-0"
                  style={{ background: 'linear-gradient(135deg, #FDF6F0 0%, #F8E8D8 100%)', border: '1px solid #F0CEAD' }}
                >
                  <Icon />
                </div>
                <h2 className="font-heading text-lg font-semibold text-neutral-900 mb-3">{title}</h2>
                <p className="font-body text-base font-medium text-primary mb-1 word-keep break-all">{content}</p>
                <p className="font-body text-xs text-neutral-400 mb-6 word-keep">{sub}</p>
                <div className="mt-auto">
                  <a
                    href={action.href}
                    target={action.href.startsWith('http') ? '_blank' : undefined}
                    rel={action.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-body text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5"
                    style={{ background: '#8B4513', color: '#FBF8F3', boxShadow: '0 2px 8px rgba(138,69,19,0.2)' }}
                  >
                    {action.label}
                    <ArrowIcon />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 3: Map Embed ──────────────────────────── */}
      <section className="section-padding" style={{ background: '#F4EFE7' }}>
        <div className="container-brand">
          <div className="mb-8">
            <span className="tag-brand mb-4 inline-flex">찾아오시는 길</span>
            <h2 className="font-heading font-bold text-neutral-900 word-keep">위치 안내</h2>
            <p className="mt-2 font-body text-neutral-500 word-keep">{ADDRESS}</p>
          </div>
          <div
            className="grid grid-cols-1 md:grid-cols-2 rounded-2xl overflow-hidden border border-neutral-200"
            style={{ boxShadow: '0 4px 12px rgba(138,69,19,0.08)' }}
          >
            <div className="relative bg-white" style={{ minHeight: '400px' }}>
              <Image
                src="/images/map-directions.jpg"
                alt="동양테크노 약도"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <KakaoMap lat={MAP_LAT} lng={MAP_LNG} markerTitle="동양테크노 203호" />
          </div>
        </div>
      </section>

      {/* ── Section 4: B2B CTA ──────────────────────────────────── */}
      <section className="section-padding" style={{ background: '#F3F7EE' }}>
        <div className="container-brand">
          <div
            className="rounded-2xl px-8 py-12 md:px-14 flex flex-col md:flex-row items-center justify-between gap-8"
            style={{ background: 'linear-gradient(135deg, #E2EDD4 0%, #F3F7EE 100%)', border: '1px solid #C3D9A6' }}
          >
            <div className="text-center md:text-left">
              <span
                className="inline-flex items-center px-3 py-1 rounded-full font-body text-xs font-semibold tracking-wider mb-4"
                style={{ background: 'rgba(92,122,62,0.12)', border: '1px solid rgba(92,122,62,0.3)', color: '#3A4D27' }}
              >
                B2B · 유통 문의
              </span>
              <h2
                className="font-heading font-bold word-keep"
                style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: '#1E2914', lineHeight: '1.35' }}
              >
                유통 및 대량 구매 문의
              </h2>
              <p
                className="mt-3 font-body word-keep leading-korean max-w-lg"
                style={{ color: '#3A4D27', fontSize: '1rem' }}
              >
                유통 및 대량 구매 문의는 전화 또는 이메일로 연락 주세요.<br className="hidden sm:block" />
                담당자가 빠르게 안내해 드립니다.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
              <a
                href={PHONE_INTL}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-body text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5"
                style={{ background: '#5C7A3E', color: '#FFFFFF', boxShadow: '0 2px 8px rgba(92,122,62,0.3)' }}
              >
                <PhoneIcon color="#fff" size={16} />
                전화 문의
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-body text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5"
                style={{ background: 'transparent', color: '#3A4D27', border: '1.5px solid #5C7A3E' }}
              >
                <EmailIcon color="#3A4D27" size={16} />
                이메일 문의
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function PhoneIcon({ color = '#8B4513', size = 22 }: { color?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.02 2.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z" />
    </svg>
  );
}

function EmailIcon({ color = '#8B4513', size = 22 }: { color?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

function LocationIcon({ color = '#8B4513', size = 22 }: { color?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}
