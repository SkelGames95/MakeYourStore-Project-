import express from 'express';
import bcrypt from 'bcrypt';
import { logIn, signUp, logOut } from "./controllers/users.mjs"
import { GetProducts, GetByCategory, GetById } from './controllers/products.mjs';
import { GetReviewsByProductId, AddReview } from './controllers/reviews.mjs';
import authorize from './authorize.mjs';
import "./passport.mjs"
import { db } from './db.mjs';
const app = express();
const port = 3000;

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


// const users = [];

// app.get('/users', (req, res) => {
//    res.json(users);
// });

// app.post('/users', async (req, res) => {
//    try {
//       const hashedPassword = await bcrypt.hash(req.body.password, 10);
//       const user = { email: req.body.email, password: hashedPassword };
//       users.push(user);
//       res.status(201).send();
//    } catch (error) {
//       console.error(error);
//       res.status(500).send();
//    }
// });

// app.post('/users/login', async (req, res) => {
//    try {
//       const user = users.find(user => user.email === req.body.email);
//       if (user == null) {
//          return res.status(400).send('Cannot find user');
//       }

//       if (await bcrypt.compare(req.body.password, user.password)) {
//          res.send("Success");
//       } else {
//          res.send("Not allowed");
//       }
//    } catch (error) {
//       console.error(error);
//       res.status(500).send();
//    }
// });

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});



// O uso stato temporaneo o un refetch data