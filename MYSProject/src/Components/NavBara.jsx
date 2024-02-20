import React from 'react';
import "./NavBara.css" 
import MYSTitle from "../../images/MYSTitleSmall.png";
const NavBara = () => {
  return (
    <header className="header">
      <a href="/" className="logo"><img src={MYSTitle} /></a>
      <input className="menu-btn" id="menu-btn" type="checkbox" />
      <label htmlFor="menu-btn" className="menu-icon"><span className="nav-icon"></span></label>
      <ul className="menu">
        <li><a href="#about">About</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#shop">Shop</a></li>
        <li><a href="#contacts">Contacts</a></li>
      </ul>
    </header>
  );
};

export default NavBara;