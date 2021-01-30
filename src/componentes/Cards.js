import Axios from "axios";
import React, { useContext, useState, useEffect } from "react";
import { CategoriesContext } from "../context/CategoriesContext";
import { PageContext } from "../context/PageContext";
import { SearcherContext } from "../context/SearcherContext";
import { Card } from "./Card";
import { Pagination } from "./Pagination";
import { Spinner } from "./Spinner";

export const Cards = (props) => {
  const { category, justThree } = props;
  const [loading, setLoading] = useState(true);
  // Extract the categories value.
  const { page, setTotalPage } = useContext(PageContext);
  const { searcherText } = useContext(SearcherContext);
  const [info, setInfo] = useState([]);
  const [infoCopy, setInfoCopy] = useState([]);
  useEffect(() => {
    const fetchCards = async () => {
      // No category, no cards.
      console.log("category ", category);
      if (!category) return;
      // Consultar la API para obtener la cotizacion.
      try {
        const url = `https://swapi.py4e.com/api/${category}/?page=${page}`;
        const resultado = await Axios.get(url);
        // Mostrar el spinner porque se esta cargando
        setLoading(true);
          setTotalPage(Math.ceil(
            resultado.data.count / 10
          ));
          // Guardar cotizacion:
          console.log(resultado);
          let resultObject = [];
          if (justThree) {
            for (let i = 0; i < 3; i++) {
              let a = {
                main: getMain(category, resultado.data.results[i]),
                info1: getInfo1(category, resultado.data.results[i]),
                info2: getInfo2(category, resultado.data.results[i]),
                urlSw: resultado.data.results[i].url
                  ? resultado.data.results[i].url
                  : "",
              };
              resultObject.push(a);
            }
          } else {
            for (let i = 0; i < resultado.data.results.length; i++) {
              let a = {
                main: getMain(category, resultado.data.results[i]),
                info1: getInfo1(category, resultado.data.results[i]),
                info2: getInfo2(category, resultado.data.results[i]),
                urlSw: resultado.data.results[i].url
                  ? resultado.data.results[i].url
                  : "",
              };
              resultObject.push(a);
            }
          }
          setInfo(resultObject);
          setInfoCopy(resultObject);
      } catch (error) {
        console.log("There was a mistake: ", error);
        setLoading(true);
      }
                // No loading:
                setLoading(false);
      // console.log(resultObject);
    };
    fetchCards();
  }, [category, page]);
  useEffect(() => {
    const getFilterCards = (name = '') => {
      if(name === '') return infoCopy;
      // console.log('getFilterCards ', info);
      name = name.toLocaleLowerCase();
      return info.filter(card => card.main.toLocaleLowerCase().includes(name));
    }
    setInfo(getFilterCards(searcherText));
    console.log(getFilterCards(searcherText));
  }, [searcherText])
  /* This function receive a string, and return a new string relying on the category. */
  function getInfo1(categoryName, result) {
    switch (categoryName) {
      case "people":
        return result.height ? result.height : "";
      case "planets":
        return result.climate ? result.climate : "";
      case "starships":
        return result.model ? result.model : "";
      case "films":
        return result.producer ? result.producer : "";
      case "vehicles":
        return result.model ? result.model : "";
      case "species":
        return result.classification ? result.classification : "";
      default:
        return "";
    }
  }
  function getMain(categoryName, result) {
    switch (categoryName) {
      case "films":
        return result.title ? result.title : "";
      default:
        return result.name ? result.name : "";
    }
  }
  function getInfo2(categoryName, result) {
    switch (categoryName) {
      case "people":
        return result.hair_color ? result.hair_color : "";
      case "planets":
        return result.population ? result.population : "";
      case "starships":
        return result.manufacturer ? result.manufacturer : "";
      case "films":
        return result.director ? result.director : "";
      case "vehicles":
        return result.passengers ? result.passengers : "";
      case "species":
        return result.language ? result.language : "";
      default:
        return "";
    }
  }
  // Extract the categories value.
  // const { categorieSelected } = useContext(CategoriesContext);
  return (
    <div className="container mt-5 mt-xl-4 animate__animated animate__fadeIn">
      <p className="mt-5 text-start title-1">{category ? category : ""}</p>
      <div className="mt-4 row justify-content-center">
        {loading ? (
          <Spinner />
        ) : (info.length != 0) ? (
          info.map((inf, index) => (
            <Card info={inf} category={category} key={index} />
          ))
        ): <p className="alert alert-danger">No results</p>}
      </div>
      { justThree ? null : <Pagination /> }
    </div>
  );
};
