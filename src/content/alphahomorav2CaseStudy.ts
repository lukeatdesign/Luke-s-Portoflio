import type { RichCaseStudy } from './richCaseStudy'

const imageModules = import.meta.glob('../assets/alpha-homora-v2/*.{png,jpg,jpeg,webp}', {
  eager: true,
  import: 'default',
}) as Record<string, string>

const byName = Object.fromEntries(
  Object.entries(imageModules).map(([path, src]) => [path.split('/').pop() ?? path, src]),
)
const img = (name: string) => byName[name] ?? ''

export const alphahomorav2CaseStudy: RichCaseStudy = {
  slug: 'alpha-homora-v2',
  heroImage: {
    src: img('1.png'),
    alt: 'Alpha Homora V2 platform overview showing the leveraged yield farming interface.',
  },
  heroDetails: {
    subtitle: '2021 / DeFi Usability Revamp',
    facts: [
      { label: 'Category', value: 'DeFi' },
      { label: 'Date', value: 'September 1, 2021' },
      { label: 'Role', value: 'UX/UI Designer' },
      { label: 'Company', value: 'Alpha Finance Lab' },
    ],
    duration: ['1 month'],
    methods: [
      'User Interview',
      'Guerrilla Test',
      'Heuristic Evaluation',
      'Information Architecture',
      'User Journey Map',
      'User Flow Diagram',
      'Hi-Fidelity Design',
      'Interactive Prototypes',
      'Usability Testing',
    ],
    team: ['1x UX/UI Designer (Me)'],
  },
  summary: [
    {
      emphasis: 'Alpha Homora V2 had serious usability debt from day one.',
      body: 'As the first dedicated UX designer at Alpha Finance Lab, I inherited a flagship DeFi product with 30+ validated usability problems across pool selection, leverage flows, and risk communication.',
    },
    {
      emphasis: 'I audited, validated, and redesigned the entire experience.',
      body: 'The process combined independent heuristic evaluation with direct user interviews, producing a clear problem inventory and actionable redesign recommendations across the full borrowing journey.',
    },
    {
      emphasis: 'The redesign established UX as a real capability inside the team.',
      body: 'Recommendations were adopted into development planning, especially for later ecosystem expansion, and the project proved that thoughtful structure can improve even the most technically advanced financial tools.',
    },
  ],
  background:
    'Alpha Homora V2 is a leveraged yield farming platform that lets users borrow assets to amplify their liquidity-providing returns. It was one of the leading DeFi protocols in the space, but carried significant usability debt — confusing terminology, weak feedback, and interaction patterns that assumed too much from users.',
  motivation: [
    'I joined Alpha Finance Lab as their first UX-focused designer. The team had built a powerful product but had not invested in structured design work, and it showed. Key flows around pool selection, leverage, and borrow power were producing friction and confusion for users of all experience levels.',
    'The opportunity was to show what thoughtful UX could add to a product category where most teams focused entirely on engineering.',
  ],
  role: [
    'I worked as a solo UX/UI designer, responsible for the full audit and redesign direction from research through hi-fi prototypes.',
    'I conducted user interviews and ran guerrilla usability tests to validate identified issues before presenting recommendations.',
    'I produced a redesigned information architecture, cleaner user flows, and high-fidelity screens that the engineering team used as a reference for prioritization and future development.',
  ],
  research: {
    image: img('2.png'),
    quote:
      'I mapped the full product through a heuristic evaluation and validated the most critical problems with real users before proposing any solutions.',
    bullets: [
      'Conducted interviews with yield farmers across different experience levels to understand their mental models.',
      'Ran guerrilla usability tests to observe where users misread labels, missed controls, or stalled completely.',
      'Identified 30+ distinct usability issues, prioritized by frequency and severity across the core borrowing workflow.',
    ],
    quotes: [
      'I never know what APR I should be aiming for. The numbers are just there — no context about what good looks like.',
      'When I tried to adjust leverage, I did not know what would happen to my position. I just guessed.',
    ],
  },
  painPoints: [
    {
      title: 'Labels and metrics that explained nothing',
      body: 'Important indicators like APR, TVL, borrow APY, and leverage ratios were presented without explanation or context. Users had to already understand DeFi deeply to interpret what any number meant, let alone make good decisions based on it.',
      image: img('3.png'),
      caption: 'Raw metrics with no explanation forced users to interpret everything themselves.',
    },
    {
      title: 'No guidance through pool selection',
      body: 'The pool list was dense and unsorted, with no filtering, comparison tools, or guidance on which pool matched a given strategy. Users who were new to the platform had no path toward a confident choice.',
      image: img('4.png'),
      caption: 'Pool selection offered no sorting, filtering, or comparison support.',
    },
    {
      title: 'Leverage steps that obscured risk',
      body: 'The leverage adjustment flow presented controls without sufficient feedback about what would change as a result. Users could not easily see their borrow limit, liquidation risk, or net position before committing, which created real financial anxiety.',
      image: img('5.png'),
      caption: 'Leverage inputs gave users no clear picture of their resulting exposure or risk.',
    },
  ],
  processImages: [
    {
      src: img('6.png'),
      label: 'Redesigned sitemap',
      caption: 'The revised information architecture created clearer separation between pool discovery, strategy setup, and active position management.',
    },
  ],
  solutions: [
    {
      title: 'Cleaner information architecture and navigation',
      body: 'The redesigned sitemap separated pool discovery from position management and created a clearer path from browsing to strategy confirmation. Navigation labels were rewritten to match user language rather than protocol terminology.',
      image: img('7.png'),
      caption: 'Navigation aligned to user goals rather than protocol structure.',
    },
    {
      title: 'Stronger signifiers and proactive help',
      body: 'Key metrics were given context through tooltips, comparison labels, and visual hierarchy that surfaced what mattered. APR ranges, risk levels, and borrow power thresholds became readable at a glance rather than requiring interpretation.',
      image: img('8.png'),
      caption: 'Contextual help and stronger visual hierarchy made key metrics readable without prior DeFi knowledge.',
    },
    {
      title: 'Leverage flow redesigned around visible consequences',
      body: 'The leverage adjustment step was restructured to show users a real-time preview of their resulting position — including borrow amount, liquidation threshold, and net exposure — before they committed. This gave users confidence rather than anxiety.',
      image: img('9.png'),
      caption: 'Real-time consequence preview before execution reduced guessing and built user confidence.',
    },
  ],
  outcomes: [
    {
      emphasis: 'The recommendations were adopted into development planning.',
      body: 'Alpha Finance Lab used the redesign work to inform prioritization for later product iterations and ecosystem expansion. The clearer flows and better terminology carried forward into subsequent product updates.',
    },
    {
      emphasis: 'UX became a recognized capability inside the team.',
      body: "The project proved that systematic design thinking could improve even a technically advanced product. It shifted the team's attitude toward UX from a nice-to-have into a genuine product lever.",
    },
  ],
  learnings: [
    {
      title: 'You cannot assume motivated users will interpret correctly.',
      body: 'DeFi users are financially motivated, but that does not mean they can decode complex interfaces under pressure. Even expert users need clear feedback, legible labels, and confidence signals when real money is at stake.',
    },
    {
      title: 'Turning jargon into usable interaction language is often the most valuable part of the work.',
      body: 'The biggest gains did not come from visual redesigns — they came from rewriting labels, adding context to numbers, and replacing protocol-speak with language that described what users were actually doing.',
    },
  ],
}
