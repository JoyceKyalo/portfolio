import Section from './Section'

const projects = [
  {
    title: 'Weather App',
    description:
      'A live weather application built with React and a third-party weather API. Features real-time data fetching, responsive design, and clean UI components.',
    stack: ['React', 'JavaScript', 'HTML', 'CSS', 'REST API'],
    link: 'https://github.com/JoyceKyalo',
  },
  {
    title: 'Minnesota Education Gap Analyzer',
    description:
      "A full-stack web app built as a team project in Carleton's Software Design course. Visualizes the education gap across Minnesota using real data.",
    stack: ['Python', 'Flask', 'SQL', 'HTML', 'CSS', 'JavaScript'],
    link: 'https://github.com/JoyceKyalo',
  },
  {
    title: 'This Portfolio',
    description:
      'Designed and built this portfolio site from scratch using React. Focused on clean minimal design, subtle animations, and responsive layout.',
    stack: ['React', 'JavaScript', 'CSS'],
    link: 'https://github.com/JoyceKyalo',
  },
]

function Projects() {
  return (
    <Section id="projects" title="Projects">
      <div className="projects-grid">
        {projects.map((project) => (
          <article key={project.title} className="project-card">
            <div className="project-card-top" aria-hidden="true" />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="tag-list" aria-label={`${project.title} tech stack`}>
              {project.stack.map((item) => (
                <span key={item} className="tech-tag">
                  {item}
                </span>
              ))}
            </div>
            <a
              className="button button-secondary project-link"
              href={project.link}
              target="_blank"
              rel="noreferrer"
            >
              View on GitHub
            </a>
          </article>
        ))}
      </div>
    </Section>
  )
}

export default Projects
