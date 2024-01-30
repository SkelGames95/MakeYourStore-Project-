
import { Route, Router, Routes } from "react-router-dom";
import Login from "./Login/Login";
import Register from "./Login/Register";

export const App = () => {
  return (
    <div>
    
        <Routes>
            
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
     
    </div>
  );
};
