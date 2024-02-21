import React, { useEffect, useState } from "react";
import "./NavBara.css";
import MYSTitle from "../../images/MYSTitleSmall.png";
import { Link } from "react-router-dom";

const NavBara = ({ isLoggedIn }) => {

  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  // useEffect(() => {
  //   const token = localStorage.getItem('token');
  //   setIsLoggedIn(!!token);
  //   console.log(token);
  // }, []);

  // const handleLogin = () => {
  // };

  const handleLogout = () => {
    console.log("Logout completed")
    localStorage.removeItem("token");
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
          <button style={{ width: '100px', height: '40px', background: "green", marginTop: "17px" }}><Link to="/login">Login</Link></button>
          {/* <button style={{ backgroundColor: isLoggedIn }}><Link to="/" onClick={handleLogout}>Logout</Link></button> */}
        </li>
      </ul >
    </header >
  );
};

export default NavBara;