/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
import "../css/hovers.css";
import FecthFinalizados from "../fetching/fecthFinalizados";

export function PageAnime() {
  return (
    <>
      <title>Animekuns - Ver Anime Online HD</title>
      <section className="container items-animes">
        <div className="list-series">
          <FecthFinalizados />
        </div>
      </section>
    </>
  );
}
