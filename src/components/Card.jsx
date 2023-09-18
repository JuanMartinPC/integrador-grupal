import '../styles/fetchapi.css'
import ProductContext from '../context/ProductsContext';
import { useContext } from 'react';

function Card({ p }){
    const { addCart } = useContext(ProductContext);
    

    return(
        <>
            <article key={p.id}>
                <h2>{p.title}</h2>
                <img src={p.image} alt={p.title}/>
                <p>{p.description.slice(0,31)}</p>
                <h4>{p.price} {p.category}</h4>
                <button onClick={() => addCart({'id': p.id, 'title': p.title, 'price': p.price})}>Add to cart</button>
            </article>
        </>
    )
}

export default Card;