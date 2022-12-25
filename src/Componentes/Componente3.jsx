/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/style-prop-object */
import Breadcrumb from "react-bootstrap/Breadcrumb";
import {
  AnimeRecommend1,
  AnimeRecommend2,
  AnimeRecommend3,
  AnimeRecommend4,
} from "./AnimesRecommend";
import Disqus from "./Elements/disqus";

/* eslint-disable jsx-a11y/iframe-has-title */
export function Video({
  anime,
  capitulosVideo,
  siguienteVideo,
  anteriorVideo,
  numero,
  contAnteriorClass,
  contSiguienteClass,
  frame1,
}) {
  fetch(
    "https://crossfit-wod-api-production-4bd7.up.railway.app/api/v1/workouts"
  )
    .then((res) => res.json())
    .then((Response) => {
      console.log(Response);
    });
  return (
    <>
      <title>
        {anime} Capitulo {numero} HD
      </title>
      <div className="hero is-fullheightX">
        <section className="section">
          <div className="container">
            <div className="columns is-multiline">
              <div className="column is-12-mobile is-8-tablet is-9-desktop">
                <Breadcrumb>
                  <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                  <Breadcrumb.Item href="/animes">animes</Breadcrumb.Item>
                  <Breadcrumb.Item active>
                    {anime + " " + numero}
                  </Breadcrumb.Item>
                </Breadcrumb>
              </div>

              <div className="column is-12-mobile is-9-tablet is-9-desktop">
                <div className="player-container">
                  <div className="iframe-container" id="video_player">
                    <iframe
                      src={frame1}
                      id="div1"
                      allowFullScreen
                      picture-in-picture
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
                          className="is-fullwidth button is-orange"
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
                <Disqus />
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
          </div>
        </section>
      </div>{" "}
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
