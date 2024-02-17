import * as dotenv from "dotenv";
import { db } from "../db.mjs";
dotenv.config();

const GetProducts = async (req, res) => {
    try {
        const products = await db.any('SELECT * FROM products');
        res.json(products);
    } catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

const GetByCategory = async (req, res) => {
    const category = req.params.category;
    try {
        const products = await db.any('SELECT * FROM products WHERE category_id = (SELECT id FROM categories WHERE name = $1)', [category]);
        res.json(products);
    } catch (error) {
        console.error('Error fetching products by category:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

const GetById = async (req, res) => {
    const {id} = req.params;
    try {
        const product = await db.one('SELECT * FROM products WHERE id = $1', Number(id));
        res.json(product);    
    } catch (error) {
        // Gestisci gli errori e invia una risposta di errore
        console.error('Error fetching product by ID:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

export { GetProducts, GetByCategory, GetById };