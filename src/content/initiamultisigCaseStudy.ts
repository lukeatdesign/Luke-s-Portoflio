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
    src: img('image.png'),
    alt: 'Initia MultiSig overview showing the collaborative wallet interface and supporting workflow references.',
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
      'Acceptance Testing',
      'Guerrilla Test',
      'Hi-Fidelity Design',
      'Information Architecture',
      'Interactive Prototypes',
      'User Flow Diagram',
      'User Interview',
      'User Journey Map',
      'User Stories',
    ],
    team: [
      '2x UX/UI Designer (Me)',
      '2x Front-End Developers',
      '1x Back-End Developers',
      '1x Product Manager',
    ],
  },
  summary: [
    {
      emphasis:
        'Initia Multisig is designed as a core tool for Web3 users, allowing them to create accounts with multiple owners.',
      body:
        'It works similarly to juristic or collaborative accounts, supporting secure, decentralized decision-making for organizations, DAOs, or collaborative projects.',
    },
    {
      emphasis: 'The first iteration had to be functional and user-friendly within just one week.',
      body:
        'By incorporating all UI elements into the design system and clearly defining the states of each flow, the initial set of mockups was delivered quickly without compromising quality or standards.',
    },
    {
      emphasis: 'The design focused on clarity of information, streamlined interactions, and accessibility for all users.',
      body:
        'It followed familiar patterns from other multisig solutions so users transitioning from other networks could feel at home, while still remaining approachable for newcomers.',
    },
  ],
  background:
    'Initia Multisig is designed as a core tool for Web3 users, allowing them to create accounts with multiple owners, similar to juristic or collaborative accounts. As Initia prepared for its mainnet launch, providing a multisig option became essential to meet the expectations of users familiar with similar solutions on other blockchain networks. By supporting shared account management, Initia Multisig enables secure, decentralized decision-making for organizations, DAOs, or collaborative projects.',
  motivation: [
    'This project originated from the core team, starting with smart contract development. Due to stakeholder requirements, we needed to create functional and user-friendly mockups within just one week.',
    'Although the UI design was not overly complex, the bar for the first delivery was high. We quickly developed the initial set of mockups without compromising quality or standards, and were proud to deliver such high-quality work in a very short time.',
  ],
  role: [
    'I was involved in the Initia Multisig project from the start, leading the initial phases to align with stakeholder expectations and define key requirements.',
    'During the first few weeks, I worked closely with stakeholders and the other designer to shape the project direction and set up the foundational design framework.',
    'After securing approval, I transitioned the project ownership to a new designer, stepping back into a mentorship role and providing guidance so the new designer could take full charge and grow through the process.',
  ],
  painPoints: [
    {
      title: 'Only a week for the first iteration',
      body:
        'Stakeholder requirements meant the team needed functional and user-friendly mockups in just one week. The challenge was not only speed, but making sure the work still held up in quality, consistency, and state definition.',
      image: img('image 1.png'),
      caption:
        'The first iteration had to move fast while still feeling complete and trustworthy to stakeholders.',
    },
    {
      title: 'The workflow spans several stages that can easily become opaque',
      body:
        'Users need to create a multisig account, assign members, set a voting threshold, propose actions, cast votes, and execute approved proposals. Without enough clarity at each step, the whole experience could quickly feel intimidating.',
    },
    {
      title: 'The product had to work for both experienced Web3 users and newcomers',
      body:
        'Multisig is already a familiar concept to many blockchain users, so the interface needed to respect those expectations. At the same time, the product still had to be understandable for people using this kind of collaborative on-chain account for the first time.',
      image: img('image 6.png'),
      caption:
        'The design had to bridge familiar multisig patterns with a clearer, more approachable first-use experience.',
    },
  ],
  solutions: [
    {
      title: 'Create and assign accounts with a visible voting threshold',
      body:
        'Users can create a multisig account, assign members, and set a voting threshold. During setup, they define the minimum number of approvals required for a proposal to pass, ensuring no single member can act unilaterally and adding a clear layer of collaborative control.',
      image: img('image 2.png'),
      caption:
        'Account setup makes member assignment and approval threshold visible from the beginning.',
    },
    {
      title: 'Propose transactions in a way that supports real operations',
      body:
        'Once the account is established, any member can create and submit proposals for actions the group needs to approve. For the first release, proposals included sending assets, executing MOVE custom messages, and interacting with modules through execute functions.',
      image: img('image 3.png'),
      caption:
        'Proposal creation was designed to support the first-release actions without overcomplicating the flow.',
    },
    {
      title: 'Cast votes with clear proposal detail and voting status',
      body:
        'When a proposal is submitted, all members are notified to review it and cast votes directly in the interface. The proposal page provides a detailed breakdown of the action, the required voting threshold, and the current voting status, so members can make decisions with confidence.',
      image: img('image 4.png'),
      caption:
        'Proposal detail and vote status stay visible so every member can understand the decision in context.',
    },
    {
      title: 'Execute approved proposals without ambiguity',
      body:
        'Once a proposal receives the required number of votes, any member of the multisig account can execute the transaction securely and efficiently. If the proposal fails to reach the voting threshold within a specified period, it expires, preserving the integrity and security of the account.',
      image: img('image 5.png'),
      caption:
        'Execution is straightforward once approval is reached, and expiry is handled transparently when thresholds are not met.',
    },
    {
      title: 'Keep the entire system visually clear and familiar',
      body:
        'The design approach focused on clarity of information, streamlined interactions, and accessibility for all users. We avoided flashy or overly complex UI, instead following familiar patterns from other multisig solutions so the experience would feel legible at a glance for advanced users and approachable for newcomers.',
      image: img('image 6.png'),
      caption:
        'The visual system stayed direct and familiar so the workflow mechanics remained the focus.',
    },
  ],
  outcomes: [
    {
      emphasis: 'The team delivered a polished first iteration within an extremely short timeline.',
      body:
        'Even with only a week for the first pass, the mockups stayed functional, user-friendly, and aligned with a high design standard because the states and system were defined clearly up front.',
    },
    {
      emphasis: 'The design made the common multisig journey much easier to understand.',
      body:
        'Create account, propose action, cast votes, and execute approval were all framed as transparent steps, helping the product feel less intimidating without losing the logic of the underlying system.',
    },
    {
      emphasis: 'The project also created space for mentorship and team growth.',
      body:
        'Once the direction was approved, ownership could transition to a newer designer while the project kept moving, turning the work into both a delivery success and a learning opportunity inside the team.',
    },
  ],
  learnings: [
    {
      title: 'Clear state definition makes fast work possible',
      body:
        'The one-week first iteration worked because the flows and states were thought through early. Speed did not come from cutting corners, but from making the design system and workflow structure do more of the heavy lifting.',
    },
    {
      title: 'Familiar patterns matter when users bring expectations from other tools',
      body:
        'Multisig is already a known concept in Web3. Matching familiar interaction patterns while improving clarity is often more useful than trying to invent a new visual language for its own sake.',
    },
    {
      title: 'Mentorship can be part of the delivery model',
      body:
        'Transitioning ownership after approval showed that delivery and mentoring do not need to be separate tracks. A strong foundation can create room for both high-quality output and team growth.',
    },
  ],
}
