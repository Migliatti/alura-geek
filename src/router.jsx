import Header from "components/Header";
import InitialPage from "./pages/InitialPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "components/Footer";
import LoginPage from "pages/LoginPage";
import ProductsPage from "pages/ProductsPage";
import CreatePage from "pages/CreatePage";
import { ProdutosProvider } from "common/context/Products";
import SingleProductPage from "pages/SingleProductPage";
import { CategoryProvider } from "common/context/Categorys";

function Router() {
  return (
    <BrowserRouter>
      <ProdutosProvider>
        <CategoryProvider>
          <Header />
          <Routes>
            <Route path="/" element={<InitialPage />} />
            <Route path="/product/:id" element={<SingleProductPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/create" element={<CreatePage />} />
          </Routes>
          <Footer />
        </CategoryProvider>
      </ProdutosProvider>
    </BrowserRouter>
  );
}

export default Router;
