
import './Carrello.css'
import { ClothesSlider } from './ClothesCarousel'

export function Carrello() {
    return (
        <div className="container-cart">
            <h3>Carrello</h3>
            <div className="cartproduct">
                <img src="./images/figure.png" alt="" height={250} />
                <div className="description">
                    <h2>Guarda che bella action figure</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. In iaculis nunc sed augue lacus viverra vitae congue.
                        Pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus.
                        Tellus id interdum velit laoreet id donec ultrices tincidunt arcu. Ac felis donec et odio.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. In iaculis nunc sed augue lacus viverra vitae congue.
                        Pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus.
                        Tellus id interdum velit laoreet id donec ultrices tincidunt arcu. Ac felis donec et odio.</p>
                </div>
            </div>
            <h2>GLI ALTRI UTENTI HANNO ACQUISTATO ANCHE</h2>
            <ClothesSlider />
        </div>
    )
}