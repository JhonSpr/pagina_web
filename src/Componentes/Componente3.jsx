/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/style-prop-object */
import { useState } from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Footer from "../Colletion/Footer";
import News from "../Colletion/News";
// import {
//   AnimeRecommend1,
//   AnimeRecommend2,
//   AnimeRecommend3,
//   AnimeRecommend4,
// } from "./Elements/AnimesRecommend";
import Disqus from "./Elements/disqus";

/* eslint-disable jsx-a11y/iframe-has-title */
export function Video({
  anime,
  capitulosVideo,
  siguienteVideo,
  anteriorVideo,
  numero,
  beforeClass,
  nextClass,
  frame2,
  ...props
}) {
  const [showdownloads, setDownloads] = useState(false);
  const [loadingDisqus, setLoadingDisqus] = useState(true);
  const [loadingFirstOption, setLoadingFirstOption] = useState(false);
  const [loadingSecondOption, setLoadingSecondOption] = useState(false);
  const handleClick = () => {
    setLoadingDisqus(false);
  };
  const hideComments = () => {
    setLoadingDisqus(true);
  };
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
              <div className="column is-12-mobile is-8-tablet is-9-desktop encabezado">
                <Breadcrumb>
                  <Breadcrumb.Item href="/" className="rutas">
                    Inicio
                  </Breadcrumb.Item>
                  <Breadcrumb.Item href="/animes" className="rutas">
                    animes
                  </Breadcrumb.Item>
                  <Breadcrumb.Item active className="rutas">
                    {anime + " " + numero}
                  </Breadcrumb.Item>
                </Breadcrumb>
              </div>

              <div className="column is-12-mobile is-9-tablet is-9-desktop">
                <div className="player-container">
                  {" "}
                  <div className="list_server_options">
                    <button
                      style={{ cursor: "pointer" }}
                      onClick={showFirstOptions}
                    >
                      <i class="fa-sharp fa-solid fa-play"></i> 1
                    </button>

                    <button
                      style={{ cursor: "pointer" }}
                      onClick={showSecondOptions}
                    >
                      <i class="fa-sharp fa-solid fa-play"></i> 2
                    </button>
                  </div>
                  <div className="iframe-container" id="video_player">
                    {loadingFirstOption ? (
                      <iframe
                        src={props.frame1}
                        id="div1"
                        allowFullScreen
                        picture-in-picture
                      ></iframe>
                    ) : (
                      <iframe
                        src={frame2}
                        id="div1"
                        allowFullScreen
                        picture-in-picture
                      ></iframe>
                    )}
                    {loadingSecondOption ? (
                      <iframe
                        src={frame2}
                        id="div1"
                        allowFullScreen
                        picture-in-picture
                      ></iframe>
                    ) : (
                      <iframe
                        src={props.frame1}
                        id="div1"
                        allowFullScreen
                        picture-in-picture
                      ></iframe>
                    )}
                  </div>
                  <div className="column is-12-mobile is-4-tablet is-3-desktop">
                    <div className="columns is-variable is-1 cont-opciones">
                      <a href={beforeClass} className="button-before">
                        <i className="fa fa-arrow-left"></i>
                      </a>

                      <a href={capitulosVideo} className="button-caps">
                        <i class="fa-solid fa-list"></i> Episodios
                      </a>

                      <a href={nextClass} className="button-next">
                        <i className="fa fa-arrow-right"></i>
                      </a>
                    </div>
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
                {showdownloads ? (
                  <div className="cont-links-download">
                    <div>
                      <a href="#link1">
                        <i className="fa-solid fa-circle-down"></i>
                        <span>descargar capitulo de {anime} </span>
                      </a>
                    </div>
                    <div>
                      <a href="#link1">
                        <i className="fa-solid fa-circle-down"></i>

                        <span>descargar capitulo de {anime} </span>
                      </a>
                    </div>
                    <div>
                      <a href="#link1">
                        <i className="fa-solid fa-circle-down"></i>
                        <span>descargar capitulo de {anime} </span>
                      </a>
                    </div>
                  </div>
                ) : (
                  <></>
                )}
                <div className="container_button_comments">
                  {loadingDisqus ? (
                    <button
                      className="Button_comments"
                      id="show-comments"
                      onClick={handleClick}
                    >
                      Cargar Comentarios
                    </button>
                  ) : (
                    <>
                      <button
                        className="Button_comments"
                        id="show-comments"
                        onClick={hideComments}
                      >
                        Ocultar Comentarios
                      </button>
                      <Disqus />
                    </>
                  )}
                </div>
              </div>

              <div className="column is-12-mobile is-3-tablet is-3-deskop">
                <div className="column is-12-mobile is-12-tablet is-12-desktop is-paddingless">
                  <h5 className="news_title" style={{ color: "#d1d1d1" }}>
                    Noticias sobre anime
                  </h5>
                  <div className="columns is-mobile is-multiline is-variable is-1">
                    {/* <AnimeRecommend1 />
                    <AnimeRecommend2 />
                    <AnimeRecommend3 />
                    <AnimeRecommend4 /> */}
                    <main className="container_news">
                      <News />
                    </main>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>{" "}
      <hr />
      <Footer />
    </>
  );
}
