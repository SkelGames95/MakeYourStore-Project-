import { useState } from "react"

const Register=(props)=>{
const [name,setName]=useState("")  
const [email,setEmail]=useState("")
const [password,setPassword]=useState("")


const handleSubmit=(e)=>{
    e.preventDefault()
    console.log(email)
}


return(
    <div>
        <div>
            <form onSubmit={handleSubmit}>
            <input type="text"name="name"value={name}placeholder="Username"onChange={((e)=>setName(e.target.value))} />
            <input type="text"name="email"value={email}placeholder="Email"onChange={((e)=>setEmail(e.target.value))} />
            <input type="password" name="password"value={password}placeholder="Password"onChange={((e)=>setPassword(e.target.value))} />
        </form>
        <button onClick={props.onFormSwitch}>Don't have account? Register here.</button>
        </div>
      
    </div>
)
}
export default Register