import {Route, Routes } from "react-router-dom";
import { productContextProvider } from "../context/productsContext";
import Sesion from "./Sesion";
import User from "./User";
import Cart from "./Cart";
import Home from "./Home";

function HeaderNav() {
    return(
        <>
            <productContextProvider>
                
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/Login" element={<Sesion/>}>
                </Route>
                <Route path="/User" element={<User/>}>
                </Route>
                <Route path="/cart" element={<Cart/>}></Route>
            </Routes>
            </productContextProvider>
        </>
    )    
}
export default HeaderNav;