import { useNavigate,Link } from "react-router-dom"
import classes from "./Login.module.scss";
import { useEffect, useRef, useState } from "react";
import Button from "../Button-LogReg/Button";
const Login = ({onLogin}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const[error,setError]=useState({})
  const inputRef=useRef(null)
  const history = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validazione dei campi email e password
    const newError = {};
    if (email === "") newError.email = "Email is required";
    if (password === "") newError.password = "Password is required";

    // Se ci sono errori di validazione, imposta lo stato di errore e termina
    if (Object.keys(newError).length > 0) {
      setError(newError);
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      if (response.status === 200) {
        const data = await response.json();
        console.log(data);
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.email));
        history("/");
      } else {
        console.log("Error in request. Status code:", response.status);
        setError({ general: "User does not exist" });
      }
    } catch (error) {
      console.error(error);
      setError({ general: "User does not exist" });
    }

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
              style={{borderColor:error.email?"":""}}/>
              {error.email && <p className={classes.error}>{error.email}</p>}
            <input className={classes.input}
              type="password"
              name="password"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)} />
              {error.password && <p className={classes.error}>{error.password}</p>}
            <Button type="submit" label={"Log in"} height={"7%"}/>
            <p className={classes.donthave}>
              Don't have an account? <Link to="/register">Register</Link>
            </p>
            {error.general && <p className={classes.general}>{error.general}</p>}
          </form>
        </div>
        <div className={classes.imgform}>
          <div className={classes.displayflex}>
            <img src="./images/spide.jpg"alt=""/>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
