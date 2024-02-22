import React, { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import "./Carrello.css"
import { Button } from '../Components/Button';

export function Carrello() {

    const [cart, setCart] = useState([])

    useEffect(() => {
        const product = localStorage.getItem("carrello");
        if (product) {
            setCart(JSON.parse(product));
        } else {
            setCart([]);
        }
    }, []);

    function handleRemove(indexToRemove) {
        const updatedCart = cart.filter((_, index) => index !== indexToRemove);
        setCart(updatedCart);
        localStorage.setItem("carrello", JSON.stringify(updatedCart));
    }

    const cartTotal = cart ? cart.reduce((total, product) => {
        return total + (Number(product.price) * Number(product.quantity));
    }, 0) : 0;

    return (
        <div className="carrello-container">
            <h2 className='cart'>Your Cart</h2>
            {cart && cart.map((product, index) => (
                <div className="product-container" key={index}>
                    <div className="imageDetails">
                        <img src={product.image} alt=""/>
                        <div className="productDetails">
                            <p><span>Product</span>: {product.name}</p>
                            <p><span>Price</span>: {product.price}€</p>
                            <p><span>Quantity </span>: {product.quantity}</p>
                        </div>
                        <Button className="remove" label="Remove" onClick={() => handleRemove(index)}/>
                        <div className="separating"></div>
                    </div>
                </div>
            ))}
            {cart && cart.length === 0 && <p className='alert2'>Oops, your cart is empty!</p> }
            {cart && cart.length > 0 && <div className="cart-total">
                {cartTotal && <p><span>Total</span>: {cartTotal.toFixed(2)}€</p>}
                <Link to="https://www.paypal.com/signin?intent=developer&returnUri=https%3A%2F%2Fdeveloper.paypal.com%2Fdeveloper%2Fapplications"><Button label="Checkout" className="checkout" /></Link>
            </div>}
        </div>
    );
};