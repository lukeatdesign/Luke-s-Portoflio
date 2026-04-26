import type { ComponentType, SVGProps } from 'react'
import {
  AcademicCapIcon,
  BriefcaseIcon,
  ChevronRightIcon,
  SparklesIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline'
import { whatIDoCards, whatIDoOverview, type WhatIDoSlug } from '../content/whatIDo'

type IconComponent = ComponentType<SVGProps<SVGSVGElement>>

const iconMap: Record<WhatIDoSlug, IconComponent> = {
  design: SparklesIcon,
  leadership: UserGroupIcon,
  hiring: BriefcaseIcon,
  upskilling: AcademicCapIcon,
}

export function WhatIDoPage() {
  return (
    <div className="page-shell case-page-shell what-i-do-page-shell">
      <header className="case-hero motion-section">
        <nav className="topbar motion-enter motion-delay-1">
          <a className="brand" href="#/">
            Luke
          </a>
          <div className="nav-links">
            <a href="#/">Home</a>
            <a href="#/what-i-do">What I Do</a>
          </div>
        </nav>

        <div className="case-hero-grid">
          <section className="case-hero-copy motion-enter motion-delay-2">
            <p className="eyebrow">{whatIDoOverview.kicker}</p>
            <h1>{whatIDoOverview.title}</h1>
            <p className="lead">{whatIDoOverview.summary}</p>
          </section>

          <aside className="case-side-panel what-i-do-side-panel motion-enter motion-delay-3">
            <div className="case-meta-block motion-card">
              <p className="section-label">Inside this section</p>
              <ul className="case-list">
                {whatIDoOverview.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="case-meta-block motion-card">
              <p className="section-label">Context</p>
              <p className="section-note what-i-do-side-note">{whatIDoOverview.detail}</p>
            </div>
          </aside>
        </div>
      </header>

      <main className="case-content what-i-do-content">
        <section className="strengths-section motion-section">
          <div className="section-heading motion-enter">
            <p className="section-label">Overview</p>
            <h2>Four areas shape how I work beyond the project screens.</h2>
            <p className="section-note">
              Each page goes deeper into the same Notion material already behind the portfolio,
              but now it has its own route and structure instead of hiding behind the homepage.
            </p>
          </div>

          <div className="strength-grid what-i-do-index-grid">
            {whatIDoCards.map((item) => {
              const Icon = iconMap[item.slug]

              return (
                <a
                  className="strength-card motion-card"
                  href={`#/what-i-do/${item.slug}`}
                  key={item.slug}
                >
                  <Icon className="inline-icon section-icon" />
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <span className="card-link-row">
                    Explore
                    <ChevronRightIcon className="inline-icon chevron-icon" />
                  </span>
                </a>
              )
            })}
          </div>
        </section>

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
