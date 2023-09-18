import { useContext } from 'react'
import '../styles/Categories.css'
import ProductContext from '../context/ProductsContext'

function Categories() {
  const { selectCategory } = useContext(ProductContext)

  return (
    <div class="dropdown">
      <button>Categorías</button>
      <div class="dropdown__content">
        <p onClick={() => selectCategory("default")} >Todos los productos</p>
        <p onClick={() => selectCategory("men's clothing")} >Ropa para hombres</p>
        <p onClick={() => selectCategory("women's clothing")}>Ropa para mujeres</p>
        <p onClick={() => selectCategory("electronics")}>Electronica</p>
        <p onClick={() => selectCategory("jewelery")}>Joyería</p>
      </div>
    </div>
  )
}

export default Categories