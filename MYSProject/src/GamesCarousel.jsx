import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';
import "./sliders.css"

export function GamesSlider() {

  const [games, setGames] = useState([])

  async function fetchGames() {
    const response = await fetch("http://localhost:3000/game")
    const responseJson = await response.json()
    setGames(responseJson)
  }

  useEffect(() => { fetchGames() }, [])

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <span>&rarr;</span>,
    prevArrow: <span>&larr;</span>,
  };

  return (
    <div className="cardContainer">
      <Slider {...settings}>
        {games.map((game, index) => (
          <div className='singleCard' key={index}>
            <img src={game.avatar} alt="" height={200} />
            <h2>{game.title}</h2>
            <Link to={`/shop/${game.id}`}>
              <button className="scopri">Scopri di più</button>
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
};
