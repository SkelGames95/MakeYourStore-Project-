import React from "react";
import "./NavBara.css";
import MYSTitle from "../../images/MYSTitleSmall.png";
import { Link } from "react-router-dom";

const NavBara = ({ isLoggedIn, handleLogout }) => {
  const handleLogoutClick = () => {
    localStorage.clear(); // Rimuovi tutti gli elementi dal localStorage
    handleLogout(); // Esegui la funzione di logout
  };

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
          <Link to="/news">News</Link>
        </li>
        <li>
          <Link to="/shop">Shop</Link>
        </li>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
        <li>
          <Link to="/credits">Credits</Link>
        </li>
<<<<<<< HEAD
        <li>
          <button style={{ width: '100px', height: '40px', background: "green", marginTop: "17px" }}><Link to="/login">Login</Link></button>
          {/* <button style={{ backgroundColor: isLoggedIn }}><Link to="/" onClick={handleLogout}>Logout</Link></button> */}
=======
        <li className="btnContainer">
          {isLoggedIn ? (
            <button
              style={{
                width: "100px",
                height: "40px",
                background: "red",
                marginTop: "17px",
              }}
            >
              <Link to="/" onClick={handleLogoutClick}>
                Logout
              </Link>
            </button>
          ) : (
            <button
              style={{
                width: "100px",
                height: "40px",
                background: "green",
                marginTop: "17px",
              }}
            >
              <Link to="/login">Login</Link>
            </button>
          )}
>>>>>>> 38611fb0c8a55fe06a57afc54f33a7c14589f4bd
        </li>
      </ul>
    </header>
  );
};

export default NavBara;