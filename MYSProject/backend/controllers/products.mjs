import * as dotenv from "dotenv";
import { db } from "../db.mjs";
dotenv.config();

import Stripe from "stripe";
const stripe = new Stripe(process.env.STRIPE_SECRET);

const GetProducts = async (req, res) => {
  try {
    const products = await db.any("SELECT * FROM products");
    res.json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const GetByCategory = async (req, res) => {
  const category = req.params.category;
  try {
    const products = await db.any(
      "SELECT * FROM products WHERE category_id = (SELECT id FROM categories WHERE name = $1)",
      [category]
    );
    res.json(products);
  } catch (error) {
    console.error("Error fetching products by category:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const GetById = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await db.one(
      "SELECT * FROM products WHERE id = $1",
      Number(id)
    );
    res.json(product);
  } catch (error) {
    // Gestisci gli errori e invia una risposta di errore
    console.error("Error fetching product by ID:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

//Checkout
const Payment = async (req, res) => {
  try {
    const { products } = req.body;
  
    const lineItems = products.map((item) => ({
      price_data: {
        currency: "eur",
        product_data: {
          name: item.name,
          images: [item.image],
        },
        unit_amount: item.price * 100, // Stripe expects the price in cents
      },
      quantity: item.quantity,
    }));
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items:lineItems, 
      success_url: "http://localhost:8000/success",
      cancel_url: "http://localhost:8000/cancel",
    });

    res.json({id: session.id})
    
  } catch (err) {
    console.error(err);
    res.status(500).send("Failed to create Stripe session");
  }
};

export { GetProducts, GetByCategory, GetById, Payment };
