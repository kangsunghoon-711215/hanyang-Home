# 작업 진행 현황

마지막 업데이트: 2026-08-25

## 재개 방법

```bash
npm run dev
```
브라우저에서 `http://localhost:3000/products/product-001/purchase` 확인 (제품 상세 → "보리떡 구매하기" 버튼으로도 진입 가능).

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

1. **판매가 입력** — `content/products.json`의 `product-001.price`가 아직 `null`. 실제 가격 확정되면 숫자로 채우기.
2. **온라인 결제 연동** — `PurchaseActions.tsx`의 "구매하기" 버튼에 실제 결제 게이트웨이/스마트스토어 링크 연결.
3. **콘텐츠 최종 교체** — 자세한 항목은 `CONTENT_CHECKLIST.md` 참조. 특히:
   - 히어로 헤드라인/서브헤드, 회사소개 문구, 연혁 내용 (⬜ 최종 확인 필요)
   - 제품 설명 문구 (`content/products.json`)
4. **이미지 교체** — 히어로 배경(`hero-placeholder.jpg`), OG 이미지(1200×630px 필수)
5. **카카오 지도 임베딩 동작 확인** — iframe 제한 가능성 있음, 안 되면 API 키 발급 또는 네이버 지도 Static Image API로 대체
6. **런치 전 환경변수 설정** — `.env.local`에 `NEXT_PUBLIC_SITE_URL` (필수), `NEXT_PUBLIC_GA_ID` (선택)
7. **법적 페이지 검토** (후순위) — 개인정보처리방침, 이용약관, Footer 법적 고지 문구

## 참고
- 콘텐츠 교체 상세 체크리스트: `CONTENT_CHECKLIST.md`
- 개발/배포 가이드: `README.md`
- 이 프로젝트는 git 저장소가 아님 (커밋 이력 없음) — 변경 이력은 파일 수정 시각 기준으로만 추적됨.
