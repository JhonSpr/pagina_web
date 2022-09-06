import { NavLink } from "react-router-dom";
import AnimePage4 from "../pages/AnimePage4";

export function Page4() {
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
          <AnimePage4 />
        </div>
      </section>

      <div className="paginacion-contenedor">
        <ul>
          <a href="/animes-page=3" className="anterior">
            Anterior
          </a>
          <li className="paginacion">
            <a href="/animes">1</a>
          </li>
          <li className="paginacion">
            <a href="/animes-page=2">2</a>
          </li>
          <li className="">
            <a href="/animes-page=3">3</a>
          </li>
          <li className="active">
            <a href="/animes-page=4">4</a>
          </li>
          <li className="paginacion">
            <a href="/animes-page=5">5</a>
          </li>
          <li className="paginacion">
            <a href="/animes-page=6">6</a>
          </li>
          <li className="paginacion">
            <a href="/animes-page=7">7</a>
          </li>
          <li className="paginacion">
            <a href="/animes-page=8">8</a>
          </li>
          <li className="paginacion">
            <a href="/animes-page=9">9</a>
          </li>
          <li className="paginacion">
            <a href="/animes-page=10">10</a>
          </li>
          <a href="/animes-page=5" className="siguiente">
            Siguiente
          </a>
        </ul>
      </div>
    </div>
  );
}
