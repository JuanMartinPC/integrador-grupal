import '../styles/fetchapi.css'
import ProductContext from '../context/ProductsContext';
import { useContext } from 'react';

function Card({ p }){
    const { addCart } = useContext(ProductContext);
    
    return(
        <>
            <article className='product__card' key={p.id}>
                <h2 className='product__card-title'>{p.title}</h2>
                <img src={p.image} alt={p.title}/>
                <p className='product__card-description'>{p.description.slice(0,31)}</p>
                <h4 className='product__card-price'>USD {p.price}</h4>
                <button onClick={() => addCart({'id': p.id, 'image': p.image, 'title': p.title, 'price': p.price, 'quantity': 1 })}>Add to cart</button>
            </article>
        </>
    )
}

export default Card;