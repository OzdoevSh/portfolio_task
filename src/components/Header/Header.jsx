import styles from './Header.module.scss';
import { NavLink } from 'react-router-dom';
import burgerIcon from '../../assets/icons/burger.svg'
import crossIcon from '../../assets/icons/cross.svg'
import { useState } from 'react';

const navigation = [
  { id: 1, title: 'Обо мне', path: '/' },
  { id: 2, title: 'Блог', path: '/blog' },
  { id: 3, title: 'Портфолио', path: '/portfolio' }
]

export default function Header() {

  const [burgerOpened, setBurgerOpened] = useState(false)

  const burgerClick = () => {
    setBurgerOpened(!burgerOpened)
  }

  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <div>Тестовое задание</div>

        {burgerOpened ?
          <img
            className={styles.burger}
            src={crossIcon}
            onClick={burgerClick}
          /> :
          <img
            className={styles.burger}
            src={burgerIcon}
            onClick={burgerClick}
          />
        }


        <div className={styles.menu}>
          <ul className={styles.list}>
            {navigation.map(({ id, title, path }) => (
              <li key={id}>
                <NavLink
                  className={({ isActive }) => (isActive ? styles.active : 'null')}
                  to={path}
                >
                  {title}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>


      </nav>


      {burgerOpened && <div>
        <ul className={styles.burgerList}>
          {navigation.map(({ id, title, path }) => (
            <li key={id}
              onClick={() => setBurgerOpened(false)}
            >
              <NavLink
                className={({ isActive }) => (isActive ? styles.active : 'null')}
                to={path}
              >
                {title}
              </NavLink>
            </li>
          ))}
        </ul></div>}
    </header>
  )
}