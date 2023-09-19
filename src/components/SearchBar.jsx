//BARRA DE BUSQUEDA
const SearchBar = ({onChangeText}) => {
    return (
        <>
            <form>
                    <label htmlFor="">Buscar</label>
                    <input
                     onChange={onChangeText}
                     type="text"
                     name="search"
                     id="search"
                     placeholder="Buscar..." />
            </form>
        </>
    )
};
export default SearchBar


//COSAS QUE VAN EN LA LISTA DE PRODUCTOS 

//ESTO CAPAZ QUE VA EN EL CONTEXT
// const [Busqueda, setBusqueda] = useState([]);
// const [OriginalProducts, setOriginalProducts] = useState([]);



//CONSTANTE const filteredProducts = Search(Busqueda, products);

    //
//PARA EL MAP DE PRODUCTOS => filteredProducts.map 