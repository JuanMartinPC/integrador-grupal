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
                <img src={Logo} alt="" />
                <ul className="user">
                    <li><Link to='/login'><FaUserAlt size='1.5em'/></Link></li>
                    <li><Link to='/cart'><FaShoppingCart size='1.5em'/><Cart /></Link></li>
                </ul>
            </div>
        </header>
        </>
    )
}

export default Header