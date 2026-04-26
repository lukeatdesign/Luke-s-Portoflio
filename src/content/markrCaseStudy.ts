import type { RichCaseStudy } from './richCaseStudy'

const imageModules = import.meta.glob('../assets/markr/*.{png,jpg,jpeg,webp}', {
  eager: true,
  import: 'default',
}) as Record<string, string>

const byName = Object.fromEntries(
  Object.entries(imageModules).map(([path, src]) => [path.split('/').pop() ?? path, src]),
)
const img = (name: string) => byName[name] ?? ''

export const markrCaseStudy: RichCaseStudy = {
  slug: 'markr',
  heroTone: 'bright',
  heroImage: {
    src: img('1.png'),
    alt: 'Markr data annotation tool showing the revamped labeling interface with the tagbox and color-coded tag system.',
  },
  heroDetails: {
    subtitle: '2020 / Data Annotation Tool',
    facts: [
      { label: 'Category', value: 'Data Annotation Tool' },
      { label: 'Date', value: 'December 1, 2020' },
      { label: 'Role', value: 'UX Designer' },
      { label: 'Company', value: 'Backyard' },
    ],
    duration: ['2 months'],
    methods: [
      'User Interview',
      'Activity-Centered Design',
      'Usability Testing',
      'Wireframes',
    ],
    team: [
      '1x UX Designer (Me)',
      '1x Visual Designer (supervised)',
      '1x Product Owner (supervised)',
      '2x Front-End Developers',
      '1x Back-End Developer',
      '1x Data Scientist',
    ],
  },
  summary: [
    {
      emphasis: 'Markr was a text annotation tool that had become frustrating to use.',
      body: 'The product was already in production when I joined, but the interface was cluttered, the tag system was hard to navigate, and both new and expert users were struggling. I was brought in to revamp it under a two-month deadline.',
    },
    {
      emphasis: 'Activity-Centered Design guided the approach.',
      body: 'Markr\'s purpose is narrow and specific: annotate text data accurately and quickly. The design was restructured around that single activity — optimizing for speed, accuracy, and the needs of both first-time labelers and power users.',
    },
    {
      emphasis: 'The redesign resolved the key frustrations for both user groups.',
      body: 'New users could understand the interface quickly. Advanced users got easier, more ergonomic hotkeys. Neither group had to compromise. The team also developed stronger delivery habits through the process.',
    },
  ],
  background:
    'Markr is a text data annotation tool designed to support machine learning training pipelines. Labelers use it to tag words and sentences in text according to a defined taxonomy of labels, producing structured output that data scientists use as input for NLP models. The core activity — labeling — needed to be fast, accurate, and low-fatigue across long sessions.',
  motivation: [
    'I joined this project after the tool had been in development for months without proper UX consideration. The interface was frustrating the team, and there was real deadline pressure. My task was to diagnose the problems and redesign the product within two months.',
    'This was also my first time supervising a visual designer, adding a leadership dimension to what was already a technically interesting challenge.',
  ],
  role: [
    'I conducted user interviews with labelers and data scientists to understand both the workflow reality and the data output requirements.',
    'I designed UX flows, interaction principles, and wireframes, then collaborated with the visual designer to produce hi-fi prototypes that matched my interaction intent.',
    'I also supervised a team member acting as product owner, helping structure the backlog and Scrum process alongside the design work.',
  ],
  research: {
    image: img('2.png'),
    quote:
      'The labeling activity itself — not the screens — was the design target. I needed to understand how experienced labelers worked, what slowed them down, and what made the annotation output useful for the data science team.',
    bullets: [
      'Interviewed labelers about their current workflow: how they selected tags, used hotkeys, and recovered from tokenization errors.',
      'Spoke with the data scientist to understand what the output needed to look like and what labeling mistakes created the most downstream problems.',
      'Observed labeling sessions to understand micro-interaction patterns — how users\'s eyes moved, where they paused, and where they consistently made errors.',
    ],
    quotes: [
      'When we have 30+ tags to label, we forget which ones we have. We need to see all tags available all the time.',
      'Our word tokenization model is not perfect, especially for Thai. We need a better way to handle edge cases without losing the whole sentence.',
    ],
  },
  painPoints: [
    {
      title: 'Too many tag options presented at once',
      body: 'The original design attempted to show all tags simultaneously, with the intention of keeping options visible. In practice, human attention can comfortably track only one or two tags at a time — showing 30+ created visual noise that made the relevant tags harder to find, not easier.',
      image: img('3.png'),
      caption: 'Showing all tags simultaneously created noise rather than accessibility.',
    },
    {
      title: 'Indistinguishable tags and poor color use',
      body: 'Tags were differentiated only by border colors in the original design. Users could not reliably distinguish between tags under the visual load of a labeling session, and the color system was bright enough to be distracting rather than helpful.',
      image: img('4.png'),
      caption: 'Border-only color differentiation failed to make tags distinguishable during active labeling.',
    },
    {
      title: 'Hotkeys that were hard to learn and hard to use',
      body: 'The hotkey system used a mix of numbers and alphabet characters that were difficult to memorize and positioned inconsistently in the visual layout. Power users who relied on hotkeys for speed were consistently slowed down by the awkward scheme.',
      image: img('5.png'),
      caption: 'The original hotkey layout was inconsistent and required significant memorization.',
    },
  ],
  processImages: [
    {
      src: img('6.png'),
      label: 'Labeling flow redesign',
      caption: 'Activity-centered redesign focused on the core labeling loop: select tag, apply to text, advance.',
    },
  ],
  solutions: [
    {
      title: 'Tagbox: selected tag prominent, full list scrollable',
      body: 'The revamped tag panel showed the currently selected tag prominently at the top, with the full tag list in a scrollable area below. Users could keep their attention on the task while the selected tag stayed visually anchored — addressing the recall problem without hiding options.',
      image: img('7.png'),
      caption: 'Selected tag shown prominently at top; full list scrollable below for reference.',
    },
    {
      title: 'Color bar at left instead of full fill — only the selected tag filled',
      body: 'Tags were redesigned with a color indicator bar on the left edge. Only the currently selected tag was shown as filled color — all others used the bar only. This maintained color differentiation while dramatically reducing visual noise during active labeling.',
      image: img('8.png'),
      caption: 'Color bar on left edge replaced full-fill differentiation, reducing noise while maintaining legibility.',
    },
    {
      title: '2-digit number hotkeys for intuitive, ergonomic speed',
      body: 'The hotkey system was rebuilt around 2-digit numbers (press 1, then 2 within 0.5 seconds for tag 12). This gave every tag a consistent, memorable address on the numpad — a location users already knew from muscle memory — and removed alphabet-based hotkeys entirely.',
      image: img('9.png'),
      caption: '2-digit numpad hotkeys replaced the mixed alphabet-number system for faster, more ergonomic access.',
    },
  ],
  outcomes: [
    {
      emphasis: 'New users found the interface self-explanatory.',
      body: 'First-time users could understand what to do after a short introduction, without needing to memorize complex hotkey schemes or decipher which tags were which. The interface communicated the labeling workflow clearly enough to reduce onboarding friction significantly.',
    },
    {
      emphasis: 'Advanced users worked faster with more accessible hotkeys.',
      body: 'Power users responded positively to the new 2-digit numpad scheme. The ergonomic improvement — muscle-memory keys, consistent layout, 0.5-second interval — reduced the cognitive load of hotkey use without requiring them to relearn a new system from scratch.',
    },
  ],
  learnings: [
    {
      title: 'There are UX designers for a reason.',
      body: 'When I joined, the tool was a mess and the team was frustrated under deadline pressure. The situation highlighted exactly what happens when UX research and proper design process are skipped. Fixing the interface improved both the product and team morale.',
    },
    {
      title: 'A good process improves team engagement, not just outcomes.',
      body: 'Introducing structured Scrum practices alongside the design work changed how the team experienced the project. Manageable, measurable tasks created more trust and momentum than the unstructured approach that had preceded it.',
    },
  ],
}
