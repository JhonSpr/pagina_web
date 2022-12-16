import Disqus from "./Elements/disqus";

export function Numero12({
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
  descripcion,
  anime,
  numeroEpisodios,
  tipo,
  estado,
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
  imagenAnime,
}) {
  return (
    <>
      <title>{anime} Online</title>

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
                  </span>
                  {tipo}
                </li>
                <li>
                  <span className="has-text-weight-semibold has-text-grey is-uppercase">
                    Estado:
                  </span>
                  {estado}
                </li>
                <li>
                  <span className="has-text-weight-semibold has-text-grey is-uppercase">
                    Episodios:
                  </span>
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

              <ul className="anime-page__episode-list is-size-6">
                <li>
                  <a
                    className="fa-play-circle d-inline-flex align-items-center is-rounded "
                    href={capituloAnime1}
                  >
                    {anime} Episodio 1
                  </a>
                </li>
                <li>
                  <a
                    className="fa-play-circle d-inline-flex align-items-center is-rounded "
                    href={capituloAnime2}
                  >
                    {anime} Episodio 2
                  </a>
                </li>
                <li>
                  <a
                    className="fa-play-circle d-inline-flex align-items-center is-rounded "
                    href={capituloAnime3}
                  >
                    {anime} Episodio 3
                  </a>
                </li>
                <li>
                  <a
                    className="fa-play-circle d-inline-flex align-items-center is-rounded "
                    href={capituloAnime4}
                  >
                    {anime} Episodio 4
                  </a>
                </li>
                <li>
                  <a
                    className="fa-play-circle d-inline-flex align-items-center is-rounded "
                    href={capituloAnime5}
                  >
                    {anime} Episodio 5
                  </a>
                </li>
                <li>
                  <a
                    className="fa-play-circle d-inline-flex align-items-center is-rounded "
                    href={capituloAnime6}
                  >
                    {anime} Episodio 6
                  </a>
                </li>
                <li>
                  <a
                    className="fa-play-circle d-inline-flex align-items-center is-rounded "
                    href={capituloAnime7}
                  >
                    {anime} Episodio 7
                  </a>
                </li>
                <li>
                  <a
                    className="fa-play-circle d-inline-flex align-items-center is-rounded "
                    href={capituloAnime8}
                  >
                    {anime} Episodio 8
                  </a>
                </li>
                <li>
                  <a
                    className="fa-play-circle d-inline-flex align-items-center is-rounded "
                    href={capituloAnime9}
                  >
                    {anime} Episodio 9
                  </a>
                </li>
                <li>
                  <a
                    className="fa-play-circle d-inline-flex align-items-center is-rounded "
                    href={capituloAnime10}
                  >
                    {anime} Episodio 10
                  </a>
                </li>
                <li>
                  <a
                    className="fa-play-circle d-inline-flex align-items-center is-rounded "
                    href={capituloAnime11}
                  >
                    {anime} Episodio 11
                  </a>
                </li>
                <li>
                  <a
                    className="fa-play-circle d-inline-flex align-items-center is-rounded "
                    href={capituloAnime12}
                  >
                    {anime} Episodio 12
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
