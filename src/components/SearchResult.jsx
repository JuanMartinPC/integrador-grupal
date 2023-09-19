//BOTON DE BUSQUEDA----               <div>
            //     <SearchResult Search={Search} />
            //     <button type="submit" onClick={()=> Search(Busqueda) }>buscar</button>
            // </div>

            //SE LLAMA ASI

import React, { useState } from "react";

const SearchResult = ({ onSearch }) => {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
    onSearch(value);
  };

  return (
    <>
    <input
      type="text"
      value={value}
      onChange={handleChange}
      placeholder="Buscar"
      />
      </>
  );
};

export default SearchResult;