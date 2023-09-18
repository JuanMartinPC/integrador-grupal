function SearchBar({ setSearchText }){
    const handleSearch = (e) => {
        e.preventDefault()
        setSearchText(e.target.value)
    }

    return(
        <>
            <form>
                <label htmlFor="buscar"></label>
                <input onChange={handleSearch} type="text" name="buscar" placeholder="  Buscar..."/>
            </form>
        </>
    )
}

export default SearchBar;