import Logo from "../img/Logo.svg"
import User from "../img/User.svg"
import Cart from "../img/Cart.svg"


function Header(){
    return(
        <>
        <div className="header">
            <div className="logo_search">
                <h1><img src={Logo} alt="" /></h1>
                <input type="text" placeholder="buscar" />
            </div>
            <div className="list">
                <ul>
                    <li><a href="">Categorias</a></li>
                    <li><a href="">Hombre</a></li>
                    <li><a href="">Mujer</a></li>
                    <li><a href="">Marcas</a></li>
                </ul>
            </div>
            <div className="user">
            <a href="">Usuario/registrarse <img src={User} alt="" /></a>
            <a href=""><img src={Cart} alt="" /></a>
            </div>
        </div>
        </>
    )
}

export default Header