import Axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import "../../static/Detail.scss";
import imageBack from "../../static/img/regresar-flecha.svg";
import { Spinner } from "../Spinner";
export const Detail = () => {
  const [loading, setLoading] = useState(false);
  const [info, setInfo] = useState([""]);
  const history = useHistory();
  // console.log(history.location.pathname);
  let arrayS = history.location.pathname.split("/");
  setTimeout(() => {
    setIdS(arrayS[2]);
    setCategoriaS(arrayS[1]);
  }, 500);
  const [categoriaS, setCategoriaS] = useState(arrayS[1]);
  const [idS, setIdS] = useState(arrayS[2]);
  useEffect(() => {
    const fetchInfo = async () => {
      // No category, no cards.
      // console.log("category ", categoriaS);
      if (categoriaS == "" || !categoriaS || idS == 0 || !idS) return;
      // Consultar la API para obtener la cotizacion.
      try {
        const url = `https://swapi.py4e.com/api/${categoriaS}/${idS}`;
        const resultado = await Axios.get(url);
        // Mostrar el spinner porque se esta cargando
        setLoading(true);
        // console.log(Object.entries(resultado.data));
        let a = Object.entries(resultado.data);
        // console.log(a);
        let b = [];
        a.forEach(([key, value]) => {
          // console.log(key);
          if (
            key === "residents" ||
            key === "films" ||
            key === "characters" ||
            key === "planets" ||
            key === "starships" ||
            key === "vehicles" ||
            key === "species" ||
            key == "homeworld" ||
            key == "url" ||
            key == "created" ||
            key == "edited"
          ) {
          } else {
            // console.log(key);
            b.push({ key: key, value: value });
            //b.push(`${key}: ${value.toString()}`);
          }
        });
        // console.log(b);
        setInfo(b);
      } catch (error) {
        // console.log("There was a mistake: ", error);
        setLoading(true);
      }
      // No loading:
      setLoading(false);
      // console.log(info);
    };
    fetchInfo();
  }, []);
  return (
    <div>
      <section className="fondo animate__animated animate__fadeInLeft">
        {loading ? (
          <Spinner />
        ) : (
          <div className="tajeta ">
            <div className="container-elements-tarjeta">
              <div className="flex-elemts">
                <div className="cont-header-all">
                  <div className="d-flex-1">
                    <Link to={"/home"}>
                      <div className="btn-regresa">
                        <img src={imageBack} alt="Home" width="15px" />
                        <span>Home</span>
                      </div>
                    </Link>
                    <h4>Details</h4>
                  </div>
                </div>
                <div className="mt-4">
                  {info.map((i, index) => (
                    <div className="text-container" key={index}>
                      <p>{i.key}</p>
                      <p className="p-info">{i.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};
