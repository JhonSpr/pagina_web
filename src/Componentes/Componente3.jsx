/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/style-prop-object */

import {
  AnimeRecommend1,
  AnimeRecommend2,
  AnimeRecommend3,
  AnimeRecommend4,
} from "./AnimesRecommend";
import { Disqus } from "./disqus";
// import Prueba from "./prueba";

/* eslint-disable jsx-a11y/iframe-has-title */
export function Video({
  tituloAnime,
  anime,
  capitulosVideo,
  siguienteVideo,
  anteriorVideo,
  numero,
  contAnteriorClass,
  contSiguienteClass,
  frame1,
}) {
  return (
    <div>
      <title>{tituloAnime}</title>

      <div className="hero is-fullheightX">
        <section className="section">
          <div className="container">
            <div className="columns is-multiline">
              <div className="column is-12-mobile is-8-tablet is-9-desktop">
                <h1 className="title is-size-4 has-text-centeredX has-text-weight-semibold is-uppercaseX has-text-light">
                  {anime} {numero}
                </h1>
              </div>

              <div className="column is-12-mobile is-9-tablet is-9-desktop">
                <div className="player-container">
                  <div className="iframe-container" id="video_player">
                    <iframe
                      src={frame1}
                      id="div1"
                      scrolling="no"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <div className="column is-12-mobile is-4-tablet is-3-desktop">
                    <div className="columns is-variable is-1 cont-opciones">
                      <div className={contAnteriorClass}>
                        <a
                          href={anteriorVideo}
                          className="button is-orange is-fullwidth"
                        >
                          <i className="fa fa-arrow-left"></i>&nbsp;
                        </a>
                      </div>

                      <div className="column is-6-desktop is-8-tablet is-8-mobile cont-capitulos">
                        <a href={capitulosVideo} className="button is-dark">
                          &nbsp;Episodios
                        </a>
                      </div>

                      <div className={contSiguienteClass}>
                        <a
                          href={siguienteVideo}
                          className="button is-orange is-fullwidth"
                        >
                          <i className="fa fa-arrow-right"></i>&nbsp;
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <h1 className="title is-size-5 has-text-weight-light has-text-light pag-text">
                  Animes Gratis Online HD
                </h1>
              </div>
              <div className="column is-12-mobile is-3-tablet is-3-deskop">
                <div className="column is-12-mobile is-12-tablet is-12-desktop is-paddingless">
                  <h5 className="has-text-light text-centered titlo-otros_animes">
                    OTROS ANIMES
                  </h5>
                  <div className="columns is-mobile is-multiline is-variable is-1">
                    <AnimeRecommend1 />
                    <AnimeRecommend2 />
                    <AnimeRecommend3 />
                    <AnimeRecommend4 />
                  </div>
                </div>
              </div>
            </div>
            <div className="container_comment">
              <h1>Comentarios sobre {anime}</h1>
              <Disqus className={"Comentarios"} />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
