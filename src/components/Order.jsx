import '../styles/Categories.css'
function Order() {
  return (
    <div class="dropdown">
      <button>Orden</button>
      <div class="dropdown__content">
        <p>Predeterminado</p>
        <p>Menor precio</p>
        <p>Mayor precio</p>
      </div>
    </div>
  )
}

export default Order;