import Card from '../ui/Card/Card'
import styles from './ProjectCard.module.scss'

export default function ProjectCard({ project }) {
  return (

    <Card>
      <p className={styles.projectTitle}>{project.title}</p>
      <p className={styles.projectType}>{project.type}</p>
      <div className={styles.projectDescription}>{project.description}</div>
      <p className={styles.projectStack}>{project.stack}</p>


    </Card>


  )
}