export type WhatIDoSlug = 'design' | 'leadership' | 'hiring' | 'upskilling'

export type WhatIDoCard = {
  slug: WhatIDoSlug
  title: string
  description: string
}

export const whatIDoCards: WhatIDoCard[] = [
  {
    slug: 'design',
    title: 'Product Design',
    description:
      'I combine design principles, user psychology, and practical product work to create interfaces that meet business goals, respect technical constraints, and feel intuitive in use.',
  },
  {
    slug: 'leadership',
    title: 'Leading & management',
    description:
      'I often step into lead responsibilities, from setting quality bars and team standards to mentoring designers and helping design teams operate with more confidence.',
  },
  {
    slug: 'hiring',
    title: 'Hiring & onboarding',
    description:
      'I have supported hiring loops, written plans and job descriptions, interviewed candidates, and helped create stronger onboarding experiences for growing teams.',
  },
  {
    slug: 'upskilling',
    title: 'Upskilling people & myself',
    description:
      'My articles on UX/UI growth have been widely shared, and that work has opened doors to teaching, speaking, and helping other designers build stronger foundations.',
  },
]

export const whatIDoOverview = {
  kicker: 'What I Do',
  title: 'Craft, systems, and team support all sit inside the work.',
  summary:
    'These four pages collect the broader parts of my practice that sit around the case studies: product design craft, leading design teams, hiring and onboarding, and the work of helping people grow.',
  detail:
    'The content comes from the same Notion portfolio as the rest of the site, but organized here as a dedicated section so each discipline can stand on its own.',
  highlights: [
    'Product design across research, structure, surface, and delivery',
    'Leading design quality, process, and team confidence',
    'Hiring loops and onboarding experiences for growing teams',
    'Writing, speaking, teaching, and continuous learning',
  ],
}
