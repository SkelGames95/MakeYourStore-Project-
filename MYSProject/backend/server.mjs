import express from 'express';
import { logIn, signUp,logOut } from "./controllers/users.mjs"
import authorize from './authorize.mjs';
import "./passport.mjs"
import cors from 'cors'
const app = express();
const port = 3000;

app.use(express.json());
app.use(cors())
const corsOptions = {
    origin: 'http://localhost:8000/',
  };

app.post("/api/users/login", logIn);
app.post("/api/users/signup",signUp)
app.get("/api/users/logout",authorize, logOut);

 app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
