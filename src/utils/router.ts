import type { MouseEvent as ReactMouseEvent } from 'react';
import { Route } from "../types";

export function getRoute(): Route {
    const hash = window.location.hash.replace(/^#/, '');
    if (!hash || hash === '/' || hash === '') {
    return { type: 'home' }
    }

    if (hash === '/chat') {
    return { type: 'chat' }
    }

    if (hash === '/what-i-do' || hash === '/what-i-do/') {
    return { type: 'home' }
    }

    const match = hash.match(/^\/case-studies\/([^/]+)$/);
    if (match) {
    return { type: 'case-study', slug: match[1] }
    }

    const whatIDoPageMatch = hash.match(/^\/what-i-do\/([^/]+)$/);
    if (whatIDoPageMatch) {
    return { type: 'page', slug: whatIDoPageMatch[1] }
    }

    const pageMatch = hash.match(/^\/pages\/([^/]+)$/);
    if (pageMatch) {
    return { type: 'page', slug: pageMatch[1] }
    }

    return { type: 'home' }
}

export function navigateToCaseStudy(slug: string) {
    window.location.hash = `/case-studies/${slug}`
}

export function navigateToPage(slug: string) {
    window.location.hash = `/pages/${slug}`
}

export function navigateToWhatIDo() {
    window.location.hash = '/what-i-do/design'
}

export function navigateHome() {
    window.location.hash = '/'
}

export function navigateToChat() {
    window.location.hash = '/chat'
}

export function scrollToContactSection() {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
}

export function handleContactNavClick(event: ReactMouseEvent<HTMLAnchorElement>) {
    event.preventDefault()
    const hash = window.location.hash;
    const isHome = !hash || hash === '#' || hash === '#/';
    if (isHome) {
    scrollToContactSection()
    return
    }

    window.location.hash = '/'
    window.setTimeout(() => {
    scrollToContactSection()
    }, 100)
}
