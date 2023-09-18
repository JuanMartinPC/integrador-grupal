import Header from '../components/Header2'
import { useContext } from 'react'
import {Link} from 'react-router-dom'
import ProductContext from '../context/ProductsContext'
import { totalPrice } from '../utils/totalPrice'
import '../styles/Cart.css'

function ProdsCart() {

    const selectedProducts = useContext(ProductContext);
    const listOfProds = document.getElementById('productList');
    const isItem = selectedProducts.cart.length < 1;

  return (
    <>
        <Header />
        <ol id='productList' className='cart__list'>
            {selectedProducts.cart.map((prod) => (
            <li className='cart__item' key={prod.id}>
                <h3>Product Title: {prod.title}</h3>
                <h4>Price: ${prod.price}</h4>
            </li>))}
        </ol>
            <h2>Total: ${totalPrice(selectedProducts.cart)}</h2>
            <div className='btn__container'>
              <button className='back__btn'><Link to={-1}><h2>Atras</h2></Link></button>
              {isItem? '' : <button className='buy__btn' ><h2>Comprar</h2></button>}
              
            </div>
    </>
  )
}

export default ProdsCart