// import { useEffect, useState } from 'react'
// import './Carousel.css'
// import { Link } from 'react-router-dom'
// export function CarouselGames() {
//     const [games, setGames] = useState([])

//     async function fetchGames() {
//         const response = await fetch("http://localhost:3000/game")
//         const responseJson = await response.json()
//         setGames(responseJson)
//     }

//     useEffect(() => { fetchGames() }, [])

//     return (
//         <div id="carouselExampleControls" className="carousel slide" data-interval="false">
//             <div className="carousel-inner">
//                 <div className="carousel-item active">
//                     {games.map((game, index) => (
//                         <div className="singleCard" >
//                             <img src={game.avatar} alt="" height={200} />
//                             <h2>{game.title}</h2>
//                             <Link to="/singleShopSection"><button className="scopri">Scopri di più</button></Link>
//                         </div>
//                     ))}
//                 </div>
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