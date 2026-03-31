import Section from './Section'

function About() {
  return (
    <Section id="about" title="About">
      <div className="about-grid">
        <div className="about-copy">
          <p>
            I&apos;m JK, a Computer Science student at Carleton College with a focus on
            frontend web development and a growing interest in cybersecurity. I love
            building clean, functional interfaces and am currently exploring Linux,
            system security, and what lives beneath the surface of the web. I&apos;m
            actively seeking summer 2026 internships (available June 11 - September 11).
          </p>
        </div>
        <div className="headshot-placeholder" aria-label="Headshot placeholder for Joyce Kyalo">
          <div className="headshot-frame">
            <span className="headshot-initials">JK</span>
            <span className="headshot-caption">Headshot Placeholder</span>
          </div>
        </div>
      </div>
    </Section>
  )
}

export default About
