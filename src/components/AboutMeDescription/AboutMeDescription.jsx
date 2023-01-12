import styles from './AboutMeDescription.module.scss'

export default function AboutMeDescription() {
  return (
    <div>
      <p>Стремлюсь к повышению своей квалификации, расширению профессионального кругозора, самостоятелен в освоении новых знаний и очень (прям очень) люблю работать в команде.</p>
      <p>Уже больше двух лет работаю Frontend-разработчиком</p>
      <div className={styles.exp}>
        <h2>Опыт работы:</h2>
        <ul className={styles.companies}>
          <li className={styles.company}>
            <div><span className={styles.pretitle}>Компания: </span><span>Symplete</span></div>
            <div><span className={styles.pretitle}>Должность: </span><span>Full Stack Разработчик</span></div>
            <div className={styles.date}><span>Январь 2021 - Март 2022</span></div>
            <div>Разработка CRM системы для агентов по недвижимости Symplete - https://symplete.com/
              <ul>
                <li>-уточнение требований у заказчика</li>
                <li>-разработка интерфейса с помощью React, Redux</li>
                <li>-разработка и документирование REST api с помощью Express, Swagger – Анализ и проектирование БД (MySQL, MongoDB)</li>
                <li>-тестирование системы с помощью JEST</li>
              </ul>
            </div>
          </li>

          <li className={styles.company}>
            <div><span className={styles.pretitle}>Компания: </span><span>ООО "Робовеб" | ООО "АЙТИ АКАДЕМИЯ"</span></div>
            <div><span className={styles.pretitle}>Должность: </span><span>Frontend Разработчик</span></div>
            <div className={styles.date}><span>Апрель 2022 - наст. время</span></div>

            <ul>
              <li>-разработка интернет-магазинов</li>
              <li>-разработка CRM-систем</li>
              <li>-корпоративные сайты, лэндинги</li>
              <li>-доработка функционала для существующих проектов, исправление баговT</li>
            </ul>

          </li>
        </ul>
      </div>
    </div>
  )
}