import { useProdutosContext } from "common/context/Products";
import styles from "./Textarea.module.css";

function Textarea({ placeholder, name, id }) {
  const { formValues, setFormValues } = useProdutosContext();
  return (
    <textarea
      className={styles.area}
      name={name}
      id={id}
      placeholder={placeholder}
      value={formValues[`${id}`]}
      onChange={(event) =>
        setFormValues({ ...formValues, [id]: event.target.value })
      }
    />
  );
}

export default Textarea;
