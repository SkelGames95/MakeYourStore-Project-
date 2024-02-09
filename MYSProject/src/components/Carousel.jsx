// import React, { useEffect, useState } from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import { Link } from 'react-router-dom';
// import "./sliders.css"
// import { Button } from './Button';

// export function Carousel({items, category}) {

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     nextArrow: <span>&rarr;</span>,
//     prevArrow: <span>&larr;</span>,
//   };

//   return (
//     <div className="cardContainer">
//       <Slider {...settings}>
//         {items.map((el, index) => (
//           <div className='singleCard' key={index}>
//             <img src={el.avatar} alt="" height={200} />
//             <h2>{el.title}</h2>
//             <Link className='Link' to={`/shop/${el.id}?category=${category}`}>
//             <Button label="Scopri di più"/>
//               {/* <button className="scopri">Scopri di più</button> */}
//             </Link>
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// import React, { useEffect, useState } from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import { Link } from 'react-router-dom';
// import "./sliders.css"
// import { Button } from './Button';

// export function Carousel({ items, category }) {
//   const [slidesToShow, setSlidesToShow] = useState(3);

//   useEffect(() => {
//     const handleResize = () => {
//       // Determina il numero di slide da mostrare in base alla larghezza dello schermo
//       if (window.innerWidth <= 1024) {
//         setSlidesToShow(2);
//       } else if (window.innerWidth <= 768) {
//         setSlidesToShow(1);
//       } else {
//         setSlidesToShow(3);
//       }
//     };

//     // Aggiungi un listener per gestire la ridimensionamento della finestra
//     window.addEventListener('resize', handleResize);

//     // Chiamata iniziale per impostare il numero di slide da mostrare in base alla larghezza iniziale dello schermo
//     handleResize();

//     // Rimuovi il listener quando il componente viene smontato
//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: slidesToShow,
//     slidesToScroll: 1,
//     nextArrow: <span>&rarr;</span>,
//     prevArrow: <span>&larr;</span>,
//   };

//   return (
//     <div className="cardContainer">
//       <Slider {...settings}>
//         {items.map((el, index) => (
//           <div className='singleCard' key={index}>
//             <img src={el.avatar} alt="" height={200} />
//             <h2>{el.title}</h2>
//             <Link className='Link' to={`/shop/${el.id}?category=${category}`}>
//               <Button label="Scopri di più"/>
//             </Link>
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };


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
            <img src={el.avatar} alt="" height={200} />
            <h2>{el.title}</h2>
            <Link className='Link' to={`/shop/${el.id}?category=${category}`}>
              <Button label="Scopri di più"/>
              {/* <button className="scopri">Scopri di più</button> */}
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
};
