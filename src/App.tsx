import type { CSSProperties, ComponentType, MouseEvent as ReactMouseEvent, ReactNode, SVGProps } from 'react'
import { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import {
  AcademicCapIcon,
  ArrowTopRightOnSquareIcon,
  XMarkIcon,
  BookOpenIcon,
  BriefcaseIcon,
  ChevronRightIcon,
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
  SparklesIcon,
  UserGroupIcon,
  WrenchScrewdriverIcon,
} from '@heroicons/react/24/outline'
import { caseStudies } from './content/caseStudies'
import { celatoneCaseStudy } from './content/celatoneCaseStudy'
import { initiascanCaseStudy } from './content/initiascanCaseStudy'
import { richCaseStudies } from './content/richCaseStudies'
import type { RichCaseStudy } from './content/richCaseStudy'
import { richSitePages } from './content/richSitePages'
import type { RichSitePage, RichSitePageSection, RichSitePageItem } from './content/richSitePages'
import { sitePages } from './content/sitePages'
import { ChatbotFlow } from './chatbot/ChatbotFlow'

type Route =
  | { type: 'home' }
  | { type: 'case-study'; slug: string }
  | { type: 'page'; slug: string }
  | { type: 'chat' }

type IconComponent = ComponentType<SVGProps<SVGSVGElement>>
type CaseStudyFilterKey = 'devices' | 'projectType' | 'industries'
type CaseStudyFilterState = Record<CaseStudyFilterKey, string[]>
type ImagePreview = {
  src: string
  alt: string
  caption?: string
}

const strengths = [
  {
    title: 'Product Design',
    description:
      'I combine design principles, user psychology, and practical product work to create interfaces that meet business goals, respect technical constraints, and feel intuitive in use.',
    href: '#/pages/design',
    icon: SparklesIcon,
  },
  {
    title: 'Leading & management',
    description:
      'I often step into lead responsibilities, from setting quality bars and team standards to mentoring designers and helping design teams operate with more confidence.',
    href: '#/pages/leadership',
    icon: UserGroupIcon,
  },
  {
    title: 'Hiring & onboarding',
    description:
      'I have supported hiring loops, written plans and job descriptions, interviewed candidates, and helped create stronger onboarding experiences for growing teams.',
    href: '#/pages/hiring',
    icon: BriefcaseIcon,
  },
  {
    title: 'Upskilling people & myself',
    description:
      'My articles on UX/UI growth have been widely shared, and that work has opened doors to teaching, speaking, and helping other designers build stronger foundations.',
    href: '#/pages/upskilling',
    icon: AcademicCapIcon,
  },
]

const highlights = [
  { icon: BriefcaseIcon, text: '8 years of end-to-end product design — research, systems, and delivery.' },
  { icon: WrenchScrewdriverIcon, text: 'UX Lead at Alles Labs — design quality, team standards, and mentoring.' },
  { icon: AcademicCapIcon, text: 'UX writing shared 1,000+ times — led to speaking and teaching.' },
  { icon: MapPinIcon, text: 'Based in Bangkok, Thailand — GMT+7.' },
]


const learningIcons: IconComponent[] = [
  WrenchScrewdriverIcon,
  SparklesIcon,
  UserGroupIcon,
  AcademicCapIcon,
]

const caseStudyFilterLabels: Record<CaseStudyFilterKey, string> = {
  devices: 'Devices',
  projectType: 'Project Type',
  industries: 'Industries',
}

const caseStudyFilterOptionOrder: Record<CaseStudyFilterKey, string[]> = {
  devices: ['Desktop', 'Mobile', 'CLI', 'TUI'],
  projectType: [
    'Developer Tools',
    'Multisig',
    'Annotation',
    'NLP',
    'Margin Trading',
    'Usability Revamp',
  ],
  industries: ['Blockchain Infra', 'DeFi', 'PropTech', 'Analytics'],
}

const caseStudyTagCategories: Record<string, CaseStudyFilterKey> = {
  Desktop: 'devices',
  Mobile: 'devices',
  CLI: 'devices',
  TUI: 'devices',
  'Developer Tools': 'projectType',
  Multisig: 'projectType',
  Annotation: 'projectType',
  NLP: 'projectType',
  'Margin Trading': 'projectType',
  'Usability Revamp': 'projectType',
  'Blockchain Infra': 'industries',
  DeFi: 'industries',
  PropTech: 'industries',
  Analytics: 'industries',
}

const caseStudyFilterColors: Record<string, Record<string, string>> = {
  Desktop: {
    border: 'rgba(241, 221, 228, 0.18)',
    background: 'rgba(241, 221, 228, 0.08)',
    hoverBorder: 'rgba(241, 221, 228, 0.36)',
    hoverBackground: 'rgba(241, 221, 228, 0.16)',
    activeBorder: 'rgba(241, 221, 228, 0.6)',
    activeBackground: 'rgba(241, 221, 228, 0.24)',
    text: 'rgba(255, 248, 251, 0.8)',
  },
  Mobile: {
    border: 'rgba(243, 208, 217, 0.18)',
    background: 'rgba(243, 208, 217, 0.08)',
    hoverBorder: 'rgba(243, 208, 217, 0.36)',
    hoverBackground: 'rgba(243, 208, 217, 0.16)',
    activeBorder: 'rgba(243, 208, 217, 0.6)',
    activeBackground: 'rgba(243, 208, 217, 0.24)',
    text: 'rgba(255, 248, 251, 0.8)',
  },
  CLI: {
    border: 'rgba(205, 224, 244, 0.18)',
    background: 'rgba(205, 224, 244, 0.08)',
    hoverBorder: 'rgba(205, 224, 244, 0.36)',
    hoverBackground: 'rgba(205, 224, 244, 0.16)',
    activeBorder: 'rgba(205, 224, 244, 0.56)',
    activeBackground: 'rgba(205, 224, 244, 0.22)',
    text: 'rgba(255, 248, 251, 0.8)',
  },
  TUI: {
    border: 'rgba(219, 213, 243, 0.18)',
    background: 'rgba(219, 213, 243, 0.08)',
    hoverBorder: 'rgba(219, 213, 243, 0.36)',
    hoverBackground: 'rgba(219, 213, 243, 0.16)',
    activeBorder: 'rgba(219, 213, 243, 0.56)',
    activeBackground: 'rgba(219, 213, 243, 0.22)',
    text: 'rgba(255, 248, 251, 0.8)',
  },
  'Developer Tools': {
    border: 'rgba(204, 226, 244, 0.18)',
    background: 'rgba(204, 226, 244, 0.08)',
    hoverBorder: 'rgba(204, 226, 244, 0.36)',
    hoverBackground: 'rgba(204, 226, 244, 0.16)',
    activeBorder: 'rgba(204, 226, 244, 0.56)',
    activeBackground: 'rgba(204, 226, 244, 0.22)',
    text: 'rgba(255, 248, 251, 0.8)',
  },
  Multisig: {
    border: 'rgba(229, 213, 243, 0.18)',
    background: 'rgba(229, 213, 243, 0.08)',
    hoverBorder: 'rgba(229, 213, 243, 0.36)',
    hoverBackground: 'rgba(229, 213, 243, 0.16)',
    activeBorder: 'rgba(229, 213, 243, 0.56)',
    activeBackground: 'rgba(229, 213, 243, 0.22)',
    text: 'rgba(255, 248, 251, 0.8)',
  },
  Annotation: {
    border: 'rgba(244, 224, 203, 0.18)',
    background: 'rgba(244, 224, 203, 0.08)',
    hoverBorder: 'rgba(244, 224, 203, 0.36)',
    hoverBackground: 'rgba(244, 224, 203, 0.16)',
    activeBorder: 'rgba(244, 224, 203, 0.56)',
    activeBackground: 'rgba(244, 224, 203, 0.22)',
    text: 'rgba(255, 248, 251, 0.8)',
  },
  NLP: {
    border: 'rgba(206, 234, 223, 0.18)',
    background: 'rgba(206, 234, 223, 0.08)',
    hoverBorder: 'rgba(206, 234, 223, 0.36)',
    hoverBackground: 'rgba(206, 234, 223, 0.16)',
    activeBorder: 'rgba(206, 234, 223, 0.56)',
    activeBackground: 'rgba(206, 234, 223, 0.22)',
    text: 'rgba(255, 248, 251, 0.8)',
  },
  'Margin Trading': {
    border: 'rgba(244, 213, 206, 0.18)',
    background: 'rgba(244, 213, 206, 0.08)',
    hoverBorder: 'rgba(244, 213, 206, 0.36)',
    hoverBackground: 'rgba(244, 213, 206, 0.16)',
    activeBorder: 'rgba(244, 213, 206, 0.56)',
    activeBackground: 'rgba(244, 213, 206, 0.22)',
    text: 'rgba(255, 248, 251, 0.8)',
  },
  'Usability Revamp': {
    border: 'rgba(244, 217, 228, 0.18)',
    background: 'rgba(244, 217, 228, 0.08)',
    hoverBorder: 'rgba(244, 217, 228, 0.36)',
    hoverBackground: 'rgba(244, 217, 228, 0.16)',
    activeBorder: 'rgba(244, 217, 228, 0.56)',
    activeBackground: 'rgba(244, 217, 228, 0.22)',
    text: 'rgba(255, 248, 251, 0.8)',
  },
  'Blockchain Infra': {
    border: 'rgba(209, 218, 246, 0.18)',
    background: 'rgba(209, 218, 246, 0.08)',
    hoverBorder: 'rgba(209, 218, 246, 0.36)',
    hoverBackground: 'rgba(209, 218, 246, 0.16)',
    activeBorder: 'rgba(209, 218, 246, 0.56)',
    activeBackground: 'rgba(209, 218, 246, 0.22)',
    text: 'rgba(255, 248, 251, 0.8)',
  },
  DeFi: {
    border: 'rgba(206, 232, 214, 0.18)',
    background: 'rgba(206, 232, 214, 0.08)',
    hoverBorder: 'rgba(206, 232, 214, 0.36)',
    hoverBackground: 'rgba(206, 232, 214, 0.16)',
    activeBorder: 'rgba(206, 232, 214, 0.56)',
    activeBackground: 'rgba(206, 232, 214, 0.22)',
    text: 'rgba(255, 248, 251, 0.8)',
  },
  PropTech: {
    border: 'rgba(235, 222, 206, 0.18)',
    background: 'rgba(235, 222, 206, 0.08)',
    hoverBorder: 'rgba(235, 222, 206, 0.36)',
    hoverBackground: 'rgba(235, 222, 206, 0.16)',
    activeBorder: 'rgba(235, 222, 206, 0.56)',
    activeBackground: 'rgba(235, 222, 206, 0.22)',
    text: 'rgba(255, 248, 251, 0.8)',
  },
  Analytics: {
    border: 'rgba(212, 232, 244, 0.18)',
    background: 'rgba(212, 232, 244, 0.08)',
    hoverBorder: 'rgba(212, 232, 244, 0.36)',
    hoverBackground: 'rgba(212, 232, 244, 0.16)',
    activeBorder: 'rgba(212, 232, 244, 0.56)',
    activeBackground: 'rgba(212, 232, 244, 0.22)',
    text: 'rgba(255, 248, 251, 0.8)',
  },
}

function getCaseStudyFilterChipStyle(option: string): CSSProperties {
  const theme = caseStudyFilterColors[option]

  if (!theme) {
    return {}
  }

  return {
    ['--filter-chip-border' as string]: theme.border,
    ['--filter-chip-background' as string]: theme.background,
    ['--filter-chip-hover-border' as string]: theme.hoverBorder,
    ['--filter-chip-hover-background' as string]: theme.hoverBackground,
    ['--filter-chip-active-border' as string]: theme.activeBorder,
    ['--filter-chip-active-background' as string]: theme.activeBackground,
    ['--filter-chip-text' as string]: theme.text,
  } as CSSProperties
}

const availableCaseStudyTags = Array.from(new Set(caseStudies.flatMap((study) => study.tags)))

const caseStudyFilterGroups = (Object.keys(caseStudyFilterLabels) as CaseStudyFilterKey[]).map((key) => {
  const preferredOptions = caseStudyFilterOptionOrder[key].filter((option) =>
    availableCaseStudyTags.includes(option),
  )
  const remainingOptions = availableCaseStudyTags.filter(
    (option) => caseStudyTagCategories[option] === key && !preferredOptions.includes(option),
  )

  return {
    key,
    label: caseStudyFilterLabels[key],
    options: [...preferredOptions, ...remainingOptions],
  }
})

function createEmptyCaseStudyFilters(): CaseStudyFilterState {
  return {
    devices: [],
    projectType: [],
    industries: [],
  }
}

function getRoute(): Route {
  const hash = window.location.hash.replace(/^#/, '')

  if (!hash || hash === '/' || hash === '') {
    return { type: 'home' }
  }

  if (hash === '/chat') {
    return { type: 'chat' }
  }

  const match = hash.match(/^\/case-studies\/([^/]+)$/)

  if (match) {
    return { type: 'case-study', slug: match[1] }
  }

  const pageMatch = hash.match(/^\/pages\/([^/]+)$/)

  if (pageMatch) {
    return { type: 'page', slug: pageMatch[1] }
  }

  return { type: 'home' }
}

function navigateToCaseStudy(slug: string) {
  window.location.hash = `/case-studies/${slug}`
}

function navigateToPage(slug: string) {
  window.location.hash = `/pages/${slug}`
}

function navigateHome() {
  window.location.hash = '/'
}

function navigateToChat() {
  window.location.hash = '/chat'
}

function App() {
  const [route, setRoute] = useState<Route>(() => getRoute())
  const [imagePreview, setImagePreview] = useState<ImagePreview | null>(null)

  useEffect(() => {
    const handleHashChange = () => {
      setRoute(getRoute())
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  useEffect(() => {
    if (!imagePreview) {
      return
    }

    const previousOverflow = document.body.style.overflow
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setImagePreview(null)
      }
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [imagePreview])

  useEffect(() => {
    if (route.type !== 'case-study') {
      return
    }

    const sections = Array.from(document.querySelectorAll<HTMLElement>('.case-page-shell .motion-section'))

    if (sections.length === 0) {
      return
    }

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      sections.forEach((section) => section.classList.add('is-visible'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -10% 0px',
      },
    )

    sections.forEach((section, index) => {
      if (index === 0) {
        section.classList.add('is-visible')
        return
      }

      section.classList.remove('is-visible')
      observer.observe(section)
    })

    return () => observer.disconnect()
  }, [route])

  const handleImagePreviewClick = (event: ReactMouseEvent<HTMLDivElement>) => {
    const target = event.target as HTMLElement
    const image = target.closest('.case-content figure.case-figure img') as HTMLImageElement | null

    if (!image) {
      return
    }

    const figure = image.closest('figure')
    const caption = figure?.querySelector('figcaption')?.textContent?.trim()

    setImagePreview({
      src: image.currentSrc || image.src,
      alt: image.alt || 'Expanded case study image',
      caption: caption || undefined,
    })
  }

  let content

  if (route.type === 'chat') {
    return <ChatbotFlow />
  }

  if (route.type === 'case-study') {
    content = <CaseStudyPage slug={route.slug} />
  } else if (route.type === 'page') {
    content = <SitePageView slug={route.slug} />
  } else {
    content = <HomePage />
  }

  return (
    <div className="app-root" onClickCapture={handleImagePreviewClick}>
      {content}
      <ImagePreviewModal preview={imagePreview} onClose={() => setImagePreview(null)} />
    </div>
  )
}

function ImagePreviewModal({
  preview,
  onClose,
}: {
  preview: ImagePreview | null
  onClose: () => void
}) {
  if (!preview) {
    return null
  }

  return (
    <div
      aria-label={preview.alt}
      aria-modal="true"
      className="image-preview-modal"
      onClick={onClose}
      role="dialog"
    >
      <div className="image-preview-modal__backdrop" />
      <figure className="image-preview-modal__content" onClick={(event) => event.stopPropagation()}>
        <button
          aria-label="Close expanded image"
          className="image-preview-modal__close"
          onClick={onClose}
          type="button"
        >
          <XMarkIcon aria-hidden="true" />
        </button>
        <img alt={preview.alt} src={preview.src} />
        {preview.caption ? <figcaption>{preview.caption}</figcaption> : null}
      </figure>
    </div>
  )
}

function MarkdownContent({
  children,
  className,
}: {
  children: string
  className?: string
}) {
  return (
    <ReactMarkdown
      className={className}
      components={{
        a: ({ href, children }) => (
          <a href={href} rel="noreferrer" target="_blank">
            {children}
          </a>
        ),
      }}
    >
      {children}
    </ReactMarkdown>
  )
}

function renderSitePageMediaBlock(
  section: RichSitePageSection | RichSitePageItem,
  key: string,
  extraClassName?: string,
) {
  const image = section.image

  if (!section.markdown && !image) {
    return null
  }

  if (image) {
    const mediaClasses = [
      'rich-media-band',
      section.imagePosition === 'left' ? 'rich-media-band-reverse' : '',
      'motion-card',
      'site-page-media-band',
      extraClassName ?? '',
    ]
      .filter(Boolean)
      .join(' ')

    return (
      <div className={mediaClasses} key={key}>
        <figure className="case-figure case-figure-band case-figure-full site-page-figure">
          <img alt={image.alt} src={image.src} />
          {image.caption ? <figcaption>{image.caption}</figcaption> : null}
        </figure>
        <div className="rich-media-copy site-page-media-copy">
          {'title' in section && section.title ? <h3>{section.title}</h3> : null}
          {section.markdown ? (
            <MarkdownContent className="site-page-markdown">{section.markdown}</MarkdownContent>
          ) : null}
        </div>
      </div>
    )
  }

  return (
    <div className={`motion-card site-page-text-panel ${extraClassName ?? ''}`.trim()} key={key}>
      {'title' in section && section.title ? <h3>{section.title}</h3> : null}
      {section.markdown ? (
        <MarkdownContent className="site-page-markdown">{section.markdown}</MarkdownContent>
      ) : null}
    </div>
  )
}

function RichSitePageView({ page }: { page: RichSitePage }) {
  return (
    <div className="page-shell case-page-shell rich-site-page-shell">
      <header className="case-hero case-hero-banner motion-section">
        <div
          aria-hidden="true"
          className="case-hero-banner-image"
          style={{ backgroundImage: `url(${page.heroImage.src})` }}
        />
        <nav className="topbar motion-enter motion-delay-1">
          <a className="brand" href="#/">
            Luke
          </a>
          <div className="nav-links">
            <a href="#/">Home</a>
            <button className="nav-link-button" onClick={navigateHome} type="button">
              What I Do
            </button>
          </div>
        </nav>

        <div className="case-hero-banner-content motion-enter motion-delay-2">
          <div className="case-hero-banner-copy site-page-hero-copy">
            <p className="eyebrow">{page.kicker}</p>
            <h1>{page.title}</h1>
            <p className="case-hero-banner-subtitle">{page.heroSubtitle}</p>
            <p className="lead">{page.heroSummary}</p>
          </div>

          <div className="site-page-hero-aside">
            <div className="site-page-hero-block motion-card">
              <p className="case-hero-meta-label">On this page</p>
              <ul className="case-list">
                {page.onThisPage.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            {page.heroNote ? (
              <div className="site-page-hero-block motion-card">
                <p className="case-hero-meta-label">From the page</p>
                <MarkdownContent className="site-page-markdown site-page-hero-note">
                  {page.heroNote}
                </MarkdownContent>
              </div>
            ) : null}
          </div>
        </div>
      </header>

      <main className="case-content rich-site-content">
        {page.sections.map((section) => {
          const sectionNodes: ReactNode[] = []

          if (section.markdown && section.asideMarkdown && !section.image) {
            sectionNodes.push(
              <div className="rich-split-grid site-page-split" key={`${section.title}-split`}>
                <div className="site-page-text-panel motion-card">
                  <MarkdownContent className="site-page-markdown">{section.markdown}</MarkdownContent>
                </div>
                <aside className="rich-aside motion-card site-page-panel site-page-split-aside">
                  {section.asideTitle ? <p className="section-label">{section.asideTitle}</p> : null}
                  <MarkdownContent className="site-page-markdown">{section.asideMarkdown}</MarkdownContent>
                </aside>
              </div>,
            )
          } else {
            if (section.markdown || section.image) {
              sectionNodes.push(
                renderSitePageMediaBlock(
                  section,
                  `${section.title}-lead`,
                  section.image ? 'site-page-lead-band' : '',
                ) as ReactNode,
              )
            }

            if (section.asideMarkdown) {
              sectionNodes.push(
                <aside className="rich-aside motion-card site-page-panel" key={`${section.title}-aside`}>
                  {section.asideTitle ? <p className="section-label">{section.asideTitle}</p> : null}
                  <MarkdownContent className="site-page-markdown">{section.asideMarkdown}</MarkdownContent>
                </aside>,
              )
            }
          }

          if (section.items && section.items.length > 0) {
            sectionNodes.push(
              <div className="site-page-stack" key={`${section.title}-items`}>
                {section.items.map((item, index) =>
                  renderSitePageMediaBlock(item, `${section.title}-item-${index}`),
                )}
              </div>,
            )
          }

          if (section.gallery && section.gallery.length > 0) {
            sectionNodes.push(
              <div className="rich-social-grid site-page-gallery motion-card" key={`${section.title}-gallery`}>
                {section.gallery.map((image) => (
                  <figure className="case-figure case-figure-social case-figure-full" key={image.src}>
                    <img alt={image.alt} src={image.src} />
                    {image.caption ? <figcaption>{image.caption}</figcaption> : null}
                  </figure>
                ))}
              </div>,
            )
          }

          if (section.footerMarkdown) {
            sectionNodes.push(
              <aside className="rich-aside motion-card site-page-panel" key={`${section.title}-footer`}>
                {section.footerTitle ? <p className="section-label">{section.footerTitle}</p> : null}
                <MarkdownContent className="site-page-markdown">{section.footerMarkdown}</MarkdownContent>
              </aside>,
            )
          }

          return (
            <section className="case-section motion-section" key={section.title}>
              <div className="section-heading motion-enter">
                <p className="section-label">{section.label}</p>
                <h2>{section.title}</h2>
              </div>
              {sectionNodes}
            </section>
          )
        })}

        <section className="case-nav motion-section">
          <a className="case-nav-card case-nav-home motion-card" href="#/">
            <span className="section-label">Back</span>
            <strong>Homepage</strong>
          </a>
          <button className="case-nav-card motion-card" onClick={() => navigateToPage('about-luke')} type="button">
            <span className="section-label">Profile</span>
            <strong>More about Luke</strong>
          </button>
          <a className="case-nav-card case-nav-home motion-card" href="#/">
            <span className="section-label">Browse</span>
            <strong>Case studies</strong>
          </a>
        </section>
      </main>
    </div>
  )
}

function HomePage() {
  const [selectedCaseStudyFilters, setSelectedCaseStudyFilters] = useState<CaseStudyFilterState>(
    createEmptyCaseStudyFilters,
  )

  const visibleCaseStudies = caseStudies.filter((project) =>
    caseStudyFilterGroups.every(
      (group) =>
        selectedCaseStudyFilters[group.key].length === 0 ||
        project.tags.some((tag) => selectedCaseStudyFilters[group.key].includes(tag)),
    ),
  )

  const hasActiveCaseStudyFilters = Object.values(selectedCaseStudyFilters).some(
    (selectedValues) => selectedValues.length > 0,
  )

  function toggleCaseStudyFilter(category: CaseStudyFilterKey, option: string) {
    setSelectedCaseStudyFilters((currentFilters) => {
      const isActive = currentFilters[category].includes(option)

      return {
        ...currentFilters,
        [category]: isActive
          ? currentFilters[category].filter((value) => value !== option)
          : [...currentFilters[category], option],
      }
    })
  }

  function clearCaseStudyFilters() {
    setSelectedCaseStudyFilters(createEmptyCaseStudyFilters())
  }

  return (
    <>
      <header className="hero motion-section" id="top">
        <div className="hero-inner">
          <nav className="topbar motion-enter motion-delay-1">
            <a className="brand" href="#/">
              Luke
            </a>
            <div className="nav-links">
              <a href="#work">Case Studies</a>
              <a href="#strengths">What I Do</a>
              <a href="#contact">Contact</a>
            </div>
          </nav>
        </div>

        <div className="hero-inner">
          <div className="hero-headline-wrap motion-enter motion-delay-2">
            <p className="eyebrow">Product Designer · 8 yrs</p>
            <h1>I design complex products end to end — and help the people around me do the same.</h1>
          </div>

          <div className="hero-layout">
            <section className="hero-copy motion-enter motion-delay-3">
              <p className="lead">
                I&apos;m Lookchin — most people call me Luke. I studied Computer Engineering at
                Chulalongkorn University, switched into UX/UI design, and have spent eight years
                doing the full loop: research, definition, ideation, prototyping, testing, and
                shipping real products.
              </p>
              <blockquote className="hero-quote">
                I co-founded a startup, led its product design from scratch, and saw it acquired.
                Eight years in, I&apos;m still most interested in the hard problems — the ones where
                real constraints and real users are both pulling at once.
              </blockquote>
              <div className="hero-actions">
                <button className="button button-primary" onClick={navigateToChat}>
                  Chat with Luka
                </button>
                <a className="button button-secondary" href="#work">
                  See the Work
                </a>
                <a className="button button-secondary" href="https://www.linkedin.com/in/lookchin/">
                  LinkedIn
                </a>
              </div>
            </section>

            <aside className="hero-panel motion-enter motion-delay-4">
              <p className="section-label">At a glance</p>
              <ul className="highlight-list">
                {highlights.map((item) => (
                  <li key={item.text}>
                    <item.icon className="inline-icon highlight-icon" />
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </div>
      </header>

      <div className="page-shell">
      <main>
        <section className="intro-grid motion-section" id="about">
          <article className="motion-card">
            <AcademicCapIcon className="intro-icon" />
            <p className="section-label">Background</p>
            <p>
              I studied Computer Engineering at Chulalongkorn University, then made the switch into
              UX/UI design. That engineering foundation still shapes how I think — I care about
              constraints, systems, and making things actually buildable, not just beautiful.
            </p>
          </article>
          <article className="motion-card">
            <BriefcaseIcon className="intro-icon" />
            <p className="section-label">Recent chapter</p>
            <p>
              I was part of the founding team behind Celatone — a smart contract explorer for the
              Cosmos ecosystem. We grew it into the default explorer for multiple networks, and the
              whole team was acquired by Initia Labs in 2024.
            </p>
          </article>
          <article className="motion-card">
            <BookOpenIcon className="intro-icon" />
            <p className="section-label">Writing & teaching</p>
            <p>
              I write about growing as a UX designer — articles that have been shared over 1,000
              times. That opened doors to speaking at events and teaching courses about the
              practical, unglamorous side of design that most textbooks skip.
            </p>
          </article>
        </section>

        <section className="strengths-section motion-section" id="strengths">
          <div className="section-heading motion-enter">
            <p className="section-label">What I Do</p>
            <h2>My work spans craft, systems, and helping teams do better design together.</h2>
          </div>

          <div className="strength-grid">
            {strengths.map((strength) => (
              <a className="strength-card motion-card" href={strength.href} key={strength.title}>
                <strength.icon className="inline-icon section-icon" />
                <h3>{strength.title}</h3>
                <p>{strength.description}</p>
                <span className="card-link-row">
                  Explore
                  <ChevronRightIcon className="inline-icon chevron-icon" />
                </span>
              </a>
            ))}
          </div>
        </section>

        <section className="work-section motion-section" id="work">
          <div className="section-heading motion-enter">
            <p className="section-label">Case Studies</p>
            <h2>Ten projects. Each one designed end to end.</h2>
            <p className="section-note">
              Developer tools, DeFi, analytics, payments — shipped with real teams under real constraints.
            </p>
          </div>

          <div className="work-filter-shell motion-enter motion-delay-1">
            <div className="work-filter-toolbar">
              <div className="work-filter-summary">
                <p className="section-label">Browse by</p>
                <p className="work-filter-count">
                  Showing {visibleCaseStudies.length} of {caseStudies.length} case studies
                </p>
              </div>

              {hasActiveCaseStudyFilters ? (
                <button className="work-filter-clear" onClick={clearCaseStudyFilters} type="button">
                  Clear filters
                </button>
              ) : null}
            </div>

            <div className="work-filter-groups">
              {caseStudyFilterGroups.map((group) => (
                <section className={`work-filter-group work-filter-group-${group.key}`} key={group.key}>
                  <p className="work-filter-label">{group.label}</p>
                  <div className="work-filter-options">
                    {group.options.map((option) => {
                      const isActive = selectedCaseStudyFilters[group.key].includes(option)

                      return (
                        <button
                          aria-pressed={isActive}
                          className={`work-filter-chip${isActive ? ' is-active' : ''}`}
                          key={option}
                          onClick={() => toggleCaseStudyFilter(group.key, option)}
                          style={getCaseStudyFilterChipStyle(option)}
                          type="button"
                        >
                          {option}
                        </button>
                      )
                    })}
                  </div>
                </section>
              ))}
            </div>
          </div>

          <div className="project-grid">
            {visibleCaseStudies.map((project) => (
              <button
                className="project-card project-card-button motion-card"
                key={project.slug}
                onClick={() => navigateToCaseStudy(project.slug)}
                type="button"
                style={{
                  backgroundImage: `url(${project.thumbnail})`,
                  ...(project.slug === 'markr' ? { backgroundSize: '140%' } : {}),
                }}
              >
                <p className="project-meta">{project.meta}</p>
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
                <div className="tag-row">
                  {project.tags.map((tag) => (
                    <span className="tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="card-link-row">
                  View case study
                  <ChevronRightIcon className="inline-icon chevron-icon" />
                </span>
              </button>
            ))}

            {visibleCaseStudies.length === 0 ? (
              <article className="work-empty-state">
                <p className="section-label">No matches</p>
                <h3>No case studies match that filter combination.</h3>
                <p>Try removing one filter group or reset everything to see the full set again.</p>
                <button className="work-filter-clear" onClick={clearCaseStudyFilters} type="button">
                  Reset filters
                </button>
              </article>
            ) : null}
          </div>
        </section>

        <section className="contact-section motion-section" id="contact">
          <div className="section-heading motion-enter">
            <p className="section-label">Get in touch</p>
            <h2>Open to conversations about product design, design leadership, and thoughtful UX.</h2>
          </div>

          <div className="contact-grid">
            <article className="contact-card motion-card">
              <p className="section-label">Contact</p>
              <p className="contact-line">
                <MapPinIcon className="inline-icon contact-icon" />
                Bangkok, Thailand
              </p>
              <a className="contact-line" href="mailto:P.Achatsachat@gmail.com">
                <EnvelopeIcon className="inline-icon contact-icon" />
                P.Achatsachat@gmail.com
              </a>
              <a className="contact-line" href="tel:+66838339168">
                <PhoneIcon className="inline-icon contact-icon" />
                +66 83 833 9168
              </a>
              <a className="contact-line" href="https://www.linkedin.com/in/lookchin/">
                <ArrowTopRightOnSquareIcon className="inline-icon contact-icon" />
                LinkedIn profile
              </a>
            </article>

            <article className="contact-card motion-card">
              <p className="section-label">Education</p>
              <p className="contact-line">
                <AcademicCapIcon className="inline-icon contact-icon" />
                Chulalongkorn University
              </p>
              <p>Computer Engineering, Bachelor Degree</p>
              <p className="contact-line">
                <AcademicCapIcon className="inline-icon contact-icon" />
                Triam Udom Suksa School
              </p>
              <p>Computer-Science program</p>
            </article>

            <article className="contact-card motion-card">
              <p className="section-label">More about me</p>
              <p>Beyond the case studies — background, process, and how I approach the work.</p>
              <a className="contact-line" href="#/pages/about-luke">
                <ChevronRightIcon className="inline-icon contact-icon" />
                About Luke
              </a>
            </article>
          </div>
        </section>
      </main>
      </div>
    </>
  )
}

function CaseStudyPage({ slug }: { slug: string }) {
  const study = caseStudies.find((item) => item.slug === slug)

  if (!study) {
    return <NotFound />
  }

  if (slug === 'celatone') {
    return <CelatoneCaseStudyPage study={study} />
  }

  if (slug === 'initiascan') {
    return <InitiaScanCaseStudyPage study={study} />
  }

  const richData = richCaseStudies[slug]
  if (richData) {
    return <RichCaseStudyPage richData={richData} study={study} />
  }

  const currentIndex = caseStudies.findIndex((item) => item.slug === slug)
  const previousStudy = caseStudies[(currentIndex - 1 + caseStudies.length) % caseStudies.length]
  const nextStudy = caseStudies[(currentIndex + 1) % caseStudies.length]

  return (
    <div className="page-shell case-page-shell">
      <header className="case-hero motion-section">
        <nav className="topbar motion-enter motion-delay-1">
          <a className="brand" href="#/">
            Luke
          </a>
          <div className="nav-links">
            <a href="#/">Home</a>
            <button className="nav-link-button" onClick={navigateHome} type="button">
              What I Do
            </button>
          </div>
        </nav>

        <div className="case-hero-grid">
          <section className="case-hero-copy case-hero-copy-compact motion-enter motion-delay-2">
            <p className="eyebrow">{study.kicker}</p>
            <h1>{study.title}</h1>
            <p className="lead">{study.summary}</p>
            <div className="tag-row">
              {study.tags.map((tag) => (
                <span className="tag" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
          </section>

          <aside className="case-side-panel motion-enter motion-delay-3">
            <div className="case-meta-block motion-card">
              <p className="section-label">Project Snapshot</p>
              <ul className="case-list">
                <li>{study.meta}</li>
                <li>{study.duration}</li>
                <li>{study.role}</li>
              </ul>
            </div>

            <div className="case-meta-block motion-card">
              <p className="section-label">Quick Highlights</p>
              <ul className="case-list">
                {study.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </header>

      <main className="case-content">
        <section className="case-section case-section-motivation motion-section">
          <div className="section-heading motion-enter">
            <p className="section-label">Context</p>
            <h2>{study.contextTitle}</h2>
          </div>
          <p className="section-note">{study.contextSummary}</p>
        </section>

        <section className="case-section case-section-research motion-section">
          <div className="section-heading motion-enter">
            <p className="section-label">Challenges</p>
            <h2>{study.challengeTitle}</h2>
          </div>
          <div className="case-card-grid">
            {study.challengePoints.map((item) => (
              <article className="case-card motion-card" key={item}>
                <p>{item}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="case-section case-section-pain motion-section">
          <div className="section-heading motion-enter">
            <p className="section-label">Approach</p>
            <h2>{study.approachTitle}</h2>
          </div>
          <div className="case-card-grid">
            {study.approachPoints.map((item) => (
              <article className="case-card motion-card" key={item}>
                <p>{item}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="case-section case-section-journey motion-section">
          <div className="section-heading motion-enter">
            <p className="section-label">Outcomes</p>
            <h2>{study.outcomeTitle}</h2>
          </div>
          <div className="case-card-grid">
            {study.outcomePoints.map((item) => (
              <article className="case-card motion-card" key={item}>
                <p>{item}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="case-section case-section-solutions motion-section">
          <div className="section-heading motion-enter">
            <p className="section-label">Key Learnings</p>
            <h2>{study.learningTitle}</h2>
          </div>
          <div className="case-card-grid">
            {study.learningPoints.map((item) => (
              <article className="case-card motion-card" key={item}>
                <p>{item}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="case-nav motion-section">
          <button
            className="case-nav-card motion-card"
            onClick={() => navigateToCaseStudy(previousStudy.slug)}
            type="button"
          >
            <span className="section-label">Previous</span>
            <strong>{previousStudy.title}</strong>
          </button>
          <a className="case-nav-card case-nav-home motion-card" href="#/">
            <span className="section-label">Back</span>
            <strong>All case studies</strong>
          </a>
          <button
            className="case-nav-card motion-card"
            onClick={() => navigateToCaseStudy(nextStudy.slug)}
            type="button"
          >
            <span className="section-label">Next</span>
            <strong>{nextStudy.title}</strong>
          </button>
        </section>
      </main>
    </div>
  )
}

function CelatoneCaseStudyPage({ study }: { slug?: string; study: (typeof caseStudies)[number] }) {
  const currentIndex = caseStudies.findIndex((item) => item.slug === study.slug)
  const previousStudy = caseStudies[(currentIndex - 1 + caseStudies.length) % caseStudies.length]
  const nextStudy = caseStudies[(currentIndex + 1) % caseStudies.length]

  return (
    <div className="page-shell case-page-shell">
      <header className="case-hero case-hero-banner motion-section">
        <div
          aria-hidden="true"
          className="case-hero-banner-image"
          style={{ backgroundImage: `url(${celatoneCaseStudy.heroImage.src})` }}
        />
        <nav className="topbar motion-enter motion-delay-1">
          <a className="brand" href="#/">
            Luke
          </a>
          <div className="nav-links">
            <a href="#/">Home</a>
            <button className="nav-link-button" onClick={navigateHome} type="button">
              What I Do
            </button>
          </div>
        </nav>

        <div className="case-hero-banner-content motion-enter motion-delay-2">
          <div className="case-hero-banner-copy">
            <p className="eyebrow">Developer Tools</p>
            <h1>Celatone</h1>
            <p className="case-hero-banner-subtitle">{celatoneCaseStudy.heroDetails.subtitle}</p>
            <p className="lead">
              Became the default block explorer across multiple Cosmos networks, leading design
              from 0 to 1 through a two-year run and team acquisition by Initia Labs.
            </p>
            <div className="tag-row">
              <span className="tag">Desktop</span>
              <span className="tag">Mobile</span>
              <span className="tag">Developer Tools</span>
            </div>
          </div>

          <div className="case-hero-banner-meta" aria-label="Project details">
            <div className="case-hero-meta-quick-grid">
              {celatoneCaseStudy.heroDetails.facts.map((item) => (
                <div className="case-hero-meta-block" key={item.label}>
                  <p className="case-hero-meta-label">{item.label}</p>
                  <p className="case-hero-meta-value">{item.value}</p>
                </div>
              ))}
            </div>

            <div className="case-hero-meta-row">
              <p className="case-hero-meta-label">Project Duration</p>
              <div className="case-hero-meta-stack">
                {celatoneCaseStudy.heroDetails.duration.map((item) => (
                  <p className="case-hero-meta-value" key={item}>
                    {item}
                  </p>
                ))}
              </div>
            </div>

            <div className="case-hero-meta-row">
              <p className="case-hero-meta-label">Tools and Methodology</p>
              <div className="case-hero-meta-tags">
                {celatoneCaseStudy.heroDetails.methods.map((item) => (
                  <span className="case-hero-meta-chip" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="case-hero-meta-row">
              <p className="case-hero-meta-label">Working Team</p>
              <div className="case-hero-meta-stack">
                {celatoneCaseStudy.heroDetails.team.map((item) => (
                  <p className="case-hero-meta-value" key={item}>
                    {item}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </header>

        <main className="case-content rich-case-content">
          <section className="case-section case-section-overview motion-section">
            <div className="rich-overview-grid motion-enter">
            <div className="rich-overview-main">
              <div className="section-heading">
                <p className="section-label">Background</p>
                <h2>Celatone at a glance</h2>
              </div>
              <p className="section-note rich-overview-note">{celatoneCaseStudy.background}</p>
            </div>

            <div className="rich-overview-side">
              <section className="rich-overview-meta motion-card">
                <p className="section-label">Project Links</p>
                <div className="rich-overview-link-list">
                  {celatoneCaseStudy.projectLinks.map((link) =>
                    link.href ? (
                      <a className="rich-overview-link-row" href={link.href} key={link.label}>
                        <span className="rich-overview-link-label">{link.label}</span>
                        <span className="rich-overview-link-value">
                          Visit site
                          <ArrowTopRightOnSquareIcon className="inline-icon contact-icon" />
                        </span>
                      </a>
                    ) : (
                      <div className="rich-overview-link-row" key={link.label}>
                        <span className="rich-overview-link-label">{link.label}</span>
                        <span className="rich-overview-link-value">{link.note}</span>
                      </div>
                    ),
                  )}
                </div>
              </section>
            </div>
            <aside className="rich-overview-summary-panel motion-card">
              <p className="section-label">Case Study Summary</p>
              <div className="rich-overview-summary-grid">
                {celatoneCaseStudy.summary.map((item, index) => (
                  <article className="rich-summary-card" key={item.emphasis}>
                    <span className="rich-summary-index">{String(index + 1).padStart(2, '0')}</span>
                    <p>
                      <strong>{item.emphasis}</strong> {item.body}
                    </p>
                  </article>
                ))}
              </div>
            </aside>
          </div>
        </section>

        <section className="case-section case-section-usability motion-section">
          <div className="rich-split-grid">
            <div className="rich-copy-stack">
              <div className="section-heading motion-enter">
                <p className="section-label">Motivation</p>
                <h2>Why we built it</h2>
              </div>
              {celatoneCaseStudy.motivation.map((paragraph) => (
                <p className="section-note rich-paragraph" key={paragraph}>
                  {paragraph}
                </p>
              ))}
            </div>
            <aside className="rich-aside rich-role-panel motion-card">
              <p className="section-label">My Role</p>
              <ul className="case-list">
                {celatoneCaseStudy.role.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </aside>
          </div>
        </section>

          <section className="case-section case-section-research motion-section">
            <div className="section-heading motion-enter">
              <p className="section-label">Research</p>
              <h2>Talking through the pain with developers</h2>
            </div>
            <div className="rich-research-grid">
              <figure className="case-figure case-figure-band rich-research-image motion-card">
                <img alt="Research image from Celatone discovery work." src={celatoneCaseStudy.research.image} />
              </figure>
              <div className="rich-research-side">
                <div className="rich-research-snapshot motion-card">
                  <p className="section-label">Research Snapshot</p>
                  <blockquote className="rich-quote">{celatoneCaseStudy.research.quote}</blockquote>
                </div>
                <div className="rich-research-methods">
                  <p className="section-label">How We Researched</p>
                  <ul className="case-list">
                    {celatoneCaseStudy.research.bullets.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="rich-research-heard">
                  <p className="section-label">What We Heard</p>
                </div>
                <div className="rich-research-quotes">
                  {celatoneCaseStudy.research.quotes.map((item) => (
                    <blockquote className="rich-mini-quote" key={item}>
                      {item}
                    </blockquote>
                  ))}
                </div>
              </div>
            </div>
          </section>

        <section className="case-section case-section-pain motion-section">
          <div className="section-heading motion-enter">
            <p className="section-label">Pain Points</p>
            <h2>The workflow was fractured and hard to learn</h2>
          </div>
          <div className="rich-feature-stack">
            {celatoneCaseStudy.painPoints.map((item, index) => (
              <article className="rich-feature-row rich-pain-point motion-card" key={item.title}>
                <div className="rich-feature-copy rich-pain-copy">
                  <div className="rich-pain-header">
                    <span className="rich-summary-index rich-pain-index">{String(index + 1).padStart(2, '0')}</span>
                    <div className="rich-pain-title-group">
                      <p className="section-label">Pain Point</p>
                      <h3>{item.title}</h3>
                    </div>
                  </div>
                  <p>{item.body}</p>
                </div>
                <figure className="case-figure case-figure-side rich-pain-figure">
                  <img alt={item.title} src={item.image} />
                  <figcaption>{item.caption}</figcaption>
                </figure>
              </article>
            ))}
          </div>
        </section>

        <section className="case-section case-section-explorer motion-section">
          <div className="section-heading motion-enter">
            <p className="section-label">Journey</p>
            <h2>From current flow to better flow</h2>
          </div>
          <div className="rich-paired-media-grid">
            <div className="rich-media-band rich-media-band-vertical motion-card">
              <figure className="case-figure case-figure-band">
                <img alt="Celatone smart contract developer journey." src={celatoneCaseStudy.journeyImage} />
              </figure>
              <div className="rich-media-copy">
                <p className="section-label">Journey Map</p>
                <p className="section-note">
                  After gaining enough insight from users, we defined the as-is journey and the to-be
                  journey to make the screen flows and transitions explicit.
                </p>
              </div>
            </div>
            <div className="rich-media-band rich-media-band-vertical motion-card">
              <figure className="case-figure case-figure-band">
                <img alt="Celatone sitemap." src={celatoneCaseStudy.sitemapImage} />
              </figure>
              <div className="rich-media-copy">
                <p className="section-label">Sitemap</p>
                <p className="section-note">
                  We also designed a sitemap that clearly disclosed the main use cases, including a
                  deploy flow that guides users from upload to instantiation, then naturally into
                  query and other next actions.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="case-section case-section-solutions motion-section">
          <div className="section-heading motion-enter">
            <p className="section-label">Solutions</p>
            <h2>Designing around actual blockchain mechanics</h2>
          </div>
          <div className="rich-feature-stack">
            {celatoneCaseStudy.solutions.map((item, index) => (
              <article className="rich-feature-row rich-solution-point motion-card" key={item.title}>
                <div className="rich-feature-copy rich-solution-copy">
                  <div className="rich-solution-header">
                    <span className="rich-summary-index rich-solution-index">{String(index + 1).padStart(2, '0')}</span>
                    <div className="rich-solution-title-group">
                      <p className="section-label">Solution</p>
                      <h3>{item.title}</h3>
                    </div>
                  </div>
                  <p>{item.body}</p>
                </div>
                <figure className="case-figure case-figure-side rich-solution-figure">
                  <img alt={item.title} src={item.image} />
                  <figcaption>{item.caption}</figcaption>
                </figure>
              </article>
            ))}
          </div>
        </section>

        <section className="case-section case-section-learnings motion-section">
          <div className="section-heading motion-enter">
            <p className="section-label">Usability Tests</p>
            <h2>Checking whether the product was actually easier to use</h2>
          </div>
          <div className="rich-media-band motion-card">
            <figure className="case-figure case-figure-band case-figure-full">
              <img alt="Celatone usability results." src={celatoneCaseStudy.usability.image} />
            </figure>
            <div className="rich-stat-list">
              <ul className="case-list">
                {celatoneCaseStudy.usability.bullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="case-section motion-section">
          <div className="section-heading motion-enter">
            <p className="section-label">Product Development</p>
            <h2>Pre-launch, launch, and post-launch growth</h2>
          </div>
          <div className="rich-media-band motion-card">
            <figure className="case-figure case-figure-band case-figure-full">
              <img alt="Celatone product development timeline." src={celatoneCaseStudy.development.image} />
            </figure>
            <div className="rich-media-copy">
              <p className="section-label">Lifecycle</p>
              {celatoneCaseStudy.development.paragraphs.map((paragraph) => (
                <p className="section-note rich-paragraph" key={paragraph}>
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
          <div className="rich-social-grid">
            {celatoneCaseStudy.development.socialImages.map((image) => (
              <figure className="case-figure case-figure-social case-figure-full motion-card" key={image}>
                <img alt="Celatone social reception." src={image} />
              </figure>
            ))}
          </div>
        </section>

        <section className="case-section case-section-improvement motion-section">
          <div className="section-heading motion-enter">
            <p className="section-label">Product Improvement</p>
            <h2>Making contract interaction easier over time</h2>
          </div>
          <p className="section-note">
            After launch, we kept improving existing features. Before JSON Schema support,
            querying through raw JSON forced users into too much guesswork around function
            parameters and values, which made contract interaction error-prone and hard to learn.
          </p>
          <div className="rich-feature-stack">
            {celatoneCaseStudy.improvements.map((item, index) => (
              <article className="rich-feature-row rich-improvement-point motion-card" key={item.title}>
                <div className="rich-feature-copy rich-improvement-copy">
                  <div className="rich-improvement-header">
                    <p className="rich-summary-index rich-improvement-index">
                      {String(index + 1).padStart(2, '0')}
                    </p>
                    <div className="rich-improvement-title-group">
                      <p className="section-label">Improvement</p>
                      <h3>{item.title}</h3>
                    </div>
                  </div>
                  <p>{item.body}</p>
                </div>
                <figure className="case-figure case-figure-side rich-improvement-figure">
                  <img alt={item.title} src={item.image} />
                  <figcaption>{item.caption}</figcaption>
                </figure>
              </article>
            ))}
          </div>
        </section>

        <section className="case-section motion-section">
          <div className="section-heading motion-enter">
            <p className="section-label">Explorer Features</p>
            <h2>Growing into a broader blockchain explorer</h2>
          </div>
          <div className="rich-feature-card-grid">
            {celatoneCaseStudy.explorerFeatures.map((item) => (
              <article className="rich-feature-card motion-card" key={item.title}>
                <figure className="case-figure case-figure-card case-figure-full">
                  <img alt={item.title} src={item.image} />
                </figure>
                <div className="rich-feature-card-copy">
                  <p className="section-label">Feature</p>
                  <h3>
                    <a href={item.href}>{item.title}</a>
                  </h3>
                  <p>{item.body}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="case-section case-section-outcome motion-section">
          <div className="outcome-band motion-card">
            <figure className="case-figure case-figure-full case-figure-acquisition">
              <img alt="Celatone acquisition outcome." src={celatoneCaseStudy.acquisition.image} />
            </figure>
            <div className="outcome-heading">
              <h2>Product success led to acquisition</h2>
            </div>
            <div className="outcome-copy">
              <p className="section-label">Outcome</p>
              <p className="section-note">{celatoneCaseStudy.acquisition.paragraph}</p>
            </div>
          </div>
        </section>

        <section className="case-section motion-section">
          <div className="section-heading motion-enter">
            <p className="section-label">What We Learned</p>
            <h2>Lessons that carried forward</h2>
          </div>
          <div className="rich-two-column">
            {celatoneCaseStudy.learnings.map((item, index) => {
              const Icon = learningIcons[index % learningIcons.length]

              return (
              <article className="rich-column motion-card" key={item.title}>
                <div className="learning-header">
                  <Icon aria-hidden="true" className="learning-icon" />
                  <h3>{item.title}</h3>
                </div>
                <p>{item.body}</p>
              </article>
              )
            })}
          </div>
        </section>

        <section className="case-nav motion-section">
          <button
            className="case-nav-card motion-card"
            onClick={() => navigateToCaseStudy(previousStudy.slug)}
            type="button"
          >
            <span className="section-label">Previous</span>
            <strong>{previousStudy.title}</strong>
          </button>
          <a className="case-nav-card case-nav-home motion-card" href="#/">
            <span className="section-label">Back</span>
            <strong>All case studies</strong>
          </a>
          <button
            className="case-nav-card motion-card"
            onClick={() => navigateToCaseStudy(nextStudy.slug)}
            type="button"
          >
            <span className="section-label">Next</span>
            <strong>{nextStudy.title}</strong>
          </button>
        </section>
      </main>
    </div>
  )
}

function SitePageView({ slug }: { slug: string }) {
  const richPage = richSitePages[slug]

  if (richPage) {
    return <RichSitePageView page={richPage} />
  }

  const page = sitePages.find((item) => item.slug === slug)

  if (!page) {
    return <NotFound />
  }

  return (
    <div className="page-shell case-page-shell">
      <header className="case-hero motion-section">
        <nav className="topbar motion-enter motion-delay-1">
          <a className="brand" href="#/">
            Luke
          </a>
          <div className="nav-links">
            <a href="#/">Home</a>
            <button className="nav-link-button" onClick={navigateHome} type="button">
              What I Do
            </button>
          </div>
        </nav>

        <div className="case-hero-grid">
          <section className="case-hero-copy motion-enter motion-delay-2">
            <p className="eyebrow">{page.kicker}</p>
            <h1>{page.title}</h1>
            <p className="lead">{page.summary}</p>
          </section>

          <aside className="case-side-panel motion-enter motion-delay-3">
            <div className="case-meta-block motion-card">
              <p className="section-label">Highlights</p>
              <ul className="case-list">
                {page.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </header>

      <main className="case-content">
        {page.sections.map((section) => (
          <section className="case-section motion-section" key={section.title}>
            <div className="section-heading motion-enter">
              <p className="section-label">{page.kicker}</p>
              <h2>{section.title}</h2>
            </div>
            <p className="section-note">{section.body}</p>
          </section>
        ))}

        <section className="case-nav motion-section">
          <a className="case-nav-card case-nav-home motion-card" href="#/">
            <span className="section-label">Back</span>
            <strong>Homepage</strong>
          </a>
          <button className="case-nav-card motion-card" onClick={() => navigateToPage('about-luke')} type="button">
            <span className="section-label">Profile</span>
            <strong>More about Luke</strong>
          </button>
          <a className="case-nav-card case-nav-home motion-card" href="#/">
            <span className="section-label">Browse</span>
            <strong>Case studies</strong>
          </a>
        </section>
      </main>
    </div>
  )
}

function InitiaScanCaseStudyPage({ study }: { study: (typeof caseStudies)[number] }) {
  const currentIndex = caseStudies.findIndex((item) => item.slug === study.slug)
  const previousStudy = caseStudies[(currentIndex - 1 + caseStudies.length) % caseStudies.length]
  const nextStudy = caseStudies[(currentIndex + 1) % caseStudies.length]
  const moveParadigmFigure = initiascanCaseStudy.solutions.moveParadigm.find((item) => item.image)

  return (
    <div className="page-shell case-page-shell initiascan-case-page">
      <header className="case-hero case-hero-banner motion-section">
        <div
          aria-hidden="true"
          className="case-hero-banner-image"
          style={{ backgroundImage: `url(${initiascanCaseStudy.heroImage.src})` }}
        />
        <nav className="topbar motion-enter motion-delay-1">
          <a className="brand" href="#/">
            Luke
          </a>
          <div className="nav-links">
            <a href="#/">Home</a>
            <button className="nav-link-button" onClick={navigateHome} type="button">
              What I Do
            </button>
          </div>
        </nav>

        <div className="case-hero-banner-content motion-enter motion-delay-2">
          <div className="case-hero-banner-copy">
            <p className="eyebrow">{study.kicker}</p>
            <h1>{study.title}</h1>
            <p className="case-hero-banner-subtitle">{initiascanCaseStudy.heroDetails.subtitle}</p>
            <p className="lead">{initiascanCaseStudy.heroSummary}</p>
            <div className="tag-row">
              {study.tags.map((tag) => (
                <span className="tag" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="case-hero-banner-meta" aria-label="Project details">
            <div className="case-hero-meta-quick-grid">
              {initiascanCaseStudy.heroDetails.facts.map((item) => (
                <div className="case-hero-meta-block" key={item.label}>
                  <p className="case-hero-meta-label">{item.label}</p>
                  <p className="case-hero-meta-value">{item.value}</p>
                </div>
              ))}
            </div>

            <div className="case-hero-meta-row">
              <p className="case-hero-meta-label">Project Duration</p>
              <div className="case-hero-meta-stack">
                {initiascanCaseStudy.heroDetails.duration.map((item) => (
                  <p className="case-hero-meta-value" key={item}>
                    {item}
                  </p>
                ))}
              </div>
            </div>

            <div className="case-hero-meta-row">
              <p className="case-hero-meta-label">Tools and Methodologies</p>
              <div className="case-hero-meta-tags">
                {initiascanCaseStudy.heroDetails.methods.map((item) => (
                  <span className="case-hero-meta-chip" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="case-hero-meta-row">
              <p className="case-hero-meta-label">Working Team</p>
              <div className="case-hero-meta-stack">
                {initiascanCaseStudy.heroDetails.team.map((item) => (
                  <p className="case-hero-meta-value" key={item}>
                    {item}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="case-content rich-case-content">
        <section className="case-section case-section-overview motion-section">
          <div className="rich-overview-grid rich-overview-grid-single motion-enter">
            <div className="rich-overview-main">
              <div className="section-heading">
                <p className="section-label">Background</p>
                <h2>InitiaScan at a glance</h2>
              </div>
              <figure className="case-figure case-figure-band rich-research-image initiascan-background-figure">
                <img
                  alt={initiascanCaseStudy.backgroundImage.alt}
                  src={initiascanCaseStudy.backgroundImage.src}
                />
              </figure>
            </div>

            <div className="rich-overview-side initiascan-overview-side">
              <div className="initiascan-overview-copy">
                {initiascanCaseStudy.backgroundParagraphs.map((paragraph) => (
                  <p className="section-note rich-overview-note initiascan-overview-note" key={paragraph}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            <aside className="rich-aside rich-role-panel motion-card initiascan-role-panel">
              <p className="section-label">My Role</p>
              <ul className="case-list">
                {initiascanCaseStudy.role.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </aside>

            <aside className="rich-overview-summary-panel motion-card">
              <p className="section-label">Case Study Summary</p>
              <div className="rich-overview-summary-grid initiascan-summary-grid">
                {initiascanCaseStudy.summary.map((item, index) => (
                  <article className="rich-summary-card" key={item.emphasis}>
                    <span className="rich-summary-index">{String(index + 1).padStart(2, '0')}</span>
                    <p>
                      <strong>{item.emphasis}</strong> {item.body}
                    </p>
                  </article>
                ))}
              </div>
            </aside>
          </div>
        </section>

        <section className="case-section case-section-research motion-section">
          <div className="section-heading motion-enter">
            <p className="section-label">User and Technical Challenges</p>
            <h2>MOVE added a new layer of complexity</h2>
          </div>

          <div className="initiascan-challenge-layout">
            <div className="rich-copy-stack initiascan-challenge-copy">
              {initiascanCaseStudy.challenges.paragraphs.map((paragraph) => (
                <p className="section-note rich-paragraph" key={paragraph}>
                  {paragraph}
                </p>
              ))}
              <p className="section-note rich-paragraph">{initiascanCaseStudy.challenges.closing}</p>
            </div>

            <div className="rich-two-column initiascan-challenge-grid">
              {initiascanCaseStudy.challenges.points.map((point) => (
                <article className="rich-aside motion-card initiascan-challenge-card" key={point.title}>
                  <p className="section-label">{point.title}</p>
                  <p>{point.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="case-section case-section-solutions motion-section">
          <div className="section-heading motion-enter">
            <p className="section-label">Solution as InitiaScan</p>
            <h2>Adapting to the MOVE Paradigm</h2>
          </div>

          <div className="initiascan-solution-layout">
            <div className="initiascan-solution-copy-column">
              <p className="section-note rich-paragraph initiascan-solution-intro">
                {initiascanCaseStudy.solutions.intro}
              </p>

              <div className="initiascan-solution-list">
                {initiascanCaseStudy.solutions.moveParadigm.map((item, index) => (
                  <article className="initiascan-solution-text-block" key={item.title}>
                    <div className="rich-solution-header initiascan-solution-text-header">
                      <span className="rich-summary-index rich-solution-index">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <div className="rich-solution-title-group">
                        <p className="section-label">Solution</p>
                        <h3>{item.title}</h3>
                      </div>
                    </div>
                    <p>{item.body}</p>
                  </article>
                ))}
              </div>
            </div>

            {moveParadigmFigure ? (
              <figure className="case-figure case-figure-side initiascan-solution-hero-figure">
                <img alt={moveParadigmFigure.title} src={moveParadigmFigure.image} />
                {moveParadigmFigure.caption ? <figcaption>{moveParadigmFigure.caption}</figcaption> : null}
              </figure>
            ) : null}
          </div>

          <div className="rich-media-band rich-media-band-reverse motion-card initiascan-friendly-band">
            <figure className="case-figure case-figure-band">
              <img
                alt="InitiaScan module interactions view"
                src={initiascanCaseStudy.solutions.friendlyDesign.image}
              />
            </figure>
            <div className="rich-media-copy">
              <p className="section-label">Preserving Friendly Design for both Users and Developers</p>
              <ul className="case-list">
                {initiascanCaseStudy.solutions.friendlyDesign.bullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="case-section case-section-usability motion-section">
          <div className="section-heading motion-enter">
            <p className="section-label">Usability Tests</p>
            <h2>Checking module publishing before public launch</h2>
          </div>

          <div className="rich-split-grid initiascan-usability-grid">
            <div className="rich-copy-stack initiascan-usability-copy">
              {initiascanCaseStudy.usability.paragraphs.map((paragraph) => (
                <p className="section-note rich-paragraph" key={paragraph}>
                  {paragraph}
                </p>
              ))}
            </div>

            <figure className="case-figure case-figure-band rich-research-image initiascan-usability-figure motion-card">
              <img
                alt={initiascanCaseStudy.usability.image.alt}
                src={initiascanCaseStudy.usability.image.src}
              />
            </figure>
          </div>

          <div className="rich-two-column initiascan-findings-grid">
            <article className="rich-aside motion-card">
              <p className="section-label">Successes</p>
              <ul className="case-list">
                {initiascanCaseStudy.usability.successes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>

            <article className="rich-aside motion-card">
              <p className="section-label">Challenges</p>
              <ul className="case-list">
                {initiascanCaseStudy.usability.challenges.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </div>
        </section>

        <section className="case-section case-section-development motion-section">
          <div className="section-heading motion-enter">
            <p className="section-label">Final iteration and Launch</p>
            <h2>Launching InitiaScan in January 2024</h2>
          </div>

          <div className="initiascan-launch-layout">
            <div className="initiascan-launch-copy">
              <p className="section-note rich-paragraph">{initiascanCaseStudy.launch.paragraph}</p>
            </div>

            <div className="rich-social-grid initiascan-social-grid">
              {initiascanCaseStudy.launch.images.map((image) => (
                <figure
                  className="case-figure case-figure-social case-figure-full motion-card initiascan-gallery-figure"
                  key={image.src}
                >
                  <img alt={image.alt} src={image.src} />
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="case-section case-section-learnings motion-section">
          <div className="section-heading motion-enter">
            <p className="section-label">Key Learnings</p>
            <h2>What carried forward from the project</h2>
          </div>

          <div className="rich-two-column initiascan-learnings-grid">
            {initiascanCaseStudy.learnings.map((item, index) => {
              const Icon = learningIcons[index % learningIcons.length]

              return (
                <article className="rich-column motion-card" key={item.title}>
                  <div className="learning-header">
                    <Icon aria-hidden="true" className="learning-icon" />
                    <h3>{item.title}</h3>
                  </div>
                  <p>{item.body}</p>
                </article>
              )
            })}
          </div>
        </section>

        <section className="case-nav motion-section">
          <button
            className="case-nav-card motion-card"
            onClick={() => navigateToCaseStudy(previousStudy.slug)}
            type="button"
          >
            <span className="section-label">Previous</span>
            <strong>{previousStudy.title}</strong>
          </button>
          <a className="case-nav-card case-nav-home motion-card" href="#/">
            <span className="section-label">Back</span>
            <strong>All case studies</strong>
          </a>
          <button
            className="case-nav-card motion-card"
            onClick={() => navigateToCaseStudy(nextStudy.slug)}
            type="button"
          >
            <span className="section-label">Next</span>
            <strong>{nextStudy.title}</strong>
          </button>
        </section>
      </main>
    </div>
  )
}

function RichCaseStudyPage({
  richData,
  study,
}: {
  richData: RichCaseStudy
  study: (typeof caseStudies)[number]
}) {
  const currentIndex = caseStudies.findIndex((item) => item.slug === study.slug)
  const previousStudy = caseStudies[(currentIndex - 1 + caseStudies.length) % caseStudies.length]
  const nextStudy = caseStudies[(currentIndex + 1) % caseStudies.length]

  return (
    <div className="page-shell case-page-shell">
      <header
        className={`case-hero case-hero-banner motion-section${
          richData.heroTone === 'bright' ? ' case-hero-banner--bright' : ''
        }`}
      >
        <div
          aria-hidden="true"
          className="case-hero-banner-image"
          style={{ backgroundImage: `url(${richData.heroImage.src})` }}
        />
        <nav className="topbar motion-enter motion-delay-1">
          <a className="brand" href="#/">
            Luke
          </a>
          <div className="nav-links">
            <a href="#/">Home</a>
            <button className="nav-link-button" onClick={navigateHome} type="button">
              What I Do
            </button>
          </div>
        </nav>

        <div className="case-hero-banner-content motion-enter motion-delay-2">
          <div className="case-hero-banner-copy">
            <p className="eyebrow">{study.kicker}</p>
            <h1>{study.title}</h1>
            <p className="case-hero-banner-subtitle">{richData.heroDetails.subtitle}</p>
            <p className="lead">{study.summary}</p>
            <div className="tag-row">
              {study.tags.map((tag) => (
                <span className="tag" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="case-hero-banner-meta" aria-label="Project details">
            <div className="case-hero-meta-quick-grid">
              {richData.heroDetails.facts.map((item) => (
                <div className="case-hero-meta-block" key={item.label}>
                  <p className="case-hero-meta-label">{item.label}</p>
                  <p className="case-hero-meta-value">{item.value}</p>
                </div>
              ))}
            </div>

            <div className="case-hero-meta-row">
              <p className="case-hero-meta-label">Project Duration</p>
              <div className="case-hero-meta-stack">
                {richData.heroDetails.duration.map((item) => (
                  <p className="case-hero-meta-value" key={item}>
                    {item}
                  </p>
                ))}
              </div>
            </div>

            <div className="case-hero-meta-row">
              <p className="case-hero-meta-label">Tools and Methodology</p>
              <div className="case-hero-meta-tags">
                {richData.heroDetails.methods.map((item) => (
                  <span className="case-hero-meta-chip" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="case-hero-meta-row">
              <p className="case-hero-meta-label">Working Team</p>
              <div className="case-hero-meta-stack">
                {richData.heroDetails.team.map((item) => (
                  <p className="case-hero-meta-value" key={item}>
                    {item}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="case-content rich-case-content">
        {/* ── Overview ── */}
        <section className="case-section case-section-overview motion-section">
          <div className="rich-overview-grid rich-overview-grid-single motion-enter">
            <div className="rich-overview-main">
              <div className="section-heading">
                <p className="section-label">Background</p>
                <h2>{study.title} at a glance</h2>
              </div>
              <p className="section-note rich-overview-note">{richData.background}</p>
            </div>
            <aside className="rich-overview-summary-panel motion-card">
              <p className="section-label">Case Study Summary</p>
              <div className="rich-overview-summary-grid">
                {richData.summary.map((item, index) => (
                  <article className="rich-summary-card" key={item.emphasis}>
                    <span className="rich-summary-index">{String(index + 1).padStart(2, '0')}</span>
                    <p>
                      <strong>{item.emphasis}</strong> {item.body}
                    </p>
                  </article>
                ))}
              </div>
            </aside>
          </div>
        </section>

        {/* ── Motivation + Role ── */}
        <section className="case-section case-section-usability motion-section">
          <div className="rich-split-grid">
            <div className="rich-copy-stack">
              <div className="section-heading motion-enter">
                <p className="section-label">Motivation</p>
                <h2>Why this product</h2>
              </div>
              {richData.motivation.map((para) => (
                <p className="section-note rich-paragraph" key={para}>
                  {para}
                </p>
              ))}
            </div>
            <aside className="rich-aside rich-role-panel motion-card">
              <p className="section-label">My Role</p>
              <ul className="case-list">
                {richData.role.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </aside>
          </div>
        </section>

        {/* ── Research (optional) ── */}
        {richData.research ? (
          <section className="case-section case-section-research motion-section">
            <div className="section-heading motion-enter">
              <p className="section-label">Research</p>
              <h2>Understanding the problem</h2>
            </div>
            <div className="rich-research-grid">
              {richData.research.image ? (
                <figure className="case-figure case-figure-band rich-research-image motion-card">
                  <img alt="Research overview" src={richData.research.image} />
                </figure>
              ) : null}
              <div className="rich-research-side">
                <div className="rich-research-snapshot motion-card">
                  <p className="section-label">Research Snapshot</p>
                  <blockquote className="rich-quote">{richData.research.quote}</blockquote>
                </div>
                <div className="rich-research-methods">
                  <p className="section-label">How We Researched</p>
                  <ul className="case-list">
                    {richData.research.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </div>
                {richData.research.quotes && richData.research.quotes.length > 0 ? (
                  <>
                    <div className="rich-research-heard">
                      <p className="section-label">What We Heard</p>
                    </div>
                    <div className="rich-research-quotes">
                      {richData.research.quotes.map((q) => (
                        <blockquote className="rich-mini-quote" key={q}>
                          {q}
                        </blockquote>
                      ))}
                    </div>
                  </>
                ) : null}
              </div>
            </div>
          </section>
        ) : null}

        {/* ── Pain Points ── */}
        <section className="case-section case-section-pain motion-section">
          <div className="section-heading motion-enter">
            <p className="section-label">Pain Points</p>
            <h2>Where the friction was</h2>
          </div>
          <div className="rich-feature-stack">
            {richData.painPoints.map((item, index) => (
              <article className="rich-feature-row rich-pain-point motion-card" key={item.title}>
                <div className="rich-feature-copy rich-pain-copy">
                  <div className="rich-pain-header">
                    <span className="rich-summary-index rich-pain-index">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <div className="rich-pain-title-group">
                      <p className="section-label">Pain Point</p>
                      <h3>{item.title}</h3>
                    </div>
                  </div>
                  <p>{item.body}</p>
                </div>
                {item.image ? (
                  <figure className="case-figure case-figure-side rich-pain-figure">
                    <img alt={item.title} src={item.image} />
                    {item.caption ? <figcaption>{item.caption}</figcaption> : null}
                  </figure>
                ) : null}
              </article>
            ))}
          </div>
        </section>

        {/* ── Process Images (optional) ── */}
        {richData.processImages && richData.processImages.length > 0 ? (
          <section className="case-section case-section-explorer motion-section">
            <div className="section-heading motion-enter">
              <p className="section-label">Process</p>
              <h2>Mapping the work</h2>
            </div>
            {richData.processImages.length >= 2 ? (
              <div className="rich-paired-media-grid">
                {richData.processImages.map((pi) => (
                  <div className="rich-media-band rich-media-band-vertical motion-card" key={pi.label}>
                    <figure className="case-figure case-figure-band">
                      <img alt={pi.label} src={pi.src} />
                    </figure>
                    <div className="rich-media-copy">
                      <p className="section-label">{pi.label}</p>
                      {pi.caption ? <p className="section-note">{pi.caption}</p> : null}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="rich-media-band motion-card">
                <figure className="case-figure case-figure-band case-figure-full">
                  <img alt={richData.processImages[0].label} src={richData.processImages[0].src} />
                </figure>
                <div className="rich-media-copy">
                  <p className="section-label">{richData.processImages[0].label}</p>
                  {richData.processImages[0].caption ? (
                    <p className="section-note">{richData.processImages[0].caption}</p>
                  ) : null}
                </div>
              </div>
            )}
          </section>
        ) : null}

        {/* ── Solutions ── */}
        <section className="case-section case-section-solutions motion-section">
          <div className="section-heading motion-enter">
            <p className="section-label">Solutions</p>
            <h2>How we addressed each challenge</h2>
          </div>
          <div className="rich-feature-stack">
            {richData.solutions.map((item, index) => (
              <article className="rich-feature-row rich-solution-point motion-card" key={item.title}>
                <div className="rich-feature-copy rich-solution-copy">
                  <div className="rich-solution-header">
                    <span className="rich-summary-index rich-solution-index">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <div className="rich-solution-title-group">
                      <p className="section-label">Solution</p>
                      <h3>{item.title}</h3>
                    </div>
                  </div>
                  <p>{item.body}</p>
                </div>
                {item.image ? (
                  <figure className="case-figure case-figure-side rich-solution-figure">
                    <img alt={item.title} src={item.image} />
                    {item.caption ? <figcaption>{item.caption}</figcaption> : null}
                  </figure>
                ) : null}
              </article>
            ))}
          </div>
        </section>

        {/* ── Outcomes ── */}
        <section className="case-section case-section-outcome motion-section">
          <div className="section-heading motion-enter">
            <p className="section-label">Outcomes</p>
            <h2>What the work produced</h2>
          </div>
          <div className="rich-overview-summary-panel rich-outcome-panel motion-card">
            <div className="rich-overview-summary-grid">
              {richData.outcomes.map((item, index) => (
                <article className="rich-summary-card" key={item.emphasis}>
                  <span className="rich-summary-index">{String(index + 1).padStart(2, '0')}</span>
                  <p>
                    <strong>{item.emphasis}</strong> {item.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── Key Learnings ── */}
        <section className="case-section case-section-learnings motion-section">
          <div className="section-heading motion-enter">
            <p className="section-label">What We Learned</p>
            <h2>Lessons that carried forward</h2>
          </div>
          <div className="rich-two-column">
            {richData.learnings.map((item, index) => {
              const Icon = learningIcons[index % learningIcons.length]

              return (
                <article className="rich-column motion-card" key={item.title}>
                  <div className="learning-header">
                    <Icon aria-hidden="true" className="learning-icon" />
                    <h3>{item.title}</h3>
                  </div>
                  <p>{item.body}</p>
                </article>
              )
            })}
          </div>
        </section>

        {/* ── Prev / Next nav ── */}
        <section className="case-nav motion-section">
          <button
            className="case-nav-card motion-card"
            onClick={() => navigateToCaseStudy(previousStudy.slug)}
            type="button"
          >
            <span className="section-label">Previous</span>
            <strong>{previousStudy.title}</strong>
          </button>
          <a className="case-nav-card case-nav-home motion-card" href="#/">
            <span className="section-label">Back</span>
            <strong>All case studies</strong>
          </a>
          <button
            className="case-nav-card motion-card"
            onClick={() => navigateToCaseStudy(nextStudy.slug)}
            type="button"
          >
            <span className="section-label">Next</span>
            <strong>{nextStudy.title}</strong>
          </button>
        </section>
      </main>
    </div>
  )
}

function NotFound() {
  return (
    <div className="page-shell not-found-shell">
      <div className="not-found-card">
        <p className="section-label">Not Found</p>
        <h1>This case study page does not exist yet.</h1>
        <a className="button button-primary" href="#/">
          Back to homepage
        </a>
      </div>
    </div>
  )
}

export default App
