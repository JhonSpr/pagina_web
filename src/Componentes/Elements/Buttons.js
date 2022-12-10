import React, { useState } from "react";
import { Disqus } from "../disqus";

export default function Button() {
  /*Estado para mostrar u ocultar*/
  const [mostrarComponente, setMostrarComponente] = useState(true);
  return (
    <>
      {/*Con un estado adicional le dicen cuando mostrarse o no*/}
      <button
        className="button.is-orange"
        onClick={() => setMostrarComponente(!mostrarComponente)}
      >
        {/*Aqui solo cambio el texto de mi boton, para el ejemplo */}
        {mostrarComponente ? `Ocultar` : `Mostrar`}
      </button>
      <div className={mostrarComponente ? "show-element" : <Disqus />}>
        {mostrarComponente && <Disqus />}
      </div>
    </>
  );
}
