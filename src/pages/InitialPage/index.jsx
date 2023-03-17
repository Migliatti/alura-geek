import styles from "./InitialPage.module.css";
import Banner from "components/Banner";
import Cards from "components/Cards";
import { useCategoryContext } from "common/context/Categorys";

function InitialPage() {
  const { category } = useCategoryContext();

  return (
    <main>
      <Banner />
      <section className={styles.cards}>
        {category.map((category) => {
          return <Cards title={category} key={category} />;
        })}
      </section>
    </main>
  );
}

export default InitialPage;
