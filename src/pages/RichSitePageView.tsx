import { ReactNode } from "react";
import { BrandLogo } from "../components/BrandLogo";
import { MarkdownContent } from "../components/MarkdownContent";
import { RichSitePageSection, RichSitePageItem, RichSitePage } from "../content/richSitePages";
import { navigateToWhatIDo, navigateToPage } from "../utils/router";

export function renderSitePageMediaBlock(section: RichSitePageSection | RichSitePageItem, key: string, extraClassName?: string) {
    const image = section.image;
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

export function RichSitePageView({ page }: { page: RichSitePage }) {
    return (
    <div className="page-shell case-page-shell rich-site-page-shell">
      <header className="case-hero case-hero-banner motion-section">
        <div
          aria-hidden="true"
          className="case-hero-banner-image"
          style={{ backgroundImage: `url(${page.heroImage.src})` }}
        />
        <nav className="topbar motion-enter motion-delay-1">
          <BrandLogo />
          <div className="nav-links">
            <a href="#/">Home</a>
            <button className="nav-link-button" onClick={navigateToWhatIDo} type="button">
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
