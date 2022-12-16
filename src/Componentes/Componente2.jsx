/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/anchor-is-valid */

import Disqus from "./Elements/disqus";

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
  li1,
  li2,
  li3,
  li4,
  li5,
  li6,
  li7,
  li8,
  li9,
  li10,
  li11,
  li12,
  li13,
  li14,
  li15,
  li16,
  li17,
  li18,
  li19,
  li20,
  li21,
  li22,
  li23,
  li24,
  li25,
  li26,
  li27,
  li28,
  li29,
  li30,
  li31,
  li32,
  li33,
  li34,
  li35,
  li36,
  li37,
  li38,
  li39,
  li40,
  capituloAnime1,
  capituloAnime2,
  capituloAnime3,
  capituloAnime4,
  capituloAnime5,
  capituloAnime6,
  capituloAnime7,
  capituloAnime8,
  capituloAnime9,
  capituloAnime10,
  capituloAnime11,
  capituloAnime12,
  capituloAnime13,
  capituloAnime14,
  capituloAnime15,
  capituloAnime16,
  capituloAnime17,
  capituloAnime18,
  capituloAnime19,
  capituloAnime20,
  capituloAnime21,
  capituloAnime22,
  capituloAnime23,
  capituloAnime24,
  capituloAnime25,
  capituloAnime26,
  capituloAnime27,
  capituloAnime28,
  capituloAnime29,
  capituloAnime30,
  capituloAnime31,
  capituloAnime32,
  capituloAnime33,
  capituloAnime34,
  capituloAnime35,
  capituloAnime36,
  capituloAnime37,
  capituloAnime38,
  capituloAnime39,
  capituloAnime40,
  capituloAnime41,
  capituloAnime42,
  capituloAnime43,
  capituloAnime44,
  capituloAnime45,
  capituloAnime46,
  capituloAnime47,
  capituloAnime48,
  capituloAnime49,
  capituloAnime50,
  capituloAnime51,
  capituloAnime52,
  capituloAnime53,
  capituloAnime54,
  capituloAnime55,
  capituloAnime56,
  capituloAnime57,
  capituloAnime58,
  capituloAnime59,
  capituloAnime60,
  capituloAnime61,
  capituloAnime62,
  capituloAnime63,
  capituloAnime64,
  li41,
  li42,
  li43,
  li44,
  li45,
  li46,
  li47,
  li48,
  li49,
  li50,
  li51,
  li52,
  li53,
  li54,
  li55,
  li56,
  li57,
  li58,
  li59,
  li60,
  li61,
  li62,
  li63,
  li64,
}) {
  return (
    <>
      <title>{tituloAnime}</title>

      <section className="section">
        <div className="container">
          <div className="columns is-mobile is-multiline">
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
                <i className="fa fa-list-ul has-text-orange Icono-list"></i>{" "}
                <b> Lista de episodios </b>
              </h1>

              <ul className="anime-page__episode-list is-size-6 cuarenta-caps">
                <li id={li1}>
                  <a
                    className="fa-play-circle d-inline-flex align-items-center is-rounded "
                    href={capituloAnime1}
                  >
                    {anime} <span> Episodio 1</span>
                  </a>
                </li>
                <li className={li2}>
                  <a
                    className="fa-play-circle d-inline-flex align-items-center is-rounded "
                    href={capituloAnime2}
                  >
                    {anime} <span> Episodio 2</span>
                  </a>
                </li>
                <li className={li3}>
                  <a
                    className="fa-play-circle d-inline-flex align-items-center is-rounded "
                    href={capituloAnime3}
                  >
                    {anime} <span> Episodio 3</span>
                  </a>
                </li>
                <li className={li4}>
                  <a
                    className="fa-play-circle d-inline-flex align-items-center is-rounded "
                    href={capituloAnime4}
                  >
                    {anime} <span> Episodio 4</span>
                  </a>
                </li>
                <li className={li5}>
                  <a
                    className="fa-play-circle d-inline-flex align-items-center is-rounded "
                    href={capituloAnime5}
                  >
                    {anime} <span> Episodio 5</span>
                  </a>
                </li>
                <li className={li6}>
                  <a
                    className="fa-play-circle d-inline-flex align-items-center is-rounded "
                    href={capituloAnime6}
                  >
                    {anime} <span> Episodio 6</span>
                  </a>
                </li>
                <li className={li7}>
                  <a
                    className="fa-play-circle d-inline-flex align-items-center is-rounded "
                    href={capituloAnime7}
                  >
                    {anime} <span> Episodio 7</span>
                  </a>
                </li>
                <li className={li8}>
                  <a
                    className="fa-play-circle d-inline-flex align-items-center is-rounded "
                    href={capituloAnime8}
                  >
                    {anime} <span> Episodio 8</span>
                  </a>
                </li>
                <li className={li9}>
                  <a
                    className="fa-play-circle d-inline-flex align-items-center is-rounded "
                    href={capituloAnime9}
                  >
                    {anime} <span> Episodio 9</span>
                  </a>
                </li>
                <li className={li10}>
                  <a
                    className="fa-play-circle d-inline-flex align-items-center is-rounded "
                    href={capituloAnime10}
                  >
                    {anime} <span> Episodio 10</span>
                  </a>
                </li>
                <li className={li11}>
                  <a
                    className="fa-play-circle d-inline-flex align-items-center is-rounded "
                    href={capituloAnime11}
                  >
                    {anime} <span> Episodio 11</span>
                  </a>
                </li>
                <li className={li12}>
                  <a
                    className="fa-play-circle d-inline-flex align-items-center is-rounded "
                    href={capituloAnime12}
                  >
                    {anime} <span> Episodio 12</span>
                  </a>
                </li>
                <li className={li13}>
                  <a
                    className="fa-play-circle d-inline-flex align-items-center is-rounded "
                    href={capituloAnime13}
                  >
                    {anime} <span>Episodio 13</span>
                  </a>
                </li>
                <li className={li14}>
                  <a
                    className="fa-play-circle d-inline-flex align-items-center is-rounded "
                    href={capituloAnime14}
                  >
                    {anime} <span>Episodio 14</span>
                  </a>
                </li>
                <li className={li15}>
                  <a
                    className="fa-play-circle d-inline-flex align-items-center is-rounded "
                    href={capituloAnime15}
                  >
                    {anime} <span>Episodio 15</span>
                  </a>
                </li>
                <li className={li16}>
                  <a
                    className="fa-play-circle d-inline-flex align-items-center is-rounded "
                    href={capituloAnime16}
                  >
                    {anime} <span>Episodio 16</span>
                  </a>
                </li>
                <li className={li17}>
                  <a
                    className="fa-play-circle d-inline-flex align-items-center is-rounded "
                    href={capituloAnime17}
                  >
                    {anime} <span>Episodio 17</span>
                  </a>
                </li>
                <li className={li18}>
                  <a
                    className="fa-play-circle d-inline-flex align-items-center is-rounded "
                    href={capituloAnime18}
                  >
                    {anime} <span>Episodio 18</span>
                  </a>
                </li>
                <li className={li19}>
                  <a
                    className="fa-play-circle d-inline-flex align-items-center is-rounded "
                    href={capituloAnime19}
                  >
                    {anime} <span>Episodio 19</span>
                  </a>
                </li>
                <li className={li20}>
                  <a
                    className="fa-play-circle d-inline-flex align-items-center is-rounded "
                    href={capituloAnime20}
                  >
                    {anime} <span>Episodio 20</span>
                  </a>
                </li>
                <li className={li21}>
                  <a
                    className="fa-play-circle d-inline-flex align-items-center is-rounded "
                    href={capituloAnime21}
                  >
                    {anime} <span>Episodio 21</span>
                  </a>
                </li>
                <li className={li22}>
                  <a
                    className="fa-play-circle d-inline-flex align-items-center is-rounded "
                    href={capituloAnime22}
                  >
                    {anime} <span>Episodio 22</span>
                  </a>
                </li>
                <li className={li23}>
                  <a
                    className="fa-play-circle d-inline-flex align-items-center is-rounded "
                    href={capituloAnime23}
                  >
                    {anime} <span>Episodio 23</span>
                  </a>
                </li>
                <li className={li24}>
                  <a
                    className="fa-play-circle d-inline-flex align-items-center is-rounded "
                    href={capituloAnime24}
                  >
                    {anime} <span>Episodio 24</span>
                  </a>
                </li>
                <li className={li25}>
                  <a
                    className="fa-play-circle d-inline-flex align-items-center is-rounded "
                    href={capituloAnime25}
                  >
                    {anime} <span>Episodio 25</span>
                  </a>
                </li>
                <li className={li26}>
                  <a
                    className="fa-play-circle d-inline-flex align-items-center is-rounded "
                    href={capituloAnime26}
                  >
                    {anime} <span>Episodio 26</span>
                  </a>
                </li>
                <li className={li27}>
                  <a
                    className="fa-play-circle d-inline-flex align-items-center is-rounded "
                    href={capituloAnime27}
                  >
                    {anime} <span>Episodio 27</span>
                  </a>
                </li>
                <li className={li28}>
                  <a
                    className="fa-play-circle d-inline-flex align-items-center is-rounded "
                    href={capituloAnime28}
                  >
                    {anime} <span>Episodio 28</span>
                  </a>
                </li>
                <li className={li29}>
                  <a
                    className="fa-play-circle d-inline-flex align-items-center is-rounded "
                    href={capituloAnime29}
                  >
                    {anime} <span>Episodio 29</span>
                  </a>
                </li>
                <li className={li30}>
                  <a
                    className="fa-play-circle d-inline-flex align-items-center is-rounded "
                    href={capituloAnime30}
                  >
                    {anime} <span>Episodio 30</span>
                  </a>
                </li>
                <li className={li31}>
                  <a
                    className="fa-play-circle d-inline-flex align-items-center is-rounded "
                    href={capituloAnime31}
                  >
                    {anime} <span>Episodio 31</span>
                  </a>
                </li>
                <li className={li32}>
                  <a
                    className="fa-play-circle d-inline-flex align-items-center is-rounded "
                    href={capituloAnime32}
                  >
                    {anime} <span>Episodio 32</span>
                  </a>
                </li>
                <li className={li33}>
                  <a
                    className="fa-play-circle d-inline-flex align-items-center is-rounded "
                    href={capituloAnime33}
                  >
                    {anime} <span>Episodio 33</span>
                  </a>
                </li>
                <li className={li34}>
                  <a
                    className="fa-play-circle d-inline-flex align-items-center is-rounded "
                    href={capituloAnime34}
                  >
                    {anime} <span>Episodio 34</span>
                  </a>
                </li>
                <li className={li35}>
                  <a
                    className="fa-play-circle d-inline-flex align-items-center is-rounded "
                    href={capituloAnime35}
                  >
                    {anime} <span>Episodio 35</span>
                  </a>
                </li>
                <li className={li36}>
                  <a
                    className="fa-play-circle d-inline-flex align-items-center is-rounded "
                    href={capituloAnime36}
                  >
                    {anime} <span>Episodio 36</span>
                  </a>
                </li>
                <li className={li37}>
                  <a
                    className="fa-play-circle d-inline-flex align-items-center is-rounded "
                    href={capituloAnime37}
                  >
                    {anime} <span>Episodio 37</span>
                  </a>
                </li>
                <li className={li38}>
                  <a
                    className="fa-play-circle d-inline-flex align-items-center is-rounded "
                    href={capituloAnime38}
                  >
                    {anime} <span>Episodio 38</span>
                  </a>
                </li>
                <li className={li39}>
                  <a
                    className="fa-play-circle d-inline-flex align-items-center is-rounded "
                    href={capituloAnime39}
                  >
                    {anime} <span>Episodio 39</span>
                  </a>
                </li>
                <li className={li40}>
                  <a
                    className="fa-play-circle d-inline-flex align-items-center is-rounded "
                    href={capituloAnime40}
                  >
                    {anime} <span>Episodio 40</span>
                  </a>
                </li>
                <li className={li41}>
                  <a
                    className="fa-play-circle d-inline-flex align-items-center is-rounded "
                    href={capituloAnime41}
                  >
                    {anime} <span>Episodio 41</span>
                  </a>
                </li>
                <li className={li42}>
                  <a
                    className="fa-play-circle d-inline-flex align-items-center is-rounded "
                    href={capituloAnime42}
                  >
                    {anime} <span>Episodio 42</span>
                  </a>
                </li>
                <li className={li43}>
                  <a
                    className="fa-play-circle d-inline-flex align-items-center is-rounded "
                    href={capituloAnime43}
                  >
                    {anime} <span>Episodio 43</span>
                  </a>
                </li>
                <li className={li44}>
                  <a
                    className="fa-play-circle d-inline-flex align-items-center is-rounded "
                    href={capituloAnime44}
                  >
                    {anime} <span>Episodio 44</span>
                  </a>
                </li>
                <li className={li45}>
                  <a
                    className="fa-play-circle d-inline-flex align-items-center is-rounded "
                    href={capituloAnime45}
                  >
                    {anime} <span>Episodio 45</span>
                  </a>
                </li>
                <li className={li46}>
                  <a
                    className="fa-play-circle d-inline-flex align-items-center is-rounded "
                    href={capituloAnime46}
                  >
                    {anime} <span>Episodio 46</span>
                  </a>
                </li>
                <li className={li47}>
                  <a
                    className="fa-play-circle d-inline-flex align-items-center is-rounded "
                    href={capituloAnime47}
                  >
                    {anime} <span>Episodio 47</span>
                  </a>
                </li>
                <li className={li48}>
                  <a
                    className="fa-play-circle d-inline-flex align-items-center is-rounded "
                    href={capituloAnime48}
                  >
                    {anime} <span>Episodio 48</span>
                  </a>
                </li>
                <li className={li49}>
                  <a
                    className="fa-play-circle d-inline-flex align-items-center is-rounded "
                    href={capituloAnime49}
                  >
                    {anime} <span>Episodio 49</span>
                  </a>
                </li>
                <li className={li50}>
                  <a
                    className="fa-play-circle d-inline-flex align-items-center is-rounded "
                    href={capituloAnime50}
                  >
                    {anime} <span>Episodio 50</span>
                  </a>
                </li>
                <li className={li51}>
                  <a
                    className="fa-play-circle d-inline-flex align-items-center is-rounded "
                    href={capituloAnime51}
                  >
                    {anime} <span>Episodio 51</span>
                  </a>
                </li>
                <li className={li52}>
                  <a
                    className="fa-play-circle d-inline-flex align-items-center is-rounded "
                    href={capituloAnime52}
                  >
                    {anime} <span>Episodio 52</span>
                  </a>
                </li>
                <li className={li53}>
                  <a
                    className="fa-play-circle d-inline-flex align-items-center is-rounded "
                    href={capituloAnime53}
                  >
                    {anime} <span>Episodio 53</span>
                  </a>
                </li>
                <li className={li54}>
                  <a
                    className="fa-play-circle d-inline-flex align-items-center is-rounded "
                    href={capituloAnime54}
                  >
                    {anime} <span>Episodio 54</span>
                  </a>
                </li>
                <li className={li55}>
                  <a
                    className="fa-play-circle d-inline-flex align-items-center is-rounded "
                    href={capituloAnime55}
                  >
                    {anime} <span>Episodio 55</span>
                  </a>
                </li>
                <li className={li56}>
                  <a
                    className="fa-play-circle d-inline-flex align-items-center is-rounded "
                    href={capituloAnime56}
                  >
                    {anime} <span>Episodio 56</span>
                  </a>
                </li>
                <li className={li57}>
                  <a
                    className="fa-play-circle d-inline-flex align-items-center is-rounded "
                    href={capituloAnime57}
                  >
                    {anime} <span>Episodio 57</span>
                  </a>
                </li>
                <li className={li58}>
                  <a
                    className="fa-play-circle d-inline-flex align-items-center is-rounded "
                    href={capituloAnime58}
                  >
                    {anime} <span>Episodio 58</span>
                  </a>
                </li>
                <li className={li59}>
                  <a
                    className="fa-play-circle d-inline-flex align-items-center is-rounded "
                    href={capituloAnime59}
                  >
                    {anime} <span>Episodio 59</span>
                  </a>
                </li>
                <li className={li60}>
                  <a
                    className="fa-play-circle d-inline-flex align-items-center is-rounded "
                    href={capituloAnime60}
                  >
                    {anime} <span>Episodio 60</span>
                  </a>
                </li>
                <li className={li61}>
                  <a
                    className="fa-play-circle d-inline-flex align-items-center is-rounded "
                    href={capituloAnime61}
                  >
                    {anime} <span>Episodio 61</span>
                  </a>
                </li>
                <li className={li62}>
                  <a
                    className="fa-play-circle d-inline-flex align-items-center is-rounded "
                    href={capituloAnime62}
                  >
                    {anime} <span>Episodio 62</span>
                  </a>
                </li>
                <li className={li63}>
                  <a
                    className="fa-play-circle d-inline-flex align-items-center is-rounded "
                    href={capituloAnime63}
                  >
                    {anime} <span>Episodio 63</span>
                  </a>
                </li>
                <li className={li64}>
                  <a
                    className="fa-play-circle d-inline-flex align-items-center is-rounded "
                    href={capituloAnime64}
                  >
                    {anime} <span>Episodio 64</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <Disqus />
        </div>
      </section>
    </>
  );
}
