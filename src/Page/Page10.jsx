import AnimePage10 from "../pages/AnimePage10";

export function Page10() {
  return (
    <div>
      <title>Animes Gratis Online HD</title>

      <section className="container items-animes">
        <section className="filtrador">
          <h1>
            Filtrador
            <i className="fa-solid fa-filter"></i>
          </h1>

          <div className="dropdown filter-item">
            <div
              className="btn btn-secondary dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Estado
            </div>
            <ul className="dropdown-menu dropdown-menu-dark">
              <li>
                <a className="dropdown-item" href="/en-emision">
                  EN EMISIÓN
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/proximamente">
                  PROXIMAMENTE
                </a>
              </li>
            </ul>
          </div>
          <div className="dropdown filter-item">
            <div
              className="btn btn-secondary dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Tipo
            </div>
            <ul className="dropdown-menu dropdown-menu-dark">
              <li>
                <a className="dropdown-item active" href="/animes">
                  TV ( Predeterminado )
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/animes type[]=ova">
                  OVA
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/animes type[]=pelicula">
                  PELICULA
                </a>
              </li>
            </ul>
          </div>
        </section>
        <div className="list-series">
          <AnimePage10 />
        </div>
      </section>

      <div className="paginacion-contenedor">
        <ul>
          <a href="/animes-page=9" className="anterior">
            «
          </a>
          <li>
            <a href="/animes">1</a>
          </li>
          <li>
            <a href="/animes page=2">2</a>
          </li>
          <li>
            <a href="/animes page=3">3</a>
          </li>
          <li>
            <a href="/animes page=4">4</a>
          </li>
          <li>
            <a href="/animes page=5">5</a>
          </li>
          <li>
            <a href="/animes page=6">6</a>
          </li>
          <li>
            <a href="/animes page=7">7</a>
          </li>
          <li>
            <a href="/animes page=8">8</a>
          </li>
          <li>
            <a href="/animes page=9">9</a>
          </li>
          <li className="active">
            <a href="/animes page=10">10</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
