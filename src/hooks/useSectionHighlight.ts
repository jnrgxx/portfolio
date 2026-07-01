import { useEffect, useCallback } from 'react'

function highlightSection(id: string) {
  const el = document.getElementById(id)
  if (el) {
    // Remove any existing animation class to allow re-trigger
    el.classList.remove('section-target')

    // Scroll to the element with some offset for the sticky nav
    const navHeight = 64
    const top = el.getBoundingClientRect().top + window.scrollY - navHeight
    window.scrollTo({ top, behavior: 'smooth' })

    // Force reflow so the animation restarts
    void el.offsetWidth

    // Apply the highlight animation
    el.classList.add('section-target')

    // Remove the class after animation ends
    setTimeout(() => {
      el.classList.remove('section-target')
    }, 1000)
  }
}

export default function useSectionHighlight() {
  const handleHashChange = useCallback(() => {
    const hash = window.location.hash
    if (hash) {
      highlightSection(hash.slice(1))
    }
  }, [])

  useEffect(() => {
    // Handle initial hash on mount
    handleHashChange()

    // Listen for native hash changes (nav link clicks)
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [handleHashChange])
}