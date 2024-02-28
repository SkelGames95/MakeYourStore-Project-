import "./Credits.css";
import maso from "../../assets/images/chibiMaso.png";
import marco from "../../assets/images/chibiPole.png";

export function Credits() {
  return (
    <div className="main-container">
      <h1>Credits</h1>
      <h3>Latest Releases!</h3>
      <div className="second-container">
        <div className="creators">
          <h4>Creators</h4>
          <div className="flex">
            <img src={maso} alt="" className="img" />
            <ul className="list">
              <li>
                <a href="https://github.com/SkelGames95" className="font">
                  Marco Polenta
                </a>
              </li>
              <li>
                <a href="#" className="font">
                  Maso Comics
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="developers">
          <h4>Developers</h4>
          <div className="flex reverse">
            <img src={marco} alt="" className="img flip" />
            <ul className="list back">
              <li>
                <a href="https://github.com/ElioFlipper" className="font">
                  Elio Sanfratello
                </a>
              </li>
              <li>
                <a href="https://github.com/GiuseppeCrimi99" className="font">
                  Giuseppe Crimi
                </a>
              </li>
              <li>
                <a href="https://github.com/RobiChiri" className="font">
                  Roberto Chiriac
                </a>
              </li>
              <li>
                <a href="https://github.com/xAlessandroo" className="font">
                  Alessandro Weng
                </a>
              </li>
              <li>
                <a href="https://github.com/RubenCirelli" className="font">
                  Ruben Cirelli
                </a>
              </li>
              <li>
                <a href="https://github.com/ver-sim" className="font">
                  Verdiana Simonetti
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/gabrieleprovenzano"
                  className="font"
                >
                  Gabriele Provenzano
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
