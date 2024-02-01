import { Route, Routes } from "react-router-dom"
import { ShopSection } from "./ShopSection"
import { SingleSection } from "./SingleShopSection"
import Navbar from "./navbarPlaceholder"
import { Carrello } from "./Carrello"


export function App() {
        
    let category = "figures"
    
    
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path="/shop" element={<ShopSection />} />
                <Route path={`/shop/${category}/:id`} element={<SingleSection category={category} />} />
                <Route path="/cart" element={<Carrello />} />
            </Routes>
        </div>
    )
}