import styles from './Button.module.scss'

export default function Button({text, onClick, black}){
  return(
     <button 
         onClick={() => onClick()} 
         className={`${styles.customButton} ${styles.customButtonColor} ${styles.customButtonLr}`}
      style={{border: black ? '2px solid white' : '', color: black ? 'white' : ''}}
      >
        {text}
     </button>
  )
}