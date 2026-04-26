import type { RichCaseStudy } from './richCaseStudy'

const imageModules = import.meta.glob('../assets/initia-multisig/*.{png,jpg,jpeg,webp}', {
  eager: true,
  import: 'default',
}) as Record<string, string>

const byName = Object.fromEntries(
  Object.entries(imageModules).map(([path, src]) => [path.split('/').pop() ?? path, src]),
)
const img = (name: string) => byName[name] ?? ''

export const initiamultisigCaseStudy: RichCaseStudy = {
  slug: 'initia-multisig',
  heroImage: {
    src: img('1.png'),
    alt: 'Initia MultiSig interface showing the account creation and proposal management screens.',
  },
  heroDetails: {
    subtitle: '2024 / Wallet & Governance Tool',
    facts: [
      { label: 'Category', value: 'Multiple Signature Contract' },
      { label: 'Date', value: 'October 1, 2024' },
      { label: 'Role', value: 'UX/UI Designer' },
      { label: 'Company', value: 'Initia Labs' },
    ],
    duration: ['2 months'],
    methods: [
      'User Interview',
      'User Journey Map',
      'User Flow Diagram',
      'Information Architecture',
      'Hi-Fidelity Design',
      'Interactive Prototypes',
      'Guerrilla Test',
      'User Stories',
      'Acceptance Testing',
    ],
    team: [
      '2x UX/UI Designer (Me + mentee)',
      '2x Front-End Developers',
      '1x Back-End Developer',
      '1x Product Manager',
    ],
  },
  summary: [
    {
      emphasis: 'High-quality multisig mockups delivered in one week.',
      body: 'Stakeholder requirements demanded functional, polished mockups in under a week. By relying on the existing design system and clearly defining states upfront, the first iteration shipped without sacrificing quality or consistency.',
    },
    {
      emphasis: 'The design made collaborative account management legible for all users.',
      body: 'Multisig accounts involve multi-stage workflows — creating accounts, proposing transactions, casting votes, and executing approvals. The design made each stage transparent and approachable without oversimplifying the mechanics.',
    },
    {
      emphasis: 'The project doubled as a mentorship opportunity.',
      body: 'After the initial direction was set and approved, I transitioned ownership to another designer and shifted into a mentorship role — an intentional choice that kept delivery moving while supporting team growth.',
    },
  ],
  background:
    'Initia MultiSig is a core Web3 tool that allows users to create shared accounts requiring multiple owner approvals before any action can execute. It is designed for DAOs, teams, and collaborative projects where unilateral control is unacceptable. As Initia prepared for its mainnet launch, multisig support was a baseline expectation for the ecosystem.',
  motivation: [
    'Multisig wallets are a well-understood primitive in blockchain, but many implementations feel intimidating — especially for users who are new to on-chain governance. As Initia expanded toward mainnet, providing a multisig tool that was both secure and approachable became a priority.',
    'I was brought in from the start to lead the design direction, with a goal of shipping polished mockups quickly while maintaining a high standard of quality.',
  ],
  role: [
    'I led the initial design phases — working with stakeholders to define requirements, aligning on the user journey, and setting up the foundational design framework.',
    'I delivered the first complete set of mockups within one week, incorporating all primary flows into the design system with full state coverage.',
    'After approval, I transitioned project ownership to a newer designer and moved into a mentorship role — guiding their work while stepping back from direct execution.',
  ],
  research: {
    image: img('2.png'),
    quote:
      'Multisig is a well-established pattern — but the main design challenge was making the voting threshold, proposal lifecycle, and execution flow feel transparent rather than opaque.',
    bullets: [
      'Reviewed existing multisig implementations on other networks to understand familiar patterns users would bring as expectations.',
      'Mapped the core user journey: create account → assign members → set threshold → propose → vote → execute.',
      'Identified the highest-risk friction points: threshold communication, vote state visibility, and proposal expiry logic.',
    ],
    quotes: [
      'People understand the concept of needing multiple approvals. The design challenge is making them confident at each step that the system is doing what they expect.',
    ],
  },
  painPoints: [
    {
      title: 'Functional mockups needed in under one week',
      body: 'Stakeholder requirements were clear: the first iteration had to be high-quality and complete within about one week. This left no room for extended exploration or wireframing — decisions had to be made quickly and confidently from the start.',
      image: img('3.png'),
      caption: 'The compressed timeline demanded confident design decisions and full state coverage from day one.',
    },
    {
      title: 'Multi-stage flows that could easily feel opaque',
      body: 'The multisig workflow spans several distinct phases — account setup, proposal submission, voting, and execution — each with its own state and requirements. Users who lost track of where they were in the process, or what was needed next, would lose confidence quickly.',
      image: img('4.png'),
      caption: 'Each phase needed to clearly communicate its state, what action was needed, and what came next.',
    },
    {
      title: 'Bridging experienced Web3 users and newcomers',
      body: 'Some users would arrive with experience from other multisig tools and strong mental models. Others would be using shared on-chain accounts for the first time. The design had to work for both without treating either group as the exception.',
      image: img('5.png'),
      caption: 'Familiar patterns for experienced users, clear guidance for newcomers — both in the same interface.',
    },
  ],
  solutions: [
    {
      title: 'Transparent account setup with voting threshold clarity',
      body: 'The account creation flow made the relationship between member count and voting threshold immediately visible. Users could see — in plain language — how many approvals would be required before any proposal could execute, and adjust the threshold as they added members.',
      image: img('6.png'),
      caption: 'Voting threshold shown as a clear ratio throughout setup, not just at the end.',
    },
    {
      title: 'Proposal lifecycle with persistent status visibility',
      body: 'Each proposal displayed its current voting status — how many votes it had received, how many were needed, and who had voted — at all times. The proposal detail page made the gap between current and required votes impossible to miss.',
      image: img('7.png'),
      caption: 'Proposal status and voting progress visible at a glance throughout the lifecycle.',
    },
    {
      title: 'Straightforward execution with no ambiguity',
      body: 'Once a proposal reached its threshold, any member could execute it. The interface made this clearly available without requiring any understanding of which specific member should act. Expired proposals showed their status plainly rather than disappearing without explanation.',
      image: img('2.png'),
      caption: 'Execution was a single clear action available to any eligible member after approval.',
    },
  ],
  outcomes: [
    {
      emphasis: 'First iteration delivered in one week without quality compromise.',
      body: 'By committing to the design system early and defining all states upfront, the team shipped complete, consistent mockups on the stakeholder timeline. The output was praised for its polish given the speed of delivery.',
    },
    {
      emphasis: 'The project created a strong mentorship outcome alongside delivery.',
      body: 'Transitioning ownership after the initial direction was set gave a newer designer the opportunity to grow through a real project with meaningful scope. The mentor role kept delivery on track while building team capability.',
    },
  ],
  learnings: [
    {
      title: 'Fast design can still be high quality when the system is ready.',
      body: 'Speed and quality are not opposites — they are managed through preparation. A well-built design system and clear state definitions at the start made it possible to work quickly without accumulating design debt.',
    },
    {
      title: 'Mentorship can be part of delivery, not separate from it.',
      body: 'Handing ownership to another designer is not a risk to delivery when the foundation is clear enough for them to build on. Structured mentorship within a real project produces better results than practice assignments.',
    },
  ],
}
