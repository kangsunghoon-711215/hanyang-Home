# 콘텐츠 입력 체크리스트

런치 전 클라이언트가 확인/교체해야 할 항목 목록입니다.  
✅ = 실제 데이터 입력 완료 | ⬜ = 교체/확인 필요

---

## 필수 교체 항목

### 회사 기본 정보

| 항목 | 현재 값 | 위치 | 상태 |
|------|---------|------|------|
| 회사 상호 | 한양 | Footer.tsx | ✅ |
| 대표자명 | 김계숙 | Footer.tsx | ✅ |
| 사업자등록번호 | 553-02-00304 | Footer.tsx | ✅ |
| 대표 전화번호 | 010-9139-4110 | Header, Footer, Contact, CTA | ✅ |
| 이메일 주소 | aux97@naver.com | Footer.tsx, contact/page.tsx | ✅ |
| 회사 주소 | 부천시 원미구 도당동 100-7 동양테크노 203호 | Footer.tsx, contact/page.tsx | ✅ |
| 브랜드명 | 속편한 한끼 식사 | 전체 | ✅ |
| 브랜드 슬로건 | 자연의 맛, 정성의 향 | Header, Footer, Hero | ⬜ 최종 확인 필요 |

### 텍스트 콘텐츠

| 항목 | 현재 값 | 위치 | 상태 |
|------|---------|------|------|
| 히어로 헤드라인 | 자연의 맛을 그대로, 식탁 위의 정직함 | HeroSection.tsx | ⬜ 최종 확인 필요 |
| 히어로 서브헤드 | 엄선된 깨끗한 원재료와 HACCP... | HeroSection.tsx | ⬜ 최종 확인 필요 |
| 회사 소개 문구 | 오랜 전통과 현대적 기술이 만나는 곳... | AboutHero.tsx | ⬜ 최종 확인 필요 |
| 연혁 내용 | 2016~2026 (6개 항목) | CompanyHistory.tsx | ⬜ 실제 연혁으로 교체 |
| 운영 시간 | 평일 09:00 – 18:00 | Header, Footer, Contact, CTA | ⬜ 최종 확인 필요 |

### 제품 정보

| 항목 | 현재 값 | 위치 | 상태 |
|------|---------|------|------|
| 제품명 | 보리떡 | content/products.json | ✅ |
| 제품 설명 | "오랜 전통과 최신 위생 설비..." | content/products.json | ⬜ 최종 확인 필요 |
| 제품 규격 (중량, 원재료 등) | 155g 등 | content/products.json | ✅ |
| 알레르기 정보 | [밀], [우유] 함유 | content/products.json | ✅ |
| 판매가 (price) | null (미입력 → "가격 문의" 표시) | content/products.json | ⬜ 실제 가격 입력 필요 |

---

## 이미지 교체 항목

| 항목 | 현재 파일 | 권장 크기 | 상태 |
|------|----------|-----------|------|
| 히어로 배경 이미지 | /public/images/hero-placeholder.jpg | 1920×1080px 이상 | ⬜ 실제 이미지로 교체 필요 |
| 제품 메인 이미지 | /public/images/products/product-001-main.jpg | 800×600px | ✅ |
| 제품 갤러리 1 | /public/images/products/product-001-1.jpg | 800×600px | ✅ |
| 제품 갤러리 2 | /public/images/products/product-001-2.jpg | 800×600px | ✅ |
| 생산 시설 전경 | /public/images/facility/facility-main.png | 1600×700px | ✅ |
| 위생 관리 구역 | /public/images/facility/facility-hygiene.png | 800×600px | ✅ |
| 냉동 보관 시설 | /public/images/facility/facility-storage.png | 800×600px | ✅ |
| OG 이미지 (SNS 공유용) | /public/og-image.jpg | **1200×630px 필수** | ⬜ 확인 필요 |
| 파비콘 | /public/favicon.png | 512×512px | ✅ |
| 로고 | /public/images/logo.png | — | ✅ |
| 약도 이미지 | /public/images/map-directions.jpg | — | ✅ |

---

## 지도 / 외부 서비스

| 항목 | 현재 설정 | 위치 | 상태 |
|------|----------|------|------|
| 카카오 지도 embed URL | 도당동 100-7 좌표 | contact/page.tsx (MAP_EMBED_URL) | ⬜ 실제 embed 동작 확인 필요 |
| 카카오 지도 링크 | MAP_URL | contact/page.tsx | ✅ |

> **주의**: 카카오 지도는 iframe 임베딩을 제한할 수 있습니다. 지도가 표시되지 않으면  
> 카카오 지도 API 키를 발급받거나 네이버 지도 Static Image API로 교체를 권장합니다.

---

## SEO / 운영 설정

| 항목 | 설정 위치 | 상태 |
|------|----------|------|
| `NEXT_PUBLIC_SITE_URL` | .env.local | ⬜ **런치 전 반드시 설정** |
| `NEXT_PUBLIC_GA_ID` | .env.local | ⬜ GA4 생성 후 설정 (선택) |
| JSON-LD sameAs (SNS URL) | app/page.tsx | ⬜ SNS 계정 있으면 추가 |

---

## 법적 고지 (추후 검토)

| 항목 | 상태 |
|------|------|
| 개인정보처리방침 페이지 | ⬜ 전자상거래 운영 시 필수 (PIPA) |
| 이용약관 페이지 | ⬜ 권장 |
| Footer 법적 고지 문구 | ⬜ 법률 검토 후 확정 권장 |
