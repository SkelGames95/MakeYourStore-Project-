import { Link } from "react-router-dom";
import "./navbar.css";

export function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/news">News</Link>
        </li>
        <li>
          <Link to="/shop">Shop</Link>
        </li>
        <li>
          <Link to="/wikia">Wikia</Link>
        </li>
        <li>
          <Link to="/credits">Credits</Link>
        </li>
        <li>
          <Link to="/profile">
            <i className="fa fa-user"></i> Profilo
          </Link>
        </li>
        <li>
          <Link to="/cart">
            <i className="fa fa-shopping-cart"></i> Carrello
          </Link>
        </li>
      </ul>
    </nav>
  );
}
