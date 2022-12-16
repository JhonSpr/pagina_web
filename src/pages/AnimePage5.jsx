import React from "react";
import Animes from "../Json/Data.json";

export default function AnimePage5() {
  return Animes.slice(96, 120).map((anime) => {
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
