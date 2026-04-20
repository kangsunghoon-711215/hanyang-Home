'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const navLinks = [
  { href: '/',        label: '홈' },
  { href: '/about',   label: '회사소개' },
  { href: '/products', label: '제품소개' },
  { href: '/contact', label: '문의하기' },
];

const PHONE = '010-9139-4110';
const PHONE_INTL = 'tel:+82-10-9139-4110';

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? 'rgba(255, 255, 255, 0.97)' : 'rgba(255, 255, 255, 0)',
          boxShadow: scrolled ? '0 1px 0 rgba(232, 223, 208, 0.8), 0 4px 16px rgba(138, 69, 19, 0.08)' : 'none',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(12px)' : 'none',
        }}
      >
        <div className="container-brand flex items-center justify-between h-[72px]">
          <Link href="/" className="flex items-center gap-2.5 group" aria-label="홈으로 이동">
            <div className="w-[65px] h-[65px] flex-shrink-0 transition-transform duration-200 group-hover:scale-105">
              <Image src="/images/logo.png" alt="속편한 한끼 식사 로고" width={65} height={65} className="w-full h-full object-contain" />
            </div>
            <div>
              <span className="font-heading text-lg font-bold tracking-korean leading-none transition-colors duration-200" style={{ color: scrolled ? '#8B4513' : '#3A1C08' }}>속편한 한끼 식사</span>
              <span className="block font-body text-[10px] tracking-widest uppercase leading-none mt-0.5 transition-colors duration-200" style={{ color: scrolled ? '#96856E' : '#7A6A57' }}>자연의 맛, 정성의 향</span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-1" aria-label="주요 메뉴">
            {navLinks.map(({ href, label }) => (
              <Link key={href} href={href} className="relative px-4 py-2 rounded-md font-body text-sm font-medium transition-colors duration-200" style={{ color: isActive(href) ? '#8B4513' : scrolled ? '#3D3530' : '#3A1C08' }}>
                {label}
                {isActive(href) && <span className="absolute bottom-0.5 left-4 right-4 h-0.5 rounded-full" style={{ background: '#D4A017' }} />}
              </Link>
            ))}
            <a href={PHONE_INTL} className="ml-4 inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-body text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5" style={{ background: '#8B4513', color: '#FBF8F3', boxShadow: '0 2px 8px rgba(138, 69, 19, 0.25)' }}>
              <PhoneIcon />{PHONE}
            </a>
          </nav>

          <button className="md:hidden flex flex-col items-center justify-center w-11 h-11 rounded-lg gap-1.5 transition-colors duration-200" style={{ background: menuOpen ? '#FDF6F0' : 'transparent' }} onClick={() => setMenuOpen((v) => !v)} aria-label={menuOpen ? '메뉴 닫기' : '메뉴 열기'} aria-expanded={menuOpen}>
            <span className="block w-5 h-0.5 rounded-full transition-all duration-300 origin-center" style={{ background: '#3A1C08', transform: menuOpen ? 'translateY(4px) rotate(45deg)' : 'none' }} />
            <span className="block w-5 h-0.5 rounded-full transition-all duration-300" style={{ background: '#3A1C08', opacity: menuOpen ? 0 : 1, transform: menuOpen ? 'scaleX(0)' : 'none' }} />
            <span className="block w-5 h-0.5 rounded-full transition-all duration-300 origin-center" style={{ background: '#3A1C08', transform: menuOpen ? 'translateY(-4px) rotate(-45deg)' : 'none' }} />
          </button>
        </div>
      </header>

      <div className="fixed inset-0 z-40 md:hidden transition-all duration-300" style={{ opacity: menuOpen ? 1 : 0, pointerEvents: menuOpen ? 'auto' : 'none', background: 'rgba(58, 28, 8, 0.5)', backdropFilter: 'blur(4px)' }} onClick={() => setMenuOpen(false)} aria-hidden="true" />

      <div className="fixed top-0 left-0 right-0 z-40 md:hidden" style={{ transform: menuOpen ? 'translateY(0)' : 'translateY(-100%)', opacity: menuOpen ? 1 : 0, transition: 'transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.25s ease', background: '#FBF8F3', paddingTop: '72px', boxShadow: '0 16px 40px rgba(138, 69, 19, 0.15)' }}>
        <nav className="container-brand py-6 flex flex-col gap-1" aria-label="모바일 메뉴">
          {navLinks.map(({ href, label }, i) => (
            <Link key={href} href={href} className="flex items-center px-4 py-4 rounded-xl font-body text-lg font-medium transition-colors duration-150" style={{ color: isActive(href) ? '#8B4513' : '#3D3530', background: isActive(href) ? '#FDF6F0' : 'transparent', transitionDelay: menuOpen ? `${i * 40}ms` : '0ms' }}>
              {label}
              {isActive(href) && <span className="ml-auto w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: '#D4A017' }} />}
            </Link>
          ))}
          <div className="mt-4 pt-4 border-t border-neutral-200">
            <p className="font-body text-xs text-neutral-400 px-4 mb-2 uppercase tracking-widest">대표 전화</p>
            <a href={PHONE_INTL} className="flex items-center gap-3 px-4 py-4 rounded-xl transition-colors duration-150 hover:bg-primary-50">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: '#8B4513' }}><PhoneIcon color="#FBF8F3" /></div>
              <div>
                <div className="font-heading text-xl font-bold text-primary-800">{PHONE}</div>
                <div className="font-body text-xs text-neutral-400">평일 09:00 – 18:00</div>
              </div>
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}

function PhoneIcon({ color = 'currentColor' }: { color?: string }) {
  return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.02 2.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"/></svg>;
}
