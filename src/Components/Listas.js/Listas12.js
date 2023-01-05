/* eslint-disable jsx-a11y/anchor-is-valid */
import { React, useState } from "react";

export default function Listas12({ anime, ...props }) {
  const [mayorAMenor, setMayorAMenor] = useState(true);
  const [menorAMayor, setMenorAMayor] = useState(false);

  const MenorAMayor = () => {
    setMenorAMayor(true);
    setMayorAMenor(false);
  };
  const MayorAMenor = () => {
    setMayorAMenor(true);
    setMenorAMayor(false);
  };
  return (
    <>
      {menorAMayor ? (
        <a onClick={MayorAMenor} className="button-filter">
          Mayor a Menor
          <i
            className="fa-solid fa-arrow-down-short-wide"
            style={{ marginLeft: "10px" }}
          ></i>
        </a>
      ) : (
        <a onClick={MenorAMayor} className="button-filter">
          Menor a Mayor
          <i
            class="fa-solid fa-arrow-up-short-wide"
            style={{ marginLeft: "10px" }}
          ></i>
        </a>
      )}
      <ul className="anime-page__episode-list">
        {mayorAMenor ? (
          <>
            <li className={props.li12}>
              <a
                className="  fa-duotone fa-circle-play d-inline-flex align-items-center"
                href={props.capituloAnime12}
              >
                {anime} Episodio 12
              </a>
            </li>
            <li className={props.li11}>
              <a
                className="fa-duotone fa-circle-play d-inline-flex align-items-center"
                href={props.capituloAnime11}
              >
                {anime} Episodio 11
              </a>
            </li>
            <li className={props.li10}>
              <a
                className="  fa-duotone fa-circle-play d-inline-flex"
                href={props.capituloAnime10}
              >
                {anime} Episodio 10
              </a>
            </li>
            <li className={props.li9}>
              <a
                className="  fa-duotone fa-circle-play d-inline-flex align-items-center  "
                href={props.capituloAnime9}
              >
                {anime} Episodio 9
              </a>
            </li>
            <li className={props.li8}>
              <a
                className="  fa-duotone fa-circle-play d-inline-flex align-items-center"
                href={props.capituloAnime8}
              >
                {anime} Episodio 8
              </a>
            </li>
            <li className={props.li7}>
              <a
                className="  fa-duotone fa-circle-play d-inline-flex align-items-center"
                href={props.capituloAnime7}
              >
                {anime} Episodio 7
              </a>
            </li>
            <li className={props.li6}>
              <a
                className="  fa-duotone fa-circle-play d-inline-flex align-items-center"
                href={props.capituloAnime6}
              >
                {anime} Episodio 6
              </a>
            </li>
            <li className={props.li5}>
              <a
                className="  fa-duotone fa-circle-play d-inline-flex align-items-center"
                href={props.capituloAnime5}
              >
                {anime} Episodio 5
              </a>
            </li>
            <li className={props.li4}>
              <a
                className="  fa-duotone fa-circle-play d-inline-flex align-items-center"
                href={props.capituloAnime4}
              >
                {anime} Episodio 4
              </a>
            </li>
            <li className={props.li3}>
              <a
                className="fa-duotone fa-circle-play d-inline-flex align-items-center"
                href={props.capituloAnime3}
              >
                {anime} Episodio 3
              </a>
            </li>
            <li className={props.li2}>
              <a
                className="  fa-duotone fa-circle-play d-inline-flex align-items-center"
                href={props.capituloAnime2}
              >
                {anime} Episodio 2
              </a>
            </li>
            <li className={props.li1}>
              <a
                className="  fa-duotone fa-circle-play d-inline-flex align-items-center"
                href={props.capituloAnime1}
              >
                {anime} Episodio 1
              </a>
            </li>
          </>
        ) : (
          <>
            <li className={props.li1}>
              <a
                className="  fa-duotone fa-circle-play d-inline-flex"
                href={props.capituloAnime1}
              >
                {anime} Episodio 1
              </a>
            </li>
            <li className={props.li2}>
              <a
                className="  fa-duotone fa-circle-play d-inline-flex align-items-center  "
                href={props.capituloAnime2}
              >
                {anime} Episodio 2
              </a>
            </li>
            <li className={props.li3}>
              <a
                className="  fa-duotone fa-circle-play d-inline-flex align-items-center"
                href={props.capituloAnime3}
              >
                {anime} Episodio 3
              </a>
            </li>
            <li className={props.li4}>
              <a
                className="  fa-duotone fa-circle-play d-inline-flex align-items-center"
                href={props.capituloAnime4}
              >
                {anime} Episodio 4
              </a>
            </li>
            <li className={props.li5}>
              <a
                className="  fa-duotone fa-circle-play d-inline-flex align-items-center"
                href={props.capituloAnime5}
              >
                {anime} Episodio 5
              </a>
            </li>
            <li className={props.li6}>
              <a
                className="  fa-duotone fa-circle-play d-inline-flex align-items-center"
                href={props.capituloAnime6}
              >
                {anime} Episodio 6
              </a>
            </li>
            <li className={props.li7}>
              <a
                className="  fa-duotone fa-circle-play d-inline-flex align-items-center"
                href={props.capituloAnime7}
              >
                {anime} Episodio 7
              </a>
            </li>
            <li className={props.li8}>
              <a
                className="  fa-duotone fa-circle-play d-inline-flex align-items-center"
                href={props.capituloAnime8}
              >
                {anime} Episodio 8
              </a>
            </li>
            <li className={props.li9}>
              <a
                className="  fa-duotone fa-circle-play d-inline-flex align-items-center"
                href={props.capituloAnime9}
              >
                {anime} Episodio 9
              </a>
            </li>
            <li className={props.li10}>
              <a
                className="  fa-duotone fa-circle-play d-inline-flex align-items-center"
                href={props.capituloAnime10}
              >
                {anime} Episodio 10
              </a>
            </li>
            <li className={props.li11}>
              <a
                className="  fa-duotone fa-circle-play d-inline-flex align-items-center"
                href={props.capituloAnime11}
              >
                {anime} Episodio 11
              </a>
            </li>
            <li className={props.li12}>
              <a
                className="  fa-duotone fa-circle-play d-inline-flex align-items-center"
                href={props.capituloAnime12}
              >
                {anime} Episodio 12
              </a>
            </li>
          </>
        )}
      </ul>
    </>
  );
}
