# 🚀 Daily Worker App (현장노트)

> 모바일 웹(SEO 및 빠른 마케팅) 선출시 후 네이티브 앱(Expo & OTA 배포)으로 확장하는 **Solito 모노레포 기반 크로스 플랫폼 서비스**입니다. 
> 실시간 단가/인센티브 속보, 100% 익명 현장 커뮤니티뿐만 아니라 **현장 채용공고 등록 및 구인구직 매칭 기능**을 제공합니다.
> AI 코딩 시대에 발생할 수 있는 '좀비 UI(Zombie UI)'를 방지하고 디자인 시스템 무결성을 유지하기 위한 **AI 거버넌스 엔지니어링**이 적용되어 있습니다.

---

## 🛠️ Tech Stack & Architecture

- **Monorepo:** Turborepo + pnpm workspace
- **Frontend (Web):** Next.js App Router (모바일 웹 최적화, SSR, SEO / OG Tag)
- **Frontend (Mobile):** React Native + Expo Router (iOS/Android 앱, EAS Update 기반 실시간 OTA 배포)
- **Shared Packages:** 
  - `packages/app`: 공유 비즈니스 로직 및 상태 관리
  - `packages/ui`: 공통 UI 컴포넌트 디자인 시스템 (Tailwind v4 `@theme` 딥 네이비 & 앰버 적용)
  - `packages/api-client`: Supabase 연동 코드 및 자동 생성된 TypeScript 타입
- **Backend & Auth:** 
  - Supabase PostgreSQL (유연한 확장형 데이터 스키마: 속보, 커뮤니티, 출석체크, 채용공고)
  - Supabase Auth (익명 커뮤니티를 위한 익명 로그인 및 채용/관리용 소셜 로그인 하이브리드 구조)

---

## 💡 Engineering Highlights & Design Governance

이 프로젝트는 단순히 빠르게 코드를 작성하는 것을 넘어, **AI 시대에 엔지니어가 어떻게 시스템의 품질과 일관성을 통제해야 하는가**에 대한 고민을 담고 있습니다.

1. **AI 에이전트 거버넌스 (`CLAUDE.md`)**
   - 프로젝트 루트에 엄격한 아키텍처 규칙과 코딩 컨벤션을 정의한 `CLAUDE.md`를 배치하여, AI 에디터(Cursor/Claude)가 아키텍처 경계를 침범하지 않고 정확한 위치에 코드를 작성하도록 통제합니다.
2. **디자인 시스템 무결성 확보 (`globals.css` & Tailwind v4)**
   - 딥 네이비(`slate-900`)와 앰버(`amber-400`/`500`) 컬러 시스템을 전역 테마로 등록하여 일관된 브랜드 경험을 제공합니다.
   - 모바일 화면에서는 앱처럼 꽉 차고, PC 웹 대시보드에서는 2단 그리드로 시원하게 확장되는 반응형 레이아웃을 준수합니다.

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

> 효율적이고 확장 가능한 서비스를 구축하기 위한 고성능 소프트웨어 솔루션입니다.
