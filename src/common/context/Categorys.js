import data from "json/db.json";
import { createContext, useContext, useEffect, useState } from "react";

export const CategoryContext = createContext();
CategoryContext.displayName = "Categoria dos produtos";

export const CategoryProvider = ({ children }) => {
  const [category, setCategory] = useState([]);

  return (
    <CategoryContext.Provider value={{ category, setCategory }}>
      {children}
    </CategoryContext.Provider>
  );
};

export const useCategoryContext = () => {
  const { category, setCategory } = useContext(CategoryContext);

  useEffect(() => {
    setCategory(
      data
        // eslint-disable-next-line array-callback-return
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
  }, [setCategory]);

  return {
    category,
    setCategory,
  };
};
