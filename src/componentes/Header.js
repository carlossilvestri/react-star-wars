import React, { Fragment, useContext } from "react";
import { CategoriesContext } from "../context/CategoriesContext";
import { Buscador } from "./Buscador";
import { useHistory } from "react-router-dom";
import { PageContext } from "../context/PageContext";
export const Header = (props) => {
  const { home } = props;
  // Extract the categories value.
  const { setCategorieSelected, categories } = useContext(CategoriesContext);
  const {setPage } = useContext(PageContext);
  const history = useHistory();
  const goToCategory = () =>{
    setPage(1);
    history.push('/category');
  }
  return (
    <Fragment>
      <div className="mb-4">
        <div className="main-title-container">
          <h2>{home ? "Home" : "Star Wars"}</h2>
        </div>
        <div className="options-container">
          {home ? (
            <p className="title-1">Select your category of Star Wars!</p>
          ) : (
            <Buscador />
          )}

          <select
            name=""
            id=""
            className="select-vale-dashboard"
            defaultValue="0"
            onChange={(e) => {setCategorieSelected(e.target.value); goToCategory()}}
          >
            <option value="0" disabled>
              Choose Category
            </option>
            {categories.map((categorie, index) => (
              <option value={categorie} key={index + 1}>
                {categorie}
              </option>
            ))}
          </select>
        </div>
      </div>
    </Fragment>
  );
};
