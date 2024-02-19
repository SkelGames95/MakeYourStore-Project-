import * as dotenv from "dotenv";
import { db } from "../db.mjs";
dotenv.config();

const GetReviewsByProductId = async (req, res) => {
    const productId = req.params.productId;
    try {
        const reviews = await db.any('SELECT * FROM reviews WHERE productId = $1', [Number(productId)]);
        res.json(reviews);
    } catch (error) {
        console.error('Error fetching reviews for product:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

const AddReview = async (req, res) => {
    const { productId, rating, description } = req.body;
    try {
        await db.none('INSERT INTO reviews (productId, rating, description) VALUES ($1, $2, $3)', [productId, rating, description]);
        res.status(201).json({ message: 'Review added successfully' });
    } catch (error) {
        console.error('Error adding review:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

export { GetReviewsByProductId, AddReview };