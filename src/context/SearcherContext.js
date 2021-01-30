import React, { createContext, useState } from "react";

// Crear el Context. Todo Context tiene un Provider
export const SearcherContext = createContext();
// Crear el Provider. El Provider es donde se encontran las funciones y state.
const SearcherProvider = (props) => {
  // Crear el state del context.
  const [searcherText, setSearcherText] = useState("");

  return (
    <SearcherContext.Provider value={{ searcherText, setSearcherText }}>
      {props.children}
    </SearcherContext.Provider>
  );
};
export default SearcherProvider;