import { useEffect, useRef, useState } from 'react'

function Section({ id, title, children, className = '' }) {
  const sectionRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      {
        threshold: 0.2,
      }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id={id}
      ref={sectionRef}
      className={`content-section fade-section${isVisible ? ' is-visible' : ''} ${className}`.trim()}
    >
      <div className="section-accent" aria-hidden="true" />
      <div className="section-heading">
        <h2>{title}</h2>
      </div>
      {children}
    </section>
  )
}

export default Section
