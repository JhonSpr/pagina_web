import { Filter } from "../Componentes/Elements/Filter";

export function EnEmisionPage1() {
  return (
    <div>
      <title>Animes Gratis Online HD</title>

      <section className="container items-animes">
        <section className="filtrador">
          <h1>
            Filtrador
            <i className="fa-solid fa-filter"></i>
          </h1>

          <Filter />
        </section>
        <div className="list-series"></div>
      </section>

      <div className="paginacion-contenedor">
        <ul>
          <li className="active">
            <a href="/en-emision">1</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
