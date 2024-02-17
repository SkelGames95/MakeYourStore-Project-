import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';
import "./sliders.css"
import { Button } from './Button';

export function Carousel({ items, category }) {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Mostra 3 componenti per riga di default
    slidesToScroll: 1,
    nextArrow: <span>&rarr;</span>,
    prevArrow: <span>&larr;</span>,
    responsive: [
      {
        breakpoint: 1024, // Schermo di dimensioni <= 1024px (tablet)
        settings: {
          slidesToShow: 2, // Mostra 2 componenti per riga
        }
      },
      {
        breakpoint: 600, // Schermo di dimensioni <= 600px (iPhone)
        settings: {
          slidesToShow: 1, // Mostra 1 componente per riga
        }
      }
    ]
  };

  return (
    <div className="cardContainer">
      <Slider {...settings}>
        {items.map((el, index) => (
          <div className='singleCard' key={index}>
            <img src={el.image} alt="" height={200} />
            <h2>{el.name}</h2>
            <Link className='Link' to={`/shop/${el.id}?category=${category}`}>
              <Button label="Scopri di più" />
              {/* <button className="scopri">Scopri di più</button> */}
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
};
