import React, { createContext, useState } from "react";

// Crear el Context. Todo Context tiene un Provider
export const PageContext = createContext();
// Crear el Provider. El Provider es donde se encontran las funciones y state.
const PageProvider = (props) => {
  // Crear el state del context.
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  // const [showAlert, setShowAlert] = useState(false);
  return (
    <PageContext.Provider value={{ page, setPage, totalPage, setTotalPage }}>
      {props.children}
    </PageContext.Provider>
  );
};
export default PageProvider;