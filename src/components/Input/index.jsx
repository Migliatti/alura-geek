import { useProdutosContext } from "common/context/Products";
import styles from "./Input.module.css";

function Input({ type, name, id, haveLabel, placeholder }) {
  const { formValues, setFormValues } = useProdutosContext();
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
            placeholder={placeholder}
            value={formValues[`${id}`]}
            onChange={(event) =>
              setFormValues({ ...formValues, [id]: event.target.value })
            }
            required
          />
        </>
      ) : (
        <input
          type={type}
          id={id}
          placeholder={placeholder}
          style={noLabel.label}
          value={formValues[`${id}`]}
          onChange={(event) =>
            setFormValues({ ...formValues, [id]: event.target.value })
          }
        />
      )}
    </div>
  );
}

export default Input;
