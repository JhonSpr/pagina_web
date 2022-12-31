import Slider from "react-slick";

import React, { useEffect, useState } from "react";

export default function Scroll() {
  const settings = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 100,
    swipeToSlide: true,
    autoplaySpeed: 3000,
    touchMove: true,
    cssEase: "linear",
    PauseOnHover: true,
    swipe: true,
    draggable: true,
    pauseOnDotsHover: true,
    pauseOnFocus: true,
    useTransform: true,
    slidesPerRow: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const URL = `https://api-rest.up.railway.app/api/v1/emisiones`;
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
    <div style={{ marginTop: "10px", marginLeft: "auto", marginRight: "auto" }}>
      <Slider {...settings}>
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
      </Slider>
    </div>
  );
}
