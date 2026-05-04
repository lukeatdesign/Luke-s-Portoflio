import { BrandLogo } from "../components/BrandLogo";
import { caseStudies } from "../content/caseStudies";
import { richCaseStudies } from "../content/richCaseStudies";
import { navigateToWhatIDo, navigateToCaseStudy } from "../utils/router";
import { CelatoneCaseStudyPage } from "./CelatoneCaseStudyPage";
import { InitiaScanCaseStudyPage } from "./InitiaScanCaseStudyPage";
import { NotFound } from "./NotFound";
import { RichCaseStudyPage } from "./RichCaseStudyPage";

export function CaseStudyPage({ slug }: { slug: string }) {
    const study = caseStudies.find((item) => item.slug === slug);
    if (!study) {
    return <NotFound />
    }

    if (slug === 'celatone') {
    return <CelatoneCaseStudyPage study={study} />
    }

    if (slug === 'initiascan') {
    return <InitiaScanCaseStudyPage study={study} />
    }

    const richData = richCaseStudies[slug];
    if (richData) {
    return <RichCaseStudyPage richData={richData} study={study} />
    }

    const currentIndex = caseStudies.findIndex((item) => item.slug === slug);
    const previousStudy = caseStudies[(currentIndex - 1 + caseStudies.length) % caseStudies.length];
    const nextStudy = caseStudies[(currentIndex + 1) % caseStudies.length];
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
