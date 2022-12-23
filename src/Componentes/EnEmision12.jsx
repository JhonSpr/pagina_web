/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/anchor-is-valid */

import { Banner } from "./Elements/banner";
import Disqus from "./Elements/disqus";

/* eslint-disable jsx-a11y/iframe-has-title */
export function Emision12({
  Fecha,
  sec1,
  sec2,
  sec3,
  hrefSecuela2,
  hrefSecuela3,
  nombreSecuela2,
  nombreSecuela3,
  textoSecuela2,
  textoSecuela3,
  hrefSecuela,
  textoSecuela,
  nombreSecuela,
  tituloAnime,
  imagenAnime,
  descripcion,
  anime,
  numeroEpisodios,
  tipo,
  estado,
  li1,
  li2,
  li3,
  li4,
  li5,
  li6,
  li7,
  li8,
  li9,
  li10,
  li11,
  li12,
  li13,
  capituloAnime1,
  capituloAnime2,
  capituloAnime3,
  capituloAnime4,
  capituloAnime5,
  capituloAnime6,
  capituloAnime7,
  capituloAnime8,
  capituloAnime9,
  capituloAnime10,
  capituloAnime11,
  capituloAnime12,
  capituloAnime13,
}) {
  return (
    <>
      <title>{anime} Online HD</title>
      <div style={{ width: "100%", height: "100%" }}>
        <Banner />
      </div>
      <section className="section">
        <div className="container">
          <div className="columns is-mobile is-multiline">
            <div className="column is-12-mobile xis-3-tablet xis-3-desktop xhas-background-danger is-narrow-tablet is-narrow-desktop">
              <figure className="image is-2by4 image_2">
                <img src={imagenAnime} alt={anime} />
              </figure>
              <br />
            </div>

            <div className="column columnas">
              <div className="columns is-multiline is-narrow">
                <div className="column is-12-mobile is-8-tablet is-10-desktop">
                  <h1 className="title has-text-orange">{anime}</h1>
                </div>
                <div className="column is-12-mobile is-4-tablet is-2-desktop"></div>
              </div>

              <h6 className="has-text-weight-semibold is-uppercase has-text-grey has-border-bottom">
                Descripcion
              </h6>
              <div className="has-text-light sinopsis">{descripcion}</div>

              <p className="has-text-weight-semibold is-uppercase has-text-grey has-border-bottom">
                Información general
              </p>

              <ul className="has-text-light">
                <li>
                  <span className="has-text-weight-semibold has-text-grey is-uppercase">
                    Tipo:
                  </span>{" "}
                  {tipo}
                </li>
                <li>
                  <span className="has-text-weight-semibold has-text-grey is-uppercase">
                    Estado:
                  </span>{" "}
                  {estado}
                </li>
                <li>
                  <span className="has-text-weight-semibold has-text-grey is-uppercase">
                    Episodios:
                  </span>{" "}
                  {numeroEpisodios}
                </li>
                <li className={sec1}>
                  <span className="has-text-weight-semibold has-text-grey is-uppercase">
                    {textoSecuela}:
                  </span>
                  <a href={hrefSecuela}>{nombreSecuela}</a>
                </li>
                <li className={sec2}>
                  <span className="has-text-weight-semibold has-text-grey is-uppercase">
                    {textoSecuela2}:
                  </span>
                  <a href={hrefSecuela2}>{nombreSecuela2}</a>
                </li>
                <li className={sec3}>
                  <span className="has-text-weight-semibold has-text-grey is-uppercase">
                    {textoSecuela3}:
                  </span>
                  <a href={hrefSecuela3}>{nombreSecuela3}</a>
                </li>
                <li>
                  <span className="has-text-weight-semibold has-text-grey is-uppercase">
                    Proximo Capitulo:
                  </span>
                  <span className="is-uppercase has-text-weight-semibold">
                    {Fecha}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-12">
              <h1 className="title is-size-5 has-text-weight-light has-text-light has-text-weight-semibold ">
                <i className="fa fa-list-ul has-text-orange Icono-list"></i>{" "}
                <b> Lista de episodios </b>
              </h1>

              <ul className="anime-page__episode-list is-size-6 cuarenta-caps">
                <li id={li1}>
                  <a
                    className="fa-play-circle d-inline-flex align-items-center is-rounded "
                    href={capituloAnime1}
                  >
                    {anime} Episodio 1
                  </a>
                </li>
                <li className={li2}>
                  <a
                    className="fa-play-circle d-inline-flex align-items-center is-rounded "
                    href={capituloAnime2}
                  >
                    {anime} Episodio 2
                  </a>
                </li>
                <li className={li3}>
                  <a
                    className="fa-play-circle d-inline-flex align-items-center is-rounded "
                    href={capituloAnime3}
                  >
                    {anime} Episodio 3
                  </a>
                </li>
                <li className={li4}>
                  <a
                    className="fa-play-circle d-inline-flex align-items-center is-rounded "
                    href={capituloAnime4}
                  >
                    {anime} Episodio 4
                  </a>
                </li>
                <li className={li5}>
                  <a
                    className="fa-play-circle d-inline-flex align-items-center is-rounded "
                    href={capituloAnime5}
                  >
                    {anime} Episodio 5
                  </a>
                </li>
                <li className={li6}>
                  <a
                    className="fa-play-circle d-inline-flex align-items-center is-rounded "
                    href={capituloAnime6}
                  >
                    {anime} Episodio 6
                  </a>
                </li>
                <li className={li7}>
                  <a
                    className="fa-play-circle d-inline-flex align-items-center is-rounded "
                    href={capituloAnime7}
                  >
                    {anime} Episodio 7
                  </a>
                </li>
                <li className={li8}>
                  <a
                    className="fa-play-circle d-inline-flex align-items-center is-rounded "
                    href={capituloAnime8}
                  >
                    {anime} Episodio 8
                  </a>
                </li>
                <li className={li9}>
                  <a
                    className="fa-play-circle d-inline-flex align-items-center is-rounded "
                    href={capituloAnime9}
                  >
                    {anime} Episodio 9
                  </a>
                </li>
                <li className={li10}>
                  <a
                    className="fa-play-circle d-inline-flex align-items-center is-rounded "
                    href={capituloAnime10}
                  >
                    {anime} Episodio 10
                  </a>
                </li>
                <li className={li11}>
                  <a
                    className="fa-play-circle d-inline-flex align-items-center is-rounded "
                    href={capituloAnime11}
                  >
                    {anime} Episodio 11
                  </a>
                </li>
                <li className={li12}>
                  <a
                    className="fa-play-circle d-inline-flex align-items-center is-rounded "
                    href={capituloAnime12}
                  >
                    {anime} Episodio 12
                  </a>
                </li>
                <li className={li13}>
                  <a
                    className="fa-play-circle d-inline-flex align-items-center is-rounded "
                    href={capituloAnime13}
                  >
                    {anime} Episodio 13
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <Disqus />
        </div>
      </section>{" "}
      <hr />
      <footer>
        <span
          className="has-text-weight-semibold has-text-orange"
          style={{ display: "inline-block" }}
        >
          <i class="fa-regular fa-copyright"></i> Animekuns
        </span>
        <h1 className="has-text-orange" style={{ display: "inline-block" }}>
          Disfruta del anime Online
        </h1>

        <h3
          style={{
            color: "#363636",
            marginLeft: "20px",
            fontWeight: "100",
          }}
        >
          Ningún vídeo se encuentra alojado en nuestros servidores.
        </h3>
      </footer>
    </>
  );
}
