import styles from './PortfolioPage.module.scss'
import { useEffect, useState } from "react"
import { useLazyGetPortfolioQuery } from "../../store/portfolio/portfolio.api"
import ProjectCard from '../../components/ProjectCard/ProjectCard'
import Input from '../../components/ui/Input/Input'
import searchIcon from '../../assets/icons/search.svg'
import Button from '../../components/ui/Button/Button'
import Select from '../../components/ui/Select/Select'
import AddControl from '../../components/AddControl/AddControl'
import Loader from '../../components/Loader/Loader'

const filters = [
  {
    id: 1,
    name: 'Все',
    value: ''
  },
  {
    id: 2,
    name: 'Мобильное приложение',
    value: 'Мобильное приложение'
  },
  {
    id: 3,
    name: 'Веб-приложение',
    value: 'Веб-приложение'
  },
  {
    id: 4,
    name: 'Десктоп-приложение',
    value: 'Десктоп-приложение'
  }
]

export default function PortfolioPage() {

  const [getPortfolio, { isLoading, data: portfolio }] = useLazyGetPortfolioQuery()
  const [searchValue, setSearchValue] = useState('')

  const [visibility, setVisibility] = useState(false);

  const popupCloseHandler = (e) => {
    setVisibility(e);
  };

  const openPopup = (e) => {
    setVisibility(!visibility)
  }

  useEffect(() => {
    getPortfolio(searchValue, '')
  }, [portfolio, searchValue])

  const handleSearchClick = () => {
    getPortfolio(searchValue, '')
  }

  const handleSearchChange = (ev) => {
    setSearchValue(ev.target.value)
  }

  const handleFilter = (value) => {
    getPortfolio(searchValue, value || '')
  }

  return (
    <>
      {isLoading ?

        <Loader /> :

        <div>
          <h1 className={styles.pageTitle}>Портфолио</h1>


          <div className={styles.portfolioContainer}>
            <div className={styles.actionsGroup}>
              <div className={styles.add}>
                <Button text='Добавить проект' onClick={openPopup} />
              </div>
              <div className={styles.search}>
                <Input
                  icon={searchIcon}
                  onIconClick={handleSearchClick}
                  value={searchValue}
                  onChange={handleSearchChange}
                  placeholder="Поиск проекта"
                />
              </div>
              <div className={styles.filter}>
                <Select
                  title="Выбрать тип приложения"
                  options={filters}
                  onFilterClick={handleFilter}
                />
              </div>

            </div>
            <div className={styles.portfolioList}>
              {portfolio?.map(project => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>


          <AddControl
            onClose={popupCloseHandler}
            show={visibility}
          />
        </div>
}
    </>
  )
}