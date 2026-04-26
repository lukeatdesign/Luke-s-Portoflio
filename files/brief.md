# Hire Luka — Product Brief
## Full Spec for Claude Code

---

## What We're Building

An AI-powered portfolio chatbot that lets visitors have a **personalized, context-aware conversation** with Luka's portfolio. Instead of (or alongside) a traditional portfolio, visitors can ask questions, explore Luka's work, and get relevant answers — all through a chat interface that feels like talking to Luka himself.

---

## Where It Lives

The chatbot is one of **two entry points** on the portfolio landing page:

```
Landing Page
├── [ Chat with Luka ]     → chatbot experience
└── [ See the Work ]       → traditional portfolio view
```

Both live on the same Vite + React + TypeScript site. The user picks their preferred experience on arrival.

---

## Architecture

### Frontend
- **Vite + React + TypeScript** — existing portfolio stack, do not change
- Chatbot UI is a new route/component within the existing app
- Communicates with the backend via REST API calls

### Backend
- **Small Express or Hono server** — new, separate from the frontend
- Handles all Anthropic API calls (API key never touches the frontend)
- Deployable to Railway
- Routes needed (minimum):
  - `POST /chat` — sends message + context, returns AI response
  - `POST /onboarding` — handles dynamic question generation during onboarding phase
  - `GET /health` — basic health check

### AI
- Anthropic API (Claude), same pattern as Issa Compass hackathon
- System prompt is **constructed dynamically** from:
  - The knowledge base (Luka's Q&A facts)
  - Visitor's persona (from onboarding)
  - Visitor's context answers (from dynamic Q&A phase)
  - Active tone mode

---

## Onboarding Flow

### Step 1 — Persona Selection (Button UI)
Hard buttons, not free text. Fast and clear.

```
"Hey! Before we dive in — who are you?"

[ 🏢 Recruiter ]          [ 🎨 Designer / Interviewer ]
[ 💼 Client ]             [ 👀 Just Curious ]
```

Each persona sets a different **context track** for everything that follows.

---

### Step 2 — Dynamic Context Gathering (Free Text, AI-Interpreted)

This is NOT a static form. The AI asks **one question at a time**, interprets free-text answers, and keeps asking until it has reached a **confidence threshold** — meaning it has enough context to be genuinely useful.

**Max questions in this phase: 6**
**Min questions: 2**

The AI should ask until it knows enough, not until it hits a number.

#### Context Goals Per Persona

| Persona | Bot needs to understand... |
|---|---|
| **Recruiter** | Role type (UX/UI/Research/Product), seniority level expected, team/company context, what they care about most in a candidate |
| **Designer / Interviewer** | What stage of hiring process (screening / portfolio review / cultural fit), what they're specifically evaluating, what gaps they're checking for |
| **Client** | Project type, rough timeline, core problem they're trying to solve, whether they need research / design / both |
| **Just Curious** | What sparked interest, what they want to explore, whether they're a designer themselves |

#### Technical Implementation Note
The onboarding question generation should be handled by the AI itself — pass the persona + conversation history to the backend, and let the model decide what to ask next and when it has enough context. Do not hardcode the questions. This is the same spirit as the Issa Compass dynamic question approach.

---

### Step 3 — Tone Selection (Always Happens)

Presented after enough context is gathered. Show a brief personality preview so the visitor knows what they're choosing.

```
"Last thing — how should I talk to you?"

[ 👔 Professional Luke ]
  "I specialize in end-to-end UX research and design, with experience
   leading enterprise-level research engagements."

[ 😊 Casual Luka ]
  "I do UX research and design — been doing it about 8 years,
   worked on some pretty interesting stuff along the way."

[ 🐱 ติงต๊อง Luka ]
  "omg hi!! yes I do UX stuff and I've been doing it for like
   8 years and honestly it's been a journey (◍•ᴗ•◍)"
```

---

## The Three Tone Modes

Tone is implemented as a **swappable dynamic layer** in the system prompt. Switching tone mid-chat does NOT reset the conversation context — history is preserved, only the personality instruction changes.

### System Prompt Architecture

```
[STATIC LAYER]
- Who Luka is (facts, background, career story)
- The knowledge base (Q&A pairs)
- What the bot can and cannot say
- Persona + context summary from onboarding

[DYNAMIC LAYER — swappable]
- Current tone instruction
```

### Tone Definitions

**Professional Luke**
- Clean, confident, portfolio-speak
- Leads with outcomes and impact
- References methodologies correctly
- Appropriate for enterprise recruiters and clients

**Casual Luka**
- Friendly, direct, conversational
- Still accurate and informative
- Sounds like a real person, not a LinkedIn bio
- Appropriate for most visitors

**ติงต๊อง Luka**
- Kaomoji, warm chaos energy, enthusiastic
- Still informative — personality doesn't sacrifice accuracy
- Feels like texting Luka
- Appropriate when the visitor clearly wants a fun experience

---

## The Knowledge Base

### Purpose
The knowledge base is the **single source of truth** for facts about Luka. The AI must only assert facts that exist in the knowledge base — it should never hallucinate details about Luka's experience, projects, or background.

### Structure
Organized into categories:

1. **Background & Career Story** — how Luka got here, the Computer Engineering → UX path
2. **Skills & Tools** — what he uses, what he's strong at
3. **Work Process** — how he thinks, how he approaches problems
4. **Projects** — one section per project with full context
5. **Collaboration Style** — how he works with teams
6. **What He's Looking For** — availability, ideal work context, what excites him
7. **Personality** — the human stuff that doesn't go on a CV

### Generation Instructions
1. Read all `.md` files in `../notion_exports/`
2. Extract all factual content about Luka's work, projects, process, and background
3. Structure into 100+ Q&A pairs in the format:

```markdown
**Q: [question a recruiter/client/visitor might ask]**
A: [answer grounded in source material]
```

4. Mark any gaps with `[NEEDS LUKA INPUT]`
5. Save as `/docs/knowledge-base-draft.md` for Luka to review and reinforce

### What Luka Will Reinforce
After the first draft is generated, Luka will:
- Fill in `[NEEDS LUKA INPUT]` gaps
- Correct anything factually wrong
- Add context only he knows (the why behind decisions, career story details, personality)
- Adjust any tone/framing that doesn't sound like him

---

## Issa Compass Reference

Study the Issa Compass hackathon code in `/reference/issa-compass/` to understand:

- How the persona-based onboarding was structured
- How user answers were interpreted and used to construct the system prompt
- How dynamic question generation worked
- How conversation context was maintained and passed to the API

**This chatbot should follow the same core pattern**, adapted for a portfolio context instead of a visa assistant context.

Key differences from Issa:
- 4 personas instead of user-type inference
- Tone mode as an additional dynamic layer
- Knowledge base is about a person, not immigration rules
- Tone toggle available mid-chat

---

## UI Notes

### Onboarding UI
- Step 1: Button cards (like Issa's persona cards)
- Steps 2-3: Chat bubbles — feels conversational, not form-like
- Tone selection: Button cards with preview text
- Show a subtle progress indicator (not a step counter, just a soft visual sense of "almost done")

### Chat UI
- Clean message bubbles
- Tone indicator visible somewhere (small badge or label) — shows active mode
- Tone switcher accessible but not prominent (e.g., settings icon or small toggle)
- Should feel like the chatbot has personality from the first message

### Landing Page Toggle
- Two clear entry points: "Chat with Luka" and "See the Work"
- Not a popup or modal — full page routing
- User can navigate between them

---

## What NOT To Do

- Do not expose the Anthropic API key in the frontend under any circumstances
- Do not hardcode onboarding questions — the dynamic approach is intentional
- Do not make the bot assert facts about Luka that aren't in the knowledge base
- Do not reset conversation history when switching tone modes
- Do not make the onboarding feel like a form — it should feel like the start of a conversation
- Do not start coding before proposing the implementation plan

---

## Definition of Done (Phase 1)

- [ ] Knowledge base draft generated from notion_exports
- [ ] Onboarding flow working (persona → dynamic questions → tone pick)
- [ ] Chat working with correct tone mode applied
- [ ] Tone switching mid-chat works without losing context
- [ ] Backend deployed to Railway with API key secured
- [ ] Landing page toggle between chat and portfolio views
- [ ] All three tone modes feel distinctly different but accurate
