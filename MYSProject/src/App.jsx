import { Link, Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import "./layout.css"
import { Header } from "./header";
import { News } from "./News";
import { DiscoverMore } from "./DiscoverMore";

export function App() {


    return (
        <div className="container-header">
            <Routes>
                <Route path="/" element={<Header />} />
                <Route path="/news" element={<News />} />
                <Route path="/discovermore" element={<DiscoverMore />} />
            </Routes>
            </div>
)}
