import { useParams, useLocation } from 'react-router-dom'
import './ProductDetails.css'
import { useEffect, useState } from 'react'
import { Carousel } from '../Components/Carousel'
import { ReviSection } from '../Components/ReviewSection'
import { Button } from '../Components/Button'

export function SingleSection({ }) {
    const [singleProduct, setsingleProduct] = useState({})
    const { id } = useParams()
    const location = useLocation()
    const queryParams = new URLSearchParams(location.search);
    const category = queryParams.get("category");

    async function fetchOnesingleProduct() {
        const response = await fetch(`http://localhost:3000/api/products/${Number(id)}`)
        const responseJson = await response.json()
        setsingleProduct(responseJson)
    }

    useEffect(() => {
        fetchOnesingleProduct()
        window.scrollTo(0, 0)
    }, [id])

    const [carrello, setCarrello] = useState([]);
    const [input, setInput] = useState(1)
    const [gadgets, setGadgets] = useState([]);
    const [MYS, setMYS] = useState([]);
    const [showMessage, setShowMessage] = useState(false);


    async function fetchCategory(category, setter) {
        const response = await fetch(`http://localhost:3000/api/products/category/${category}`)
        const responseJson = await response.json()
        setter(responseJson)
    }

    useEffect(() => {
        fetchCategory("Gadgets", setGadgets)
        fetchCategory("MYS", setMYS)
    }, [])

    useEffect(()=>{
        window.scrollTo(0, 0);
      },[singleProduct.id])

    function addToCart() {
        const product = {
            id: singleProduct.id,
            name: singleProduct.name,
            price: singleProduct.price,
            image: singleProduct.image,
            quantity: Number(input),
        }
        // console.log(product)

        let prevValue = localStorage.getItem("carrello")
        if (!prevValue) {
            localStorage.setItem("carrello", JSON.stringify([product]))
        } else {
            let oldCart = JSON.parse(prevValue)

            if (oldCart.find((prod) => prod.id === product.id)) {
                oldCart = oldCart.map((prod) => (
                    prod.id === product.id ? { ...prod, quantity: prod.quantity + product.quantity } : prod
                ))
            } else {
                oldCart = [...oldCart, product]
            }
            localStorage.setItem("carrello", JSON.stringify(oldCart))
        }
        setInput(1)

                // Mostra il messaggio "Prodotto aggiunto al carrello"
                setShowMessage(true);

                // Resetta lo stato del messaggio dopo 2 secondi
                setTimeout(() => {
                    setShowMessage(false);
                }, 2000);
    }

    function handleInput(event) {
        setInput(event.target.value)
    }

    return (
        <div className="container-elShop">
            <div className="cardsWrapper">
                <div className="singleProduct">
                    <img src={singleProduct.image} alt="" />
                    <div className="rightside">
                        <h4>Description</h4>
                        <p>{singleProduct.description}
                        </p>
                        <h4 >Price:</h4><p className='price'>{singleProduct.price}€</p>
                        <div className="buttonInput">
                            <Button onClick={addToCart} label="Add to Cart" />
                            <label htmlFor="quantity" className="quantity">
                                Quantity:
                            </label>
                            <input
                                type="number"
                                id="quantity"
                                value={input}
                                onChange={handleInput}
                            />
                        </div>
                    </div>
                </div>
            </div>
            {showMessage && <p className="aggiunto">Product added to cart!</p>}
            <ReviSection productId={singleProduct.id} />
            <div className="sliderContainer">
                <h2 className='potrebbe'>POTREBBE INTERESSARTI ANCHE</h2>
                <Carousel items={gadgets} category="Gadgets" />
            </div>
        </div>
    )
};