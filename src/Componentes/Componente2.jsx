/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/anchor-is-valid */
import ButtonDisqus from "../Colletion/Button_Disqus";
import Footer from "../Colletion/Footer";
import banner from "../Json/Banners.json";
import { React, useState } from "react";

/* eslint-disable jsx-a11y/iframe-has-title */
export function Capitulos12({
  sec1,
  sec2,
  sec3,
  hrefSecuela2,
  hrefSecuela3,
  nombreSecuela2,
  nombreSecuela3,
  textoSecuela2,
  textoSecuela3,
  hrefSecuela,
  textoSecuela,
  nombreSecuela,
  tituloAnime,
  imagenAnime,
  descripcion,
  anime,
  numeroEpisodios,
  tipo,
  estado,
  ...props
}) {
  let end = 83;
  let RandomNumber = Math.floor(Math.random() * end);
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
      <title>{anime} Online HD</title>

      <section className="section">
        <div
          className="serie-background"
          style={{
            background: `url(${banner && banner[RandomNumber].image})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        ></div>
        <div className="container">
          <div className="columns is-mobile is-multiline info">
            <div className="column is-12-mobile xis-3-tablet xis-3-desktop xhas-background-danger is-narrow-tablet is-narrow-desktop">
              <figure className="image is-2by4 image_2">
                <img src={imagenAnime} alt={anime} />
              </figure>
              <br />
            </div>

            <div className="column columnas">
              <div className="columns is-multiline is-narrow">
                <div className="column is-12-mobile is-8-tablet is-10-desktop">
                  <h1 className="title has-text-orange">{anime}</h1>
                </div>
                <div className="column is-12-mobile is-4-tablet is-2-desktop"></div>
              </div>

              <h6 className="has-text-weight-semibold is-uppercase has-text-grey has-border-bottom">
                Descripcion
              </h6>
              <div className="has-text-light sinopsis">{descripcion}</div>

              <br />
              <br />

              <p className="has-text-weight-semibold is-uppercase has-text-grey has-border-bottom">
                Información general
              </p>

              <ul className="has-text-light">
                <li>
                  <span className="has-text-weight-semibold has-text-grey is-uppercase">
                    Tipo:
                  </span>{" "}
                  {tipo}
                </li>
                <li>
                  <span className="has-text-weight-semibold has-text-grey is-uppercase">
                    Estado:
                  </span>{" "}
                  {estado}
                </li>
                <li>
                  <span className="has-text-weight-semibold has-text-grey is-uppercase">
                    Episodios:
                  </span>{" "}
                  {numeroEpisodios}
                </li>
                <li className={sec1}>
                  <span className="has-text-weight-semibold has-text-grey is-uppercase">
                    {textoSecuela}:
                  </span>
                  <a href={hrefSecuela}>{nombreSecuela}</a>
                </li>
                <li className={sec2}>
                  <span className="has-text-weight-semibold has-text-grey is-uppercase">
                    {textoSecuela2}:
                  </span>
                  <a href={hrefSecuela2}>{nombreSecuela2}</a>
                </li>
                <li className={sec3}>
                  <span className="has-text-weight-semibold has-text-grey is-uppercase">
                    {textoSecuela3}:
                  </span>
                  <a href={hrefSecuela3}>{nombreSecuela3}</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-12">
              <h1 className="title is-size-5 has-text-weight-light has-text-light has-text-weight-semibold ">
                <i className="fa fa-list-ul has-text-orange Icono-list"></i>
                <b> Lista de episodios </b>
              </h1>
              <>
                {menorAMayor ? (
                  <a onClick={MayorAMenor} className="button">
                    Mayor a Menor
                    <i
                      className="fa-solid fa-arrow-down-short-wide"
                      style={{ marginLeft: "10px" }}
                    ></i>
                  </a>
                ) : (
                  <a onClick={MenorAMayor} className="button">
                    Menor a Mayor
                    <i
                      class="fa-solid fa-arrow-up-short-wide"
                      style={{ marginLeft: "10px" }}
                    ></i>
                  </a>
                )}

                {mayorAMenor ? (
                  <ul className="anime-page__episode-list is-size-6 cuarenta-caps">
                    <li className={props.li64}>
                      <a
                        className="fa-play-circle d-inline-flex align-items-center is-rounded "
                        href={props.capituloAnime64}
                      >
                        {anime} <span> Episodio 64</span>
                      </a>
                    </li>
                    <li className={props.li63}>
                      <a
                        className="fa-play-circle d-inline-flex align-items-center is-rounded "
                        href={props.capituloAnime63}
                      >
                        {anime} <span> Episodio 63</span>
                      </a>
                    </li>
                    <li className={props.li62}>
                      <a
                        className="fa-play-circle d-inline-flex align-items-center is-rounded "
                        href={props.capituloAnime62}
                      >
                        {anime} <span> Episodio 62</span>
                      </a>
                    </li>
                    <li className={props.li61}>
                      <a
                        className="fa-play-circle d-inline-flex align-items-center is-rounded "
                        href={props.capituloAnime61}
                      >
                        {anime} <span> Episodio 61</span>
                      </a>
                    </li>
                    <li className={props.li60}>
                      <a
                        className="fa-play-circle d-inline-flex align-items-center is-rounded "
                        href={props.capituloAnime60}
                      >
                        {anime} <span> Episodio 60</span>
                      </a>
                    </li>
                    <li className={props.li59}>
                      <a
                        className="fa-play-circle d-inline-flex align-items-center is-rounded "
                        href={props.capituloAnime59}
                      >
                        {anime} <span> Episodio 59</span>
                      </a>
                    </li>
                    <li className={props.li58}>
                      <a
                        className="fa-play-circle d-inline-flex align-items-center is-rounded "
                        href={props.capituloAnime58}
                      >
                        {anime} <span> Episodio 58</span>
                      </a>
                    </li>
                    <li className={props.li57}>
                      <a
                        className="fa-play-circle d-inline-flex align-items-center is-rounded "
                        href={props.capituloAnime57}
                      >
                        {anime} <span> Episodio 57</span>
                      </a>
                    </li>
                    <li className={props.li56}>
                      <a
                        className="fa-play-circle d-inline-flex align-items-center is-rounded "
                        href={props.capituloAnime56}
                      >
                        {anime} <span> Episodio 56</span>
                      </a>
                    </li>
                    <li className={props.li55}>
                      <a
                        className="fa-play-circle d-inline-flex align-items-center is-rounded "
                        href={props.capituloAnime55}
                      >
                        {anime} <span> Episodio 55</span>
                      </a>
                    </li>
                    <li className={props.li54}>
                      <a
                        className="fa-play-circle d-inline-flex align-items-center is-rounded "
                        href={props.capituloAnime54}
                      >
                        {anime} <span> Episodio 54</span>
                      </a>
                    </li>
                    <li className={props.li53}>
                      <a
                        className="fa-play-circle d-inline-flex align-items-center is-rounded "
                        href={props.capituloAnime53}
                      >
                        {anime} <span> Episodio 53</span>
                      </a>
                    </li>
                    <li className={props.li52}>
                      <a
                        className="fa-play-circle d-inline-flex align-items-center is-rounded "
                        href={props.capituloAnime52}
                      >
                        {anime} <span>Episodio 52</span>
                      </a>
                    </li>
                    <li className={props.li51}>
                      <a
                        className="fa-play-circle d-inline-flex align-items-center is-rounded "
                        href={props.capituloAnime51}
                      >
                        {anime} <span>Episodio 51</span>
                      </a>
                    </li>
                    <li className={props.li50}>
                      <a
                        className="fa-play-circle d-inline-flex align-items-center is-rounded "
                        href={props.capituloAnime50}
                      >
                        {anime} <span>Episodio 50</span>
                      </a>
                    </li>
                    <li className={props.li49}>
                      <a
                        className="fa-play-circle d-inline-flex align-items-center is-rounded "
                        href={props.capituloAnime49}
                      >
                        {anime} <span>Episodio 49</span>
                      </a>
                    </li>
                    <li className={props.li48}>
                      <a
                        className="fa-play-circle d-inline-flex align-items-center is-rounded "
                        href={props.capituloAnime48}
                      >
                        {anime} <span>Episodio 48</span>
                      </a>
                    </li>
                    <li className={props.li47}>
                      <a
                        className="fa-play-circle d-inline-flex align-items-center is-rounded "
                        href={props.capituloAnime47}
                      >
                        {anime} <span>Episodio 47</span>
                      </a>
                    </li>
                    <li className={props.li46}>
                      <a
                        className="fa-play-circle d-inline-flex align-items-center is-rounded "
                        href={props.capituloAnime46}
                      >
                        {anime} <span>Episodio 46</span>
                      </a>
                    </li>
                    <li className={props.li45}>
                      <a
                        className="fa-play-circle d-inline-flex align-items-center is-rounded "
                        href={props.capituloAnime45}
                      >
                        {anime} <span>Episodio 45</span>
                      </a>
                    </li>
                    <li className={props.li44}>
                      <a
                        className="fa-play-circle d-inline-flex align-items-center is-rounded "
                        href={props.capituloAnime44}
                      >
                        {anime} <span>Episodio 44</span>
                      </a>
                    </li>
                    <li className={props.li43}>
                      <a
                        className="fa-play-circle d-inline-flex align-items-center is-rounded "
                        href={props.capituloAnime43}
                      >
                        {anime} <span>Episodio 43</span>
                      </a>
                    </li>
                    <li className={props.li42}>
                      <a
                        className="fa-play-circle d-inline-flex align-items-center is-rounded "
                        href={props.capituloAnime42}
                      >
                        {anime} <span>Episodio 42</span>
                      </a>
                    </li>
                    <li className={props.li41}>
                      <a
                        className="fa-play-circle d-inline-flex align-items-center is-rounded "
                        href={props.capituloAnime41}
                      >
                        {anime} <span>Episodio 41</span>
                      </a>
                    </li>
                    <li className={props.li40}>
                      <a
                        className="fa-play-circle d-inline-flex align-items-center is-rounded "
                        href={props.capituloAnime40}
                      >
                        {anime} <span>Episodio 40</span>
                      </a>
                    </li>
                    <li className={props.li39}>
                      <a
                        className="fa-play-circle d-inline-flex align-items-center is-rounded "
                        href={props.capituloAnime39}
                      >
                        {anime} <span>Episodio 39</span>
                      </a>
                    </li>
                    <li className={props.li38}>
                      <a
                        className="fa-play-circle d-inline-flex align-items-center is-rounded "
                        href={props.capituloAnime38}
                      >
                        {anime} <span>Episodio 38</span>
                      </a>
                    </li>
                    <li className={props.li37}>
                      <a
                        className="fa-play-circle d-inline-flex align-items-center is-rounded "
                        href={props.capituloAnime37}
                      >
                        {anime} <span>Episodio 37</span>
                      </a>
                    </li>
                    <li className={props.li36}>
                      <a
                        className="fa-play-circle d-inline-flex align-items-center is-rounded "
                        href={props.capituloAnime36}
                      >
                        {anime} <span>Episodio 36</span>
                      </a>
                    </li>
                    <li className={props.li35}>
                      <a
                        className="fa-play-circle d-inline-flex align-items-center is-rounded "
                        href={props.capituloAnime35}
                      >
                        {anime} <span>Episodio 35</span>
                      </a>
                    </li>
                    <li className={props.li34}>
                      <a
                        className="fa-play-circle d-inline-flex align-items-center is-rounded "
                        href={props.capituloAnime34}
                      >
                        {anime} <span>Episodio 34</span>
                      </a>
                    </li>
                    <li className={props.li33}>
                      <a
                        className="fa-play-circle d-inline-flex align-items-center is-rounded "
                        href={props.capituloAnime33}
                      >
                        {anime} <span>Episodio 33</span>
                      </a>
                    </li>
                    <li className={props.li32}>
                      <a
                        className="fa-play-circle d-inline-flex align-items-center is-rounded "
                        href={props.capituloAnime32}
                      >
                        {anime} <span>Episodio 32</span>
                      </a>
                    </li>
                    <li className={props.li31}>
                      <a
                        className="fa-play-circle d-inline-flex align-items-center is-rounded "
                        href={props.capituloAnime31}
                      >
                        {anime} <span>Episodio 31</span>
                      </a>
                    </li>
                    <li className={props.li30}>
                      <a
                        className="fa-play-circle d-inline-flex align-items-center is-rounded "
                        href={props.capituloAnime30}
                      >
                        {anime} <span>Episodio 30</span>
                      </a>
                    </li>
                    <li className={props.li29}>
                      <a
                        className="fa-play-circle d-inline-flex align-items-center is-rounded "
                        href={props.capituloAnime29}
                      >
                        {anime} <span>Episodio 29</span>
                      </a>
                    </li>
                    <li className={props.li28}>
                      <a
                        className="fa-play-circle d-inline-flex align-items-center is-rounded "
                        href={props.capituloAnime28}
                      >
                        {anime} <span>Episodio 28</span>
                      </a>
                    </li>
                    <li className={props.li27}>
                      <a
                        className="fa-play-circle d-inline-flex align-items-center is-rounded "
                        href={props.capituloAnime27}
                      >
                        {anime} <span>Episodio 27</span>
                      </a>
                    </li>
                    <li className={props.li26}>
                      <a
                        className="fa-play-circle d-inline-flex align-items-center is-rounded "
                        href={props.capituloAnime26}
                      >
                        {anime} <span>Episodio 26</span>
                      </a>
                    </li>
                    <li className={props.li25}>
                      <a
                        className="fa-play-circle d-inline-flex align-items-center is-rounded "
                        href={props.capituloAnime25}
                      >
                        {anime} <span>Episodio 25</span>
                      </a>
                    </li>
                    <li className={props.li24}>
                      <a
                        className="fa-play-circle d-inline-flex align-items-center is-rounded "
                        href={props.capituloAnime24}
                      >
                        {anime} <span>Episodio 24</span>
                      </a>
                    </li>
                    <li className={props.li23}>
                      <a
                        className="fa-play-circle d-inline-flex align-items-center is-rounded "
                        href={props.capituloAnime23}
                      >
                        {anime} <span>Episodio 23</span>
                      </a>
                    </li>
                    <li className={props.li22}>
                      <a
                        className="fa-play-circle d-inline-flex align-items-center is-rounded "
                        href={props.capituloAnime22}
                      >
                        {anime} <span>Episodio 22</span>
                      </a>
                    </li>
                    <li className={props.li21}>
                      <a
                        className="fa-play-circle d-inline-flex align-items-center is-rounded "
                        href={props.capituloAnime21}
                      >
                        {anime} <span>Episodio 21</span>
                      </a>
                    </li>
                    <li className={props.li20}>
                      <a
                        className="fa-play-circle d-inline-flex align-items-center is-rounded "
                        href={props.capituloAnime20}
                      >
                        {anime} <span>Episodio 20</span>
                      </a>
                    </li>
                    <li className={props.li19}>
                      <a
                        className="fa-play-circle d-inline-flex align-items-center is-rounded "
                        href={props.capituloAnime19}
                      >
                        {anime} <span>Episodio 19</span>
                      </a>
                    </li>
                    <li className={props.li18}>
                      <a
                        className="fa-play-circle d-inline-flex align-items-center is-rounded "
                        href={props.capituloAnime18}
                      >
                        {anime} <span>Episodio 18</span>
                      </a>
                    </li>
                    <li className={props.li17}>
                      <a
                        className="fa-play-circle d-inline-flex align-items-center is-rounded "
                        href={props.capituloAnime17}
                      >
                        {anime} <span>Episodio 17</span>
                      </a>
                    </li>
                    <li className={props.li16}>
                      <a
                        className="fa-play-circle d-inline-flex align-items-center is-rounded "
                        href={props.capituloAnime16}
                      >
                        {anime} <span>Episodio 16</span>
                      </a>
                    </li>
                    <li className={props.li15}>
                      <a
                        className="fa-play-circle d-inline-flex align-items-center is-rounded "
                        href={props.capituloAnime15}
                      >
                        {anime} <span>Episodio 15</span>
                      </a>
                    </li>
                    <li className={props.li14}>
                      <a
                        className="fa-play-circle d-inline-flex align-items-center is-rounded "
                        href={props.capituloAnime14}
                      >
                        {anime} <span>Episodio 14</span>
                      </a>
                    </li>
                    <li className={props.li13}>
                      <a
                        className="fa-play-circle d-inline-flex align-items-center is-rounded "
                        href={props.capituloAnime13}
                      >
                        {anime} <span>Episodio 13</span>
                      </a>
                    </li>
                    <li className={props.li12}>
                      <a
                        className="fa-play-circle d-inline-flex align-items-center is-rounded "
                        href={props.capituloAnime12}
                      >
                        {anime} <span>Episodio 12</span>
                      </a>
                    </li>
                    <li className={props.li11}>
                      <a
                        className="fa-play-circle d-inline-flex align-items-center is-rounded "
                        href={props.capituloAnime11}
                      >
                        {anime} <span>Episodio 11</span>
                      </a>
                    </li>
                    <li className={props.li10}>
                      <a
                        className="fa-play-circle d-inline-flex align-items-center is-rounded "
                        href={props.capituloAnime10}
                      >
                        {anime} <span>Episodio 10</span>
                      </a>
                    </li>
                    <li className={props.li9}>
                      <a
                        className="fa-play-circle d-inline-flex align-items-center is-rounded "
                        href={props.capituloAnime9}
                      >
                        {anime} <span>Episodio 9</span>
                      </a>
                    </li>
                    <li className={props.li8}>
                      <a
                        className="fa-play-circle d-inline-flex align-items-center is-rounded "
                        href={props.capituloAnime8}
                      >
                        {anime} <span>Episodio 8</span>
                      </a>
                    </li>
                    <li className={props.li7}>
                      <a
                        className="fa-play-circle d-inline-flex align-items-center is-rounded "
                        href={props.capituloAnime7}
                      >
                        {anime} <span>Episodio 7</span>
                      </a>
                    </li>
                    <li className={props.li6}>
                      <a
                        className="fa-play-circle d-inline-flex align-items-center is-rounded "
                        href={props.capituloAnime6}
                      >
                        {anime} <span>Episodio 6</span>
                      </a>
                    </li>
                    <li className={props.li5}>
                      <a
                        className="fa-play-circle d-inline-flex align-items-center is-rounded "
                        href={props.capituloAnime5}
                      >
                        {anime} <span>Episodio 5</span>
                      </a>
                    </li>
                    <li className={props.li4}>
                      <a
                        className="fa-play-circle d-inline-flex align-items-center is-rounded "
                        href={props.capituloAnime4}
                      >
                        {anime} <span>Episodio 4</span>
                      </a>
                    </li>
                    <li className={props.li3}>
                      <a
                        className="fa-play-circle d-inline-flex align-items-center is-rounded "
                        href={props.capituloAnime3}
                      >
                        {anime} <span>Episodio 3</span>
                      </a>
                    </li>
                    <li className={props.li2}>
                      <a
                        className="fa-play-circle d-inline-flex align-items-center is-rounded "
                        href={props.capituloAnime2}
                      >
                        {anime} <span>Episodio 2</span>
                      </a>
                    </li>
                    <li className={props.li1}>
                      <a
                        className="fa-play-circle d-inline-flex align-items-center is-rounded "
                        href={props.capituloAnime1}
                      >
                        {anime} <span>Episodio 1</span>
                      </a>
                    </li>
                  </ul>
                ) : (
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
                        {anime} <span>Episodio 13</span>
                      </a>
                    </li>
                    <li className={props.li14}>
                      <a
                        className="fa-play-circle d-inline-flex align-items-center is-rounded "
                        href={props.capituloAnime14}
                      >
                        {anime} <span>Episodio 14</span>
                      </a>
                    </li>
                    <li className={props.li15}>
                      <a
                        className="fa-play-circle d-inline-flex align-items-center is-rounded "
                        href={props.capituloAnime15}
                      >
                        {anime} <span>Episodio 15</span>
                      </a>
                    </li>
                    <li className={props.li16}>
                      <a
                        className="fa-play-circle d-inline-flex align-items-center is-rounded "
                        href={props.capituloAnime16}
                      >
                        {anime} <span>Episodio 16</span>
                      </a>
                    </li>
                    <li className={props.li17}>
                      <a
                        className="fa-play-circle d-inline-flex align-items-center is-rounded "
                        href={props.capituloAnime17}
                      >
                        {anime} <span>Episodio 17</span>
                      </a>
                    </li>
                    <li className={props.li18}>
                      <a
                        className="fa-play-circle d-inline-flex align-items-center is-rounded "
                        href={props.capituloAnime18}
                      >
                        {anime} <span>Episodio 18</span>
                      </a>
                    </li>
                    <li className={props.li19}>
                      <a
                        className="fa-play-circle d-inline-flex align-items-center is-rounded "
                        href={props.capituloAnime19}
                      >
                        {anime} <span>Episodio 19</span>
                      </a>
                    </li>
                    <li className={props.li20}>
                      <a
                        className="fa-play-circle d-inline-flex align-items-center is-rounded "
                        href={props.capituloAnime20}
                      >
                        {anime} <span>Episodio 20</span>
                      </a>
                    </li>
                    <li className={props.li21}>
                      <a
                        className="fa-play-circle d-inline-flex align-items-center is-rounded "
                        href={props.capituloAnime21}
                      >
                        {anime} <span>Episodio 21</span>
                      </a>
                    </li>
                    <li className={props.li22}>
                      <a
                        className="fa-play-circle d-inline-flex align-items-center is-rounded "
                        href={props.capituloAnime22}
                      >
                        {anime} <span>Episodio 22</span>
                      </a>
                    </li>
                    <li className={props.li23}>
                      <a
                        className="fa-play-circle d-inline-flex align-items-center is-rounded "
                        href={props.capituloAnime23}
                      >
                        {anime} <span>Episodio 23</span>
                      </a>
                    </li>
                    <li className={props.li24}>
                      <a
                        className="fa-play-circle d-inline-flex align-items-center is-rounded "
                        href={props.capituloAnime24}
                      >
                        {anime} <span>Episodio 24</span>
                      </a>
                    </li>
                    <li className={props.li25}>
                      <a
                        className="fa-play-circle d-inline-flex align-items-center is-rounded "
                        href={props.capituloAnime25}
                      >
                        {anime} <span>Episodio 25</span>
                      </a>
                    </li>
                    <li className={props.li26}>
                      <a
                        className="fa-play-circle d-inline-flex align-items-center is-rounded "
                        href={props.capituloAnime26}
                      >
                        {anime} <span>Episodio 26</span>
                      </a>
                    </li>
                    <li className={props.li27}>
                      <a
                        className="fa-play-circle d-inline-flex align-items-center is-rounded "
                        href={props.capituloAnime27}
                      >
                        {anime} <span>Episodio 27</span>
                      </a>
                    </li>
                    <li className={props.li28}>
                      <a
                        className="fa-play-circle d-inline-flex align-items-center is-rounded "
                        href={props.capituloAnime28}
                      >
                        {anime} <span>Episodio 28</span>
                      </a>
                    </li>
                    <li className={props.li29}>
                      <a
                        className="fa-play-circle d-inline-flex align-items-center is-rounded "
                        href={props.capituloAnime29}
                      >
                        {anime} <span>Episodio 29</span>
                      </a>
                    </li>
                    <li className={props.li30}>
                      <a
                        className="fa-play-circle d-inline-flex align-items-center is-rounded "
                        href={props.capituloAnime30}
                      >
                        {anime} <span>Episodio 30</span>
                      </a>
                    </li>
                    <li className={props.li31}>
                      <a
                        className="fa-play-circle d-inline-flex align-items-center is-rounded "
                        href={props.capituloAnime31}
                      >
                        {anime} <span>Episodio 31</span>
                      </a>
                    </li>
                    <li className={props.li32}>
                      <a
                        className="fa-play-circle d-inline-flex align-items-center is-rounded "
                        href={props.capituloAnime32}
                      >
                        {anime} <span>Episodio 32</span>
                      </a>
                    </li>
                    <li className={props.li33}>
                      <a
                        className="fa-play-circle d-inline-flex align-items-center is-rounded "
                        href={props.capituloAnime33}
                      >
                        {anime} <span>Episodio 33</span>
                      </a>
                    </li>
                    <li className={props.li34}>
                      <a
                        className="fa-play-circle d-inline-flex align-items-center is-rounded "
                        href={props.capituloAnime34}
                      >
                        {anime} <span>Episodio 34</span>
                      </a>
                    </li>
                    <li className={props.li35}>
                      <a
                        className="fa-play-circle d-inline-flex align-items-center is-rounded "
                        href={props.capituloAnime35}
                      >
                        {anime} <span>Episodio 35</span>
                      </a>
                    </li>
                    <li className={props.li36}>
                      <a
                        className="fa-play-circle d-inline-flex align-items-center is-rounded "
                        href={props.capituloAnime36}
                      >
                        {anime} <span>Episodio 36</span>
                      </a>
                    </li>
                    <li className={props.li37}>
                      <a
                        className="fa-play-circle d-inline-flex align-items-center is-rounded "
                        href={props.capituloAnime37}
                      >
                        {anime} <span>Episodio 37</span>
                      </a>
                    </li>
                    <li className={props.li38}>
                      <a
                        className="fa-play-circle d-inline-flex align-items-center is-rounded "
                        href={props.capituloAnime38}
                      >
                        {anime} <span>Episodio 38</span>
                      </a>
                    </li>
                    <li className={props.li39}>
                      <a
                        className="fa-play-circle d-inline-flex align-items-center is-rounded "
                        href={props.capituloAnime39}
                      >
                        {anime} <span>Episodio 39</span>
                      </a>
                    </li>
                    <li className={props.li40}>
                      <a
                        className="fa-play-circle d-inline-flex align-items-center is-rounded "
                        href={props.capituloAnime40}
                      >
                        {anime} <span>Episodio 40</span>
                      </a>
                    </li>
                    <li className={props.li41}>
                      <a
                        className="fa-play-circle d-inline-flex align-items-center is-rounded "
                        href={props.capituloAnime41}
                      >
                        {anime} <span>Episodio 41</span>
                      </a>
                    </li>
                    <li className={props.li42}>
                      <a
                        className="fa-play-circle d-inline-flex align-items-center is-rounded "
                        href={props.capituloAnime42}
                      >
                        {anime} <span>Episodio 42</span>
                      </a>
                    </li>
                    <li className={props.li43}>
                      <a
                        className="fa-play-circle d-inline-flex align-items-center is-rounded "
                        href={props.capituloAnime43}
                      >
                        {anime} <span>Episodio 43</span>
                      </a>
                    </li>
                    <li className={props.li44}>
                      <a
                        className="fa-play-circle d-inline-flex align-items-center is-rounded "
                        href={props.capituloAnime44}
                      >
                        {anime} <span>Episodio 44</span>
                      </a>
                    </li>
                    <li className={props.li45}>
                      <a
                        className="fa-play-circle d-inline-flex align-items-center is-rounded "
                        href={props.capituloAnime45}
                      >
                        {anime} <span>Episodio 45</span>
                      </a>
                    </li>
                    <li className={props.li46}>
                      <a
                        className="fa-play-circle d-inline-flex align-items-center is-rounded "
                        href={props.capituloAnime46}
                      >
                        {anime} <span>Episodio 46</span>
                      </a>
                    </li>
                    <li className={props.li47}>
                      <a
                        className="fa-play-circle d-inline-flex align-items-center is-rounded "
                        href={props.capituloAnime47}
                      >
                        {anime} <span>Episodio 47</span>
                      </a>
                    </li>
                    <li className={props.li48}>
                      <a
                        className="fa-play-circle d-inline-flex align-items-center is-rounded "
                        href={props.capituloAnime48}
                      >
                        {anime} <span>Episodio 48</span>
                      </a>
                    </li>
                    <li className={props.li49}>
                      <a
                        className="fa-play-circle d-inline-flex align-items-center is-rounded "
                        href={props.capituloAnime49}
                      >
                        {anime} <span>Episodio 49</span>
                      </a>
                    </li>
                    <li className={props.li50}>
                      <a
                        className="fa-play-circle d-inline-flex align-items-center is-rounded "
                        href={props.capituloAnime50}
                      >
                        {anime} <span>Episodio 50</span>
                      </a>
                    </li>
                    <li className={props.li51}>
                      <a
                        className="fa-play-circle d-inline-flex align-items-center is-rounded "
                        href={props.capituloAnime51}
                      >
                        {anime} <span>Episodio 51</span>
                      </a>
                    </li>
                    <li className={props.li52}>
                      <a
                        className="fa-play-circle d-inline-flex align-items-center is-rounded "
                        href={props.capituloAnime52}
                      >
                        {anime} <span>Episodio 52</span>
                      </a>
                    </li>
                    <li className={props.li53}>
                      <a
                        className="fa-play-circle d-inline-flex align-items-center is-rounded "
                        href={props.capituloAnime53}
                      >
                        {anime} <span>Episodio 53</span>
                      </a>
                    </li>
                    <li className={props.li54}>
                      <a
                        className="fa-play-circle d-inline-flex align-items-center is-rounded "
                        href={props.capituloAnime54}
                      >
                        {anime} <span>Episodio 54</span>
                      </a>
                    </li>
                    <li className={props.li55}>
                      <a
                        className="fa-play-circle d-inline-flex align-items-center is-rounded "
                        href={props.capituloAnime55}
                      >
                        {anime} <span>Episodio 55</span>
                      </a>
                    </li>
                    <li className={props.li56}>
                      <a
                        className="fa-play-circle d-inline-flex align-items-center is-rounded "
                        href={props.capituloAnime56}
                      >
                        {anime} <span>Episodio 56</span>
                      </a>
                    </li>
                    <li className={props.li57}>
                      <a
                        className="fa-play-circle d-inline-flex align-items-center is-rounded "
                        href={props.capituloAnime57}
                      >
                        {anime} <span>Episodio 57</span>
                      </a>
                    </li>
                    <li className={props.li58}>
                      <a
                        className="fa-play-circle d-inline-flex align-items-center is-rounded "
                        href={props.capituloAnime58}
                      >
                        {anime} <span>Episodio 58</span>
                      </a>
                    </li>
                    <li className={props.li59}>
                      <a
                        className="fa-play-circle d-inline-flex align-items-center is-rounded "
                        href={props.capituloAnime59}
                      >
                        {anime} <span>Episodio 59</span>
                      </a>
                    </li>
                    <li className={props.li60}>
                      <a
                        className="fa-play-circle d-inline-flex align-items-center is-rounded "
                        href={props.capituloAnime60}
                      >
                        {anime} <span>Episodio 60</span>
                      </a>
                    </li>
                    <li className={props.li61}>
                      <a
                        className="fa-play-circle d-inline-flex align-items-center is-rounded "
                        href={props.capituloAnime61}
                      >
                        {anime} <span>Episodio 61</span>
                      </a>
                    </li>
                    <li className={props.li62}>
                      <a
                        className="fa-play-circle d-inline-flex align-items-center is-rounded "
                        href={props.capituloAnime62}
                      >
                        {anime} <span>Episodio 62</span>
                      </a>
                    </li>
                    <li className={props.li63}>
                      <a
                        className="fa-play-circle d-inline-flex align-items-center is-rounded "
                        href={props.capituloAnime63}
                      >
                        {anime} <span>Episodio 63</span>
                      </a>
                    </li>
                    <li className={props.li64}>
                      <a
                        className="fa-play-circle d-inline-flex align-items-center is-rounded "
                        href={props.capituloAnime64}
                      >
                        {anime} <span>Episodio 64</span>
                      </a>
                    </li>
                  </ul>
                )}
              </>
            </div>
          </div>
          <ButtonDisqus />
        </div>
      </section>
      <hr />
      <Footer />
    </>
  );
}
