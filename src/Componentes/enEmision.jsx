/* eslint-disable jsx-a11y/anchor-is-valid */

import { Emision1 } from "../pages/AnimePage1";
import { Filter } from "./Elements/Filter";

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

          <Filter />
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
