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
    if(email==="")newWrror.email="This is a required field"
    if(password==="")newWrror.password="This is a required field"
    // try {
    //   const response = await fetch("http://localhost:3000/Login", {
    //     method: 'POST',  // Aggiunto il metodo POST
    //     headers: {
    //       'Content-Type': 'application/json',  // Specificato il tipo di contenuto
    //     },
    //     body: JSON.stringify({
    //       email,
    //       password
    //     }),
    //   });
    
    //   if (response.status === 200) {
    //     const data = await response.json();
    //     console.log(data);
    //     localStorage.setItem("token", data.token);
    //     localStorage.setItem("user", JSON.stringify(data.user));
    //   } else {
    //     // Gestisci gli altri codici di stato qui, ad esempio 404 o 500
    //     console.log("Error in request. Status code:", response.status);
    //     setError("Error!");
    //   }
    // } catch (error) {
    //   console.error(error);
    //   setError("An error occurred during the request.");
    // }

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
              {error.email&&<p style={{color:"red",fontSize:"20px"}}>{error.email}</p>}
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
