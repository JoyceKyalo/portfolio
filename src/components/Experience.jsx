import Section from './Section'

const experiences = [
  {
    role: 'Project Coordinator',
    company: 'Carleton College Office of Institutional Research',
    range: 'Jan 2026-Present',
    points: [
      'Maintaining the public-facing website through WordPress updates and content management.',
      'Coordinating research and assessment projects across the office workflow.',
      'Collaborating in a hybrid environment with stakeholders across teams.',
    ],
  },
  {
    role: 'Student Software Developer',
    company: 'Bug Busters, Carleton Software Design Course',
    range: 'Jan-Mar 2025',
    points: [
      "Built a full-stack web app analyzing Minnesota's education gap as part of a development team.",
      'Used HTML, CSS, and JavaScript on the frontend with Flask, Python, and SQL on the backend.',
      'Worked in a code-review-driven team environment with shared ownership of quality.',
    ],
  },
  {
    role: 'Frontend Developer',
    company: 'SheCodes Foundation',
    range: 'Summer 2022',
    points: [
      'Built a weather app in React using a live weather API.',
      'Designed responsive UI components for a clean cross-device experience.',
      'Managed asynchronous data fetching and rendering in the interface.',
    ],
  },
  {
    role: 'Cybersecurity Trainee',
    company: 'PwnCollege, Independent',
    range: 'Dec 2025-Present',
    points: [
      'Working through Linux Luminarium challenges focused on permissions and system fundamentals.',
      'Practicing introductory exploitation concepts through hands-on exercises.',
      'Building a stronger foundation in operating systems and security workflows.',
    ],
  },
]

function Experience() {
  return (
    <Section id="experience" title="Experience">
      <div className="timeline">
        {experiences.map((experience) => (
          <article key={`${experience.role}-${experience.company}`} className="timeline-item">
            <div className="timeline-marker" aria-hidden="true" />
            <div className="timeline-card">
              <h3>{experience.role}</h3>
              <p className="timeline-company">{experience.company}</p>
              <p className="timeline-range">{experience.range}</p>
              <ul>
                {experience.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}

export default Experience
