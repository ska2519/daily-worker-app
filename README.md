# 🚀 Daily Worker App

> 모바일 웹(SEO 및 빠른 마케팅) 선출시 후 네이티브 앱(Expo & OTA 배포)으로 확장하는 **Solito 모노레포 기반 크로스 플랫폼 서비스**입니다. 
> AI 코딩 시대에 발생할 수 있는 '좀비 UI(Zombie UI)'를 방지하고 디자인 시스템 무결성을 유지하기 위한 **AI 거버넌스 엔지니어링**이 적용되어 있습니다.

---

## 🛠️ Tech Stack & Architecture

- **Monorepo:** Turborepo + pnpm workspace
- **Frontend (Web):** Next.js App Router (모바일 웹 최적화, SSR, SEO / OG Tag)
- **Frontend (Mobile):** React Native + Expo Router (iOS/Android 앱, EAS Update 기반 실시간 OTA 배포)
- **Shared Packages:** 
  - `packages/app`: 공유 비즈니스 로직 및 상태 관리
  - `packages/ui`: 공통 UI 컴포넌트 디자인 시스템 (shadcn/ui)
  - `packages/api-client`: Supabase 연동 코드 및 자동 생성된 TypeScript 타입
- **Backend & Auth:** Supabase (PostgreSQL + Supabase Auth / Google One Tap 원클릭 로그인)

---

## 💡 Engineering Highlights & Design Governance

이 프로젝트는 단순히 빠르게 코드를 작성하는 것을 넘어, **AI 시대에 엔지니어가 어떻게 시스템의 품질과 일관성을 통제해야 하는가**에 대한 고민을 담고 있습니다.

1. **AI 에이전트 거버넌스 (`CLAUDE.md`)**
   - 프로젝트 루트에 엄격한 아키텍처 규칙과 코딩 컨벤션을 정의한 `CLAUDE.md`를 배치하여, AI 에디터(Cursor/Claude)가 아키텍처 경계를 침범하지 않고 정확한 위치에 코드를 작성하도록 통제합니다.
2. **디자인 시스템 무결성 확보 (`@shadcn/lint`)**
   - 케이티 딜(Stripe 디자인 총괄)의 철학을 반영하여, AI가 임의로 Tailwind 스타일을 덮어쓰거나 영혼 없는 '좀비 UI'를 양산하는 현상을 원천 차단합니다.
   - 빌드 타임에 디자인 토큰 및 컴포넌트 Variant 준수 여부를 검사하는 린트 파이프라인을 구축하여 일관된 사용자 경험을 보장합니다.

---

## 📂 Project Structure

```text
.
├── CLAUDE.md                # AI 에디터 규칙 및 디자인 가이드 문서
├── apps/
│   ├── next/                # Next.js 웹 프로젝트 (SSR & SEO)
│   └── expo/                # React Native Expo 앱 프로젝트
└── packages/
    ├── app/                 # 공유 비즈니스 로직
    ├── ui/                  # 공통 UI 컴포넌트 (Design System)
    └── api-client/          # Supabase 타입 및 API 클라이언트