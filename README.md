# 속편한 한끼 식사 — 회사 웹사이트

한양 식품 회사 공식 웹사이트. Next.js 14 App Router + TypeScript + Tailwind CSS.

---

## 개발 환경 시작

```bash
# 1. 의존성 설치
npm install

# 2. 환경 변수 설정
cp .env.example .env.local
# .env.local 을 열어서 실제 도메인 값 입력

# 3. 개발 서버 실행 (기본 포트 3000, 사용 중이면 자동으로 다음 포트 사용)
npm run dev
```

브라우저에서 `http://localhost:3000` 접속

---

## 빌드 및 프로덕션 테스트

```bash
npm run build    # 프로덕션 빌드 (TypeScript 검사 포함)
npm run start    # 빌드 결과물을 로컬에서 서빙
npm run lint     # ESLint 검사
```

---

## Vercel 배포

1. [vercel.com](https://vercel.com) 에서 이 저장소를 Import
2. **Settings → Environment Variables** 에서 아래 변수 추가:
   - `NEXT_PUBLIC_SITE_URL` — 운영 도메인 (예: `https://www.example.com`, 후행 슬래시 없이)
   - `NEXT_PUBLIC_GA_ID` — Google Analytics 4 ID (선택, 예: `G-XXXXXXXXXX`)
3. **Deploy** 클릭

> `vercel.json` 에 보안 헤더(X-Content-Type-Options, X-Frame-Options, X-XSS-Protection 등)와  
> 정적 에셋 캐시 정책이 이미 설정되어 있습니다. 별도 설정 불필요.

---

## 환경 변수 가이드

| 변수 | 필수 여부 | 설명 |
|------|----------|------|
| `NEXT_PUBLIC_SITE_URL` | **필수** | 사이트맵, robots.txt, OG 태그의 canonical URL 기준. 프로덕션 도메인으로 설정 |
| `NEXT_PUBLIC_GA_ID` | 선택 | Google Analytics 4 Measurement ID. 없으면 GA 스크립트가 삽입되지 않음 |

`.env.example` 파일을 참고해 `.env.local` 을 작성하세요.

---

## 제품 추가 방법

`content/products.json` 파일을 편집합니다.

```json
[
  {
    "id": "product-001",          // URL slug — 영문 소문자, 하이픈 허용
    "name": "보리떡",
    "category": "주력 제품",
    "description": "제품 설명...",
    "specs": [
      { "label": "중량", "value": "155g" },
      { "label": "원재료", "value": "보리, 밀..." },
      { "label": "보관방법", "value": "냉동 보관 (-18°C 이하)" },
      { "label": "유통기한", "value": "제조일로부터 12개월" },
      { "label": "알레르기", "value": "[밀], [우유] 함유" }
    ],
    "images": [
      "/images/products/product-001-main.jpg",
      "/images/products/product-001-1.jpg"
    ],
    "badge": "프리미엄",          // 카드 배지 텍스트 (없으면 필드 삭제)
    "features": [
      "100% 엄선 원재료",
      "HACCP 인증 시설 생산"
    ]
  },
  {
    "id": "product-002",          // 신제품 추가 시 여기에 객체 추가
    ...
  }
]
```

이미지는 `public/images/products/` 폴더에 저장합니다.  
새 제품을 추가하면 `/products/[id]` 페이지가 자동으로 생성됩니다 (Static Generation).

---

## 텍스트 콘텐츠 업데이트

| 수정 항목 | 파일 위치 |
|----------|----------|
| 회사 연혁 | `components/sections/about/CompanyHistory.tsx` — `milestones` 배열 |
| 히어로 헤드라인/서브헤드 | `components/sections/home/HeroSection.tsx` |
| 브랜드 스토리 섹션 | `components/sections/home/BrandStorySection.tsx` — `pillars` 배열 |
| 시설 사진 캡션 | `components/sections/about/FacilitySection.tsx` — `facilityImages` 배열 |
| 품질 인증 내용 | `components/sections/about/CertificationsSection.tsx` — `qualityPoints` 배열 |
| 전화번호 | `components/layout/Header.tsx` (`PHONE`/`PHONE_INTL`), `components/layout/Footer.tsx` (`COMPANY`) |
| 주소/이메일 | `components/layout/Footer.tsx` (`COMPANY`), `app/contact/page.tsx` |

---

## 프로젝트 구조

```
app/
  layout.tsx              루트 레이아웃 (폰트, 메타데이터, GA4, Header+Footer)
  page.tsx                홈페이지
  about/page.tsx          회사소개
  products/page.tsx       제품 목록
  products/[id]/page.tsx  제품 상세 (products.json에서 자동 생성)
  contact/page.tsx        문의하기
  sitemap.ts              /sitemap.xml 자동 생성
  robots.ts               /robots.txt 자동 생성

components/layout/
  Header.tsx              스크롤 반응 스티키 네비, 모바일 햄버거 메뉴
  Footer.tsx              회사 법인 정보 포함 푸터

components/sections/
  home/                   홈페이지 섹션 컴포넌트
  about/                  회사소개 섹션 컴포넌트
  products/               제품 섹션 컴포넌트

content/
  products.json           제품 CMS 데이터
  company.json            회사 정보 (현재 미사용, 향후 확장용)

lib/brand.ts              디자인 토큰 (색상, 폰트 등)
public/images/            정적 이미지 에셋
```

---

## 런치 전 체크리스트

자세한 항목은 **`CONTENT_CHECKLIST.md`** 를 참조하세요.

주요 필수 항목:
- [ ] `.env.local` 에 `NEXT_PUBLIC_SITE_URL` 설정
- [ ] 히어로 배경 이미지 교체 (`/public/images/hero-placeholder.jpg`)
- [ ] OG 이미지 확인 (`/public/og-image.jpg`, 1200×630px)
- [ ] 카카오 지도 embed 동작 확인
- [ ] 전체 텍스트 최종 검수

---

## 회사 정보

| 항목 | 값 |
|------|-----|
| 상호 | 한양 |
| 대표자 | 김계숙 |
| 사업자등록번호 | 553-02-00304 |
| 주소 | 부천시 원미구 도당동 100-7 동양테크노 203호 |
| 대표전화 | 010-9139-4110 |
| 이메일 | aux97@naver.com |
