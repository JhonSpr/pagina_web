/* eslint-disable jsx-a11y/anchor-is-valid */
import { useAuth0 } from "@auth0/auth0-react";
import img from "../Data.json";
import BookData from "../Data.json";
import { Alertas } from "../index";
import { LoginButton } from "../login";
import LogoutButton from "../logout";
import Profile from "../Perfil/perfil";
import SearchBar from "../searchComponent";
export function Filter({
  finalizado,
  enEmision,
  proximamente,
  year1,
  year2,
  year3,
  year4,
  year5,
  year6,
  year7,
  year8,
  year9,
  year10,
  year11,
  year12,
  year13,
  year14,
  year15,
  year16,
  year17,
  year18,
  year19,
  year20,
  year21,
  year22,
  year23,
  year24,
  classpag1,
  classpag2,
  classpag3,
  classpag4,
  classpag5,
  classpag6,
  classpag7,
  classpag8,
  classpag9,
  classpag10,
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
  img14,
  img15,
  img16,
  img17,
  img18,
  img19,
  img20,
  img21,
  img22,
  img23,
  img24,
  anime1,
  anime2,
  anime3,
  anime4,
  anime5,
  anime6,
  anime7,
  anime8,
  anime9,
  anime10,
  anime11,
  anime12,
  anime13,
  anime14,
  anime15,
  anime16,
  anime17,
  anime18,
  anime19,
  anime20,
  anime21,
  anime22,
  anime23,
  anime24,
  primero,
  segundo,
  tercero,
  cuarto,
  quinto,
  sexto,
  septimo,
  octavo,
  noveno,
  decimo,
  onceavo,
  classpag11,
  tv,
  emision,
  pag1,
  pag2,
  pag3,
  pag4,
  pag5,
  pag6,
  pag7,
  pag8,
  pag9,
  pag10,
  pag11,
  siguiente,
  anterior,
  classEmision1,
  classEmision2,
  classEmision3,
  classEmision4,
  classEmision5,
  classEmision6,
  classEmision7,
  classEmision8,
  classEmision9,
  classEmision10,
  classEmision11,
  classEmision12,
  classEmision13,
  classEmision14,
  classEmision15,
  classEmision16,
  classEmision17,
  classEmision18,
  classEmision19,
  classEmision20,
  classEmision21,
  classEmision22,
  classEmision23,
  classEmision24,
  href1,
  href2,
  href3,
  href4,
  href5,
  href6,
  href7,
  href8,
  href9,
  href10,
  href11,
  href12,
  href13,
  href14,
  href15,
  href16,
  href17,
  href18,
  href19,
  href20,
  href21,
  href22,
  href23,
  href24,
  pagAnterior,
  pagSiguiente,
}) {
  const { isAuthenticated } = useAuth0();

  return (
    <div>
      <title>Animes Gratis Online HD</title>
      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand item-nav logo-cont" href="/">
            <h1 className="letraA">A</h1> <h2 className="letraN">n</h2>{" "}
            <h2 className="letraI">i</h2> <h2 className="letraM">m</h2>{" "}
            <h2 className="letraE">e</h2> <h2 className="letraK">k</h2>{" "}
            <h2 className="letraU">u</h2> <h2 className="letraN">n</h2>
          </a>

          <div
            className=" bg-dark"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
          >
            <a
              role="button"
              className="navbar-burger burger"
              aria-label="menu"
              aria-expanded="false"
              data-target="navbarText"
            >
              <span className="line1"></span>
              <span className="line2"></span>
              <span className="line3"></span>
            </a>
          </div>
          <div
            className="collapse navbar-collapse contenedor-ul"
            id="navbarText"
          >
            <ul className="navbar-nav">
              <Profile />

              {isAuthenticated ? (
                <>
                  <LogoutButton />
                </>
              ) : (
                <LoginButton />
              )}
              <li className="navbar-item mobile item-nav">
                <a className="nav-link item-nav" href="/">
                  Inicio{" "}
                </a>
              </li>
              <li className="navbar-item item-nav">
                <a className="nav-link item-nav" href="/animes">
                  Animes{" "}
                </a>
              </li>
              <li className="navbar-item item-nav">
                <a className="nav-link item-nav" href="/en-emision">
                  En Emision
                </a>
              </li>

              <Alertas />
              <li className="navbar-item item-nav">
                <a className="nav-link item-nav" href="/ovas">
                  Ovas
                </a>
              </li>

              <SearchBar
                placeholder={"Buscar animes..."}
                data={BookData}
                imagenSearch={img}
              />
            </ul>
          </div>
        </div>
      </nav>

      <section className="container items-animes">
        <section className="filtrador">
          <h1>
            Filtrador
            <i className="fa-solid fa-filter"></i>
          </h1>

          <div className="dropdown filter-item">
            <div
              className="btn btn-secondary dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Estado
            </div>
            <ul className="dropdown-menu dropdown-menu-dark">
              <li>
                <a className={finalizado} href="estado=finalizado">
                  FINALIZADO
                </a>
              </li>
              <li>
                <a className={enEmision} href="estado=en-emision">
                  EN EMISIÓN
                </a>
              </li>
              <li>
                <a className={proximamente} href="estado=proximamente">
                  PROXIMAMENTE
                </a>
              </li>
            </ul>
          </div>
          <div className="dropdown filter-item">
            <div
              className="btn btn-secondary dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Tipo
            </div>
            <ul className="dropdown-menu dropdown-menu-dark">
              <li>
                <a className="dropdown-item" href="/animes">
                  TV
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/animes/tipo=ova">
                  OVA
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/animes/tipo=pelicula">
                  PELICULA
                </a>
              </li>
            </ul>
          </div>
        </section>
        <div className="list-series">
          <article className="serie-card" title={anime1}>
            <figure className=" image overarchingdiv2">
              <a href={href1}>
                <img src={img1} alt={anime1} />
                <div className="overlay-dark"></div>
                <div className="hoveroverlay">
                  <i className="fas fa-play pgnav activehov"></i>
                </div>
              </a>
              <span className="tag year is-dark">{year1}</span>
              <span className="tag is-danger type">{tv}</span>
              <span className={classEmision1}>{emision}</span>
              <div className="title">
                <h3>
                  <a
                    href={href1}
                    className="has-text-orange has-text-weight-semibold has-text-centered is-size-6"
                  >
                    {anime1}
                  </a>
                </h3>
              </div>
            </figure>
          </article>
          <article className="serie-card" title={anime2}>
            <figure className="image overarchingdiv2">
              <a href={href2}>
                <img src={img2} alt={anime2} />
                <div className="overlay-dark"></div>
                <div className="hoveroverlay">
                  <i className="fas fa-play pgnav activehov"></i>
                </div>
              </a>
              <span className="tag year is-dark">{year2}</span>
              <span className="tag is-danger type">{tv}</span>
              <span className={classEmision2}>{emision}</span>
              <div className="title">
                <h3>
                  <a
                    href={href2}
                    className="has-text-orange has-text-weight-semibold has-text-centered is-size-6"
                  >
                    {anime2}
                  </a>
                </h3>
              </div>
            </figure>
          </article>
          <article className="serie-card" title={anime3}>
            <figure className="image overarchingdiv2">
              <a href={href3}>
                <img src={img3} alt={anime3} />
                <div className="overlay-dark"></div>
                <div className="hoveroverlay">
                  <i className="fas fa-play pgnav activehov"></i>
                </div>
              </a>
              <span className="tag year is-dark">{year3}</span>
              <span className="tag is-danger type">{tv}</span>
              <span className={classEmision3}>{emision}</span>
              <div className="title">
                <h3>
                  <a
                    href={href3}
                    className="has-text-orange has-text-weight-semibold has-text-centered is-size-6"
                  >
                    {anime3}
                  </a>
                </h3>
              </div>
            </figure>
          </article>
          <article className="serie-card" title={anime4}>
            <figure className="image overarchingdiv2">
              <a href={href4}>
                <img src={img4} alt={anime4} />
                <div className="overlay-dark"></div>
                <div className="hoveroverlay">
                  <i className="fas fa-play pgnav activehov"></i>
                </div>
              </a>
              <span className="tag year is-dark">{year4}</span>
              <span className="tag is-danger type">{tv}</span>
              <span className={classEmision4}>{emision}</span>
              <div className="title">
                <h3>
                  <a
                    href={href4}
                    className="has-text-orange has-text-weight-semibold has-text-centered is-size-6"
                  >
                    {anime4}
                  </a>
                </h3>
              </div>
            </figure>
          </article>
          <article className="serie-card" title={anime5}>
            <figure className="image overarchingdiv2">
              <a href={href5}>
                <img src={img5} alt={anime5} />
                <div className="overlay-dark"></div>
                <div className="hoveroverlay">
                  <i className="fas fa-play pgnav activehov"></i>
                </div>
              </a>
              <span className="tag year is-dark">{year5}</span>
              <span className="tag is-danger type">{tv}</span>
              <span className={classEmision5}>{emision}</span>
              <div className="title">
                <h3>
                  <a
                    href={href5}
                    className="has-text-orange has-text-weight-semibold has-text-centered is-size-6"
                  >
                    {anime5}
                  </a>
                </h3>
              </div>
            </figure>
          </article>
          <article className="serie-card" title={anime6}>
            <figure className="image overarchingdiv2">
              <a href={href6}>
                <img src={img6} alt={anime6} />
                <div className="overlay-dark"></div>
                <div className="hoveroverlay">
                  <i className="fas fa-play pgnav activehov"></i>
                </div>
              </a>
              <span className="tag year is-dark">{year6}</span>
              <span className="tag is-danger type">{tv}</span>
              <span className={classEmision6}>{emision}</span>
              <div className="title">
                <h3>
                  <a
                    href={href6}
                    className="has-text-orange has-text-weight-semibold has-text-centered is-size-6"
                  >
                    {anime6}
                  </a>
                </h3>
              </div>
            </figure>
          </article>
          <article className="serie-card" title={anime7}>
            <figure className="image overarchingdiv2">
              <a href={href7}>
                <img src={img7} alt={anime7} />
                <div className="overlay-dark"></div>
                <div className="hoveroverlay">
                  <i className="fas fa-play pgnav activehov"></i>
                </div>
              </a>
              <span className="tag year is-dark">{year7}</span>
              <span className="tag is-danger type">{tv}</span>
              <span className={classEmision7}>{emision}</span>
              <div className="title">
                <h3>
                  <a
                    href={href7}
                    className="has-text-orange has-text-weight-semibold has-text-centered is-size-6"
                  >
                    {anime7}
                  </a>
                </h3>
              </div>
            </figure>
          </article>
          <article className="serie-card" title={anime8}>
            <figure className="image overarchingdiv2">
              <a href={href8}>
                <img src={img8} alt={anime8} />
                <div className="overlay-dark"></div>
                <div className="hoveroverlay">
                  <i className="fas fa-play pgnav activehov"></i>
                </div>
              </a>
              <span className="tag year is-dark">{year8}</span>
              <span className="tag is-danger type">{tv}</span>
              <span className={classEmision8}>{emision}</span>
              <div className="title">
                <h3>
                  <a
                    href={href8}
                    className="has-text-orange has-text-weight-semibold has-text-centered is-size-6"
                  >
                    {anime8}
                  </a>
                </h3>
              </div>
            </figure>
          </article>
          <article className="serie-card" title={anime9}>
            <figure className="image overarchingdiv2">
              <a href={href9}>
                <img src={img9} alt={anime9} />
                <div className="overlay-dark"></div>
                <div className="hoveroverlay">
                  <i className="fas fa-play pgnav activehov"></i>
                </div>
              </a>
              <span className="tag year is-dark">{year9}</span>
              <span className="tag is-danger type">{tv}</span>
              <span className={classEmision9}>{emision}</span>
              <div className="title">
                <h3>
                  <a
                    href={href9}
                    className="has-text-orange has-text-weight-semibold has-text-centered is-size-6"
                  >
                    {anime9}
                  </a>
                </h3>
              </div>
            </figure>
          </article>
          <article className="serie-card" title={anime10}>
            <figure className="image overarchingdiv2">
              <a href={href10}>
                <img src={img10} alt={anime10} />
                <div className="overlay-dark"></div>
                <div className="hoveroverlay">
                  <i className="fas fa-play pgnav activehov"></i>
                </div>
              </a>
              <span className="tag year is-dark">{year10}</span>
              <span className="tag is-danger type">{tv}</span>
              <span className={classEmision10}>{emision}</span>
              <div className="title">
                <h3>
                  <a
                    href={href10}
                    className="has-text-orange has-text-weight-semibold has-text-centered is-size-6"
                  >
                    {anime10}
                  </a>
                </h3>
              </div>
            </figure>
          </article>
          <article className="serie-card" title={anime11}>
            <figure className="image overarchingdiv2">
              <a href={href11}>
                <img src={img11} alt={anime11} />
                <div className="overlay-dark"></div>
                <div className="hoveroverlay">
                  <i className="fas fa-play pgnav activehov"></i>
                </div>
              </a>
              <span className="tag year is-dark">{year11}</span>
              <span className="tag is-danger type">{tv}</span>
              <span className={classEmision11}>{emision}</span>
              <div className="title">
                <h3>
                  <a
                    href={href11}
                    className="has-text-orange has-text-weight-semibold has-text-centered is-size-6"
                  >
                    {anime11}
                  </a>
                </h3>
              </div>
            </figure>
          </article>
          <article className="serie-card" title={anime12}>
            <figure className="image overarchingdiv2">
              <a href={href12}>
                <img src={img12} alt={anime12} />
                <div className="overlay-dark"></div>
                <div className="hoveroverlay">
                  <i className="fas fa-play pgnav activehov"></i>
                </div>
              </a>
              <span className="tag year is-dark">{year12}</span>
              <span className="tag is-danger type">{tv}</span>
              <span className={classEmision12}>{emision}</span>
              <div className="title">
                <h3>
                  <a
                    href={href12}
                    className="has-text-orange has-text-weight-semibold has-text-centered is-size-6"
                  >
                    {anime12}
                  </a>
                </h3>
              </div>
            </figure>
          </article>
          <article className="serie-card" title={anime13}>
            <figure className="image overarchingdiv2">
              <a href={href13}>
                <img src={img13} alt={anime13} />
                <div className="overlay-dark"></div>
                <div className="hoveroverlay">
                  <i className="fas fa-play pgnav activehov"></i>
                </div>
              </a>
              <span className="tag year is-dark">{year13}</span>
              <span className="tag is-danger type">{tv}</span>
              <span className={classEmision13}>{emision}</span>

              <div className="title">
                <h3>
                  <a
                    href={href13}
                    className="has-text-orange has-text-weight-semibold has-text-centered is-size-6"
                  >
                    {anime13}
                  </a>
                </h3>
              </div>
            </figure>
          </article>
          <article className="serie-card" title={anime14}>
            <figure className="image overarchingdiv2">
              <a href={href14}>
                <img src={img14} alt={anime14} />
                <div className="overlay-dark"></div>
                <div className="hoveroverlay">
                  <i className="fas fa-play pgnav activehov"></i>
                </div>
              </a>
              <span className="tag year is-dark">{year14}</span>
              <span className="tag is-danger type">{tv}</span>
              <span className={classEmision14}>{emision}</span>

              <div className="title">
                <h3>
                  <a
                    href={href14}
                    className="has-text-orange has-text-weight-semibold has-text-centered is-size-6"
                  >
                    {anime14}
                  </a>
                </h3>
              </div>
            </figure>
          </article>
          <article className="serie-card" title={anime15}>
            <figure className="image overarchingdiv2">
              <a href={href15}>
                <img src={img15} alt={anime15} />
                <div className="overlay-dark"></div>
                <div className="hoveroverlay">
                  <i className="fas fa-play pgnav activehov"></i>
                </div>
              </a>
              <span className="tag year is-dark">{year15}</span>
              <span className="tag is-danger type">{tv}</span>
              <span className={classEmision15}>{emision}</span>
              <div className="title">
                <h3>
                  <a
                    href={href15}
                    className="has-text-orange has-text-weight-semibold has-text-centered is-size-6"
                  >
                    {anime15}
                  </a>
                </h3>
              </div>
            </figure>
          </article>
          <article className="serie-card" title={anime16}>
            <figure className="image overarchingdiv2">
              <a href={href16}>
                <img src={img16} alt={anime16} />
                <div className="overlay-dark"></div>
                <div className="hoveroverlay">
                  <i className="fas fa-play pgnav activehov"></i>
                </div>
              </a>
              <span className="tag year is-dark">{year16}</span>
              <span className="tag is-danger type">{tv}</span>
              <span className={classEmision16}>{emision}</span>
              <div className="title">
                <h3>
                  <a
                    href={href16}
                    className="has-text-orange has-text-weight-semibold has-text-centered is-size-6"
                  >
                    {anime16}
                  </a>
                </h3>
              </div>
            </figure>
          </article>
          <article className="serie-card" title={anime17}>
            <figure className="image overarchingdiv2">
              <a href={href17}>
                <img src={img17} alt={anime17} />
                <div className="overlay-dark"></div>
                <div className="hoveroverlay">
                  <i className="fas fa-play pgnav activehov"></i>
                </div>
              </a>
              <span className="tag year is-dark">{year17}</span>
              <span className="tag is-danger type">{tv}</span>
              <span className={classEmision17}>{emision}</span>

              <div className="title">
                <h3>
                  <a
                    href={href17}
                    className="has-text-orange has-text-weight-semibold has-text-centered is-size-6"
                  >
                    {anime17}
                  </a>
                </h3>
              </div>
            </figure>
          </article>
          <article className="serie-card" title={anime18}>
            <figure className="image overarchingdiv2">
              <a href={href18}>
                <img src={img18} alt={anime18} />
                <div className="overlay-dark"></div>
                <div className="hoveroverlay">
                  <i className="fas fa-play pgnav activehov"></i>
                </div>
              </a>
              <span className="tag year is-dark">{year18}</span>
              <span className="tag is-danger type">{tv}</span>
              <span className={classEmision18}>{emision}</span>
              <div className="title">
                <h3>
                  <a
                    href={href18}
                    className="has-text-orange has-text-weight-semibold has-text-centered is-size-6"
                  >
                    {anime18}
                  </a>
                </h3>
              </div>
            </figure>
          </article>
          <article className="serie-card" title={anime19}>
            <figure className="image overarchingdiv2">
              <a href={href19}>
                <img src={img19} alt={anime19} />
                <div className="overlay-dark"></div>
                <div className="hoveroverlay">
                  <i className="fas fa-play pgnav activehov"></i>
                </div>
              </a>
              <span className="tag year is-dark">{year19}</span>
              <span className="tag is-danger type">{tv}</span>
              <span className={classEmision19}>{emision}</span>
              <div className="title">
                <h3>
                  <a
                    href={href19}
                    className="has-text-orange has-text-weight-semibold has-text-centered is-size-6"
                  >
                    {anime19}
                  </a>
                </h3>
              </div>
            </figure>
          </article>
          <article className="serie-card" title={anime20}>
            <figure className="image overarchingdiv2">
              <a href={href20}>
                <img src={img20} alt={anime20} />
                <div className="overlay-dark"></div>
                <div className="hoveroverlay">
                  <i className="fas fa-play pgnav activehov"></i>
                </div>
              </a>
              <span className="tag year is-dark">{year20}</span>
              <span className="tag is-danger type">{tv}</span>
              <span className={classEmision20}>{emision}</span>
              <div className="title">
                <h3>
                  <a
                    href={href20}
                    className="has-text-orange has-text-weight-semibold has-text-centered is-size-6"
                  >
                    {anime20}
                  </a>
                </h3>
              </div>
            </figure>
          </article>
          <article className="serie-card" title={anime21}>
            <figure className="image overarchingdiv2">
              <a href={href21}>
                <img src={img21} alt={anime21} />
                <div className="overlay-dark"></div>
                <div className="hoveroverlay">
                  <i className="fas fa-play pgnav activehov"></i>
                </div>
              </a>
              <span className="tag year is-dark">{year21}</span>
              <span className="tag is-danger type">{tv}</span>
              <span className={classEmision21}>{emision}</span>
              <div className="title">
                <h3>
                  <a
                    href={href21}
                    className="has-text-orange has-text-weight-semibold has-text-centered is-size-6"
                  >
                    {anime21}
                  </a>
                </h3>
              </div>
            </figure>
          </article>
          <article className="serie-card" title={anime22}>
            <figure className="image overarchingdiv2">
              <a href={href22}>
                <img src={img22} alt={anime22} />
                <div className="overlay-dark"></div>
                <div className="hoveroverlay">
                  <i className="fas fa-play pgnav activehov"></i>
                </div>
              </a>
              <span className="tag year is-dark">{year22}</span>
              <span className="tag is-danger type">{tv}</span>
              <span className={classEmision22}>{emision}</span>
              <div className="title">
                <h3>
                  <a
                    href={href22}
                    className="has-text-orange has-text-weight-semibold has-text-centered is-size-6"
                  >
                    {anime22}
                  </a>
                </h3>
              </div>
            </figure>
          </article>
          <article className="serie-card" title={anime23}>
            <figure className="image overarchingdiv2">
              <a href={href23}>
                <img src={img23} alt={anime23} />
                <div className="overlay-dark"></div>
                <div className="hoveroverlay">
                  <i className="fas fa-play pgnav activehov"></i>
                </div>
              </a>
              <span className="tag year is-dark">{year23}</span>
              <span className="tag is-danger type">{tv}</span>
              <span className={classEmision23}>{emision}</span>
              <div className="title">
                <h3>
                  <a
                    href={href23}
                    className="has-text-orange has-text-weight-semibold has-text-centered is-size-6"
                  >
                    {anime23}
                  </a>
                </h3>
              </div>
            </figure>
          </article>
          <article className="serie-card" title={anime24}>
            <figure className="image overarchingdiv2">
              <a href={href24}>
                <img src={img24} alt={anime24} />
                <div className="overlay-dark"></div>
                <div className="hoveroverlay">
                  <i className="fas fa-play pgnav activehov"></i>
                </div>
              </a>
              <span className="tag year is-dark">{year24}</span>
              <span className="tag is-danger type">{tv}</span>
              <span className={classEmision24}>{emision}</span>
              <div className="title">
                <h3>
                  <a
                    href={href24}
                    className="has-text-orange has-text-weight-semibold has-text-centered is-size-6"
                  >
                    {anime24}
                  </a>
                </h3>
              </div>
            </figure>
          </article>
        </div>
      </section>

      <div className="paginacion-contenedor">
        <ul>
          <a href={pagAnterior} className="anterior">
            {anterior}
          </a>
          <li className={classpag1}>
            <a href={pag1}>{primero}</a>
          </li>
          <li className={classpag2}>
            <a href={pag2}>{segundo}</a>
          </li>
          <li className={classpag3}>
            <a href={pag3}>{tercero}</a>
          </li>
          <li className={classpag4}>
            <a href={pag4}>{cuarto}</a>
          </li>
          <li className={classpag5}>
            <a href={pag5}>{quinto}</a>
          </li>
          <li className={classpag6}>
            <a href={pag6}>{sexto}</a>
          </li>
          <li className={classpag7}>
            <a href={pag7}>{septimo}</a>
          </li>
          <li className={classpag8}>
            <a href={pag8}>{octavo}</a>
          </li>
          <li className={classpag9}>
            <a href={pag9}>{noveno}</a>
          </li>
          <li className={classpag10}>
            <a href={pag10}>{decimo}</a>
          </li>
          <li className={classpag11}>
            <a href={pag11}>{onceavo}</a>
          </li>
          <a href={pagSiguiente} className="siguiente">
            {" "}
            {siguiente}{" "}
          </a>
        </ul>
      </div>
    </div>
  );
}
