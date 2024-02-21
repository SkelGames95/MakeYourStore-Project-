import React, { useEffect, useState } from "react";
import "./NavBara.css";
import MYSTitle from "../../images/MYSTitleSmall.png";
import { Link } from "react-router-dom";

const NavBara = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);

  const handleLogin = async () => {
    try {
      // Simulazione di una chiamata API di login con successo
      // Sostituisci questo con la tua logica di login effettiva
      // E assicurati di impostare isLoggedIn solo se il login ha successo
      setLoggedIn(true);

      // Salva lo stato di autenticazione nel localStorage
      localStorage.setItem("isLoggedIn", "true");
    } catch (error) {
      console.error("Errore durante il login:", error);
    }
  };

  const handleLogout = async () => {
    try {
      // Assuming you're using fetch for the AJAX request
      const response = await fetch("/api/users/logout", {
        method: "GET",
        credentials: "include",
      });

      if (response.ok) {
        // Resetta lo stato di autenticazione
        setLoggedIn(false);
        localStorage.clear();
        // Rimuovi lo stato di autenticazione dal localStorage
        localStorage.removeItem("isLoggedIn");

        console.log("Logout successful");
      } else {
        console.error("Logout failed");
      }
    } catch (error) {
      console.error("Errore durante il logout:", error);
    }
  };
  useEffect(() => {
    // Check the localStorage for the authentication status
    const storedLoggedIn = localStorage.getItem("isLoggedIn");
    if (storedLoggedIn === "true") {
      setLoggedIn(true);
    }
  }, []);
  return (
    <header className="header">
      <Link to="/" className="logo">
        <img src={MYSTitle} alt="Logo" />
      </Link>
      <input className="menu-btn" id="menu-btn" type="checkbox" />
      <label htmlFor="menu-btn" className="menu-icon">
        <span className="nav-icon"></span>
      </label>
      <ul className="menu">
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#shop">Shop</a>
        </li>
        <li>
          <a href="#contacts">Contacts</a>
        </li>
        <li>
          {isLoggedIn ? (
            <button style={{ width: '100px', height: '40px',background:"red",marginTop:"17px" }}><Link to="/" onClick={handleLogout}>Logout</Link></button>
          ) : (
            <button style={{ width: '100px', height: '40px',background:"green",marginTop:"17px" }}><Link to="/login" onClick={handleLogin}>
              Login
            </Link></button>
          )}
        </li>
      </ul>
    </header>
  );
};

export default NavBara;