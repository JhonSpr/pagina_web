import React from "react";

export default function Listas({ anime, ...props }) {
  return (
    <>
      <ul className="anime-page__episode-list is-size-6">
        <li className={props.li1}>
          <a
            className="fa-play-circle d-inline-flex align-items-center is-rounded "
            href={props.capituloAnime1}
          >
            {anime} Episodio 1
          </a>
        </li>
        <li className={props.li2}>
          <a
            className="fa-play-circle d-inline-flex align-items-center is-rounded "
            href={props.capituloAnime2}
          >
            {anime} Episodio 2
          </a>
        </li>
        <li className={props.li3}>
          <a
            className="fa-play-circle d-inline-flex align-items-center is-rounded "
            href={props.capituloAnime3}
          >
            {anime} Episodio 3
          </a>
        </li>
        <li className={props.li4}>
          <a
            className="fa-play-circle d-inline-flex align-items-center is-rounded "
            href={props.capituloAnime4}
          >
            {anime} Episodio 4
          </a>
        </li>
        <li className={props.li5}>
          <a
            className="fa-play-circle d-inline-flex align-items-center is-rounded "
            href={props.capituloAnime5}
          >
            {anime} Episodio 5
          </a>
        </li>
        <li className={props.li6}>
          <a
            className="fa-play-circle d-inline-flex align-items-center is-rounded "
            href={props.capituloAnime6}
          >
            {anime} Episodio 6
          </a>
        </li>
        <li className={props.li7}>
          <a
            className="fa-play-circle d-inline-flex align-items-center is-rounded "
            href={props.capituloAnime7}
          >
            {anime} Episodio 7
          </a>
        </li>
        <li className={props.li8}>
          <a
            className="fa-play-circle d-inline-flex align-items-center is-rounded "
            href={props.capituloAnime8}
          >
            {anime} Episodio 8
          </a>
        </li>
        <li className={props.li9}>
          <a
            className="fa-play-circle d-inline-flex align-items-center is-rounded "
            href={props.capituloAnime9}
          >
            {anime} Episodio 9
          </a>
        </li>
        <li className={props.li10}>
          <a
            className="fa-play-circle d-inline-flex align-items-center is-rounded "
            href={props.capituloAnime10}
          >
            {anime} Episodio 10
          </a>
        </li>
        <li className={props.li11}>
          <a
            className="fa-play-circle d-inline-flex align-items-center is-rounded "
            href={props.capituloAnime11}
          >
            {anime} Episodio 11
          </a>
        </li>
        <li className={props.li12}>
          <a
            className="fa-play-circle d-inline-flex align-items-center is-rounded "
            href={props.capituloAnime12}
          >
            {anime} Episodio 12
          </a>
        </li>
      </ul>
    </>
  );
}
