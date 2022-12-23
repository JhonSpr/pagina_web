/* eslint-disable jsx-a11y/anchor-is-valid */
import AnimePage1 from "../pages/AnimePage1";
import { Filter } from "./Elements/Filter";

export function Page1() {
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
          <AnimePage1 />
        </div>
      </section>
      <div className="paginacion-contenedor">
        <ul>
          <li className="active">
            <a href="/animes">1</a>
          </li>
          <li className="paginacion">
            <a href="/animes page=2">2</a>
          </li>
          <li className="paginacion">
            <a href="/animes page=3">3</a>
          </li>
          <li className="paginacion">
            <a href="/animes page=4">4</a>
          </li>
          <li className="paginacion">
            <a href="/animes page=5">5</a>
          </li>
          <li className="paginacion">
            <a href="/animes page=6">6</a>
          </li>
          <li className="paginacion">
            <a href="/animes page=7">7</a>
          </li>

          <a href="/animes page=2" className="siguiente">
            »
          </a>
        </ul>
      </div>
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
