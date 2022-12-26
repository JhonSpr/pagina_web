import Footer from "../Colletion/Footer";
import { Filter } from "./Elements/Filter";
import { Page1, Page2 } from "./Testing";
export default function Testing() {
  return (
    <>
      <section className="container items-animes">
        <section className="filtrador">
          <h1>
            Filtrador
            <i className="fa-solid fa-filter"></i>
          </h1>

          <Filter />
        </section>
        <div className="list-series">
          <Page1 />
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
      <Footer />
    </>
  );
}
export function Pagina2() {
  return (
    <section className="container items-animes">
      <section className="filtrador">
        <h1>
          Filtrador
          <i className="fa-solid fa-filter"></i>
        </h1>

        <Filter />
      </section>
      <div className="list-series">
        <Page2 />
      </div>{" "}
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
      <Footer />
    </section>
  );
}
