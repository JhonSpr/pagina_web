import AnimePage8 from "../pages/AnimePage8";

export function Page8() {
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
                <a className="dropdown-item" href={"/generos[]=accion"}>
                  Acción
                </a>
              </li>
              <li>
                <a className="dropdown-item" href={"/generos[]=fantasia"}>
                  Fantasia
                </a>
              </li>
              <li>
                <a className="dropdown-item" href={"/generos[]=terror"}>
                  Terror
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/generos[]=juegos">
                  Juegos
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/generos[]=aventura">
                  Aventura
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/generos[]=drama">
                  Drama
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/generos[]=harem">
                  Harem
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/generos[]=seinen">
                  Seinen
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/generos[]=romance">
                  Romance
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/generos[]=samurai">
                  Samurai
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/generos=ciencia-ficcion">
                  Ciencia Ficción
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/generos[]=deportes">
                  Deportes
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/generos[]=escolares">
                  Escolares
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/generos[]=misterio">
                  Misterio
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/generos[]=sei-fi">
                  Sei-Fi
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/generos[]=shounen">
                  Shounen
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/generos[]=ninjas">
                  Ninjas
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/generos[]=dragones">
                  Dragones
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/generos[]=comedia">
                  Comedia
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/generos[]=vampiros">
                  Vampiros
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/generos[]=yaoi">
                  Yaoi
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/generos[]=shouju">
                  Shouju
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/generos[]=parodia">
                  Parodia
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/generos[]=gore">
                  Gore
                </a>
              </li>
              <li>
                <a className="dropdown-item" href={"/generos[]=cyberpunk"}>
                  CyberPunk
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  href={"/generos[]=artes-marciales"}
                >
                  Artes Marciales
                </a>
              </li>
              <li>
                <a className="dropdown-item" href={"/generos[]=militar"}>
                  Militar
                </a>
              </li>
              <li>
                <a className="dropdown-item" href={"/generos[]=isekai"}>
                  Isekai
                </a>
              </li>
              <li>
                <a className="dropdown-item" href={"/generos[]=demonios"}>
                  Demonios
                </a>
              </li>
              <li>
                <a className="dropdown-item" href={"/generos[]=magia"}>
                  Magia
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
              Estado
            </div>
            <ul className="dropdown-menu dropdown-menu-dark">
              <li>
                <a className="dropdown-item" href="/estado[]=finalizado">
                  FINALIZADO
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/en-emision">
                  EN EMISIÓN
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/estado[]=proximamente">
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
                <a className="dropdown-item active" href="/animes">
                  TV ( Predeterminado )
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/animes type[]=ova">
                  OVA
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/animes type[]=pelicula">
                  PELICULA
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
              Años
            </div>
            <ul className="dropdown-menu dropdown-menu-dark contenedor-años">
              <li>
                <a className="dropdown-item" href="/animes year[]=2022">
                  2022
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/animes year[]=2021">
                  2021
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/animes year[]=2020">
                  2020
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/animes year[]=2019">
                  2019
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/animes year[]=2018">
                  2018
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/animes year[]=2017">
                  2017
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/animes year[]=2016">
                  2016
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/animes year[]=2015">
                  2015
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/animes year=2014">
                  2014
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/animes year[]=2013">
                  2013
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/animes year[]=2012">
                  2012
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/animes year[]=2011">
                  2011
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/animes year[]=2010">
                  2010
                </a>
              </li>
            </ul>
          </div>
        </section>
        <div className="list-series">
          <AnimePage8 />
        </div>
      </section>

      <div className="paginacion-contenedor">
        <ul>
          <a href="/animes-page=7" className="anterior">
            Anterior
          </a>
          <li>
            <a href="/animes">1</a>
          </li>
          <li>
            <a href="/animes page=2">2</a>
          </li>
          <li className="">
            <a href="/animes page=3">3</a>
          </li>
          <li>
            <a href="/animes page=4">4</a>
          </li>
          <li>
            <a href="/animes page=5">5</a>
          </li>
          <li>
            <a href="/animes page=6">6</a>
          </li>
          <li>
            <a href="/animes page=7">7</a>
          </li>
          <li className="active">
            <a href="/animes page=8">8</a>
          </li>
          <li>
            <a href="/animes page=9">9</a>
          </li>
          <li>
            <a href="/animes page=10">10</a>
          </li>
          <a href="/animes page=9" className="siguiente">
            Siguiente
          </a>
        </ul>
      </div>
    </div>
  );
}
