import type { RichCaseStudy } from './richCaseStudy'

const imageModules = import.meta.glob('../assets/nebula-protocol/*.{png,jpg,jpeg,webp}', {
  eager: true,
  import: 'default',
}) as Record<string, string>

const byName = Object.fromEntries(
  Object.entries(imageModules).map(([path, src]) => [path.split('/').pop() ?? path, src]),
)
const img = (name: string) => byName[name] ?? ''

export const nebulaprotocolCaseStudy: RichCaseStudy = {
  slug: 'nebula-protocol',
  heroImage: {
    src: img('1.png'),
    alt: 'Nebula Protocol interface showing the cluster asset view with rebalancing mechanics and portfolio composition.',
  },
  heroDetails: {
    subtitle: '2022 / DeFi',
    facts: [
      { label: 'Category', value: 'DeFi' },
      { label: 'Date', value: 'March 1, 2022' },
      { label: 'Role', value: 'UX/UI Designer' },
      { label: 'Company', value: 'Alles Labs' },
    ],
    duration: ['Design & Development: 3 months', 'Project suspended before release due to Terra collapse'],
    methods: [
      'Information Architecture',
      'Hi-Fidelity Design',
      'Interactive Prototypes',
      'Guerrilla Test',
      'Figma',
    ],
    team: [
      '1x UX/UI Designer (Me)',
      '1x Front-End Developer',
      '3x Smart Contract Developers',
      '1x Product Manager',
    ],
  },
  summary: [
    {
      emphasis: 'Nebula offered diversified crypto exposure through automatically rebalancing clusters.',
      body: 'The protocol bundled on-chain assets into algorithmically managed baskets, letting users invest in diversified crypto positions without manually tracking each asset. The UX challenge was making this feel safe and legible rather than opaque.',
    },
    {
      emphasis: 'The inherited design prioritized functionality over comprehension.',
      body: 'I joined the project and found a functional interface that consistently created confusion. Key mechanics — clusters, get/redeem flows, rebalancing incentives — were presented in ways that required too much user interpretation.',
    },
    {
      emphasis: 'The project was suspended due to Terra\'s ecosystem collapse, not product failure.',
      body: 'The design and development work was progressing well when UST lost its peg and LUNA collapsed. Nebula Protocol was built on Terra\'s infrastructure and could not continue. The case study documents the work as it stood at suspension.',
    },
  ],
  background:
    'Nebula Protocol is a DeFi application built on the Terra ecosystem that introduces indexed crypto assets managed through a concept called clusters — algorithmically rebalancing baskets of on-chain assets. Users could invest in clusters to gain diversified exposure without manually managing individual positions, similar to traditional index funds but fully decentralized.',
  motivation: [
    'I joined Alles Labs specifically to work on Nebula Protocol because it addressed a real problem: most individual crypto investors lacked the time or knowledge to analyze every asset before investing, but the available DeFi tools still expected them to.',
    'Nebula\'s automatic rebalancing model had the potential to make crypto investment far more accessible. My role was to make the interface live up to that potential — translating complex protocol mechanics into something a non-expert could understand and trust.',
  ],
  role: [
    'I inherited the design from another designer and took responsibility for identifying and addressing comprehension problems throughout the interface.',
    'I built on an organized design system that allowed scalability and made it possible for new designers to get up to speed quickly.',
    'I worked closely with developers to discuss technical feasibility, and aligned design priorities with the product manager throughout the sprint cycle.',
  ],
  research: {
    image: img('2.png'),
    quote:
      'The core problem was not that users disliked the product — it was that they could not understand what it was doing. The interface showed data without giving it meaning.',
    bullets: [
      'Reviewed the inherited design against usability heuristics and identified recurring points of confusion around cluster mechanics, rebalancing behavior, and get/redeem flows.',
      'Spoke with potential users who were interested in diversified crypto investing but found the inherited interface intimidating.',
      'Assessed how comparable DeFi products communicated risk, composition, and rebalancing incentives.',
    ],
    quotes: [
      'I understand the concept of a basket of assets. I just don\'t understand what this specific basket is doing or why it changed.',
      'The word "cluster" appears everywhere but I still don\'t know what I\'m buying.',
    ],
  },
  painPoints: [
    {
      title: 'Cluster mechanics were presented without explanation',
      body: 'Clusters are the core unit of the product — but the interface used the term without ever explaining what a cluster was, how it was composed, or why it changed over time. Users who did not already understand the protocol were left to guess.',
      image: img('3.png'),
      caption: 'Cluster data was displayed without context, leaving users unable to interpret what they were seeing.',
    },
    {
      title: 'Get and Redeem mechanics created unnecessary complexity',
      body: 'The underlying protocol had multiple methods for acquiring and exiting cluster positions — Mint, Buy, Burn, Redeem — each with different market implications. Exposing all of these choices to users who just wanted to invest added cognitive load without adding value.',
      image: img('4.png'),
      caption: 'Multiple acquisition and exit methods created complexity that most users did not need to navigate.',
    },
    {
      title: 'Risk and rebalancing incentives were not explained',
      body: 'Nebula\'s rebalancing mechanic rewarded users who brought cluster allocations back toward target weights. This was a powerful incentive, but it was almost invisible in the interface — users who acted without understanding it could end up with unfavorable outcomes.',
      image: img('5.png'),
      caption: 'Rebalancing incentives and consequences were not visible enough to influence user behavior correctly.',
    },
  ],
  solutions: [
    {
      title: 'Simplified get and redeem into a single clear action',
      body: 'The redesigned flow presented users with a single "Get" action that automatically selected the most favorable acquisition method based on current market conditions. Users who wanted manual control could access it, but the default path was simple.',
      image: img('6.png'),
      caption: 'A single clear action hid protocol complexity without removing user control.',
    },
    {
      title: 'Information visualization for cluster composition and dynamics',
      body: 'Cluster composition, weight targets, and price movements were shown visually — making it possible to understand what a cluster was doing at a glance rather than interpreting raw numbers. Rebalancing status was shown alongside portfolio performance.',
      image: img('7.png'),
      caption: 'Visual composition and weight displays made cluster behavior readable without prior DeFi knowledge.',
    },
    {
      title: 'Microcopy and proactive help for DeFi-specific terminology',
      body: 'Industry terms like cluster, rebalance, and NEB reward were given plain-language explanations where they appeared. Proactive tooltips and inline help surfaced the right information at the moment users needed it, without cluttering the interface.',
      image: img('2.png'),
      caption: 'Contextual explanations for DeFi terminology reduced the knowledge required to participate.',
    },
  ],
  outcomes: [
    {
      emphasis: 'The interface became significantly more approachable for non-expert users.',
      body: 'The redesigned flows made cluster mechanics, rebalancing behavior, and get/redeem choices legible for users who lacked deep DeFi knowledge. The product was on track for a strong launch before external events intervened.',
    },
    {
      emphasis: 'Terra\'s ecosystem collapse suspended the project before release.',
      body: 'When UST lost its $1 peg and LUNA hyperinflated in May 2022, the entire Terra ecosystem became unsustainable. Nebula Protocol, built on Terra\'s infrastructure, was suspended before it could launch — not because of product issues, but because the underlying network collapsed.',
    },
  ],
  learnings: [
    {
      title: 'Good UX can make advanced financial mechanics approachable — but market context still matters.',
      body: 'The interface work was progressing well, but it could not change the fact that the product was built on infrastructure that failed. Strong UX is a necessary ingredient, but it is not a substitute for a sustainable foundation.',
    },
    {
      title: 'Clear microcopy and decision support are critical when users are taking real financial risk.',
      body: 'In products where users are committing real money, interface clarity is not optional. Confusion about mechanics, risk, or outcomes is not just a usability problem — it is a financial harm problem. The design has a responsibility to explain, not just enable.',
    },
  ],
}
