import classes from "./Login.module.scss";
import { useState } from "react";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };
  return (
    <div className={classes.containerlogin}>
      <div className={classes.containerForm}>
        <div className={classes.login}>
          <form className={classes.form} onSubmit={handleSubmit}>
            <h2 className={classes.signup}>Sign up</h2>
            <input
              type="text"
              name="email"
              value={email}
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              name="password"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">
              Apply Now
            </button>
            <p>
              Don't have an account? <a href="">Register</a>
            </p>
          </form>
        </div>
        <div className={classes.imgform}>
          <div>
            <img
              src="https://thumbs.dreamstime.com/b/superficie-praticante-il-surfing-dell-acqua-onda-di-oceano-mare-124362369.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
