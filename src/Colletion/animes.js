import React from "react";

export default function Animes(props) {
  return (
    <article className="serie-card" title={props.title} key={props.id}>
      <figure className="image overarchingdiv2">
        <a href={props.link}>
          <img src={props.img} alt={props.title} />
          <div className="overlay-dark"></div>
          <div className="hoveroverlay">
            <i className="fas fa-play pgnav activehov"></i>
          </div>
        </a>
        <span className="tag year is-dark">{props.year}</span>
        <span className="tag is-danger type">TV</span>
        <span className={props.classEstado}>{props.estado}</span>
        <div className="title">
          <h3>
            <a
              href={props.link}
              className="has-text-orange has-text-weight-semibold has-text-centered is-size-6"
            >
              {props.title}
            </a>
          </h3>
        </div>
      </figure>
    </article>
  );
}
