import Header from "components/Header";
import InitialPage from "./pages/InitialPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<InitialPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
