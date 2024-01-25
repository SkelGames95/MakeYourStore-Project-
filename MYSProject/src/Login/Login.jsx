import classes from "./Login.module.scss";
import { useState } from "react";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const[error,setError]=useState({})

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
    const newWrror={}
    if(email==="")newWrror.email="This is a required field"
    if(password==="")newWrror.password="This is a required field"
    setError(newWrror)

  };
  return (
    <div className={classes.containerlogin}>
      <div className={classes.containerForm}>
        <div className={classes.login}>
          <form className={classes.form} onSubmit={handleSubmit}>
            <h2 className={classes.signin}>Sign in</h2>
            <input
              type="text"
              name="email"
              value={email}
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              style={{borderColor:error.email?"red":""}}/>
              {error.email&&<p style={{color:"red",fontSize:"30px"}}>{error.email}</p>}
            <input
              type="password"
              name="password"
              value={password}
              required
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              style={{borderColor:error.password?"red":""}}/>
              {error.password&&<p style={{color:"red"}}>{error.password}</p>}
            <button type="submit">
                Log in
            </button>
            <p className={classes.donthave}>
              Don't have an account? <a href="">Register</a>
            </p>
          </form>
        </div>
        <div className={classes.imgform}>
          <div className={classes.displayflex}>
            <img src="/spiderkid.png"alt=""/>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
