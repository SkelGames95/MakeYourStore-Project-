import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import "./Carrello.css"

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
                        <img src={product.avatar} alt="" width={200} />
                        <div className="productDetails">
                            <h4>Product: {product.title}</h4>
                            <h4>Price: {product.price}</h4>
                            <h4>Quantity: {product.quantity}</h4>
                        </div>
                    </div>
                    <button className='rimuovi' onClick={() => handleRemove(index)}>Rimuovi</button>
                </div>
            ))}
        </div>
    );
};