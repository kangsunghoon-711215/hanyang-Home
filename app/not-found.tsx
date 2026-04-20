import Link from 'next/link';

export default function NotFound() {
  return (
    <div
      className="flex-1 flex flex-col items-center justify-center px-4 text-center"
      style={{ minHeight: '70vh', background: '#FBF8F3' }}
    >
      <span
        className="font-accent font-light italic select-none"
        style={{ fontSize: 'clamp(6rem, 20vw, 10rem)', color: '#F0CEAD', lineHeight: 1 }}
        aria-hidden="true"
      >
        404
      </span>
      <h1
        className="font-heading font-bold text-neutral-900 word-keep mt-2 mb-3"
        style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)' }}
      >
        페이지를 찾을 수 없습니다
      </h1>
      <p className="font-body text-neutral-500 word-keep leading-korean mb-8 max-w-sm">
        요청하신 페이지가 존재하지 않거나 이동되었습니다.<br />
        아래 버튼을 눌러 홈으로 돌아가세요.
      </p>
      <div className="flex flex-col sm:flex-row gap-3">
        <Link href="/" className="btn-primary">홈으로 돌아가기</Link>
        <Link href="/products" className="btn-secondary">제품 보기</Link>
      </div>
      <div
        className="mt-16 w-24 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, #D4A017, transparent)' }}
      />
    </div>
  );
}
