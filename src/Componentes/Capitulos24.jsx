/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/anchor-is-valid */

import Disqus from "./Elements/disqus";

/* eslint-disable jsx-a11y/iframe-has-title */
export function Capitulos24({
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
  li14,
  li15,
  li16,
  li17,
  li18,
  li19,
  li20,
  li21,
  li22,
  li23,
  li24,

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
  capituloAnime14,
  capituloAnime15,
  capituloAnime16,
  capituloAnime17,
  capituloAnime18,
  capituloAnime19,
  capituloAnime20,
  capituloAnime21,
  capituloAnime22,
  capituloAnime23,
  capituloAnime24,
}) {
  return (
    <>
      <title>{tituloAnime}</title>

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

              <br />
              <br />

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
                    {anime} <span> Episodio 1</span>
                  </a>
                </li>
                <li className={li2}>
                  <a
                    className="fa-play-circle d-inline-flex align-items-center is-rounded "
                    href={capituloAnime2}
                  >
                    {anime} <span> Episodio 2</span>
                  </a>
                </li>
                <li className={li3}>
                  <a
                    className="fa-play-circle d-inline-flex align-items-center is-rounded "
                    href={capituloAnime3}
                  >
                    {anime} <span> Episodio 3</span>
                  </a>
                </li>
                <li className={li4}>
                  <a
                    className="fa-play-circle d-inline-flex align-items-center is-rounded "
                    href={capituloAnime4}
                  >
                    {anime} <span> Episodio 4</span>
                  </a>
                </li>
                <li className={li5}>
                  <a
                    className="fa-play-circle d-inline-flex align-items-center is-rounded "
                    href={capituloAnime5}
                  >
                    {anime} <span> Episodio 5</span>
                  </a>
                </li>
                <li className={li6}>
                  <a
                    className="fa-play-circle d-inline-flex align-items-center is-rounded "
                    href={capituloAnime6}
                  >
                    {anime} <span> Episodio 6</span>
                  </a>
                </li>
                <li className={li7}>
                  <a
                    className="fa-play-circle d-inline-flex align-items-center is-rounded "
                    href={capituloAnime7}
                  >
                    {anime} <span> Episodio 7</span>
                  </a>
                </li>
                <li className={li8}>
                  <a
                    className="fa-play-circle d-inline-flex align-items-center is-rounded "
                    href={capituloAnime8}
                  >
                    {anime} <span> Episodio 8</span>
                  </a>
                </li>
                <li className={li9}>
                  <a
                    className="fa-play-circle d-inline-flex align-items-center is-rounded "
                    href={capituloAnime9}
                  >
                    {anime} <span> Episodio 9</span>
                  </a>
                </li>
                <li className={li10}>
                  <a
                    className="fa-play-circle d-inline-flex align-items-center is-rounded "
                    href={capituloAnime10}
                  >
                    {anime} <span> Episodio 10</span>
                  </a>
                </li>
                <li className={li11}>
                  <a
                    className="fa-play-circle d-inline-flex align-items-center is-rounded "
                    href={capituloAnime11}
                  >
                    {anime} <span> Episodio 11</span>
                  </a>
                </li>
                <li className={li12}>
                  <a
                    className="fa-play-circle d-inline-flex align-items-center is-rounded "
                    href={capituloAnime12}
                  >
                    {anime} <span> Episodio 12</span>
                  </a>
                </li>
                <li className={li13}>
                  <a
                    className="fa-play-circle d-inline-flex align-items-center is-rounded "
                    href={capituloAnime13}
                  >
                    {anime} <span> Episodio 13</span>
                  </a>
                </li>
                <li className={li14}>
                  <a
                    className="fa-play-circle d-inline-flex align-items-center is-rounded "
                    href={capituloAnime14}
                  >
                    {anime} <span> Episodio 14</span>
                  </a>
                </li>
                <li className={li15}>
                  <a
                    className="fa-play-circle d-inline-flex align-items-center is-rounded "
                    href={capituloAnime15}
                  >
                    {anime} <span> Episodio 15</span>
                  </a>
                </li>
                <li className={li16}>
                  <a
                    className="fa-play-circle d-inline-flex align-items-center is-rounded "
                    href={capituloAnime16}
                  >
                    {anime} <span> Episodio 16</span>
                  </a>
                </li>
                <li className={li17}>
                  <a
                    className="fa-play-circle d-inline-flex align-items-center is-rounded "
                    href={capituloAnime17}
                  >
                    {anime} <span> Episodio 17</span>
                  </a>
                </li>
                <li className={li18}>
                  <a
                    className="fa-play-circle d-inline-flex align-items-center is-rounded "
                    href={capituloAnime18}
                  >
                    {anime} <span> Episodio 18</span>
                  </a>
                </li>
                <li className={li19}>
                  <a
                    className="fa-play-circle d-inline-flex align-items-center is-rounded "
                    href={capituloAnime19}
                  >
                    {anime} <span> Episodio 19</span>
                  </a>
                </li>
                <li className={li20}>
                  <a
                    className="fa-play-circle d-inline-flex align-items-center is-rounded "
                    href={capituloAnime20}
                  >
                    {anime} <span> Episodio 20</span>
                  </a>
                </li>
                <li className={li21}>
                  <a
                    className="fa-play-circle d-inline-flex align-items-center is-rounded "
                    href={capituloAnime21}
                  >
                    {anime} <span> Episodio 21</span>
                  </a>
                </li>
                <li className={li22}>
                  <a
                    className="fa-play-circle d-inline-flex align-items-center is-rounded "
                    href={capituloAnime22}
                  >
                    {anime} <span> Episodio 22</span>
                  </a>
                </li>
                <li className={li23}>
                  <a
                    className="fa-play-circle d-inline-flex align-items-center is-rounded "
                    href={capituloAnime23}
                  >
                    {anime} <span> Episodio 23</span>
                  </a>
                </li>
                <li className={li24}>
                  <a
                    className="fa-play-circle d-inline-flex align-items-center is-rounded "
                    href={capituloAnime24}
                  >
                    {anime} <span> Episodio 24</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <Disqus />
        </div>
      </section>
    </>
  );
}
