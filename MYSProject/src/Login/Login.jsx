import { Link } from "react-router-dom";
import classes from "./Login.module.scss";
import { useEffect, useRef, useState } from "react";
import Button from "../Button-LogReg/Button";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const[error,setError]=useState({})
  const inputRef=useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
    const newWrror={}
    if(email==="")newWrror.email="This is a required field"
    if(password==="")newWrror.password="This is a required field"
    setError(newWrror)

  };
  useEffect(()=>{
    inputRef.current?.focus()
},[])
  return (
    <div className={classes.containerlogin}>
      <div className={classes.containerForm}>
        <div className={classes.login}>
          <form className={classes.form} onSubmit={handleSubmit}>
            <h2 className={classes.signin}>Sign in</h2>
            <input
            ref={inputRef}
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
            <Button type="submit" label={"Log in"}/>
            <p className={classes.donthave}>
              Don't have an account? <Link to="/register">Register</Link>
            </p>
          </form>
        </div>
        <div className={classes.imgform}>
          <div className={classes.displayflex}>
            <img src="/spide.jpg"alt=""/>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
