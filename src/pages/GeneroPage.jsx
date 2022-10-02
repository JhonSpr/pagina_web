import React from "react";
import Animes from "../Data.json";
import accion from "../Json/Accion.json";
import emision from "../Json/EnEmision.json";

export default function GeneroPage1() {
  return Animes.slice(200, 230).map((anime) => {
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
export function GeneroPage2() {
  return Animes.slice(200, 230).map((anime) => {
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
export function GeneroPage3() {
  return Animes.slice(200, 230).map((anime) => {
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
export function GeneroPage4() {
  return Animes.slice(0, 23).map((anime) => {
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
export function GeneroPage5() {
  return Animes.slice(200, 230).map((anime) => {
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
export function GeneroPage6() {
  return Animes.slice(200, 230).map((anime) => {
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
export function AccionPage1() {
  return accion.slice(0, 24).map((genAccion) => {
    return (
      <article
        className="serie-card"
        title={genAccion.title}
        key={genAccion.id}
      >
        <figure className="image overarchingdiv2">
          <a href={genAccion.link}>
            <img src={genAccion.img} alt={genAccion.title} />
            <div className="overlay-dark"></div>
            <div className="hoveroverlay">
              <i className="fas fa-play pgnav activehov"></i>
            </div>
          </a>
          <span className="tag year is-dark">{genAccion.year}</span>
          <span className="tag is-danger type">TV</span>
          <span className={genAccion.classEstado}>{genAccion.estado}</span>
          <div className="title">
            <h3>
              <a
                href={genAccion.link}
                className="has-text-orange has-text-weight-semibold has-text-centered is-size-6"
              >
                {genAccion.title}
              </a>
            </h3>
          </div>
        </figure>
      </article>
    );
  });
}
export function AccionPage2() {
  return accion.slice(24, 48).map((genAccion) => {
    return (
      <article
        className="serie-card"
        title={genAccion.title}
        key={genAccion.id}
      >
        <figure className="image overarchingdiv2">
          <a href={genAccion.link}>
            <img src={genAccion.img} alt={genAccion.title} />
            <div className="overlay-dark"></div>
            <div className="hoveroverlay">
              <i className="fas fa-play pgnav activehov"></i>
            </div>
          </a>
          <span className="tag year is-dark">{genAccion.year}</span>
          <span className="tag is-danger type">TV</span>
          <span className={genAccion.classEstado}>{genAccion.estado}</span>
          <div className="title">
            <h3>
              <a
                href={genAccion.link}
                className="has-text-orange has-text-weight-semibold has-text-centered is-size-6"
              >
                {genAccion.title}
              </a>
            </h3>
          </div>
        </figure>
      </article>
    );
  });
}
export function AccionPage3() {
  return accion.slice(48, 72).map((genAccion) => {
    return (
      <article
        className="serie-card"
        title={genAccion.title}
        key={genAccion.id}
      >
        <figure className="image overarchingdiv2">
          <a href={genAccion.link}>
            <img src={genAccion.img} alt={genAccion.title} />
            <div className="overlay-dark"></div>
            <div className="hoveroverlay">
              <i className="fas fa-play pgnav activehov"></i>
            </div>
          </a>
          <span className="tag year is-dark">{genAccion.year}</span>
          <span className="tag is-danger type">TV</span>
          <span className={genAccion.classEstado}>{genAccion.estado}</span>
          <div className="title">
            <h3>
              <a
                href={genAccion.link}
                className="has-text-orange has-text-weight-semibold has-text-centered is-size-6"
              >
                {genAccion.title}
              </a>
            </h3>
          </div>
        </figure>
      </article>
    );
  });
}
export function AccionPage4() {
  return accion.slice(72, 96).map((genAccion) => {
    return (
      <article
        className="serie-card"
        title={genAccion.title}
        key={genAccion.id}
      >
        <figure className="image overarchingdiv2">
          <a href={genAccion.link}>
            <img src={genAccion.img} alt={genAccion.title} />
            <div className="overlay-dark"></div>
            <div className="hoveroverlay">
              <i className="fas fa-play pgnav activehov"></i>
            </div>
          </a>
          <span className="tag year is-dark">{genAccion.year}</span>
          <span className="tag is-danger type">TV</span>
          <span className={genAccion.classEstado}>{genAccion.estado}</span>
          <div className="title">
            <h3>
              <a
                href={genAccion.link}
                className="has-text-orange has-text-weight-semibold has-text-centered is-size-6"
              >
                {genAccion.title}
              </a>
            </h3>
          </div>
        </figure>
      </article>
    );
  });
}
export function EmisionInicio() {
  return emision.slice(0, 11).map((emision) => {
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
export function EmisionPage1() {
  return emision.slice(0, 25).map((emision) => {
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
export function EmisionPage2() {
  return emision.slice(0, 24).map((emision) => {
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
export function EmisionPage3() {
  return emision.slice(0, 24).map((emision) => {
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
export function EmisionPage4() {
  return emision.slice(0, 24).map((emision) => {
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
export function EmisionPage5() {
  return emision.slice(0, 24).map((emision) => {
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
export function EmisionPage6() {
  return emision.slice(0, 24).map((emision) => {
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
