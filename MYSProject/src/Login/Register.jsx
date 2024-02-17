import { useEffect, useRef, useState } from "react"
import classes from './Register.module.scss'
import { useNavigate,Link } from "react-router-dom"
import Login from "./Login"
import Button from "../Button-LogReg/Button"

const Register=(props)=>{
// const [name,setName]=useState("")  
const [email,setEmail]=useState("")
const [password,setPassword]=useState("")
const [password2, setPassword2]=useState("")
const [error,setError] = useState()
const inputRef=useRef(null)
const history = useNavigate(); // Ottieni l'istanza di history dal router

const handleSubmit = async (e) => {
  e.preventDefault();
  console.log(email);

  const newError = {};

  if (password !== password2 && !validationPassword(password)) {
    setError("Le password non corrispondono o non rispettano i requisiti!");
    return;
  }

  try {
    const response = await fetch("http://localhost:3000/api/users/signup", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    console.log('Richiesta inviata:', JSON.stringify({
      email,
      password,
    }));

    if (response.status === 201) { 
      const data = await response.json();
      console.log('Risposta ricevuta:', data);
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.email));

      history("/login");
    } else {
      console.log("Errore nella richiesta. Codice di stato:", response.status);
      const errorData = await response.json();
      console.log('Risposta di errore:', errorData);
      setError();
    }
  } catch (error) {
    console.error(error);
    setError("Si è verificato un errore durante la richiesta.");
  }
};
useEffect(()=>{
  inputRef.current?.focus()
},[])
return (
    <div className={classes.container}>
      <div className={classes.containerForm}>
        <div className={classes.register}>
          <form className={classes.form} onSubmit={handleSubmit}>
            <h2 className={classes.signup}>Sign up</h2>
            <input className={classes.input}
            ref={inputRef}
              type="email"
              name="email"
              value={email}
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input className={classes.input}
              type="password"
              name="password"
              value={password}
              required
              minLength={8}
              placeholder="Password"
              pattern="^(?=.*[A-Z])(?=.*[!@#$%^&*])(.{8,})$"
              title="The password must be at least 8 characters long and have an initial capital letter"
              onChange={(e) => setPassword(e.target.value)}
            />
            <input className={classes.input}
              type="password"
              name="password2"
              value={password2}
              required
              placeholder="Re-Enter Password"
              pattern="^(?=.*[A-Z])(?=.*[!@#$%^&*])(.{8,})$"
              onChange={(e) => setPassword2(e.target.value)}
            />
            {error && <p style={{color:'red', fontSize: 15, marginTop: -30, marginBottom: -10}}>{error}</p>}
            <Button type="submit" label={"Register"}/>
            <p className={classes.alreadyHave}>
              Already have an account? <Link to="/login">Login</Link>
            </p>
          </form>
        </div>
        <div className={classes.imgform}>
          <div className={classes.displayflex}>
            <img src="/images/phanter.jpg" alt=""/>
          </div>
        </div>
      </div>
    </div>
  );

}
export default Register