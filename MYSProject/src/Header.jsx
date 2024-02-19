import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./layout.css";
import MYSTitle from "../images/MYSTitleSmall.png";
import hamburgerIcon from "../images/menu-icon.svg";
import closeIcon from "../images/X.png";

export function Header() {
    const [isHidden, setIsHidden] = useState(false);
    const [toggleIcon, setToggleIcon] = useState(hamburgerIcon); // Impostiamo l'icona iniziale

    const navigate = useNavigate()
    function handleHamburgerClick() {
        setIsHidden(!isHidden); // Invertiamo lo stato del menù
        // Cambiamo l'icona in base allo stato del menù
        setToggleIcon(isHidden ? hamburgerIcon : closeIcon);
    }

    return (
        <nav className="navbar">
            <div className="navbar-brand" onClick={() => {navigate('/')}}>
                <img src={MYSTitle} alt="logo del team" className="navbar-logo"/>
                <img src="../images/userhero.png" alt=""  className="photos"/>
                <img src="../images/heart.png" alt="" className="photos"/>
                <img src="../images/cart.png" alt="" className="photos"/>
            </div>
            <div className="navbar-toggle" onClick={handleHamburgerClick}>
                <ul className={isHidden ? "navbar-menu hidden" : "navbar-menu active"}>
                    <li className="navbar-item">
                        <Link to="/news" className="navbar-link">News</Link>
                    </li>
                    <li className="navbar-item">
                        <a href="/" className="navbar-link">Shop</a>
                    </li>
                    <li className="navbar-item">
                        <a href="/" className="navbar-link">Wikia</a>
                    </li>
                    <li className="navbar-item">
                        <Link to="/credits" className="navbar-link">Credits</Link>
                    </li>
                </ul>
                <img src={toggleIcon} alt="Icona del menù" className={isHidden ? "navbar-hamburger-icon inverted" : "navbar-hamburger-icon"} />
            </div>
        </nav>
    );
}
