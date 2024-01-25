import { useState } from "react"
import classes from './Register.module.scss'

const Register=(props)=>{
// const [name,setName]=useState("")  
const [email,setEmail]=useState("")
const [password,setPassword]=useState("")
const [password2, setPassword2]=useState("")
const [error,setError] = useState()


const handleSubmit=(e)=>{
    e.preventDefault()
    console.log(email)
    if(password !== password2 && validationPassword(password)){
        setError("Le password non sono corrispondenti!")
    }
}

const validationPassword = (password) => {
    const passwordTry = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(.{8,})$/;
    return passwordTry.test(password)
}

return (
    <div className={classes.container}>
      <div className={classes.containerForm}>
        <div className={classes.register}>
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
              required
              minLength={8}
              placeholder="Password"
              pattern="^(?=.*[A-Z])(?=.*[!@#$%^&*])(.{8,})$"
              title="La password deve essere lunga almeno 8 caratteri ed avere una lettera maiuscola iniziale"
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              type="password"
              name="password2"
              value={password2}
              required
              placeholder="Re-Enter Password"
              onChange={(e) => setPassword2(e.target.value)}
            />
            {error && <p className={classes.error}>{error}</p>}
            <button type="submit">                                          { /*da sostituire con il componente button-login */}
                Register
            </button>
            <p className={classes.alreadyHave}>
              Already have an account? <a href="">Log in</a>
            </p>
          </form>
        </div>
        <div className={classes.imgform}>
          <div className={classes.displayflex}>
            <img src="/batman-login.png" alt=""/>
          </div>
        </div>
      </div>
    </div>
  );

}
export default Register