import { Link } from "react-router-dom";
import './ShopSection.css'
import { useEffect, useState } from "react";
import { Carousel } from "../Components/Carousel";



export function ShopSection() {
    const [gadgets, setGadgets] = useState([]);
    const [MYS, setMYS] = useState([]);

    async function fetchData(category, setter) {
        const response = await fetch(`http://localhost:3000/api/products/category/${category}`)
        const responseJson = await response.json()
        setter(responseJson)
    }

    useEffect(() => {
        fetchData("Gadgets", setGadgets)
        fetchData("MYS", setMYS)
    }, [])

    return (
        <div className="container-el">
            <div className="intestazione-container">
                <div className="intestazione">
                    <h1>SHOP</h1>
                    <h3>Looking for the latest releases? Or are retro classics more your thing?
                        At kyobi, we stock a wide selection of titles for every kind of gamer.
                    </h3>
                </div>
            </div>
            <div className="sliderContainer">
                <h1>MYS THEME</h1>
                <Carousel items={MYS} category="MYS" />
                <h1>GADGETS</h1>
                <Carousel items={gadgets} category="Gadgets" />
            </div>
        </div>

    )
}