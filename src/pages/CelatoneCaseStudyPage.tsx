import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import { BrandLogo } from "../components/BrandLogo";
import { learningIcons } from "../constants";
import { caseStudies } from "../content/caseStudies";
import { celatoneCaseStudy } from "../content/celatoneCaseStudy";
import { navigateToWhatIDo, navigateToCaseStudy } from "../utils/router";

export function CelatoneCaseStudyPage({ study }: { slug?: string; study: (typeof caseStudies)[number] }) {
    const currentIndex = caseStudies.findIndex((item) => item.slug === study.slug);
    const previousStudy = caseStudies[(currentIndex - 1 + caseStudies.length) % caseStudies.length];
    const nextStudy = caseStudies[(currentIndex + 1) % caseStudies.length];
    return (
    <div className="page-shell case-page-shell">
      <header className="case-hero case-hero-banner motion-section">
        <div
          aria-hidden="true"
          className="case-hero-banner-image"
          style={{ backgroundImage: `url(${celatoneCaseStudy.heroImage.src})` }}
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
