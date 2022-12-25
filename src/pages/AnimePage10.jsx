import React from "react";
import data from "../Json/Data.json";
import Animes from "../Colletion/animes";

export default function AnimePage10() {
  return data.slice(225, 250).map((tv) => {
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
