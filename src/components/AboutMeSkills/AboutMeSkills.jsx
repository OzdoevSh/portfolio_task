import styles from './AboutMeSkills.module.scss'

const skills = [
  { id: 1, title: 'HTML' },
  {id: 2, title: 'CSS'},
  {id: 3, title: 'JavaScript'},
  {id: 4, title: 'TypeScript'},
  {id: 5, title: 'React'},
  {id: 6, title: 'Redux'},
  {id: 7, title: 'Redux-thunk'},
  {id: 8, title: 'React-toolkit'},
  {id: 9, title: 'LESS/SASS/SCSS'},
  {id: 10, title: 'Tailwind'},
  {id: 11, title: 'Styled Components'},
  {id: 12, title: 'Node.js'},
  {id: 12, title: 'Express'},
  {id: 12, title: 'Nest.js'},
  {id: 12, title: 'MongoDB'},
  {id: 12, title: 'MySQL'},
]

export default function AboutMeSkills() {
  return (
    <div className={styles.list}>
      {skills.map(skill => (
        <div
          key={skill.id}
          className={styles.item}
        >
          {skill.title}
        </div>
      ))}
    </div>
  )
}