import {Route, Routes } from "react-router-dom";
import { Homepage } from "./Pages/Homepage";

export const App = () => {
  return (
    <div>
     
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
      
    </div>
  );
};
