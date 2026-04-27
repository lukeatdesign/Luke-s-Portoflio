import ReactMarkdown from 'react-markdown'
import { richSitePages } from '../content/richSitePages'
import type { RichSitePage, RichSitePageItem, RichSitePageSection } from '../content/richSitePages'
import { sitePages } from '../content/sitePages'

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
  showTitle = true,
) {
  const image = section.image

  if (!section.markdown && !image) {
    return null
  }

  if (image) {
    const mediaClasses = [
      section.imagePosition === 'left' ? 'site-page-media-band-reverse' : '',
      'motion-enter',
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
        <div className="site-page-media-copy">
          {showTitle && 'title' in section && section.title ? <h3>{section.title}</h3> : null}
          {section.markdown ? (
            <MarkdownContent className="site-page-markdown">{section.markdown}</MarkdownContent>
          ) : null}
        </div>
      </div>
    )
  }

  return (
    <div className={`motion-enter site-page-text-panel ${extraClassName ?? ''}`.trim()} key={key}>
      {showTitle && 'title' in section && section.title ? <h3>{section.title}</h3> : null}
      {section.markdown ? (
        <MarkdownContent className="site-page-markdown">{section.markdown}</MarkdownContent>
      ) : null}
    </div>
  )
}

function RichSitePageView({ page }: { page: RichSitePage }) {
  const hasHeroAside =
    page.onThisPage.length > 0 ||
    (page.heroHighlights && page.heroHighlights.length > 0) ||
    Boolean(page.heroNote)

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
            <a href="/#work">Case Studies</a>
            <a href="#/what-i-do/design">What I Do</a>
            <a href="/#contact">Contact</a>
          </div>
        </nav>

        <div className="case-hero-banner-content motion-enter motion-delay-2">
          <div className="case-hero-banner-copy site-page-hero-copy">
            <p className="eyebrow">{page.kicker}</p>
            <h1>{page.title}</h1>
            <p className="case-hero-banner-subtitle">{page.heroSubtitle}</p>
            <p className="lead">{page.heroSummary}</p>
          </div>

            {hasHeroAside ? (
              <div className="site-page-hero-aside">
                {page.onThisPage.length > 0 ? (
                  <div className="site-page-hero-block motion-card">
                    <p className="case-hero-meta-label">On this page</p>
                    <ul className="case-list">
                      {page.onThisPage.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ) : null}
                {page.heroHighlights && page.heroHighlights.length > 0 ? (
                  <div className="site-page-hero-block motion-card">
                    <p className="case-hero-meta-label">At a glance</p>
                    <ul className="case-list">
                      {page.heroHighlights.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ) : page.heroNote ? (
                  <div className="site-page-hero-block motion-card">
                    <p className="case-hero-meta-label">From the page</p>
                    <MarkdownContent className="site-page-markdown site-page-hero-note">
                      {page.heroNote}
                    </MarkdownContent>
                  </div>
                ) : null}
              </div>
            ) : null}
          </div>
        </header>

      <main className="case-content rich-site-content">
        {page.sections.map((section) => (
          <section className="case-section motion-section" key={section.title}>
            <div className="section-heading motion-enter">
              <p className="section-label">{section.label}</p>
              <h2>{section.title}</h2>
            </div>

            {section.image || section.markdown ? (
              renderSitePageMediaBlock(section, `${section.title}-lead`, 'site-page-lead-band', false)
            ) : null}

            {section.asideTitle || section.asideMarkdown ? (
              <div className="site-page-panel motion-enter">
                {section.asideTitle ? <p className="section-label">{section.asideTitle}</p> : null}
                {section.asideMarkdown ? (
                  <MarkdownContent className="site-page-markdown">{section.asideMarkdown}</MarkdownContent>
                ) : null}
              </div>
            ) : null}

            {section.items && section.items.length > 0 ? (
              <div className="site-page-stack">
                {section.items.map((item, index) =>
                  renderSitePageMediaBlock(item, `${section.title}-item-${index}`),
                )}
              </div>
            ) : null}

            {section.gallery && section.gallery.length > 0 ? (
              <div className="rich-social-grid site-page-gallery">
                {section.gallery.map((image) => (
                  <figure
                    className="case-figure case-figure-social case-figure-full motion-card"
                    key={image.src}
                  >
                    <img alt={image.alt} src={image.src} />
                    {image.caption ? <figcaption>{image.caption}</figcaption> : null}
                  </figure>
                ))}
              </div>
            ) : null}

            {section.footerTitle || section.footerMarkdown ? (
              <div className="site-page-panel motion-enter">
                {section.footerTitle ? <p className="section-label">{section.footerTitle}</p> : null}
                {section.footerMarkdown ? (
                  <MarkdownContent className="site-page-markdown">{section.footerMarkdown}</MarkdownContent>
                ) : null}
              </div>
            ) : null}
          </section>
        ))}

        <section className="case-nav motion-section">
          <a className="case-nav-card motion-card" href="#/pages/about-luke">
            <span className="section-label">Profile</span>
            <strong>More about Luke</strong>
          </a>
          <a className="case-nav-card case-nav-home motion-card" href="#/">
            <span className="section-label">Browse</span>
            <strong>Case studies</strong>
          </a>
        </section>
      </main>
    </div>
  )
}

export function WhatIDoDetailPage({ slug }: { slug: string }) {
  const richPage = richSitePages[slug]

  if (richPage) {
    return <RichSitePageView page={richPage} />
  }

  const page = sitePages.find((item) => item.slug === slug)

  if (!page) {
    return (
      <div className="page-shell not-found-shell">
        <div className="not-found-card">
          <p className="section-label">Not Found</p>
          <h1>This page does not exist yet.</h1>
          <a className="button button-primary" href="#/what-i-do/design">
            Back to Product Design
          </a>
        </div>
      </div>
    )
  }

  return (
    <div className="page-shell case-page-shell">
      <header className="case-hero motion-section">
        <nav className="topbar motion-enter motion-delay-1">
          <a className="brand" href="#/">
            Luke
          </a>
          <div className="nav-links">
            <a href="/#work">Case Studies</a>
            <a href="#/what-i-do/design">What I Do</a>
            <a href="/#contact">Contact</a>
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
              <p className="section-label">Section</p>
              <h2>{section.title}</h2>
            </div>
            <div className="case-grid">
              <div className="case-main-copy">
                <p>{section.body}</p>
              </div>
            </div>
          </section>
        ))}

        <section className="case-nav motion-section">
          <a className="case-nav-card motion-card" href="#/pages/about-luke">
            <span className="section-label">Profile</span>
            <strong>More about Luke</strong>
          </a>
          <a className="case-nav-card case-nav-home motion-card" href="#/">
            <span className="section-label">Browse</span>
            <strong>Case studies</strong>
          </a>
        </section>
      </main>
    </div>
  )
}
