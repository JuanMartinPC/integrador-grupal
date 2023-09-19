import { useContext, useState } from "react"
import ProductContext from "../context/ProductsContext";
import { totalPrice } from "../utils/totalPrice";


function Cart (){
   
    const cartP = useContext(ProductContext);

    return(
        <>  
            {cartP.cart.length}
        </>
    )
}

export default Cart;