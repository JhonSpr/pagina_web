/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState, React } from "react";

export default function FecthEmisiones() {
  const [data, setData] = useState([]);
  const [palabra, setPalabra] = useState("");
  const buscar = (e) => {
    setPalabra(e.target.value);
  };
  useEffect(() => {
    fetch(
      `https://api-rest.up.railway.app/api/v1/emisiones?name=` +
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
    </>
  );
}
export function FecthEmisionesHome() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://api-rest.up.railway.app/api/v1/emisiones?name=`)
      .then((response) => response.json())

      .then((json) => setData(json))

      .catch((err) => console.log("Solicitud fallida", err));
    console.log(data);
  }, [setData]);

  return (
    <>
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
    </>
  );
}
