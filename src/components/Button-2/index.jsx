import styles from "./Button.module.css";

function Button2({ children, style }) {
  return (
    <button className={styles.button} style={style}>
      {children}
    </button>
  );
}

export default Button2;
