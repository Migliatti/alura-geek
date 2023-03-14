import styles from "./Textarea.module.css";

function Textarea({ placeholder, name }) {
  return (
    <textarea className={styles.area} name={name} placeholder={placeholder} />
  );
}

export default Textarea;
