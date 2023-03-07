import styles from "./Card.module.css";

function Card({ item }) {
  return (
    <div className={styles.card}>
      <img src={item.url} alt={`imagem de ${item.name}`} />
      <h3>{item.name}</h3>
      <p className={styles.price}>R$ {item.price}</p>
      <p>Ver produto</p>
    </div>
  );
}

export default Card;
