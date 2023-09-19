const Search = (Busqueda, products) => {
    if (!Busqueda) {
        return products
    }

    return products.filter((product) => {
        return product.title.toString().toLowerCase().includes(Busqueda.toString().toLowerCase());
      });
};

export default Search