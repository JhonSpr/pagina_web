import React from "react";
import Animes from "../Data.json";
export default function AnimePage() {
  return Animes.slice(24, 47).map((anime) => {
    return (
      <article className="serie-card" title={anime.title}>
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
          {/* <span className={classEmision10}>{anime.}</span> */}
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
