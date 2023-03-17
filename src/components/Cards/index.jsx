import { useEffect, useState } from "react";
import styles from "./Cards.module.css";
import Card from "components/Card";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useProdutosContext } from "common/context/Products";

function Cards({ title }) {
  const { product } = useProdutosContext();
  const [card, setCard] = useState([]);

  useEffect(() => {
    setCard(
      product
        // eslint-disable-next-line array-callback-return
        .map((item) => {
          if (item.category === title) {
            return item;
          }
        })
        .filter((sexo) => sexo !== undefined)
    );
  }, [product, title]);

  return (
    <div className={styles.cards}>
      <div className={styles.topic}>
        <h2 className={styles.title}>{title}</h2>
        <div>
          <p>Ver tudo</p>
          <AiOutlineArrowRight className={styles.icon} />
        </div>
      </div>
      <ul className={styles.list}>
        {card.map((item) => {
          return <Card key={item.id} item={item} />;
        })}
      </ul>
    </div>
  );
}

export default Cards;
