import Header from "components/Header";
import InitialPage from "./pages/InitialPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "components/Footer";
import LoginPage from "pages/LoginPage";
import ProductsPage from "pages/ProductsPage";
import CreatePage from "pages/CreatePage";

function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<InitialPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/create" element={<CreatePage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default Router;
