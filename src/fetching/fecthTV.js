/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState, React } from "react";

export function FecthTV2() {
  const [data, setData] = useState([]);
  const [palabra, setPalabra] = useState("");

  useEffect(() => {
    fetch(`https://api-rest.up.railway.app/api/v1/workouts?name=`)
      .then((response) => response.json())

      .then((json) => setData(json))

      .catch((err) => console.log("Solicitud fallida", err));
    console.log(data);
  }, [setData]);

  return (
    <>
      {data.slice(25, 50).map((data) => (
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
export function FecthTV3() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://api-rest.up.railway.app/api/v1/workouts?name=`)
      .then((response) => response.json())

      .then((json) => setData(json))

      .catch((err) => console.log("Solicitud fallida", err));
    console.log(data);
  }, [setData]);

  return (
    <>
      {data.slice(50, 75).map((data) => (
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
export function FecthTV4() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://api-rest.up.railway.app/api/v1/workouts?name=`)
      .then((response) => response.json())

      .then((json) => setData(json))

      .catch((err) => console.log("Solicitud fallida", err));
    console.log(data);
  }, [setData]);

  return (
    <>
      {data.slice(75, 100).map((data) => (
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
export function FecthTV5() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://api-rest.up.railway.app/api/v1/workouts?name=`)
      .then((response) => response.json())

      .then((json) => setData(json))

      .catch((err) => console.log("Solicitud fallida", err));
    console.log(data);
  }, [setData]);

  return (
    <>
      {data.slice(100, 125).map((data) => (
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
export function FecthTV6() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://api-rest.up.railway.app/api/v1/workouts?name=`)
      .then((response) => response.json())

      .then((json) => setData(json))

      .catch((err) => console.log("Solicitud fallida", err));
    console.log(data);
  }, [setData]);

  return (
    <>
      {data.slice(125, 150).map((data) => (
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
export function FecthTV7() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://api-rest.up.railway.app/api/v1/workouts?name=`)
      .then((response) => response.json())

      .then((json) => setData(json))

      .catch((err) => console.log("Solicitud fallida", err));
    console.log(data);
  }, [setData]);

  return (
    <>
      {data.slice(150, 175).map((data) => (
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
