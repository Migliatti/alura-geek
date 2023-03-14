import styles from "./Card.module.css";
import edita from "./edit_item.svg";
import remove from "./delete_item.svg";

function aoDeletar(item) {
  console.log(`${item} deletado`)
}

function Card({ item, edit }) {
  return (
    <div className={styles.card}>
      <div className={styles.img__container}>
        <img src={item.url} alt={`imagem de ${item.name}`} />
        {edit ? (
          <div className={styles.transform}>
            <img src={remove} alt="remove" onClick={() => aoDeletar(item.id)} />
            <img src={edita} alt="edit" />
          </div>
        ) : undefined}
      </div>
      <h3>{item.name}</h3>
      <p className={styles.price}>R$ {item.price}</p>
      {edit ? <p>{item.id}</p> : <p>Ver produto</p>}
    </div>
  );
}

export default Card;
