/* eslint-disable jsx-a11y/anchor-is-valid */

import Footer from "../Colletion/Footer";
import { useEffect, useState } from "react";
import ButtonDisqus from "../Colletion/Button_Disqus";
import Scroll from "../Componentes/Elements/Scroll";

/* eslint-disable jsx-a11y/no-distracting-elements */
export function Inicio() {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    fetch("https://api-rest.up.railway.app/api/v1/workouts")
      // Exito
      .then((response) => response.json())
      // convertir a json
      .then((json) => setInfo(json))
      //imprimir los datos en la consola
      .catch((err) => console.log("Solicitud fallida", err));
  }, [setInfo]);
  return (
    <>
      <title>Animekuns - animes online HD</title>
      <div>
        <div>
          <section className="section page-home__latest-series">
            <div className="container" style={{ padding: "10px" }}>
              <h1 className="titulo title is-size-4 has-text-centered has-text-weight-semibold has-text-light is-uppercase">
                <i
                  className="fa-solid fa-circle"
                  style={{ color: "rgb(240 30 20)", marginRight: "5px" }}
                ></i>
                Emisiones
              </h1>
              <Scroll />
            </div>
          </section>
          <section className="section page-home__latest-series">
            <div className="container">
              <h1 className="titulo title is-size-4 has-text-centered has-text-weight-semibold has-text-light is-uppercase">
                <i
                  className="fa-solid fa-layer-group"
                  style={{ color: "rgb(20 620 240)" }}
                ></i>
                RECIEN AGREGADOS
              </h1>
              <hr />
              <div className="list-series">
                {info.slice(150, 168).map((data) => (
                  <article
                    className="serie-card"
                    title={data.name}
                    key={data.id}
                  >
                    <figure className="image overarchingdiv2">
                      <a href={data.link}>
                        <img src={data.image} alt={data.name} />
                        <div className="overlay-dark"></div>
                        <div className="hoveroverlay">
                          <i className="fas fa-play pgnav activehov"></i>
                        </div>
                      </a>
                      <span className="tag year is-dark">{data.year}</span>
                      <span className="tag is-danger type">TV</span>
                      <span className={data.classEstado}>{data.estado}</span>
                      <div className="title">
                        <h3>
                          <a
                            href={data.link}
                            className="has-text-orange has-text-weight-semibold has-text-centered is-size-6"
                          >
                            {data.name}
                          </a>
                        </h3>
                      </div>
                    </figure>
                  </article>
                ))}
              </div>
            </div>
          </section>
          <section className="section page-home__latest-series">
            <div className="container rounded-container">
              <h1 className="titulo title is-size-4 has-text-centered has-text-weight-semibold has-text-light is-uppercase">
                <i
                  class="fa-sharp fa-solid fa-diamond"
                  style={{ color: "rgb(20 230 20)" }}
                ></i>{" "}
                Proximamente
              </h1>
              <hr />
              <div className="list-series">
                <div>
                  <div style={{ alignItems: "center" }}>
                    <article style={{ textAlign: "center", display: "grid" }}>
                      <ul
                        style={{
                          color: "rgb(250 250 250)",
                        }}
                      >
                        <li
                          style={{
                            display: "inline-block",
                            margin: "7px",
                            width: "100%",
                            background: "#202020",
                          }}
                        >
                          Aggretsuko
                        </li>
                        <li
                          style={{
                            display: "inline-block",
                            margin: "7px",
                            width: "100%",
                            background: "#202020",
                          }}
                        >
                          Attack on Titan
                        </li>
                        <li
                          style={{
                            display: "inline-block",
                            margin: "7px",
                            width: "100%",
                            background: "#202020",
                          }}
                        >
                          Black Clover: La Pelicula
                        </li>
                        <li
                          style={{
                            display: "inline-block",
                            margin: "7px",
                            width: "100%",
                            background: "#202020",
                          }}
                        >
                          Blue Giant: La Pelicula
                        </li>
                        <li
                          style={{
                            display: "inline-block",
                            margin: "7px",
                            width: "100%",
                            background: "#202020",
                          }}
                        >
                          Blue Orchestra,
                        </li>
                        <li
                          style={{
                            display: "inline-block",
                            margin: "7px",
                            width: "100%",
                            background: "#202020",
                          }}
                        >
                          Bungo Stray Dogs,
                        </li>
                        <li
                          style={{
                            display: "inline-block",
                            margin: "7px",
                            width: "100%",
                            background: "#202020",
                          }}
                        >
                          Castlevania: Nocture,
                        </li>
                        <li
                          style={{
                            display: "inline-block",
                            margin: "7px",
                            width: "100%",
                            background: "#202020",
                          }}
                        >
                          Classroom of the Elite: Tercera Temporada
                        </li>
                        <li
                          style={{
                            display: "inline-block",
                            margin: "7px",
                            width: "100%",
                            background: "#202020",
                          }}
                        >
                          Demon Slayer
                        </li>
                        <li
                          style={{
                            display: "inline-block",
                            margin: "7px",
                            width: "100%",
                            background: "#202020",
                          }}
                        >
                          Dr Stone
                        </li>
                        <li
                          style={{
                            display: "inline-block",
                            background: "#202020",
                            margin: "7px",
                            width: "100%",
                          }}
                        >
                          Edens Zero: Segunda Temporada
                        </li>
                      </ul>
                    </article>
                  </div>
                  <ButtonDisqus />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>{" "}
      <hr />
      <Footer />
    </>
  );
}
