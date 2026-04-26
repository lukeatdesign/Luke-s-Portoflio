# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

**Frontend** (run from repo root):
```bash
npm run dev       # start Vite dev server (HMR, port 5173)
npm run build     # tsc type-check + Vite production build
npm run preview   # serve the production build locally
```

**Chatbot backend** (run from `chatbot-server/`):
```bash
npm run dev       # tsx watch — hot-reload server on port 3001
npm run build     # tsc compile to dist/
npm start         # run compiled dist/index.js
```

There are no test or lint scripts configured.

## Architecture

### Routing
The app uses **hash-based client-side routing** with no router library. `App.tsx` reads `window.location.hash`, parses it into a `Route` discriminated union (`home | case-study | page | chat`), and listens for `hashchange` events. Navigation helpers (`navigateToCaseStudy`, `navigateToPage`, `navigateHome`, `navigateToChat`) just set `window.location.hash`. URL patterns:
- `#/` → `HomePage`
- `#/case-studies/:slug` → `CaseStudyPage`
- `#/pages/:slug` → `SitePageView`
- `#/chat` → `ChatbotFlow` (returns early, bypasses the `app-root` wrapper)

### Case study rendering — three tiers
`CaseStudyPage` dispatches to one of three renderers based on the slug:

1. **Bespoke pages** — `celatone` → `CelatoneCaseStudyPage`, `initiascan` → `InitiaScanCaseStudyPage`. These are hand-structured components with their own section layouts, driven by data from `src/content/celatoneCaseStudy.ts` and `src/content/initiascanCaseStudy.ts`.

2. **Rich pages** — slugs present in `src/content/richCaseStudies.ts` (a `Record<string, RichCaseStudy>` keyed by slug) → `RichCaseStudyPage`. The `RichCaseStudy` type (`src/content/richCaseStudy.ts`) is the schema for this tier.

3. **Standard pages** — all other slugs fall back to a generic section layout driven solely by the `CaseStudy` type in `src/content/caseStudies.ts`.

To upgrade a case study from standard → rich, add an entry to `richCaseStudies.ts` satisfying the `RichCaseStudy` type. To make it fully bespoke, add a new page component and a slug check in `CaseStudyPage`.

### Content files
All portfolio data lives in `src/content/`:
- `caseStudies.ts` — master list + data for all 10 case studies; the order here determines the prev/next navigation sequence
- `richCaseStudy.ts` — TypeScript type definition for rich case studies
- `richCaseStudies.ts` — rich data keyed by slug
- `celatoneCaseStudy.ts` / `initiascanCaseStudy.ts` — fully custom data for bespoke pages
- `sitePages.ts` — data for the "What I Do" section pages

### TypeScript strictness
`tsconfig.app.json` enables `strict`, `noUnusedLocals`, and `noUnusedParameters`. `npm run build` will fail on any of these violations — keep imports and parameters clean.

### Chatbot module
The "Hire Luka" AI chatbot lives in two places:

**Frontend** — `src/chatbot/`
- `ChatbotFlow.tsx` — top-level state machine: `persona → questions → tone → chat`
- `PersonaStep.tsx` — 4 persona selector cards
- `QuestionStep.tsx` — AI-driven onboarding Q&A (2–6 questions via `POST /onboarding`)
- `ToneStep.tsx` — 3 tone preview cards
- `ChatInterface.tsx` — main chat UI with tone switcher
- `types.ts` — shared `Persona`, `Tone`, `FlowStep`, `Message` types
- `VITE_API_URL` env var points to backend (default `http://localhost:3001` via `.env.local`)

**Backend** — `chatbot-server/`
- Hono server with `GET /health`, `POST /onboarding`, `POST /chat`
- `src/knowledge.ts` — two exported string constants: `QA_KNOWLEDGE` (100 Q&A pairs) and `CASE_STUDIES` (full narratives for all 10 projects)
- `src/prompts.ts` — `buildChatSystemPrompt(persona, contextSummary, tone)` and `buildOnboardingSystemPrompt(persona)`
- Run with `npm run dev` (uses `tsx watch`); deploy to Railway with `ANTHROPIC_API_KEY` env var set
- Copy `chatbot-server/.env.example` → `chatbot-server/.env` and fill in your Anthropic API key

**Never expose the Anthropic API key in any `src/` file.**
