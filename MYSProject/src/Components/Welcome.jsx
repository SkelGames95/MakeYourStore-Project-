import "./Welcome.css";
import "./HomepageButton.css";
import { HomepageButton } from "./HomepageButton";
import { Link } from "react-router-dom";
import Button from "../Button-LogReg/Button";

export function Welcome() {
  return (
    <div className="welcome-container">
      <h1 className="main-title">HOT OF THE PRESS!</h1>
      <div className="container">
        <img
          className="welcome-img"
          src="../assets/images/background-hero.jpg"
        />
        <div className="content">
          <h4 className="copy-title"> UPDATE #1:WELCOMING YOU TO THE GAME</h4>
          <p className="copy">
            {" "}
            Welcome to the getaway of our epic journey! If you find here
            yourself at this moment, don`t let time slip away - join us now and
            secure you spot in the history of Make Your Story. Be part of the
            exclusive club that can say, `I was there.` Who knows, your journey
            might just unfold into a rewarding adventure in unexpected ways!{" "}
          </p>
        </div>
      </div>
      <Link to="/register" className="buttonJoin-container">
        {/* <HomepageButton className="buttonJoin" content={"JOIN NOW"} /> */}
        <Button label="JOIN NOW" className="buttonJoin"/>
      </Link>
    </div>
  );
}
