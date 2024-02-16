import express from 'express';
import bcrypt from 'bcrypt';
import { logIn, signUp, logOut } from "./controllers/users.mjs"
import authorize from './authorize.mjs';
import "./passport.mjs"
import { db } from './db.mjs';
const app = express();
const port = 3000;

app.use(express.json());

app.post("/api/users/login", logIn);
app.post("/api/users/signup", signUp)
app.get("/api/users/logout", authorize, logOut);

// Definisci una route per ottenere tutti i prodotti
app.get('/api/products', async (req, res) => {
    try {
        // Recupera tutti i prodotti dal database
        const products = await db.any('SELECT * FROM products');
        // Invia la risposta con i prodotti
        res.json(products);
    } catch (error) {
        // Gestisci gli errori e invia una risposta di errore
        console.error('Error fetching products:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Definizione della route per ottenere tutti i prodotti di una categoria specifica
app.get('/api/products/category/:category', async (req, res) => {
    const category = req.params.category;
    try {
        // Recupera tutti i prodotti della categoria specificata dal database
        const products = await db.any('SELECT * FROM products WHERE category_id = (SELECT id FROM categories WHERE name = $1)', [category]);
        // Invia la risposta con i prodotti
        res.json(products);
    } catch (error) {
        // Gestisci gli errori e invia una risposta di errore
        console.error('Error fetching products by category:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});


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
