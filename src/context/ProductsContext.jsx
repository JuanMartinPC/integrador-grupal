import { createContext, useState, useEffect } from "react";
const ProductContext = createContext();

export const ProductContextProvider = ({children}) => {
    const [cart, setCart] = useState([]);
    const addCart = (prod) => {
        setCart([...cart, prod])
    }

    const [products, setProducts] = useState([]);
    const [filter, setFilter] = useState([])

    console.log(filter);
    const selectCategory = (cat) => {
        if (cat === "default"){
            setFilter(products)
        } else setFilter(products.filter(c => c.category === cat))
    }

    useEffect(() => {
      fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => setProducts(data),
      )
    }, [])

    return (
        <ProductContext.Provider value={{products, filter, cart, addCart, selectCategory}}>
            {children}
        </ProductContext.Provider>
    )
}

export default ProductContext;