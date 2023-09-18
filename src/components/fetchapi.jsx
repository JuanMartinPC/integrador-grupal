import { useEffect, useState } from "react";
import Card from "./Card";


function Tienda(){
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])

    return(
        <>
            <SearchBar />
            <main>
                {products.map((p) => (<Card p={p}/>))}
            </main>
        </>
    )
}

export default Tienda;