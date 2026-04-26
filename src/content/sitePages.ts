export type SitePageSection = {
  title: string
  body: string
}

export type SitePage = {
  slug: string
  kicker: string
  title: string
  summary: string
  highlights: string[]
  sections: SitePageSection[]
}

export const sitePages: SitePage[] = [
  {
    slug: 'design',
    kicker: 'What I Do',
    title: 'Design, of course',
    summary:
      'I bring product thinking, interface craft, and systems awareness together so complex products feel useful, learnable, and well-paced in real use.',
    highlights: [
      'Research through delivery, not just surface-level UI work.',
      'Comfortable with technical products, developer tools, and workflow-heavy systems.',
      'Strong focus on clarity, hierarchy, and decision support.',
    ],
    sections: [
      {
        title: 'How I work',
        body: 'My process usually starts with understanding the product pressure points: what users are trying to do, where the workflow breaks down, and where the business or technical constraints are shaping the interface. From there I move through framing, flows, wireframes, prototypes, and validation with enough structure to keep the work practical.',
      },
      {
        title: 'What I optimize for',
        body: 'I care a lot about interfaces that guide people without making them feel patronized. That means better information hierarchy, cleaner states, stronger terminology, and fewer moments where users are forced to guess what the system wants from them.',
      },
      {
        title: 'Where this matters most',
        body: 'This approach has been especially valuable in tooling, blockchain, and operational products where the domain is already difficult and the product needs to create confidence rather than adding more cognitive load.',
      },
    ],
  },
  {
    slug: 'leadership',
    kicker: 'What I Do',
    title: 'Leading and management',
    summary:
      'I step into leadership where design quality, team direction, and delivery discipline all need to move together.',
    highlights: [
      'Set bars for craft, critique, and system consistency.',
      'Help teams align design decisions with delivery reality.',
      'Use mentorship as part of execution, not separate from it.',
    ],
    sections: [
      {
        title: 'Team support',
        body: 'Leadership for me usually means helping designers produce stronger work with more confidence. That can include critique, clearer expectations, component thinking, or simply making the decision-making process more legible for the team.',
      },
      {
        title: 'Quality and momentum',
        body: 'I like raising the quality bar in ways that keep momentum instead of slowing people down. Stronger systems, better handoff habits, and more explicit design reasoning usually help teams move faster once they are in place.',
      },
      {
        title: 'Working across functions',
        body: 'A lot of design leadership is really cross-functional translation. I often work between product, engineering, and design to make sure the team is solving the right problem in a way that can actually ship well.',
      },
    ],
  },
  {
    slug: 'hiring',
    kicker: 'What I Do',
    title: 'Hiring and onboarding',
    summary:
      'I have supported growing teams through hiring loops, candidate evaluation, onboarding structure, and clearer expectations for new designers joining the work.',
    highlights: [
      'Experience with interviews, role framing, and candidate review.',
      'Helpful onboarding structures for new designers and collaborators.',
      'Strong bias toward clarity and team confidence.',
    ],
    sections: [
      {
        title: 'Hiring',
        body: 'I have contributed to hiring by writing role descriptions, screening candidates, joining interviews, and helping teams evaluate not just output quality but also thinking, collaboration, and growth potential.',
      },
      {
        title: 'Onboarding',
        body: 'Good onboarding is a design problem too. New teammates need context, structure, and a realistic view of how decisions get made. I like building that clarity early so people can contribute sooner without unnecessary uncertainty.',
      },
      {
        title: 'Why it matters',
        body: 'Strong hiring and onboarding create healthier teams over time. They reduce ambiguity, make standards clearer, and give people a better chance to do their best work quickly.',
      },
    ],
  },
  {
    slug: 'upskilling',
    kicker: 'What I Do',
    title: 'Upskilling people and myself',
    summary:
      'I care a lot about growth, both in my own practice and in helping other designers build stronger foundations through writing, mentoring, and shared frameworks.',
    highlights: [
      'Articles and resources shared widely within the design community.',
      'Teaching mindset applied to critique, systems, and process.',
      'Ongoing interest in expanding both craft and strategic thinking.',
    ],
    sections: [
      {
        title: 'Sharing knowledge',
        body: 'I have written and shared thoughts on UX and UI growth because I like making design thinking more accessible. Explaining ideas clearly often improves my own understanding at the same time.',
      },
      {
        title: 'Learning in practice',
        body: 'Most of my learning happens through active work: understanding a new domain, refining how I explain tradeoffs, or getting better at leading within real constraints. I try to make that learning visible so others can benefit from it too.',
      },
      {
        title: 'Building better habits',
        body: 'Upskilling is not only about inspiration. It is also about sharper process, stronger critique, better systems thinking, and more confidence when work gets ambiguous or high-pressure.',
      },
    ],
  },
  {
    slug: 'about-luke',
    kicker: 'About',
    title: 'More about Luke',
    summary:
      'I studied Computer Engineering at Chulalongkorn University before moving into UX/UI design, and since then I have built my practice around technically demanding products and thoughtful team collaboration.',
    highlights: [
      'Based in Bangkok, Thailand.',
      'Background in engineering and product design.',
      'Most energized by ambitious products that still need clear UX.',
    ],
    sections: [
      {
        title: 'Background',
        body: 'My path into design started from a technical foundation, which still shapes how I work. I am comfortable learning underlying systems, talking through feasibility with engineers, and designing for products where the interaction model needs to explain something genuinely difficult.',
      },
      {
        title: 'What I enjoy working on',
        body: 'I am especially drawn to products with complexity under the hood: developer tools, workflow systems, analytics, and products where a better interface can noticeably reduce friction for the people using them.',
      },
      {
        title: 'How I like to collaborate',
        body: 'I care about being practical, clear, and supportive. The best work usually comes from strong collaboration, good critique, and enough structure that everyone understands the goal without getting boxed in creatively.',
      },
    ],
  },
]
