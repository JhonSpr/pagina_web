/* eslint-disable no-unused-vars */

import { useState } from "react";
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
} from "./Elements/Paginas";
import { Pagination } from "./Elements/Pagination";

export function Pagina1() {
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
        link1={"/animes"}
        link2={"/animes page=2"}
        link3={"/animes page=3"}
        link4={"/animes page=4"}
        link5={"/animes page=5"}
        link6={"/animes page=6"}
        link7={"/animes page=7"}
        linkNext={"/animes page=2"}
        active1="active"
      />
      <hr />
      <Footer />
    </>
  );
}
export function Pagina2() {
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
        </div>
      </section>
      <Pagination
        linkBefore={"/animes"}
        link1={"/animes"}
        link2={"/animes page=2"}
        link3={"/animes page=3"}
        link4={"/animes page=4"}
        link5={"/animes page=5"}
        link6={"/animes page=6"}
        link7={"/animes page=7"}
        linkNext={"/animes page=3"}
        active2="active"
      />
      <hr />
      <Footer />
    </>
  );
}
export function Pagina3() {
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
        linkBefore={"/animes page=2"}
        link1={"/animes"}
        link2={"/animes page=2"}
        link3={"/animes page=3"}
        link4={"/animes page=4"}
        link5={"/animes page=5"}
        link6={"/animes page=6"}
        link7={"/animes page=7"}
        linkNext={"/animes page=4"}
        active3="active"
      />
      <hr />
      <Footer />
    </>
  );
}
export function Pagina4() {
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
        linkBefore={"/animes page=3"}
        link1={"/animes"}
        link2={"/animes page=2"}
        link3={"/animes page=3"}
        link4={"/animes page=4"}
        link5={"/animes page=5"}
        link6={"/animes page=6"}
        link7={"/animes page=7"}
        linkNext={"/animes page=5"}
        active4="active"
      />
      <hr />
      <Footer />
    </>
  );
}
export function Pagina5() {
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
        linkBefore={"/animes page=4"}
        link1={"/animes"}
        link2={"/animes page=2"}
        link3={"/animes page=3"}
        link4={"/animes page=4"}
        link5={"/animes page=5"}
        link6={"/animes page=6"}
        link7={"/animes page=7"}
        linkNext={"/animes page=6"}
        active5="active"
      />
      <hr />
      <Footer />
    </>
  );
}
export function Pagina6() {
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
        linkBefore={"/animes page=5"}
        link1={"/animes"}
        link2={"/animes page=2"}
        link3={"/animes page=3"}
        link4={"/animes page=4"}
        link5={"/animes page=5"}
        link6={"/animes page=6"}
        link7={"/animes page=7"}
        linkNext={"/animes page=7"}
        active6="active"
      />
      <hr />
      <Footer />
    </>
  );
}
export function Pagina7() {
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
      <Pagination
        linkBefore={"/animes page=6"}
        link1={"/animes"}
        link2={"/animes page=2"}
        link3={"/animes page=3"}
        link4={"/animes page=4"}
        link5={"/animes page=5"}
        link6={"/animes page=6"}
        link7={"/animes page=7"}
        classNameNext={"disable"}
        active7="active"
      />
      <hr />
      <Footer />
    </>
  );
}
