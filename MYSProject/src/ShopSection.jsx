import { Link } from "react-router-dom";
import './ShopSection.css'
import { GamesSlider } from "./GamesCarousel";
import { ClothesSlider } from "./ClothesCarousel";
import { FigureSlider } from "./FiguresCarousel";


export function ShopSection() {
    return (
        <div className="container-el">
            <div className="scrittacentrale">
                <h1>SHOP PREVIEW</h1>
            </div>
            <div className="sliderContainer">
                <GamesSlider />
                <ClothesSlider />
                <FigureSlider />
            </div>
        </div>

    )
}