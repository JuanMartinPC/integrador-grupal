import '../styles/fetchapi.css'
import ProductContext from '../context/ProductsContext';
import { useContext, useState } from 'react';

function Card({ p }){
    const { addCart } = useContext(ProductContext);
    
    return(
        <>
            <article key={p.id}>
                <h2>{p.title}</h2>
                <img src={p.image} alt={p.title}/>
                <p>{p.description.slice(0,31)}</p>
                <h4>USD {p.price}</h4>
                <button onClick={() => addCart({'id': p.id, 'image': p.image, 'title': p.title, 'price': p.price, 'quantity': 1 })}>Add to cart</button>
            </article>
        </>
    )
}

export default Card;