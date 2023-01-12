import styles from './ErrorPage.module.scss'
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

export default function ErrorPage(){

  const navigate = useNavigate()

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigate('/')
    } , 3000)


    return () => clearTimeout(timeout);
  }, [])
  

  return (
    <div>
      <p className={styles.errorTitle}>Такой страницы не существует. Через несколько секунд вы будете перенаправлены на главную</p>
    </div>
  )
}