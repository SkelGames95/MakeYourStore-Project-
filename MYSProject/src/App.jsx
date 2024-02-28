import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { ShopSection } from "./Pages/ShopSection";
import { SingleSection } from "./Pages/ProductDetail";
import { Carrello } from "./Pages/Carrello";
import { Homepage } from "./Pages/Homepage";
import Login from "./Login/Login";
import Register from "./Login/Register";
import Footer from "./Footer";
import {Credits} from "./Pages/Credits"
import "./App.css";

import NavBara from "./Components/NavBara";
import { News } from "./News";

export const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div>
      <NavBara isLoggedIn={isLoggedIn} handleLogout={handleLogout}/>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login handleLogin={handleLogin}/>} />
        <Route path="/register" element={<Register />} />
        <Route path="/shop" element={<ShopSection />} />
        <Route path={`/shop/:id`} element={<SingleSection isLoggedIn={isLoggedIn} token ={isLoggedIn}/>} />
        <Route path={`/cart`} element={<Carrello />} />
        <Route path={`/news`} element={<News />} />
        <Route path={`/credits`} element={<Credits />} />
      </Routes>
      <Footer />
    </div>
  );
};
