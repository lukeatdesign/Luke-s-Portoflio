# Wayfarer — Case Study

**Role:** Solo Designer & Builder
**Type:** Vibe-coded functional prototype
**Timeline:** 2 weeks
**Tools:** Cursor, Claude Code, Next.js, Flask, Supabase, Vercel, Railway

**Live demo:** https://wayfarer-luke.vercel.app
**GitHub:** https://github.com/lukeatdesign/wayfarer

---

## Overview

Wayfarer is a Thailand work immigration assistant built as a hackathon assignment. It turns a complex, document-heavy visa process into a guided, personalized journey — from onboarding all the way through to application status.

This is not a final product. It is a vibe-coded functional prototype that demonstrates how UX thinking can be expressed through code. Every decision was made to ensure the product works and feels considered for the user, not to achieve pixel perfection.

---

## A Bit of Context

Honestly, I accepted this assignment without much belief that I could actually do it. I hadn't touched code in about 10 years. I'd never really used GitHub, never deployed anything on any platform.

I started by reading the brief step by step just to understand what it meant. Then I thought about who this would actually help.

I considered a few personas. Blue-collar workers felt like too many nuances — language barriers, document literacy, situations that deserve more than a demo can responsibly handle. Digital nomads felt too straightforward. What I was looking for was someone who had the potential to go somewhere but was held back by something as solvable as a border.

That's how I came up with Mo Rakat — a 24-year-old UX designer from Cambodia with a job offer in Bangkok. Skilled, ready, but completely new to Thai immigration. She doesn't know what she doesn't know.

---

## How I Reframed: Visa Companion

My first instinct was a chat window with an LLM behind it. But thinking about Mo at 11pm the night before her visa appointment — a chatbot that answers questions isn't enough. A compass shows you where you are and where you're going.

So I reframed the product around a journey:

**Onboarding quiz → Chat with personalized consultant → Personalized roadmap → Document checklist → Application status**

Each step exists because Mo needed it. The app won't just respond to a chat message — it knows her nationality, her job situation, her urgency, so it can build her a roadmap and guide her step by step through each task. It checks in on her required documents and celebrates when she completes something, like a companion.

The hackathon brief mentioned Grab as a reference for simplicity. I know immigration can't be completed in a few minutes like calling a ride — but I took it as a design direction. Could I make a complex process feel like a series of interactions that are simple and easy to follow? Getting even a little closer to that felt like the right goal.

---

## What I Built

| Feature | What it does |
|---|---|
| Onboarding quiz | 7-step quiz capturing nationality, intent, work type, job offer, visa status, urgency as verified ground truth |
| Dashboard overview | AI-generated status summary, next actions, document + status mini cards |
| Chat with consultant | Personalized AI consultant, task panel, auto-welcome from quiz answers |
| Roadmap | AI-generated roadmap split into user tasks and employer tasks |
| Documents | Document checklist with progress tracking |
| Application status | 5-stage application timeline |
| Approved | Celebration screen — Mo made it |

---

## Design Decisions

These decisions reflect UX thinking expressed through code. Each one exists because Mo needed it.

---

**The onboarding quiz as ground truth**

![Onboarding quiz — step 5 of 7](onboarding.jpeg)

Nationality, job offer status, current visa, and urgency are collected during onboarding to ensure the system has enough information to proceed to the roadmap and carry this into every part of the experience. The consultant never re-asks what it already knows. That's a respect for the user's time.

---

**Chat that knows its context**

![General chat with roadmap ready card](generalchattoroadmap.jpeg)

Once the quiz is complete, the consultant already knows who Mo is. The roadmap ready card surfaces inline in the conversation — the user doesn't need to navigate away to know something has changed. The right panel shows current task context, and the sidebar separates general questions from task-specific threads.

---

**Roadmap split into "what you own" and "what your employer owns"**

![Personalized roadmap with user and employer task split](personalizedroadmap.jpeg)

One of the most confusing parts of immigration is not knowing which tasks are yours to handle. The roadmap generates two separate lists — user tasks and employer tasks — with priority badges, status indicators, and subtasks for each. This single decision reduces a lot of anxiety.

---

**Task-specific chat threads**

![Task-specific chat with steps panel](task_specific_chat.jpeg)

Every task on the roadmap can be expanded into a focused chat thread with context already loaded. The right panel shows the task's subtasks, its blocked status if relevant, and a "Mark as done" action. The AI knows which step Mo is on and guides accordingly.

---

**Self-learning AI — the Consultant View**

![Consultant view overlay](improveai.jpeg)
![AI prompt updated diff modal](promptupdated.jpeg)

There is a Consultant View button at the top right of the chat page. From there, a human can submit a better consultant reply — the AI compares its own response against the improved version and rewrites its system prompt to close the gap. The before/after diff is shown in a modal.

This feature should really live in a back-office system rather than on the user-facing side — it surfaces here for demo purposes to show the self-learning loop working in real time. Each improvement is saved to the database and picked up on the next conversation.

---

**Dashboard overview in a trusted-friend voice**

![Dashboard overview](overview.jpeg)

The dashboard generates a warm 2–3 sentence status update — your name, where you are in the process, what's next. Written in a friendly way without any jargon. No bullets.

---

**Documents with clear progress**

![Documents checklist](doc.jpeg)

A simple checklist with a progress bar. When all documents are ready, a completion banner appears and the user is prompted back to the roadmap. Straightforward, but it closes a loop that would otherwise feel open-ended.

---

**Application status timeline**

![Application status page](status.jpeg)

A 5-stage visual timeline of the full application journey. Each stage has a completion date or estimate. Advancing a stage triggers a sparkle burst, checkbox bounce, and text brightening — because users typically land on this page when something new is completed, and the animation is there to acknowledge that moment.

---

## Honest Reflection

I haven't touched code in about 10 years. Before this project I had never really used GitHub, never deployed anything on any platform. I vibe coded this. Heavily.

**What clicked:**

I truly believe I could go beyond just working on Figma with mockups and prototypes, which are quite static compared to building what's in my head through prompting. This assignment made me really believe this is where UX/UI design is heading — the deliverables can be utilized for more accurate concept testing, usability testing, stakeholder alignment, or even as developer handoff itself. Cursor and Claude Code were genuinely great tools for this. The gap between idea and working product got smaller each day.

What you can ship through vibe coding is also more complete than most design deliverables. Empty states. Error cases. Alternative flows. Micro-interactions. Animations. The things that usually sit in a Figma comment saying "TBD" — they have to actually exist. Having to think through all of them, even imperfectly, made me a better designer.

**What was hard:**

I don't fully understand everything I used in this project, just the concept of each piece. I leaned on the tools to handle most of the debugging. There were moments where something broke and I couldn't fully explain why the fix worked. But I think that's part of learning — at least the tools are capable of handling these things, and learning by doing day by day creates deeper understanding as well.

---

## Where This Could Go

Mo's journey was the right place to start — clear enough to scope, real enough to matter. But she's not the only person who needs this.

I have a friend called Nozim. He's in his late 50s, migrated from Myanmar to Bangkok, and sells roti from a pushcart to survive and send money back to his family. A few years ago I helped him a little with some paperwork. Just a little. But I remember how much that small thing mattered, and how alone you can feel navigating a system that wasn't built for you.

Building for him properly would require a different set of features:

- **Document checker** — photograph a Thai document, get an explanation of what it says and whether it's what you need
- **Voice input** — for users who navigate the world through speech rather than text, with support across multiple languages
- **Caseworker / agent mode** — a simplified view for NGO workers, social workers, or professional immigration agents to use the product on someone's behalf
- **NGO partnerships** — because the app fee shouldn't be a barrier for the people who need it most

The other thing I keep thinking about is generative UI. Right now my deliverable is a chat interface, which assumes you know what to ask. Most people would freeze at a blank input or not even feel comfortable typing.

What if the product surfaced the right interface for each task at the right moment? A form when you need to fill something in. A checklist when you need to track. A guided flow when the next step is well-defined. As common journeys become clearer, the UI could shape itself around them — making the experience closer to being guided. These are the improvements still forming in my mind.

---

*Built by Luke — UX/UI Designer*
*Bangkok, 2026*
