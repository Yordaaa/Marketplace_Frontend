import { Route, Routes } from "react-router-dom";
import Cart from "./Pages/Cart";
import Marketplace from "./Pages/Marketplace";

function AppRoutes() {
  return (
    <Routes>
      <Route path="marketplace" element={<Marketplace />} />
      <Route path="cart" element={<Cart />} />
    </Routes>
  );
}

export default AppRoutes;
