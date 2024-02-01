import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';
import "./sliders.css"

export function FigureSlider() {

  const [figures, setFigures] = useState([])
  let category = ""

  function handleButtonClick(event) {
  category = "figures"
  // console.log(category)
  }

  async function fetchFigure() {
    const response = await fetch("http://localhost:3000/figure")
    const responseJson = await response.json()
    setFigures(responseJson)
  }

  useEffect(() => { fetchFigure() }, [])

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
        {figures.map((fig, index) => (
          <div className='singleCard' key={index}>
            <img src={fig.avatar} alt="" height={200} />
            <h2>{fig.title}</h2>
            <Link to={`/shop/${category}/${fig.id}`}>
              <button onClick={handleButtonClick} className="scopri">Scopri di più</button>
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
};
