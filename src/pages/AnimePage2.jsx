import React from "react";
import Animes from "../Colletion/animes";
import data from "../Json/Data.json";

export default function AnimePage2() {
  return data.slice(25, 50).map((tv) => {
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
