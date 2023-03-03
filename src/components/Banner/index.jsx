import Button2 from "components/Button-2";
import styles from "./Banner.module.css";

function Banner() {
  return (
    <div className={styles.banner}>
      <div>
        <h2>Dezembro Promocional</h2>
        <p>Produtos selecionados com 33% de desconto</p>
        <Button2>Ver Consoles</Button2>
      </div>
    </div>
  );
}

export default Banner;
