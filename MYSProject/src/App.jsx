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
import { useEffect } from "react"
import { useState } from "react"
import NavBara from "./Components/NavBara"

export const App = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
      const token = localStorage.getItem('token');
      setIsLoggedIn(!!token);
      console.log(token);
  }, []);

  return (  
    <div>
      {/* <Header /> */}
      <NavBara />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/shop" element={<ShopSection />} />
        <Route path={`/shop/:id`} element={<SingleSection isLoggedIn={isLoggedIn} token ={isLoggedIn}/>} />
        <Route path={`/cart`} element={<Carrello />} />
      </Routes>
      <Footer />
    </div>
  );
};
