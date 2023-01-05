/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
import "../css/App.css";
import "../css/hovers.css";
import FecthEmisiones from "../fetching/fecthEmisiones";

export function PageEmisiones() {
  return (
    <>
      <title>Animekuns - Ver Anime Online HD</title>
      <section className="container items-animes">
        <div className="list-series">
          <FecthEmisiones />
        </div>
      </section>
    </>
  );
}
