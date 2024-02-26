import express from 'express';
import bcrypt from 'bcrypt';
import { logIn, signUp, logOut } from "./controllers/users.mjs"
import { GetProducts, GetByCategory, GetById, Payment } from './controllers/products.mjs';
import { GetReviewsByProductId, AddReview } from './controllers/reviews.mjs';
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
app.use(cors({origin: `http://localhost:8000`}))
app.use(express.json());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.post("/api/users/login", logIn);
app.post("/api/users/signup", signUp)
app.get("/api/users/logout", authorize, logOut);

app.get('/api/products', GetProducts);
app.get('/api/products/category/:category', GetByCategory);
app.get('/api/products/:id', GetById)


app.get('/api/products/reviews/:productId', GetReviewsByProductId);
app.post('/api/products/reviews', AddReview);

//checkout 
app.post('/create-checkout-session', Payment)

app.use(bodyParser.json());

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});