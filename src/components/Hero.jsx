import { useEffect, useState } from 'react'

function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => setIsLoaded(true))
    return () => window.cancelAnimationFrame(frame)
  }, [])

  return (
    <section id="hero" className="hero-section">
      <div className={`hero-content hero-fade${isLoaded ? ' is-visible' : ''}`}>
        <h1>Joyce (JK) Kyalo</h1>
        <p className="hero-tagline">
          I build for the front end. I&apos;m learning to break the back end.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#projects">
            View My Work
          </a>
          <a className="button button-secondary" href="#contact">
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
