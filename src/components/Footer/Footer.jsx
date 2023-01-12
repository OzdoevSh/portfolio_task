import styles from './Footer.module.scss'
import telegramIcon from '../../assets/icons/telegram.svg'
import vkIcon from '../../assets/icons/vk.svg'
import whatsappIcon from '../../assets/icons/whatsapp.svg'
import instagramIcon from '../../assets/icons/instagram.svg'

const icons = [
  {id: 1, title: 'telegram', icon: telegramIcon,},
  {id: 2, title: 'vk', icon: vkIcon},
  {id: 3, title: 'whatsapp', icon: whatsappIcon},
  {id: 4, title: 'instagram', icon: instagramIcon},
]

export default function Footer() {
  return(
    <footer className={styles.footer}>
      <div className={styles.title}>Где можно меня найти?</div>
      <div className={styles.icons}>
        {icons.map(({id, title, icon}) => (
          <img 
            className={styles.icon}
            key={id} 
            src={icon} 
            alt={title}
          />
        ))}
      </div>
    </footer>
  )
}