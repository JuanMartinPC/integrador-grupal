import {Link, NavLink} from "react-router-dom";
import User from "../img/User.svg";
import Cart from "../img/Cart.svg";

export default function HeaderLink() {
    return(
        <>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/products">Catalogo</NavLink>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/user"> <img src={User} alt="" /> Usuario</NavLink>
            <NavLink to="/cart"> <img src={Cart} alt="Carrito" /> Carrito</NavLink>
        </>
    )
    
}