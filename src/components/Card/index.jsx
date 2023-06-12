import styles from "./Card.module.css";
import edita from "./edit_item.svg";
import remove from "./delete_item.svg";
import { useProdutosContext } from "common/context/Products";
import { Link, useNavigate } from "react-router-dom";

function Card({ item, edit }) {
  const { deleteProduct } = useProdutosContext();
  const navigate = useNavigate();

  const price =
    typeof item.price === "number"
      ? item.price.toFixed(2)
      : Number(item.price).toFixed(2);

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
            <img src={edita} alt="edit" onClick={() => navigate(`/create`)} />
          </div>
        ) : null}
      </div>

      <h3>{item.name}</h3>
      <p className={styles.price}>R$ {price}</p>
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
