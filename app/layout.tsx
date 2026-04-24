import type { Metadata } from 'next';
import Script from 'next/script';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import './globals.css';

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export const metadata: Metadata = {
  metadataBase: new URL('https://hanyang-home.vercel.app'),
  title: {
    default: '속편한 한끼 식사 | 자연의 맛, 정성의 향',
    template: '%s | 속편한 한끼 식사',
  },
  description:
    '엄선된 원재료로 정성껏 만든 식품. HACCP 인증 생산 시설에서 안전하고 맛있는 제품을 제공합니다.',
  keywords: ['식품', '제조', 'HACCP', '천연재료', '식품회사'],
  authors: [{ name: '속편한 한끼 식사' }],
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    siteName: '속편한 한끼 식사',
    title: '속편한 한끼 식사 | 자연의 맛, 정성의 향',
    description:
      '엄선된 원재료로 정성껏 만든 식품. HACCP 인증 생산 시설에서 안전하고 맛있는 제품을 제공합니다.',
  },
  twitter: {
    card: 'summary_large_image',
    title: '속편한 한끼 식사 | 자연의 맛, 정성의 향',
    description: '엄선된 원재료로 정성껏 만든 식품.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Noto+Serif+KR:wght@300;400;500;600;700&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500;1,600&display=swap"
        />
        <link rel="preconnect" href="https://cdn.jsdelivr.net" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
        <style dangerouslySetInnerHTML={{ __html: `:root { --font-noto-serif-kr: 'Noto Serif KR'; --font-cormorant: 'Cormorant Garamond'; }` }} />
      </head>
      <body className="antialiased flex flex-col min-h-screen">
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="gtag-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}', { page_path: window.location.pathname });
              `}
            </Script>
          </>
        )}
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
