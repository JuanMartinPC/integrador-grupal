import { useContext, useState } from "react"
import ProductContext from "../context/ProductsContext";
import { Link } from "react-router-dom";
import { totalPrice } from "../utils/totalPrice";


function Cart (){
   
    const cartP = useContext(ProductContext);

    return(
        <>  
            {totalPrice(cartP.cart)}
        </>
    )
}

export default Cart;