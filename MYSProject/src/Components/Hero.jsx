import "./Hero.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap-italia/dist/css/bootstrap-italia.min.css";
import { HomepageButton } from "./HomepageButton";
import { Link } from "react-router-dom";
import Button from "../Button-LogReg/Button";
export function Hero() {
  return (
    <>
      <section className="it-hero-wrapper  hero" aria-label="In evidenza">
        <div className="img-responsive-wrapper">
          <div className="img-responsive">
            <div className="img-wrapper">
              {/* <img
                className="hero-img"
                src="../assets/images/background-hero.jpg"
                title="titolo immagine"
                alt="descrizione immagine"
              /> */}
            </div>
          </div>
        </div>

        <div className="positionButton">
          <Link to="/shop">
            {/* <HomepageButton className="button" content={"SHOP NOW"} /> */}
            <Button label="SHOP NOW" className="buttonShopNow" />
          </Link>
        </div>
      </section>
    </>
  );
}
