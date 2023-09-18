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
                <form>
                    <input type="text" placeholder=" Buscar..." />
                    <button type="submit" className="search__button"><FaSearch size='1.5em' color="black"/></button>
                </form>
                <ul className="user">
                    <li><a href=""><FaUserAlt size='1.5em'/></a></li>
                    <li><Link to='/cart'><FaShoppingCart size='1.5em'/>$<Cart /></Link></li>
                </ul>
            </div>
            {/* <div className="menu">
                <ul className="menu__list">
                     <li className="menu__item"><Link to='/products'>Productos</Link></li>
                </ul>
                
                
            </div> */}
            
        </header>
        </>
    )
}

export default Header