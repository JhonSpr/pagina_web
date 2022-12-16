/* eslint-disable jsx-a11y/anchor-is-valid */

import { Emision1 } from "../pages/AnimePage1";

export function EmisionesPage1() {
  return (
    <>
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
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Estado
            </div>
            <ul className="dropdown-menu dropdown-menu-dark">
              <li>
                <a className="dropdown-item active" href="/emisiones">
                  EN EMISIÓN
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/proximos">
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
        </section>
        <div className="list-series">
          <Emision1 />
        </div>
      </section>

      <div className="paginacion-contenedor">
        <ul>
          <li className="active">
            <a href="/emisiones">1</a>
          </li>
          <li className="paginacion">
            <a href="/emisiones page=2">2</a>
          </li>
          <li className="paginacion">
            <a href="/emisiones page=3">3</a>
          </li>
          <a href="/emisiones page=2" className="siguiente">
            Siguiente
          </a>
        </ul>
      </div>
    </>
  );
}
