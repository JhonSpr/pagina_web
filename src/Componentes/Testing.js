/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useEffect } from "react";

const Page1 = () => {
  const [wordEntered, setWordEntered] = useState("");
  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    if (searchWord === "") {
      wordEntered([]);
    }
  };

  const URL = `https://api-rest.up.railway.app/api/v1/workouts?name=${wordEntered.toLowerCase()}`;
  const [info, setInfo] = useState([]);

  useEffect(() => {
    fetch(URL)
      // Exito
      .then((response) => response.json())
      // convertir a json
      .then((json) => setInfo(json))
      //imprimir los datos en la consola
      .catch((err) => console.log("Solicitud fallida", err)); // CaA
  });

  return (
    <>
      <section className="container items-animes container_search">
        <input
          type="text"
          onChange={handleFilter}
          value={wordEntered}
          className="search_anime"
          placeholder="Buscador de anime"
        />
      </section>
      {info.slice(0, 25).map((data) => (
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
};
const Page2 = () => {
  const URL = `https://api-rest.up.railway.app/api/v1/workouts`;
  const [info, setInfo] = useState([]);
  useEffect(() => {
    fetch(URL)
      // Exito
      .then((response) => response.json()) // convertir a json
      .then((json) => setInfo(json)) //imprimir los datos en la consola
      .catch((err) => console.log("Solicitud fallida", err)); // CaA
  });

  return (
    <>
      {info.slice(25, 50).map((data) => (
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
};
const Page3 = () => {
  const URL = `https://api-rest.up.railway.app/api/v1/workouts`;
  const [info, setInfo] = useState([]);
  useEffect(() => {
    fetch(URL)
      // Exito
      .then((response) => response.json()) // convertir a json
      .then((json) => setInfo(json)) //imprimir los datos en la consola
      .catch((err) => console.log("Solicitud fallida", err)); // CaA
  });

  return (
    <>
      {info.slice(50, 75).map((data) => (
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
};
const Page4 = () => {
  const URL = `https://api-rest.up.railway.app/api/v1/workouts`;
  const [info, setInfo] = useState([]);
  useEffect(() => {
    fetch(URL)
      // Exito
      .then((response) => response.json()) // convertir a json
      .then((json) => setInfo(json)) //imprimir los datos en la consola
      .catch((err) => console.log("Solicitud fallida", err)); // CaA
  });

  return (
    <>
      {info.slice(75, 100).map((data) => (
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
};
const Page5 = () => {
  const URL = `https://api-rest.up.railway.app/api/v1/workouts`;
  const [info, setInfo] = useState([]);
  useEffect(() => {
    fetch(URL)
      // Exito
      .then((response) => response.json()) // convertir a json
      .then((json) => setInfo(json)) //imprimir los datos en la consola
      .catch((err) => console.log("Solicitud fallida", err)); // CaA
  });

  return (
    <>
      {info.slice(100, 125).map((data) => (
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
};
const Page6 = () => {
  const URL = `https://api-rest.up.railway.app/api/v1/workouts`;
  const [info, setInfo] = useState([]);
  useEffect(() => {
    fetch(URL)
      // Exito
      .then((response) => response.json()) // convertir a json
      .then((json) => setInfo(json)) //imprimir los datos en la consola
      .catch((err) => console.log("Solicitud fallida", err)); // CaA
  });

  return (
    <>
      {info.slice(125, 150).map((data) => (
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
};
const Page7 = () => {
  const URL = `https://api-rest.up.railway.app/api/v1/workouts`;
  const [info, setInfo] = useState([]);
  useEffect(() => {
    fetch(URL)
      // Exito
      .then((response) => response.json()) // convertir a json
      .then((json) => setInfo(json)) //imprimir los datos en la consola
      .catch((err) => console.log("Solicitud fallida", err)); // CaA
  });

  return (
    <>
      {info.slice(150, 175).map((data) => (
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
};
export { Page1, Page2, Page3, Page4, Page5, Page6, Page7 };
