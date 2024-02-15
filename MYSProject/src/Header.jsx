import { Link } from "react-router-dom";
import "./layout.css"
import userhero from "../images/userhero.png"
import MYSTitle from "../images/MYSTitleSmall.png"
import heart from "../images/heart.png"
import cart from "../images/cart.png"
import Xexit from "../images/X.png"
import arrow from "../images/arrow.png"
import { useState } from "react";

export function Header() {
    const [isHidden, setIsHidden] = useState(false);

    function handleExitClick() {
        setIsHidden(true);
    }

    function handleArrowClick() {
        setIsHidden(false);
    }
        return (
            <>
                {!isHidden ? (
                    <div className="header">
                        <div className="icons-header">
                            <img src={userhero} alt="Icona utente" id="icons1-header" />
                            <img src={cart} alt="Icona carrello" className="cart-header" id="icons1-header" />
                            <img src={heart} alt="Icona cuore" id="icons1-header" />
                        </div>
                        <div className="logo-MYS">
                            <img src={MYSTitle} alt="logo del team" id="logo-MYS"/>
                        </div>
                        <div className="links-header">
                            <div id="links-header">
                                <Link to="/news" className="links-h">News</Link>
                                <a href="" className="links-h">Shop</a>
                                <a href="" className="links-h">Wikia</a>
                                <Link to="/credits" className="links-h">Credits</Link>
                            </div>
                            <div className="hr-header">
                                <hr id="hr-header"/>
                            </div>
                        </div>
                        <div className="exit">
                            <img src={Xexit} id="x-exit" onClick={handleExitClick} />
                        </div>
                    </div>
                ) : (
                    <div className="exit">
                        <img src={arrow} id="arrow" onClick={handleArrowClick} />
                    </div>
                )}
            </>
        )
    }
    