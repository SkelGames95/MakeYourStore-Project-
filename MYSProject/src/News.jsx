import { Header } from "./header";
import background from "../images/provaBackground.png";
import facebook from "../images/facebookMYS.png";
import instagram from "../images/instagramMYS.png";
import twitter from "../images/XMYS.png";
import arrow from "../images/arrow.png";
import kickstarter from "../images/Kickstarter-Logo.png";
import { Link } from "react-router-dom";

export function News() {
    
    const backgroundImageStyle = {
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    }
    return(
        <div style={backgroundImageStyle}>
            <Header />
            <div className="content-news">
                <div className="content2-news">
                    <h1 id="news">News</h1>
                    <p id="p-news">Get ready for some news bonanza! This section will
                        be your go-to source for all the latest updates
                        on our project(s). Sign Up to Stay in the loop,
                        witness our progress, and make sure to follow us
                        on Kickstarter and our socials. The adventure is
                        about to unfold, and you won't want to miss a
                        single announcement!
                    </p>
                    <div className="links-news">
                        <a href=""><img src={facebook} id="fb" /></a>
                        <a href=""><img src={instagram} id="ig" /></a>
                        <a href=""><img src={twitter} id="x" /></a>
                    </div>
                    <Link to="/discovermore"><h2 id="discover">Discover more</h2></Link>
                    <img src={arrow} />
                    <div className="kickstarter">
                        <h2 id="join-us">JOIN US ON</h2>
                        <a href=""><img src={kickstarter} id="kickstarter"/></a>
                    </div>
                </div>
            </div>
        </div>      
    )
}