import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { ShopSection } from "./Pages/ShopSection";
import { SingleSection } from "./Pages/ProductDetail";
import { Carrello } from "./Pages/Carrello";
import { Homepage } from "./Pages/Homepage";
import Login from "./Login/Login";
import Register from "./Login/Register";
import Footer from "./Footer";
import "./App.css";

import NavBara from "./Components/NavBara";

export const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("token");
  };

  return (
    <div>
      <NavBara isLoggedIn={isLoggedIn} onLogin={handleLogin} onLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/shop" element={<ShopSection />} />
        <Route path="/shop/:id" element={<SingleSection />} />
        <Route path="/cart" element={<Carrello />} />
      </Routes>
      <Footer />
    </div>
  );
};
