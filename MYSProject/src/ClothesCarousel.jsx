import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';
import "./sliders.css"

export function ClothesSlider() {

  const [clothes, setClothes] = useState([])

  async function fetchClothes() {
    const response = await fetch("http://localhost:3000/clothing")
    const responseJson = await response.json()
    setClothes(responseJson)
  }

  useEffect(() => { fetchClothes() }, [])

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
        {clothes.map((clothes, index) => (
          <div className='singleCard' key={index}>
            <img src={clothes.avatar} alt="" height={200} />
            <h2>{clothes.title}</h2>
            <Link to={`/shop/${clothes.id}`}>
              <button className="scopri">Scopri di più</button>
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
};
