import { Route, Routes } from "react-router-dom";
import Login from "./Login/Login";
import Register from "./Login/Register";

export const App = () => {
  return (
   <Routes>
    <Route path="/login" element={<Login/>} />
    <Route path="/register"element={<Register/>}/>
   </Routes>
  );
};
