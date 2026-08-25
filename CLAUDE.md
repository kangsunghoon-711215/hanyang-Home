# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server (auto-switches port if 3000 is in use — check terminal for actual port)
npm run build    # Production build (also runs TypeScript checks)
npm run lint     # ESLint via next lint
npm run start    # Serve production build
```

## Architecture

**Next.js 14 App Router** with TypeScript + Tailwind CSS. Korean food manufacturing company website.

### Directory structure

```
app/
  layout.tsx          # Root layout: fonts, metadata, GA4, Header+Footer shell
  page.tsx            # Homepage (currently "coming soon" placeholder)
  globals.css         # Brand CSS custom properties + @layer base/components/utilities
  brand-preview/      # Visual style guide page for client approval

components/layout/
  Header.tsx          # 'use client' — scroll-aware sticky nav, mobile hamburger
  Footer.tsx          # Dark gradient footer with Korean legal info

lib/
  brand.ts            # Single source of truth for all design tokens (JS/TS)

content/
  company.json        # Company info, history, values, certifications
  products.json       # Product CMS structure
```

### Brand / Design System

The brand system has **three layers** that must stay in sync:

1. **`lib/brand.ts`** — TypeScript constants (use in logic/dynamic styles)
2. **`tailwind.config.ts`** — Tailwind extensions (use via className)
3. **`app/globals.css`** — CSS custom properties (use via `var(--color-*)`)

**Brand palette:**
- Primary: `#8B4513` (saddle brown — trust, tradition)
- Secondary: `#5C7A3E` (forest green — freshness, nature)
- Accent: `#D4A017` (gold — premium, warmth)
- Background: `#FBF8F3` (warm off-white)

All shadows use warm brown tints: `rgba(138, 69, 19, ...)`.

### Typography

Three font families loaded in `app/layout.tsx` via `next/font/google`:
- **Heading** (`font-heading`): Noto Serif KR → CSS var `--font-noto-serif-kr`
- **Accent** (`font-accent`): Cormorant Garamond → CSS var `--font-cormorant`
- **Body** (`font-body`): Pretendard — loaded via `<link>` in `<head>` (not on Google Fonts)

Korean text: always use `word-break: keep-all` (class `.word-keep`) and generous line-height (`leading-korean` = 1.9).

### Key CSS classes

Defined in `globals.css` `@layer components`:
- `.container-brand` — centered container, max-width 1280px
- `.section-padding` — `py-16 md:py-24 lg:py-32`
- `.btn-primary`, `.btn-secondary`, `.btn-accent` — brand button variants
- `.card-brand` — white card with brand shadow
- `.tag-brand` — pill badge in primary palette

### Important constraints

**`@apply` with custom shadow tokens + state variants crashes the build.** For example, `@apply hover:shadow-brand-md` will fail. Mix `@apply` for standard Tailwind utilities and use inline CSS (`box-shadow: var(--shadow-md)`) with explicit `:hover {}` blocks for custom shadow tokens.

### Pages to build (not yet started)

Per the original PRD, these routes need full pages:
- `/about` — 회사소개 (company history, values, certifications)
- `/products` — 제품소개 (product grid from `content/products.json`)
- `/contact` — 문의하기 (contact form)

The Header nav already links to these routes; they just return 404 currently.

### Placeholder data

`content/company.json` and `content/products.json` hold placeholder data. Replace with real content before launch. Placeholder company info (phone, address, registration number) is also hardcoded in `components/layout/Header.tsx` (`PHONE` constant) and `components/layout/Footer.tsx` (`COMPANY` object).
