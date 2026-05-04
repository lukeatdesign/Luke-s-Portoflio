import { BrandLogo } from "../components/BrandLogo";
import { learningIcons } from "../constants";
import { caseStudies } from "../content/caseStudies";
import { RichCaseStudy } from "../content/richCaseStudy";
import { navigateToWhatIDo, navigateToCaseStudy } from "../utils/router";

export function RichCaseStudyPage({
      richData,
      study,
    }: {
          richData: RichCaseStudy
          study: (typeof caseStudies)[number]
        }) {
    const currentIndex = caseStudies.findIndex((item) => item.slug === study.slug);
    const previousStudy = caseStudies[(currentIndex - 1 + caseStudies.length) % caseStudies.length];
    const nextStudy = caseStudies[(currentIndex + 1) % caseStudies.length];
    const pageClassName = `rich-case-page rich-case-page--${study.slug}`;
    return (
    <div className={`page-shell case-page-shell ${pageClassName}`}>
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
          <BrandLogo />
          <div className="nav-links">
            <a href="#/">Home</a>
            <button className="nav-link-button" onClick={navigateToWhatIDo} type="button">
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
