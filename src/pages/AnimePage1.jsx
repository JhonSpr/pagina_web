import React from "react";
import data from "../Json/Data.json";
import emisiones from "../Json/EnEmision.json";
import proximos from "../Json/Proximamente.json";
import Animes from "../Colletion/animes";
export default function AnimePage1() {
  return data.slice(0, 25).map((tv) => {
    return (
      <Animes
        title={tv.title}
        year={tv.year}
        estado={tv.estado}
        classEstado={tv.classEstado}
        img={tv.img}
        link={tv.link}
      />
    );
  });
}
export function Emision1() {
  return emisiones.slice(0, 24).map((tv) => {
    return (
      <Animes
        title={tv.title}
        year={tv.year}
        estado={tv.estado}
        classEstado={tv.classEstado}
        img={tv.img}
        link={tv.link}
      />
    );
  });
}

export function Proximos() {
  return proximos.slice(0, 24).map((tv) => {
    return (
      <Animes
        title={tv.title}
        year={tv.year}
        estado={tv.estado}
        classEstado={tv.classEstado}
        img={tv.img}
        link={tv.link}
      />
    );
  });
}
