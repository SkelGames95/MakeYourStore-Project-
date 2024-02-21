import React, { useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import "./NavBara.css";
import MYSTitle from "../../images/MYSTitleSmall.png";
import { Link } from "react-router-dom";

const NavBara = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const history = useNavigate();

  const handleLogin = async () => {
    try {
       
      localStorage.setItem("isLoggedIn", "true");
      setLoggedIn(true);
       history("/login")   
    } catch (error) {
      console.error("Errore durante il login:", error);
      setLoggedIn(false);
    }
  };

  const handleLogout = async () => {
    try {
      const response = await fetch("/api/users/logout", {
        method: "GET",
        credentials: "include",
      });

      if (response.ok) {
        setLoggedIn(false);
        localStorage.clear();
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
            <button style={{ width: '100px', height: '40px',background:"green",marginTop:"17px" }} onClick={handleLogin}>Login</button>
          )}
        </li>
      </ul>
    </header>
  );
};

export default NavBara;