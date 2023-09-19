import { useContext } from "react"
import ProductContext from "../context/ProductsContext"

function SearchBar({ setSearchText }){
    
    const { search } = useContext(ProductContext)
    const xd = document.getElementById('searchBar')

    return(
        <>
            <form>
                <label htmlFor="buscar"></label>
                <input id="searchBar" onChange={() => search(xd.value)} defaultValue='' type="text" name="buscar" placeholder="  Buscar..."/>
            </form>
        </>
    )
}

export default SearchBar;