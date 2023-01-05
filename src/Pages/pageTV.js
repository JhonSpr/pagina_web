/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
import { useEffect, useState } from "react";
import "../css/hovers.css";
import "../css/Pagination.css";
import {
  FecthTV2,
  FecthTV3,
  FecthTV4,
  FecthTV5,
  FecthTV6,
  FecthTV7,
} from "../fetching/fecthTV";

export function PageTV() {
  const [data, setData] = useState([]);
  const [showPagination, setShowPagination] = useState(false);

  const [palabra, setPalabra] = useState("");
  const buscar = (e) => {
    setPalabra(e.target.value);
    if (
      data.length === 25 ||
      data.length === 24 ||
      data.length === 23 ||
      data.length === 22 ||
      data.length === 21 ||
      data.length === 20 ||
      data.length === 19 ||
      data.length === 18 ||
      data.length === 17 ||
      data.length === 16 ||
      data.length === 15 ||
      data.length === 14 ||
      data.length === 13 ||
      data.length === 12 ||
      data.length === 11 ||
      data.length === 10 ||
      data.length === 9 ||
      data.length === 8 ||
      data.length === 7 ||
      data.length === 6 ||
      data.length === 5 ||
      data.length === 4 ||
      data.length === 3 ||
      data.length === 2 ||
      data.length === 1
    ) {
      setShowPagination(true);
    } else {
      setShowPagination(false);
    }
  };
  useEffect(() => {
    fetch(
      `https://api-rest.up.railway.app/api/v1/workouts?name=` +
        palabra.toLowerCase()
    )
      .then((response) => response.json())

      .then((json) => setData(json))

      .catch((err) => console.log("Solicitud fallida", err));
    console.log(data);
  }, [palabra]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <title>Animekuns - Ver Anime Online HD</title>

      <section className="container items-animes">
        <div className="list-series">
          <section className="container items-animes container_search">
            <form action="/">
              <input
                type="text"
                placeholder="Buscar un anime..."
                onChange={buscar}
                value={palabra}
                id="search-page-anime"
              />
            </form>
          </section>
          {data.slice(0, 25).map((data) => (
            <article className="serie-card" title={data.name} key={data.id}>
              <figure className="image overarchingdiv2">
                <a href={data.link}>
                  <img src={data.image} alt={data.name} />
                  <div className="overlay-dark"></div>
                  <div className="hoveroverlay">
                    <i className="fas fa-play pgnav activehov"></i>
                  </div>
                </a>
                <span className="tag year is-dark">{data.year}</span>
                <span className="tag is-danger type">TV</span>
                <span className={data.classEstado}>{data.estado}</span>
                <div className="title">
                  <h3>
                    <a
                      href={data.link}
                      className="has-text-orange has-text-weight-semibold has-text-centered is-size-6"
                    >
                      {data.name}
                    </a>
                  </h3>
                </div>
              </figure>
            </article>
          ))}
        </div>
        {showPagination ? (
          <nav aria-label="Page navigation example">
            <ul className="pagination">
              <li className="page-item active">
                <a className="page-link">1</a>
              </li>
            </ul>
          </nav>
        ) : (
          <>
            <nav aria-label="Page navigation example">
              <ul className="pagination">
                <li className="page-item">
                  <a
                    className="page-link disable"
                    href="#"
                    aria-label="Previous"
                  >
                    <span aria-hidden="false">&laquo;</span>
                  </a>
                </li>
                <li className="page-item active">
                  <a className="page-link">1</a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="/animes/tv=page2">
                    2
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="/animes/tv=page3">
                    3
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="/animes/tv=page4">
                    4
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="/animes/tv=page5">
                    5
                  </a>
                </li>
                <li className="page-item">
                  <a
                    className="page-link"
                    href="/animes/tv=page2"
                    aria-label="Next"
                  >
                    <span aria-hidden="true">&raquo;</span>
                  </a>
                </li>
              </ul>
            </nav>
          </>
        )}
      </section>
    </>
  );
}
export function PageTV2() {
  return (
    <>
      <title>Animekuns - Ver Anime Online HD</title>
      <section className="container items-animes">
        <div className="list-series">
          <FecthTV2 />
        </div>
        <nav aria-label="Page navigation example">
          <ul className="pagination">
            <li className="page-item">
              <a className="page-link" href="/animes/tv" aria-label="Previous">
                <span aria-hidden="false">&laquo;</span>
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="/animes/tv">
                1
              </a>
            </li>
            <li className="page-item active">
              <a className="page-link">2</a>
            </li>
            <li className="page-item">
              <a className="page-link" href="/animes/tv=page3">
                3
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="/animes/tv=page4">
                4
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="/animes/tv=page5">
                5
              </a>
            </li>
            <li className="page-item">
              <a
                className="page-link"
                href="/animes/tv=page3"
                aria-label="Next"
              >
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li>
          </ul>
        </nav>
      </section>
    </>
  );
}
export function PageTV3() {
  return (
    <>
      {" "}
      <title>Animekuns - Ver Anime Online HD</title>
      <section className="container items-animes">
        <div className="list-series">
          <FecthTV3 />
        </div>
        <nav aria-label="Page navigation example">
          <ul className="pagination">
            <li className="page-item">
              <a
                className="page-link"
                href="/animes/tv=page2"
                aria-label="Previous"
              >
                <span aria-hidden="false">&laquo;</span>
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="/animes/tv">
                1
              </a>
            </li>
            <li className="page-item ">
              <a className="page-link" href="/animes/tv=page2">
                2
              </a>
            </li>
            <li className="page-item active">
              <a className="page-link">3</a>
            </li>
            <li className="page-item">
              <a className="page-link" href="/animes/tv=page4">
                4
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="/animes/tv=page5">
                5
              </a>
            </li>
            <li className="page-item">
              <a
                className="page-link"
                href="/animes/tv=page4"
                aria-label="Next"
              >
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li>
          </ul>
        </nav>
      </section>
    </>
  );
}
export function PageTV4() {
  return (
    <>
      {" "}
      <title>Animekuns - Ver Anime Online HD</title>
      <section className="container items-animes">
        <div className="list-series">
          <FecthTV4 />
        </div>
        <nav aria-label="Page navigation example">
          <ul className="pagination">
            <li className="page-item">
              <a
                className="page-link"
                href="/animes/tv=page3"
                aria-label="Previous"
              >
                <span aria-hidden="false">&laquo;</span>
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="/animes/tv">
                1
              </a>
            </li>
            <li className="page-item ">
              <a className="page-link" href="/animes/tv=page2">
                2
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="/animes/tv=page3">
                3
              </a>
            </li>
            <li className="page-item active">
              <a className="page-link">4</a>
            </li>
            <li className="page-item">
              <a className="page-link" href="/animes/tv=page5">
                5
              </a>
            </li>
            <li className="page-item">
              <a
                className="page-link"
                href="/animes/tv=page5"
                aria-label="Next"
              >
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li>
          </ul>
        </nav>
      </section>
    </>
  );
}
export function PageTV5() {
  return (
    <>
      {" "}
      <title>Animekuns - Ver Anime Online HD</title>
      <section className="container items-animes">
        <div className="list-series">
          <FecthTV5 />
        </div>
        <nav aria-label="Page navigation example">
          <ul className="pagination">
            <li className="page-item">
              <a
                className="page-link"
                href="/animes/tv=page4"
                aria-label="Previous"
              >
                <span aria-hidden="false">&laquo;</span>
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="/animes/tv">
                1
              </a>
            </li>
            <li className="page-item ">
              <a className="page-link" href="/animes/tv=page2">
                2
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="/animes/tv=page3">
                3
              </a>
            </li>
            <li className="page-item ">
              <a className="page-link" href="/animes/tv=page4">
                4
              </a>
            </li>
            <li className="page-item active">
              <a className="page-link" href="/animes/tv=page5">
                5
              </a>
            </li>
            <li className="page-item">
              <a
                className="page-link"
                href="/animes/tv=page6"
                aria-label="Next"
              >
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li>
          </ul>
        </nav>
      </section>
    </>
  );
}
export function PageTV6() {
  return (
    <>
      {" "}
      <title>Animekuns - Ver Anime Online HD</title>
      <section className="container items-animes">
        <div className="list-series">
          <FecthTV6 />
        </div>
        <nav aria-label="Page navigation example">
          <ul className="pagination">
            <li className="page-item">
              <a
                className="page-link"
                href="/animes/tv=page5"
                aria-label="Previous"
              >
                <span aria-hidden="false">&laquo;</span>
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="/animes/tv">
                1
              </a>
            </li>
            <li className="page-item ">
              <a className="page-link" href="/animes/tv=page3">
                3
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="/animes/tv=page4">
                4
              </a>
            </li>
            <li className="page-item ">
              <a className="page-link" href="/animes/tv=page5">
                5
              </a>
            </li>
            <li className="page-item active">
              <a className="page-link">6</a>
            </li>
            <li className="page-item ">
              <a className="page-link" href="/animes/tv=page7">
                7
              </a>
            </li>
            <li className="page-item">
              <a
                className="page-link"
                href="/animes/tv=page7"
                aria-label="Next"
              >
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li>
          </ul>
        </nav>
      </section>
    </>
  );
}
export function PageTV7() {
  return (
    <>
      {" "}
      <title>Animekuns - Ver Anime Online HD</title>
      <section className="container items-animes">
        <div className="list-series">
          <FecthTV7 />
        </div>
        <nav aria-label="Page navigation example">
          <ul className="pagination">
            <li className="page-item">
              <a
                className="page-link"
                href="/animes/tv=page6"
                aria-label="Previous"
              >
                <span aria-hidden="false">&laquo;</span>
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="/animes/tv">
                1
              </a>
            </li>
            <li className="page-item ">
              <a className="page-link" href="/animes/tv=page4">
                4
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="/animes/tv=page5">
                5
              </a>
            </li>
            <li className="page-item ">
              <a className="page-link" href="/animes/tv=page6">
                6
              </a>
            </li>
            <li className="page-item active">
              <a className="page-link">7</a>
            </li>
            <li className="page-item disable">
              <a
                className="page-link"
                href="/animes/tv=page8"
                aria-label="Next"
              >
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li>
          </ul>
        </nav>
      </section>
    </>
  );
}
