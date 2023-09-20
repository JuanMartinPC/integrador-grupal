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

    
    const selectCategory = (cat) => {
        if (cat === "default"){
            setFilter([])
        } else setFilter(products.filter(c => c.category === cat))
    }

    const [order, setOrder] = useState([])
    const predOrder = products
    const selectOrder = (ord) => {

        if (ord === 'Asc'){
                const menorOrder = predOrder;
                setFilter([menorOrder.sort((x, y) => x.id - y.id)])                
        }
        else if (ord === 'MenorPrecio'){
                const menorOrder = predOrder;
                setFilter([menorOrder.sort((x, y) => x.price - y.price)])                 
        }
        else if (ord === 'MayorPrecio'){
                const mayorOrder = predOrder;
                setFilter([mayorOrder.sort((x, y) => y.price - x.price)])                
        }
    }
    

    const [searchText, setSearchText] = useState(undefined)
    const [searchResults, setSearchResults] = useState([])
    const search = (text) => {
        setSearchText(text.toLowerCase()),
        setSearchResults(products.filter(p => p.title.toLowerCase().includes(searchText)))
    }

    useEffect(() => {
      fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => setProducts(data))
    }, [])
    

    return (
        <ProductContext.Provider value={{products, filter, order, searchResults, cart, addCart, selectCategory, selectOrder, search}}>
            {children}
        </ProductContext.Provider>
    )
}

export default ProductContext;