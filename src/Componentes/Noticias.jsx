import RecienAgregados from "../Json/Data.json";
import Animes from "../Colletion/animes";
export function Agregados() {
  return RecienAgregados.slice(130, 160).map((tv) => {
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
