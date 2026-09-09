# 작업 진행 현황

마지막 업데이트: 2026-09-09

## 재개 방법

```bash
npm run dev
```
브라우저에서 `http://localhost:3000/products/product-001/purchase` 확인 (제품 상세 → "보리떡 구매하기" 버튼으로도 진입 가능).

## 최근 완료 (2026-09-09)

**구매하기 페이지 — 가격 확정 및 결제 연동**
- `content/products.json` — `price`를 `null`에서 `18990`으로 확정, `listPrice: 19800` 추가 (네이버 스토어 판매가/특별 할인가 2단 표시).
- `PurchaseActions.tsx` — 수량 스테퍼와 합계 섹션 제거, 가격 → 구매 버튼으로 바로 연결되는 구조로 단순화.
- `app/products/[id]/purchase/page.tsx` — 좌/우 2컬럼 레이아웃으로 재구성: 왼쪽에 이미지 갤러리+상세정보+규격표를 모두 배치하고, 오른쪽 상품명/가격/구매 버튼 영역을 `position: sticky`로 고정. 데스크톱(1024px 이상)에서 상세정보를 스크롤해도 구매 버튼이 항상 화면에 보임. 모바일은 기존처럼 세로 스택.
  - 이 과정에서 인라인 `<style>{...}</style>`에 CSS 문자열을 JSX 텍스트로 넣으면 React가 따옴표를 이스케이프해 `grid-template-areas`가 깨지고 하이드레이션 에러가 나는 버그를 발견 → `dangerouslySetInnerHTML`로 수정.
- `purchaseLink: "https://www.payn.co.kr/link/LNK-d5e5801f024f"`를 `products.json`에 추가하고 "보리떡 구매하기" 버튼을 `<a target="_blank">`로 교체 — 온라인 결제(페이나) 연동 완료. 버튼 하단 안내 문구도 "결제 페이지가 새 창에서 열립니다"로 갱신.
- 데스크톱(1536px)·모바일(390px, iframe 뷰포트로 검증) 양쪽에서 레이아웃과 콘솔 에러 없음을 확인.
- **모바일 추가 수정**: 모바일은 1컬럼으로 쌓이는 구조라 데스크톱과 같은 sticky 컬럼을 쓸 수 없어, 상세정보를 스크롤하면 구매 버튼이 화면 밖으로 사라지는 문제가 있었음(실기기 확인 후 발견). `PurchaseActions.tsx`에 `lg:hidden` 하단 고정 바(상품명/가격/구매하기 버튼, `position: fixed; bottom:0`)를 추가해 모바일에서도 항상 버튼이 보이도록 수정. 규격표 마지막 줄이 고정 바에 가려지지 않도록 페이지 하단에 모바일 전용 spacer(`h-20 lg:hidden`) 추가.

## 최근 완료 (2026-08-25)

**제품 상세 → 구매하기 페이지 신규 구축**
- `app/products/[id]/page.tsx` — 좌측 이미지 갤러리 하단에 "{제품명} 구매하기" 버튼(`btn-accent`) 추가, `/products/[id]/purchase`로 연결.
- `app/products/[id]/purchase/page.tsx` 신규 생성 — 네이버 스마트스토어류 상세페이지 프레임 참고:
  - 상단: 이미지 갤러리 + 상품명/배지 + `PurchaseActions`(가격/수량/합계/구매하기 버튼)
  - 하단 "상세정보": 클라이언트가 제공한 상세 이미지 24장을 순서대로 전체 폭 스택 + 제품 규격 테이블
- `components/sections/products/PurchaseActions.tsx` 신규 (클라이언트 컴포넌트) — 수량 스테퍼, 합계, 구매하기 버튼. **온라인 결제 미연동 상태** — 버튼은 지금은 동작 없는 placeholder이고, 나중에 결제 게이트웨이 URL만 연결하면 됨. 그 전까지는 버튼 아래 전화문의 링크로 임시 대응.
- `content/products.json` — `price`(현재 `null` → "가격 문의" 표시), `detailImages`(24개 경로 배열) 필드 추가.
- 상세 이미지에 포함된 GIF 3개(원본 총 ~23MB)를 ffmpeg로 mp4(H.264)로 압축 (04p: 6.0MB→0.5MB, 11p: 6.0MB→0.3MB, 19p: 11MB→1.1MB — 약 92% 절감). 페이지에서 `.mp4` 항목은 자동으로 `<video autoPlay loop muted playsInline>`로 렌더링됨. 원본 gif 파일은 `public/images/products/detail/product-001/`에 그대로 남아있음 (더 이상 참조되지 않음 — 필요 없으면 나중에 직접 삭제해도 됨).

## 다음에 할 일 (우선순위 순)

1. **콘텐츠 최종 교체** — 자세한 항목은 `CONTENT_CHECKLIST.md` 참조. 특히:
   - 히어로 헤드라인/서브헤드, 회사소개 문구, 연혁 내용 (⬜ 최종 확인 필요)
   - 제품 설명 문구 (`content/products.json`)
2. **이미지 교체** — 히어로 배경(`hero-placeholder.jpg`), OG 이미지(1200×630px 필수)
3. **카카오 지도 임베딩 동작 확인** — iframe 제한 가능성 있음, 안 되면 API 키 발급 또는 네이버 지도 Static Image API로 대체
4. **런치 전 환경변수 설정** — `.env.local`에 `NEXT_PUBLIC_SITE_URL` (필수), `NEXT_PUBLIC_GA_ID` (선택)
5. **법적 페이지 검토** (후순위) — 개인정보처리방침, 이용약관, Footer 법적 고지 문구

## 참고
- 콘텐츠 교체 상세 체크리스트: `CONTENT_CHECKLIST.md`
- 개발/배포 가이드: `README.md`
- 이 프로젝트는 git 저장소가 아님 (커밋 이력 없음) — 변경 이력은 파일 수정 시각 기준으로만 추적됨.
