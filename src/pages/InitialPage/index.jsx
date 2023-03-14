/* eslint-disable array-callback-return */
import styles from './InitialPage.module.css'
import Banner from "components/Banner";
import Cards from "components/Cards";
import data from "json/db.json";
import { useEffect, useState } from "react";

function InitialPage() {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    setCategory(
      data
        .map((card, index) => {
          if (index !== 0) {
            if (card.category !== data[index - 1].category) {
              return card.category;
            }
          } else {
            return data[index].category;
          }
        })
        .filter((sexo) => sexo !== undefined)
    );
  }, []);

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
