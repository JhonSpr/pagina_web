/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";

export default function FecthInicio() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://api-rest.up.railway.app/api/v1/finalizados?name=`)
      .then((response) => response.json())

      .then((json) => setData(json))

      .catch((err) => console.log("Solicitud fallida", err));
    console.log(data);
  }, [setData]);
  return (
    <>
      {data.slice(140, 170).map((data) => (
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
            <span className={data.classEstado}>{data.mode}</span>
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
