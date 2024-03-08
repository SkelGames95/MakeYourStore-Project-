import { Link, useNavigate } from "react-router-dom";
import classes from "./Footer.module.scss";

export const Footer = () => {

  const navigate = useNavigate()

  return (
    <div className = {classes.mainFooterDiv}>
      <footer className={classes.footerMain}>
        <div className={`${classes.container}`}>
          <div className={`${classes.bigButton} ${classes.WH}`}>
            <div className={classes.kickButton}>
              <div className={classes.kickP}>
                <p>
                  Join us on
                </p>
                <Link to="" className={classes.kickIcon}>
                  <img
                    src="../assets/images/Kickstarter-Logo.png"
                    alt="Kickstarter Logo"
                    className={classes.kickIconImg}
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className={classes.container2}>
            <div className={`${classes.footerLogoContainer} ${classes.WH}`}>
              <div className={classes.footerLogo}>
                <Link to="/">
                  <img src="../assets/images/MYS-Logo.jpg" alt="" width="120px" height="50px" />
                </Link>
                <Link to="/" className={classes.strong}>Make Your Story</Link>
              </div>
            </div>
            <div className={`${classes.links} ${classes.WH}`}>
              <h3 className={classes.h3}>Customer</h3>
              <a href="#">Buyer</a>
              <a href="#">Supplier</a>
            </div>
            <div className={`${classes.links} ${classes.WH}`}>
              <h3 className={classes.h3}>Company</h3>
              <a href="#">About us</a>
              <Link to="/credits">Credits</Link>
              <a href="#">Contact us</a>
            </div>
            <div
              className={`${classes.WH} ${classes.links2} ${classes.moreInfo}`}
            >
              <h3 className={classes.h3}>More informations</h3>
              <a href="#">Terms & Conditions</a>
              <a href="#">Our policy</a>
            </div>
            <div className={`${classes.links} ${classes.WH}`}>
              <h3 className={classes.h3}>Follow us</h3>
              <div className={`${classes.icons} ${classes.WH}`}>
                <img src="../assets/images/facebook.png" alt="f" width="30px" height="30px" onClick={() => {navigate('/')}}/>
                <img src="../assets/images/facebook.png" alt="f" width="30px" height="30px" />
                <img src="../assets/images/facebook.png" alt="f" width="30px" height="30px" />
                <img src="../assets/images/facebook.png" alt="f" width="30px" height="30px" />
                <img src="../assets/images/facebook.png" alt="f" width="30px" height="30px" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
