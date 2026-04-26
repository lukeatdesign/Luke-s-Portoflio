import type { RichCaseStudy } from './richCaseStudy'

const imageModules = import.meta.glob('../assets/wayfarer/*.{png,jpg,jpeg,webp}', {
  eager: true,
  import: 'default',
}) as Record<string, string>

const byName = Object.fromEntries(
  Object.entries(imageModules).map(([path, src]) => [path.split('/').pop() ?? path, src]),
)
const img = (name: string) => byName[name] ?? ''

export const wayfarerCaseStudy: RichCaseStudy = {
  slug: 'wayfarer',
  heroImage: {
    src: img('overview.jpeg'),
    alt: 'Wayfarer dashboard overview for a Thailand work immigration assistant prototype.',
  },
  heroDetails: {
    subtitle: '2026 / Thailand Work Immigration Assistant',
    facts: [
      { label: 'Category', value: 'Immigration Assistant' },
      { label: 'Date', value: '2026' },
      { label: 'Role', value: 'Solo Designer & Builder' },
      { label: 'Type', value: 'Vibe-coded functional prototype' },
    ],
    duration: ['2 weeks'],
    methods: ['Cursor', 'Claude Code', 'Next.js', 'Flask', 'Supabase', 'Vercel', 'Railway'],
    team: ['1x Solo Designer & Builder (Me)'],
  },
  summary: [
    {
      emphasis:
        'Wayfarer is a Thailand work immigration assistant built as a hackathon assignment.',
      body:
        'It turns a complex, document-heavy visa process into a guided, personalized journey - from onboarding all the way through to application status.',
    },
    {
      emphasis: 'This is not a final product.',
      body:
        'It is a vibe-coded functional prototype that demonstrates how UX thinking can be expressed through code. Every decision was made to ensure the product works and feels considered for the user, not to achieve pixel perfection.',
    },
    {
      emphasis: 'The product was reframed as a visa companion, not just a chat window.',
      body:
        'The journey became onboarding quiz -> chat with personalized consultant -> personalized roadmap -> document checklist -> application status.',
    },
  ],
  background:
    'Wayfarer is a Thailand work immigration assistant built as a hackathon assignment. It turns a complex, document-heavy visa process into a guided, personalized journey - from onboarding all the way through to application status.',
  motivation: [
    "Honestly, I accepted this assignment without much belief that I could actually do it. I hadn't touched code in about 10 years. I'd never really used GitHub, never deployed anything on any platform.",
    "I started by reading the brief step by step just to understand what it meant. Then I thought about who this would actually help. That's how I came up with Mo Rakat - a 24-year-old UX designer from Cambodia with a job offer in Bangkok. Skilled, ready, but completely new to Thai immigration. She doesn't know what she doesn't know.",
  ],
  role: [
    'I worked as a solo designer and builder, using UX thinking directly in code rather than treating the assignment like a static mockup exercise.',
    'I reframed the brief, defined the user journey, built the functional prototype, and connected the experience from onboarding through application status.',
    'Every decision was made to ensure the product works and feels considered for the user, not to achieve pixel perfection.',
  ],
  research: {
    quote:
      "Could I make a complex process feel like a series of interactions that are simple and easy to follow? Getting even a little closer to that felt like the right goal.",
    bullets: [
      'I considered a few personas before choosing Mo Rakat - someone with real potential who was held back by something as solvable as a border.',
      "Blue-collar workers felt like too many nuances for a responsible demo, while digital nomads felt too straightforward. I needed a persona who didn't know what she didn't know.",
      'The product was reframed around a journey rather than a blank chat interface, so the app would know the user context and guide the next step proactively.',
    ],
  },
  painPoints: [
    {
      title: 'The visa process is complex, document-heavy, and hard to navigate alone',
      body:
        "Mo is skilled and ready, but completely new to Thai immigration. The problem is not just forms - it's the fact that she doesn't know what she doesn't know, and the process can feel overwhelming when each step depends on hidden context.",
      image: img('overview.jpeg'),
      caption: '',
    },
    {
      title: 'A generic chatbot is not enough at the moment people feel stressed',
      body:
        "Thinking about Mo at 11pm the night before her visa appointment made it clear that a chatbot that only answers questions isn't enough. A compass shows you where you are and where you're going.",
      image: img('generalchattoroadmap.jpeg'),
      caption: '',
    },
    {
      title: 'Users need clarity about ownership, progress, and what happens next',
      body:
        "One of the most confusing parts of immigration is not knowing which tasks are yours to handle, which belong to your employer, and whether you're actually making progress through the process.",
      image: img('personalizedroadmap.jpeg'),
      caption: '',
    },
  ],
  solutions: [
    {
      title: 'The onboarding quiz became the ground truth',
      body:
        "Nationality, job offer status, current visa, and urgency are collected during onboarding so the system has enough information to proceed to the roadmap and carry this into every part of the experience. The consultant never re-asks what it already knows. That's a respect for the user's time.",
      image: img('onboarding.jpeg'),
      caption: '',
    },
    {
      title: 'Chat that already knows its context',
      body:
        "Once the quiz is complete, the consultant already knows who Mo is. The roadmap ready card surfaces inline in the conversation - the user doesn't need to navigate away to know something has changed. The right panel shows current task context, and the sidebar separates general questions from task-specific threads.",
      image: img('generalchattoroadmap.jpeg'),
      caption: '',
    },
    {
      title: 'Roadmap split into what you own and what your employer owns',
      body:
        'The roadmap generates two separate lists - user tasks and employer tasks - with priority badges, status indicators, and subtasks for each. This single decision reduces a lot of anxiety.',
      image: img('personalizedroadmap.jpeg'),
      caption: '',
    },
    {
      title: 'Task-specific chat threads for focused guidance',
      body:
        'Every task on the roadmap can be expanded into a focused chat thread with context already loaded. The right panel shows the task subtasks, its blocked status if relevant, and a Mark as done action. The AI knows which step Mo is on and guides accordingly.',
      image: img('task_specific_chat.jpeg'),
      caption: '',
    },
    {
      title: 'Self-learning AI through the Consultant View',
      body:
        'There is a Consultant View button at the top right of the chat page. From there, a human can submit a better consultant reply - the AI compares its own response against the improved version and rewrites its system prompt to close the gap. This really belongs in a back-office system, but it surfaces here for demo purposes to show the self-learning loop working in real time.',
      image: img('improveai.jpeg'),
      caption: '',
    },
    {
      title: 'Dashboard overview in a trusted-friend voice',
      body:
        'The dashboard generates a warm 2-3 sentence status update - your name, where you are in the process, what is next. Written in a friendly way without any jargon. No bullets.',
      image: img('overview.jpeg'),
      caption: '',
    },
    {
      title: 'Documents with clear progress and a closed loop',
      body:
        'A simple checklist with a progress bar. When all documents are ready, a completion banner appears and the user is prompted back to the roadmap. Straightforward, but it closes a loop that would otherwise feel open-ended.',
      image: img('doc.jpeg'),
      caption: '',
    },
    {
      title: 'Application status timeline that acknowledges progress',
      body:
        'A 5-stage visual timeline of the full application journey. Each stage has a completion date or estimate. Advancing a stage triggers a sparkle burst, checkbox bounce, and text brightening - because users typically land on this page when something new is completed, and the animation is there to acknowledge that moment.',
      image: img('status.jpeg'),
      caption: '',
    },
  ],
  outcomes: [
    {
      emphasis: 'A full guided journey was built from onboarding to approved state.',
      body:
        'The prototype covers onboarding quiz, dashboard overview, personalized consultant, roadmap, documents, application status, and an approved state - not just one screen or one chat box.',
    },
    {
      emphasis: 'UX thinking was expressed through code, not only mockups.',
      body:
        'What you can ship through vibe coding is more complete than most design deliverables. Empty states, error cases, alternative flows, micro-interactions, and animations all have to actually exist.',
    },
    {
      emphasis: 'The assignment made the gap between idea and working product feel much smaller.',
      body:
        'Cursor and Claude Code were genuinely great tools for this. The deliverables can be utilized for more accurate concept testing, usability testing, stakeholder alignment, or even as developer handoff itself.',
    },
  ],
  learnings: [
    {
      title: 'Building the product made the design thinking more complete',
      body:
        "Having to think through empty states, error cases, alternative flows, micro-interactions, and animations - the things that usually sit in a Figma comment saying TBD - made me a better designer.",
    },
    {
      title: 'Learning by doing mattered more than understanding everything on day one',
      body:
        "I don't fully understand everything I used in this project, just the concept of each piece. I leaned on the tools to handle most of the debugging, but learning by doing day by day creates deeper understanding as well.",
    },
    {
      title: 'The concept could expand to support much more vulnerable users',
      body:
        "Building for someone like Nozim would require a document checker, voice input for people who navigate through speech rather than text, a caseworker or agent mode, and NGO partnerships so the fee isn't a barrier for the people who need it most.",
    },
    {
      title: 'Generative UI feels like the next step for this product direction',
      body:
        'Right now the deliverable is a chat interface, which assumes you know what to ask. What if the product surfaced the right interface for each task at the right moment - a form when you need to fill something in, a checklist when you need to track, a guided flow when the next step is well-defined?',
    },
  ],
}
