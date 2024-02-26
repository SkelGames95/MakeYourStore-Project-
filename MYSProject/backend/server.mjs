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
const allowedOrigins = ['http://localhost:8000', 'http://localhost:3000', `https://checkout.stripe.com/c/pay/cs_test_b1d8IgaeXLajt5vxqS8HBTdK5wTe5ghcdPSPAMgTgqplNISHPwL1IS5sVG#fidkdWxOYHwnPyd1blpxYHZxWjA0Sm4zdVRDYGdyNXU1N0BgQUpOYldtbEpLVjROTEpncWtkYm1qZGhHNWtsSDV0Y2dRS0RJQVJUTTdgbkFCPHJgMjd3TDE2QDEwZ2tjMU1KanYyNTY8Vk9DNTV%2FZlxDSXdPcCcpJ2N3amhWYHdzYHcnP3F3cGApJ2lkfGpwcVF8dWAnPydocGlxbFpscWBoJyknYGtkZ2lgVWlkZmBtamlhYHd2Jz9xd3BgeCUl`];
app.use(cors({
  origin: function(origin, callback){
    if(!origin) return callback(null, true);
    if(allowedOrigins.indexOf(origin) === -1){
      var msg = 'The CORS policy for this site does not ' +
                'allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  }
}));
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