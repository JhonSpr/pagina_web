/* eslint-disable jsx-a11y/anchor-is-valid */
import { React, useState } from "react";
export default function Listas36({ anime, ...props }) {
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
            className="fa-solid fa-arrow-up-short-wide"
            style={{ marginLeft: "10px" }}
          ></i>
        </a>
      )}
      <ul className="anime-page__episode-list is-size-6 cuarenta-caps">
        {mayorAMenor ? (
          <>
            <li className={props.li36}>
              <a
                className="fa-play-circle d-inline-flex align-items-center is-rounded "
                href={props.capituloAnime36}
              >
                {anime} Episodio 36
              </a>
            </li>
            <li className={props.li35}>
              <a
                className="fa-play-circle d-inline-flex align-items-center is-rounded "
                href={props.capituloAnime35}
              >
                {anime} Episodio 35
              </a>
            </li>
            <li className={props.li34}>
              <a
                className="fa-play-circle d-inline-flex align-items-center is-rounded "
                href={props.capituloAnime34}
              >
                {anime} Episodio 34
              </a>
            </li>
            <li className={props.li33}>
              <a
                className="fa-play-circle d-inline-flex align-items-center is-rounded "
                href={props.capituloAnime33}
              >
                {anime} Episodio 33
              </a>
            </li>
            <li className={props.li32}>
              <a
                className="fa-play-circle d-inline-flex align-items-center is-rounded "
                href={props.capituloAnime32}
              >
                {anime} Episodio 32
              </a>
            </li>
            <li className={props.li31}>
              <a
                className="fa-play-circle d-inline-flex align-items-center is-rounded "
                href={props.capituloAnime31}
              >
                {anime} Episodio 31
              </a>
            </li>
            <li className={props.li30}>
              <a
                className="fa-play-circle d-inline-flex align-items-center is-rounded "
                href={props.capituloAnime30}
              >
                {anime} Episodio 30
              </a>
            </li>
            <li className={props.li29}>
              <a
                className="fa-play-circle d-inline-flex align-items-center is-rounded "
                href={props.capituloAnime29}
              >
                {anime} Episodio 29
              </a>
            </li>
            <li className={props.li28}>
              <a
                className="fa-play-circle d-inline-flex align-items-center is-rounded "
                href={props.capituloAnime28}
              >
                {anime} Episodio 28
              </a>
            </li>
            <li className={props.li27}>
              <a
                className="fa-play-circle d-inline-flex align-items-center is-rounded "
                href={props.capituloAnime27}
              >
                {anime} Episodio 27
              </a>
            </li>
            <li className={props.li26}>
              <a
                className="fa-play-circle d-inline-flex align-items-center is-rounded "
                href={props.capituloAnime26}
              >
                {anime} Episodio 26
              </a>
            </li>
            <li className={props.li25}>
              <a
                className="fa-play-circle d-inline-flex align-items-center is-rounded "
                href={props.capituloAnime25}
              >
                {anime} Episodio 25
              </a>
            </li>
            <li className={props.li24}>
              <a
                className="fa-play-circle d-inline-flex align-items-center is-rounded "
                href={props.capituloAnime24}
              >
                {anime} Episodio 24
              </a>
            </li>
            <li className={props.li23}>
              <a
                className="fa-play-circle d-inline-flex align-items-center is-rounded "
                href={props.capituloAnime23}
              >
                {anime} Episodio 23
              </a>
            </li>
            <li className={props.li22}>
              <a
                className="fa-play-circle d-inline-flex align-items-center is-rounded "
                href={props.capituloAnime22}
              >
                {anime} Episodio 22
              </a>
            </li>
            <li className={props.li21}>
              <a
                className="fa-play-circle d-inline-flex align-items-center is-rounded "
                href={props.capituloAnime21}
              >
                {anime} Episodio 21
              </a>
            </li>
            <li className={props.li20}>
              <a
                className="fa-play-circle d-inline-flex align-items-center is-rounded "
                href={props.capituloAnime20}
              >
                {anime} Episodio 20
              </a>
            </li>
            <li className={props.li19}>
              <a
                className="fa-play-circle d-inline-flex align-items-center is-rounded "
                href={props.capituloAnime19}
              >
                {anime} Episodio 19
              </a>
            </li>
            <li className={props.li18}>
              <a
                className="fa-play-circle d-inline-flex align-items-center is-rounded "
                href={props.capituloAnime18}
              >
                {anime} <> Episodio 18</>
              </a>
            </li>
            <li className={props.li17}>
              <a
                className="fa-play-circle d-inline-flex align-items-center is-rounded "
                href={props.capituloAnime17}
              >
                {anime} <> Episodio 17</>
              </a>
            </li>
            <li className={props.li16}>
              <a
                className="fa-play-circle d-inline-flex align-items-center is-rounded "
                href={props.capituloAnime16}
              >
                {anime} <> Episodio 16</>
              </a>
            </li>
            <li className={props.li15}>
              <a
                className="fa-play-circle d-inline-flex align-items-center is-rounded "
                href={props.capituloAnime15}
              >
                {anime} <> Episodio 15</>
              </a>
            </li>
            <li className={props.li14}>
              <a
                className="fa-play-circle d-inline-flex align-items-center is-rounded "
                href={props.capituloAnime14}
              >
                {anime} <> Episodio 14</>
              </a>
            </li>
            <li className={props.li13}>
              <a
                className="fa-play-circle d-inline-flex align-items-center is-rounded "
                href={props.capituloAnime13}
              >
                {anime} <> Episodio 13</>
              </a>
            </li>
            <li className={props.li12}>
              <a
                className="fa-play-circle d-inline-flex align-items-center is-rounded "
                href={props.capituloAnime12}
              >
                {anime} <> Episodio 12</>
              </a>
            </li>
            <li className={props.li11}>
              <a
                className="fa-play-circle d-inline-flex align-items-center is-rounded "
                href={props.capituloAnime11}
              >
                {anime} <> Episodio 11</>
              </a>
            </li>
            <li className={props.li10}>
              <a
                className="fa-play-circle d-inline-flex align-items-center is-rounded "
                href={props.capituloAnime10}
              >
                {anime} <> Episodio 10</>
              </a>
            </li>
            <li className={props.li9}>
              <a
                className="fa-play-circle d-inline-flex align-items-center is-rounded "
                href={props.capituloAnime9}
              >
                {anime} <> Episodio 9</>
              </a>
            </li>
            <li className={props.li8}>
              <a
                className="fa-play-circle d-inline-flex align-items-center is-rounded "
                href={props.capituloAnime8}
              >
                {anime} <> Episodio 8</>
              </a>
            </li>
            <li className={props.li7}>
              <a
                className="fa-play-circle d-inline-flex align-items-center is-rounded "
                href={props.capituloAnime7}
              >
                {anime} <> Episodio 7</>
              </a>
            </li>
            <li className={props.li6}>
              <a
                className="fa-play-circle d-inline-flex align-items-center is-rounded "
                href={props.capituloAnime6}
              >
                {anime} <> Episodio 6</>
              </a>
            </li>
            <li className={props.li5}>
              <a
                className="fa-play-circle d-inline-flex align-items-center is-rounded "
                href={props.capituloAnime5}
              >
                {anime} <> Episodio 5</>
              </a>
            </li>
            <li className={props.li4}>
              <a
                className="fa-play-circle d-inline-flex align-items-center is-rounded "
                href={props.capituloAnime4}
              >
                {anime} <> Episodio 4</>
              </a>
            </li>
            <li className={props.li3}>
              <a
                className="fa-play-circle d-inline-flex align-items-center is-rounded "
                href={props.capituloAnime3}
              >
                {anime} <> Episodio 3</>
              </a>
            </li>
            <li className={props.li2}>
              <a
                className="fa-play-circle d-inline-flex align-items-center is-rounded "
                href={props.capituloAnime2}
              >
                {anime} <> Episodio 2</>
              </a>
            </li>
            <li className={props.li1}>
              <a
                className="fa-play-circle d-inline-flex align-items-center is-rounded "
                href={props.capituloAnime1}
              >
                {anime} <> Episodio 1</>
              </a>
            </li>
          </>
        ) : (
          <>
            <li className={props.li1}>
              <a
                className="fa-play-circle d-inline-flex align-items-center is-rounded "
                href={props.capituloAnime1}
              >
                {anime} <> Episodio 1</>
              </a>
            </li>
            <li className={props.li2}>
              <a
                className="fa-play-circle d-inline-flex align-items-center is-rounded "
                href={props.capituloAnime2}
              >
                {anime} <> Episodio 2</>
              </a>
            </li>
            <li className={props.li3}>
              <a
                className="fa-play-circle d-inline-flex align-items-center is-rounded "
                href={props.capituloAnime3}
              >
                {anime} <> Episodio 3</>
              </a>
            </li>
            <li className={props.li4}>
              <a
                className="fa-play-circle d-inline-flex align-items-center is-rounded "
                href={props.capituloAnime4}
              >
                {anime} <> Episodio 4</>
              </a>
            </li>
            <li className={props.li5}>
              <a
                className="fa-play-circle d-inline-flex align-items-center is-rounded "
                href={props.capituloAnime5}
              >
                {anime} <> Episodio 5</>
              </a>
            </li>
            <li className={props.li6}>
              <a
                className="fa-play-circle d-inline-flex align-items-center is-rounded "
                href={props.capituloAnime6}
              >
                {anime} <> Episodio 6</>
              </a>
            </li>
            <li className={props.li7}>
              <a
                className="fa-play-circle d-inline-flex align-items-center is-rounded "
                href={props.capituloAnime7}
              >
                {anime} <> Episodio 7</>
              </a>
            </li>
            <li className={props.li8}>
              <a
                className="fa-play-circle d-inline-flex align-items-center is-rounded "
                href={props.capituloAnime8}
              >
                {anime} <> Episodio 8</>
              </a>
            </li>
            <li className={props.li9}>
              <a
                className="fa-play-circle d-inline-flex align-items-center is-rounded "
                href={props.capituloAnime9}
              >
                {anime} <> Episodio 9</>
              </a>
            </li>
            <li className={props.li10}>
              <a
                className="fa-play-circle d-inline-flex align-items-center is-rounded "
                href={props.capituloAnime10}
              >
                {anime} <> Episodio 10</>
              </a>
            </li>
            <li className={props.li11}>
              <a
                className="fa-play-circle d-inline-flex align-items-center is-rounded "
                href={props.capituloAnime11}
              >
                {anime} <> Episodio 11</>
              </a>
            </li>
            <li className={props.li12}>
              <a
                className="fa-play-circle d-inline-flex align-items-center is-rounded "
                href={props.capituloAnime12}
              >
                {anime} <> Episodio 12</>
              </a>
            </li>
            <li className={props.li13}>
              <a
                className="fa-play-circle d-inline-flex align-items-center is-rounded "
                href={props.capituloAnime13}
              >
                {anime} <> Episodio 13</>
              </a>
            </li>
            <li className={props.li14}>
              <a
                className="fa-play-circle d-inline-flex align-items-center is-rounded "
                href={props.capituloAnime14}
              >
                {anime} <> Episodio 14</>
              </a>
            </li>
            <li className={props.li15}>
              <a
                className="fa-play-circle d-inline-flex align-items-center is-rounded "
                href={props.capituloAnime15}
              >
                {anime} <> Episodio 15</>
              </a>
            </li>
            <li className={props.li16}>
              <a
                className="fa-play-circle d-inline-flex align-items-center is-rounded "
                href={props.capituloAnime16}
              >
                {anime} <> Episodio 16</>
              </a>
            </li>
            <li className={props.li17}>
              <a
                className="fa-play-circle d-inline-flex align-items-center is-rounded "
                href={props.capituloAnime17}
              >
                {anime} <> Episodio 17</>
              </a>
            </li>
            <li className={props.li18}>
              <a
                className="fa-play-circle d-inline-flex align-items-center is-rounded "
                href={props.capituloAnime18}
              >
                {anime} <> Episodio 18</>
              </a>
            </li>
            <li className={props.li19}>
              <a
                className="fa-play-circle d-inline-flex align-items-center is-rounded "
                href={props.capituloAnime19}
              >
                {anime} <> Episodio 19</>
              </a>
            </li>
            <li className={props.li20}>
              <a
                className="fa-play-circle d-inline-flex align-items-center is-rounded "
                href={props.capituloAnime20}
              >
                {anime} <> Episodio 20</>
              </a>
            </li>
            <li className={props.li21}>
              <a
                className="fa-play-circle d-inline-flex align-items-center is-rounded "
                href={props.capituloAnime21}
              >
                {anime} <> Episodio 21</>
              </a>
            </li>
            <li className={props.li22}>
              <a
                className="fa-play-circle d-inline-flex align-items-center is-rounded "
                href={props.capituloAnime22}
              >
                {anime} <> Episodio 22</>
              </a>
            </li>
            <li className={props.li23}>
              <a
                className="fa-play-circle d-inline-flex align-items-center is-rounded "
                href={props.capituloAnime23}
              >
                {anime} <> Episodio 23</>
              </a>
            </li>
            <li className={props.li24}>
              <a
                className="fa-play-circle d-inline-flex align-items-center is-rounded "
                href={props.capituloAnime24}
              >
                {anime} <> Episodio 24</>
              </a>
            </li>
            <li className={props.li25}>
              <a
                className="fa-play-circle d-inline-flex align-items-center is-rounded "
                href={props.capituloAnime25}
              >
                {anime} Episodio 25
              </a>
            </li>
            <li className={props.li26}>
              <a
                className="fa-play-circle d-inline-flex align-items-center is-rounded "
                href={props.capituloAnime26}
              >
                {anime} Episodio 26
              </a>
            </li>
            <li className={props.li27}>
              <a
                className="fa-play-circle d-inline-flex align-items-center is-rounded "
                href={props.capituloAnime27}
              >
                {anime} Episodio 27
              </a>
            </li>
            <li className={props.li28}>
              <a
                className="fa-play-circle d-inline-flex align-items-center is-rounded "
                href={props.capituloAnime28}
              >
                {anime} Episodio 28
              </a>
            </li>
            <li className={props.li29}>
              <a
                className="fa-play-circle d-inline-flex align-items-center is-rounded "
                href={props.capituloAnime29}
              >
                {anime} Episodio 29
              </a>
            </li>
            <li className={props.li30}>
              <a
                className="fa-play-circle d-inline-flex align-items-center is-rounded "
                href={props.capituloAnime30}
              >
                {anime} Episodio 30
              </a>
            </li>
            <li className={props.li31}>
              <a
                className="fa-play-circle d-inline-flex align-items-center is-rounded "
                href={props.capituloAnime31}
              >
                {anime} Episodio 31
              </a>
            </li>
            <li className={props.li32}>
              <a
                className="fa-play-circle d-inline-flex align-items-center is-rounded "
                href={props.capituloAnime32}
              >
                {anime} Episodio 32
              </a>
            </li>
            <li className={props.li33}>
              <a
                className="fa-play-circle d-inline-flex align-items-center is-rounded "
                href={props.capituloAnime33}
              >
                {anime} Episodio 33
              </a>
            </li>
            <li className={props.li34}>
              <a
                className="fa-play-circle d-inline-flex align-items-center is-rounded "
                href={props.capituloAnime34}
              >
                {anime} Episodio 34
              </a>
            </li>
            <li className={props.li35}>
              <a
                className="fa-play-circle d-inline-flex align-items-center is-rounded "
                href={props.capituloAnime35}
              >
                {anime} Episodio 35
              </a>
            </li>
            <li className={props.li36}>
              <a
                className="fa-play-circle d-inline-flex align-items-center is-rounded "
                href={props.capituloAnime36}
              >
                {anime} Episodio 36
              </a>
            </li>
          </>
        )}
      </ul>
    </>
  );
}
