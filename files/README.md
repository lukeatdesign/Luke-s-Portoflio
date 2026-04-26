# Hire Luka — Chatbot Module
## Read This Before You Do Anything

This folder contains everything you need to build the **"Hire Luka" chatbot** — an AI-powered portfolio assistant that lets recruiters, clients, interviewers, and curious visitors have a personalized conversation with Luka's portfolio.

---

## Project Context

This chatbot lives **inside Luka's portfolio site**, which is a **Vite + React + TypeScript** app. The chatbot itself will need a **separate small backend** (Express or Hono, deployable to Railway) to handle Anthropic API calls securely. The frontend stays as-is — no migration to Next.js.

**Never expose the Anthropic API key on the frontend. All API calls go through the backend only.**

---

## Folder Structure

```
/chatbot
├── README.md                  ← you are here
├── /reference
│   ├── /issa-compass          ← logic reference from previous hackathon project
│   └── /case-studies          ← (see note below)
└── /docs
    └── brief.md               ← full product spec, read this second
```

**Case studies (Notion exports) are located at:**
```
../notion_exports/
```
Read all `.md` files there as the primary source of case study content. Treat `.csv` files as index/database exports (not main narrative). Sibling image files can be referenced for visuals.

---

## What To Read First

1. `README.md` — this file
2. `docs/brief.md` — the full spec with all logic, flow, and architecture decisions
3. `/reference/issa-compass` — understand the onboarding and dynamic prompt construction pattern, you will replicate and adapt this
4. `../notion_exports/` — extract and understand Luka's case studies and portfolio content

---

## Your First Task

Before writing any code, do the following:

1. **Read `docs/brief.md` completely**
2. **Read the Issa Compass reference files** — understand how persona-based onboarding, dynamic question generation, and system prompt construction worked
3. **Read all `.md` files in `../notion_exports/`** — extract key facts, projects, skills, and career narrative
4. **Generate a `knowledge-base-draft.md`** in `/docs/` with 100+ Q&A pairs about Luka, organized by category. Mark any gaps you cannot fill from the source material with `[NEEDS LUKA INPUT]`
5. **Then propose your implementation plan** before writing any code — outline the component structure, backend routes, and prompt architecture

Do not start coding until step 5 is complete and confirmed.

---

## Key Constraints

- Frontend: Vite + React + TypeScript — do not change the build setup
- Backend: Small Express or Hono server, deployable to Railway
- AI: Anthropic API (Claude), same pattern as Issa Compass
- Tone system: Three modes (Professional / Casual / ติงต๊อง) — swappable mid-chat without losing context
- Onboarding: Dynamic, conversational, AI-driven — not a static form
- Knowledge base: Grounded in real content from notion_exports — no hallucinated facts about Luka
