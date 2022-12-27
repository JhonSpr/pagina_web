import React from "react";

export default function Listas13({ anime, ...props }) {
  return (
    <>
      <ul className="anime-page__episode-list is-size-6 cuarenta-caps">
        <li id={props.li1}>
          <a
            className="fa-play-circle d-inline-flex align-items-center is-rounded "
            href={props.capituloAnime1}
          >
            {anime} <span> Episodio 1</span>
          </a>
        </li>
        <li className={props.li2}>
          <a
            className="fa-play-circle d-inline-flex align-items-center is-rounded "
            href={props.capituloAnime2}
          >
            {anime} <span> Episodio 2</span>
          </a>
        </li>
        <li className={props.li3}>
          <a
            className="fa-play-circle d-inline-flex align-items-center is-rounded "
            href={props.capituloAnime3}
          >
            {anime} <span> Episodio 3</span>
          </a>
        </li>
        <li className={props.li4}>
          <a
            className="fa-play-circle d-inline-flex align-items-center is-rounded "
            href={props.capituloAnime4}
          >
            {anime} <span> Episodio 4</span>
          </a>
        </li>
        <li className={props.li5}>
          <a
            className="fa-play-circle d-inline-flex align-items-center is-rounded "
            href={props.capituloAnime5}
          >
            {anime} <span> Episodio 5</span>
          </a>
        </li>
        <li className={props.li6}>
          <a
            className="fa-play-circle d-inline-flex align-items-center is-rounded "
            href={props.capituloAnime6}
          >
            {anime} <span> Episodio 6</span>
          </a>
        </li>
        <li className={props.li7}>
          <a
            className="fa-play-circle d-inline-flex align-items-center is-rounded "
            href={props.capituloAnime7}
          >
            {anime} <span> Episodio 7</span>
          </a>
        </li>
        <li className={props.li8}>
          <a
            className="fa-play-circle d-inline-flex align-items-center is-rounded "
            href={props.capituloAnime8}
          >
            {anime} <span> Episodio 8</span>
          </a>
        </li>
        <li className={props.li9}>
          <a
            className="fa-play-circle d-inline-flex align-items-center is-rounded "
            href={props.capituloAnime9}
          >
            {anime} <span> Episodio 9</span>
          </a>
        </li>
        <li className={props.li10}>
          <a
            className="fa-play-circle d-inline-flex align-items-center is-rounded "
            href={props.capituloAnime10}
          >
            {anime} <span> Episodio 10</span>
          </a>
        </li>
        <li className={props.li11}>
          <a
            className="fa-play-circle d-inline-flex align-items-center is-rounded "
            href={props.capituloAnime11}
          >
            {anime} <span> Episodio 11</span>
          </a>
        </li>
        <li className={props.li12}>
          <a
            className="fa-play-circle d-inline-flex align-items-center is-rounded "
            href={props.capituloAnime12}
          >
            {anime} <span> Episodio 12</span>
          </a>
        </li>
        <li className={props.li13}>
          <a
            className="fa-play-circle d-inline-flex align-items-center is-rounded "
            href={props.capituloAnime13}
          >
            {anime} <span> Episodio 13</span>
          </a>
        </li>
      </ul>
    </>
  );
}
