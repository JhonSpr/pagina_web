/* eslint-disable jsx-a11y/anchor-is-valid */

import { NavLink } from "react-router-dom";
import AnimePage1 from "../pages/AnimePage";
import AnimePage2 from "../pages/AnimePage";

export default function Componente1({
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
  return (
    <div>
      <title>Animes Gratis Online HD</title>

      <section className="container items-animes">
        <section className="filtrador">
          <h1>
            Filtrador
            <i className="fa-solid fa-filter"></i>
          </h1>

          <div className="dropdown filter-item">
            <div
              className="btn btn-secondary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Generos
            </div>
            <ul className="dropdown-menu dropdown-menu-dark contenedor-dropdown">
              <li>
                <NavLink className="dropdown-item" to={"/generos=accion"}>
                  Aacción
                </NavLink>
              </li>
              <li>
                <NavLink className="dropdown-item" to={"/generos=fantasia"}>
                  Fantasia
                </NavLink>
              </li>
              <li>
                <NavLink className="dropdown-item" to={"/generos=terror"}>
                  Terror
                </NavLink>
              </li>
              <li>
                <NavLink className="dropdown-item" to="/generos=juegos">
                  Juegos
                </NavLink>
              </li>
              <li>
                <NavLink className="dropdown-item" to="/generos=aventura">
                  Aventura
                </NavLink>
              </li>
              <li>
                <NavLink className="dropdown-item" to="/generos=drama">
                  Drama
                </NavLink>
              </li>
              <li>
                <NavLink className="dropdown-item" to="/generos=harem">
                  Harem
                </NavLink>
              </li>
              <li>
                <NavLink className="dropdown-item" to="/generos=seinen">
                  Seinen
                </NavLink>
              </li>
              <li>
                <NavLink className="dropdown-item" to="/generos=romance">
                  Romance
                </NavLink>
              </li>
              <li>
                <NavLink className="dropdown-item" to="/generos=samurai">
                  Samurai
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="dropdown-item"
                  to="/generos=ciencia-ficcion"
                >
                  Ciencia Ficción
                </NavLink>
              </li>
              <li>
                <NavLink className="dropdown-item" to="/generos=deportes">
                  Deportes
                </NavLink>
              </li>
              <li>
                <NavLink className="dropdown-item" to="/generos=escolares">
                  Escolares
                </NavLink>
              </li>
              <li>
                <NavLink className="dropdown-item" to="/generos=misterio">
                  Misterio
                </NavLink>
              </li>
              <li>
                <NavLink className="dropdown-item" to="/generos=sei-fi">
                  Sei-Fi
                </NavLink>
              </li>
              <li>
                <NavLink className="dropdown-item" to="/generos=shounen">
                  Shounen
                </NavLink>
              </li>
              <li>
                <NavLink className="dropdown-item" to="/generos=ninjas">
                  Ninjas
                </NavLink>
              </li>
              <li>
                <NavLink className="dropdown-item" to="/generos=dragones">
                  Dragones
                </NavLink>
              </li>
              <li>
                <NavLink className="dropdown-item" to="/generos=comedia">
                  Comedia
                </NavLink>
              </li>
              <li>
                <NavLink className="dropdown-item" to="/generos=vampiros">
                  Vampiros
                </NavLink>
              </li>
              <li>
                <NavLink className="dropdown-item" to="/generos=yaoi">
                  Yaoi
                </NavLink>
              </li>
              <li>
                <NavLink className="dropdown-item" to="/generos=shouju">
                  Shouju
                </NavLink>
              </li>
              <li>
                <NavLink className="dropdown-item" to="/generos=parodia">
                  Parodia
                </NavLink>
              </li>
              <li>
                <NavLink className="dropdown-item" to="/generos=gore">
                  Gore
                </NavLink>
              </li>
              <li>
                <NavLink className="dropdown-item" to={"/generos=cyberpunk"}>
                  CyberPunk
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="dropdown-item"
                  to={"/generos=artes-marciales"}
                >
                  Artes Marciales
                </NavLink>
              </li>
              <li>
                <NavLink className="dropdown-item" to={"/generos=militar"}>
                  Militar
                </NavLink>
              </li>
              <li>
                <NavLink className="dropdown-item" to={"/generos=isekai"}>
                  Isekai
                </NavLink>
              </li>
              <li>
                <NavLink className="dropdown-item" to={"/generos=demonios"}>
                  Demonios
                </NavLink>
              </li>
              <li>
                <NavLink className="dropdown-item" to={"/generos=magia"}>
                  Magia
                </NavLink>
              </li>
            </ul>
          </div>

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
                <NavLink className="dropdown-item" to="estado=finalizado">
                  FINALIZADO
                </NavLink>
              </li>
              <li>
                <NavLink className="dropdown-item" to="/en-emision">
                  EN EMISIÓN
                </NavLink>
              </li>
              <li>
                <NavLink className="dropdown-item" to="estado=proximamente">
                  PROXIMAMENTE
                </NavLink>
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
                <NavLink className="dropdown-item active" to="/animes">
                  TV ( Predeterminado )
                </NavLink>
              </li>
              <li>
                <NavLink className="dropdown-item" to="/animes/tipo=ova">
                  OVA
                </NavLink>
              </li>
              <li>
                <NavLink className="dropdown-item" to="/animes/tipo=pelicula">
                  PELICULA
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="dropdown filter-item">
            <div
              className="btn btn-secondary dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Años
            </div>
            <ul className="dropdown-menu dropdown-menu-dark contenedor-años">
              <li>
                <NavLink className="dropdown-item" to="/animes/year=2022">
                  2022
                </NavLink>
              </li>
              <li>
                <NavLink className="dropdown-item" to="/animes/year=2021">
                  2021
                </NavLink>
              </li>
              <li>
                <NavLink className="dropdown-item" to="/animes/year=2020">
                  2020
                </NavLink>
              </li>
              <li>
                <NavLink className="dropdown-item" to="/animes/year=2019">
                  2019
                </NavLink>
              </li>
              <li>
                <NavLink className="dropdown-item" to="/animes/year=2018">
                  2018
                </NavLink>
              </li>
              <li>
                <NavLink className="dropdown-item" to="/animes/year=2017">
                  2017
                </NavLink>
              </li>
              <li>
                <NavLink className="dropdown-item" to="/animes/year=2016">
                  2016
                </NavLink>
              </li>
              <li>
                <NavLink className="dropdown-item" to="/animes/year=2015">
                  2015
                </NavLink>
              </li>
              <li>
                <NavLink className="dropdown-item" to="/animes/year=2014">
                  2014
                </NavLink>
              </li>
              <li>
                <NavLink className="dropdown-item" to="/animes/year=2013">
                  2013
                </NavLink>
              </li>
              <li>
                <NavLink className="dropdown-item" to="/animes/year=2012">
                  2012
                </NavLink>
              </li>
              <li>
                <NavLink className="dropdown-item" to="/animes/year=2011">
                  2011
                </NavLink>
              </li>
              <li>
                <NavLink className="dropdown-item" to="/animes/year=2010">
                  2010
                </NavLink>
              </li>
            </ul>
          </div>
        </section>
        <div className="list-series">
          <AnimePage1 />
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

export function Page2() {
  return (
    <div>
      <title>Animes Gratis Online HD</title>

      <section className="container items-animes">
        <section className="filtrador">
          <h1>
            Filtrador
            <i className="fa-solid fa-filter"></i>
          </h1>

          <div className="dropdown filter-item">
            <div
              className="btn btn-secondary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Generos
            </div>
            <ul className="dropdown-menu dropdown-menu-dark contenedor-dropdown">
              <li>
                <NavLink className="dropdown-item" to={"/generos=accion"}>
                  Aacción
                </NavLink>
              </li>
              <li>
                <NavLink className="dropdown-item" to={"/generos=fantasia"}>
                  Fantasia
                </NavLink>
              </li>
              <li>
                <NavLink className="dropdown-item" to={"/generos=terror"}>
                  Terror
                </NavLink>
              </li>
              <li>
                <NavLink className="dropdown-item" to="/generos=juegos">
                  Juegos
                </NavLink>
              </li>
              <li>
                <NavLink className="dropdown-item" to="/generos=aventura">
                  Aventura
                </NavLink>
              </li>
              <li>
                <NavLink className="dropdown-item" to="/generos=drama">
                  Drama
                </NavLink>
              </li>
              <li>
                <NavLink className="dropdown-item" to="/generos=harem">
                  Harem
                </NavLink>
              </li>
              <li>
                <NavLink className="dropdown-item" to="/generos=seinen">
                  Seinen
                </NavLink>
              </li>
              <li>
                <NavLink className="dropdown-item" to="/generos=romance">
                  Romance
                </NavLink>
              </li>
              <li>
                <NavLink className="dropdown-item" to="/generos=samurai">
                  Samurai
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="dropdown-item"
                  to="/generos=ciencia-ficcion"
                >
                  Ciencia Ficción
                </NavLink>
              </li>
              <li>
                <NavLink className="dropdown-item" to="/generos=deportes">
                  Deportes
                </NavLink>
              </li>
              <li>
                <NavLink className="dropdown-item" to="/generos=escolares">
                  Escolares
                </NavLink>
              </li>
              <li>
                <NavLink className="dropdown-item" to="/generos=misterio">
                  Misterio
                </NavLink>
              </li>
              <li>
                <NavLink className="dropdown-item" to="/generos=sei-fi">
                  Sei-Fi
                </NavLink>
              </li>
              <li>
                <NavLink className="dropdown-item" to="/generos=shounen">
                  Shounen
                </NavLink>
              </li>
              <li>
                <NavLink className="dropdown-item" to="/generos=ninjas">
                  Ninjas
                </NavLink>
              </li>
              <li>
                <NavLink className="dropdown-item" to="/generos=dragones">
                  Dragones
                </NavLink>
              </li>
              <li>
                <NavLink className="dropdown-item" to="/generos=comedia">
                  Comedia
                </NavLink>
              </li>
              <li>
                <NavLink className="dropdown-item" to="/generos=vampiros">
                  Vampiros
                </NavLink>
              </li>
              <li>
                <NavLink className="dropdown-item" to="/generos=yaoi">
                  Yaoi
                </NavLink>
              </li>
              <li>
                <NavLink className="dropdown-item" to="/generos=shouju">
                  Shouju
                </NavLink>
              </li>
              <li>
                <NavLink className="dropdown-item" to="/generos=parodia">
                  Parodia
                </NavLink>
              </li>
              <li>
                <NavLink className="dropdown-item" to="/generos=gore">
                  Gore
                </NavLink>
              </li>
              <li>
                <NavLink className="dropdown-item" to={"/generos=cyberpunk"}>
                  CyberPunk
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="dropdown-item"
                  to={"/generos=artes-marciales"}
                >
                  Artes Marciales
                </NavLink>
              </li>
              <li>
                <NavLink className="dropdown-item" to={"/generos=militar"}>
                  Militar
                </NavLink>
              </li>
              <li>
                <NavLink className="dropdown-item" to={"/generos=isekai"}>
                  Isekai
                </NavLink>
              </li>
              <li>
                <NavLink className="dropdown-item" to={"/generos=demonios"}>
                  Demonios
                </NavLink>
              </li>
              <li>
                <NavLink className="dropdown-item" to={"/generos=magia"}>
                  Magia
                </NavLink>
              </li>
            </ul>
          </div>

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
                <NavLink className="dropdown-item" to="estado=finalizado">
                  FINALIZADO
                </NavLink>
              </li>
              <li>
                <NavLink className="dropdown-item" to="/en-emision">
                  EN EMISIÓN
                </NavLink>
              </li>
              <li>
                <NavLink className="dropdown-item" to="estado=proximamente">
                  PROXIMAMENTE
                </NavLink>
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
                <NavLink className="dropdown-item active" to="/animes">
                  TV ( Predeterminado )
                </NavLink>
              </li>
              <li>
                <NavLink className="dropdown-item" to="/animes/tipo=ova">
                  OVA
                </NavLink>
              </li>
              <li>
                <NavLink className="dropdown-item" to="/animes/tipo=pelicula">
                  PELICULA
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="dropdown filter-item">
            <div
              className="btn btn-secondary dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Años
            </div>
            <ul className="dropdown-menu dropdown-menu-dark contenedor-años">
              <li>
                <NavLink className="dropdown-item" to="/animes/year=2022">
                  2022
                </NavLink>
              </li>
              <li>
                <NavLink className="dropdown-item" to="/animes/year=2021">
                  2021
                </NavLink>
              </li>
              <li>
                <NavLink className="dropdown-item" to="/animes/year=2020">
                  2020
                </NavLink>
              </li>
              <li>
                <NavLink className="dropdown-item" to="/animes/year=2019">
                  2019
                </NavLink>
              </li>
              <li>
                <NavLink className="dropdown-item" to="/animes/year=2018">
                  2018
                </NavLink>
              </li>
              <li>
                <NavLink className="dropdown-item" to="/animes/year=2017">
                  2017
                </NavLink>
              </li>
              <li>
                <NavLink className="dropdown-item" to="/animes/year=2016">
                  2016
                </NavLink>
              </li>
              <li>
                <NavLink className="dropdown-item" to="/animes/year=2015">
                  2015
                </NavLink>
              </li>
              <li>
                <NavLink className="dropdown-item" to="/animes/year=2014">
                  2014
                </NavLink>
              </li>
              <li>
                <NavLink className="dropdown-item" to="/animes/year=2013">
                  2013
                </NavLink>
              </li>
              <li>
                <NavLink className="dropdown-item" to="/animes/year=2012">
                  2012
                </NavLink>
              </li>
              <li>
                <NavLink className="dropdown-item" to="/animes/year=2011">
                  2011
                </NavLink>
              </li>
              <li>
                <NavLink className="dropdown-item" to="/animes/year=2010">
                  2010
                </NavLink>
              </li>
            </ul>
          </div>
        </section>
        <div className="list-series">
          <AnimePage2 />
        </div>
      </section>

      <div className="paginacion-contenedor">
        <ul>
          <a href="/animes" className="anterior">
            Anterior
          </a>
          <li className="paginacion">
            <a href="/animes">1</a>
          </li>
          <li className="paginacion">
            <a href="/animes-2">2</a>
          </li>
          <li className="paginacion">
            <a href="/animes-3">3</a>
          </li>
          <li className="paginacion">
            <a href="/animes-4">4</a>
          </li>
          <li className="paginacion">
            <a href="/animes-5">5</a>
          </li>
          <li className="paginacion">
            <a href="/animes-6">6</a>
          </li>
          <li className="paginacion">
            <a href="/animes-7">7</a>
          </li>
          <li className="paginacion">
            <a href="/animes-8">8</a>
          </li>
          <li className="paginacion">
            <a href="/animes-9">9</a>
          </li>
          <li className="paginacion">
            <a href="/animes-10">10</a>
          </li>
          <a href="/animes-3" className="siguiente">
            Siguiente
          </a>
        </ul>
      </div>
    </div>
  );
}
