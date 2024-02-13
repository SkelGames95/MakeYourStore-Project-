import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import "./Carrello.css"
import { Button } from '../components/Button';

export function Carrello() {

    const [cart, setCart] = useState([])

    useEffect(() => {
        const product = localStorage.getItem("carrello")
        setCart(JSON.parse(product))
    }, [])

    function handleRemove(indexToRemove) {
        // Creare una nuova versione dell'array del carrello escludendo il prodotto da rimuovere
        const updatedCart = cart.filter((_, index) => index !== indexToRemove);

        // Aggiornare lo stato del carrello con la nuova versione
        setCart(updatedCart);

        // Aggiornare anche localStorage per riflettere il cambiamento
        localStorage.setItem("carrello", JSON.stringify(updatedCart));
    }

    return (
        <div className="carrello-container">
            <h2 className='cart'>Carrello</h2>
            {cart && cart.map((product, index) => (
                <div className="product-container">
                    <div className="imageDetails">
                        <img src={product.avatar} alt="" />
                        <div className="productDetails">
                            <p><span>Product</span>: {product.title}</p>
                            <p><span>Price</span>: {product.price}</p>
                            <p><span>Quantity </span>: {product.quantity}</p>
                        </div>
                    <Button className="remove" label="Remove" onClick={() => handleRemove(index)}/>
                    </div>
                </div>
            ))}
        </div>
    );
};