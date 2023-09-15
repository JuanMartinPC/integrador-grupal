import Logo from "../img/Logo.svg"
import "../styles/Footer.css"
import React, {Component} from "react";
export default function Footer() {
    return(
        <>
            <footer className="footer">
                <div className="footer_logo">
                    <div>
                        <img src={Logo} alt="Logo"/>
                    </div>
                    <div className="footer_op">
                    <div className="f_op_socials">
                    <h3>Redes sociales</h3>
                    <ul>
                        <li><a href="">Twitter</a></li>
                        <li><a href="">Facebook</a></li>
                        <li><a href="">Instagram</a></li>
                    </ul>
                    </div>
                <div className="f_op_rt">
                <h2>¿Cambiaste de opinión?</h2>
                            <p>De acuerdo al derecho de arrepentimiento, podés cancelar dentro de los 10 dias de haberla realizado.</p>
                            <a href="" className="f_b" type="button" >Botón de arrepentimiento</a>
                </div>
            </div>
                </div>
                <div className="copy">
                    <h3>Copyright © Axia 2023. Todos los derechos reservados.</h3>
                    <p> Este sitio web y su contenido, incluidos, entre otros, textos, imágenes, videos, audio, gráficos y diseños, están protegidos por derechos de autor y no se pueden copiar, distribuir, modificar, transmitir, publicar o usar de ninguna otra forma sin el permiso expreso de Axia.</p>
                </div>
            </footer>
        </>
    )
}