import React from "react";
import Animes from "../Colletion/animes";
import data from "../Json/Data.json";

export default function AnimePage8() {
  return data.slice(175, 200).map((tv) => {
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
