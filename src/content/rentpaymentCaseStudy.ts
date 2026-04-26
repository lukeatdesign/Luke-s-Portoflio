import type { RichCaseStudy } from './richCaseStudy'

const imageModules = import.meta.glob('../assets/rent-payment/*.{png,jpg,jpeg,webp}', {
  eager: true,
  import: 'default',
}) as Record<string, string>

const byName = Object.fromEntries(
  Object.entries(imageModules).map(([path, src]) => [path.split('/').pop() ?? path, src]),
)
const img = (name: string) => byName[name] ?? ''

export const rentpaymentCaseStudy: RichCaseStudy = {
  slug: 'rent-payment',
  heroTone: 'bright',
  heroImage: {
    src: img('1.png'),
    alt: 'RentSpree rent payment interface showing the payment collection flow for landlords and tenants.',
  },
  heroDetails: {
    subtitle: '2021 / Payment Management',
    facts: [
      { label: 'Category', value: 'Payment Management' },
      { label: 'Date', value: 'March 1, 2021' },
      { label: 'Role', value: 'Product Designer' },
      { label: 'Company', value: 'RentSpree' },
    ],
    duration: ['3 months'],
    methods: [
      'User Survey',
      'Interactive Prototypes',
      'Usability Testing',
      'User Stories',
      'Acceptance Testing',
      'Figma',
    ],
    team: [
      '2x Product Designer (Me)',
      '4x Full-Stack Developers',
      '1x Product Manager',
      '1x Engineering Manager',
    ],
  },
  summary: [
    {
      emphasis: 'Rent payment in the US was still largely manual and disconnected.',
      body: 'Lost checks, in-person collection, and no dedicated digital tool were the norm. RentSpree\'s rent payment feature aimed to modernize this journey for landlords and tenants on both desktop and mobile.',
    },
    {
      emphasis: 'I joined mid-project, took hi-fi ownership, and tightened the design-to-dev loop.',
      body: 'Wireframes already existed when I arrived. I suggested design improvements, took ownership of the high-fidelity prototypes, and put systems in place to keep design one to two sprints ahead of development without drifting out of alignment.',
    },
    {
      emphasis: 'The feature shipped, and the team\'s UX maturity grew alongside it.',
      body: 'Beyond the feature itself, I spent time raising UX awareness across the organization — reviewing interactions, setting standards, and helping the product team develop better habits for design-to-development collaboration.',
    },
  ],
  background:
    'RentSpree is a digital platform designed to simplify the rental process for landlords, property managers, and tenants. The rent payment feature was a flagship addition that would let tenants pay rent online and give landlords a structured way to collect, track, and manage payments — replacing checks, cash, and disconnected apps.',
  motivation: [
    'I joined RentSpree in March 2021, partway through the rent payment design process. The wireframes had been published, but some design decisions had not been validated with users, and the timeline was tight.',
    'Beyond the feature, I was also motivated by the organizational opportunity: RentSpree\'s leadership cared about UX but lacked the team structure and processes to act on that care consistently. There was real room to raise the bar.',
  ],
  role: [
    'I reviewed existing wireframes, proposed design changes where I saw issues, and then took ownership of the high-fidelity prototype work.',
    'I worked closely with developers to discuss technical feasibility, and created detailed developer tickets with user stories and acceptance criteria.',
    'I ran acceptance tests to ensure each implemented task matched the intended design, and also served as a design reviewer across other product areas toward the end of my time at the company.',
  ],
  research: {
    image: img('2.png'),
    quote:
      'We identified that some of our assumptions about user behavior had not been validated. Rather than designing around guesses, we launched a survey to learn the as-is journey before locking in the design direction.',
    bullets: [
      'Launched a survey targeting existing RentSpree users to understand their current rent payment habits and pain points.',
      'Asked exploratory questions about how they tracked payments, how they defined lateness, and how often rental fees changed.',
      'Used survey findings to validate or adjust key design decisions before high-fidelity work began in earnest.',
    ],
    quotes: [
      'Half our assumptions about when tenants expect to pay and what landlords consider "late" turned out to be wrong. The survey saved us from designing for those assumptions.',
    ],
  },
  painPoints: [
    {
      title: 'Assumptions about user behavior that had not been validated',
      body: 'The earlier design phase had made decisions about when payments were due, what counted as late, and how rental fees changed — without confirming these with real users. The risk was building flows around behavior that didn\'t match reality.',
      image: img('3.png'),
      caption: 'Design assumptions about rental payment timing and late-fee thresholds needed user validation.',
    },
    {
      title: 'A tight timeline within an active delivery sprint cycle',
      body: 'The team was already in delivery mode. Design had to stay practical and close to what development needed — not so far ahead that pivots would cascade into large rework, but not so behind that developers were blocked.',
      image: img('4.png'),
      caption: 'Design needed to lead development by one to two sprints — close enough to be useful, far enough to allow iteration.',
    },
    {
      title: 'Edge cases that are common in rental payments',
      body: 'Real rent payment flows include late fees, partial payments, rental amount changes, and multi-unit scenarios. These edge cases needed handling without making the core happy path complex or intimidating for first-time users.',
      image: img('5.png'),
      caption: 'Edge cases like late fees and rental changes had to be handled without cluttering the primary flow.',
    },
  ],
  solutions: [
    {
      title: 'Survey to validate assumptions before design locked in',
      body: 'A structured survey gave the team clear insight into the as-is payment journey: how users currently tracked payments, what they considered late, and how often fees changed. This directly shaped several design decisions that had previously been based on assumptions.',
      image: img('6.png'),
      caption: 'Survey findings replaced assumptions with validated insights before the hi-fi work began.',
    },
    {
      title: 'Hi-fi design running one to two sprints ahead of development',
      body: 'I kept the high-fidelity designs ahead of the current development sprint to give engineers clear direction without getting so far ahead that changes in later design became expensive to absorb. A separate Figma file managed the in-progress design separately from the sprint-aligned delivery file.',
      image: img('2.png'),
      caption: 'Separate Figma files for in-progress design and sprint-aligned delivery kept the team coordinated.',
    },
    {
      title: 'Acceptance testing on every delivered task across multiple devices',
      body: 'Each development task went through acceptance testing against the intended design and usability criteria before being marked complete. All flows were tested on both desktop and mobile to ensure the experience was consistent and functional across form factors.',
      image: img('3.png'),
      caption: 'Acceptance testing on each task across devices ensured implementation quality matched design intent.',
    },
  ],
  outcomes: [
    {
      emphasis: 'The rent payment feature shipped successfully.',
      body: 'I left RentSpree at the end of August 2021, with the feature launch planned for the same month. A third-party integration delay pushed the final release slightly, but the feature launched successfully in the months that followed.',
    },
    {
      emphasis: 'UX maturity at the company improved tangibly.',
      body: 'Beyond the feature, I worked to raise UX awareness across the organization — reviewing interactions, introducing better design-development communication habits, and helping position the product design team for the next stage of the company\'s growth.',
    },
  ],
  learnings: [
    {
      title: 'Good product work often depends as much on process alignment as on interface quality.',
      body: 'The rent payment feature succeeded not just because the design was good, but because the team got better at communicating across the design-development boundary. Process improvements compound over time in ways that single feature improvements do not.',
    },
    {
      title: 'Raising UX maturity is a design contribution too.',
      body: 'The most lasting work I did at RentSpree was not any individual screen — it was helping the team understand how to make UX a consistent part of how they shipped. That kind of organizational improvement matters long after the feature ships.',
    },
  ],
}
