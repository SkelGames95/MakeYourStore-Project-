import { Route, Routes } from "react-router-dom"
import Navbar from "./components/navbarPlaceholder"
import { ShopSection } from "./pages/ShopSection"
import { SingleSection } from "./pages/ProductDetail"
import { Carrello } from "./pages/Carrello"
import { StarRating } from "./components/StarRating"


export function App() {

    return (
        <div>
            <Navbar />
            <Routes>
                <Route path="/shop" element={<ShopSection />} />
                <Route path={`/shop/:id`} element={<SingleSection />} />
                <Route path={`/cart`} element={<Carrello />} />
            </Routes>
            {/* <StarRating /> */}
        </div>
    )
}