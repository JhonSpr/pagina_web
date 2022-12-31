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
} from "./Elements/Paginas_Finalizados";
import { Pagination } from "./Elements/Pagination";

export function Pagina1Finalizados() {
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
      <Pagination
        classNameBefore={"disable"}
        link1={"/finalizados "}
        link2={"/finalizados page=2"}
        link3={"/finalizados page=3"}
        link4={"/finalizados page=4"}
        link5={"/finalizados page=5"}
        link6={"/finalizados page=6"}
        link7={"/finalizados page=7"}
        linkNext={"/finalizados page=2"}
        active1="active"
        active7="disable"
      />
      <hr />
      <Footer />
    </>
  );
}
export function Pagina2Finalizados() {
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
      <Pagination
        linkBefore={"/finalizados"}
        link1={"/finalizados "}
        link2={"/finalizados page=2"}
        link3={"/finalizados page=3"}
        link4={"/finalizados page=4"}
        link5={"/finalizados page=5"}
        link6={"/finalizados page=6"}
        link7={"/finalizados page=7"}
        linkNext={"/finalizados page=3"}
        active2="active"
        active7="disable"
      />
      <hr />
      <Footer />
    </>
  );
}
export function Pagina3Finalizados() {
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
      <Pagination
        linkBefore={"/finalizados page=2"}
        link1={"/finalizados "}
        link2={"/finalizados page=2"}
        link3={"/finalizados page=3"}
        link4={"/finalizados page=4"}
        link5={"/finalizados page=5"}
        link6={"/finalizados page=6"}
        link7={"/finalizados page=7"}
        linkNext={"/finalizados page=4"}
        active3="active"
        active7="disable"
      />
      <hr />
      <Footer />
    </>
  );
}
export function Pagina4Finalizados() {
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
      <Pagination
        linkBefore={"/finalizados page=3"}
        classNameBefore={"anterior"}
        link1={"/finalizados "}
        link2={"/finalizados page=2"}
        link3={"/finalizados page=3"}
        link4={"/finalizados page=4"}
        link5={"/finalizados page=5"}
        link6={"/finalizados page=6"}
        link7={"/finalizados page=7"}
        classNameNext={"siguiente"}
        linkNext={"/finalizados page=5"}
        active4="active"
        active7="disable"
      />
      <hr />
      <Footer />
    </>
  );
}
export function Pagina5Finalizados() {
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
      <Pagination
        linkBefore={"/finalizados page=4"}
        classNameBefore={"anterior"}
        link1={"/finalizados "}
        link2={"/finalizados page=2"}
        link3={"/finalizados page=3"}
        link4={"/finalizados page=4"}
        link5={"/finalizados page=5"}
        link6={"/finalizados page=6"}
        link7={"/finalizados page=7"}
        classNameNext={"siguiente"}
        linkNext={"/finalizados page=5"}
        active5="active"
        active7="disable"
      />
      <hr />
      <Footer />
    </>
  );
}
export function Pagina6Finalizados() {
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
      <Pagination
        linkBefore={"/finalizados page=5"}
        classNameBefore={"anterior"}
        link1={"/finalizados "}
        link2={"/finalizados page=2"}
        link3={"/finalizados page=3"}
        link4={"/finalizados page=4"}
        link5={"/finalizados page=5"}
        link6={"/finalizados page=6"}
        link7={"/finalizados page=7"}
        classNameNext={"disable"}
        linkNext={"/finalizados page=7"}
        active6="active"
        active7={"disable"}
      />
      <hr />
      <Footer />
    </>
  );
}
export function Pagina7Finalizados() {
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
          <a href="/finalizados page=6" className="anterior">
            «
          </a>
          <li>
            <a href="/finalizados">1</a>
          </li>
          <li>
            <a href="/finalizados page=2">2</a>
          </li>
          <li>
            <a href="/finalizados page=3">3</a>
          </li>
          <li>
            <a href="/finalizados page=4">4</a>
          </li>
          <li>
            <a href="/finalizados page=5">5</a>
          </li>
          <li>
            <a href="/finalizados page=6">6</a>
          </li>
          <li className="active">
            <a href="/finalizados page=7">7</a>
          </li>
        </ul>
      </div>
      <hr />
      <Footer />
    </>
  );
}
