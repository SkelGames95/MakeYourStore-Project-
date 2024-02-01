// import { useEffect, useState } from 'react'
// import './Carousel.css'
// import { Link } from 'react-router-dom'
// export function CarouselClothes() {
//     const [clothes, setClothes] = useState([])

//     async function fetchClothing() {
//         const response = await fetch("http://localhost:3000/clothing")
//         const responseJson = await response.json()
//         setClothes(responseJson)
//     }

//     useEffect(() => { fetchClothing() }, [])

//     return (
//         <div id="carouselExampleControls" className="carousel slide" data-interval="false">
//             <div className="carousel-inner">
//                 <div className="carousel-item active">
//                     {clothes.map((clothing, index) => (
//                         <div className="singleCard" >
//                             <img src={clothing.avatar} alt="" height={200} />
//                             <h2>{clothing.title}</h2>
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