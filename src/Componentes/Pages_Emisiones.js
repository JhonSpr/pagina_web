/* eslint-disable no-unused-vars */

import Footer from "../Colletion/Footer";
import { Filter } from "./Elements/Filter";
import {
  Page1,
  Page2,
  Page3,
  Page4,
  Page5,
  Page6,
  Page7,
} from "./Elements/Paginas_Emisiones";

export function Pagina1Emisiones() {
  return (
    <>
      <title>Animekuns - Animes online HD</title>
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
            <a href="/en-emision">1</a>
          </li>
          {/* <li>
            <a href="/en-emision page=2">2</a>
          </li>
          <li>
            <a href="/en-emision page=3">3</a>
          </li>
          <li>
            <a href="/en-emision page=4">4</a>
          </li>
          <li>
            <a href="/en-emision page=5">5</a>
          </li>
          <li>
            <a href="/en-emision page=6">6</a>
          </li>
          <li>
            <a href="/en-emision page=7">7</a>
          </li>

          <a href="/en-emision page=2" className="siguiente">
            »
          </a> */}
        </ul>
      </div>
      <hr />
      <Footer />
    </>
  );
}
export function Pagina2Emisiones() {
  return (
    <>
      <title>Animekuns - Animes online HD</title>
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
      </section>{" "}
      <div className="paginacion-contenedor">
        <ul>
          <a href="/en-emision" className="anterior">
            «
          </a>
          <li>
            <a href="/en-emision">1</a>
          </li>
          <li className="active">
            <a href="/en-emision page=2">2</a>
          </li>
          <li>
            <a href="/en-emision page=3">3</a>
          </li>
          <li>
            <a href="/en-emision page=4">4</a>
          </li>
          <li>
            <a href="/en-emision page=5">5</a>
          </li>
          <li>
            <a href="/en-emision page=6">6</a>
          </li>
          <li>
            <a href="/en-emision page=7">7</a>
          </li>

          <a href="/en-emision page=3" className="siguiente">
            »
          </a>
        </ul>
      </div>
      <hr />
      <Footer />
    </>
  );
}
export function Pagina3Emisiones() {
  return (
    <>
      <title>Animekuns - Animes online HD</title>
      <section className="container items-animes">
        <section className="filtrador">
          <h1>
            Filtrador
            <i className="fa-solid fa-filter"></i>
          </h1>

          <Filter />
        </section>
        <div className="list-series">
          <Page3 />
        </div>
      </section>
      <div className="paginacion-contenedor">
        <ul>
          <a href="/en-emision page=2" className="anterior">
            «
          </a>
          <li>
            <a href="/en-emision">1</a>
          </li>
          <li>
            <a href="/en-emision page=2">2</a>
          </li>
          <li className="active">
            <a href="/en-emision page=3">3</a>
          </li>
          <li>
            <a href="/en-emision page=4">4</a>
          </li>
          <li>
            <a href="/en-emision page=5">5</a>
          </li>
          <li>
            <a href="/en-emision page=6">6</a>
          </li>
          <li>
            <a href="/en-emision page=7">7</a>
          </li>
          <a href="/en-emision page=4" className="siguiente">
            »
          </a>
        </ul>
      </div>
      <hr />
      <Footer />
    </>
  );
}
export function Pagina4Emisiones() {
  return (
    <>
      <title>Animekuns - Animes online HD</title>
      <section className="container items-animes">
        <section className="filtrador">
          <h1>
            Filtrador
            <i className="fa-solid fa-filter"></i>
          </h1>

          <Filter />
        </section>
        <div className="list-series">
          <Page4 />
        </div>
      </section>
      <div className="paginacion-contenedor">
        <ul>
          <a href="/en-emision page=3" className="anterior">
            «
          </a>
          <li>
            <a href="/en-emision">1</a>
          </li>
          <li>
            <a href="/en-emision page=2">2</a>
          </li>
          <li>
            <a href="/en-emision page=3">3</a>
          </li>
          <li className="active">
            <a href="/en-emision page=4">4</a>
          </li>
          <li>
            <a href="/en-emision page=5">5</a>
          </li>
          <li>
            <a href="/en-emision page=6">6</a>
          </li>
          <li>
            <a href="/en-emision page=7">7</a>
          </li>
          <a href="/en-emision page=5" className="siguiente">
            »
          </a>
        </ul>
      </div>
      <hr />
      <Footer />
    </>
  );
}
export function Pagina5Emisiones() {
  return (
    <>
      <title>Animekuns - Animes online HD</title>
      <section className="container items-animes">
        <section className="filtrador">
          <h1>
            Filtrador
            <i className="fa-solid fa-filter"></i>
          </h1>

          <Filter />
        </section>
        <div className="list-series">
          <Page5 />
        </div>
      </section>
      <div className="paginacion-contenedor">
        <ul>
          <a href="/en-emision page=4" className="anterior">
            «
          </a>
          <li>
            <a href="/en-emision">1</a>
          </li>
          <li>
            <a href="/en-emision page=2">2</a>
          </li>
          <li>
            <a href="/en-emision page=3">3</a>
          </li>
          <li>
            <a href="/en-emision page=4">4</a>
          </li>
          <li className="active">
            <a href="/en-emision page=5">5</a>
          </li>
          <li>
            <a href="/en-emision page=6">6</a>
          </li>
          <li>
            <a href="/en-emision page=7">7</a>
          </li>

          <a href="/en-emision page=6" className="siguiente">
            »
          </a>
        </ul>
      </div>
      <hr />
      <Footer />
    </>
  );
}
export function Pagina6Emisiones() {
  return (
    <>
      <title>Animekuns - Animes online HD</title>
      <section className="container items-animes">
        <section className="filtrador">
          <h1>
            Filtrador
            <i className="fa-solid fa-filter"></i>
          </h1>

          <Filter />
        </section>
        <div className="list-series">
          <Page6 />
        </div>
      </section>{" "}
      <div className="paginacion-contenedor">
        <ul>
          <a href="/en-emision page=5" className="anterior">
            «
          </a>
          <li>
            <a href="/en-emision">1</a>
          </li>
          <li>
            <a href="/en-emision page=2">2</a>
          </li>
          <li>
            <a href="/en-emision page=3">3</a>
          </li>
          <li>
            <a href="/en-emision page=4">4</a>
          </li>
          <li>
            <a href="/en-emision page=5">5</a>
          </li>
          <li className="active">
            <a href="/en-emision page=6">6</a>
          </li>
          <li>
            <a href="/en-emision page=7">7</a>
          </li>
          <a href="/en-emision page=7" className="siguiente">
            »
          </a>
        </ul>
      </div>
      <hr />
      <Footer />
    </>
  );
}
export function Pagina7Emisiones() {
  return (
    <>
      <title>Animekuns - Animes online HD</title>
      <section className="container items-animes">
        <section className="filtrador">
          <h1>
            Filtrador
            <i className="fa-solid fa-filter"></i>
          </h1>

          <Filter />
        </section>
        <div className="list-series">
          <Page7 />
        </div>
      </section>
      <div className="paginacion-contenedor">
        <ul>
          <a href="/en-emision page=6" className="anterior">
            «
          </a>
          <li>
            <a href="/en-emision">1</a>
          </li>
          <li>
            <a href="/en-emision page=2">2</a>
          </li>
          <li>
            <a href="/en-emision page=3">3</a>
          </li>
          <li>
            <a href="/en-emision page=4">4</a>
          </li>
          <li>
            <a href="/en-emision page=5">5</a>
          </li>
          <li>
            <a href="/en-emision page=6">6</a>
          </li>
          <li className="active">
            <a href="/en-emision page=7">7</a>
          </li>
        </ul>
      </div>
      <hr />
      <Footer />
    </>
  );
}