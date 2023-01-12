import styles from './AboutMeDegree.module.scss'

export default function AboutMeDegree(){
  return (
    <div className={styles.degree}>
      <div className={styles.university}>
        <span className={styles.preTitle}>ВУЗ: </span><span>МГТУ им. Н.Э. Баумана (2017-2021)</span>
      </div>
      <div className={styles.faculty}>
        <span className={styles.preTitle}>Факультет: </span><span>Информатика и системы управления</span>
      </div>
      <div className={styles.spec}>
        <span className={styles.preTitle}>Направление: </span><span>Прикладная Информатика</span>
      </div>
    </div>
  )
}