/* eslint-disable jsx-a11y/anchor-is-valid */
import { Agregados, Noticia } from "./Noticias";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Disqus } from "./disqus";

/* eslint-disable jsx-a11y/no-distracting-elements */
export function Inicio() {
  return (
    <>
      <title>Animekun - animes online HD</title>

      <div className="hero is-lightx is-fullheight">
        <div>
          <section class="section page-home__slider-container">
            <div
              class="container rounded-container"
              style={{ padding: "10px" }}
            >
              <h1
                class="title is-size-4 has-text-centered has-text-weight-semibold has-text-light is-uppercase"
                style={{
                  marginBottom: "0",
                  paddingTop: "10px",
                  paddingBottom: "10px",
                }}
              >
                <i class="fa fa-fire has-text-orange"></i> Animes Populares
              </h1>

              <div class="owl-carousel home-slider">
                <article class="serie-card">
                  <figure class="image">
                    <a
                      href="https://www.animefenix.tv/tensei-shitara-ken-deshita"
                      title="Tensei Shitara Ken Deshita"
                    >
                      <img src="" alt="Tensei Shitara Ken Deshita" />
                      <span class="overlay-dark"></span>
                    </a>
                    <span class="tag year is-dark">2022</span>
                    <span class="tag is-orange airing">Emisión</span>{" "}
                    <span class="tag is-danger type">TV</span>
                  </figure>
                  <div class="title">
                    <h3>
                      <a
                        class="has-text-orange has-text-weight-semibold has-text-centered is-size-6"
                        href="https://www.animefenix.tv/tensei-shitara-ken-deshita"
                        title="Tensei Shitara Ken Deshita"
                      >
                        Tensei Shitara Ken Deshita
                      </a>
                    </h3>
                  </div>
                </article>
                <article class="serie-card">
                  <figure class="image">
                    <a
                      href="https://www.animefenix.tv/uzaki-chan-wa-asobitai-omega"
                      title="Uzaki-chan wa Asobitai! ω"
                    >
                      <img src="" alt="Uzaki-chan wa Asobitai! ω" />
                      <span class="overlay-dark"></span>
                    </a>
                    <span class="tag year is-dark">2022</span>
                    <span class="tag is-orange airing">Emisión</span>{" "}
                    <span class="tag is-danger type">TV</span>
                  </figure>
                  <div class="title">
                    <h3>
                      <a
                        class="has-text-orange has-text-weight-semibold has-text-centered is-size-6"
                        href="https://www.animefenix.tv/uzaki-chan-wa-asobitai-omega"
                        title="Uzaki-chan wa Asobitai! ω"
                      >
                        Uzaki-chan wa Asobitai! ω
                      </a>
                    </h3>
                  </div>
                </article>
                <article class="serie-card">
                  <figure class="image">
                    <a
                      href="https://www.animefenix.tv/isekai-ojisan"
                      title="Isekai Ojisan"
                    >
                      <img src="" alt="Isekai Ojisan" />
                      <span class="overlay-dark"></span>
                    </a>
                    <span class="tag year is-dark">2022</span>
                    <span class="tag is-orange airing">Emisión</span>{" "}
                    <span class="tag is-danger type">TV</span>
                  </figure>
                  <div class="title">
                    <h3>
                      <a
                        class="has-text-orange has-text-weight-semibold has-text-centered is-size-6"
                        href="https://www.animefenix.tv/isekai-ojisan"
                        title="Isekai Ojisan"
                      >
                        Isekai Ojisan
                      </a>
                    </h3>
                  </div>
                </article>
                <article class="serie-card">
                  <figure class="image">
                    <a
                      href="https://www.animefenix.tv/one-piece"
                      title="One Piece"
                    >
                      <img src="" alt="One Piece" />
                      <span class="overlay-dark"></span>
                    </a>
                    <span class="tag year is-dark">1999</span>
                    <span class="tag is-orange airing">Emisión</span>{" "}
                    <span class="tag is-danger type">TV</span>
                  </figure>
                  <div class="title">
                    <h3>
                      <a
                        class="has-text-orange has-text-weight-semibold has-text-centered is-size-6"
                        href="https://www.animefenix.tv/one-piece"
                        title="One Piece"
                      >
                        One Piece
                      </a>
                    </h3>
                  </div>
                </article>
              </div>
            </div>
          </section>

          <section className="section page-home__latest-series">
            <div className="container rounded-container">
              <h1 className="titulo title is-size-4 has-text-centered has-text-weight-semibold has-text-light is-uppercase">
                <i
                  class="fa-solid fa-layer-group"
                  style={{ color: "rgb(20 620 240)" }}
                ></i>{" "}
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
