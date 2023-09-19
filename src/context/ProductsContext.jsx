import { createContext, useState, useEffect } from "react";
const ProductContext = createContext();

export const ProductContextProvider = ({children}) => {
    const [cart, setCart] = useState([]);
    const addCart = (prod) => {
        if (cart.length === 0 | cart.filter((p) => p.id === prod.id).length === 0){
            setCart([...cart, prod])
        }
        else if (cart.filter((p) => p.id === prod.id)){
            for (let i = 0; i < cart.length; i++){
                if (cart[i].id === prod.id){
                    cart[i].quantity += 1;
                    cart[i].price += prod.price;}
            }
        }
    }
        

    const [products, setProducts] = useState([]);
    const [filter, setFilter] = useState([])

    console.log(filter);
    const selectCategory = (cat) => {
        if (cat === "default"){
            setFilter(products)
        } else setFilter(products.filter(c => c.category === cat))
    }

    const [searchText, setSearchText] = useState('')
    const [searchResults, setSearchResults] = useState([])
    const search = (text) => {
        setSearchText(text.toLowerCase()),
        setSearchResults(products.filter(p => p.title.toLowerCase().includes(searchText)))
    }

    useEffect(() => {
      fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => setProducts(data),
      )
    }, [])

    return (
        <ProductContext.Provider value={{products, filter, searchResults, cart, addCart, selectCategory, search}}>
            {children}
        </ProductContext.Provider>
    )
}

export default ProductContext;