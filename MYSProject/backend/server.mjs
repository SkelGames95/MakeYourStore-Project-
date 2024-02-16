import express from 'express';
import bcrypt from 'bcrypt';
import { logIn, signUp, logOut } from "./controllers/users.mjs"
import { GetProducts, GetByCategory } from './controllers/products.mjs';
import authorize from './authorize.mjs';
import "./passport.mjs"
import { db } from './db.mjs';
const app = express();
const port = 3000;

app.use(express.json());

app.post("/api/users/login", logIn);
app.post("/api/users/signup", signUp)
app.get("/api/users/logout", authorize, logOut);

app.get('/api/products', GetProducts);
app.get('/api/products/category/:category', GetByCategory);


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
