import styles from './Popup.module.scss';
import { useEffect, useState } from 'react';
import crossIcon from '../../../assets/icons/cross.svg'

export default function Popup({
  children,
  show,
  onClose
}) {
  const [isShown, setIsShown] = useState(false)

  useEffect(() => {
    setIsShown(show);
  }, [show]);

  const handleClose = () => {
    setIsShown(false)
    onClose(false)
  }

  return (
    <div
      style={{
        visibility: isShown ? "visible" : "hidden",
        opacity: isShown ? "1" : "0"
      }}
      className={styles.overlay}
    >
      <div className={styles.popup}>
        {children}
        <img 
          className={styles.close} 
          src={crossIcon} 
          onClick={handleClose}
          alt="cross"
        />
      </div>


    </div>
  )
}