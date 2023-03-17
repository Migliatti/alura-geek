import { useProdutosContext } from "common/context/Products";
import { useParams } from "react-router-dom";
import styles from "./SingleProductPage.module.css";
import Card from "components/Card";

function SingleProductPage() {
  const { product } = useProdutosContext();
  const { id } = useParams();
  const nowProduct = product[id - 1];

  return (
    <main className={styles.product__page}>
      <div className={styles.product}>
        <div>
          <img
            src={nowProduct.url}
            alt={`imagem do produto: ${nowProduct.name}`}
          />
        </div>
        <div className={styles.infos}>
          <h3>{nowProduct.name}</h3>
          <p className={styles.price}>
            R$ <span>{nowProduct.price.toFixed(2)}</span>
          </p>
          <p>{nowProduct.description}</p>
        </div>
      </div>
      <div className={styles.products__similares}>
        <h4>Produtos similares</h4>
        <div className={styles.cards}>
          {product.slice(0, 7).map((item) => {
            if (item.id !== nowProduct.id) {
              return <Card key={item.id} item={item} />;
            }
            return null;
          })}
        </div>
      </div>
    </main>
  );
}

export default SingleProductPage;
