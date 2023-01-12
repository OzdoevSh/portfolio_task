import styles from './Layout.module.scss'
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

export default function Layout({children}){
  return (
    <div className={styles.layout}>
      <Header/>
      <main className={styles.main}>
        {children}
      </main>
      <Footer/>
    </div>
  )
}