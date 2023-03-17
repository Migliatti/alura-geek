import styles from "./Card.module.css";
import edita from "./edit_item.svg";
import remove from "./delete_item.svg";
import { useProdutosContext } from "common/context/Products";
import { Link } from "react-router-dom";

function Card({ item, edit }) {
  const { deleteProduct } = useProdutosContext();

  return (
    <div className={styles.card}>
      <div className={styles.img__container}>
        <img src={item.url} alt={`imagem de ${item.name}`} />
        {edit ? (
          <div className={styles.transform}>
            <img
              src={remove}
              alt="remove"
              onClick={() => deleteProduct(item.id)}
            />
            <img src={edita} alt="edit" />
          </div>
        ) : undefined}
      </div>

      <h3>{item.name}</h3>
      <p className={styles.price}>R$ {item.price.toFixed(2)}</p>
      {edit ? (
        <p>{item.id}</p>
      ) : (
        <Link to={`/product/${item.id}`} className={styles.link}>
          <p>Ver produto</p>
        </Link>
      )}
    </div>
  );
}

export default Card;
