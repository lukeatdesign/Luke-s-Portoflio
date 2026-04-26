export type RichCaseStudyImage = {
  src: string
  alt?: string
  caption?: string
}

export type RichCaseStudy = {
  slug: string
  heroTone?: 'default' | 'bright'
  heroImage: RichCaseStudyImage
  heroDetails: {
    subtitle: string
    facts: { label: string; value: string }[]
    duration: string[]
    methods: string[]
    team: string[]
  }
  summary: { emphasis: string; body: string }[]
  background: string
  motivation: string[]
  role: string[]
  research?: {
    image?: string
    quote: string
    bullets: string[]
    quotes?: string[]
  }
  painPoints: { title: string; body: string; image?: string; caption?: string }[]
  processImages?: { src: string; label: string; caption?: string }[]
  solutions: { title: string; body: string; image?: string; caption?: string }[]
  outcomes: { emphasis: string; body: string }[]
  learnings: { title: string; body: string }[]
}
