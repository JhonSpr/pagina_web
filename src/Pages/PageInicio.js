/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import ButtonDisqus from "../Components/LoadDisqus";
import { FecthEmisionesHome } from "../fetching/fecthEmisiones";
import FecthInicio from "../fetching/fecthInicio";
export default function PageInicio() {
  const [openSideBar, setOpenSideBar] = useState(false);
  const [hideSideBar, setHideSideBar] = useState(false);
  const handleClick = () => {
    setOpenSideBar(true);
    setHideSideBar(false);
  };
  const handleHideSide = () => {
    setOpenSideBar(false);
    setHideSideBar(true);
  };
  return (
    <>
      <title>Animekuns - Ver Anime Online HD</title>

      <section className="container container-home">
        <div className="container-wrap-sidebar">
          {openSideBar ? (
            <a onClick={handleHideSide} className="show-sidebar title-sidebar">
              Anime En Emision <i className="fa-solid fa-caret-down"></i>
            </a>
          ) : (
            <a onClick={handleClick} className="show-sidebar title-sidebar">
              Anime En Emision <i className="fa-solid fa-caret-up"></i>
            </a>
          )}
        </div>
        {openSideBar ? (
          <sidebar className="sidebar-home">
            <li>
              <a href="/peter-grill-to-kenja-no-jikan-super-extra">
                <h2>
                  <i className="fa-regular fa-circle-play"></i> Peter grill to
                  kenja no jikan super extra
                </h2>
                <span className="tipo">ANIME</span>
              </a>
            </li>
            <li>
              <a href="/isekai-ojisan">
                <h2>
                  <i className="fa-regular fa-circle-play"></i> Isekai ojisan
                </h2>
                <span className="tipo">ANIME</span>
              </a>
            </li>
            <li>
              <a href="/danmachi-iv">
                <h2>
                  <i className="fa-regular fa-circle-play"></i> Danmachi IV
                </h2>
                <span className="tipo">ANIME</span>
              </a>
            </li>
            <li>
              <a href="/yowamushi-pedal-limit-break">
                <h2>
                  <i className="fa-regular fa-circle-play"></i> Yowamushi pedal
                  limit break
                </h2>
                <span className="tipo">ANIME</span>
              </a>
            </li>
            <li>
              <a href="/bluelock">
                <h2>
                  <i className="fa-regular fa-circle-play"></i> BLUELOCK
                </h2>
                <span className="tipo">ANIME</span>
              </a>
            </li>
            <li>
              <a href="/fuufu-ijou-koibito-miman">
                <h2>
                  <i className="fa-regular fa-circle-play"></i> Fuufu Ijou
                  koibito miman
                </h2>
                <span className="tipo">ANIME</span>
              </a>
            </li>
            <li>
              <a href="/vazzrock-the-animation">
                <h2>
                  <i className="fa-regular fa-circle-play"></i> Vazzrock the
                  animation
                </h2>
                <span className="tipo">ANIME</span>
              </a>
            </li>
            <li>
              <a href="/bersek-ougon-jidai-hen-memorial-edition">
                <h2>
                  <i className="fa-regular fa-circle-play"></i> Bersek Ougon
                  jidai hen memorial edition
                </h2>{" "}
                <span className="tipo">ANIME</span>
              </a>
            </li>
          </sidebar>
        ) : (
          <>
            <sidebar className="sidebar-home side-desktop">
              <div className="container-li-sidebar">
                <li>
                  <h2 className="title-sidebar-emisiones">Animes En Emision</h2>
                </li>
                <li>
                  <a href="/peter-grill-to-kenja-no-jikan-super-extra">
                    <h2>
                      {" "}
                      <i className="fa-regular fa-circle-play"></i> Peter grill
                      to kenja no jikan super extra
                    </h2>
                    <span className="tipo">ANIME</span>
                  </a>
                </li>
                <li>
                  <a href="/isekai-ojisan">
                    <h2>
                      <i className="fa-regular fa-circle-play"></i> Isekai
                      ojisan
                    </h2>
                    <span className="tipo">ANIME</span>
                  </a>
                </li>
                <li>
                  <a href="/danmachi-iv">
                    <h2>
                      <i className="fa-regular fa-circle-play"></i> Danmachi IV
                    </h2>{" "}
                    <span className="tipo">ANIME</span>
                  </a>
                </li>
                <li>
                  <a href="/yowamushi-pedal-limit-break">
                    <h2>
                      <i className="fa-regular fa-circle-play"></i> Yowamushi
                      pedal limit break
                    </h2>{" "}
                    <span className="tipo">ANIME</span>
                  </a>
                </li>
                <li>
                  <a href="/bluelock">
                    <h2>
                      <i className="fa-regular fa-circle-play"></i> BLUELOCK
                    </h2>{" "}
                    <span className="tipo">ANIME</span>
                  </a>
                </li>
                <li>
                  <a href="/fuufu-ijou-koibito-miman">
                    <h2>
                      <i className="fa-regular fa-circle-play"></i> Fuufu Ijou
                      koibito miman
                    </h2>{" "}
                    <span className="tipo">ANIME</span>
                  </a>
                </li>
                <li>
                  <a href="/vazzrock-the-animation">
                    <h2>
                      <i className="fa-regular fa-circle-play"></i> Vazzrock the
                      animation
                    </h2>{" "}
                    <span className="tipo">ANIME</span>
                  </a>
                </li>
                <li>
                  <a href="/bersek-ougon-jidai-hen-memorial-edition">
                    <h2>
                      <i className="fa-regular fa-circle-play"></i> Bersek Ougon
                      jidai hen memorial edition
                    </h2>{" "}
                    <span className="tipo">ANIME</span>
                  </a>
                </li>
              </div>
            </sidebar>
          </>
        )}
        <section className="recien-agregados">
          <h1 className="title-home">RECIEN AGREGADOS</h1>
          <div className="list-series">
            <FecthInicio />
          </div>
          <h1 className="title-home">
            <i
              className="fa-solid fa-star"
              style={{ marginRight: "5px", color: "rgb(1004 24 63 )" }}
            ></i>
            Emisiones
          </h1>
          <div className="list-series">
            <FecthEmisionesHome />
            <ButtonDisqus />
          </div>
        </section>
      </section>
    </>
  );
}
