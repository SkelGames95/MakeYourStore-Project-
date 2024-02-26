import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import "./Carrello.css";
import { Button } from "../Components/Button";
import { loadStripe } from "@stripe/stripe-js";

export function Carrello() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const product = localStorage.getItem("carrello");
    setCart(JSON.parse(product));
    console.log(cart);
  }, []);

  function handleRemove(indexToRemove) {
    const updatedCart = cart.filter((_, index) => index !== indexToRemove);
    setCart(updatedCart);
    localStorage.setItem("carrello", JSON.stringify(updatedCart));
  }

  const cartTotal = cart
    ? cart.reduce((total, product) => {
        return total + Number(product.price) * Number(product.quantity);
      }, 0)
    : 0;

  const makePayment = async () => {
    try {
      // Create a Stripe client
      // const product = localStorage.getItem("carrello");
      const stripe = await loadStripe(
        "pk_test_51Ok6pQFebw0p02EeDOKgRhiONS1KIObtnaghoamB0niM0qfbTNALDWQH2ekDG9we72rI43E45bnf4HOos7039SJF00zcYFLrJu"
      );
        const body ={
          products: cart,
        }
      const headers = {
        "Content-type": "application/json",
      };
      console.log(body);
      const response = await fetch(
        "http://localhost:3000/create-checkout-session",
        {
          method: "POST",
          headers: headers,
          mode: "cors",
          body: JSON.stringify(body),
        }
      );
      if (!response.ok) {
        console.log('Failed to create checkout session:', response.statusText);
        return;
      }
      
      const session = await response.json();
      window.location = data.url;

      const result = stripe.redirectToCheckout({
        sessionId: session.id,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className="carrello-container">
      <h2 className="cart">Your Cart</h2>
      {cart &&
        cart.map((product, index) => (
          <div className="product-container">
            <div className="imageDetails">
              <img src={product.image} alt="" />
              <div className="productDetails">
                <p>
                  <span>Product</span>: {product.name}
                </p>
                <p>
                  <span>Price</span>: {product.price}€
                </p>
                <p>
                  <span>Quantity </span>: {product.quantity}
                </p>
              </div>
              <Button
                className="remove"
                label="Remove"
                onClick={() => handleRemove(index)}
              />
            </div>
          </div>
        ))}
      {cart && cart.length === 0 && (
        <p className="alert">Oops, your cart is empty!</p>
      )}
      {cart && cart.length > 0 && (
        <div className="cart-total">
          {cartTotal && (
            <p>
              <span>Total</span>: {cartTotal.toFixed(2)}€
            </p>
          )}
          <Button label="Checkout" onClick={makePayment} />
        </div>
      )}
    </div>
  );
}
