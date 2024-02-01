
import { Route, Router, Routes } from "react-router-dom";
import Login from "./Login/Login";
import Register from "./Login/Register";
import Footer from "./Footer";

export const App = () => {
  return (
    <div>
    
        <Routes>
            <Route path="/" element={<Footer />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
     
    </div>
  );
};
