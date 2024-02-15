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












// Importa i moduli necessari
import express from 'express';
import pgPromise from 'pg-promise';

// Crea un'istanza di Express
const app = express();

// Crea un'istanza di pgPromise
const pgp = pgPromise();

// Crea la configurazione per la connessione al database
const dbConfig = {
    host: 'localhost',
    port: 5432,
    database: 'postgres',
    user: 'postgres',
    password: 'postgres'
};

// Crea un'istanza di database
const db = pgp(dbConfig);

// Creazione delle tabelle nel database
const createTables = async () => {
    await db.none(`
        -- Creazione della tabella users
        CREATE TABLE IF NOT EXISTS users (
            id SERIAL PRIMARY KEY,
            email TEXT NOT NULL,
            password TEXT NOT NULL,
            token TEXT
        );

        -- Creazione della tabella categories
        CREATE TABLE IF NOT EXISTS categories (
            id SERIAL PRIMARY KEY,
            name TEXT NOT NULL
        );

        -- Creazione della tabella products
        CREATE TABLE IF NOT EXISTS products (
            id SERIAL PRIMARY KEY,
            name TEXT NOT NULL,
            description TEXT,
            image TEXT,
            price NUMERIC NOT NULL,
            category_id INT REFERENCES categories(id)
        );
    `);
};

// Inserimento delle categorie nel database
const insertCategories = async () => {
    await db.none(`
        INSERT INTO categories (name) VALUES
            ('Category A'),
            ('Category B');
    `);
};

// Inserimento dei prodotti nel database
const insertProducts = async () => {
    await db.none(`
        INSERT INTO products (name, description, image, price, category_id) VALUES
            ('Game', 'Description for Game', 'game_image.jpg', 29.99, 1),
            ('Bundle', 'Description for Bundle', 'bundle_image.jpg', 49.99, 2),
            ('Sleeves', 'Description for Sleeves', 'sleeves_image.jpg', 9.99, 1),
            ('Figure', 'Description for Figure', 'figure_image.jpg', 19.99, 2),
            ('Poster', 'Description for Poster', 'poster_image.jpg', 14.99, 1),
            ('Mat', 'Description for Mat', 'mat_image.jpg', 24.99, 2),
            ('Artbook', 'Description for Artbook', 'artbook_image.jpg', 39.99, 1),
            ('Dice', 'Description for Dice', 'dice_image.jpg', 4.99, 2);
    `);
};

// Definizione della route per ottenere tutti i prodotti di una categoria specifica
app.get('/api/products/:category', async (req, res) => {
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

// Avvia il server e mettilo in ascolto sulla porta specificata
const PORT = process.env.PORT || 3000;
app.listen(PORT, async () => {
    console.log(`Server running on port ${PORT}`);
    
    // Esegui la creazione delle tabelle e l'inserimento dei dati nel database
    try {
        await createTables();
        await insertCategories();
        await insertProducts();
        console.log('Database setup complete');
    } catch (error) {
        console.error('Error setting up database:', error);
    }
});
