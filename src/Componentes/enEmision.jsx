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
        </ul>
      </div>{" "}
      <hr />
      <footer>
        <span
          className="has-text-weight-semibold has-text-orange"
          style={{ display: "inline-block" }}
        >
          <i class="fa-regular fa-copyright"></i> Animekuns
        </span>
        <h1 className="has-text-orange" style={{ display: "inline-block" }}>
          Disfruta del anime Online
        </h1>

        <h3
          style={{
            color: "#363636",
            marginLeft: "20px",
            fontWeight: "100",
          }}
        >
          Ningún vídeo se encuentra alojado en nuestros servidores.
        </h3>
      </footer>
    </>
  );
}
