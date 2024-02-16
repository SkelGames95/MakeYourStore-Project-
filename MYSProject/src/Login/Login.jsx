import { Link } from "react-router-dom";
import classes from "./Login.module.scss";
import { useEffect, useRef, useState } from "react";
import Button from "../Button-LogReg/Button";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const[error,setError]=useState({})
  const inputRef=useRef(null)

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email);
    const newWrror={}
    if(email==="")newWrror.email=" "
    if(password==="")newWrror.password=""
    try {
      const response = await fetch("http://localhost:3000/api/users/login", {
        method: 'POST',  //  metodo POST
        headers: {
          'Content-Type': 'application/json',  // tipo di contenuto
        },
        body: JSON.stringify({
          email,
          password
        }),
      });
      if (response.status === 200) {
        const data = await response.json();
        console.log(data);
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
      } else {
        console.log("Error in request. Status code:", response.status);
        setError("Error!");
      }
    } catch (error) {
      console.error(error);
      setError("An error occurred during the request.");
    }

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
            <input className={classes.input}
            ref={inputRef}
              type="email"
              name="email"
              value={email}
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              style={{borderColor:error.email?"red":""}}/>
            <input className={classes.input}
              type="password"
              name="password"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)} />
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
