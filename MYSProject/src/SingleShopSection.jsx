
import { useParams } from 'react-router-dom'
import { GamesSlider } from './GamesCarousel'
import './SingleShopSection.css'
import { useEffect, useState } from 'react'

export function SingleSection({category}) {
    const [data, setData] = useState({})
    const { id } = useParams()

    async function fetchData() {
        const response = await fetch(`http://localhost:3000/${category}/${id}`)
        const responseJson = await response.json()
        setData(responseJson)
        console.log(category)
    }

    useEffect(() => { fetchData() }, [id])

    return (
        <div>
            <div className="container-elShop">
                <div className="cardsWrapper">
                    <div className="singleProduct">
                        <img src={data.avatar} alt="" width={300} />
                        <div className="rightside">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Faucibus scelerisque eleifend donec pretium vulputate sapien.
                                Etiam non quam lacus suspendisse faucibus interdum posuere lorem ipsum.
                                Amet massa vitae tortor condimentum lacinia quis vel eros donec.
                                Mi quis hendrerit dolor magna eget est. Ut etiam sit amet nisl purus in mollis.
                                Faucibus scelerisque eleifend donec pretium vulputate sapien nec sagittis aliquam.
                            </p>
                            <p>{data.price}</p>
                            <button className='aggiungi'>Aggiungi al carrello</button>
                        </div>
                    </div>
                </div>
                <div className="sliderContainer">
                    <h2>POTREBBE INTERESSARTI ANCHE</h2>
                    <GamesSlider />
                </div>
            </div>
        </div>
    )
}