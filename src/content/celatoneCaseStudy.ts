const celatoneImageModules = import.meta.glob('../assets/Celatone/*.{png,jpg,jpeg,webp}', {
  eager: true,
  import: 'default',
}) as Record<string, string>

const celatoneImagesByName = Object.fromEntries(
  Object.entries(celatoneImageModules).map(([path, src]) => [path.split('/').pop() ?? path, src]),
)

function getCelatoneImage(name: string) {
  return celatoneImagesByName[name] ?? ''
}

const heroImage = getCelatoneImage('1.png')
const researchImage = getCelatoneImage('2.png')
const painDevModeImage = getCelatoneImage('3.png')
const painUseCasesImage = getCelatoneImage('4.png')
const painFinderImage = getCelatoneImage('5.png')
const painValidationImage = getCelatoneImage('6.png')
const painQueryImage = getCelatoneImage('7.png')
const journeyImage = getCelatoneImage('8.png')
const sitemapImage = getCelatoneImage('9.png')
const solutionNavImage = getCelatoneImage('10.png')
const solutionStepperImage = getCelatoneImage('11.png')
const solutionValidationImage = getCelatoneImage('12.png')
const solutionQueryImage = getCelatoneImage('13.png')
const usabilityImage = getCelatoneImage('14.png')
const developmentImage = getCelatoneImage('15.png')
const socialImage1 = getCelatoneImage('16.png')
const socialImage2 = getCelatoneImage('17.png')
const socialImage3 = getCelatoneImage('18.png')
const socialImage4 = getCelatoneImage('19.png')
const codeVerificationImage = getCelatoneImage('20.png')
const jsonSchemaImage = getCelatoneImage('21.png')
const easierInteractionImage = getCelatoneImage('22.png')
const proposalDetailsImage = getCelatoneImage('23.png')
const validatorDetailsImage = getCelatoneImage('24.png')
const poolDetailsImage = getCelatoneImage('25.png')
const nftDetailsImage = getCelatoneImage('26.png')
const acquisitionImage = getCelatoneImage('image.png')

export const celatoneCaseStudy = {
  heroImage: {
    src: heroImage,
    alt: 'Celatone contract details page showing smart contract deployment and interaction tools.',
  },
  heroDetails: {
    subtitle: '2022-2024 / Smart Contract Developer and Block Explorer',
    facts: [
      { label: 'Category', value: 'Developer Tools' },
      { label: 'Date', value: 'August 1, 2022' },
      { label: 'Role', value: 'UX/UI Designer' },
      { label: 'Company', value: 'Alles Labs' },
    ],
    duration: [
      '1st Release: 4 months',
      'Upgrade and Maintain: 2 years',
    ],
    methods: [
      'User Interview',
      'Contextual Inquiry',
      'User Journey Map',
      'User Flow Diagram',
      'Wireframes',
      'Information Architecture',
      'Hi-Fidelity Design',
      'Interactive Prototypes',
      'Usability Testing',
      'User Stories',
      'Acceptance Testing',
    ],
    team: [
      '2x UX/UI Designer (Me)',
      '3x Front-End Developers',
      '2x Back-End Developers',
      '1x Product Manager',
    ],
  },
  summary: [
    {
      emphasis: 'Celatone turned fragmented CosmWasm developer workflows into one clearer tool.',
      body: 'It gave developers one interface to deploy contracts, query and execute functions, and explore network data after Terra-era tools exposed painful fragmentation and poor usability.',
    },
    {
      emphasis: 'The product simplified the contract lifecycle from upload to monitoring.',
      body: 'Celatone streamlined uploading and instantiating contracts, querying and executing functions, checking network state, and quality-of-life features like bookmarking contracts and managing upgrades.',
    },
    {
      emphasis: 'The launch proved both usable and commercially meaningful.',
      body: "Usability tests reached a 94% task completion rate with 4.48/5 satisfaction, and the product grew into a default explorer across 15 networks before contributing to Initia Labs' acquisition.",
    },
  ],
  background:
    'Celatone is a smart-contract developer tool that allows users to deploy smart contracts through intuitive user interfaces, interact with deployed contracts to query and execute contract functions, and explore blocks, contracts, validators, and transactions across the network.',
  projectLinks: [
    { label: 'Landing Site', href: 'https://celat.one/' },
    { label: 'Wallet Requirement', href: '', note: 'Requires a Cosmos-network wallet.' },
  ],
  motivation: [
    "After the time at Terra working on Nebula Protocol, we kept watching how painful our smart contract developers' workflows were because of the poor developer experience in the available software.",
    'Instead of adapting to those usability problems, we built Celatone as a side project to tackle them ourselves, with the belief that these complicated workflows could be simplified through intuitive user interfaces.',
  ],
  role: [
    'I was involved from scratch as the lead designer, handling user interviews, contextual inquiry, as-is and to-be journeys, information architecture, wireframing, and hi-fi prototypes.',
    'We created an organized design system that allowed scalability and reusability, to the point where a new designer could become productive within a week.',
    'I frequently discussed technical feasibility with developers and aligned prioritized user stories with the product manager.',
    'I created developer tickets with user stories and acceptance criteria, then ran acceptance tests to ensure the implementation was complete.',
  ],
  research: {
    image: researchImage,
    quote:
      'We ran user interviews and contextual inquiry to define the current user journey, which involved several apps and created a fractured flow for users.',
    bullets: [
      'Interviews with both technical and non-technical users to identify repeated frustrations.',
      'Contextual inquiry to understand how smart contract developers actually moved through their day-to-day workflow.',
      'Competitor analysis to evaluate current tools and find opportunities for better findability, guidance, and visualization.',
    ],
    quotes: [
      'If I want to deploy my smart contracts, there are several features I need to use in the same manner every single time. I wonder if there are any ways to get through these features without switching context between many apps and features.',
      'Development tools should help things go smoothly. I found them becoming the things that devs need to handle instead.',
    ],
  },
  painPoints: [
    {
      title: 'Dev Mode: findability and discoverability issue',
      body: "Users had to download Terra Station to deploy a smart contract, but the contracts section remained hidden until they discovered how to enable Developer Mode. Even developers who knew the feature existed struggled to find it, and the documentation didn't explain how to activate it.",
      image: painDevModeImage,
      caption: 'The contract tools were hidden behind a developer mode that users had to discover on their own.',
    },
    {
      title: 'No sequence, just options',
      body: 'New users often did not understand that they needed to upload a file first and then instantiate the stored file. The UI only offered Upload and Instantiate, which did not explain the sequence or the meaning of each step.',
      image: painUseCasesImage,
      caption: 'Upload and instantiate appeared as parallel choices rather than one guided sequence.',
    },
    {
      title: 'Fragmented, disconnected experience',
      body: 'To continue after deployment, users had to open Terra Finder in another app, scroll through events, and search manually for a code ID. This became the most annoying touchpoint because it added extra interactions without solving anything through design.',
      image: painFinderImage,
      caption: 'Developers had to switch tools, scroll through logs, and manually hunt for the code ID.',
    },
    {
      title: 'Non-specific UX writing and weak input validation',
      body: 'Both new and advanced users struggled because inputs lacked guidance, required fields were not clearly marked, validation feedback was weak, and error messages were too vague to help fix mistakes.',
      image: painValidationImage,
      caption: 'The form exposed fields without enough guidance, guardrails, or useful recovery feedback.',
    },
    {
      title: 'Poor guidance after instantiation',
      body: 'After instantiating the contract, developers needed to query it to verify functionality, but the interface did not guide them toward the next action. Users had to navigate away, copy an address, and rely on recall instead of recognition to find the right functions.',
      image: painQueryImage,
      caption: 'Even after deployment, the next step still depended on copying addresses and recalling functions.',
    },
  ],
  journeyImage,
  sitemapImage,
  solutions: [
    {
      title: 'Make high-level navigation and main use cases highly visible',
      body: 'Celatone made key features like Deploy Contract and Query easy to find through the Developer Tools section and dashboard shortcuts. For deployment, it supported both uploading a new WASM file and reusing existing Code IDs, covering the most common workflows clearly.',
      image: solutionNavImage,
      caption: 'Key developer actions became visible entry points instead of hidden expert-only tools.',
    },
    {
      title: 'Provide a stepper and smooth the path from upload to instantiate',
      body: 'The Upload WASM File flow used a stepper to make the process clear and sequential. After upload, users could verify code, attach JSON schema, or skip directly to instantiation with one click depending on how quickly they wanted to move.',
      image: solutionStepperImage,
      caption: 'A guided stepper made the sequence obvious and clarified the next action after upload.',
    },
    {
      title: 'Make every input clearer and validate it properly',
      body: 'The Instantiate Contract flow automatically selected the recently stored code, let users switch if needed, and added explicit validations for formats, required fields, and JSON structure. A network simulation checked the data before execution so users could catch problems early.',
      image: solutionValidationImage,
      caption: 'Clearer fields, validation, and simulation reduced avoidable errors before execution.',
    },
    {
      title: 'Make post-instantiation interaction immediate',
      body: 'After a contract was instantiated, the flow moved users directly into Query. Celatone automatically retrieved the available functions from the deployed contract and surfaced them clearly so users could recognize the right action without having to remember their code manually.',
      image: solutionQueryImage,
      caption: 'The next step became immediate, with available query functions surfaced right after deployment.',
    },
  ],
  usability: {
    image: usabilityImage,
    bullets: [
      '5 participants joined the study, including 3 smart contract developers from our side and 2 external developers from other companies.',
      'Average task completion rate reached 94% across 46 subtasks.',
      '24 subtasks were completed smoothly, 9 with friction, and 10 were skipped or completed through alternative paths.',
      'Only 3 subtasks were not completed, due to misunderstandings between participants and the tasks.',
      'Overall satisfaction averaged 4.48 out of 5.',
      'Participants tended to act quickly with minimal reading, which made the results especially useful for validating clarity and learnability.',
    ],
  },
  development: {
    image: developmentImage,
    paragraphs: [
      'After learning from usability tests, we made minor adjustments before launching the first version of Celatone with support for four networks. The release was highly successful, and users praised the interface for its accessibility and clarity.',
      'Post-launch, we kept expanding the feature set. Because the product combined multiple developer needs in one place, it became the default block explorer for several supported networks and eventually expanded to 15 networks across different VM types.',
    ],
    socialImages: [
      socialImage1,
      socialImage2,
      socialImage3,
      socialImage4,
    ],
  },
  improvements: [
    {
      title: 'Code Verification',
      body: 'Code verification improved transparency and credibility by allowing users to inspect linked source code for deployed contracts. This gave users more confidence that the contract was doing what it claimed to do.',
      image: codeVerificationImage,
      caption: 'Linked source code made deployed contracts easier to verify and trust.',
    },
    {
      title: 'JSON Schema Integration',
      body: 'JSON Schema reduced guesswork by providing a clearer interface for contract inputs. Users could see parameter labels and input types directly in the interface, which made contract interaction more accurate and less error-prone.',
      image: jsonSchemaImage,
      caption: 'Typed inputs and clearer labels reduced guesswork before users submitted interactions.',
    },
    {
      title: 'Contract Interactions',
      body: 'Celatone labeled functions, parameter fields, and outputs directly in the interface so users could understand what to enter and how to read the result. That made contract interaction easier to learn, easier to verify, and more trustworthy over time.',
      image: easierInteractionImage,
      caption: 'Structured functions, inputs, and outputs made contract interaction easier to understand at a glance.',
    },
  ],
  explorerFeatures: [
    {
      title: 'Proposal Details',
      body: 'Provides clear and detailed information about each proposal, including its purpose, current status, and real-time vote results.',
      image: proposalDetailsImage,
      href: 'https://dev.celat.one/osmosis-1/proposals',
    },
    {
      title: 'Validator Details',
      body: 'Helps users monitor validator performance, notice malicious activity, and make more informed delegation decisions.',
      image: validatorDetailsImage,
      href: 'https://dev.celat.one/osmosis-1/validators',
    },
    {
      title: 'Osmosis Pool Details',
      body: 'Introduced pool-specific visualizations for Osmosis liquidity pools, related transactions, and delegation behaviors.',
      image: poolDetailsImage,
      href: 'https://dev.celat.one/osmosis-1/pools/1',
    },
    {
      title: 'NFT Details',
      body: 'Displayed NFT collection details and recent activity such as mutations, transfers, and burns so users could stay updated on asset changes.',
      image: nftDetailsImage,
      href: 'https://dev.celat.one/initiation-2/nft-collections',
    },
  ],
  acquisition: {
    image: acquisitionImage,
    paragraph:
      'Our support for MOVE-based Cosmos networks brought Initia Labs to us. We built InitiaScan together, extending the developer experience further — and it led to the acquisition of Celatone, Alles Labs, and the whole team.',
  },
  learnings: [
    {
      title: 'Complex domains still have basic UX problems',
      body: 'We were designing for a technically complex domain, but the core user problems — hidden features, no sequential guidance, vague error messages — were completely standard. Keeping that framing helped us avoid over-designing for blockchain novelty and focus on what users actually needed.',
    },
    {
      title: 'Familiar patterns lower the barrier to new technology',
      body: 'Blockchain workflows looked intimidating until we mapped them to patterns developers already knew. Guided steppers, inline validation, and recognition over recall worked here exactly as they do anywhere else.',
    },
    {
      title: 'Usability became our product differentiator',
      body: 'In a space where most tools were painful to use, investing in clarity and guidance was strategy, not polish. The 94% task completion rate and positive social reception showed it paid off.',
    },
    {
      title: 'Usability testing surfaced what research could not predict',
      body: 'We learned that participants barely read task descriptions before acting. That behavior told us more about how to design for learnability than any interview had — and it shaped the clarity work that followed.',
    },
  ],
}
