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

<<<<<<< HEAD
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
=======
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
>>>>>>> 38611fb0c8a55fe06a57afc54f33a7c14589f4bd
  };

  return (
    <div>
<<<<<<< HEAD
      <NavBara isLoggedIn={isLoggedIn} onLogin={handleLogin} onLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/shop" element={<ShopSection />} />
        <Route path="/shop/:id" element={<SingleSection />} />
        <Route path="/cart" element={<Carrello />} />
=======
      <NavBara isLoggedIn={isLoggedIn} handleLogout={handleLogout}/>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login handleLogin={handleLogin}/>} />
        <Route path="/register" element={<Register />} />
        <Route path="/shop" element={<ShopSection />} />
        <Route path={`/shop/:id`} element={<SingleSection isLoggedIn={isLoggedIn} token ={isLoggedIn}/>} />
        <Route path={`/cart`} element={<Carrello />} />
>>>>>>> 38611fb0c8a55fe06a57afc54f33a7c14589f4bd
      </Routes>
      <Footer />
    </div>
  );
};
