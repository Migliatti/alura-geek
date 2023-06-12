import { useProdutosContext } from "common/context/Products";
import { useParams } from "react-router-dom";
import styles from "./SingleProductPage.module.css";
import Card from "components/Card";

function SingleProductPage() {
  const { product } = useProdutosContext();
  const { id } = useParams();
  const nowProduct = product.filter(
    (atualProduct) => atualProduct.id === Number(id)
  );
  const productFiltered = product.filter(
    (atualProduct) => atualProduct.id !== nowProduct[0].id
  );

  function shuffleProduct(arr) {
    for (let i = 0; i < arr.length; i++) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }

    return arr;
  }

  const suffledProducts = shuffleProduct(productFiltered);

  return (
    <main className={styles.product__page}>
      <div className={styles.product}>
        <div>
          <img
            src={nowProduct[0].url}
            alt={`imagem do produto: ${nowProduct[0].name}`}
          />
        </div>
        <div className={styles.infos}>
          <h3>{nowProduct[0].name}</h3>
          <p className={styles.price}>
            R$ <span>{nowProduct[0].price.toFixed(2)}</span>
          </p>
          <p>{nowProduct[0].description}</p>
        </div>
      </div>
      <div className={styles.products__similares}>
        <h4>Produtos similares</h4>
        <div className={styles.cards}>
          {suffledProducts.slice(0, 6).map((item) => {
            return <Card key={item.id} item={item} />;
          })}
        </div>
      </div>
    </main>
  );
}

export default SingleProductPage;
