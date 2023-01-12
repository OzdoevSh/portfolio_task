import styles from './AboutPage.module.scss'
import myPhoto from '../../assets/img/myPhoto.png'
import AboutMeDescription from '../../components/AboutMeDescription/AboutMeDescription'
import AboutMeDegree from '../../components/AboutMeDegree/AboutMeDegree'
import AboutMeSkills from '../../components/AboutMeSkills/AboutMeSkills'

export default function AboutPage(){
  return (
    <div className={styles.aboutPage}>
      <h1 className={styles.pageTitle}>Обо мне</h1>
      <div className={styles.aboutPageContainer}>
        <div className={styles.photo}>
          <img width={200} src={myPhoto}alt="my foto"/>
        </div>
        <div className={styles.contacts}>
          <div className={styles.name}>Оздоев Шахид Юнусович</div>
          <div>9 июля 2000 года (22 года)</div>
          <div>г. Москва</div>
          <div>+7 (999) 879 6357</div>
          <div>ozdoevsh@gmail.com</div>
          <div>github: @OzdoevSh</div>
        </div>
        <div className={styles.description}>
          
      <AboutMeDescription/>
   
        </div>
        <div className={styles.degree}>
          <AboutMeDegree/>
        </div>
        <div className={styles.skills}>
          <AboutMeSkills/>
        </div>
      </div>
    </div>
  )
}