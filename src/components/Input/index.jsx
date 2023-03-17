import styles from "./Input.module.css";

function Input({ type, name, id, haveLabel, value, newProduct }) {
  const noLabel = {
    label: {
      padding: "12px 0",
    },
  };

  return (
    <div className={styles.allInput}>
      {haveLabel ? (
        <>
          <label htmlFor={id}>{name}</label>
          <input
            type={type}
            id={id}
            placeholder={`Write your ${name}`}
            value={value}
            required
            onClick={newProduct}
          />
        </>
      ) : (
        <input
          type={type}
          id={id}
          placeholder={`Write your ${name}`}
          style={noLabel.label}
          value={value}
        />
      )}
    </div>
  );
}

export default Input;
