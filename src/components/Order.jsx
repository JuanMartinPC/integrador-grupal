import { useContext } from 'react';
import '../styles/Categories.css'
import ProductContext from '../context/ProductsContext';
function Order() {


  return (
    <div class="dropdown">
      <button>Orden</button>
      <div class="dropdown__content">
        <p>Predeterminado</p>
        <p>Ascencente</p>
        <p>Descendente</p>
      </div>
    </div>
  )
}

export default Order;