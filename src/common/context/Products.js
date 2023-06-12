import data from "json/db.json";
import { createContext, useContext, useState } from "react";

export const ProdutosContext = createContext();
ProdutosContext.displayName = "Produtos";

export const ProdutosProvider = ({ children }) => {
  const [product, setProduct] = useState(data);
  const [formValues, setFormValues] = useState({
    id: 0,
    url: "",
    category: "",
    name: "",
    price: 0,
    description: "",
  });

  return (
    <ProdutosContext.Provider
      value={{ product, setProduct, formValues, setFormValues }}
    >
      {children}
    </ProdutosContext.Provider>
  );
};

export const useProdutosContext = () => {
  const { product, setProduct, formValues, setFormValues } =
    useContext(ProdutosContext);

  const deleteProduct = (id) => {
    return setProduct((itemAnterior) =>
      itemAnterior.filter((item) => item.id !== id)
    );
  };

  return {
    product,
    setProduct,
    deleteProduct,
    formValues,
    setFormValues,
  };
};
