import { Route, Routes } from "react-router-dom"
import { ShopSection } from "./Pages/ShopSection"
import { SingleSection } from "./Pages/ProductDetail"
import { Carrello } from "./Pages/Carrello"
import { Nav } from "./Components/Nav"


export function App() {

    return (
        <div>
            <Nav />
            <Routes>
                <Route path="/shop" element={<ShopSection />} />
                <Route path={`/shop/:id`} element={<SingleSection />} />
                <Route path={`/cart`} element={<Carrello />} />
            </Routes>
            {/* <StarRating /> */}
        </div>
    )
}
