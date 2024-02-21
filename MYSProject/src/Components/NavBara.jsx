import React from 'react';
import './NavBara.css';
import MYSTitle from '../../images/MYSTitleSmall.png';
import { Link } from 'react-router-dom';

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
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <Link to="/shop">Shop</Link>
        </li>
        <li>
          <a href="#contacts">Contacts</a>
        </li>
        <li className="btnContainer">
          {isLoggedIn ? (
            <button style={{ width: '100px', height: '40px', background: 'red', marginTop: '17px' }}>
              <Link to="/" onClick={handleLogoutClick}>
                Logout
              </Link>
            </button>
          ) : (
            <button style={{ width: '100px', height: '40px', background: 'green', marginTop: '17px' }}>
              <Link to="/login">Login</Link>
            </button>
          )}
        </li>
      </ul>
    </header>
  );
};

export default NavBara;
