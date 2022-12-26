import React from "react";
import { Route, Routes } from "react-router-dom";

export function Ver() {
  return (
    <>
      <Routes>
        <Route path="/ver" element={<h2>UPS NO SE ENCONTRO LA PAGINA</h2>} />
      </Routes>
      <div className="container contenedor-NoFound">
        <title>
          Pagina No Encontrada <i class="fa-solid fa-triangle-exclamation"></i>{" "}
        </title>
        <h1 className="Title-NoFound">
          <i class="fa-solid fa-triangle-exclamation"></i> Asegurate que el
          anime buscado esta correctamente escrito{" "}
          <i class="fa-solid fa-triangle-exclamation"></i>
        </h1>
        <a href="/" className="button is-orange">
          Volver Al Inicio
        </a>
      </div>
    </>
  );
}
