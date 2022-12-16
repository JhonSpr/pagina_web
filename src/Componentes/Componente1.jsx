/* eslint-disable jsx-a11y/anchor-is-valid */
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import AnimePage1 from "../pages/AnimePage1";

export function Page1() {
  return (
    <>
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
                <a className="dropdown-item" href="/emisiones">
                  EN EMISIÓN
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/proximos">
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
          <AnimePage1 />
        </div>
      </section>

      <div className="paginacion-contenedor">
        <ul>
          <ButtonToolbar
            className="mb-3"
            aria-label="Toolbar with Button groups"
          >
            <ButtonGroup className="me-2" aria-label="First group">
              <a variant="secondary">1</a> <a variant="secondary">2</a>{" "}
              <a variant="secondary">3</a> <a variant="secondary">4</a>
            </ButtonGroup>
          </ButtonToolbar>
          <li className="active">
            <a href="/animes">1</a>
          </li>
          <li className="paginacion">
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

          <a href="/animes page=2" className="siguiente">
            Siguiente
          </a>
        </ul>
      </div>
    </>
  );
}
