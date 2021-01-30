import React, { createContext, useState } from "react";

// Crear el Context. Todo Context tiene un Provider
export const CategoriesContext = createContext();
// Crear el Provider. El Provider es donde se encontran las funciones y state.
const CategoriesProvider = (props) => {
  // Crear el state del context.
  const [categorieSelected, setCategorieSelected] = useState("people");
  const categories = ["people", "planets", "starships" ,"films", "vehicles", "species" ];
  return (
    <CategoriesContext.Provider value={{ categorieSelected, setCategorieSelected, categories }}>
      {props.children}
    </CategoriesContext.Provider>
  );
};
export default CategoriesProvider;