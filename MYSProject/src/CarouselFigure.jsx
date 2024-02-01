// import { Link } from "react-router-dom";
// import './Carousel.css'
// import { useEffect, useState } from "react";

// export function CarouselFigure() {

//     const [figure, setFigure] = useState([])
//     // const [games, setGames] = useState([])
//     // const [clothes, setClothes] = useState([])

//     async function fetchFigure() {
//         const response = await fetch("http://localhost:3000/figure")
//         const responseJson = await response.json()
//         setFigure(responseJson)
//     }

//     useEffect(() => { fetchFigure() }, [])


//     // async function fetchClothing() {
//     //     const response = await fetch("http://localhost:3000/clothing")
//     //     const responseJson = await response.json()
//     //     setClothes(responseJson)
//     // }

//     // useEffect(() => { fetchClothing() }, [])


//     // async function fetchGame() {
//     //     const response = await fetch("http://localhost:3000/game")
//     //     const responseJson = await response.json()
//     //     setGames(responseJson)
//     // }

//     // useEffect(() => { fetchGame() }, [])

//     return (
//         <div id="carouselExampleControls" className="carousel slide" data-interval="false">
//             <div className="carousel-inner">
//                 <div className="carousel-item active">
//                     {figure.map((card, index) => (<div className="singleCard" >
//                         <img src={card.avatar} alt="" height={200} />
//                         <h2>{card.title}</h2>
//                         <Link to="/singleShopSection"><button className="scopri">Scopri di più</button></Link>
//                     </div>))}
//                 </div>
//                 {/* <div className="carousel-item">
//                     {games.map((game, index) => (<div className="singleCard" >
//                         <img src={game.avatar} alt="" height={200} />
//                         <h2>{game.title}</h2>
//                         <Link to="/singleShopSection"><button className="scopri">Scopri di più</button></Link>
//                     </div>
//                     ))}
//                 </div>
//                 <div className="carousel-item">
//                     {clothes.map((clothing, index) => (
//                         <div className="singleCard" >
//                             <img src={clothing.avatar} alt="" height={200} />
//                             <h2>{clothing.title}</h2>
//                             <Link to="/singleShopSection"><button className="scopri">Scopri di più</button></Link>
//                         </div>
//                     ))}
//                 </div> */}
//                 <div className="controls">
//                     <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
//                         <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//                         <span className="sr-only">Previous</span>
//                     </a>
//                     <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
//                         <span className="carousel-control-next-icon" aria-hidden="true"></span>
//                         <span className="sr-only">Next</span>
//                     </a>
//                 </div>
//             </div>
//         </div>
//     )
// }