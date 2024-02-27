import express from "express";
import bcrypt from "bcrypt";
import { logIn, signUp, logOut } from "./controllers/users.mjs";
import {
  GetProducts,
  GetByCategory,
  GetById,
  Payment,
} from "./controllers/products.mjs";
import { GetReviewsByProductId, AddReview } from "./controllers/reviews.mjs";
import authorize from "./authorize.mjs";
import { db, setupDb } from "./db.mjs";
import cors from "cors";
import bodyParser from "body-parser";
import "./passport.mjs";
setupDb();

const whitelist = ["http://localhost:8000", "https://checkout.stripe.com/"]
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

const app = express();
const port = 3000;

 
app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization", "Origin, X-Requested-With, Accept");
  next();
});

app.post("/api/users/login", logIn);
app.post("/api/users/signup", signUp);
app.get("/api/users/logout", authorize, logOut);

app.get("/api/products", GetProducts);
app.get("/api/products/category/:category", GetByCategory);
app.get("/api/products/:id", GetById);

app.get("/api/products/reviews/:productId", GetReviewsByProductId);
app.post("/api/products/reviews", AddReview);

//checkout
app.post("/create-checkout-session", Payment);

app.use(bodyParser.json());

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
