const imageModules = import.meta.glob('../assets/initiascan/*.{png,jpg,jpeg,webp}', {
  eager: true,
  import: 'default',
}) as Record<string, string>

const byName = Object.fromEntries(
  Object.entries(imageModules).map(([path, src]) => [path.split('/').pop() ?? path, src]),
)

const img = (name: string) => byName[name] ?? ''

export const initiascanCaseStudy = {
  heroImage: {
    src: img('journey.png'),
    alt: 'InitiaScan verify modules flow with upload guidance and generated file map.',
  },
  heroDetails: {
    subtitle: '2023-2024 :: Developer Tools and Block Explorer for Initia Network',
    facts: [
      { label: 'Category', value: 'Developer Tools' },
      { label: 'Date', value: 'July 1, 2024' },
      { label: 'My Role', value: 'UX/UI Designer' },
      { label: 'Company', value: 'Alles Labs / Initia Labs' },
    ],
    duration: ['First Release: 2 months', 'Upgrade and Maintain: 2 years'],
    methods: [
      'Acceptance Testing',
      'Figma',
      'Guerrilla Test',
      'Hi-Fidelity Design',
      'Information Architecture',
      'Interactive Prototypes',
      'Usability Testing',
      'User Flow Diagram',
      'User Interview',
      'User Journey Map',
      'User Stories',
      'Wireframes',
    ],
    team: [
      '2x UX/UI Designer (Me)',
      '3x Front-End Developers',
      '2x Back-End Developers',
      '1x Product Manager',
    ],
  },
  heroSummary:
    'Launched successfully in January, InitiaScan has become a valuable tool for developers, praised for its usability and seamless updates within the Initia ecosystem.',
  summary: [
    {
      emphasis:
        'InitiaScan is a blockchain explorer designed for the Initia network, tailored to the complexities of its MOVE-based module.',
      body:
        'It simplifies smart contract workflows by offering intuitive tools for publishing, managing, and interacting with contracts, while maintaining clear navigation.',
    },
    {
      emphasis:
        "Adapted to MOVE's resource-oriented design, InitiaScan restructures data presentation for clarity",
      body: 'and builds on familiar patterns from Celatone.',
    },
    {
      emphasis: 'Usability testing showed strong positive feedback,',
      body: 'with minor improvements addressed pre-launch.',
    },
    {
      emphasis:
        'Launched successfully in January, InitiaScan has become a valuable tool for developers,',
      body: 'praised for its usability and seamless updates within the Initia ecosystem.',
    },
  ],
  backgroundImage: {
    src: img('journey.png'),
    alt: 'InitiaScan module verification flow.',
  },
  backgroundParagraphs: [
    'Initia is an innovative blockchain network designed to support interwoven rollups, enabling users to create new networks and leverage the Layer 1 blockchain across various virtual machines (VMs) such as Ethereum Virtual Machine (EVM), MOVE, and CosmWasm. These rollups utilize the Layer 1 blockchain as optimistic rollups, ensuring scalability and interoperability.',
    "However, the network's foundation, built on the MOVE module, posed compatibility challenges for existing blockchain explorer solutions. These tools were unable to fully support the planned implementations and unique architecture of Initia's ecosystem.",
    'To address these limitations, we developed a custom solution tailored to seamlessly integrate with the Initia network and accommodate future upgrades. This bespoke explorer, equipped with all the necessary features, was launched under the name InitiaScan.',
  ],
  role: [
    "This project is the variant version of Celatone, so what I responsible for is basically the same, with the full-loop of works from user interview, contextual inquiry, create as-is journey and to-be journey, craft the app's information architecture, wireframing, to hi-fi prototypes.",
    'We created the fully organized design system that allow scalability and reusable in the most convenient way that even a new designer join the team can get used to it in just a week.',
    'I frequently discussed technical feasibilities with developers and worked to align prioritized user stories with the Product Manager.',
    'I was responsible for creating tickets for developers, complete with user stories and acceptance criteria, and conducted acceptance tests to ensure that every task was thoroughly completed.',
  ],
  challenges: {
    paragraphs: [
      'Through user interviews with several smart contract developers working within Initia and other interwoven rollups, we identified that the core user flows shared similarities with those observed during the design of Celatone. However, the introduction of the MOVE module added a layer of complexity.',
      'Unlike traditional smart contract languages like Solidity (used in EVM) or CosmWasm, MOVE employs a resource-oriented programming paradigm. This results in unique behaviors, particularly in how view and execute functions are handled:',
    ],
    points: [
      {
        title: 'View Functions',
        body:
          "MOVE allows for relatively straightforward read-only operations, enabling developers to retrieve data without modifying the blockchain state. However, its focus on resource safety and type guarantees adds additional issues when designing for queries, requiring thoughtful structuring the appropriate UI patterns.",
      },
      {
        title: 'Execute Functions',
        body:
          'MOVE treats state changes differently, focusing on ownership and immutability of resources. This demands precise handling of state transitions, especially in scenarios like token transfers or permission updates, making the design of the user interface more critical to guide developers effectively.',
      },
    ],
    closing:
      "These differences required us to dedicate significant time to deeply understand MOVE's architecture. This foundational knowledge was crucial to creating a user experience that supports developers in leveraging MOVE's unique advantages while overcoming its learning curve.",
  },
  solutions: {
    intro:
      "After gaining a solid understanding of how the MOVE module works, we recognized that many of the core use cases were similar to those we addressed with Celatone. However, the resource-oriented paradigm of MOVE introduced significant changes that required us to rethink several aspects of our design, particularly the information architecture and the way we structured data within the blockchain explorer.",
    moveParadigm: [
      {
        title: 'Restructure Data Presentation',
        body:
          'The transaction data and contract states in MOVE are inherently tied to resources, which needed to be displayed clearly to highlight ownership and lifecycle changes. For instance, token transfers are not simple balance updates but involve resource movements that must be tracked accurately.',
        image: img('1.png'),
        caption:
          'Transaction data and contract states had to surface ownership and lifecycle changes clearly.',
      },
      {
        title: 'Resource Views',
        body:
          'Unlike Solidity, where contracts often represent centralized hubs of state, MOVE spreads state management across resource types. We designed resource-specific views that break down complex data into smaller, digestible modules, providing developers and non-technical users with clearer insights into the behavior of their contracts.',
        image: '',
        caption: '',
      },
    ],
    friendlyDesign: {
      image: img('2.png'),
      bullets: [
        'Maintain Similar Navigations: We retained the core navigation patterns from Celatone, ensuring a familiar experience for users transitioning to InitiaScan.',
        'Visual Hierarchies: The new information architecture was planned to ensure users could easily locate and understand the unique MOVE-specific elements without overwhelming them with technical complexity.',
        'Terminology Consistency: To avoid cognitive overload, we aligned the MOVE-specific terminology with established patterns from other blockchain explorers, minimizing friction for both new and experienced users.',
      ],
    },
  },
  usability: {
    image: {
      src: img('6.png'),
      alt: 'Usability testing score sheet for InitiaScan module publishing workflow.',
    },
    paragraphs: [
      'Unfortunately, due to tight timeline, we can conduct only 2 usability test session with 5 tasks before the public launch of the project.',
      'Both participants are working within Initia Labs which understand MOVE thoroughly, but never used Celatone before.',
      'The goal was to assess whether the designs adequately addressed flexibility in module publishing workflows while providing clear feedback for alternative scenarios like publishing multiple files or republishing.',
    ],
    successes: [
      'Both of participants give the system usability scale (SUS) scoring in 5/5.',
      'Publishing Modules: Users found the process intuitive and easy, completing tasks like file uploads and transaction submissions without issues.',
      'Resource Navigation: Participants noted that all essential information was accessible and well-organized.',
      'Feedback Systems: Clear summaries and upgrade policy details helped users understand their actions.',
    ],
    challenges: [
      'Republishing Feedback: Some users overlooked feedback, suggesting it needs more prominence.',
      'Wallet Prompts: Users were unclear about the need to connect their wallet for transactions.',
      'Struct Data: Suggested improvements include reformatting struct fields into a JSON layout for clarity.',
    ],
  },
  launch: {
    paragraph:
      'After the testings with positive feedback for its usability and clarity, with minor suggestions for improvement. We launched the InitiaScan during January 2024. Users found the tool valuable and intuitive for their workflows, praising its effectiveness in supporting module publishing and blockchain interactions.',
    images: [
      {
        src: img('7.png'),
        alt: 'InitiaScan highlighted in ecosystem product communication.',
      },
      {
        src: img('5.png'),
        alt: 'InitiaScan launch communication screenshot one.',
      },
      {
        src: img('3.png'),
        alt: 'InitiaScan launch communication screenshot two.',
      },
      {
        src: img('4.png'),
        alt: 'InitiaScan launch communication screenshot three.',
      },
    ],
  },
  learnings: [
    {
      title: 'Understanding the users, the industry, and technical feasibility is crucial',
      body:
        'Our familiarity with smart contract development and several tests conducted with developers gave us key insights even before the project started. These insights guided our design decisions and enabled smooth implementations for our software developers.',
    },
    {
      title: 'Best practices work well under tight deadlines',
      body:
        'We had only two months to add several major features, which meant we had just two weeks for design, happening at the same time as technical development. With not much time to try different ideas or designs, we followed well-known UI patterns and kept things simple. This led to positive feedback from users, who found the UIs straightforward and easy to use without any issues.',
    },
    {
      title: 'Not compromising on quality pays off',
      body:
        'Despite a very tight timeline, our design team did not compromise on the quality of our work, from making design decisions to adhering to our standard operating procedures. We ensured all essential elements were incorporated into Figma components, making them easy to use and maintain in the future. After launching, although we had many features to upgrade in InitiaScan, we were able to introduce new interfaces quickly and smoothly, thanks to a well-prepared design system and thoroughly documented issues.',
    },
  ],
} as const
