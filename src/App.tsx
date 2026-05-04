import type { MouseEvent as ReactMouseEvent } from 'react'
import { useEffect, useState } from 'react'
import { ChatbotFlow } from './chatbot/ChatbotFlow'
import { WhatIDoDetailPage } from './pages/WhatIDoDetailPage'
import { ImagePreviewModal } from "./components/ImagePreviewModal"
import { CaseStudyPage } from "./pages/CaseStudyPage"
import { HomePage } from "./pages/HomePage"
import { Route, ImagePreview } from "./types"
import { getRoute } from "./utils/router"

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
    if (route.type !== 'case-study' && route.type !== 'page') {
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
    content = <WhatIDoDetailPage slug={route.slug} />
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

export default App
