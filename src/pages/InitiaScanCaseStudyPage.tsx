import { BrandLogo } from "../components/BrandLogo";
import { learningIcons } from "../constants";
import { caseStudies } from "../content/caseStudies";
import { initiascanCaseStudy } from "../content/initiascanCaseStudy";
import { navigateToWhatIDo, navigateToCaseStudy } from "../utils/router";

export function InitiaScanCaseStudyPage({ study }: { study: (typeof caseStudies)[number] }) {
    const currentIndex = caseStudies.findIndex((item) => item.slug === study.slug);
    const previousStudy = caseStudies[(currentIndex - 1 + caseStudies.length) % caseStudies.length];
    const nextStudy = caseStudies[(currentIndex + 1) % caseStudies.length];
    const moveParadigmFigure = initiascanCaseStudy.solutions.moveParadigm.find((item) => item.image);
    return (
    <div className="page-shell case-page-shell initiascan-case-page">
      <header className="case-hero case-hero-banner motion-section">
        <div
          aria-hidden="true"
          className="case-hero-banner-image"
          style={{ backgroundImage: `url(${initiascanCaseStudy.heroImage.src})` }}
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
          <div className="rich-overview-grid motion-enter">
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
