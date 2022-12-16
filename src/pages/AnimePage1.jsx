import React from "react";
import Animes from "../Json/Data.json";
import emisiones from "../Json/EnEmision.json";
import proximos from "../Json/Proximamente.json";

export default function AnimePage1() {
  return Animes.slice(0, 24).map((anime) => {
    return (
      <article className="serie-card" title={anime.title} key={anime.id}>
        <figure className="image overarchingdiv2">
          <a href={anime.link}>
            <img src={anime.img} alt={anime.title} />
            <div className="overlay-dark"></div>
            <div className="hoveroverlay">
              <i className="fas fa-play pgnav activehov"></i>
            </div>
          </a>
          <span className="tag year is-dark">{anime.year}</span>
          <span className="tag is-danger type">TV</span>
          <span className={anime.classEstado}>{anime.estado}</span>
          <div className="title">
            <h3>
              <a
                href={anime.link}
                className="has-text-orange has-text-weight-semibold has-text-centered is-size-6"
              >
                {anime.title}
              </a>
            </h3>
          </div>
        </figure>
      </article>
    );
  });
}
export function Emision1() {
  return emisiones.slice(0, 24).map((emision) => {
    return (
      <article className="serie-card" title={emision.title} key={emision.id}>
        <figure className="image overarchingdiv2">
          <a href={emision.link}>
            <img src={emision.img} alt={emision.title} />
            <div className="overlay-dark"></div>
            <div className="hoveroverlay">
              <i className="fas fa-play pgnav activehov"></i>
            </div>
          </a>
          <span className="tag year is-dark">{emision.year}</span>
          <span className="tag is-danger type">TV</span>
          <span className={emision.classEstado}>{emision.estado}</span>
          <div className="title">
            <h3>
              <a
                href={emision.link}
                className="has-text-orange has-text-weight-semibold has-text-centered is-size-6"
              >
                {emision.title}
              </a>
            </h3>
          </div>
        </figure>
      </article>
    );
  });
}

export function Proximos() {
  return proximos.slice(0, 24).map((anime) => {
    return (
      <article className="serie-card" title={anime.title} key={anime.id}>
        <figure className="image overarchingdiv2">
          <a href={anime.link}>
            <img src={anime.img} alt={anime.title} />
            <div className="overlay-dark"></div>
            <div className="hoveroverlay">
              <i className="fas fa-play pgnav activehov"></i>
            </div>
          </a>
          <span className="tag year is-dark">{anime.year}</span>
          <span className="tag is-danger type">TV</span>
          <span className={anime.classEstado}>{anime.estado}</span>
          <div className="title">
            <h3>
              <a
                href={anime.link}
                className="has-text-orange has-text-weight-semibold has-text-centered is-size-6"
              >
                {anime.title}
              </a>
            </h3>
          </div>
        </figure>
      </article>
    );
  });
}
