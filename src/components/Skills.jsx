import Section from './Section'

const skillGroups = [
  {
    title: 'Languages & Frameworks',
    items: ['Python', 'JavaScript', 'React', 'HTML', 'CSS', 'C', 'Java', 'Flask', 'SQL'],
  },
  {
    title: 'Tools & Platforms',
    items: ['Git', 'GitHub', 'Linux', 'WordPress', 'VS Code'],
  },
  {
    title: 'Currently Learning',
    items: ['Linux', 'Bash scripting', 'Cybersecurity fundamentals'],
  },
]

function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className="skills-groups">
        {skillGroups.map((group) => (
          <div key={group.title} className="skills-group">
            <h3>{group.title}</h3>
            <div className="tag-list">
              {group.items.map((item) => (
                <span key={`${group.title}-${item}`} className="skill-tag">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}

export default Skills
