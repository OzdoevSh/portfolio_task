import styles from './Input.module.scss'

export default function Input({
  icon,
  placeholder,
  value,
  onChange,
  name,
  required
}){
  return(
    <div className={styles.inputContainer}>
      <input 
          className={styles.customInput}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          name={name}
          required={required}
        />
      {icon && 
        <img 
          className={styles.icon} 
          width={32} 
          src={icon} 
          alt="input-icon"
        />}
    </div>
 
  )
}