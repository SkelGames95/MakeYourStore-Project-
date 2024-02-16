import * as dotenv from "dotenv";
import { db } from "../db.mjs";
dotenv.config();

const GetProducts = async (req, res) => {
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
}

const GetByCategory = async (req, res) => {
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
}

const GetById = async (req, res) => {
    const {id} = req.params;
    try {
        // Recupera il prodotto dal database utilizzando l'ID specificato
        const product = await db.oneOrNone('SELECT * FROM products WHERE id = $1', Number(id));
        // Invia la risposta con il prodotto
        res.json(product);
    } catch (error) {
        // Gestisci gli errori e invia una risposta di errore
        console.error('Error fetching product by ID:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

export { GetProducts, GetByCategory, GetById };