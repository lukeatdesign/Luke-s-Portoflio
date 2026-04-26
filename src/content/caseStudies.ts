import celatoneThumbnail from '../assets/Celatone/image.png'
import initiascanThumbnail from '../assets/case_studies_thumbnails/Initia_scan.png'
import multisigThumbnail from '../assets/case_studies_thumbnails/initia_multisig.png'
import weaveThumbnail from '../assets/case_studies_thumbnails/weave.png'
import nebulaThumbnail from '../assets/case_studies_thumbnails/nebula.png'
import verticalThumbnail from '../assets/case_studies_thumbnails/vertical.png'
import rentThumbnail from '../assets/case_studies_thumbnails/rent_payment.png'
import alphaThumbnail from '../assets/case_studies_thumbnails/alphahomorav2.png'
import markrThumbnail from '../assets/case_studies_thumbnails/markr.png'
import ladderThumbnail from '../assets/case_studies_thumbnails/ladder.png'

export type CaseStudy = {
  slug: string
  title: string
  kicker: string
  meta: string
  duration: string
  role: string
  summary: string
  thumbnail: string
  tags: string[]
  highlights: string[]
  contextTitle: string
  contextSummary: string
  challengeTitle: string
  challengePoints: string[]
  approachTitle: string
  approachPoints: string[]
  outcomeTitle: string
  outcomePoints: string[]
  learningTitle: string
  learningPoints: string[]
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'celatone',
    thumbnail: celatoneThumbnail,
    title: 'Celatone',
    kicker: 'Developer Tools',
    meta: 'Alles Labs - 2022-2024',
    duration: 'First release in 4 months, then upgraded and maintained for 2 years.',
    role: 'UX/UI Designer working full-loop from research to acceptance testing.',
    summary:
      'Became the default block explorer across multiple Cosmos networks — leading design from 0→1 through a two-year run and team acquisition by Initia Labs.',
    tags: ['Desktop', 'Mobile', 'Developer Tools', 'Blockchain Infra'],
    highlights: [
      '94% task completion rate in usability testing.',
      'Adopted across 15 networks over time.',
      'Combined smart contract tooling with explorer functionality.',
    ],
    contextTitle: 'A better developer experience for CosmWasm networks',
    contextSummary:
      'The project came from first-hand exposure to painful contract deployment and contract interaction flows inside the Terra ecosystem. Developers were forced across multiple tools, unclear UI copy, and fragmented block explorer journeys just to publish, instantiate, and verify contracts.',
    challengeTitle: 'The product had to reduce deep workflow friction',
    challengePoints: [
      'Key contract actions were hidden behind poor discoverability and confusing terminology.',
      'Developers needed to move across several apps just to complete a single workflow.',
      'Forms lacked guidance, input validation, and specific error feedback.',
    ],
    approachTitle: 'I designed around end-to-end developer journeys instead of isolated screens',
    approachPoints: [
      'Ran interviews and contextual inquiry with internal smart contract developers to document as-is and to-be journeys.',
      'Built information architecture, wireframes, prototypes, design system foundations, and user stories in close collaboration with engineers.',
      'Turned advanced blockchain actions into guided, visual workflows with better findability and structured output.',
    ],
    outcomeTitle: 'The result proved that usability could be a real product differentiator',
    outcomePoints: [
      'Usability tests validated the product with a 94% task completion rate and strong satisfaction.',
      'Celatone expanded beyond contract tooling into a broader explorer that users praised for structure and clarity.',
      'Its success directly supported the acquisition of the product and team by Initia Labs.',
    ],
    learningTitle: 'This project sharpened my product thinking',
    learningPoints: [
      'New technology does not excuse confusing UX; unfamiliar domains still benefit from familiar interaction models.',
      'Usability can be a flagship feature when the product category is otherwise painful to use.',
    ],
  },
  {
    slug: 'initiascan',
    thumbnail: initiascanThumbnail,
    title: 'InitiaScan',
    kicker: 'Developer Tools',
    meta: 'Alles Labs / Initia Labs - 2023-2024',
    duration: 'First release in 2 months, then maintained and expanded.',
    role: 'UX/UI Designer across research, IA, prototyping, ticketing, and acceptance testing.',
    summary:
      'Launched successfully in January, InitiaScan has become a valuable tool for developers, praised for its usability and seamless updates within the Initia ecosystem.',
    tags: ['Desktop', 'Mobile', 'Developer Tools', 'Blockchain Infra'],
    highlights: [
      'Built under a compressed timeline before public launch.',
      'Restructured explorer information for MOVE-specific resource behaviors.',
      'Received strong internal usability feedback before launch.',
    ],
    contextTitle: 'A custom explorer for a technically different blockchain model',
    contextSummary:
      "Existing explorer patterns did not map cleanly onto Initia's MOVE module architecture. The challenge was to preserve the friendliness of earlier tooling work while rethinking how state, resources, and interactions should be displayed.",
    challengeTitle: 'The main difficulty was translating MOVE into understandable UX',
    challengePoints: [
      'MOVE behaves differently from Solidity or CosmWasm, especially around state and resource ownership.',
      'The product had to feel familiar to experienced blockchain users while still teaching a new mental model.',
      'The timeline allowed only a small number of usability sessions before launch.',
    ],
    approachTitle: 'I reused what worked, then redesigned what the paradigm demanded',
    approachPoints: [
      'Started from patterns learned on Celatone, then restructured data presentation for resource-oriented logic.',
      'Designed clearer resource views, terminology, and navigation to reduce cognitive overload.',
      'Worked with developers and stakeholders to keep information architecture aligned with the underlying module behavior.',
    ],
    outcomeTitle: 'The launch balanced speed and quality well',
    outcomePoints: [
      'Usability testing showed that module publishing, resource navigation, and feedback systems were generally intuitive.',
      'Minor issues around wallet prompts and feedback prominence were identified and improved before launch.',
      'InitiaScan shipped successfully in January 2024 and became a valuable tool inside the Initia ecosystem.',
    ],
    learningTitle: 'The project reinforced a few important habits',
    learningPoints: [
      'Understanding technical architecture deeply is essential when the interface has to explain unfamiliar concepts.',
      'Well-established UI patterns can still be the right choice when timelines are tight and clarity matters most.',
    ],
  },
  {
    slug: 'initia-multisig',
    thumbnail: multisigThumbnail,
    title: 'Initia MultiSig',
    kicker: 'Wallet / Governance Tool',
    meta: 'Initia Labs - 2024',
    duration: '2 months.',
    role: 'Led the early design direction, then transitioned into mentorship for another designer.',
    summary:
      'Delivered high-quality multisig wallet mockups in one week — shaping the collaborative account pattern for the Initia ecosystem while mentoring another designer through handoff.',
    tags: ['Desktop', 'Mobile', 'Multisig', 'Blockchain Infra'],
    highlights: [
      'Initial functional mockups delivered within one week.',
      'Focused on secure shared account workflows and voting clarity.',
      'Used mentorship as part of the project handoff.',
    ],
    contextTitle: 'A core wallet primitive for collaborative decision-making',
    contextSummary:
      'As Initia prepared for mainnet, multisig support was a baseline expectation for DAOs, teams, and collaborative accounts. The product needed to explain account creation, proposal flows, voting, and execution without making the process feel intimidating.',
    challengeTitle: 'Speed and clarity were the defining constraints',
    challengePoints: [
      'The team needed high-quality mockups in about one week for stakeholder alignment.',
      'The user journey involved multiple stages that could easily become opaque for less experienced Web3 users.',
      'The design had to feel familiar to users coming from other multisig tools without becoming generic or confusing.',
    ],
    approachTitle: 'I treated the flow as a sequence of transparent decisions',
    approachPoints: [
      'Mapped the common journey from account setup to proposal creation, voting, and execution.',
      'Focused on direct, unflashy interactions that reduce ambiguity and explain voting thresholds clearly.',
      'Established a design framework early, then mentored another designer to continue the project confidently.',
    ],
    outcomeTitle: 'The product direction became stable quickly',
    outcomePoints: [
      'The first iteration landed quickly without sacrificing consistency or system quality.',
      'The design framed multisig behavior in a way that was approachable for both experienced and newer Web3 users.',
      'The project also created a strong mentorship opportunity while keeping delivery moving.',
    ],
    learningTitle: 'The work highlighted the value of strong early framing',
    learningPoints: [
      'Fast design can still be high quality when states, flows, and components are defined clearly.',
      'Mentorship can be part of delivery, not separate from it, when the design system is strong enough to support handoff.',
    ],
  },
  {
    slug: 'weave-cli',
    thumbnail: weaveThumbnail,
    title: 'Weave CLI',
    kicker: 'Developer Tools',
    meta: 'Initia Labs - 2024',
    duration: '2 months.',
    role: 'UX/UI Designer shaping TUI flows and interaction principles.',
    summary:
      'Turned a complex rollup creation process into a guided, keyboard-first CLI — applying interface design thinking to a terminal product where most teams skip the UX work entirely.',
    tags: ['Desktop', 'CLI', 'TUI', 'Developer Tools', 'Blockchain Infra'],
    highlights: [
      'Designed specifically for keyboard-first power users.',
      'Turned documentation-heavy operations into guided flows.',
      'Explored unusual CLI affordances like tutorial mode and undo.',
    ],
    contextTitle: 'Making rollup setup less fragmented and more teachable',
    contextSummary:
      'Creating interwoven rollups required users to navigate complicated documentation and fragmented setup steps. The product goal was to keep the speed of a CLI while reducing confusion and preserving control.',
    challengeTitle: 'A CLI has fewer interaction tools but still needs clear UX',
    challengePoints: [
      'There is no mouse-based freedom or visual scaffolding like in a GUI.',
      'Users still need guidance, validation, and confidence while configuring complex systems.',
      'The interface must support both meaningful defaults and deep manual control.',
    ],
    approachTitle: 'I treated the TUI as a real interface system, not just terminal output',
    approachPoints: [
      'Mapped core user flows for running nodes, creating rollups, relayer setup, and bot management.',
      'Designed around clarity, feedback, efficiency, proactive help, and keyboard consistency.',
      'Proposed tutorial mode, better confirmation patterns, immediate validation, and even an undo concept to reduce fear of mistakes.',
    ],
    outcomeTitle: 'The project expanded what the team expected from CLI UX',
    outcomePoints: [
      'The resulting direction made a text-based workflow feel more guided and intentionally designed.',
      'Users could move through advanced configuration with clearer prompts and better mental models.',
      'The case study itself shows how interface thinking still matters in command-line environments.',
    ],
    learningTitle: 'This project proved that command line work deserves design rigor too',
    learningPoints: [
      'Consistency, clarity, and feedback matter just as much in a CLI as in a graphical UI.',
      'Power-user tools still benefit from progressive disclosure when the domain is complex enough.',
    ],
  },
  {
    slug: 'nebula-protocol',
    thumbnail: nebulaThumbnail,
    title: 'Nebula Protocol',
    kicker: 'DeFi',
    meta: 'Alles Labs - 2022',
    duration: 'Design and development over 3 months before the project was halted.',
    role: 'UX/UI Designer inheriting an earlier design direction and improving comprehension.',
    summary:
      'Made decentralized index investing feel approachable — simplifying cluster mechanics, rebalancing flows, and risk communication for everyday DeFi users.',
    tags: ['Desktop', 'Mobile', 'DeFi'],
    highlights: [
      'Made indexed-asset mechanics easier to understand for everyday investors.',
      'Simplified "Get" and "Redeem" flows while preserving flexibility.',
      "Project stopped because of Terra's collapse, not because of product fit.",
    ],
    contextTitle: 'A DeFi product that needed to feel less intimidating',
    contextSummary:
      'Nebula bundled on-chain assets into rebalancing clusters so users could get diversified crypto exposure with less manual management. The UX challenge was turning complicated protocol mechanics into something that felt safer, simpler, and more legible.',
    challengeTitle: 'Users needed confidence around abstract financial mechanics',
    challengePoints: [
      'The inherited designs prioritized functionality over comprehension, which created confusion.',
      'Users had to understand clusters, get and redeem mechanics, arbitrage, and rebalancing incentives.',
      'The category itself carries fear and volatility, so wording and visualization mattered a lot.',
    ],
    approachTitle: 'I pushed for stronger guidance, copy, and explanation',
    approachPoints: [
      'Reframed actions into more approachable labels and clearer trading decisions.',
      'Focused on microcopy, proactive help, and information visualization so users could understand value movement and cluster structure.',
      'Collaborated closely with developers and product to align feasibility with clarity.',
    ],
    outcomeTitle: 'The concept became much easier to approach',
    outcomePoints: [
      'The case study shows a cleaner explanation of clusters, dynamic rebalancing, and trading choices.',
      'Design improvements made the product more comprehensible for people who lacked time to study each asset deeply.',
      "The product was suspended only after Terra's ecosystem collapse made the underlying network unsustainable.",
    ],
    learningTitle: 'It was a sharp lesson in both UX and market risk',
    learningPoints: [
      'Good UX can make advanced financial mechanisms far more approachable, but product context still matters.',
      'Clear microcopy and decision support are critical when people are taking real financial risk.',
    ],
  },
  {
    slug: 'vertical-protocol',
    thumbnail: verticalThumbnail,
    title: 'Vertical Protocol',
    kicker: 'DeFi',
    meta: 'Alles Labs - 2022',
    duration: '2 months from design through implementation handoff before transfer.',
    role: 'Lead designer working from protocol definition into high-fidelity product direction.',
    summary:
      'Redesigned a leveraged trading platform around honest feedback and risk clarity — cutting through protocol constraints to create a safer, more readable margin experience.',
    tags: ['Desktop', 'Mobile', 'Margin Trading', 'DeFi'],
    highlights: [
      'Combined trading, borrowing, and liquidity providing in one system.',
      'Redesigned around feedback and constraints when protocol math limited the UI.',
      'Created clearer account health and borrowing visibility.',
    ],
    contextTitle: 'A leverage product that had to explain risk well',
    contextSummary:
      'Vertical Protocol offered sub-accounts, leveraged trading, and liquidity provision directly on-chain. The UX challenge was not just to make it functional, but to help people understand borrowing power, risk, and liquidation without getting lost.',
    challengeTitle: 'The hardest part was designing around technical constraints',
    challengePoints: [
      'The smart contract could not calculate maximum allowable amounts up front in the way the original UI hoped.',
      'Risk, leverage, and borrowing power are hard concepts for users to interpret quickly.',
      'Margin workflows need strong feedback loops to keep people from making expensive mistakes.',
    ],
    approachTitle: 'I shifted the experience toward clearer status and safer decision-making',
    approachPoints: [
      'Moved away from misleading slider expectations once protocol limits made them unreliable.',
      'Introduced clearer visual signifiers for account health, liquidation risk, and borrowing status.',
      'Focused the interface on feedback, hierarchy, and understandable color signals rather than visual complexity.',
    ],
    outcomeTitle: "The design direction handled the protocol's complexity more honestly",
    outcomePoints: [
      'Users could complete initial tasks, though testing showed the need for additional guidance around constraints and margin risk.',
      'The interface communicated leverage, risk, and position status more clearly than the earlier concepts.',
      'The project was later transferred and eventually suspended for business reasons, despite a strong product vision.',
    ],
    learningTitle: 'This was an important lesson in designing with constraints instead of against them',
    learningPoints: [
      'Sometimes the right UX move is to remove an appealing control once the underlying system cannot support it honestly.',
      'Financial products need feedback clarity more than decorative sophistication.',
    ],
  },
  {
    slug: 'rent-payment',
    thumbnail: rentThumbnail,
    title: 'Rent Payment on RentSpree',
    kicker: 'Payment Management',
    meta: 'RentSpree - 2021',
    duration: '3 months.',
    role: 'Product Designer focused on hi-fi ownership, delivery collaboration, and design review.',
    summary:
      'Shipped a rent payment feature from research to live product — tightening design-to-dev delivery and raising UX maturity across a fast-moving product org.',
    tags: ['Desktop', 'Mobile', 'PropTech'],
    highlights: [
      'Supported a flagship product area in the rental workflow.',
      'Used survey insights to validate assumptions under time pressure.',
      'Also helped raise UX maturity inside the company.',
    ],
    contextTitle: 'A real-world payments flow with old habits and modern expectations',
    contextSummary:
      'Rent payment in the US still relied on checks, in-person collection, and disconnected tools. RentSpree wanted to modernize that journey while moving quickly inside an active product organization.',
    challengeTitle: 'The team had to design under uncertainty and tight timelines',
    challengePoints: [
      'Initial assumptions were not well validated with users before design work moved forward.',
      'The product had to work reliably across desktop and mobile while fitting ongoing SCRUM delivery.',
      'Payment expectations include edge cases like late fees, rental changes, and trust in the flow.',
    ],
    approachTitle: 'I connected research, prototyping, and sprint collaboration more tightly',
    approachPoints: [
      'Launched a survey to gather clearer insight into the as-is payment journey and validate critical assumptions.',
      'Kept hi-fi design one to two sprints ahead of development so design stayed useful without drifting too far.',
      'Worked with developers on tickets, feasibility, and acceptance testing to keep implementation aligned.',
    ],
    outcomeTitle: 'The work helped both the feature and the organization',
    outcomePoints: [
      'The feature shipped successfully after some third-party related delays.',
      'The team improved communication between design and development during active delivery.',
      "Beyond the feature itself, I helped push the company's UX maturity forward through reviews, structure, and workflow thinking.",
    ],
    learningTitle: 'The case reinforced the value of operational design work',
    learningPoints: [
      'Good product work often depends as much on process alignment as on interface quality.',
      'A company that cares about UX can move much faster once design standards and review habits become more explicit.',
    ],
  },
  {
    slug: 'alpha-homora-v2',
    thumbnail: alphaThumbnail,
    title: 'Alpha Homora V2',
    kicker: 'DeFi Usability Revamp',
    meta: 'Alpha Finance Lab - 2021',
    duration: '1 month.',
    role: 'Solo UX/UI Designer auditing and redesigning a flagship DeFi product.',
    summary:
      'Diagnosed 30+ validated usability issues in a flagship DeFi product — bringing UX rigour to a leveraged yield farming platform as its first dedicated designer.',
    tags: ['Desktop', 'DeFi', 'Usability Revamp'],
    highlights: [
      'Joined as the first UX-focused designer in the company.',
      'Validated issues through independent evaluation and usability testing.',
      'Redesigned around better terminology, hierarchy, and constraints.',
    ],
    contextTitle: 'A powerful DeFi product with major usability debt',
    contextSummary:
      'The platform offered leveraged yield farming for crypto investors but carried serious usability issues around pool selection, leverage understanding, borrow power, and decision-making confidence.',
    challengeTitle: 'The product expected too much interpretation from users',
    challengePoints: [
      'Important labels and metrics lacked explanation, forcing users to decode APRs, TVL, leverage, and debt ideas on their own.',
      'Users had to bounce between steps to understand the consequences of their choices.',
      'Existing navigation and information architecture did not match user expectations in a DeFi context.',
    ],
    approachTitle: 'I reframed the experience around recognition and guided decision-making',
    approachPoints: [
      'Mapped the current journey and identified friction across pool selection, supplying, borrowing, and strategy confirmation.',
      'Proposed a cleaner sitemap, stronger signifiers, proactive help, clearer labels, and more useful summaries.',
      'Redesigned leverage steps to reduce cognitive load and make risk-related information easier to compare.',
    ],
    outcomeTitle: 'The redesign created a much stronger UX direction',
    outcomePoints: [
      'The company took the recommendations into development planning, especially for later ecosystem expansion.',
      'The work established UX as a real capability inside a team that had not previously prioritized it.',
      'The project became a strong example of how thoughtful structure can improve even advanced financial tools.',
    ],
    learningTitle: 'The assignment confirmed a recurring theme in my career',
    learningPoints: [
      'We cannot assume users will infer complex systems correctly just because they are motivated.',
      'Turning jargon into usable interaction language is often the most valuable part of the work.',
    ],
  },
  {
    slug: 'markr',
    thumbnail: markrThumbnail,
    title: 'Markr',
    kicker: 'Data Annotation Tool',
    meta: 'Backyard - 2020',
    duration: '2 months.',
    role: 'UX Designer revamping the product, supervising a visual designer, and shaping PO behavior.',
    summary:
      'Revamped a production data annotation tool — rebuilding interaction patterns around speed and accuracy, improving usability for both new labelers and expert power users.',
    tags: ['Desktop', 'Annotation', 'NLP'],
    highlights: [
      'Revamped an already-built product under deadline pressure.',
      'Balanced novice learnability with advanced-user hotkey efficiency.',
      'Introduced strong task-centered interaction patterns.',
    ],
    contextTitle: 'A production tool that had become hard to use',
    contextSummary:
      'Markr supported text labeling for machine learning training data, but the existing interface was cluttered, frustrating, and inefficient. The goal was not just to tidy the UI, but to make the labeling activity itself faster and more reliable.',
    challengeTitle: 'The interface fought the core task instead of supporting it',
    challengePoints: [
      'Users had to remember too many tags and deal with poor visual distinction between them.',
      'Tokenization issues and labeling workflows were not well reflected in the product interaction model.',
      'The old design failed both new users who needed guidance and advanced users who needed speed.',
    ],
    approachTitle: 'I designed around the activity itself, not just the screens',
    approachPoints: [
      'Interviewed labelers and data scientists to understand both workflow realities and output requirements.',
      'Applied activity-centered design thinking to optimize speed, accuracy, and cognitive flow.',
      'Rebuilt tag selectors, hotkey logic, and primary actions so the tool supported both recognition and expert efficiency.',
    ],
    outcomeTitle: 'The product became significantly more usable',
    outcomePoints: [
      'New users could understand the interface faster because the actions became more self-explanatory.',
      'Advanced users benefited from easier hotkeys and clearer tag organization.',
      "The redesign resolved many of the team's frustrations even without formal usability testing on every change.",
    ],
    learningTitle: 'This was an early proof point for the value of UX',
    learningPoints: [
      'Thoughtful UX can rescue a product that appears to be an engineering problem on the surface.',
      'A better process improves not only the output, but also team confidence and morale under pressure.',
    ],
  },
  {
    slug: 'ladder',
    thumbnail: ladderThumbnail,
    title: 'Ladder',
    kicker: 'Data Analytics Platform',
    meta: 'Backyard - 2019-2021',
    duration: '2 years and 11 months.',
    role: 'Solo UX/UI Designer working across analytics dashboards and back-office settings.',
    summary:
      'Redesigned a social analytics platform over 3 years — delivering measurable results, including 30% better accuracy and 40% faster task completion for analysts on the new interface.',
    tags: ['Desktop', 'Analytics', 'NLP'],
    highlights: [
      'Worked on the product for nearly three years.',
      'Bridged analyst needs, stakeholder vision, and data-science constraints.',
      'Improved outcomes despite an already messy product foundation.',
    ],
    contextTitle: 'Finding insight inside massive social media data',
    contextSummary:
      'Ladder parsed social data, ran NLP and sentiment analysis, and visualized the results for analysts and future business users. The product had promise, but early versions suffered from weak navigation, poor learnability, and charts that did not deliver real insight.',
    challengeTitle: 'The product had both UX debt and product-market ambiguity',
    challengePoints: [
      'Users needed to manage large keyword sets and complex filtering with too much manual effort.',
      'The original navigation and dashboard design demanded recall where recognition should have been enough.',
      'The team was iterating inside an evolving Scrum process without a stable information architecture.',
    ],
    approachTitle: 'I paired systems thinking with continuous iteration',
    approachPoints: [
      'Conducted interviews with analysts and stakeholders to uncover both immediate pain points and long-term ambitions.',
      'Used heuristic evaluation, flow diagrams, design studio sessions, wireframes, and hi-fi prototypes to move the product forward sprint by sprint.',
      'Redesigned key areas like keyword settings, dashboards, and post views using clearer patterns and stronger information foraging principles.',
    ],
    outcomeTitle: 'The product improved significantly, even if the market story was harder',
    outcomePoints: [
      'A newer analyst performed 30% better and 40% faster on the new interface compared with the old one.',
      'The redesigned workflows made the analytics product more understandable and actionable for users.',
      'Even so, the product later became inactive, teaching a hard lesson about market validation beyond interface quality.',
    ],
    learningTitle: 'Ladder left deep product lessons',
    learningPoints: [
      'Good design needs time, testing, and iteration; tight deadlines create real design debt.',
      'Even strong UX cannot replace the need for product-market fit and strong early research.',
    ],
  },
]
