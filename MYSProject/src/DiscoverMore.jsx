import background from "../images/provaBackground.png";
import { Header } from "./header";
import kickstarter from "../images/Kickstarter-Logo.png"

export function DiscoverMore() {

    const backgroundImageStyle = {
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    }

    return (
      <div>
        <Header />
        <div className="content-news" style={backgroundImageStyle}>
          <div className="content-discover">
            <h1 id="newsflash">NewsFlash!</h1>
            <div className="card-discover">
              <div className="img-discover"></div>
              <div className="text-discover">
                <div className="update">
                  <h2 id="update">update #1: Welcoming You to The Game</h2>
                </div>
                <p id="welcome">
                  Welcome to the gateway of our epic journey! If you find
                  yourself here at this moment, don`t let time slip away—join us
                  now and secure your spot in the history of Make Your Story. Be
                  part of the exclusive club that can proudly say, `I was
                  there.` Who knows, your journey might just unfold into a
                  rewarding adventure in unexpected ways
                </p>
              </div>
            </div>
            <h1>
              upcoming news here...{" "}
              <a href="" id="signUp-discover">
                Sign Up
              </a>{" "}
              to stay updated!
            </h1>
            <div className="kickstarter-discover">
              <div id="kickstarter-discover">
                <h2 id="join-us">JOIN US ON</h2>
                <a href="">
                  <img src={kickstarter} id="kickstarter-logo-discover" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
