import { useContext } from 'react';
import '../styles/Categories.css'
import ProductContext from '../context/ProductsContext';
function Order() {
  const { selectOrder } = useContext(ProductContext)

  return (
    <div class="dropdown">
      <button>Orden</button>
      <div class="dropdown__content">
        <p onClick={() => selectOrder('Asc')} >Predeterminado</p>
        <p onClick={() => selectOrder('MenorPrecio')} >Menor precio</p>
        <p onClick={() => selectOrder('MayorPrecio')} >Mayor precio</p>
      </div>
    </div>
  )
}

export default Order;