/* eslint-disable react/jsx-no-undef */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/style-prop-object */
import { useState } from "react";
import ButtonDisqus from "../LoadDisqus";
import News from "./News";
/* eslint-disable jsx-a11y/iframe-has-title */
export function Video({
  anime,
  capitulosVideo,
  siguienteVideo,
  anteriorVideo,
  numero,
  contAnteriorClass,
  contSiguienteClass,
  frame2,
  ...props
}) {
  const [showdownloads, setDownloads] = useState(false);

  const [loadingFirstOption, setLoadingFirstOption] = useState(false);
  const [loadingSecondOption, setLoadingSecondOption] = useState(false);

  const hideDownloads = () => {
    setDownloads(false);
  };
  const ShowDownloads = () => {
    setDownloads(true);
  };
  const showFirstOptions = () => {
    setLoadingFirstOption(true);
    setLoadingSecondOption(false);
  };
  const showSecondOptions = () => {
    setLoadingSecondOption(true);
    setLoadingFirstOption(false);
  };
  return (
    <>
      <title>
        {anime} Capitulo {numero} HD
      </title>
      <div className="hero is-fullheightX">
        <section className="section">
          <div className="container">
            <div className="columns is-multiline">
              <div className="column is-12-mobile is-9-tablet is-9-desktop">
                <div className="player-container">
                  <div className="column is-12-mobile is-8-tablet is-9-desktop encabezado">
                    <li className="rutas">
                      <a href="/">
                        <span>inicio</span>
                      </a>
                    </li>
                    <li className="rutas">
                      <a href="/animes">
                        <span>animes</span>
                      </a>
                    </li>
                    <li className="rutas">
                      <span className="anime fa-arrow-right">{anime}</span>
                    </li>
                  </div>
                  <div className="list_server_options">
                    <a style={{ cursor: "pointer" }} onClick={showFirstOptions}>
                      <i className="fa-sharp fa-solid fa-play"></i> 1
                    </a>

                    <a
                      style={{ cursor: "pointer" }}
                      onClick={showSecondOptions}
                    >
                      <i className="fa-sharp fa-solid fa-play"></i> 2
                    </a>
                  </div>
                  <div className="iframe-container" id="video_player">
                    {loadingFirstOption ? (
                      <iframe
                        src={props.frame1}
                        id="div1"
                        allowFullScreen
                      ></iframe>
                    ) : (
                      <iframe src={frame2} id="div1" allowFullScreen></iframe>
                    )}
                    {loadingSecondOption ? (
                      <iframe src={frame2} id="div1" allowFullScreen></iframe>
                    ) : (
                      <iframe
                        src={props.frame1}
                        id="div1"
                        allowFullScreen
                      ></iframe>
                    )}
                    <div className="cont-download">
                      {showdownloads ? (
                        <a className="download" onClick={hideDownloads}>
                          <i className="fa-solid fa-download"></i>descargar
                          capitulos
                        </a>
                      ) : (
                        <a className="download" onClick={ShowDownloads}>
                          <i className="fa-solid fa-download"></i>descargar
                          capitulos
                        </a>
                      )}
                    </div>
                  </div>
                  <div className="column is-12-mobile is-4-tablet is-3-desktop box-opcions">
                    <div className="columns is-variable is-1 cont-opciones">
                      <a href={anteriorVideo} className={contAnteriorClass}>
                        <i className="fa fa-arrow-left"></i>
                        Anterior
                      </a>

                      <a
                        href={capitulosVideo}
                        className={"button-caps " + props.lastCapitulo}
                      >
                        <i className="fa-solid fa-list"></i>
                      </a>

                      <a href={siguienteVideo} className={contSiguienteClass}>
                        Siguiente
                        <i className="fa fa-arrow-right"></i>
                      </a>
                    </div>
                  </div>

                  <></>
                  {showdownloads ? (
                    <div className="figura_downloads"></div>
                  ) : (
                    <></>
                  )}
                  <div>
                    {showdownloads ? (
                      <>
                        <div className="cont-links-download">
                          <a href={props.link1Capitulo}>
                            <i className="fa-solid fa-circle-down"></i>
                            <span>descargar capitulo de {anime} </span>
                          </a>
                        </div>
                      </>
                    ) : (
                      <></>
                    )}
                  </div>
                </div>

                <div className="container_button_comments">
                  <ButtonDisqus />
                </div>
              </div>

              <div className="column is-12-mobile is-3-tablet is-3-deskop news-container">
                <div className="column is-12-mobile is-12-tablet is-12-desktop is-paddingless">
                  <h5 className="news_title" style={{ color: "#d1d1d1" }}>
                    Noticias sobre anime
                  </h5>
                  <div className="columns is-mobile is-multiline is-variable is-1">
                    <main className="container_news">
                      <News />
                    </main>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
