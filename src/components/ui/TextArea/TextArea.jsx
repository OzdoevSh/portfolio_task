import styles from './TextArea.module.scss'

export default function TextArea({
  placeholder,
  value,
  onChange,
  name,
  required
}) {
  return (
    <textarea 
      className={styles.customTextArea}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      name={name}
      required={required}
    />
  )
}