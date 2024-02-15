
import { Route, Routes } from "react-router-dom";
import Footer from "./Footer";

export const App = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Footer />} />
        </Routes>

    </div>
  );
};
