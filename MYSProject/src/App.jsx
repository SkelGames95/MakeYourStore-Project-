import { Route, Routes } from "react-router-dom"
import { ShopSection } from "./Pages/ShopSection"
import { SingleSection } from "./Pages/ProductDetail"
import { Carrello } from "./Pages/Carrello"
import { Nav } from "./Components/Nav"
import { Homepage } from "./Pages/Homepage";
import Login from "./Login/Login";
import Register from "./Login/Register";
import Footer from "./Footer";
import { Header } from "./Components/Header"
import './App.css'

export const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/shop" element={<ShopSection />} />
        <Route path={`/shop/:id`} element={<SingleSection />} />
        <Route path={`/cart`} element={<Carrello />} />
      </Routes>
      <Footer />
    </div>
  );
};
