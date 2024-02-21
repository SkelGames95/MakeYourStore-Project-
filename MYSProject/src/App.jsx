import { Route, Routes } from "react-router-dom"
import { ShopSection } from "./Pages/ShopSection"
import { SingleSection } from "./Pages/ProductDetail"
import { Carrello } from "./Pages/Carrello"
import { Homepage } from "./Pages/Homepage";
import Login from "./Login/Login";
import Register from "./Login/Register";
import Footer from "./Footer";
import './App.css'

import NavBara from "./Components/NavBara"
import { useEffect, useState } from "react"

export const App = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const token = localStorage.getItem('token');

  useEffect(() => {
      setIsLoggedIn(!!token);
      console.log(token);
  }, [token]);

  return (  
    <div>
      {/* <Header /> */}
      <NavBara isLoggedIn={isLoggedIn}/>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/shop" element={<ShopSection />} />
        <Route path={`/shop/:id`} element={<SingleSection/>} />
        <Route path={`/cart`} element={<Carrello />} />
      </Routes>
      <Footer />
    </div>
  );
};
