import type { RichCaseStudy } from './richCaseStudy'

const imageModules = import.meta.glob('../assets/incident-management/*.{png,jpg,jpeg,webp}', {
  eager: true,
  import: 'default',
}) as Record<string, string>

const byName = Object.fromEntries(
  Object.entries(imageModules).map(([path, src]) => [path.split('/').pop() ?? path, src]),
)
const img = (name: string) => byName[name] ?? ''

export const incidentManagementCaseStudy: RichCaseStudy = {
  slug: 'incident-management',
  heroTone: 'bright',
  heroImage: {
    src: img('image.png'),
    alt: 'Incident Management Transformation overview materials showing the enterprise banking research and co-creation outputs.',
  },
  heroDetails: {
    subtitle: '2026 / Enterprise Banking',
    facts: [
      { label: 'Category', value: 'User Research' },
      { label: 'Date', value: 'March 1, 2026' },
      { label: 'Role', value: 'User Researcher' },
      { label: 'Company', value: 'IBM Digital Talent for Business' },
    ],
    duration: ['2 months'],
    methods: [
      'Activity-Centered Design',
      'User Interview',
      'Stakeholder Interviews',
      'Co-Creation Workshops',
      'As-Is Journey Mapping',
      'Pain Prioritization',
      'Typology Development',
    ],
    team: ['1x Solution Architect', '1x Business Analyst', '1x User Researcher (Me)'],
  },
  summary: [
    {
      emphasis:
        'Incident Management Transformation focused on a major state-owned commercial bank in Thailand.',
      body:
        'The work examined how incidents and complaints moved across more than seven business units, each with different workflows, systems, and understandings of what handling a case meant.',
    },
    {
      emphasis:
        'The goal was not only to identify what was broken, but to make the system understandable as one connected reality.',
      body:
        'The research and co-creation process had to surface why cases stalled, where operational burden accumulated, and whose problem it was to fix without pushing teams into defensiveness.',
    },
    {
      emphasis: 'The output was a shared transformation narrative leadership could act on.',
      body:
        'The deliverables included an 88-page co-create report, as-is journey maps, seven team typologies, an organizational pain matrix, and prioritized initiative proposals.',
    },
  ],
  background:
    'A major state-owned commercial bank was operating its incident and complaint management processes across more than seven distinct business units, each with its own workflows, systems, and understanding of what handling a case meant. Frontline staff were absorbing enormous operational burden, oversight teams were making decisions based on incomplete data, and no single team had end-to-end visibility into what was happening.',
  motivation: [
    'The bank knew something was broken. But the question was not just what was broken - it was why, and whose problem it was to fix.',
    'My task was to lead the UX research and co-creation process: to get every function in the same room, map reality as it actually existed, and surface findings in a way that would create shared understanding rather than defensiveness.',
  ],
  role: [
    'I worked as the research lead, workshop facilitator, and insight synthesist across the engagement.',
    'I conducted stakeholder interviews, facilitated co-creation sessions, and translated seven distinct operational realities into one coherent narrative.',
    'I also shaped the final reporting language so the findings could be shared broadly without exposing individual teams or turning structural issues into performance judgments.',
  ],
  research: {
    image: img('image 1.png'),
    quote: 'Nobody is doing anything wrong. Everyone is doing exactly what their role requires.',
    bullets: [
      'Conducted in-depth stakeholder interviews and co-creation workshops across frontline operations, compliance, risk, audit, and data protection functions.',
      'Used as-is journey mapping to document how cases actually moved, where they stalled, and what invisible labor teams were using to compensate.',
      'Cross-referenced interviews, maps, and workshop outputs to build a synthesis chain that connected architecture, accountability, behavior, data quality, visibility, response, and people impact.',
    ],
  },
  painPoints: [
    {
      title: 'The incident ecosystem was fragmented across more than seven business units',
      body:
        'Each unit had its own workflows, systems, and assumptions about what handling a case meant. That fragmentation made it impossible for any one team to see what was really happening end-to-end.',
      image: img('image 2.png'),
      caption:
        'As-is journey mapping exposed how differently each function experienced the same incident system.',
    },
    {
      title: 'What the system recorded was not the same as what really happened',
      body:
        'Logging required specialist knowledge - taxonomy libraries, ledger codes, and structured narrative formats - but the people doing it were frontline staff managing incident entry as a side duty alongside their primary role.',
      image: img('image 4.png'),
      caption:
        'The synthesis chain made it clear how architecture and tool friction cascaded into data quality issues.',
    },
    {
      title: 'Accountability and knowledge broke down at handoff points',
      body:
        'Every team knew ownership on paper, but in practice cases stalled, duplicated, or disappeared between functions. Critical process knowledge also lived inside experienced individuals rather than in the system itself.',
      image: img('image 3.png'),
      caption:
        'The typology work showed how each function played a distinct role, but also how much the system depended on unwritten knowledge.',
    },
  ],
  solutions: [
    {
      title: 'Reframe the problem as systemic failure, not behavioral failure',
      body:
        'The most important facilitation move was to anchor every session in a principle: nobody was doing anything wrong, everyone was doing exactly what their role required. That framing made honest cross-functional conversation possible without triggering blame.',
      image: img('image 1.png'),
      caption:
        'The discovery phase focused on creating the conditions for honest conversation before pushing for consensus.',
    },
    {
      title: 'Use journey mapping to make invisible labor visible',
      body:
        'For each business unit, I facilitated as-is process mapping sessions to document exactly how cases moved and where they stalled. These maps surfaced manual spreadsheets, informal escalations, and other workarounds that had quietly become normal practice.',
      image: img('image 2.png'),
      caption:
        'Journey maps turned hidden operational work into something concrete enough to discuss and validate.',
    },
    {
      title: 'Create team typologies to give the system a shared language',
      body:
        'I developed seven team typologies - functional archetypes describing what each unit actually did when a case arrived. These were not org-chart labels; they were a new shared language that leadership and teams could use to understand the ecosystem as a whole.',
      image: img('image 3.png'),
      caption:
        'Functional typologies helped teams see how their work connected instead of only seeing their local role.',
    },
    {
      title: 'Build a synthesis chain that explains causality instead of listing symptoms',
      body:
        'The findings were structured as a chain from Architecture → Accountability → Behavior → Data Quality → Visibility → Response → People. This made the research legible to non-UX audiences while still preserving the precision needed for decision-making.',
      image: img('image 4.png'),
      caption:
        'The final synthesis connected seemingly separate issues into one systemic narrative.',
    },
    {
      title: 'Package the work into public-safe deliverables that keep their edge',
      body:
        'The final outputs included an 88-page co-create report, as-is journey maps, team typologies, an organizational pain matrix, and prioritized initiative proposals such as a Centralized Case System, Unified Dashboard, and One Stop Intake model.',
      image: img('image 5.png'),
      caption:
        'The deliverables were designed to be broadly shareable without softening the structural findings.',
    },
  ],
  outcomes: [
    {
      emphasis: 'The project created shared understanding across teams that did not always trust each other’s version of reality.',
      body:
        'By reframing the conversation away from blame and toward structure, the work gave multiple functions a way to discuss the same system without collapsing into defensiveness.',
    },
    {
      emphasis: 'Leadership received a complete, actionable view of the system.',
      body:
        'The report, journey maps, typologies, and pain matrix transformed fragmented operational realities into prioritized initiative directions that could support strategy and future implementation.',
    },
    {
      emphasis: 'The findings stayed sharp while becoming safe enough to share widely.',
      body:
        'That balance allowed the work to be circulated to workshop and interview participants without exposing any team or individual, while still preserving its usefulness for decision-making.',
    },
  ],
  learnings: [
    {
      title: 'Framing can be the most important design decision in research',
      body:
        'Anchoring the work in systemic accountability rather than individual responsibility shaped every interview, workshop, finding, and slide. It was what made the research usable.',
    },
    {
      title: 'Public-safe findings still need to preserve their edge',
      body:
        'The hardest editorial challenge was presenting structural observations without turning them into performance judgments, while still keeping enough specificity for them to matter.',
    },
    {
      title: 'Trust has to be designed before insight can be captured',
      body:
        'A co-creation report is only valuable if the people it is about are willing to see themselves in it and act on what they find. That required earning trust before earning insight.',
    },
  ],
}
