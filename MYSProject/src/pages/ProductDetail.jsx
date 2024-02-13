import { useParams, useLocation } from 'react-router-dom'
import './ProductDetails.css'
import { useEffect, useState } from 'react'
import { Carousel } from '../components/Carousel'
import { ReviSection } from '../components/ReviewSection'
import { Button } from '../components/Button'

export function SingleSection({ }) {
    const [singleProduct, setsingleProduct] = useState({})
    const { id } = useParams()
    const location = useLocation()
    const queryParams = new URLSearchParams(location.search);
    const category = queryParams.get("category");

    async function fetchOnesingleProduct() {
        const response = await fetch(`http://localhost:3000/${category}/${id}`)
        const responseJson = await response.json()
        setsingleProduct(responseJson)
    }

    useEffect(() => { fetchOnesingleProduct() }, [id])

    const [games, setGames] = useState([]);
    const [figures, setFigures] = useState([]);
    const [clothes, setClotes] = useState([]);
    const [carrello, setCarrello] = useState([]);
    const [input, setInput] = useState(1)

    async function fetchsingleProduct(category, setter) {
        const response = await fetch(`http://localhost:3000/${category}`)
        const responseJson = await response.json()
        setter(responseJson)
    }

    useEffect(() => {
        fetchsingleProduct("game", setGames)
        fetchsingleProduct("figure", setFigures)
        fetchsingleProduct("clothing", setClotes)
    }, [])

    useEffect(()=>{
        window.scrollTo(0, 0);
      },[singleProduct.id])

    function addToCart() {
        const product = {
            id: singleProduct.id,
            title: singleProduct.title,
            price: singleProduct.price,
            avatar: singleProduct.avatar,
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
    }

    function handleInput(event) {
        setInput(event.target.value)
    }

    return (
        <div className="container-elShop">
            <div className="cardsWrapper">
                <div className="singleProduct">
                    <img src={singleProduct.avatar} alt="" />
                    <div className="rightside">
                        <h4>Description</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Faucibus scelerisque eleifend donec pretium vulputate sapien.
                            Etiam non quam lacus suspendisse faucibus interdum posuere lorem ipsum.
                            Amet massa vitae tortor condimentum lacinia quis vel eros donec.
                            Mi quis hendrerit dolor magna eget est. Ut etiam sit amet nisl purus in mollis.
                            Faucibus scelerisque eleifend donec pretium vulputate sapien nec sagittis aliquam.
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
            <ReviSection productId={singleProduct.id} />
            <div className="sliderContainer">
                <h2 className='potrebbe'>POTREBBE INTERESSARTI ANCHE</h2>
                <Carousel items={figures} category="figure" />
            </div>
        </div>
    )
};