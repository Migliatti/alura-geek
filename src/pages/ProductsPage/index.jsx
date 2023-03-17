import Button2 from "components/Button-2";
import styles from "./ProductsPage.module.css";
import Card from "components/Card";
import { Link } from "react-router-dom";
import { useProdutosContext } from "common/context/Products";

function ProductsPage() {
  const { product } = useProdutosContext();

  return (
    <main className={styles.products__page}>
      <div className={styles.topic}>
        <h2>Todos os produtos</h2>
        <Link to={"/create"}>
          <Button2> Adicionar produto</Button2>
        </Link>
      </div>
      <div className={styles.cards}>
        {product.map((item) => {
          return <Card key={item.id} item={item} edit />;
        })}
      </div>
    </main>
  );
}

export default ProductsPage;
