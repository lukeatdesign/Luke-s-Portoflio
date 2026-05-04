import { BrandLogo } from "../components/BrandLogo";
import { richSitePages } from "../content/richSitePages";
import { sitePages } from "../content/sitePages";
import { navigateToWhatIDo, navigateToPage } from "../utils/router";
import { NotFound } from "./NotFound";
import { RichSitePageView } from "./RichSitePageView";

export function SitePageView({ slug }: { slug: string }) {
    const richPage = richSitePages[slug];
    if (richPage) {
    return <RichSitePageView page={richPage} />
    }

    const page = sitePages.find((item) => item.slug === slug);
    if (!page) {
    return <NotFound />
    }

    return (
    <div className="page-shell case-page-shell">
      <header className="case-hero motion-section">
        <nav className="topbar motion-enter motion-delay-1">
          <BrandLogo />
          <div className="nav-links">
            <a href="#/">Home</a>
            <button className="nav-link-button" onClick={navigateToWhatIDo} type="button">
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
