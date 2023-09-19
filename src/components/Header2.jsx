import Logo from "../img/Logo.svg"
import '../styles/Header.css'
import { FaUserAlt, FaShoppingCart, FaSearch} from 'react-icons/fa'
import { Link } from "react-router-dom"
import Cart from "./Cart"

function Header(){
    return(
        <>
        <header className="header">
            <div className="logo">
                <h1><img src={Logo} alt="" /></h1>
                <ul className="user">
                    <li><a href=""><FaUserAlt size='1.5em'/></a></li>
                    <li><Link to='/cart'><FaShoppingCart size='1.5em'/><Cart /></Link></li>
                </ul>
            </div>
        </header>
        </>
    )
}

export default Header