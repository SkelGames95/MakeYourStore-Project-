import express from 'express';
import { logIn, signUp,logOut } from "./controllers/users.mjs"
import authorize from './authorize.mjs';
import {db,setupDb} from './db.mjs'
import cors from "cors"
import bodyParser from "body-parser"
import "./passport.mjs"
setupDb()
const corsOptions = {
    origin: 'http://localhost:8000', // Sostituisci con l'URL effettivo del tuo frontend
  };
 
const app = express();
const port = 3000;
app.use(cors())
app.use(express.json());
 app.use(bodyParser.json());
app.post("/api/users/login", logIn);
app.post("/api/users/signup",signUp)
app.get("/api/users/logout",authorize, logOut);


 app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
