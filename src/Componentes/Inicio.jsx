/* eslint-disable jsx-a11y/anchor-is-valid */
import { Agregados, Noticia } from "./Noticias";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Disqus } from "./disqus";
import PauseOnHover from "./Scroll";

/* eslint-disable jsx-a11y/no-distracting-elements */
export function Inicio() {
  return (
    <>
      <title>Animekun - animes online HD</title>

      <div className="hero is-lightx is-fullheight">
        <div>
          <section className="section page-home__latest-series">
            <i
              class="fa-solid fa-circle"
              style={{ color: "rgb(240 30 20)" }}
            ></i>
            <h1 className="titulo title is-size-4 has-text-centered has-text-weight-semibold has-text-light is-uppercase">
              Emisiones
            </h1>
            <div
              className="container rounded-container"
              style={{ padding: "10px" }}
            >
              <PauseOnHover />
            </div>
          </section>

          <section className="section page-home__latest-series">
            <div className="container rounded-container">
              <h1 className="titulo title is-size-4 has-text-centered has-text-weight-semibold has-text-light is-uppercase">
                <i
                  class="fa-solid fa-layer-group"
                  style={{ color: "rgb(20 620 240)" }}
                ></i>
                RECIEN AGREGADOS
              </h1>
              <hr />
              <div className="list-series">
                <Agregados />
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
                </div>
              </div>
            </div>
          </section>

          <section className="section page-home__latest-series">
            <div className="container rounded-container div-noticias">
              <h1 className="titulo title is-size-4 has-text-centered has-text-weight-semibold has-text-light is-uppercase">
                NOTICIAS SOBRE ANIME
              </h1>
              <hr />
              <div className="list-series">
                <Noticia />
              </div>
              <div className="container_comment">
                <Disqus className={"Comentarios"} />
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
