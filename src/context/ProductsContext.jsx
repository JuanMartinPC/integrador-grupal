import { createContext, useState, useEffect } from "react";
const ProductContext = createContext();

export const ProductContextProvider = ({children}) => {
    const [cart, setCart] = useState([]);
    const addCart = (prod) => {
        setCart([...cart, prod])
    }

    const [products, setProducts] = useState([]);

    useEffect(() => {
      fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data),
      )
    }, [])

    return (
        <ProductContext.Provider value={{products, cart, addCart}}>
            {children}
        </ProductContext.Provider>
    )
}

export default ProductContext;