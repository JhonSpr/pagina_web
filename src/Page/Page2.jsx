import { Filter } from "../Componentes/Elements/Filter";
import AnimePage2 from "../pages/AnimePage2";

export function Page2() {
  return (
    <div>
      <title>Animekuns - Anime Online HD</title>

      <section className="container items-animes">
        <section className="filtrador">
          <h1>
            Filtrador
            <i className="fa-solid fa-filter"></i>
          </h1>

          <Filter />
        </section>
        <div className="list-series">
          <AnimePage2 />
        </div>
      </section>

      <div className="paginacion-contenedor">
        <ul>
          <a href="/animes" className="anterior">
            «
          </a>
          <li className="paginacion">
            <a href="/animes">1</a>
          </li>
          <li className="active">
            <a href="/animes page=2">2</a>
          </li>
          <li className="paginacion">
            <a href="/animes page=3">3</a>
          </li>
          <li className="paginacion">
            <a href="/animes page=4">4</a>
          </li>
          <li className="paginacion">
            <a href="/animes page=5">5</a>
          </li>
          <li className="paginacion">
            <a href="/animes page=6">6</a>
          </li>
          <li className="paginacion">
            <a href="/animes page=7">7</a>
          </li>

          <a href="/animes page=3" className="siguiente">
            »
          </a>
        </ul>
      </div>
    </div>
  );
}
