import type { RichCaseStudy } from './richCaseStudy'

const imageModules = import.meta.glob('../assets/weave-cli/*.{png,jpg,jpeg,webp}', {
  eager: true,
  import: 'default',
}) as Record<string, string>

const byName = Object.fromEntries(
  Object.entries(imageModules).map(([path, src]) => [path.split('/').pop() ?? path, src]),
)
const img = (name: string) => byName[name] ?? ''

export const weavecliCaseStudy: RichCaseStudy = {
  slug: 'weave-cli',
  heroImage: {
    src: img('1.png'),
    alt: 'Weave CLI terminal interface showing the guided rollup setup flow with structured prompts and feedback.',
  },
  heroDetails: {
    subtitle: '2024 / Developer Tools CLI',
    facts: [
      { label: 'Category', value: 'Developer Tools' },
      { label: 'Date', value: '2024' },
      { label: 'Role', value: 'UX/UI Designer' },
      { label: 'Company', value: 'Initia Labs' },
    ],
    duration: ['2 months'],
    methods: [
      'User Flow Diagram',
      'Information Architecture',
      'TUI Interaction Design',
      'Wireframes',
      'Hi-Fidelity Design',
    ],
    team: [
      '1x UX/UI Designer (Me)',
      '3x Back-End / CLI Developers',
      '1x Product Manager',
    ],
  },
  summary: [
    {
      emphasis: 'A CLI is still an interface — and it deserved the same design rigour.',
      body: 'Weave CLI was built to simplify rollup creation and node management for the Initia ecosystem. Most teams skip UX work for terminal products entirely. We applied it intentionally.',
    },
    {
      emphasis: 'The design translated complex operations into guided, keyboard-first flows.',
      body: 'Core tasks like running nodes, creating rollups, configuring relayers, and managing bots were mapped into structured flows with clear prompts, validation, and meaningful defaults — reducing the need to consult documentation.',
    },
    {
      emphasis: 'The project expanded what the team expected from CLI experiences.',
      body: 'Concepts like tutorial mode, undo, and immediate validation were not standard CLI conventions — but they were the right answers to the usability problems the product had. The case study shows how interface thinking applies even in a terminal environment.',
    },
  ],
  background:
    'Weave CLI is a command-line tool for setting up and managing interwoven rollups on the Initia network. The goal was to give developers a fast, keyboard-first path through a configuration process that previously required navigating fragmented documentation and running commands in the right order without any guidance.',
  motivation: [
    'Rollup creation for Initia was technically demanding and spread across too many manual steps. Documentation helped, but it required users to hold a lot of context in their heads and left little room for error recovery.',
    'The opportunity was to bring structured interaction design into a terminal context — treating the CLI as a real interface system with flows, feedback, defaults, and progressive disclosure rather than just a series of prompts.',
  ],
  role: [
    'I worked as the sole designer on Weave CLI, responsible for mapping core user flows, defining interaction principles, and translating them into TUI-appropriate patterns.',
    'I proposed and designed specific UX improvements including tutorial mode, better confirmation patterns, immediate validation, and an undo concept for destructive commands.',
    'I collaborated closely with CLI developers to understand what was technically feasible in a terminal environment and what required novel approaches.',
  ],
  research: {
    image: img('2.png'),
    quote:
      'A terminal interface has fewer affordances than a GUI, but users still need the same things: clear feedback, confidence in what they\'re doing, and a path forward when something goes wrong.',
    bullets: [
      'Mapped the full flow for each primary use case: node setup, rollup creation, relayer configuration, and bot management.',
      'Identified where users were likely to make mistakes, get stuck, or lose confidence — especially around irreversible commands.',
      'Benchmarked best-in-class CLI interfaces to understand which patterns transferred well and which needed rethinking for Weave\'s complexity.',
    ],
    quotes: [
      'When a CLI tells me something went wrong with no context, I have no idea if I should retry, rollback, or just start over.',
    ],
  },
  painPoints: [
    {
      title: 'No mouse, no visual scaffolding — guidance had to come from the interface itself',
      body: 'A terminal environment has no hover states, no sidebar navigation, and no persistent UI chrome. Every piece of guidance had to be delivered through the prompt structure, formatting, and feedback messages — nothing visual to fall back on.',
      image: img('3.png'),
      caption: 'Guidance and structure had to come entirely through text prompts, formatting, and feedback output.',
    },
    {
      title: 'Complex configuration with high stakes for mistakes',
      body: 'Rollup creation and relayer setup involve deep configuration options with meaningful consequences. A wrong value could require a full restart. Users needed enough control to configure precisely, with enough protection to avoid catastrophic errors.',
      image: img('4.png'),
      caption: 'Deep configuration options needed clear defaults, validation, and safe error recovery paths.',
    },
    {
      title: 'Power users needed speed; new users needed explanation',
      body: 'Experienced CLI users would resist anything that slowed them down. New users would be lost without more guidance. The same interface had to work for both, without defaulting entirely to one extreme.',
      image: img('5.png'),
      caption: 'The interface had to support both rapid expert execution and guided first-time use.',
    },
  ],
  processImages: [
    {
      src: img('journey.png'),
      label: 'Weave user journey map',
      caption: 'End-to-end journey mapping for the core Weave flows including node setup, rollup creation, relayer config, and bot management.',
    },
  ],
  solutions: [
    {
      title: 'Tutorial mode for guided first-time use',
      body: 'A dedicated tutorial mode provided more context and explanation for users encountering the tool for the first time, without adding that overhead to every experienced user\'s session. It could be skipped or exited at any point.',
      image: img('6.png'),
      caption: 'Tutorial mode offered richer guidance for new users without slowing down experienced ones.',
    },
    {
      title: 'Immediate validation and structured confirmation prompts',
      body: 'Inputs were validated as they were entered, giving users feedback before moving to the next step rather than discovering errors after a long command sequence. Confirmation prompts were restructured to show a clear summary of the intended action before execution.',
      image: img('2.png'),
      caption: 'Inline validation and structured confirmations caught errors early and made consequences visible before commitment.',
    },
    {
      title: 'Undo concept to reduce fear of destructive commands',
      body: 'One of the biggest barriers to confident CLI use is fear of irreversible mistakes. We proposed an undo mechanism for appropriate operations — giving users a safety net that made them more willing to explore and configure without anxiety.',
      image: img('3.png'),
      caption: 'An undo concept for reversible commands reduced the psychological cost of making mistakes.',
    },
  ],
  outcomes: [
    {
      emphasis: 'The TUI felt guided and intentionally designed.',
      body: 'The resulting direction made a text-based workflow feel like a deliberate product rather than a series of raw prompts. Users could move through advanced configuration with clearer structure and more confidence at each step.',
    },
    {
      emphasis: 'The project expanded team expectations for what CLI UX could be.',
      body: 'Tutorial mode, undo, and immediate validation were not standard conventions the team had considered. Seeing them articulated and designed shifted how the team thought about what developer tools could offer.',
    },
  ],
  learnings: [
    {
      title: 'Consistency, clarity, and feedback matter just as much in a CLI as in a GUI.',
      body: 'The design principles that make graphical interfaces work — clear hierarchy, immediate feedback, progressive disclosure — apply directly to terminal interfaces. The medium changes; the user needs do not.',
    },
    {
      title: 'Power-user tools still benefit from progressive disclosure.',
      body: 'Even experienced developers benefit from clear defaults, helpful context, and structured flows when the domain is complex enough. Assuming that \'just ship a prompt\' is sufficient leaves real usability value on the table.',
    },
  ],
}
