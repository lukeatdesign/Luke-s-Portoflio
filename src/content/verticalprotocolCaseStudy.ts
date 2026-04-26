import type { RichCaseStudy } from './richCaseStudy'

const imageModules = import.meta.glob('../assets/vertical-protocol/*.{png,jpg,jpeg,webp}', {
  eager: true,
  import: 'default',
}) as Record<string, string>

const byName = Object.fromEntries(
  Object.entries(imageModules).map(([path, src]) => [path.split('/').pop() ?? path, src]),
)
const img = (name: string) => byName[name] ?? ''

export const verticalprotocolCaseStudy: RichCaseStudy = {
  slug: 'vertical-protocol',
  heroImage: {
    src: img('1.png'),
    alt: 'Vertical Protocol interface showing the margin trading dashboard with account health indicators and borrowing power display.',
  },
  heroDetails: {
    subtitle: '2022 / DeFi Margin Trading',
    facts: [
      { label: 'Category', value: 'DeFi' },
      { label: 'Date', value: 'September 1, 2022' },
      { label: 'Role', value: 'Lead UX/UI Designer' },
      { label: 'Company', value: 'Alles Labs' },
    ],
    duration: ['Design to implementation: 2 months', 'Project subsequently transferred'],
    methods: [
      'Information Architecture',
      'User Flow Diagram',
      'Hi-Fidelity Design',
      'Interactive Prototypes',
      'Usability Testing',
      'User Stories',
      'Acceptance Testing',
    ],
    team: [
      '2x UX/UI Designer (Me)',
      '1x UX Intern',
      '3x Front-End Developers',
      '3x Smart Contract Developers',
      '1x Engineering Manager',
      '1x Product Manager',
    ],
  },
  summary: [
    {
      emphasis: 'Vertical Protocol brought leveraged on-chain trading to sub-accounts.',
      body: 'The protocol let users trade and invest with leverage directly on-chain through sub-accounts linked to their Web3 wallets. It combined margin trading, borrowing, and leveraged liquidity providing in one system.',
    },
    {
      emphasis: 'A smart contract limitation forced a major design pivot.',
      body: 'The original design used a slider to communicate maximum allowable borrowing. When the smart contract could not calculate that maximum upfront, the design had to change — a lesson in designing honestly with constraints rather than against them.',
    },
    {
      emphasis: 'The product direction became stable despite the constraints.',
      body: 'The final design communicated leverage, risk, and position status more clearly than the original concept, with honest feedback about borrowing limits rather than misleading controls. The project was later transferred for strategic business reasons.',
    },
  ],
  background:
    'Vertical Protocol is an on-chain margin trading and liquidity provision platform. Users can create sub-accounts linked to their Web3 wallets to trade with leverage, borrow assets, and provide leveraged liquidity — all within a decentralized framework that mimics the flexibility of centralized exchange features while remaining fully on-chain.',
  motivation: [
    'I was involved from the beginning as the lead designer. The protocol introduced genuinely novel on-chain mechanics — sub-accounts, cross-asset borrowing power, and leveraged LP positions — that required careful interface thinking to make usable.',
    'The most interesting challenge was not the visual design but the interaction logic: how do you communicate dynamic financial risk in a way that builds confidence rather than creating anxiety?',
  ],
  role: [
    'I led design from the first sprint, working directly with the smart contract team to understand protocol mechanics and define interaction constraints.',
    'I built information architecture, use-case definitions, and high-fidelity prototypes alongside an organized design system using atomic design principles.',
    'I discussed technical feasibility with developers continuously, created developer tickets with user stories and acceptance criteria, and ran acceptance tests to verify implementation quality.',
  ],
  research: {
    image: img('2.png'),
    quote:
      'The hardest part of designing Vertical Protocol was not the visual layer — it was understanding the borrowing power formula well enough to design interactions that were honest about what the system could and could not do.',
    bullets: [
      'Worked through the borrowing power formula with the smart contract team to understand how asset values and risk factors combined.',
      'Mapped primary user journeys for deposit, withdrawal, trade, and liquidity provision.',
      'Identified the highest-risk moments in each flow — places where a wrong input could create a position the user did not intend.',
    ],
    quotes: [
      'I wanted to see a slider showing how much I could borrow. When I moved it, nothing made sense.',
    ],
  },
  painPoints: [
    {
      title: 'The smart contract could not calculate maximum borrow upfront',
      body: 'The original design intended to use a slider to show users their maximum allowable borrow amount — a clear, intuitive control. But the protocol\'s math required a user-provided input before it could determine the resulting impact on borrowing power. The design had to change to reflect this reality.',
      image: img('3.png'),
      caption: 'The slider concept assumed a pre-calculable maximum — a constraint the smart contract could not satisfy.',
    },
    {
      title: 'Borrowing power and liquidation risk were difficult to interpret',
      body: 'Users needed to understand their current borrowing power, how it would change with a new position, and what threshold would trigger liquidation. These were not easy concepts even for experienced DeFi users — and the early designs presented them without enough context.',
      image: img('4.png'),
      caption: 'Borrowing power displays needed context and visual hierarchy to be interpretable under pressure.',
    },
    {
      title: 'DeFi newcomers needed more explanation than the early design provided',
      body: 'Usability testing confirmed that users new to leveraged DeFi required additional guidance around margin risks, borrow limits, and liquidation thresholds. The initial interface served experienced users reasonably well but left newcomers behind.',
      image: img('5.png'),
      caption: 'Newcomers needed more guidance around the consequences of margin positions and borrowing decisions.',
    },
  ],
  solutions: [
    {
      title: 'Honest input with real-time borrowing power feedback',
      body: 'Without a pre-calculated maximum, the interface was redesigned around text input with immediate feedback. As users entered an amount, the borrowing power display updated in real time — showing whether the transaction would be permitted and what would change in their account health.',
      image: img('6.png'),
      caption: 'Real-time borrowing power feedback replaced the misleading slider with honest, accurate information.',
    },
    {
      title: 'Color-coded account health and liquidation risk indicators',
      body: 'Strategic use of color communicated account health, liquidation proximity, and margin safety across the interface. Green for safe, amber for caution, red for liquidation risk — consistent across all views so users could read their position state at a glance.',
      image: img('7.png'),
      caption: 'Consistent color coding made position health and liquidation risk immediately readable.',
    },
    {
      title: 'Visible sub-account structure for cleaner position management',
      body: 'Sub-accounts were surfaced clearly in the interface, giving users a legible structure for managing separate strategies. Each sub-account showed its own health, open positions, and borrowing status — making the CEX-like model understandable without requiring prior knowledge of it.',
      image: img('8.png'),
      caption: 'Sub-account structure displayed clearly to support separate strategy management.',
    },
  ],
  outcomes: [
    {
      emphasis: 'The design direction handled the protocol\'s complexity more honestly than the original concept.',
      body: 'Users could complete primary tasks in usability testing, and the interface communicated leverage, risk, and position status clearly. Identified issues around constraint communication were documented for post-launch iteration.',
    },
    {
      emphasis: 'The project was transferred and later suspended for strategic business reasons.',
      body: 'Despite a strong product vision and a well-considered design direction, the project was transferred to another team and eventually suspended. The work stands as documentation of an ambitious approach to on-chain margin trading UX.',
    },
  ],
  learnings: [
    {
      title: 'Sometimes the right UX move is to remove a control the system cannot support honestly.',
      body: 'The slider was a good idea that the underlying protocol could not deliver. Keeping it would have misled users. Removing it and replacing it with honest feedback was the harder call but the right one.',
    },
    {
      title: 'Financial products need feedback clarity more than decorative sophistication.',
      body: 'The most valuable design decisions in Vertical Protocol were about feedback timing, color semantics, and information hierarchy — not visual style. When money is at stake, clarity is the product.',
    },
  ],
}
