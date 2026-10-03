import React, { useEffect } from 'react'

/**
 * SectionObserver — watches every section with a data-section attribute
 * and adds .section-visible class when it enters the viewport.
 */
const SectionObserver: React.FC = () => {
  useEffect(() => {
    const sections = document.querySelectorAll('[data-observe]')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('section-visible')
            // Unobserve after triggering so animation only plays once
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.08,
        rootMargin: '0px 0px -40px 0px',
      }
    )

    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return null
}

export default SectionObserver
