import {Route, Routes } from "react-router-dom";
import { Homepage } from "./Pages/Homepage";
import Login from "./Login/Login";

export const App = () => {
  return (
    <div>
     
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      
    </div>
  );
};
