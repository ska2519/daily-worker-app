# Daily Worker App - 프로젝트 가이드 (CLAUDE.md)

## 1. 개요 및 디자인 철학 (Katie Dill 지침)
- *구조:* Solito (Next.js + Expo) Turborepo Monorepo
- *목표:* 모바일 웹(Next.js) 선출시 (SEO 및 빠른 마케팅 검증) 후 모바일 앱(Expo) 확장
- *디자인 철학:*
  - 영혼 없는 '좀비 UI(Zombie UI)' 생성 금지. 브랜드 고유의 톤앤매너와 사용자 맥락을 우선시할 것.
  - 무분별한 Tailwind 스타일 임의 덮어쓰기(Override) 및 커스텀 인라인 색상/간격 남발 금지.
  - 정의된 디자인 토큰 및 컴포넌트 Variant를 엄격히 준수할 것.

## 2. 모노레포 폴더 구조 및 역할
- apps/next/ : [웹] Next.js App Router (모바일 웹, SSR, SEO, OG Tag 최적화)
- apps/expo/ : [앱] React Native + Expo Router (모바일 앱, EAS Update를 통한 OTA 배포)
- packages/app/ : [공유] 화면 흐름, 상태 관리, 핵심 비즈니스 로직
- packages/ui/ : [공유] 공통 UI 컴포넌트 (shadcn/ui 기반 디자인 시스템)
- packages/api-client/ : [공유] Supabase 연동 코드 및 DB 자동 생성 TypeScript 타입

## 3. 백엔드 & 인증 (Supabase)
- *인증(Auth):* Supabase Auth 전용 (이메일 및 Google One Tap 원클릭 로그인 구현)
- *데이터베이스:* PostgreSQL (Supabase)
- *타입 정합성:* DB 스키마가 변경되면 반드시 packages/api-client 내의 TypeScript 타입을 즉시 재생성하여 공유할 것.

## 4. 코딩, 명령어 및 디자인 린트 규칙
- *의존성 설치:* 반드시 최상위 루트에서 `pnpm --filter [패키지명] add [패키지]` 사용
- *빌드 및 타입 검증:*
  - `pnpm turbo run build` 실행하여 모노레포 전체 빌드 검증
  - `pnpm typecheck` 실행하여 웹/앱 간 타입 정합성 체크
- *디자인 린트 (`@shadcn/lint`):*
  - 모든 UI 수정 후 빌드 전 `pnpm lint:design` (또는 `shadcn lint`)을 수행하여 디자인 시스템 위반 여부 검사
  - AI는 린트 에러 메시지가 제시하는 올바른 토큰 및 variant 대안을 반영하여 코드를 수정할 것

## 5. 야간 자율 에이전트 거버넌스 (Autonomous Agent Rules)
- *이슈 기반 제한:* 야간 백그라운드 에이전트는 지정된 GitHub Issue 내용 및 요구사항 범위 내에서만 코드를 수정할 것.
- *모노레포 경계 준수:* 이슈와 무관한 다른 앱이나 패키지(`apps/` 및 `packages/`) 영역을 임의로 침범하거나 수정하지 말 것.
- *자가 수정 및 검증 루프:* 코드 수정 완료 후, PR 생성 전 반드시 아래 검증 명령어를 자체 수행하고 오류 발생 시 스스로 수정할 것:
  1. `pnpm turbo run build`
  2. `pnpm typecheck`
  3. `pnpm lint:design`
- *커밋 및 PR 규칙:* 모든 작업은 별도의 전용 브랜치(`agent/issue-[번호]`)에서 수행하고, 검증이 모두 통과된 상태에서만 Pull Request를 오픈할 것.
