import classes from "./Login.module.scss"
import { useState } from "react"
const Login=()=>{
const[email,setEmail]=useState("")
const[password,setPassword]=useState("")

const handleSubmit=(e)=>{
    e.preventDefault()
    console.log(email);
    
}
return(
    <div className={classes.containerlogin}>
        <div className={classes.login}>
            <form className={classes.form}onSubmit={handleSubmit}>
            <input type="text"name="email"value={email}placeholder="Email" onChange={((e)=>setEmail(e.target.value))} />
            <input type="password"name="password"value={password}placeholder="Password"onChange={((e)=>setPassword(e.target.value))} />
            <button type="submit">Log in</button>
        </form>
        <button>Don't have an account? Register</button>
        </div>
        <div className={classes.imgform}>
            <img src="" alt="" />
        </div>
        
    </div>
)
}
export default Login