import type { RichCaseStudy } from './richCaseStudy'

const imageModules = import.meta.glob('../assets/ladder/*.{png,jpg,jpeg,webp}', {
  eager: true,
  import: 'default',
}) as Record<string, string>

const byName = Object.fromEntries(
  Object.entries(imageModules).map(([path, src]) => [path.split('/').pop() ?? path, src]),
)
const img = (name: string) => byName[name] ?? ''

export const ladderCaseStudy: RichCaseStudy = {
  slug: 'ladder',
  heroTone: 'bright',
  heroImage: {
    src: img('1.png'),
    alt: 'Ladder social analytics platform dashboard showing keyword trends, sentiment analysis, and channel breakdown.',
  },
  heroDetails: {
    subtitle: '2019–2021 / Data Analytics Platform',
    facts: [
      { label: 'Category', value: 'Data Analytics Platform' },
      { label: 'Date', value: 'March 1, 2019' },
      { label: 'Role', value: 'UX/UI Designer' },
      { label: 'Company', value: 'Backyard' },
    ],
    duration: ['2 years and 11 months'],
    methods: [
      'User Interview',
      'Stakeholder Interview',
      'Heuristic Evaluation',
      'Contextual Inquiry',
      'Activity-Centered Design',
      'Information Architecture',
      'Design Studio',
      'Wireframes',
      'Interactive Prototypes',
      'Usability Testing',
      'Sketch',
    ],
    team: [
      '1x UX/UI Designer (Me)',
      '1x Product Owner',
      '3x Back-End Developers',
      '1x Front-End Developer',
      '1x Data Scientist',
      '4x Data Analysts (Users)',
    ],
  },
  summary: [
    {
      emphasis: 'Ladder parsed social media data and turned it into analytical insight.',
      body: 'The platform collected data from global social media and news portals, ran it through NLP and sentiment models, and visualized the results for analysts building reports for brand and organizational clients.',
    },
    {
      emphasis: 'I joined after two years of development without UX consideration.',
      body: 'The product had been built entirely by engineers and a product owner responding to immediate needs. It worked technically, but the navigation was unrecognizable, the charts were not meaningful, and the workflow required enormous user effort.',
    },
    {
      emphasis: 'Three years of iteration produced measurable and documented results.',
      body: 'A new analyst performed 30% better on accuracy and completed tasks 40% faster on the redesigned interface compared with the original. The product improved substantially — though it eventually became inactive as market validation fell short.',
    },
  ],
  background:
    'Ladder is a social analytics product that collects data from global social media platforms and news portals, processes it through NLP models for sentiment and relevance analysis, and visualizes the results as actionable insights for data analysts. The intended users were internal analysts who built social analytics reports for brand and organizational clients.',
  motivation: [
    'I joined Backyard as the sole UX/UI designer for Ladder — a product that had been in development for about two years without structured design work. The product owner and data analysts had accumulated a long list of frustrations, and the company wanted to take the product to a wider audience.',
    'The challenge was to take an already-built product, diagnose its systemic problems, and improve it iteratively within an active Scrum process — without the luxury of starting from scratch.',
  ],
  role: [
    'I worked as the sole UX/UI designer across the full product — information architecture, dashboards, keyword settings, data visualization, and back-office configuration screens.',
    'I worked in a Scrum team where design sprints ran one sprint ahead of development, participating in heuristic evaluations, design studio sessions, user flow creation, wireframing, and hi-fi prototyping.',
    'I conducted regular interviews with both the data analysts who used the product and the stakeholders who had funded it, maintaining alignment between immediate user needs and long-term product ambitions.',
  ],
  research: {
    image: img('2.png'),
    quote:
      '"We need to fill in 100+ relevant keywords to the back-office system to find relevant documents in the collected data. The product was implemented without any UX concerns, so it provided bad learnability and required a lot of effort from users."',
    bullets: [
      'Conducted heuristic evaluation across the full product to inventory usability problems systematically.',
      'Ran regular user interviews with data analysts to understand their daily workflows, pain points, and reporting needs.',
      'Interviewed stakeholders to align on the product\'s broader ambition — reaching marketers and social media managers beyond the internal analyst team.',
    ],
    quotes: [
      'The old design was developed without any data visualization knowledge; the charts available in the dashboard were not meaningful.',
      'I spent a lot of time figuring out how to navigate through features and trying to recall the functions of the software, when in fact the system should be able to offer the recognition needed.',
    ],
  },
  painPoints: [
    {
      title: 'Keyword management that required enormous manual effort',
      body: 'To filter relevant documents from the full dataset, analysts had to manually fill in 100+ keywords — with no support for organization, deduplication, or filtering. Many keywords returned irrelevant documents because words have multiple meanings, and there was no mechanism to exclude them.',
      image: img('3.png'),
      caption: 'The keyword system required massive manual input without any filtering or organizational support.',
    },
    {
      title: 'Dashboard charts that were not meaningful',
      body: 'The original dashboard had been built by engineers without data visualization expertise. Charts existed but did not surface insight — users could see numbers without being able to understand what they meant or what actions they implied.',
      image: img('4.png'),
      caption: 'Charts displayed data without delivering insight — users had to interpret everything manually.',
    },
    {
      title: 'Navigation that required recall instead of recognition',
      body: 'The product\'s information architecture had evolved organically through the Scrum process without a guiding structure. Users could not navigate reliably from memory, and the product failed to offer the recognition cues that would make it learnable quickly.',
      image: img('5.png'),
      caption: 'Navigation required users to recall paths rather than recognize features — a persistent source of friction.',
    },
  ],
  processImages: [
    {
      src: img('6.png'),
      label: 'Information architecture evolution',
      caption: 'The information architecture was continuously updated to reflect new user stories and roadmap changes across the three-year sprint cycle.',
    },
  ],
  solutions: [
    {
      title: 'Keyword settings redesigned around search, include, and exclude',
      body: 'The keyword management system was restructured into three distinct sections: search keywords (what to look for), included keywords (narrow to relevant results), and excluded keywords (remove irrelevant documents). This gave analysts real control over their data quality without adding keystrokes.',
      image: img('7.png'),
      caption: 'Three-category keyword system replaced the flat list with structured, meaningful filtering.',
    },
    {
      title: 'Dashboard redesigned around information foraging theory',
      body: 'The new dashboard was structured so analysts could see an overview of key insights — top keywords, active channels, sentiment trend — before drilling into detailed visualizations. Dynamic filters let users narrow to specific social media platforms or keywords without losing the overall picture.',
      image: img('8.png'),
      caption: 'Information foraging structure gave analysts a clear path from overview to detail.',
    },
    {
      title: 'Post view designed around familiar social media feed patterns',
      body: 'Individual post views were redesigned to match the visual patterns of the social media platforms they came from — Facebook, Twitter, and others each had their own recognizable format. Sentiment chips were added prominently so analysts could classify posts at a glance.',
      image: img('9.png'),
      caption: 'Social media feed patterns made individual post review familiar and fast.',
    },
  ],
  outcomes: [
    {
      emphasis: 'A new analyst performed 30% better and 40% faster on the redesigned interface.',
      body: 'A usability test comparing the old and new interfaces with a new data analyst joining the team produced clear results: 30% higher task accuracy and 40% faster task completion on the redesigned product. The interfaces were measurably different in usability.',
    },
    {
      emphasis: 'The product became inactive despite strong UX improvements.',
      body: 'After nearly three years of sustained product work, Ladder became inactive. Social analytics as a business category was harder to sustain than the early hype suggested, and the team had underinvested in product-market validation relative to implementation. Strong UX could not substitute for a validated market.',
    },
  ],
  learnings: [
    {
      title: 'Good design needs time, testing, and iteration — tight deadlines create real design debt.',
      body: 'Much of my work on Ladder involved fixing debt that accumulated when the team moved fast without design involvement. The cost of that debt was higher than the time saved by skipping the process. This was a direct, repeated lesson over three years.',
    },
    {
      title: 'Even strong UX cannot replace the need for product-market fit.',
      body: 'Ladder was a much better product by the time it became inactive. But the market it was built for turned out to be harder to reach and serve than the team had assumed. Design quality extends the runway — it does not replace the need to validate the underlying market assumption.',
    },
  ],
}
