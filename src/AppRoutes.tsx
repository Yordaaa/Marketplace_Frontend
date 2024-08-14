import { Route, Routes } from "react-router-dom";
import Cart from "./Pages/Cart";
import Marketplace from "./Pages/Marketplace";
import Detail from "./Pages/Detail";
import Submit from "./Pages/Submit";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Marketplace />} />
      <Route path="cart" element={<Cart />} />
      <Route path="detail" element={<Detail />} />
      <Route path="submit" element={<Submit />} />
    </Routes>
  );
}

export default AppRoutes;
