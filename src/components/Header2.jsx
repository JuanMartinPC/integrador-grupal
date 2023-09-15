import Logo from "../img/Logo.svg"
import HeaderNav from "./HeaderNav"
import "../styles/Header.css"
import HeaderLink from "./HeaderLink"
import Search from "./Search"
import SearchBar from "./SearchBar"

function Header(){
    return(
        <>
        <div className="header">
            <div className="logo_search">
                <h1><a href=""><img src={Logo} alt="Axia"/></a></h1>
                <span><input className="searchBar" type="text" placeholder="buscar" /></span>
                <Search/>
            </div>
            <div>{SearchBar}</div>
            <div className="list_container">
                <ul className="list">
                    <li><a href="">Categorias</a></li>
                    <li><a href="">Hombre</a></li>
                    <li><a href="">Mujer</a></li>
                    <li><a href="">Marcas</a></li>
                </ul>
                <ul className="user_list">
                    <li><HeaderLink/></li>
                </ul>
            </div>
        </div>
        <div>
            <HeaderNav></HeaderNav>
        </div>
         </>
    )
}

export default Header