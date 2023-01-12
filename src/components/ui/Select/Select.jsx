import styles from './Select.module.scss'
import { useState } from 'react';
import dropDownIcon from '../../../assets/icons/dropdown.svg'

export default function Select({
  options,
  onFilterClick
}){

  const [isOpen, setIsOpen] = useState(false);
  const toggling = () => setIsOpen(!isOpen);
  const [selectedOption, setSelectedOption] = useState(options[0].name);

  const onOptionClicked = value => async () => {
    setSelectedOption(value);
    setIsOpen(false);
    onFilterClick(value)
  };

  return(
    <div className={styles.select} onClick={toggling}>
        <div className={styles.title}>{selectedOption}</div>
        <img 
          width={30} 
          className={styles.selectIcon} 
          src={dropDownIcon} 
          alt="dropdown"
          style={{rotate: isOpen ? '180deg' : ''}}
        />
        {isOpen &&
             <div className={styles.listContainer}>
             <ul className={styles.list}>
               {options?.filter(({value}) => value !== selectedOption).map(({id, name, value}) => (
                 <li 
                   key={id}
                   onClick={onOptionClicked(value)}
                   className={styles.listItem}
                 >
                   {name}
                 </li>
               ))}
             </ul>
           </div>
        }
   
    </div>
  )
}