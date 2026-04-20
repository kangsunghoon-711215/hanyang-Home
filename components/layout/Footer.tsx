import Link from 'next/link';
import Image from 'next/image';

const COMPANY = {
  name:      '한양',
  ceo:       '김계숙',
  regNo:     '553-02-00304',
  address:   '부천시 원미구 도당동 100-7 동양테크노 203호',
  phone:     '010-9139-4110',
  phoneIntl: 'tel:+82-10-9139-4110',
  email:     'aux97@naver.com',
};

const navColumns = [
  { heading: '메뉴', links: [{ href: '/', label: '홈' }, { href: '/about', label: '회사소개' }, { href: '/products', label: '제품소개' }, { href: '/contact', label: '문의하기' }] },
  { heading: '고객지원', links: [{ href: '/contact', label: '제품 문의' }, { href: '/contact', label: '유통 문의' }] },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden" style={{ background: 'linear-gradient(160deg, #3A1C08 0%, #52280B 40%, #3D3530 100%)' }}>
      <div className="absolute inset-0 pointer-events-none opacity-20" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E\")" }} />
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(212,160,23,0.6) 30%, rgba(212,160,23,0.9) 50%, rgba(212,160,23,0.6) 70%, transparent)' }} />
      <div className="relative container-brand pt-14 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_auto] gap-10 md:gap-16 pb-10 border-b border-white/10">
          <div>
            <Link href="/" className="inline-flex items-center gap-2.5 group mb-6">
              <div className="w-[65px] h-[65px] flex-shrink-0">
                <Image src="/images/logo.png" alt="속편한 한끼 식사 로고" width={65} height={65} className="w-full h-full object-contain" style={{ filter: 'brightness(0) invert(1)' }} />
              </div>
              <div>
                <span className="font-heading text-base font-bold tracking-korean text-neutral-50 leading-none">속편한 한끼 식사</span>
                <span className="block font-body text-[10px] tracking-widest uppercase text-neutral-400 mt-0.5">자연의 맛, 정성의 향</span>
              </div>
            </Link>
            <p className="font-body text-sm text-neutral-300 leading-relaxed word-keep max-w-xs mb-6">자연에서 온 신선한 재료로 정성껏 만든 식품. 오랜 전통과 현대적 위생 기술이 만나는 곳입니다.</p>
            <a href={COMPANY.phoneIntl} className="inline-flex items-center gap-3 px-5 py-3 rounded-xl transition-all duration-200 hover:-translate-y-0.5 group" style={{ background: 'rgba(212, 160, 23, 0.12)', border: '1px solid rgba(212, 160, 23, 0.3)' }}>
              <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(212,160,23,0.2)' }}><PhoneIcon /></div>
              <div>
                <div className="font-heading text-base font-bold text-accent tracking-wide">{COMPANY.phone}</div>
                <div className="font-body text-xs text-neutral-400">평일 09:00 – 18:00</div>
              </div>
            </a>
          </div>
          {navColumns.map((col) => (
            <div key={col.heading}>
              <h3 className="font-body text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-4">{col.heading}</h3>
              <ul className="space-y-2.5">
                {col.links.map(({ href, label }) => (
                  <li key={label}><Link href={href} className="font-body text-sm text-neutral-300 hover:text-accent transition-colors duration-150">{label}</Link></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="pt-6 pb-2">
          <div className="flex flex-wrap gap-x-5 gap-y-1.5 font-body text-xs leading-relaxed" style={{ color: 'rgba(251,248,243,0.35)' }}>
            <span>상호: {COMPANY.name}</span>
            <span className="hidden sm:inline" aria-hidden>·</span>
            <span>대표자: {COMPANY.ceo}</span>
            <span className="hidden sm:inline" aria-hidden>·</span>
            <span>사업자등록번호: {COMPANY.regNo}</span>
            <span className="hidden sm:inline" aria-hidden>·</span>
            <span>주소: {COMPANY.address}</span>
            <span className="hidden sm:inline" aria-hidden>·</span>
            <a href={COMPANY.phoneIntl} className="hover:text-neutral-300 transition-colors duration-150">대표전화: {COMPANY.phone}</a>
            <span className="hidden sm:inline" aria-hidden>·</span>
            <a href={`mailto:${COMPANY.email}`} className="hover:text-neutral-300 transition-colors duration-150">이메일: {COMPANY.email}</a>
          </div>
          <div className="mt-4 font-body text-xs" style={{ color: 'rgba(251,248,243,0.2)' }}>© {new Date().getFullYear()} {COMPANY.name}. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}

function PhoneIcon() {
  return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#D4A017" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.02 2.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"/></svg>;
}
