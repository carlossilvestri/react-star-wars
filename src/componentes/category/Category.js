import React, { Fragment, useContext } from "react";
import { CategoriesContext } from "../../context/CategoriesContext";
import { Cards } from "../Cards";
import { Header } from "../Header";

export const Category = () => {
  // Extract the categories value.
  const { categorieSelected } = useContext(CategoriesContext);
  // console.log('categorieSelected from category ', categorieSelected);
  return (
    <Fragment>
      <Header home={false}></Header>
      <div className="pt-5 pt-md-0">
        <Cards category={categorieSelected} justThree={false} />
      </div>
    </Fragment>
  );
};
