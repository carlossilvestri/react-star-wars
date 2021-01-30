import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Btn1 } from "./style-components/Generals";

export const Card = ({ info, category }) => {
  const { main, info1, info2, urlSw } = info;
  /* This function receive a string, and return a new string relying on the category. */
  function getInfo1(categoryName) {
    switch (categoryName) {
      case "people":
        return "Height";
      case "planets":
        return "Climate";
      case "starships":
        return "Model";
      case "films":
        return "Producer";
      case "vehicles":
        return "Model";
      case "species":
        return "Classification";
      default:
        return "";
    }
  }
  function getInfo2(categoryName) {
    switch (categoryName) {
      case "people":
        return "Hair color";
      case "planets":
        return "Population";
      case "starships":
        return "Manufacturer";
      case "films":
        return "Director";
      case "vehicles":
        return "Passengers";
      case "species":
        return "Language";
      default:
        return "";
    }
  }
  function getMain(categoryName) {
    switch (categoryName) {
      case "films":
        return "Title";
      default:
        return "Name";
    }
  }
  function getIdFromUrl(string) {
    let v = string.split("/");
    return v[5];
  }
  function getCategoryFromUrl(string) {
    let v = string.split("/");
    return v[4];
  }
  return (
    <Fragment>
      <div className="cont-card col-sm-12 col-md-4 m-3 ">
        <h4 className="title-2">
          {main && category
            ? `${getMain(category)}: ${main}`
            : "No info available"}
        </h4>
        <p className="title-3 mt-4">
          {info1 && category
            ? `${getInfo1(category)}: ${info1}`
            : "No info available"}
        </p>
        <p className="title-3">
          {info2 && category
            ? `${getInfo2(category)}: ${info2}`
            : "No info available"}
        </p>
        <Link
          to={
            urlSw ? `/${getCategoryFromUrl(urlSw)}/${getIdFromUrl(urlSw)}` : ""
          }
        >
          <Btn1 type="button">More Details</Btn1>
        </Link>
      </div>
    </Fragment>
  );
};
