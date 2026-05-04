import { AcademicCapIcon, BriefcaseIcon, BookOpenIcon, ChevronRightIcon, MapPinIcon, EnvelopeIcon, PhoneIcon, ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { BrandLogo } from "../components/BrandLogo";
import { caseStudyFilterGroups, highlights, strengths } from "../constants";
import { caseStudies } from "../content/caseStudies";
import { CaseStudyFilterState, CaseStudyFilterKey } from "../types";
import { createEmptyCaseStudyFilters, getCaseStudyFilterChipStyle } from "../utils/filters";
import { handleContactNavClick, navigateToChat, navigateToCaseStudy } from "../utils/router";

export function HomePage() {
    const [selectedCaseStudyFilters, setSelectedCaseStudyFilters] = useState<CaseStudyFilterState>(
            createEmptyCaseStudyFilters,
          );
    const visibleCaseStudies = caseStudies.filter((project) =>
            caseStudyFilterGroups.every(
              (group) =>
                selectedCaseStudyFilters[group.key].length === 0 ||
                project.tags.some((tag) => selectedCaseStudyFilters[group.key].includes(tag)),
            ),
          );
    const hasActiveCaseStudyFilters = Object.values(selectedCaseStudyFilters).some(
            (selectedValues) => selectedValues.length > 0,
          );

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
            <BrandLogo />
            <div className="nav-links">
              <a href="#work">Case Studies</a>
              <a href="#strengths">What I Do</a>
              <a href="#/" onClick={handleContactNavClick}>Contact</a>
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
                <button
                  className="button button-primary"
                  onClick={navigateToChat}
                  style={{ display: 'none' }}
                >
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

          <div className="strength-grid strength-grid-desktop">
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

          <div className="strength-stack-mobile">
            {strengths.map((strength) => (
              <a className="strength-card-mobile motion-card" href={strength.href} key={`${strength.title}-mobile`}>
                <div className="strength-card-mobile-head">
                  <strength.icon className="inline-icon section-icon" />
                  <h3>{strength.title}</h3>
                </div>
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
            <h2>Still most interested in the hard problems. Looking for the team that feels the same way.</h2>
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
