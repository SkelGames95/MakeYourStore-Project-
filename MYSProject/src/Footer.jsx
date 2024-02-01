import classes from "./Footer.module.scss";

export const Footer = () => {
  return (
    <div>
      <div className={classes.bigContainer}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt possimus
          numquam dolorem fugit quibusdam quam saepe voluptas reprehenderit? Ea
          esse, inventore commodi sed beatae doloremque, cupiditate magni
          consectetur, delectus odit aperiam. Porro perferendis quibusdam nulla
          molestias praesentium quia illum. Tenetur laborum consectetur harum
          ipsam voluptas nihil mollitia sit aperiam repellendus?
        </p>
      </div>
      <footer>
        <div className={`${classes.container} ${classes.WH}`}>
          <div className={`${classes.bigButton} ${classes.WH}`}>
            <div className={classes.kickButton}>
              <div className={classes.kickP}>
                <p>
                  Join us on
                  <span className={classes.mediaNone}>KickStarter</span>
                </p>
              </div>
              <div className={classes.kickButton2}>
                <img src="arrow.png" alt="Arrow" className={classes.arrow} />
                <a href="#" className={classes.kickIcon}>
                  <img
                    src="pngegg.png"
                    alt="Kickstarter"
                    className={classes.kickIconImg}
                  />
                </a>
              </div>
            </div>
          </div>
          <div className={classes.container2}>
            <div className={`${classes.footerLogoContainer} ${classes.WH}`}>
              <div className={classes.footerLogo}>
                <a href="">
                  <img src="MYS-Logo.jpg" alt="" width="120px" height="50px" />
                  </a>
                  <a href="" className={classes.strong}>Make Your Story</a>
              </div>
            </div>
            <div className={`${classes.links} ${classes.WH}`}>
              <h3 className={classes.h3}>Customer</h3>
              <a href="">Buyer</a>
              <a href="">Supplier</a>
            </div>
            <div className={`${classes.links} ${classes.WH}`}>
              <h3 className={classes.h3}>Company</h3>
              <a href="">About us</a>
              <a href="">Credits</a>
              <a href="">Contact us</a>
            </div>
            <div
              className={`${classes.WH} ${classes.links2} ${classes.moreInfo}`}
            >
              <h3 className={classes.h3}>More informations</h3>
              <a href="">Terms & Conditions</a>
              <a href="">Our policy</a>
            </div>
            <div className={`${classes.links} ${classes.WH}`}>
              <h3 className={classes.h3}>Follow us</h3>
              <div className={`${classes.icons} ${classes.WH}`}>
                <img src="facebook.png" alt="f" width="30px" height="30px" />
                <img src="facebook.png" alt="f" width="30px" height="30px" />
                <img src="facebook.png" alt="f" width="30px" height="30px" />
                <img src="facebook.png" alt="f" width="30px" height="30px" />
                <img src="facebook.png" alt="f" width="30px" height="30px" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
