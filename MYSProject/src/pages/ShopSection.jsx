import { Link } from "react-router-dom";
import './ShopSection.css'
import { useEffect, useState } from "react";
import { Carousel } from "../components/Carousel";



export function ShopSection() {
    const [games, setGames] = useState([]);
    const [figures, setFigures] = useState([]);
    const [clothes, setClotes] = useState([]);

    async function fetchData(category, setter) {
        const response = await fetch(`http://localhost:3000/${category}`)
        const responseJson = await response.json()
        setter(responseJson)
    }

    useEffect(() => {
        fetchData("game", setGames)
        fetchData("figure", setFigures)
        fetchData("clothing", setClotes)
        

    }, [])

    useEffect(()=>{
        window.scrollTo(0, 0);
      },[])

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
                <h1>GAMES</h1>
                <Carousel items={games} category="game" />
                <h1>FIGURES</h1>
                <Carousel items={figures} category="figure" />
                <h1>CLOTHING</h1>
                <Carousel items={clothes} category="clothing" />
            </div>
        </div>

    )
}