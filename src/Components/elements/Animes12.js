/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/anchor-is-valid */

import banner from "../../Json/Banners.json";
import { React } from "react";
import Listas12 from "../Listas.js/Listas12";
import ButtonDisqus from "../LoadDisqus";
import "../../css/InfoAnimes.css";
import "../../css/bulma.min.css";
/* eslint-disable jsx-a11y/iframe-has-title */
export function Capitulos12({
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
  ...props
}) {
  let end = 83;
  let RandomNumber = Math.floor(Math.random() * end);

  return (
    <>
      <title>{anime} Online HD</title>

      <section className="section">
        <div
          className="serie-background"
          style={{
            background: `url(${banner && banner[RandomNumber].image})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        ></div>
        <div className="container">
          <div className="columns is-mobile is-multiline info">
            <div className="column is-12-mobile xis-3-tablet xis-3-desktop is-narrow-tablet is-narrow-desktop image">
              <figure className="imagen-info">
                <img src={imagenAnime} alt={anime} />
              </figure>
              <br />
            </div>
            <div className="column columnas">
              <div className="columns is-multiline is-narrow">
                <div className="column is-12-mobile is-8-tablet is-10-desktop">
                  <h1 className="title-info">{anime}</h1>
                </div>
                <div className="column is-12-mobile is-4-tablet is-2-desktop"></div>
              </div>

              <h6 className="is-uppercase has-text-grey has-text-center has-border-bottom">
                Descripcion
              </h6>
              <div className="has-text-light sinopsis">{descripcion}</div>

              <br />
              <br />

              <p className="has-text-weight-semibold is-uppercase has-text-grey has-border-bottom">
                Información general
              </p>

              <ul className="has-text-light">
                <li className="has-text-normal has-text-weight-semibold">
                  <span className="has-text-weight-semibold has-text-grey is-uppercase has-text-normal">
                    Tipo:
                  </span>
                  {tipo}
                </li>
                <li className="has-text-normal has-text-weight-semibold">
                  <span className="has-text-weight-semibold has-text-grey is-uppercase has-text-normal">
                    Estado:
                  </span>
                  {estado}
                </li>
                <li className="has-text-normal has-text-weight-semibold">
                  <span className="has-text-weight-semibold has-text-grey is-uppercase has-text-normal">
                    Episodios:
                  </span>
                  {numeroEpisodios}
                </li>
                <li
                  className={sec1}
                  style={{
                    fontWeight: "700",
                    textTransform: "uppercase",
                  }}
                >
                  <span className="has-text-weight-semibold has-text-grey is-uppercase">
                    {textoSecuela}:
                  </span>
                  <a href={hrefSecuela}>{nombreSecuela}</a>
                </li>
                <li
                  className={sec2}
                  style={{
                    fontWeight: "700",
                    textTransform: "uppercase",
                  }}
                >
                  <span className="has-text-weight-semibold has-text-grey is-uppercase">
                    {textoSecuela2}:
                  </span>
                  <a href={hrefSecuela2}>{nombreSecuela2}</a>
                </li>
                <li
                  className={sec3}
                  style={{
                    fontWeight: "700",
                    textTransform: "uppercase",
                  }}
                >
                  <span className="has-text-weight-semibold has-text-grey is-uppercase">
                    {textoSecuela3}:
                  </span>
                  <a href={hrefSecuela3}>{nombreSecuela3}</a>
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
                <i className="fa fa-list-ul has-text-orange Icono-list"></i>
                <b> Lista de episodios </b>
              </h1>

              <Listas12
                anime={anime}
                capituloAnime1={props.capituloAnime1}
                capituloAnime2={props.capituloAnime2}
                capituloAnime3={props.capituloAnime3}
                capituloAnime4={props.capituloAnime4}
                capituloAnime5={props.capituloAnime5}
                capituloAnime6={props.capituloAnime6}
                capituloAnime7={props.capituloAnime7}
                capituloAnime8={props.capituloAnime8}
                capituloAnime9={props.capituloAnime9}
                capituloAnime10={props.capituloAnime10}
                capituloAnime11={props.capituloAnime11}
                capituloAnime12={props.capituloAnime12}
                li1={props.li1}
                li2={props.li2}
                li3={props.li3}
                li4={props.li4}
                li5={props.li5}
                li6={props.li6}
                li7={props.li7}
                li8={props.li8}
                li9={props.li9}
                li10={props.li10}
                li11={props.li11}
                li12={props.li12}
              />
            </div>
          </div>
          <ButtonDisqus />
        </div>
      </section>
    </>
  );
}
